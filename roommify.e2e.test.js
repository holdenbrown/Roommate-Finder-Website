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

    it('creates account and signs into it', async () =>{
        await page.goto("http://localhost:3000");
        await page.screenshot({path: '1.png'});

        //gets to sign in page from create account page and creates an account with the folloing information
        let button = await page.waitForXPath('//*[@id="form"]/button[2]');
        await button.click();
        await page.screenshot({path: '2.png'});

        let searchText_name = await page.waitForXPath('//*[@id="exampleInputName1"]');
        await searchText_name.type("John Smith");

        let searchText_email = await page.waitForXPath('//*[@id="exampleInputEmail1"]');
        await searchText_email.type("john.smith@iastate.edu");

        let searchText_password = await page.waitForXPath('//*[@id="exampleInputPassword1"]');
        await searchText_password.type("1234");

        let button2 = await page.waitForXPath('//*[@id="form"]/button');
        await button2.click();
        
        //signs into the account that was created
        let email = await page.waitForXPath('//*[@id="exampleInputEmail1"]');
        await email.type('john.smith@iastate.edu');

        let password = await page.waitForXPath('//*[@id="exampleInputPassword1"]');
        await password.type('1234');
        await page.screenshot({path: '3.png'});


        let sub = await page.waitForXPath('//*[@id="form"]/button[1]');
        await sub.click();
        await page.screenshot({path: '4.png'});
        
    })

    // it('signs in and updates preferences then checks roommates', async () =>{
    //     await page.goto("http://localhost:3000");
    //     page.setDefaultNavigationTimeout(0); 
        
    //     //signs into the account that was created
    //     let email = await page.waitForXPath('//*[@id="exampleInputEmail1"]');
    //     await email.type('john.smith@iastate.edu');

    //     let password = await page.waitForXPath('//*[@id="exampleInputPassword1"]');
    //     await password.type('1234');

    //     //updates preferences
        // let sub = await page.waitForXPath('//*[@id="form"]/button[1]');
        // await sub.click('//*[@id="form"]/button[1]');
    //     await page.waitForTimeout(5000);
    //     await page.screenshot({path: 'ex.png'});
        
    // })

    afterAll(()=>browser.close());
});
