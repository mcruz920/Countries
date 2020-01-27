const assert = require('assert')

//Positive scenarios

//testing country code
describe('Should find the capital of Columbia', () => {
    it('Should find the capital of Columbia', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('Col')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Bogotá')
    })
})
//testing country name
describe('Should find the capital of Australia', () => {
    it('Should find the capital of Australia', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('Australia')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Canberra')
    })
})

//testing country code all lowercase
describe('Should find the capital of China', () => {
    it('Should find the capital of China', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('CHN')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Beijing')
    })
})
//testing country name all lowercase
describe('Should find the capital of French Southern Territories', () => {
    it('Should find the capital of French Southern Territories', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('french southern territories')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Port-aux-Français')
    })
})

//Negative scenarios

//testing country name in all caps
describe('Should find the capital of Brazil', () => {
    it('Should find the capital of Brazil', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('BRAZIL')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Brasília')
    })
})
//testing country code all caps
describe('Should find the capital of Hungary', () => {
    it('Should find the capital of Hungary', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('HUN')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Budapest')
    })
})
//testing country code with random caps
describe('Should find the capital of the United States', () => {
    it('Should find the capital of the United States', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('UsA')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Washington, D.C.')
    })  
})
//testing country code all caps
describe('Should find the capital of Samoa', () => {
    it('Should find the capital of Samoa', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('WSM')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Apia')
    })
})