//declaring constant variables

const assert = require('assert')

//Positive scenarios

//testing country code
describe('Finding captipals according to codes and names', () => {
    it('Should find the capital of Columbia', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('Col')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: Bogotá')
    })

//testing country name
    it('Should find the capital of Australia', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('Australia')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: Canberra')
    })

//testing country code all lowercase
    it('Should find the capital of China', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('CHN')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: Beijing')
    })
//testing country name all lowercase
    it('Should find the capital of French Southern Territories', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('french southern territories')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: Port-aux-Français')
    })
})

//Edge scenarios

//testing country name in all caps
describe('Should find the capital regardless of capitalization', () => {
    it('Should find the capital of Brazil', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('BRAZIL')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: Brasília')
    })
//testing country code all caps
    it('Should find the capital of Hungary', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('HUN')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: Budapest')
    })
//testing country code with random caps
    it('Should find the capital of the United States', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('UsA')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: Washington, D.C.')
    })
//testing country code all caps
    it('Should find the capital of Samoa', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('WSM')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: Apia')
    })
//testing country name with random caps
    it('Should find the capital of Cambodia', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('cAmBodia')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: Phnom Penh')
    })
//testing country name with random caps
    it('Should find the capital of Germany', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('gErmANY')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: Berlin')
    })
//testing that a country with no capital displays "no capital"
    it('Should find the capital of Antarctica', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('Antarctica')
        const elem = $('#capital');
        browser.pause(3000);
        assert.strictEqual(elem.getText(), 'Capital: No Capital')
    })
})

//Negative Test

//testing that no capital is shown when entering a number
describe('Should not display a capital', () => {
    it('Should not find a capital', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('123')
        browser.pause(3000);
        let elem = $('.card')
        let isExisting = elem.isExisting()
        console.log(isExisting);
        assert.strictEqual(elem.isExisting(), false);
    })
})
