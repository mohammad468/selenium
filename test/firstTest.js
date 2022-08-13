const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const should = require("chai").should();

describe("render todo", () => {
  it("testing add a todo", async () => {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

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
    todoText.should.equal("Learn Selenium");
    // close the browser
    await driver.quit();
  });
});

// const example = async () => {
//   try {
//     // launch the browser
//     let driver = await new Builder().forBrowser("chrome").build();
//     await driver.get("https://lambdatest.github.io/sample-todo-app/");

//     //add a todo
//     await driver
//       .findElement(By.id("sampletodotext"))
//       .sendKeys("Learn Selenium", Key.RETURN);

//     //assert
//     let todoText = await driver
//       .findElement(By.xpath("//li[last()]"))
//       .getText()
//       .then(function (value) {
//         return value;
//       });
//     // assert using node assertion
//     // assert.strictEqual(todoText, "Learn Selenium");

//     //assert using chai should
//     todoText.should.equal("Learn Selenium");
//     // close the browser
//     await driver.quit();
//   } catch (error) {
//     console.log(error);
//   }
// };

// example();
