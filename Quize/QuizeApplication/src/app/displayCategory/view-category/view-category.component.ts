import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../service/category-service.service';
import { AddCategory } from '../../model/add-category';
import { CategoryType } from '../../model/category-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  public getCatInfo : Array<AddCategory> = [];
  public setCatType : Array<CategoryType> = [];
  public categoryName : String;
  constructor(private categorySer : CategoryServiceService,private router : Router) { }
  public heroes : Array<String>=[];
  displayedColumns: string[] = ['catId','catName','up','del'];
  ngOnInit() { 
    this.categorySer.getCategoryInfo().subscribe(getResultList => {
      this.getCatInfo=getResultList;
    })
 }
 delCat(delCategoryId){
  if(confirm("Are you sure to delete Quiz Category : "+delCategoryId)) {
      this.categorySer.deleteCategoryInfo(delCategoryId).subscribe(delCatIdRes => {
      alert("SuccessFully Delete" +  delCategoryId);   
      this.router.navigate(['/viewCategory']);
     })
  }   
  else {
        this.router.navigate(['/viewCategory']); 
       } 
   } 
}
