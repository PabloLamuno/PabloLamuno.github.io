import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { NavBarComponent } from './components/utils/nav-bar/nav-bar.component';
import { VistasComponent } from './components/vistas/vistas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { VerMasTardeComponent } from './components/ver-mas-tarde/ver-mas-tarde.component';
import { ViendoComponent } from './components/viendo/viendo.component';
import { ListMultimediasComponent } from './components/utils/list-multimedias/list-multimedias.component';
import { FiltrarComponent } from './components/utils/filtrar/filtrar.component';
import { MostrarListaComponent } from './components/utils/mostrar-lista/mostrar-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VistasComponent,
    PerfilComponent,
    ExplorarComponent,
    VerMasTardeComponent,
    ViendoComponent,
    ListMultimediasComponent,
    FiltrarComponent,
    MostrarListaComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //en el init hacemos que llame al updateDDNS


}
