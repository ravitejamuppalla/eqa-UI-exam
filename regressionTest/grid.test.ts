const reasubaleFunctions = require("../commonFunctions/reasubaleFunctions");
import {expect as chaiExpect, assert } from 'chai';
import 'chai/register-should';
let browserActions=require('../commonFunctions/actions.js');
let tData=require("../testData/gridTest.json");
var jasmineDataProvider = require('jasmine-data-provider');
import loc_gridPage from '../pageObjects/gridPage.js';



describe('Load AG Grid', () => {

    it('Open the Application', () => {


        reasubaleFunctions.open();
      
        
    });

    it('Should display primary column headers', () => {

    /**
     * Waiting for to click on accept all cookies
     * accepting cookies 
     * Validating the all the primary headings
     */

        
        browser.waitUntil(
            () => loc_gridPage.acceptAllCookies.getText() === 'Accept All Cookies',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
        browserActions.clickOn(loc_gridPage.acceptAllCookies);
        browserActions.clickOn(loc_gridPage.columnsButton);

        chaiExpect(browserActions.getElementText(loc_gridPage.participantHeading)).to.include(tData.partipantHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.gameOfChoiceHeading)).to.include(tData.gameofChoiceHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.performanceHeading)).to.include(tData.performanceHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.MonthlyBreakdownHeading)).to.include(tData.monthlyBreakDownHeading);
        
    });

    it('Should verify Primary Column Headers and secondary Column Headers are available in the Columns Sidebar options', () => {


    /**
     * Validating all the  Primary Column Headers and secondary Column Headers in the filters
     */


        browserActions.clickOn(loc_gridPage.columnsButton);

        chaiExpect(browserActions.getElementText(loc_gridPage.participantHeadingColumns)).to.include(tData.partipantHeading);
       
        chaiExpect(browserActions.getElementText(loc_gridPage.nameHeadingColumns)).to.include(tData.nameHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.languageHeadingColumns)).to.include(tData.languageHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.countryHeadingColumns)).to.include(tData.countryHeading);

        chaiExpect(browserActions.getElementText(loc_gridPage.gameOfChoiceHeadingColumns)).to.include(tData.gameofChoiceHeading);

        chaiExpect(browserActions.getElementText(loc_gridPage.gameNameHeadingColumns)).to.include(tData.gameNameHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.boughtHeadingColumns)).to.include(tData.boughtHeading);
        
        chaiExpect(browserActions.getElementText(loc_gridPage.performanceHeadingColumns)).to.include(tData.performanceHeading);

        chaiExpect(browserActions.getElementText(loc_gridPage.bankBalanceHeadingColumns)).to.include(tData.bankBalanceHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.ratingHeadingColumns)).to.include(tData.ratingHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.totalWinningsHeadingColumns)).to.include(tData.totalWinningsHeading);

        chaiExpect(browserActions.getElementText(loc_gridPage.monthlyBreakdownHeadingColumns)).to.include(tData.monthlyBreakDownHeading);

        chaiExpect(browserActions.getElementText(loc_gridPage.JanHeadingColumns)).to.include(tData.janHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.FebHeadingColumns)).to.include(tData.febHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.MarHeadingColumns)).to.include(tData.marHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.AprHeadingColumns)).to.include(tData.aprHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.MayHeadingColumns)).to.include(tData.mayHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.JunHeadingColumns)).to.include(tData.junHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.JulHeadingColumns)).to.include(tData.julHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.AugHeadingColumns)).to.include(tData.augHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.SepHeadingColumns)).to.include(tData.sepHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.OctHeadingColumns)).to.include(tData.octHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.NovHeadingColumns)).to.include(tData.novHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.DecHeadingColumns)).to.include(tData.decHeading);
        
    });


    it('Should verify Secondary Column Headers are available ', () => {

    /**
     * Validating all the Secondary header in the application
     */

        browserActions.clickOn(loc_gridPage.columnsButton);

        chaiExpect(browserActions.getElementText(loc_gridPage.nameSubHeading)).to.include(tData.nameHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.languageSubHeading)).to.include(tData.languageHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.countrySubHeading)).to.include(tData.countryHeading);
        
        chaiExpect(browserActions.getElementText(loc_gridPage.gameNameSubHeading)).to.include(tData.gameNameHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.boughtSubHeading)).to.include(tData.boughtHeading);
        
        chaiExpect(browserActions.getElementText(loc_gridPage.bankBalanceSubHeading)).to.include(tData.bankBalanceHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.ratingSubHeading)).to.include(tData.ratingHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.totalWinningsSubHeading)).to.include(tData.totalWinningsHeading);

        chaiExpect(browserActions.getElementText(loc_gridPage.janSubHeading)).to.include(tData.janHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.febSubHeading)).to.include(tData.febHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.marSubHeading)).to.include(tData.marHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.aprSubHeading)).to.include(tData.aprHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.maySubHeading)).to.include(tData.mayHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.junSubHeading)).to.include(tData.junHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.julSubHeading)).to.include(tData.julHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.augSubHeading)).to.include(tData.augHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.sepSubHeading)).to.include(tData.sepHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.octSubHeading)).to.include(tData.octHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.novSubHeading)).to.include(tData.novHeading);
        chaiExpect(browserActions.getElementText(loc_gridPage.decSubHeading)).to.include(tData.decHeading);

    });


    it('Should Validate that Winnings in October is less than 5000', () => {

        /**
     * The first piece of code is to navigate till Oct column
     * Then it clicks on filter option, selects less than
     * enter 5000 in the search box 
     * get text from all the search results, trims them
     * and verify that search results are less than 5000
     */
    
        browser.pause(3000);
        browserActions.clickOn(loc_gridPage.octFilter);
        browser.pause(3000);
        browserActions.clickOn(loc_gridPage.filterDropDown);
        browser.keys("ArrowDown")
        browser.keys("ArrowDown")
        browser.keys("Enter")
        browser.pause(3000);
        browserActions.enterText(loc_gridPage.enterTextFilter,"5000");
        browserActions.clickOn(loc_gridPage.filterIcon);
        browser.pause(3000);
            var count=0;
            
            for (let index = 1; index < loc_gridPage.octDataValuesLength; index++) {
                
                var octstringValue=(loc_gridPage.octoberData[index]).getText();
                
                var amountvalue = parseFloat(octstringValue.replace(/\$|,/g, ''))
                var amountValueToString=amountvalue.toString();

                  if (amountValueToString<'5000') {
                    count++;    
                } 
                   
            }
            browserActions.clickOn(loc_gridPage.octFilter);
            chaiExpect(loc_gridPage.octDataValuesLength-1).to.equal(count);
            browser.pause(3000);
            browserActions.clickOn(loc_gridPage.resetButton);
            browserActions.clickOn(loc_gridPage.filterIcon);
            
            


    });

    it('Validate that Filtering Name will return result', () => {

         /**
     * I'm using for loop to get all the name search options from canned data.json file
     * The function iterates through each value in json file
     * enters the value in name search box
     * and verify all the search results include the search value.
     */

        
        browserActions.clickOn(loc_gridPage.decSubHeading);
        browser.keys("Tab");
        jasmineDataProvider(tData.searchFirstName, function (NameSearch, Decrption) {

            console.log("The DataProvider Values are"+NameSearch.name);
            browserActions.enterText(loc_gridPage.nameInputText,NameSearch.name);
            browser.pause(3000);
            console.log("The Count of the locators"+loc_gridPage.nameDataValuesLength);
            
            for (let index = 0; index < loc_gridPage.nameDataValuesLength; index++) {
                
    
                chaiExpect(browserActions.getElementText(loc_gridPage.nameDataValues[index])).to.include(NameSearch.name);
                
            }

        });
       
    });
});