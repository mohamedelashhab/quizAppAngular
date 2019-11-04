import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  
  @Input('data') data: any;
  @Input('questationIndex') questationIndex: number;
  @Output('choosed') choosed = new EventEmitter();
  selectedAnswer: number;
  isActive = [
    false, false, false, false
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  
  onChoose()
  {
    this.choosed.emit();
  }

  selected(answer,index){
    console.log(answer.is_correct);

    //emit result
    answer.is_correct == 1 ? this.choosed.emit([this.questationIndex, true]) : this.choosed.emit([this.questationIndex, false]);

    //calculate result


    let i=0;
    this.isActive.forEach(element => {
      if(index == i){
        this.isActive[index] = true;
      }
      else{
        this.isActive[i] = false;
      }
      i++;
    });
  }



}
