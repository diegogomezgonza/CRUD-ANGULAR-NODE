import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabla-c',
  templateUrl: './tabla-c.component.html',
  styleUrls: ['./tabla-c.component.scss'],
})
export class TablaCComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Función ir a la tabla
  go() {
    this.router.navigate(['tabla']);
  }
}
