import React, { useState, useEffect } from 'react';
import * as FlexmonsterReact from 'react-flexmonster/hooks';

import './ChartsColors.css';

function PivotTableHooks (props) {

    const pivot_ref = React.useRef();
    const column_chart_ref = React.useRef();
    const line_chart_ref = React.useRef();
    const line_chart2_ref = React.useRef();
    const line_chart3_ref = React.useRef();

    const onReportComplete = () => {
        console.log(">>>>", pivot_ref.current.flexmonster(), pivot_ref.current.flexmonster().getReport());
    }

const syncFilters = () => {
    if (!pivot_ref || !column_chart_ref || !line_chart_ref || !line_chart2_ref || !line_chart3_ref) return;
    // apply filters from the pivot table to all the charts
    var hierarchies = pivot_ref.current.flexmonster().getAllHierarchies();
    hierarchies.forEach(function(item) {
        column_chart_ref.current.flexmonster().setFilter(item.uniqueName, pivot_ref.current.flexmonster().getFilter(item.uniqueName));
        line_chart_ref.current.flexmonster().setFilter(item.uniqueName, pivot_ref.current.flexmonster().getFilter(item.uniqueName));
        line_chart2_ref.current.flexmonster().setFilter(item.uniqueName, pivot_ref.current.flexmonster().getFilter(item.uniqueName));
        line_chart3_ref.current.flexmonster().setFilter(item.uniqueName, pivot_ref.current.flexmonster().getFilter(item.uniqueName));
    });
}
    const dataset = [{
                             "Revenue": {
                                 "type": "number"
                             },
                             "Burn Rate": {
                                 "type": "number"
                             },
                             "Net Sales": {
                                 "type": "number"
                             },
                             "Expenses": {
                                 "type": "number"
                             },
                             "Date": {
                                 "type": "date"
                             },
                             "Date Time": {
                                 "type": "date string"
                             },
                             "Discount": {
                                 "type": "number"
                             }
                         },
                         {
                             "Burn Rate": 0.01,
                             "Revenue": 455,
                             "Net Sales": 250,
                             "Expenses": 55,
                             "Date": "2018-02-14T07:34:08",
                             "Date Time": "2018-02-14T07:34:08",
                             "Discount": 45
                         },
                         {
                             "Burn Rate": 0.01,
                             "Revenue": 455,
                             "Net Sales": 250,
                             "Expenses": 55,
                             "Date": "2018-04-14T07:34:08",
                             "Date Time": "2018-04-14T07:34:08",
                             "Discount": 45
                         },
                         {
                             "Burn Rate": 0.01,
                             "Revenue": 156,
                             "Net Sales": 501,
                             "Expenses": 55,
                             "Date": "2018-02-14T07:34:08",
                             "Date Time": "2018-02-14T07:34:08",
                             "Discount": 48
                         },
                         {
                             "Burn Rate": 0.01,
                             "Revenue": 455,
                             "Net Sales": 302,
                             "Expenses": 75,
                             "Date": "2018-01-11T07:28:30",
                             "Date Time": "2019-01-11T07:28:30",
                             "Discount": 95
                         },
                         {
                             "Burn Rate": 0.01,
                             "Revenue": 455,
                             "Net Sales": 205,
                             "Expenses": 75,
                             "Date": "2019-01-11T07:28:30",

                             "Date Time": "2016-01-11T07:28:30",
                             "Discount": 14
                         },
                         {
                             "Burn Rate": 0.23,
                             "Revenue": 236,
                             "Net Sales": 63,
                             "Expenses": 55,
                             "Date": "2019-11-27T06:52:07",
                             "Discount": 45
                         },
                         {
                             "Burn Rate": 0.23,
                             "Revenue": 355,
                             "Net Sales": 140,
                             "Expenses": 55,
                             "Date": "2019-11-27T06:52:07",
                             "Discount": 43
                         },
                         {
                             "Burn Rate": 0.23,
                             "Revenue": 354,
                             "Net Sales": 88,
                             "Expenses": 65,
                             "Date": "2019-10-13T05:34:44",
                             "Discount": 45
                         }, {
                             "Burn Rate": 0.31,
                             "Revenue": 354,
                             "Net Sales": 170,
                             "Expenses": 65,
                             "Date": "2019-10-13T05:34:44",
                             "Discount": 45
                         },
                         {
                             "Burn Rate": 0.32,
                             "Revenue": 354,
                             "Net Sales": 230,
                             "Expenses": 55,
                             "Date": "2014-11-20T07:16:26",
                             "Discount": 45
                         },
                         {
                             "Burn Rate": 0.42,
                             "Revenue": 354,
                             "Net Sales": 160,
                             "Expenses": 25,
                             "First Name": "Vega",
                             "Last Name": "Sexton",
                             "Company": "KONNECT",
                             "Date": "2018-12-18T01:26:57",
                             "Discount": 22
                         },
                         {
                             "Burn Rate": 0.47,
                             "Revenue": 352,
                             "Net Sales": 180,
                             "Date": "2018-09-12T05:29:36",
                             "Discount": 89
                         },
                         {
                             "Burn Rate": 0.23,
                             "Revenue": 654,
                             "Net Sales": 190,
                             "Expenses": 23,
                             "Date": "2019-06-13T11:43:37",
                             "Discount": 78
                         },
                         {
                             "Burn Rate": 0.23,
                             "Revenue": 355,
                             "Net Sales": 140,
                             "Expenses": 55,
                             "Date": "2018-10-03T05:41:44",
                             "Discount": 23
                         },
                         {
                             "Burn Rate": 0.23,
                             "Revenue": 770,
                             "Net Sales": 177,
                             "Expenses": 23,
                             "Date": "2014-04-28T06:05:53",
                             "Discount": 15
                         },
                         {
                             "Burn Rate": 0.23,
                             "Revenue": 770,
                             "Net Sales": 200,
                             "Expenses": 45,
                             "Date": "2014-06-13T03:03:22",
                             "Discount": 44
                         },
                         {
                             "Burn Rate": 0.256,
                             "Revenue": 770,

                             "Net Sales": 300,
                             "Expenses": 55,

                             "Date": "2018-07-28T12:04:26",
                             "Discount": 22
                         },
                         {
                             "Burn Rate": 0.256,
                             "Revenue": 770,
                             "Net Sales": 140,
                             "Expenses": 55,
                             "Date": "2014-12-31T10:21:58",
                             "Discount": 45
                         },
                         {
                             "Burn Rate": 0.256,
                             "Revenue": 550,
                             "Net Sales": 120,
                             "Expenses": 55,
                             "Date": "2017-09-09T07:11:20",
                             "Discount": 88
                         },
                         {
                             "Burn Rate": 0.256,
                             "Revenue": 655,
                             "Net Sales": 88,
                             "Expenses": 45,
                             "Date": "2014-06-15T12:41:23",
                             "Discount": 35
                         },
                         {
                             "Burn Rate": 0.256,
                             "Revenue": 354,
                             "Net Sales": 90,
                             "Expenses": 55,
                             "Date": "2017-12-08T11:25:50",
                             "Discount": 74
                         },
                         {
                             "Burn Rate": 0.36,
                             "Revenue": 322,
                             "Net Sales": 30,
                             "Expenses": 55,
                             "Date": "2018-03-18T04:39:25",
                             "Discount": 41
                         },
                         {
                             "Burn Rate": 0.41,
                             "Revenue": 322,
                             "Net Sales": 140,
                             "Expenses": 55,
                             "Date": "2014-11-18T11:59:17",
                             "Discount": 44
                         },
                         {
                             "Burn Rate": 0.23,
                             "Revenue": 774,
                             "Net Sales": 220,
                             "Expenses": 123,
                             "Date": "2018-08-06T03:38:09",
                             "Discount": 99
                         },
                         {
                             "Burn Rate": 0.01,
                             "Revenue": 436,
                             "Net Sales": 130,
                             "Expenses": 123,
                             "Date": "2014-07-16T08:27:06",
                             "Discount": 36
                         },
                         {
                             "Burn Rate": 0.01,
                             "Revenue": 655,
                             "Net Sales": 70,
                             "Expenses": 123,
                             "Date": "2019-02-01T01:16:28",
                             "Discount": 98
                         },
                         {
                             "Burn Rate": 0.01,
                             "Revenue": 455,
                             "Net Sales": 140,
                             "Expenses": 123,
                             "Date": "2019-02-01T01:16:28",
                             "Discount": 105
                         }
                     ];

    const pivot_report = {
                                 dataSource: {
                                     data: dataset
                                 },
                                 "slice": {
                                     "reportFilters": [{
                                         "uniqueName": "Date.Year",
                                         "filter": {
                                             "members": [
                                                 "date.year.[2018]",
                                                 "date.year.[2019]"
                                             ]
                                         }
                                     }],
                                     "rows": [{
                                         "uniqueName": "Date.Month"
                                     }],
                                     "columns": [{
                                         "uniqueName": "[Measures]"
                                     }],
                                     "measures": [{
                                             "uniqueName": "Revenue",
                                             "aggregation": "sum"
                                         },
                                         {
                                             "uniqueName": "Discount",
                                             "aggregation": "sum"
                                         },
                                         {
                                             "uniqueName": "Net Sales",
                                             "aggregation": "sum"
                                         },
                                         {
                                             "uniqueName": "Gross Sales",
                                             "formula": "sum(\"Net Sales\") + sum(\"Discount\")",
                                             "caption": "Gross Sales"
                                         },
                                         {
                                             "uniqueName": "Gross Profit Margin",
                                             "formula": "(sum(\"Revenue\") - sum(\"Net Sales\") ) / sum(\"Revenue\")",
                                             "caption": "Gross Profit Margin",
                                             "format": "percentages_formatting"
                                         },
                                         {
                                             "uniqueName": "Burn Rate",
                                             "aggregation": "average",
                                             "active": false,
                                             "format": "percentages_formatting"
                                         }
                                     ]
                                 },
                                 "options": {
                                     "showFieldListSearch": true
                                 },
                                 "conditions": [{
                                         "formula": "#value > 6000",
                                         "measure": "Revenue",
                                         "format": {
                                             "backgroundColor": "#00A45A",
                                             "color": "#FFFFFF",
                                             "fontFamily": "Arial",
                                             "fontSize": "12px"
                                         }
                                     },
                                     {
                                         "formula": "#value > 1000",
                                         "measure": "Discount",
                                         "format": {
                                             "backgroundColor": "#df3800",
                                             "color": "#FFFFFF",
                                             "fontFamily": "Arial",
                                             "fontSize": "12px"
                                         }
                                     }
                                 ],
                                 "formats": [{
                                     "name": "percentages_formatting",
                                     "decimalPlaces": 2,
                                     "isPercent": true
                                 }],
                                 options: {
                                     showFieldListSearch: true
                                 }
                             };


    const report_column_chart = {
                                        dataSource: {
                                            data: dataset
                                        },
                                        "slice": {
                                            "rows": [{
                                                "uniqueName": "Date.Month"
                                            }],
                                            "columns": [{
                                                "uniqueName": "[Measures]"
                                            }],
                                            "measures": [{
                                                    "uniqueName": "Burn Rate",
                                                    "aggregation": "average",
                                                    "format": "percentages_formatting"
                                                },
                                                {
                                                    "uniqueName": "Revenue",
                                                    "aggregation": "sum"
                                                },
                                                {
                                                    "uniqueName": "Discount",
                                                    "aggregation": "sum"
                                                },
                                                {
                                                    "uniqueName": "Net Sales",
                                                    "aggregation": "sum"
                                                },
                                                {
                                                    "uniqueName": "Expenses",
                                                    "aggregation": "sum"
                                                },
                                                {
                                                    "uniqueName": "Gross Sales",
                                                    "formula": "sum(\"Net Sales\") + sum(\"Discount\")",
                                                    "caption": "Gross Sales"
                                                },
                                                {
                                                    "uniqueName": "Gross Profit Margin",
                                                    "formula": "(sum(\"Revenue\") - sum(\"Net Sales\") ) / sum(\"Revenue\")",
                                                    "caption": "Gross Profit Margin",
                                                    "format": "percentages_formatting"
                                                }
                                            ]
                                        },
                                        "options": {
                                            "viewType": "charts",
                                            "chart": {
                                                "multipleMeasures": true,
                                                "activeMeasure": [{
                                                        "uniqueName": "Revenue",
                                                        "aggregation": "sum"
                                                    },
                                                    {
                                                        "uniqueName": "Expenses",
                                                        "aggregation": "sum"
                                                    }
                                                ]
                                            }
                                        },
                                        "formats": [{
                                            "name": "percentages_formatting",
                                            "decimalPlaces": 2,
                                            "isPercent": true
                                        }]
                                    };

    const report_line_chart = {
                                      dataSource: {
                                          data: dataset
                                      },
                                      "slice": {
                                          "rows": [{
                                              "uniqueName": "Date.Month"
                                          }],
                                          "columns": [{
                                              "uniqueName": "[Measures]"
                                          }],
                                          "measures": [{
                                                  "uniqueName": "Burn Rate",
                                                  "aggregation": "average",
                                                  "format": "percentages_formatting"
                                              },
                                              {
                                                  "uniqueName": "Revenue",
                                                  "aggregation": "sum"
                                              },
                                              {
                                                  "uniqueName": "Discount",
                                                  "aggregation": "sum"
                                              },
                                              {
                                                  "uniqueName": "Net Sales",
                                                  "aggregation": "sum"
                                              },
                                              {
                                                  "uniqueName": "Expenses",
                                                  "aggregation": "sum"
                                              },
                                              {
                                                  "uniqueName": "Gross Sales",
                                                  "formula": "sum(\"Net Sales\") + sum(\"Discount\")",
                                                  "caption": "Gross Sales"
                                              },
                                              {
                                                  "uniqueName": "Gross Profit Margin",
                                                  "formula": "(sum(\"Revenue\") - sum(\"Net Sales\") ) / sum(\"Revenue\")",
                                                  "caption": "Gross Profit Margin",
                                                  "format": "percentages_formatting"
                                              }
                                          ]
                                      },
                                      "options": {
                                          "viewType": "charts",
                                          "chart": {
                                              "type": "line",
                                              "activeMeasure": {
                                                  "uniqueName": "Gross Profit Margin",
                                                  "aggregation": "none"
                                              }
                                          }
                                      },
                                      "formats": [{
                                          "name": "percentages_formatting",
                                          "decimalPlaces": 2,
                                          "isPercent": true
                                      }]
                                  };
    const report_line_chart_2 = {
                                        dataSource: {
                                            data: dataset
                                        },
                                        "slice": {
                                            "rows": [{
                                                "uniqueName": "Date.Month"
                                            }],
                                            "columns": [{
                                                "uniqueName": "[Measures]"
                                            }],
                                            "measures": [{
                                                    "uniqueName": "Burn Rate",
                                                    "aggregation": "average",
                                                    "format": "percentages_formatting"
                                                },
                                                {
                                                    "uniqueName": "Revenue",
                                                    "aggregation": "sum"
                                                },
                                                {
                                                    "uniqueName": "Discount",
                                                    "aggregation": "sum"
                                                },
                                                {
                                                    "uniqueName": "Net Sales",
                                                    "aggregation": "sum"
                                                },
                                                {
                                                    "uniqueName": "Expenses",
                                                    "aggregation": "sum"
                                                },
                                                {
                                                    "uniqueName": "Gross Sales",
                                                    "formula": "sum(\"Net Sales\") + sum(\"Discount\")",
                                                    "caption": "Gross Sales"
                                                },
                                                {
                                                    "uniqueName": "Gross Profit Margin",
                                                    "formula": "(sum(\"Revenue\") - sum(\"Net Sales\") ) / sum(\"Revenue\")",
                                                    "caption": "Gross Profit Margin",
                                                    "format": "percentages_formatting"
                                                }
                                            ]
                                        },
                                        "options": {
                                            "viewType": "charts",
                                            "chart": {
                                                "type": "line",
                                                "activeMeasure": {
                                                    "uniqueName": "Burn Rate",
                                                    "aggregation": "average"
                                                }
                                            }
                                        },
                                        "formats": [{
                                            "name": "percentages_formatting",
                                            "decimalPlaces": 2,
                                            "isPercent": true
                                        }]
                                    };

    const report_line_chart_3 = {
                                       dataSource: {
                                           data: dataset
                                       },
                                       "slice": {
                                           "reportFilters": [{
                                               "uniqueName": "Date.Year",
                                               "filter": {
                                                   "members": [
                                                       "date.year.[2018]",
                                                       "date.year.[2019]"
                                                   ]
                                               }
                                           }],
                                           "rows": [{
                                               "uniqueName": "Date.Month"
                                           }],
                                           "columns": [{
                                               "uniqueName": "[Measures]"
                                           }],
                                           "measures": [{
                                                   "uniqueName": "Burn Rate",
                                                   "aggregation": "average",
                                                   "format": "percentages_formatting"
                                               },
                                               {
                                                   "uniqueName": "Revenue",
                                                   "aggregation": "sum"
                                               },
                                               {
                                                   "uniqueName": "Discount",
                                                   "aggregation": "sum"
                                               },
                                               {
                                                   "uniqueName": "Net Sales",
                                                   "aggregation": "sum"
                                               },
                                               {
                                                   "uniqueName": "Expenses",
                                                   "aggregation": "sum"
                                               },
                                               {
                                                   "uniqueName": "Gross Sales",
                                                   "formula": "sum(\"Net Sales\") + sum(\"Discount\")",
                                                   "caption": "Gross Sales"
                                               },
                                               {
                                                   "uniqueName": "Gross Profit Margin",
                                                   "formula": "(sum(\"Revenue\") - sum(\"Net Sales\") ) / sum(\"Revenue\")",
                                                   "caption": "Gross Profit Margin",
                                                   "format": "percentages_formatting"
                                               }
                                           ]
                                       },
                                       "options": {
                                           "viewType": "charts",
                                           "chart": {
                                               "type": "line",
                                               "activeMeasure": {
                                                   "uniqueName": "Revenue",
                                                   "aggregation": "sum"
                                               }
                                           }
                                       },
                                       "formats": [{
                                           "name": "percentages_formatting",
                                           "decimalPlaces": 2,
                                           "isPercent": true
                                       }]
                                   };

    return <div className="App">
            <FlexmonsterReact.Pivot ref={pivot_ref} toolbar={true} width="100%" report={pivot_report} reportcomplete={onReportComplete}  reportchange={syncFilters}/>
            <FlexmonsterReact.Pivot ref={column_chart_ref} toolbar={false} width="100%" report={report_column_chart}/>
            <FlexmonsterReact.Pivot ref={line_chart_ref} toolbar={false} width="100%" report={report_line_chart}/>
            <FlexmonsterReact.Pivot ref={line_chart2_ref} toolbar={false} width="100%" report={report_line_chart_2}/>
            <FlexmonsterReact.Pivot ref={line_chart3_ref} toolbar={false} width="100%" report={report_line_chart_3}/>
           </div>;    
}

export default PivotTableHooks;
