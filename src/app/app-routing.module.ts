import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LotificacionesComponent } from './components/lotificaciones/lotificaciones.component';



const routes: Routes = [

  {
    path: 'dashboard', component: DashboardComponent      
  },
  {
    path: 'informacion', component: InfoComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'lotificaciones', component: LotificacionesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
