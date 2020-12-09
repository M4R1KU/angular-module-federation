import { Injectable } from '@angular/core';

export interface Cathedral {
  id: string;
  title: string;
  subtitle: string;
  avatar: string;
  image: string;
  description: string;
}

@Injectable()
export class CathedralService {
  public read(): Array<Cathedral> {
    return [
      {
        id: 'bern_minster',
        title: 'Bern Minster',
        subtitle: 'Cathedral in Bern, Switzerland',
        avatar: '/assets/muenster_bern_small.jpg',
        image: '/assets/muenster_bern.jpg',
        description: 'Bern Minster (German: Berner Münster) is a Swiss Reformed cathedral, (or minster) in the old city of Bern, Switzerland. Built in the Gothic style, its construction started in 1421. Its tower, with a height of 100.6 m (330 ft), was only completed in 1893. It is the tallest cathedral in Switzerland and is a Cultural Property of National Significance.'
      },
      {
        id: 'great_minster',
        title: 'Grossmünster',
        subtitle: 'Grossmünster in Zurich, Switzerland',
        avatar: '/assets/gross_muenster_zuerich_small.jpg',
        image: '/assets/gross_muenster_zuerich.jpg',
        description: 'The Grossmünster, also spelled Großmünster, (German pronunciation: [ɡʁoːsˈmʏnstɐ]; "great minster") is a Romanesque-style Protestant church in Zürich, Switzerland. It is one of the four major churches in the city (the others being the Fraumünster, Predigerkirche and St. Peterskirche). Its congregation forms part of the Evangelical Reformed Church of the Canton of Zürich. The core of the present building near the banks of the Limmat was constructed on the site of a Carolingian church, which was, according to legend, originally commissioned by Charlemagne. Construction of the present structure commenced around 1100 and it was inaugurated around 1220.'
      }
    ];
  }
}
