import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: ['./dashboard-hero.component.css']
})
export class DashboardHeroComponent implements OnInit {

  @Input() hero?: Hero;
  @Output() selected = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit(): void {
  }
  
  click(){
    this.selected.emit(this.hero);
  }

}
