import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anim-button',
  templateUrl: './anim-button.component.html',
  styleUrls: ['./anim-button.component.css']
})
export class AnimButtonComponent implements OnInit {

  @Input() btnId!: number;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
