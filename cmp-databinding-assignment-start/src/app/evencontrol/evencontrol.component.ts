import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evencontrol',
  templateUrl: './evencontrol.component.html',
  styleUrls: ['./evencontrol.component.css']
})
export class EvencontrolComponent implements OnInit {
@Input() newNumber:number;
  constructor() { }

  ngOnInit(): void {
  }

}
