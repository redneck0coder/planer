import { Routes } from '@angular/router';
import {MenuComponent} from "./pages/menu/menu.component";
import {WorkPlaceComponent} from "./pages/work-place/work-place.component";
import {SettingsComponent} from "./pages/settings/settings.component";

export const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'work-place', component: WorkPlaceComponent},
  {path: 'settings', component: SettingsComponent}
];
