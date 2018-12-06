import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';
import { Answer } from '../../answer';
import { AddCategory } from '../../model/add-category';
import { CategoryType } from '../../model/category-type';
import { CategoryServiceService } from '../../service/category-service.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public getCatInfo: Array<AddCategory> = [];
  public setCatType: Array<CategoryType> = [];
  public categoryName: String;
  public setDataCatType;
  public QuestionName;
  public answer: Array<String> = [];
  public x;
  public flag: boolean = false;
  public subcategory: Array<String> = [];
  question: Question;
  public checkRadio : boolean =false;
  public checkCheck : boolean = false;
  temp :Question;
  constructor(private categorySer: CategoryServiceService) {
    this.question = new Question();
  }
  ngOnInit() {
    this.categorySer.getCategoryInfo().subscribe(getResultList => {
      this.getCatInfo = getResultList;
    })
       //
    this.subcategory = ['Single Question Single Answer', 'Single Question Multiple Answer'];
  }
  /*
    This Function is + signe to added more answer
  */

  addfield() {
    let ans = new Answer();
    this.question.options.push(ans);

    this.answer[this.question.options.length];

  }
  saveFunction() {

    console.log("--------------------hhhh " +this.question)
    this.categorySer.addQuestion(this.question).subscribe(getAllQuestionData =>{
     this.temp=getAllQuestionData;
    
     alert(this.question.questionId+"Question Id");
     alert(this.question.questionText+ "QuestionText");
     alert(this.question.subcategory + "Question SubCategory");
   
     console.log("------------->" +this.temp)
    }) 
  }
  setradiocorrect(ans) {
 
    ans.answerCorrect =!ans.answerCorrect;
    console.log("check" + ans.answerCorrect)
  }
  setchkcorrect(ans){
      ans.answerCorrect =!ans.answerCorrect;
      console.log(ans.answerCorrect);
  }

}
