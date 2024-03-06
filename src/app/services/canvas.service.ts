import { Injectable } from '@angular/core';
import {CanvasObject} from "../shared/class/canvas-object";
import cursorInObject from "../shared/helpers/cursorInObject";

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  canvasObjects: any[] = [];

  cellSize: number = 10;

  // Scale
  scaleStep: number = 0.1;
  scale: number = 1;
  lastScale: number = this.scale;

  maxScale: number = 10;
  minScale: number = 1;


  constructor() {
  }

  animate() {
    this.clear();
    this.drawGrid();
    this.draw();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  clear() {
    // Рисует края холста, который очищается
    this.context.strokeRect(0,0,this.context.canvas.width, this.context.canvas.height);

    this.context.clearRect(0,0,this.context.canvas.width, this.context.canvas.height);
  }

  draw() {
    this.canvasObjects.forEach(obj => obj.draw(this.context));
  }

  drawGrid() {
    this.context.save();
    this.context.lineWidth = 1;
    this.context.strokeStyle = '#e6e6e6';
    // this.context.scale(4, 4);

    this.context.translate(-0.5, -0.5);

    this.context.beginPath();

    let scaledCellSize = this.cellSize * this.scale;

    for (let lx = 0; lx <= this.context.canvas.width; lx += scaledCellSize) {
      this.context.moveTo(lx, 0);
      this.context.lineTo(lx, this.context.canvas.height);
    }

    for (let ly = 0; ly <= this.context.canvas.height; ly += scaledCellSize) {
      this.context.moveTo(0, ly);
      this.context.lineTo(this.context.canvas.width, ly);
    }

    this.context.stroke();
    this.context.closePath();
    this.context.restore();
  }

  move(event: MouseEvent, x: number, y: number) {
    this.canvasObjects.forEach(object => {

      if (object.selected) {
        object.x = x - object.w / 2
        object.y = y - object.h / 2
      }

      cursorInObject(x,y,object.x, object.y, object.w, object.h)
      ? object.active != true
          ? object.activate() : false
      : object.active = false
    })
  }

  mousedown(x: number, y: number) {
    this.canvasObjects.forEach(object =>{
      if(cursorInObject(x,y,object.x, object.y, object.w, object.h)){
        object.select()
      }
    });
  }

  mouseup() {
    this.canvasObjects.forEach(object =>{
      object.selected && object.select()
    });

  }

  wheel(event: any) {
    this.canvasObjects.forEach(object => {
      if(object.active) {
        if(event.deltaY > 0) {
          object.rotate += 5;
        } else if(event.deltaY < 0) {
          object.rotate -= 5;
        }
      }
    });

    this.zoom(event.deltaY > 0 ? -1 : 1)
  }

  zoom(amt: number) {
    this.lastScale = this.scale;
    this.scale += amt * this.scaleStep;

    if (this.scale < this.minScale) {
      this.scale = this.minScale;
    }

    if (this.scale > this.maxScale) {
      this.scale = this.maxScale;
    }
  }

  save() {
    window.location.href = this.canvas
      .toDataURL('image/png')
      .replace("image/png", "image/octet-stream");
  }


  drawRect(id:number ,color='green', type = 'rect') {
    this.canvasObjects.push(
      new CanvasObject(
      type,
        this.context.canvas.width / 2,
        this.context.canvas.height / 2,
        100,
        100,
        color
      ));
  }
}
