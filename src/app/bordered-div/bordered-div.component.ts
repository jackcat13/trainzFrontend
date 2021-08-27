import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bordered-div',
  templateUrl: './bordered-div.component.html',
  styleUrls: ['./bordered-div.component.css']
})
export class BorderedDivComponent implements OnInit {

  @Input() bgColor!: string

  constructor() { }

  ngOnInit(): void {
  }

}
