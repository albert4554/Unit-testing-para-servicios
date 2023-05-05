import { Calculator } from "./calculator";


describe('Test for Calculator',()=>{

     describe('Test for multiply',()=>{
        it('should return a nine',()=>{
            //AAA
            //Arange - Preparar
            const calculator=new Calculator();
            //Act - actuar
            const rta= calculator.multiply(3,3);
            //Assert - resolver
            expect(rta).toEqual(9);
        })
        it('should return a four',()=>{
            //AAA
            //Arange - Preparar
            const calculator=new Calculator();
            //Act - actuar
            const rta= calculator.multiply(1,4);
            //Assert - resolver
            expect(rta).toEqual(4);
        })
     })
     describe('Test for divide',()=>{
        it('#divide should return a some numbers',()=>{
            //AAA
            //Arange - Preparar
            const calculator=new Calculator();
            //Act - actuar
            expect(calculator.divide(6,3)).toEqual(2);
            expect(calculator.divide(5,2)).toEqual(2.5);
    
            //Assert - resolver
           
        })
        it('should for a zero',()=>{
            //AAA
            //Arange - Preparar
            const calculator=new Calculator();
            //Act - actuar
            expect(calculator.divide(6,0)).toBeNull();
            expect(calculator.divide(5,0)).toBeNull();
            expect(calculator.divide(1111112222,0)).toBeNull();
    
            //Assert - resolver
           
        })
        it('tests matchers',()=>{
           const name='nicolas';
           let name2;
           expect(name).toBeDefined();
           expect(name2).toBeUndefined();
           expect(1+3 ===4).toBeTruthy();
           expect(1+1===3).toBeFalsy();
           expect(5).toBeLessThan(10);
           expect(20).toBeGreaterThan(10);
           expect('123456').toMatch(/123/);
           expect(['apples','oranges','pears']).toContain('oranges');
                  
        })
     })
   
})