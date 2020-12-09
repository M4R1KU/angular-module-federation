import { Component, } from '@angular/core';

export interface City {
  city: string;
  population: number;
  canton: string;
}

const ELEMENT_DATA: Array<City> = [
  {
    city: 'Zürich',
    canton: 'Zürich',
    population: 434008
  },
  {
    city: 'Geneva',
    canton: 'Geneva',
    population: 201818
  },
  {
    city: 'Basel',
    canton: 'Basel-Stadt',
    population: 177595
  },
  {
    city: 'Lausanne',
    canton: 'Vaud',
    population: 138905
  },
  {
    city: 'Bern',
    canton: 'Bern',
    population: 133798
  },
  {
    city: 'Winterthur',
    canton: 'Zürich',
    population: 109775
  },
  {
    city: 'Lucerne',
    canton: 'Luzern',
    population: 81691
  },
  {
    city: 'Sankt Gallen',
    canton: 'Sankt Gallen',
    population: 75833
  },
  {
    city: 'Lugano',
    canton: 'Ticino',
    population: 63185
  },
  {
    city: 'Biel/Bienne',
    canton: 'Bern',
    population: 54456
  },
  {
    city: 'Thun',
    canton: 'Bern',
    population: 43743
  },
  {
    city: 'Bellinzona',
    canton: 'Ticino',
    population: 43220
  }
];

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.scss']
})
export class CityTableComponent {
  displayedColumns: string[] = ['city', 'canton', 'population'];
  dataSource = ELEMENT_DATA;
}
