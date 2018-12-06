import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NgNavComponent } from './ng-nav/ng-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { QuestionComponent } from './Question/question/question.component'
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddUpdateDeleteCategoryComponent } from './Category/add-update-delete-category/add-update-delete-category.component';
import { FormsModule } from '@angular/forms';
import { CategoryServiceService } from './service/category-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewCategoryComponent } from './displayCategory/view-category/view-category.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { QuestionListComponent } from './AllQuestion/question-list/question-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginServiceService } from './service/login-service.service';
import { AddUserComponent } from './AddUSer/add-user/add-user.component';
import { AdminLoginComponent } from './adminLogin/admin-login/admin-login.component';
@NgModule({
  declarations: [
    AppComponent,
    NgNavComponent,
    QuestionComponent,
    AddUpdateDeleteCategoryComponent,
    ViewCategoryComponent,
    QuestionListComponent,
    AddUserComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
     MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule  
     
  ],
  providers: [CategoryServiceService,LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
