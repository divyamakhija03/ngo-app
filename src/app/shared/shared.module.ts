import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './component/side-nav/side-nav.component';



@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
  ],
  exports:[
    SideNavComponent,
  ]
})
export class SharedModule { }
