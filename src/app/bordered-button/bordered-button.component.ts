import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bordered-button',
  templateUrl: './bordered-button.component.html',
  styleUrls: ['./bordered-button.component.css']
})
export class BorderedButtonComponent implements OnInit {

  @Input() title!: string;
  @Input() color!: string;
  @Input() backgroundColor!: any;

  hover = false

  constructor() { }

  ngOnInit(): void {
  }

}
