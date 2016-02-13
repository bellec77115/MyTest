class HelloWorld {
  constructor(private displayDOM: HTMLElement) {
  }
  SayHi(name: string) {
    var displayText = `Hello, ${name}`;
    this.displayDOM.innerHTML = displayText;
  }
}