
/*
const {Builder, By, Key, Button} = require('selenium-webdriver');

(async function example() {
let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.instagram.com');
    await driver.get.findElement(By.name("username"));
    await driver.get.findElement(By.name("password"));
    await driver.get.findElement(By.xpath("button[text()='Giriş Yap']"));
 
    
    username.sendKeys("USERNAME");
    password.sendKeys("PASSWORD");
    login.click(); }
    */
/*
   const {Builder, By, Key, click, RETURN} = require('selenium-webdriver');

   (async function example() {
   let driver = await new Builder().forBrowser('chrome').build();

   await driver.get('https://www.instagram.com');

   const userElement = await driver.findElement(By.xpath("[name='password']"));
   await userElement.sendKeys("USERNAME");
   const passwordElement = await driver.findElement(By.xpath("[name='password']"));
   await passwordElement.sendKeys("asaddad");
   const loginElement = await driver.findElement(By.xpath("[button='Giriş Yap']"));
   await loginElement.click();    
    
   await driver.quit();
   
})();
*/

/*
const {Builder, By, ele, RETURN,setTimeout, Key, until, sendKeys, driver, quit, name, findElement, xpath, passwordElement,elementLocated} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    await driver.get(('https://www.instagram.com/'),setTimeout, 10000);
    await driver.findElement(By.name('username')).sendKeys('USERNAME');
    //await driver.wait(webdriver.until.elementLocated(webdriver.By.id("logged-in-message")));
    //const passwordElement = await driver.findElement(By.xpath("[name='pass']"));
    //await passwordElement.sendKeys('******');
    await driver.findElement(By.name('password')).sendKeys('PASSWORD', Key.RETURN);
    //await driver.findElement(By.xpath('pass')).sendKeys('PASSWORD');
    await (await driver.findElement(By.id('loginbutton'))).click();

    

})();
*/

/*
const {Builder, By, Key, click, RETURN} = require('selenium-webdriver');

(async function example() {
let driver = await new Builder().forBrowser('chrome').build();
try{
await driver.get('https://www.instagram.com');
await driver.findElement(By.name("username")).sendKeys('USERNAME');
await driver.findElement(By.name("password")).sendKeys('PASSWORD', Key.RETURN);
await driver.wait(until.titleIs('Giriş Yap'))
await driver.findElement(By.id("Igw0E")).click();
}
finally{
await driver.quit();
}
})();
*/