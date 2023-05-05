
import { TestBed} from '@angular/core/testing'
import { ValueService } from './value.service';

fdescribe('ValueService', () => {
  let service: ValueService; 

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers:[ValueService]
    })
    service = TestBed.inject(ValueService)
  });
 it('shoul be create',()=>{
  expect(service).toBeTruthy();
 })
 describe('Test for getValue',()=>{
  it('should return "my value"',()=>{
    expect(service.getValue()).toBe('my value')
  });
 })
 describe('Test for setValue',()=>{
  it('should change the value',()=>{
    expect(service.getValue()).toBe('my value')
    service.setValue('change');
    expect(service.getValue()).toBe('change');
  });
 })
 describe('Test for getPromiseValue',()=>{
  it('should return "promise value" from promise with then',(doneFn)=>{
    service.getPromiseValue().then((value)=>{
       expect(value).toBe('promise value')
       doneFn();
    })
  });
  it('should return "promise value" from promise using async',async ()=>{
    const rta= await service.getPromiseValue();
    expect(rta).toBe('promise value');
  });
 })
/*  describe('Test for getObservableValue',()=>{
  it('should return "observable value" from observable with subscribe',(doneFn)=>{
    service.getObservableValue().subscribe((value)=>{
       expect(value).toBe('observable value')
       doneFn();
    })
  });
  it('should return "observable value" from observable using async',async ()=>{
    const rta2= await firstValueFrom(service.getObservableValue());
    expect(rta2).toBe('observable value');
  });
 }) */
});
