import Puppeteer from "puppeteer";
const pt = require('puppeteer')
import App from "../App";
import { click } from "@testing-library/user-event/dist/click";

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

    it('creates account and signs into it then updates preferences and checks roommate matches', async() =>{
        await page.goto("http://localhost:3000");
        await page.screenshot({ path: 'login_page_1.png', fullPage: 'true' });

        //gets to sign in page from create account page and creates an account with the folloing information
        let button = await page.waitForXPath('//*[@id="form"]/button[2]');
        await button.click();

        let searchText_name = await page.waitForXPath('//*[@id="exampleInputName1"]');
        await searchText_name.type("Julio Doe");

        let searchText_email = await page.waitForXPath('//*[@id="exampleInputEmail1"]');
        await searchText_email.type("jul.doe@iastate.edu");

        let searchText_password = await page.waitForXPath('//*[@id="exampleInputPassword1"]');
        await searchText_password.type("1234");

        const text = await page.$eval("h4",element => element.textContent);
        expect(text).toContain("Create Account");
        await page.screenshot({ path: 'account_create_2.png', fullPage: 'true' });

        let button2 = await page.waitForXPath('//*[@id="form"]/button');
        await button2.click();
        
        //signs into the account that was created
        let email = await page.waitForXPath('//*[@id="exampleInputEmail1"]');
        await email.type('jul.doe@iastate.edu');

        let password = await page.waitForXPath('//*[@id="exampleInputPassword1"]');
        await password.type('1234');
        await page.screenshot({ path: 'login_toAccount_3.png', fullPage: 'true' });

        let sub = await page.waitForXPath('//*[@id="test_only"]');
        await sub.click();

        const text2 = await page.$eval("p",element => element.textContent);
        expect(text2).toContain("Time left to answer survey: ");

        //goes to update preferences and submits default data
        let update = await page.waitForXPath('//*[@id="update"]');
        await update.click();

        const text3 = await page.$eval("h1",element => element.textContent);
        expect(text3).toContain("Select 1-3 based on personal preferences");

        await page.screenshot({ path: 'update_preferences_4.png', fullPage: 'true' });

        let sub2 = await page.waitForXPath('//*[@id="urmom"]');
        await sub2.click();

        //view results of matching roommates
        let roommate = await page.waitForXPath('//*[@id="view"]');
        await roommate.click();
        
    })

    afterAll(()=>browser.close());
});
