const {Builder, By, until} = require('selenium-webdriver');
let driver = new Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://www.google.com/ncr');
var currentURL = driver.getCurrentUrl().toString();
console.log("***>>> getCurrentUrl: "+currentURL);
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();