import { Component, OnInit } from '@angular/core';
 
import { AddCategory } from '../../model/add-category';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public getCatInfo: Array<AddCategory> = [];
 
  constructor() { }

  ngOnInit() {
    
  }
 

}
