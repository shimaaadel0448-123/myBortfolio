import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../Components/navbar/navbar';
import { Hero } from '../Components/hero/hero';
import { About } from '../Components/about/about';
import { Projects } from '../Components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [Navbar,Hero,About,Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
