import { Injectable } from '@angular/core';


interface Dictionary<T> {
  [Key: string]: T;
}


@Injectable({
  providedIn: 'root'
})



export class CategoryService {

  private categories: Dictionary<string[]> = {

    'kadin': [
      'bermuda',
      'esofman',
      'ev-elbisesi',
      'gecelik',
      'gomlek',
      'kapri',
      'panco',
      'pareo',
      'pijama',
      'sabahlik',
      'sabahlik-set',
      'sort',
      'tayt',
      'tayt-kisa',
      't-shirt',
      'tulum',
      'tunik'
    ],
    'erkek': [
      'bermuda',
      'esofman',
      'kapri',
      'pijama',
      'sabahlik',
      'sort',
      't-shirt'
    ],
    'erkek-cocuk': [
      'bermuda',
      'kapri',
      'pijama',
      'tulum'
    ],
    'kiz-cocuk': [
      'kapri',
      'pijama',
      'sabahlik',
      'sort',
      't-shirt',
      'tunik'
    ],
  };
  // private categories: { [id: string]: [string]; } = {};

  constructor() {


  }

  getCategories() {
    return this.categories;
  }
}
