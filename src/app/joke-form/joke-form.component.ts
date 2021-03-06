import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() doJokeCreate = new EventEmitter<Joke>();

  clearSetup: string = '';
  clearPunchline: string = '';
  constructor() { }

  ngOnInit() {
  }

  createJoke(setup: string, punchline: string) {
    console.log('createJoke', setup);
    this.doJokeCreate.emit(new Joke(setup, punchline));
    this.clearSetup = null;
    this.clearPunchline = null;
  }
}
