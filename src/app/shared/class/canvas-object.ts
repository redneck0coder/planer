export class CanvasObject {
  type: string;
  x: number;
  y:number;
  w:number;
  h:number;
  color:string;
  rotate: number;

  selected: boolean;
  active: boolean;

  constructor(
    type: string,
    x:number,
    y:number,
    h:number,
    w:number,
    color?:string,
    rotate?:number
  ) {
    this.type = type || 'rect'
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color || 'blue';
    this.rotate = rotate || 0;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();

    context.fillStyle = this.color;

    if(this.rotate) {
      context.translate(this.x+this.w/2, this.y + this.h/2);
      context.rotate(this.rotate * Math.PI / 180);
      context.translate(-this.x-this.w/2, -this.y - this.h/2);
    }

    // if(this.imagesLoaded[rect.id]) {
    //   this.context.drawImage(this.imagesLoaded[rect.id], rect.x, rect.y, rect.w, rect.h);
    // }

    // this.context.fillRect(rect.x, rect.y, rect.w, rect.h);
    if(this.type === 'rect') {
      context.fillRect(this.x, this.y, this.w, this.h);
    }

    if (this.active) {
      context.lineWidth = 2;
      context.strokeStyle = 'black'
      context.strokeRect(this.x, this.y, this.w, this.h)
    }

    context.restore();
  }

  select() {
    this.selected = !this.selected;
  }

  activate() {
    this.active = !this.active
  }

}
