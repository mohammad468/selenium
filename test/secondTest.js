const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const should = require("chai").should();
const mocha = require("mocha");

mocha.describe("render another todo", () => {
  mocha.it("testing add an another todo", async () => {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn JavaScript", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });
    // assert using node assertion
    // assert.strictEqual(todoText, "Learn Selenium");

    //assert using chai should
    todoText.should.equal("Learn JavaScript");
    // close the browser
    await driver.quit();
  });

  mocha.it("testing add an another todo", async () => {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn JavaScript", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });
    // assert using node assertion
    // assert.strictEqual(todoText, "Learn Selenium");

    //assert using chai should
    todoText.should.equal("Learn JS");
    // close the browser
    await driver.quit();
  });
});
