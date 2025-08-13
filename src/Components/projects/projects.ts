// featured-projects.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-projects',

  imports:[CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects = [
    {
      title: 'Responsive Landing Page',
      description: 'A modern, responsive landing page built with HTML, CSS, JavaScript, and Bootstrap. Features smooth scrolling, interactive elements, and mobile-first design.',
      image: '/student.PNG',
      technologies: ['angular', 'Bootstrap CSS', 'TypeScript'],
      liveDemo: '#',
      codeLink: '#'
    },
    {
      title: 'E-commerce React Website',
      description: 'A fully functional e-commerce website built with angular and Bootstrap CSS. Includes product catalog, shopping cart, and responsive design.',
      image: '/ecommerce.PNG',
      technologies: ['angular', 'Bootstrap CSS', 'TypeScript',"rjrx"],
      liveDemo: '#',
      codeLink: 'https://github.com/shimaaadel0448-123/AvatioEcommerce'
    },
    {
      title: 'Portfolio Showcase',
      description: 'A personal portfolio website showcasing my skills and projects. Built with modern web technologies and responsive design principles.',
      image: '/port.PNG',
      technologies: ['angular', 'Bootstrap CSS', 'TypeScript'],
      liveDemo: '#',
      codeLink: '#'
    }
  ];
}
