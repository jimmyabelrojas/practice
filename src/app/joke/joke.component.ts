import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  /*template: `<h4>{{joke.setup}}</h4>
  <p>
  {{joke.punchline}}
  </p>
  `,*/
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke: object;
  constructor() {
    this.joke = {
      setup: 'What did the cheese say when it looked in the mirror?',
      punchline: 'Halloumi'
    };
  }

  ngOnInit() {
  }

}
