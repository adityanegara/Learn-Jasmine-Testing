const puppeteer = require('puppeteer');
const {generateText, checkAndGenerate} = require('./util');

test('should throw an error when parameter is null', ()=>{
    expect(() => {generateText()}).toThrowError("Parameter Null");
    expect(() => {generateText('a')}).toThrowError("Parameter Null");
    expect(() => {generateText(null,'b')}).toThrowError("Parameter Null");
});

test('should output name and age', ()=>{
    expect(generateText('Adit', 23)).toBe('Adit (23 years old)');
    expect(generateText('Aura', 19)).toBe('Aura (19 years old)');
    expect(generateText('Ayesha', 6)).toBe('Ayesha (6 years old)');
});

test('should generate a valid text output', ()=>{
    expect(checkAndGenerate('Adit', 23)).toBe('Adit (23 years old)');
    expect(checkAndGenerate('Aura', 19)).toBe('Aura (19 years old)');
    expect(checkAndGenerate('Ayesha', 6)).toBe('Ayesha (6 years old)');
})

test('should click around', async ()=>{
     const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--widow-size=1920,1080']
     });
     const page = await browser.newPage();
    await page.goto('file:///D:/Repos%20Web/Dicoding_Frontend_Expert/7.%20Testing%20Automatis/Academind-Testing/index.html');
    await page.click('input#name');
    await page.type('input#name', 'Adit');
    await page.click('input#age');
    await page.type('input#age', '23');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Adit (23 years old)');
}, 10000);





