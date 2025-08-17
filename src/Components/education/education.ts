import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports:[CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class Education {

  educationList = [
    {
      title: "Bachelor's in Computer Science",
      subtitle: "Faculty of Computer Science and Information Technology",
      date: "Aug 2020 - Jun 2024",
      location: "Qena, Egypt",
      description: "Comprehensive study of computer science fundamentals, programming languages, algorithms, and software development."
    },
    {
      title: "9 Month Professional Diploma in UI/UX Development",
      subtitle: "Information Technology Institute (ITI), Assiut Branch",
      date: "Aug 2024 - July 2025",
      location: "Assiut, Egypt",
      description: "Intensive program focusing on UI/UX design principles, user research, wireframing, prototyping, and usability testing."
    }
  ];
}
