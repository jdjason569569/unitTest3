import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBasicComponent } from './components-basic.component';

xdescribe('ComponentsBasicComponent', () => {
  let component: ComponentsBasicComponent;
  let fixture: ComponentFixture<ComponentsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('clicked var isOn',()=>{
    expect(component.isOn).toBe(false);
    component.clicked();
    expect(component.isOn).toBe(true);
    component.clicked();
    expect(component.isOn).toBe(false);
  });

  it('verify message', ()=>{
    expect(component.message).toMatch('La luz esta apagada');
    component.clicked();
    expect(component.message).toMatch('La luz esta prendida');

  })



  
});
