import React, { useEffect, useState } from "react";
import searchIcon from "../../resources/images/search-icon.svg"
import controlsIcon from "../../resources/images/controls-icon.svg"
import exportIcon from "../../resources/images/export-icon.svg"
import filterIcon from "../../resources/images/filter-icon.svg"



export const QuoteLibrary = () => {
    const [quotes, setQuotes] = useState([])
    const [isDateFilterShown, setIsDateFilterShown] = useState(false)
    const [filterSearchInput, setfilterSearchInput] = useState("")
    const [filteredQuotes, setfilteredQuotes] = useState(quotes)
    const [filterDateRange, setFilterDateRange] = useState("")
        //let url = "http://localhost:8088"
        let url = "http://localhost:52773/csp/clariti/restapi/getQuotes/"
    // function getQuotes() {
    //     //let url = '"http://localhost:1234/quotes"'
    //     //let url = '../../resources/jsonMock/quoteMock.json'
    //     let url = ""
    //     //let config = {}
    //     fetchQuotes(url).then(quotes => {
    //         quotes
    //     });
        
    //     console.log(quotes)
    // }

    // const fetchQuotes = async (url) => {
    //     return fetch(`${url}/quotes`)
    //         .then(res => res.json())
    //     //const response = await fetch(`${url}/quotes`)
    //     //const quotes = await response.json()
    //     //return quotes
    //   };


    useEffect(
        () => {
            if (filterDateRange != "")
            fetch("http://localhost:52773/csp/clariti/restapi/getQuotes/", {
                method: 'GET'
            })
            .then(response => response.json())
            .then((quotes) => {
                setQuotes(quotes)
                console.log(quotes)
            })
        },
        []
    )

    //handle date filter
    const handlefilterByDate = (dateRange) => {

    };

    // useEffect()
    //     () => {
    //         const filteredResults = quotes.filter(quote => quote.patient )
    //     }



    const handleFilterSearch = (searchValue) => {
        const keyword = searchValue
        console.log("searchvalue", searchValue, "keyword", keyword)

        if (keyword !== '') {
            const results = quotes.filter((quote) => {
              return quote.patient.toLowerCase().startsWith(keyword.toLowerCase());
              // Use the toLowerCase() method to make it case-insensitive
            });
            setfilteredQuotes(results);
          } else {
            setfilteredQuotes(quotes);
            // If the text field is empty, show all users
          }
      
          setfilterSearchInput(keyword);
        
            // setfilterSearchInput(searchValue)
            // //setSearchInput(searchValue)
            // if (filterSearchInput !== '') {
            //     const filteredData = quotes.filter((item) => {
            //         console.log("quotes", quotes, filterSearchInput[0].patient)
            //         //return Object.values(item.patient).join('').toLowerCase().includes(filterSearchInput.patient.toLowerCase())
                    
            //     })
            //     setfilterSearchInput(filteredData)
            // }
            // else{
            //     setfilterSearchInput(quotes)
            // }
        };





        

    return (
        <>
        <div className="table-container">
                <div className="table-title">Quotes</div>
                <div className="filterTable">
                    <div>Filter</div>
                    <div>Quote Date Range</div>
                    { isDateFilterShown ? 
                    <>
                        <button id="hideDateFilterBtn" onClick={() => setIsDateFilterShown(false)}>x</button>
                        <div id="dateFilterMenu">
                            <div>
                                <input type="radio" id="dateRangeToday" value="dateRangeToday"></input>
                                <label htmlFor="dateRangeToday">Today</label>
                            </div>
                            <div>
                                <input type="radio" id="dateRangeWeek" value="dateRangeWeek"></input>
                                <label htmlFor="dateRangeWeek">This Week</label>
                            </div>
                            <div>
                                <input type="radio" id="dateRangeMonth" value="dateRangeMonth"></input>
                                <label htmlFor="dateRangeMonth">This Month</label>
                            </div>
                            <div>
                                <input type="radio" id="dateRangeCustom" value="dateRangeCustom"></input>
                                <label htmlFor="dateRangeCustom">Custom</label>
                            </div>
                            <div>
                                <label htmlFor="customDateFrom">From</label>
                                <input type="date" id="customDateFrom" name="customDateFrom"></input>
                            </div>
                            <div>
                                <label htmlFor="customDateTo">To</label>
                                <input type="date" id="customDateTo" name="customDateTo"></input>
                            </div>
                            <button>Reset</button>
                            <button>Search</button>
                        </div>
                    </> :
                    <></>
                    }
                </div>
                <div className="table-body">
                    <div className="table-header">
                        <div className="table-header-left">
                            <button id="showDateFilterBtn" onClick={() => setIsDateFilterShown(true)}>
                                <img src={filterIcon}/>
                            </button>
                            <div className="table-search">
                                <img src={searchIcon}/>
                                <input onChange={e => handleFilterSearch(e)} placeholder="Search Placeholder Text"></input>
                            </div>
                        </div>
                            <div className="table-header-right">
                                <img src={controlsIcon}/>
                                <img src={exportIcon}/>
                                <button className="table-new-btn">Co-Provider Quote +</button>
                            </div>
                    </div>
                   <div className="quotes-table">
                        {
                            quotes.map(
                                (quote) => {
                                    return <section key={quote.Id}>
                                        <div>{quote.Id}</div>
                                        <div>{quote.CreateDate}</div>
                                        <div>{quote.LastName}</div>
                                        <div>{quote.FirstName}</div>
                                    </section>
                                    
                                }
                            )
                        }
                   </div>
                </div>
            </div>
            <button onClick={() => setQuotes([])}>Get Quote</button>
        </>
    )
}