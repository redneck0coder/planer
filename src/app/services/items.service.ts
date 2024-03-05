import { Injectable } from '@angular/core';

interface IItem {
  id: number,
  name: string,
  image: string,
  color?: string
}
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: IItem[] = [
    {id: 1, name: 'Obj 1', image: 'image 1', color: 'red' },
    {id: 2, name: 'Obj 2', image: 'image 2', color: 'green' },
    {id: 3, name: 'Obj 3', image: 'image 3', color: 'yellow' },
    {id: 4, name: 'Obj 4', image: 'image 4', color: 'blue' },
    {id: 5, name: 'Obj 5', image: 'image 5', color: 'pink' },
  ]

  constructor() { }

  getAll() {
    return this.items;
  }

  add(item: IItem) {
    this.items.push(item);
  }

  delete(id: number) {
    return this.items.filter(item => item.id !== id);
  }
}
