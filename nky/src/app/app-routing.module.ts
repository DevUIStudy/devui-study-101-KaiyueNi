import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FilesComponent } from './files/files.component';
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
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
],
  exports:[RouterModule]
})
export class AppRoutingModule { }
