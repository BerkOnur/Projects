
const {Builder, By, Key,util,} = require("selenium-webdriver");

    
    let driver = new Builder().forBrowser("chrome").build();

    (async function example() {
        try{
            await driver.get("https://www.instagram.com/accounts/login/?hl=en");
            await new Promise((resolve,reject) => setTimeout(resolve,5000));
            await driver.findElement(By.name("username")).sendKeys("USERNAME");
            await driver.findElement(By.name("password")).sendKeys("PASSWORD");
            await driver.findElement(By.xpath("//button/div")).click();
            await new Promise((resolve,reject) => setTimeout(resolve,5000));
            await driver.findElement(By.xpath("//button[contains(.,'Not Now')]")).click()
            await driver.findElement(By.className("aOOlW   HoLwm ")).click()

        }
        catch(error){
            console.log(error)

        }
    })();