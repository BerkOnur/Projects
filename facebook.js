const {Builder, By, ele, RETURN, setTimeout, Key, until, sendKeys, driver, quit, name, findElement, xpath, passwordElement,elementLocated} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    await driver.get('https://tr-tr.facebook.com/');
    await driver.findElement(By.name('email')).sendKeys('E-MAİL');
    //await driver.wait(webdriver.until.elementLocated(webdriver.By.id("logged-in-message")));
    //const passwordElement = await driver.findElement(By.xpath("[name='pass']"));
    //await passwordElement.sendKeys('PASSWORD');
    await driver.findElement(By.name('pass')).sendKeys('PASSWORD', Key.RETURN);
    //await driver.findElement(By.xpath('pass')).sendKeys('');
    await (await driver.findElement(By.id('loginbutton'))).click();
    
})();



