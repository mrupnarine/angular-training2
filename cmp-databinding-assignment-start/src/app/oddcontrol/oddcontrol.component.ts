import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oddcontrol',
  templateUrl: './oddcontrol.component.html',
  styleUrls: ['./oddcontrol.component.css']
})
export class OddcontrolComponent implements OnInit {
  @Input() newNumber:number;
  constructor() { }

  ngOnInit(): void {
  }

}
