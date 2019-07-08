import { Component, OnInit, Input, Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'It is simple; control the code, control the world!','Author: Pixel Aurora', 'Pixel',new Date(2019,6,4)),
    new Quote(2,'Learn the rules like a pro, so you can break them like an artist.','Author: Bob Cat', 'Pixel',new Date(2019,6,5)),
    new Quote(3,'I will set the world on fire and call it rain. ','Author: Obi Wan', 'Pixel',new Date(2019,6,6)),
    new Quote(4,'Love, death and robots...who else is hooked?','Author: Sombra', 'Pixel',new Date(2019,6,7)),
    new Quote(5,'We are Anonymous. We are Legion. We do not forgive. We do not forget. Expect us.','Author: Anonymous', 'Pixel',new Date(2019,6,8)),

  ]

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date();
    this.quotes.push(quote)

  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }


  // upvote = 0;
  // downvote = 0;
  //
  // like():boolean {
  //   this.upvote +=1;
  // }
  // dislike():boolean {
  //   this.downvote  +=1;
  // }

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }
  ngOnInit() {
  }

}
