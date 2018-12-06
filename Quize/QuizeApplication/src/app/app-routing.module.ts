import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { QuestionComponent } from './Question/question/question.component';
import { AddUpdateDeleteCategoryComponent } from './Category/add-update-delete-category/add-update-delete-category.component';
import { ViewCategoryComponent } from './displayCategory/view-category/view-category.component';
import { CategoryType } from './model/category-type';
 import { QuestionListComponent } from './AllQuestion/question-list/question-list.component';
import { AddUserComponent } from './AddUSer/add-user/add-user.component';
import { AdminLoginComponent } from './adminLogin/admin-login/admin-login.component';

const routes: Routes = [
  {
    path: 'addQuestions',component : QuestionComponent  
  },
  {
     path :'viewCategory', component  : ViewCategoryComponent
  }
  ,
 {
   path :'addCategory', component : AddUpdateDeleteCategoryComponent
 }
 ,
{
  path : 'viewCategory/editCategory/:categoryId' ,component :AddUpdateDeleteCategoryComponent 
} ,
  
 {
   path : 'login' , component : QuestionListComponent 
 }
 ,{
    path : 'addUser' ,component :AddUserComponent
 }
 ,{
   path:'adminLogin',component:AdminLoginComponent
 }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
