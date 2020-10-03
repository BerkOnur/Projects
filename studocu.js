
const {Builder, By, click, id, sendKeys, Key, type, RETURN} = require ('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    await driver.get('https://www.studocu.com/row');
    await (await driver.findElement(By.id('login'))).click();
    await driver.findElement(By.name('email')).sendKeys('E-MAİL');
    await driver.findElement(By.name('password')).sendKeys('PASSWORD');
    await (await driver.findElemen(By.className('primary--xQnDI wide--M4WNY'))).click();
   
})();
