import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();
  uvotes = 0;
  dvotes = 0;
  quotes: any;
  upVote(){
    this.uvotes = this.uvotes + 1;
  }
  downVote(){
    this.dvotes = this.dvotes + 1;
  }


  constructor() { }

  ngOnInit() {
    this.getHighest();
  }

  addVote({ vote, index }: { vote; index; }) {
    if (vote) {
      this.quotes[index].upvote += 1;
      this.getHighest();
    } else {
      this.quotes[index].downvote += 1;
    }
  }

  getHighest() {
    let highest = 0;
    let highestQuote: Quote;
    for (const quote of this.quotes) {
      if (quote.upvote > highest) {
        highest = quote.upvote;
        highestQuote = quote;
      }
    }
    this.changeHighest(highestQuote);
  }

  changeHighest(highest: Quote) {
    for (const quote of this.quotes) {
      if (quote.id === highest.id) {
        quote.isHighest = true;
      } else {
        quote.isHighest = false;
      }
    }
  }

}
