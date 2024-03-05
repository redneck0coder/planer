import {Component, inject} from '@angular/core';
import {CanvasService} from "../../services/canvas.service";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  canvasService = inject(CanvasService);
  itemService = inject(ItemsService);

}
