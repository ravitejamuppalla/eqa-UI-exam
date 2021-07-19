
let browserActions=require('../commonFunctions/actions.js');


class reasubaleFunctions{

    open(){

        browser.url("https://www.ag-grid.com/example.php");
        browser.maximizeWindow();
    }

}
module.exports=new reasubaleFunctions();
