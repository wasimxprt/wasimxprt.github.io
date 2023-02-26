import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort'
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './card/card.component';
import { AssetsComponent } from './assets/assets.component';
import { SocketioService } from './services/socketio.service';
import { ConceptsComponent } from './concepts/concepts.component';
import { HighlightDirective } from './highlight.directive';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { InterceptordemoComponent } from './interceptordemo/interceptordemo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorInterceptor } from './interceptors/authinterceptor.interceptor';
import { AsyncComponent } from './async/async.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    AssetsComponent,
    ConceptsComponent,
    HighlightDirective,
    PagenotfoundComponent,
    InterceptordemoComponent,
    AsyncComponent,
    LifecyclehooksComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    MatTabsModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    HttpClientModule    
  ],
  providers: [SocketioService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
