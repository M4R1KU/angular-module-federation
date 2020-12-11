type Scope = unknown;
type Factory = () => any;

type Container = {
  init(shareScope: Scope): void;
  get(module: string): Factory;
};

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope };

/**
 * Loads a remote with the given name an gets the given module from the container.
 * @param remoteEntryUrl url pointing to the remoteEntry.js of the remote
 * @param remoteName name of the remote declared by the remote
 * @param moduleName name of the exposed module
 */
export async function loadRemoteModule<T>(remoteEntryUrl: string, remoteName: string, moduleName: string): Promise<any> {
  await loadRemoteEntry(remoteEntryUrl);
  await loadRemoteEntry(remoteEntryUrl);

  // initialize default scope
  await __webpack_init_sharing__('default');
  // get the remote container from the window
  const container = window[remoteName] as Container;

  // initialize the remote container with the default scope
  container.init(__webpack_share_scopes__.default);
  // get the factory from the container
  const factory = await container.get(moduleName);
  return factory() as T;
}

const loadedModules = {};

/**
 * Loads the remoteEntry file by appending it to the head.
 * @param url url pointing to the remoteEntry.js of the remote
 */
async function loadRemoteEntry(url: string): Promise<void> {
  return new Promise<void>(((resolve, reject) => {

    if (loadedModules[url]) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = url;

    script.onerror = reject;
    script.onload = () => {
      loadedModules[url] = true;
      resolve();
    };
    document.head.appendChild(script);
  }));
}
