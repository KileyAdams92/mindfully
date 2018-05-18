//requiring packages

const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

const url = 'http://localhost:8080';

//describe which button to test
describe('test top right corner Sign up button', () => {
  it('Test', function (done) {
    //allow time since test replicates sign in 
    this.timeout('40s')
    const nightmare = Nightmare({ show: true })
    nightmare
      //steps in the test
      .goto(`${url}/`)
      .click('#getStartedBtn')
      //user should drop their own info in these two 'type' fields
      .type('input[type="text"]', 'samanthaadams.biz@gmail.com')
      .type('input[name="password"]', 'Newjob18')
      .click("#loginInput")
      //evaluate whether correct page is displayed
      .evaluate(function () {
        return document.title;
      })
      //asset expected
      .then(function (title) {
        expect(title).to.equal("Mindfully | Dashboard");
        done();
      })
  });
});