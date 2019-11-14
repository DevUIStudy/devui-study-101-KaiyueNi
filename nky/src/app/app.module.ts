import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevUIModule } from 'ng-devui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FilesComponent } from './admin/files/files.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [  
  { 
    path: 'admin', component: AdminComponent,
    
    children:[
      
      { path: 'files', component: FilesComponent },
      { path:'**', redirectTo:'files' }

    ] 
  },
  { 
    path:'', redirectTo: 'admin',pathMatch:'full'

  },
  { 
    path:'**', component:PageNotFoundComponent

  }

];


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FilesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    DevUIModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
