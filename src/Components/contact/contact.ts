import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
contactInfo = [
    { icon: 'bi-envelope-fill', label: 'Email', value: 'shyma0448@gmail.com' },
    { icon: 'bi-telephone-fill', label: 'Phone', value: '+20 1098431544' }
  ];

  socialLinks = [
    { icon: 'bi-github', url: 'https://github.com/shimaaadel0448-123' },
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/shimaa-adel-328bb51bb/' }
  ];
  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    const url = 'https://formspree.io/f/xovlzwzo';
    const headers = new HttpHeaders({ 'Accept': 'application/json' });

    this.http.post(url, form.value, { headers }).subscribe({
      next: () => {
        alert('Message sent successfully!');
        form.reset();
      },
      error: () => alert('Oops! Something went wrong.')
    });
  }
}
