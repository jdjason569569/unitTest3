import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

xdescribe('Service: Value', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', ()=>{
    expect(service.getValue()).toBe('real value');
  });

  it('return value from observable', (done: DoneFn) =>{  // DoneFn funcion que nos permite testing para llamados asincronos
       service.getObservableValue().subscribe((value)=>{
         expect(value).toBe('observable value');
         done(); 
       })
  });

  it('return value from promise', (done:DoneFn)=>{
    service.getPromiseVAlue().then((value)=>{
      expect(value).toBe('promise value');
      done();
    })
  })

});
