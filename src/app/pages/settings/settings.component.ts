import {Component, inject} from '@angular/core';
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  itemsService = inject(ItemsService);
}
