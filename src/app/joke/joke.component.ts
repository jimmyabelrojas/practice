import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';

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

  @Input() joke: Joke;
  // joke: Joke;

  constructor() {
  }
  /*constructor() {
    this.joke = new Joke(
      'What did the cheese say when it looked in the mirror?',
      'Halloumi'
    );
   */
   /* this.joke = {
      setup: 'What did the cheese say when it looked in the mirror?',
      punchline: 'Halloumi'
    };*/

  ngOnInit() {
  }

}
