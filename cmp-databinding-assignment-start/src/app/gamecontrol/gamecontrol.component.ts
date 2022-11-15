import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
@Output() newNumber = new EventEmitter<number>();
ref;
i: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  gameStart()
  {
    this.ref = setInterval(() => {
      this.newNumber.emit(this.i +1);
      this.i++;
    }, 1000);    
    
  }

  gameStop()
  {
    clearInterval(this.ref);
  }
  
}
