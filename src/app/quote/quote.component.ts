import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = 
  [
    new Quote(1,'live your life to the fullest' , 'things happen for a reason and season',new Date(2020,3,27)),
    new Quote(2,'Succesful and unsuccesful dont vary in ability they vary in their desires to do things', 'your desire in doing things is what matters',new Date(2020,3,28)),
    new Quote(3,'Strive for progress not perfection','their is no perfection in success',new Date(2020,3,29)),
   
    
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  

  constructor() { }

  ngOnInit() {
    
  }

}
