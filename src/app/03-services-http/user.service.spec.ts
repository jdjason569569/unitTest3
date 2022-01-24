import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

xdescribe('UserService', () => {
  let service: UserService;
  let httpCLientSpy: {get: jasmine.Spy};  // Se genera un espia para httpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule          //Permite realizar peticiones fake
     ],
    });
    service = TestBed.inject(UserService);
  });

  beforeEach(() => {
    httpCLientSpy = jasmine.createSpyObj('HttpClient', ['get']); // se coloca un espia a su metodo get para el httpClient real,  se puede con HttpClientTestingModule
    service = new UserService(httpCLientSpy as any); 
  })


  it('expecte users (httpClient called)', () => {
    const expectedUsers = [            //mock nos permite establecer un valor esperado
      {id: 1, name: 'A'},
      {id: 2, name: 'B'}
    ]
    httpCLientSpy.get.and.returnValue((of(expectedUsers)));  //El of permite devolver el resultado de un observable
    service.getUsers();  // en este momento llamamos al espia en vez de la pticion reaL
    expect(service.users.length).toBe(2);
    expect(service.users[0]['name']).toBe('A');
    expect(httpCLientSpy.get.calls.count()).toBe(1, 'one call');
  });


  it('server return a 404', ()=>{
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'not found'
    });

    httpCLientSpy.get.and.returnValue((throwError(errorResponse)));  //El of permite devolver el resultado de un observable
    service.getUsers(); 
    expect(service.users.length).toEqual(0);
  })


});
