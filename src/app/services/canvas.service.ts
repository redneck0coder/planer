import { Injectable } from '@angular/core';
import {CanvasObject} from "../shared/class/canvas-object";

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  canvasObjects: any[] = [];

  rotate: number = 0;

  images = [1,2,3,4,5];
  imagesLoaded: HTMLImageElement[] = [];

  constructor() {
    this.initImages();
  }

  initImages() {
    this.images.map(image => {
      const img = new Image();
      img.src = `../../assets/${image}.jpg`;
      this.imagesLoaded.push(img);
    })
  }

  animate() {
    this.clear();
    this.wheelAnimate();
    this.draw();

    window.requestAnimationFrame(this.animate.bind(this))
  }

  clear() {
    // Рисует края холста, который очищается
    this.context.strokeRect(0,0,this.context.canvas.width, this.context.canvas.height)

    this.context.clearRect(0,0,this.context.canvas.width, this.context.canvas.height)
  }


  draw() {
    this.canvasObjects.forEach(obj => obj.draw(this.context));
  }
  cursorInObject(mouseX: number, mouseY: number, x: number, y: number, w: number, h: number) {
    let xLine = mouseX > x && mouseX < x + w
    let yLine = mouseY > y && mouseY < y + h

    return xLine && yLine
  }

  move(event: MouseEvent, x: number, y: number) {
    this.canvasObjects.forEach(object => {

      if (object.selected) {
        object.x = x - object.w / 2
        object.y = y - object.h / 2
      }

      this.cursorInObject(x,y,object.x, object.y, object.w, object.h)
      ? object.active != true
          ? object.activate() : false
      : object.active = false
    })
  }

  mousedown(x: number, y: number) {
    this.canvasObjects.forEach(object =>{
      if(this.cursorInObject(x,y,object.x, object.y, object.w, object.h)){
        object.select()
      }
    });
  }

  mouseup() {
    this.canvasObjects.forEach(object =>{
      object.selected && object.select()
    });

  }

  wheelAnimate() {

  }

  wheel(event: any) {
    console.log('wheel', event)
    if(this.rotate === 360) {
      this.rotate = 0;
    }

    if(event.deltaY > 0) {
      this.rotate += 5;
    } else if(event.deltaY < 0){
      this.rotate -= 5;
    }


  }

  save() {
    window.location.href = this.canvas
      .toDataURL('image/png')
      .replace("image/png", "image/octet-stream");
  }


  drawRect(id:number ,color='green') {
    this.canvasObjects.push(
      new CanvasObject(
      '',
        Math.floor(Math.random() * this.context.canvas.width),
        Math.floor(Math.random() * this.context.canvas.height),
        100,
        100,
        color
      ));
  }
}
