import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bordered-title',
  templateUrl: './bordered-title.component.html',
  styleUrls: ['./bordered-title.component.css']
})
export class BorderedTitleComponent implements OnInit {

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
