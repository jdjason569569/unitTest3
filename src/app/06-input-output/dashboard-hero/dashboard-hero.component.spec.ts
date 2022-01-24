import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeroComponent } from './dashboard-hero.component';

xdescribe('DashboardHeroComponent', () => {
  let component: DashboardHeroComponent;
  let fixture: ComponentFixture<DashboardHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test input', () => {

    const hero = {      //mock de prueba
      id: 42,
      name: 'Test'
    }
    component.hero = hero; // agregamos el input que se necesita

    component.selected.subscribe((selectedHero: any)=>{ //nos subscribimos con el output
      expect(selectedHero).toBe(hero); //se espera que selectedHero sea igual a hero
      component.click(); // emite el output esperando la subscripcion.
    })
    
  });
});
