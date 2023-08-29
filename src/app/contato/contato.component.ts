import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  colorControl = new FormControl('accent' as ThemePalette);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
}
