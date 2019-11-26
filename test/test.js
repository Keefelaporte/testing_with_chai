//require testing modules
const mocha = require('mocha')
const expect = require('chai').expect


//require the module that we are putting to the test

//or in this case, copy the snippet below from slack

//prove all things
describe('My comprehension of the JS basics is solid', () => {

        //prove statements that support the "describe"
        it('and this proves my awesomeness with JS', () => {
            expect('The King is inside me').to.be.a('string');
            expect({King:'Keefe'}).to.be.an('object');
            expect(null).to.be.a('null');
            expect(undefined).to.be.an('undefined');
            expect([]).to.be.an('array').that.is.empty;
            expect([5,4,3,2,1]).to.be.an('array').that.includes(5);
            expect().to.not.be.an('array')
            expect({model:'S Class'}).to.have.a.property('model');
            expect({make: 'tesla', model: 'cybertruck'}).to.include({make: 'tesla', model: 'cybertruck'});
        })


        it('includes testing skills', () =>{
            expect(2).not.to.equal('2')
            expect(Number('2')).not.to.equal('2')
            expect(2).to.equal(2)
            expect(Number('two')).to.be.NaN
            expect(Number('2')).not.to.be.NaN
            expect(2).not.to.be.NaN
            expect(Boolean(1)).to.be.true
        })

})
        

        