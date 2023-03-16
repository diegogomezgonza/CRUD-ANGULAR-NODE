import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  // Atributos
  id: bigint | undefined;
  titulo: any;
  fecha: any;
  valoracion: any;

  constructor(
    // Constructor
    private httpClient: HttpClient,
    private router: Router) {}

  ngOnInit() {}

  // Insert
  public add() {
    let data =
      {
        id: this.id,
        titulo: this.titulo,
        fecha: this.fecha,
        valoracion: this.valoracion};
    let headers = new HttpHeaders({"Content-Type": "application/json"})
    this.httpClient.post("http://localhost:9000/api/add", data, {headers})
      .subscribe((res) =>
        console.log(res));
  }

  // Update
  update() {
    let data =
      {
        id: this.id,
        titulo: this.titulo,
        fecha: this.fecha,
        valoracion: this.valoracion};
    let headers = new HttpHeaders({"Content-Type": "application/json"})
    this.httpClient.put("http://localhost:9000/api/update/"+this.id, data, {headers})
      .subscribe((res) =>
        console.log(res));
  }
}
