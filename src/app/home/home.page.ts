import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../service/rick-morty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public characters: any;

  constructor(private rickMortyService: RickMortyService, private router: Router) {}

  ngOnInit(): void {
    this.rickMortyService.getCharacters().subscribe((data) => {
      //persistencia
      localStorage.setItem('characters', JSON.stringify(data));
      console.log(data);
      this.characters = data;
    })
  }

  detalle(personaje:any){
    console.log('Personaje seleccionado: ', personaje)
    this.router.navigateByUrl('/detalle');
  }

}
