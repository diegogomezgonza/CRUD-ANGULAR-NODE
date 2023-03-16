import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormCComponent} from "./form-c/form-c.component";
import {TablaCComponent} from "./tabla-c/tabla-c.component";

@NgModule({
  declarations: [FormCComponent, TablaCComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [FormCComponent, TablaCComponent],
})
export class ComponentsModule { }
