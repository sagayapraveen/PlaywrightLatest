const{When,Then} = require('@cucumber/cucumber');
const{LoginPage} = require('../page/LoginPage');
 
let lp = new LoginPage();
 
When('user is on login page',async()=>{
    await lp.navigate();
})
 
When('user enter the username', async()=>{
    await lp.enterUserName();
 
})
 
When('user enter the password',async()=>{
    await lp.enetrPassword();
})
 
When('user click the button',async()=>{
    await lp.clickLogin();
})
 
Then('user should verify title',async()=>{
    await lp.verifyTitle();
})