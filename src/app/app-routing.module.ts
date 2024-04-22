import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistasComponent } from './components/vistas/vistas.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { ViendoComponent } from './components/viendo/viendo.component';
import { VerMasTardeComponent } from './components/ver-mas-tarde/ver-mas-tarde.component';

const routes: Routes = [
  { path: 'vistos', component: VistasComponent },
  { path: 'viendo', component: ViendoComponent },
  { path: 'verMasTarde', component: VerMasTardeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'explorar', component: ExplorarComponent },
  { path: '', redirectTo: '/explorar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule],
})
export class AppRoutingModule {}
