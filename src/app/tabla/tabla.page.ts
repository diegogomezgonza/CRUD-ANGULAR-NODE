import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  // Atributos
  id: bigint | undefined;
  titulo: any;
  fecha: any;
  valoracion: any;

  list: Pelicula[] | any;
  constructor(
    // Constructor
    private httpClient: HttpClient,
    private router: Router) { }

  // Uso de onInit para el select
  ngOnInit() {
    this.httpClient.get('http://localhost:9000/api/read')
      .subscribe((res) => {
        console.log(res)
        this.list = res
      });
  }

  // Delete
  public delete() {
    let data =
      {
        id: this.id};
    let headers = new HttpHeaders({"Content-Type": "application/json"})
    this.httpClient.delete("http://localhost:9000/api/delete/"+this.id)
      .subscribe((res) =>
        console.log(res));
  }

}

  // Interfaz película
export interface Pelicula{
  id: bigint;
  titulo: string;
  fecha: string;
  valoracion: string;
}
