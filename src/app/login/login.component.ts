import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  myForm: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.myForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  submitForm() {
    if (this.myForm.valid){
      console.log('Formulário enviado: ', this.myForm.value);
    }
  }

}
