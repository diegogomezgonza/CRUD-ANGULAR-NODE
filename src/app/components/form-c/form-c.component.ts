import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.scss'],
})
export class FormCComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Función ir a la tabla
  goBack() {
    this.router.navigate(['home']);
  }
}


