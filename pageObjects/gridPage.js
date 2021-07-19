class gridPage{



    get acceptAllCookies(){
        return $("[id='onetrust-accept-btn-handler']")
    }

    get columnsButton(){
        return $$("[class='ag-side-button-label']")[0]
    }

    get nameInputText(){
        return $("[aria-label='Name Filter Input']")
    }

    get nameDataValues(){
        return $$("[class='ag-cell-value']")
    }

    get nameDataValuesLength(){
        return $$("[class='ag-cell-value']").length
    }

    get octFilter(){
        return $$("[class='ag-floating-filter-button-button']")[9]
    }

    get filterDropDown(){
        return $$("[aria-label='Filtering operator']")[0]
    }

    get enterTextFilter(){
        return $$("[placeholder='Filter...']")[0]
    }

    get filterIcon(){
        return $("[class='ag-tab ag-tab-selected']")
    }


    get octoberData(){
        return $$("[col-id='oct']")
    }

    get octDataValuesLength(){
        return $$("[col-id='oct']").length
    }

    

    get participantHeading(){
        return $("//div[@class='ag-header-group-cell-label']//span[text()='Participant']")
    }


    get gameOfChoiceHeading(){
        return $("//div[@class='ag-header-group-cell-label']//span[text()='Game of Choice']")
    }

    get performanceHeading(){
        return $("//div[@class='ag-header-group-cell-label']//span[text()='Performance']")
    }

    get MonthlyBreakdownHeading(){
        return $("//div[@class='ag-header-group-cell-label']//span[text()='Monthly Breakdown']")
    }

    get nameSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Name']")
    }

    get languageSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Language']")
    }

    get countrySubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Country']")
    }
    get gameNameSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Game Name']")
    }
    get boughtSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Bought']")
    }
    get bankBalanceSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Bank Balance']")
    }
    get ratingSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Rating']")
    }
    get totalWinningsSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Total Winnings']")
    }
    get janSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Jan']")
    }
    get febSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Feb']")
    }
    get marSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Mar']")
    }
    get aprSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Apr']")
    }
    get maySubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='May']")
    }
    get junSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Jun']")
    }
    get julSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Jul']")
    }
    get augSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Aug']")
    }
    get sepSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Sep']")
    }
    get octSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Oct']")
    }
    get novSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Nov']")
    }
    get decSubHeading(){
        return $("//div[@class='ag-header-cell-label']//span[text()='Dec']")
    }


    get octFilterInput(){
        return $("[aria-label='Oct Filter Input']")
    }

    get resetButton(){
        return $("[ref='resetFilterButton']")
    }

    get participantHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Participant']")
    }
    get nameHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Name']")
    }
    get languageHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Language']")
    }
    get countryHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Country']")
    }
    get gameOfChoiceHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Game of Choice']")
    }
    get gameNameHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Game Name']")
    }
    get boughtHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Bought']")
    }get performanceHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Performance']")
    }
    get bankBalanceHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Bank Balance']")
    }
    get extraInfo1HeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Extra Info 1']")
    }
    get extraInfo2HeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Extra Info 2']")
    }
    get ratingHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Rating']")
    }
    get totalWinningsHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Total Winnings']")
    }
    get monthlyBreakdownHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Monthly Breakdown']")
    }
    get JanHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Jan']")
    }
    get FebHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Feb']")
    }
    get MarHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Mar']")
    }
    get AprHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Apr']")
    }
    get MayHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='May']")
    }
    get JunHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Jun']")
    }
    get JulHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Jul']")
    }
    get AugHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Aug']")
    }
    get SepHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Sep']")
    }
    get OctHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Oct']")
    }
    get NovHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Nov']")
    }
    get DecHeadingColumns(){
        return $("//div[@class='ag-column-select-list']//span[text()='Dec']")
    }
    
    get firsttabledata(){

        return $$("//table[@id='shopping']/tbody/tr")
    }


    get  sortingtabledata(){

        return $$("//tr[@class='ng-star-inserted']")
    }

     selectingtheCheckBox(lastName){
        return $('//td[contains(.,"'+lastName+'")]/parent::tr//td/input[@type="checkbox"]')
    }



}
module.exports=new gridPage();
