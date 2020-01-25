//Passing tests
const assert = require('assert')

describe('Should find the capital of the United States', () => {
    it('Should find the capital of the United States', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('UsA')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Washington, D.C.')
    })  
})

describe('Should find the capital of Columbia', () => {
    it('Should find the capital of Columbia', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('Col')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Bogotá')
    })
})

describe('Should find the capital of Samoa', () => {
    it('Should find the capital of Samoa', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('WSM')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Apia')
    })
})

describe('Should find the capital of Hungary', () => {
    it('Should find the capital of Hungary', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('HUN')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Budapest')
    })
})

describe('Should find the capital of Australia', () => {
    it('Should find the capital of Australia', () => {
        browser.url('localhost:4200')
        $('#ex2').addValue('Australia')
        const elem = $('#capital');
        console.log(elem.getText());
        assert.strictEqual(elem.getText(), 'Capital: Canberra')
    })
})