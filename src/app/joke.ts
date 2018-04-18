export class Joke {
  setup: string;
  punchline: string;
  hide: boolean;
  buttonText: string;
  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
    this.buttonText = 'Show me';
  }

  toggle() {
    this.hide = !this.hide;
    if (this.hide) {
      this.buttonText = 'Show me';
    } else {
      this.buttonText = 'Hide me';
    }
  }
}
