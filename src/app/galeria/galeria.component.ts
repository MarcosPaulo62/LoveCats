import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  @Input() description = '';
  @Input() url = '';

  cats: any[] = [];

  constructor(http: HttpClient){
    http
      .get<any[]>('https://api.thecatapi.com/v1/images/search?limit=20')
      .subscribe((data) => {
        this.cats = data;
      });
  }
}
