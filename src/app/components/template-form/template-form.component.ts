import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  submitForm(form: any) {
    if (form.valid) {
      console.log('Submitted Form Data:', this.user);
      alert('Form submitted successfully!');
      form.reset(); // reset the form after submission
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
