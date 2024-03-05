import { Component } from '@angular/core';
import {CanvasComponent} from "../../components/canvas/canvas.component";
import {ListComponent} from "../../components/list/list.component";
import {ActionsComponent} from "../../components/actions/actions.component";

@Component({
  selector: 'app-work-place',
  standalone: true,
  imports: [
    CanvasComponent,
    ListComponent,
    ActionsComponent
  ],
  templateUrl: './work-place.component.html',
  styleUrl: './work-place.component.scss'
})
export class WorkPlaceComponent {

}
