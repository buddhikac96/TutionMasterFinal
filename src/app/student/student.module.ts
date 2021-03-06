import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { SideNavBarComponent } from './components/student-dashboard/side-nav-bar/side-nav-bar.component';
import { TopNavBarComponent } from './components/student-dashboard/top-nav-bar/top-nav-bar.component';
import { TeacherCardListComponent } from './components/student-dashboard/teacher-card-list/teacher-card-list.component';
import { TeacherCardComponent } from './components/student-dashboard/teacher-card-list/teacher-card/teacher-card.component';
import { LocationComponent } from './components/student-dashboard/top-nav-bar/location/location.component';
import { SubjectComponent } from './components/student-dashboard/top-nav-bar/subject/subject.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StudentService } from './shared/services/student.service';
import { RequestComponent } from './components/student-dashboard/teacher-card-list/teacher-card/request/request.component';
import { CommonService } from '../shared/services/common.service';
import { StudentTutorProfileComponent } from './components/tutor-profile/tutor-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { FloatingActionMenuModule } from 'ng2-floating-action-menu';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from 'ngx-bar-rating';
import { AchievementComponent } from './components/tutor-profile/achievement/achievement.component';
import { AllrequestsComponent } from './components/student-dashboard/allrequests/allrequests.component';
import { RatingComponent } from './components/tutor-profile/rating/rating.component';
import { ReviewComponent } from './components/tutor-profile/review/review.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { DetailsComponent } from './components/tutor-profile/details/details.component';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    FloatingActionMenuModule,
    NgbModule,
    BarRatingModule,
    ToastrModule
  ],
  declarations: [
    StudentDashboardComponent, 
    SideNavBarComponent, 
    TopNavBarComponent, 
    TeacherCardListComponent, 
    TeacherCardComponent, 
    LocationComponent, 
    SubjectComponent, 
    RequestComponent,
    StudentTutorProfileComponent,
    AchievementComponent,
    AllrequestsComponent,
    RatingComponent,
    ReviewComponent,
    StudentProfileComponent,
    DetailsComponent,
  ],
  exports: [
    StudentDashboardComponent, 
    SideNavBarComponent, 
    TopNavBarComponent, 
    TeacherCardListComponent, 
    TeacherCardComponent, 
    LocationComponent, 
    SubjectComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    StudentService,
    CommonService,
    AuthService
  ]
})
export class StudentModule { }
