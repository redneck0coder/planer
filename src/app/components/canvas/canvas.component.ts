import {AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild} from '@angular/core';
import {CanvasService} from "../../services/canvas.service";
import getCoordinate from "../../shared/helpers/getCoordinate";

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('canvas') canvasElem: ElementRef;

  canvasService = inject(CanvasService);

  ngAfterViewInit() {
    this.initCanvas();
    this.canvasService.animate();
  }

  initCanvas() {
    const canvas = this.canvasElem.nativeElement;
    this.canvasElem.nativeElement.width = window.innerWidth - 30;
    this.canvasElem.nativeElement.height = window.innerHeight - 30;

    this.canvasService.context = canvas.getContext('2d');
    this.canvasService.canvas = canvas;
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    const {x, y} = getCoordinate(event);
    this.canvasService.move(event, x, y);
  }

  @HostListener('mousedown', ['$event'])
  onMouseclick(event: MouseEvent) {
    const {x, y} = getCoordinate(event);
    this.canvasService.mousedown(x, y);
  }

  @HostListener('mouseup')
  onMouseup() {
    this.canvasService.mouseup();
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: any) {
    this.canvasService.wheel(event);
  }


}
