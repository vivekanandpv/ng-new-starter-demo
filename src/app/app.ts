import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-new-starter');
  x = 100;

  // 1. Error: 'userData' is assigned a value but never used
  // 2. Error: Strings must use single quotes
  private userData = "John Doe"; 

  // 3. Error: Lifecycle hook should not be empty
  ngOnInit() {} 

  // 4. Error: Expected a 'for-of' loop instead of a 'for' loop
  logItems(items: string[]) {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
    }
  }

  foo() {
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
  }

  bar() {
console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
  }
}
