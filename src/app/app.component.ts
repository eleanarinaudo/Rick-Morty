import { Component } from '@angular/core';
import { PersonajesService } from './personajes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrPersonajes: any[];
  
  currentPage: number;
  numPages: number;

  constructor(private personajesService: PersonajesService){ 
    this.currentPage = 1;
  }

  ngOnInit(){
    this.personajesService.getAll()
    .then (response => {
      this.arrPersonajes = response['results'];
      this.numPages = response['info']['pages'];
    })
  }

  async changePage(siguiente){
    if(siguiente){
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    const response = await this.personajesService.getAll(this.currentPage);
    this.arrPersonajes=response['results'];
  }
}
