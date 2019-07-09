import { Component, OnInit, Input, Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'Never argue with stupid people, they will drag you down to their level and then beat you with experience!','Author: Levert', 'Levert.o',new Date(2019,6,4)),
    
    new Quote(2,'What is the best thing to do when you have a hole in a boat and water is leaking inside? Make another hole to drain the water. ','Author: Green fly', 'Nzi',new Date(2019,6,6)),
    
    new Quote(3,'Your secrets are safe with me... I was not even listening. ','Author: Panya buku', 'Buku buku',new Date(2019,6,7)),

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



  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }
  ngOnInit() {
  }

}
