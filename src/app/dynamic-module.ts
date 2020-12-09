import { Type } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';
import { delayWhen, first, map, switchMap, tap } from 'rxjs/operators';

declare function __webpack_init_sharing__(scope: string): Promise<void>;

declare var __webpack_share_scopes__: any;

export function load(url: string, id: string, moduleName: string): Observable<Type<any>> {
  return loadRemoteEntry(url, id)
    .pipe(
      tap(() => __webpack_init_sharing__('default')),
      tap((module: any) => module.init(__webpack_share_scopes__.default)),
      switchMap((module: any) => from(module.get(moduleName))),
      map((factory: any) => factory())
    );
}

export function loadRemoteEntry(url: string,
                                id: string): Observable<any> {
  const module = document.getElementById(id);

  if (module) {
    return of(window[id]);
  }

  const script = scriptTag(url, id);
  const load$ = fromEvent(script, 'load').pipe(first());
  document.head.appendChild(script);

  return load$.pipe(map(() => window[id]));
}

function scriptTag(url: string, moduleName: string): HTMLScriptElement {
  const script = document.createElement('script');
  script.src = url + 'remoteEntry.js';
  script.id = moduleName;
  return script;
}
