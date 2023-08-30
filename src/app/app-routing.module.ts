import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { VeterinariosComponent } from './veterinarios/veterinarios.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ServicosComponent } from './servicos/servicos.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'veterinarios', component: VeterinariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
