import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = "leyenda"
  @Input() progreso:number = 50

  @Output('changeValor') cambioValor:EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onChanges(nuevoValor:number){
    if (nuevoValor >= 100) {
      this.progreso = 100
    }else if (nuevoValor <= 0) {
      this.progreso = 0
    }else{
      this.progreso = nuevoValor
    }
    this.cambioValor.emit(this.progreso)
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
    this.cambioValor.emit(this.progreso)
    //emite atra vez do output
  }
}
