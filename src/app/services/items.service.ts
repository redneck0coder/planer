import { Injectable } from '@angular/core';

interface IItem {
  id: number,
  name: string,
  image: string,
  color?: string,
  type?: string
}
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: IItem[] = [
    {id: 1, type: 'rect', name: 'Obj 1', image: 'image 1', color: 'red' },
    {id: 2, type: 'image', name: 'Obj 2', image: '2.jpg', color: '2.jpg' },
    {id: 3, type: 'image', name: 'Obj 3', image: '3.jpg', color: '3.jpg' },
    {id: 4, type: 'image', name: 'Obj 4', image: '4.jpg', color: '4.jpg' },
    {id: 5, type: 'image', name: 'Obj 5', image: '5.jpg', color: '5.jpg' },
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
