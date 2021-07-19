 function BrowserActions(){

    this.clickOn=function(oelement){

        try {
           
            this.scrolltoView(oelement)
             oelement.click().then(function(){
                return true;
            });
            
        } catch (error) {
            return false;
            
        }
        
    };
    this.clickAndWait= function(oelement,time){

        try {
           
             oelement.click().then(function(){
                return true;
            });

           browser.pause(time)
            
        } catch (error) {
            
            return false;
            
        }
        
    };

    this.enterText=function(oelement,value){
        try {   
            this.scrolltoView(oelement)
                 oelement.setValue(value).then(function(status){

                    return status;
                })
           
        } catch (error) {
           
            return false;
            
        }
    };
    this.clearText=function(oelement){
        try {
                 oelement.clearValue().then(function(status){

                    return status;
                })
           
        } catch (error) {
            
            return false;
            
        }
    };
    this.selectDrpByVisibleText=function(oelement,value){
        try {
                 oelement.selectByVisibleText(value).then(function(status){

                    return status;
                })  
        } catch (error) {
            return false;
            
        }
    };

    this.selectDrpByIndexValue=function(oelement,value){
        try {
                 oelement.selectByIndex(value).then(function(status){

                    return status;
                })  
        } catch (error) {
            return false;
            
        }
    };

    this.getElementText=function(oelement){

        try {

        this.scrolltoView(oelement)
        return (oelement).getText();
        }
        catch (error) {

            return false;
            
        }
        
    };

    this.scrolltoView=function(oelement){

        try {

            return oelement.scrollIntoView();
            }
            catch (error) {
    
                return false;
                
            }
        
    };

}
module.exports=new BrowserActions();
