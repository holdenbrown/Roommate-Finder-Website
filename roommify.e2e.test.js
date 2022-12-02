import Puppeteer from "puppeteer";
const pt = require('puppeteer')
import App from "../App";

describe("App.js",()=>{
    let browser;
    let page;
    beforeAll(async()=>{
        browser = await Puppeteer.launch();
        page = await browser.newPage();
    });

    it("contains the login text", async()=>{
        await page.goto("http://localhost:3000");
        await page.waitForSelector("#heading")
        const text = await page.$eval("h1",element => element.textContent);
        expect(text).toContain("Roommify");
    })

    test('validating name field', async () =>{
        await page.goto("http://localhost:3000");
        let searchText_name = await page.waitForXPath('//*[@id="exampleInputName1"]');
        await searchText_name.type("John Smith");

        let searchText_email = await page.waitForXPath('//*[@id="exampleInputEmail1"]');
        await searchText_email.type("john.smith@iastate.edu");

        let searchText_password = await page.waitForXPath('//*[@id="exampleInputPassword1"]');
        await searchText_password.type("1234");

        // const test = await page.waitForSelector('data-testid="Create_account_button"')
    })

    afterAll(()=>browser.close());
});

// test('validating first name field', async () =>{
//     const broswer = await Puppeteer.launch();
//     const page = await broswer.newPage();
//     const app = 'file:///C:/Users/Mr. Mister/Dropbox/se 319/final/app/src/createAccount.js'
//     await page.goto(app);

//     await page.click('input#firstname');
//     await page.type('input#firstname', ' ');
// })