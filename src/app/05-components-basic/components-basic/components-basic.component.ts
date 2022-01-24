import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-basic',
  templateUrl: './components-basic.component.html',
  styleUrls: ['./components-basic.component.css']
})
export class ComponentsBasicComponent implements OnInit {

  isOn = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  get message(){
    // if(this.isOn){
    //   return 'La luz esta prendida'
    // }else{
    //   return 'La luz esta apagada'
    // }
    return this.isOn ? 'La luz esta prendida': 'La luz esta apagada';
  }
  
  clicked(){
    this.isOn = !this.isOn;
  }

}
