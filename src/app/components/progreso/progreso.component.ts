import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponent implements OnInit {

  progreso:number = 50
  
  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(valor:number){

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100
      return
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0
      return
    }

    this.progreso = this.progreso + valor

  }

}
