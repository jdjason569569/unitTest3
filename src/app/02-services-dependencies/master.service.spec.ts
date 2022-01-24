import { TestBed } from '@angular/core/testing';
import { ValueService } from '../01-services/value.service';

import { MasterService } from './master.service';

/*
hacer pruebas con servicios con dependencias a otros servicios
*/
xdescribe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  //Pruebas con servicios reales  
  it('value real service', ()=>{
    service = new MasterService(new ValueService());
    expect(service.getValue()).toBe('real value');
    
  });

  //Pruebas con servicios fake
  it('fake value', ()=>{
    const fake = {getValue: () => 'real value'};
    service = new MasterService(fake as ValueService);
    expect(service.getValue()).toBe('real value');
  });
 

  //Pruebas con Spy

  it('spy value', ()=>{
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);

    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);
    service = new MasterService(valueServiceSpy);

    expect(service.getValue()).toBe(stubValue);
  });

});
