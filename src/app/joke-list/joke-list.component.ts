import { Component, OnInit } from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke('1. What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
      new Joke('2. What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      new Joke('3. A kid threw a lump of cheddar at me', 'I thought ‘That’s not very mature’'),
    ];
  }

  ngOnInit() {
  }

}
