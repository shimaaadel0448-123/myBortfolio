import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
activeSection: string = 'home';

ngAfterViewInit(): void {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries) => {
    let mostVisible: { id: string, ratio: number } = { id: '', ratio: 0 };

    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > mostVisible.ratio) {
        mostVisible = { id: entry.target.id, ratio: entry.intersectionRatio };
      }
    });

    if (mostVisible.id) {
      this.activeSection = mostVisible.id;
      console.log('Active section:', this.activeSection);
    }
  }, { threshold: [0.3, 0.6, 1] });

  sections.forEach(section => observer.observe(section));
}

}
