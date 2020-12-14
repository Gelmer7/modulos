import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html'
})
export class ProgresoComponent implements OnInit {

  progreso1: number = 50
  progreso2: number = 50
  
  constructor() { }

  ngOnInit(): void {
  }

}
