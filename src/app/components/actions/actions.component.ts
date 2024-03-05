import {Component, inject} from '@angular/core';
import {CanvasService} from "../../services/canvas.service";

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {

  canvasService= inject(CanvasService);

}
