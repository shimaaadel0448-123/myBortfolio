// featured-projects.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',

  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects = [
    {
      title: 'Student Management System',
      description: 'A web-based student management system with two dashboards: students can take exams and view results, while admins can create exams and track results. Built with Angular and Bootstrap, connected to a JSON Server for data management.',
      image: '/stud.webp',
      technologies: ['Angular', 'Bootstrap CSS', 'TypeScript', 'JSON Server'],
      liveDemo: '#',
      codeLink: 'https://github.com/shimaaadel0448-123/StudentManagementSystem'
    },
    {
      title: 'E-commerce Angualr Website',
      description: 'A fully functional e-commerce website built with angular and Bootstrap CSS. Includes product catalog, shopping cart, and responsive design.',
      image: '/ecommerce.webp',
      technologies: ['angular', 'Bootstrap CSS', 'TypeScript', "rjrx"],
      liveDemo: '#',
      codeLink: 'https://github.com/shimaaadel0448-123/AvatioEcommerce'
    },
    {
      title: 'Portfolio Showcase',
      description: 'A personal portfolio website showcasing my skills and projects. Built with modern web technologies and responsive design principles.',
      image: '/port.webp',
      technologies: ['angular', 'Bootstrap CSS', 'TypeScript'],
      liveDemo: '#',
      codeLink: 'https://github.com/shimaaadel0448-123/myBortfolio'
    },
    {
      title: 'Dokan Marketing Page',
      description: 'A marketing landing page for an online app connected to Excel sheets. Showcases app features, benefits, and provides interactive demo sections. Built with modern web technologies and fully responsive.',
      image: '/docan.webp',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://dokanone.com/',
      codeLink: 'https://github.com/shimaaadel0448-123/docanOne'
    },
    {
      title: 'Crafty Gaming Page',
      description: 'A dynamic gaming website showcasing the latest games, trailers, and interactive features. Users can explore game categories, view ratings, and access demos. Built with modern web technologies and fully responsive for all devices.',
      image: '/crafty.webp',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://my-bortfolio-kj5d.vercel.app/',
      codeLink: 'https://github.com/shimaaadel0448-123/crafty'
    }

  ];
}
