/* eslint-disable object-shorthand */
/* eslint-disable no-undef */

const STAGING_URL = 'https://cvstom.herokuapp.com';
const LOCAL_URL = 'http://localhost:5000/';
const FIND_TIMEOUT = 30000;
const IMPLICIT_WAIT_TIMEOUT = 10000;

const openProdigy = (remote) => {
  const env = process.env.NODE_ENV;
  const baseUrl = env === 'local' ? LOCAL_URL : STAGING_URL;
  const loadPage = remote
    .get(require.toUrl(baseUrl))
    .setFindTimeout(FIND_TIMEOUT)
    .setTimeout('implicit', IMPLICIT_WAIT_TIMEOUT);
  return loadPage;
};


const IPINFO_WAIT = 2000;
const NETWORK_WAIT = 500;
const UI_WAIT = 300;
define([
  'intern!object',
  'intern/chai!expect',
], (registerSuite, expect) => {
  registerSuite({
    name: 'demo',
    'run through the whole signup flow': function () {
      return openProdigy(this.remote)
        .findByCssSelector('h1')
          .getVisibleText().then((text) => {
            expect(text.toLowerCase()).to.contain('cvstom');
          })
        .end()

        // FIRST PAGE - SIGNUP
        .findByCssSelector('input#firstName')
          .click()
          .pressKeys('Kenzan')
        .end()
        .findByCssSelector('input#lastName')
          .click()
          .pressKeys('Boo')
        .end()
        .findByCssSelector('input#phoneNumber')
          .click()
          .pressKeys('8053009592')
        .end()
        .findByCssSelector('input#dateOfBirth')
          .click()
          .type('11111989')
        .end()
        .findByCssSelector('input#email')
          .click()
          .type('email@email.com')
        .end()
        .findByCssSelector('input#password')
          .click()
          .pressKeys('badPassword')
        .end()
        // attempt to submit with bad password
        .findByCssSelector('button[type="submit"]')
          .click()
        .end()
        //verify submit failed, were still on the first page
        //by checking that the password field is still there
        .findByCssSelector('input#password')
          .click()
          .pressKeys('with123')
        .end()

        // attempt with good password
        .findByCssSelector('button[type="submit"]')
          .click()
        .end()


        // SECOND PAGE
        .findByCssSelector('h5')
          .getVisibleText().then((text) => {
            expect(text.toLowerCase()).to.contain(' a few more questions');
          })
        .end()



        .sleep(10000) // for visual confirmation
        ;
    },
  });
});
