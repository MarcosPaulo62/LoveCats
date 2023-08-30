import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.component.html',
  styleUrls: ['./veterinarios.component.scss']
})
export class VeterinariosComponent {
  veterinarios: IVet[] = [];

  constructor(http: HttpClient) {
    http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.veterinarios = data;
      });
    }

    displayedColumns: string[] = ['id', 'name', 'email'];

}

interface IVet {
  id: number;
  name: string;
  email: string;
}