import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, formatPercent } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { ListadoService } from "../listado/listado.service";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  constructor(public listadoService: ListadoService) {}

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    cif: new FormControl(''),
    direccion: new FormControl(''),
    grupo: new FormControl(''),
  });

  send_data() {
    var tmp_arr: any = [];
    Object.keys(this.form.controls).forEach((controlName) => {
      let valor = this.form.get(controlName);
      let res = valor ? valor.value : '';
      console.log(res);
      tmp_arr.push(res);
    });
    this.listadoService.add(tmp_arr);
  }
}
