import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();
  handler = null;
  num = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.handler = setInterval(() => {    
      this.num += 1;
      this.gameStarted.emit(this.num);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.handler);
  }

}
