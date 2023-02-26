import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AssetsComponent } from './assets/assets.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './services/auth.guard';
import { InterceptordemoComponent } from './interceptordemo/interceptordemo.component';
import { AsyncComponent } from './async/async.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';


const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'deriv-assets', component: AssetsComponent },
  { path: 'fork-join', component: ConceptsComponent, canActivate: [AuthGuard] },
  { path: 'interceptors', component: InterceptordemoComponent, canActivate: [AuthGuard] },
  { path: 'async', component: AsyncComponent, canActivate: [AuthGuard] },
  { path: 'lifecyclehooks', component: LifecyclehooksComponent, canActivate: [AuthGuard] },
  { path: '404', component: PagenotfoundComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
