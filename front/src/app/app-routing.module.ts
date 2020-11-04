import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersListComponent } from './members-list/members-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'members',
    pathMatch: 'full',
  },
  
   
  {
    path: 'members',
    component: MembersListComponent,
    data: {
      title: 'members'
    }
  }
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
