// 'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const restService = express();
var json2csv = require('json2csv');
var fs = require('fs');
restService.use(bodyParser.urlencoded({
    extended: true
}));
restService.use(bodyParser.json());
restService.set("view options", { layout: false });
restService.use(express.static(__dirname + '/public'));




restService.get('/download', function (req, res) {
    res.redirect("/file.csv");
});

// demo api
//Name of brands
restService.get('/demo/:brand', function (req, res) {

    // productData.map(data => {
    //     data.brands.map(brdata => {
    //         console.log(brdata.brand);
    //         if (brdata.brand == req.params.brand) {
    //             brdata.models.map(modelData => {
    //                 if (modelData.model == "Galaxy s7") {
    //                     res.json(modelData)
    //                 }
    //             })
    //         }

    //     })

    // console.log(data.brand+"."+req.params.brand)
    // if (data.name == "phone"&& data.brand+"."+req.params.brand) {
    //     res.json(data.brand="");
    // }
})

//demo api
restService.post('/insuranceinfo', function (req, res) {


    //trending phone

    if (req.body.result.action == "input.welcome") {
        return res.json({
            speech: "successfully entered welcome intent",
            displayText: "successfully entered welcome intent",
            source: 'insurance-bot',
            "messages": [
                {

                    "displayText": "Select one",
                    "platform": "google",
                    "textToSpeech": "Select One",
                    "type": "simple_response"
                },
                {
                    "platform": "google",
                    "suggestions": [
                        {
                            "title": "Car"
                        },
                        {
                            "title": "Bike"
                        },
                        {
                            "title": "Home"
                        }
                    ],
                    "type": "suggestion_chips"
                }
            ]
        });
    }

    // Insurance Data
    if (req.body.result.action == "InsuranceData") {
        let age = req.body.result.parameters['Age'];
        let house = req.body.result.parameters['House'];
        let burglary = req.body.result.parameters['Burglary'];
        let riskCovered = req.body.result.parameters['RiskCovered'];

        // Csv to pdf
       

        // JSON to CSV
        let objs = {
            "age": age,
            "house": house,
            "burglary": burglary,
            "riskCovered": riskCovered
        };
        let fields = ['age', 'house', 'burglary', 'riskCovered'];
        let csv = json2csv({ data: objs, fields: fields });
        fs.writeFile('public/file.csv', csv, function (err) {
            if (err) throw err;
            console.log('file saved');
        });
        // return res.json({
        //    "messages": [
        //        {

        //            "platform": "google",
        //            "displayText": "http://localhost:8000/download",
        //            "textToSpeech": "The quotations available are",
        //            "type": "simple_response"
        //        }]     
        //     })
        // JSON to CSV close
        return res.json({
            "messages": [
                {

                    "displayText": "The quotations available are",
                    "platform": "google",
                    "textToSpeech": "The quotations available are",
                    "type": "simple_response"
                },
                {
                    "items": [
                        {
                            "description": "Premium Rs 10,000 ",
                            "image": {
                                "url": "http://static.sify.com/cms/image/ohvpxadacbjci.jpg"
                            },
                            "optionInfo": {
                                "key": "itemOne",
                                "synonyms": [
                                    "thing one",
                                    "object one"
                                ]
                            },
                            "title": "Kotak Life Insurance"
                        },
                        {
                            "description": "Premium Rs 12000",
                            "image": {
                                "url": "http://1.bp.blogspot.com/_5j_axJRogXw/TBNoyybUpyI/AAAAAAAAABU/mv77_DQxJhU/s1600/LIC_Logo.jpg"
                            },
                            "optionInfo": {
                                "key": "itemTwo",
                                "synonyms": [
                                    "thing two",
                                    "object two"
                                ]
                            },
                            "title": "LIC Life Insurance"
                        }
                    ],
                    "platform": "google",
                    "type": "carousel_card"
                }
            ]
        });
    }

    // Insurance Data close
    // Bike Data new
    if (req.body.result.action == "BikeData") {
        let RegisteredUnder = req.body.result.parameters['RegisteredUnder'];
        let name = req.body.result.parameters['any'];
        let geocity = req.body.result.parameters['geo-city'];
        let date = req.body.result.parameters['date'];
        let BikeBrand = req.body.result.parameters['BikeBrand'];

        // Csv to pdf


        // JSON to CSV
        let objs = {
            "RegisteredUnder": RegisteredUnder,
            "name": name,
            "geocity": geocity,
            "date": date,
            "BikeBrand": BikeBrand
        };
        let fields = ['RegisteredUnder', 'name', 'geocity', 'date','BikeBrand'];
        let csv = json2csv({ data: objs, fields: fields });
        fs.writeFile('public/bike.csv', csv, function (err) {
            if (err) throw err;
            console.log('file saved');
        });
        // return res.json({
        //    "messages": [
        //        {

        //            "platform": "google",
        //            "displayText": "http://localhost:8000/download",
        //            "textToSpeech": "The quotations available are",
        //            "type": "simple_response"
        //        }]     
        //     })
        // JSON to CSV close
        return res.json({
            "messages": [
                {

                    "displayText": "The quotations available are",
                    "platform": "google",
                    "textToSpeech": "The quotations available are",
                    "type": "simple_response"
                },
                {
                    "items": [
                        {
                            "description": "Premium Rs 5,000 ",
                            "image": {
                                "url": "http://static.sify.com/cms/image/ohvpxadacbjci.jpg"
                            },
                            "optionInfo": {
                                "key": "itemOne",
                                "synonyms": [
                                    "thing one",
                                    "object one"
                                ]
                            },
                            "title": "Kotak Life Insurance"
                        },
                        {
                            "description": "Premium Rs 1000",
                            "image": {
                                "url": "http://1.bp.blogspot.com/_5j_axJRogXw/TBNoyybUpyI/AAAAAAAAABU/mv77_DQxJhU/s1600/LIC_Logo.jpg"
                            },
                            "optionInfo": {
                                "key": "itemTwo",
                                "synonyms": [
                                    "thing two",
                                    "object two"
                                ]
                            },
                            "title": "LIC Life Insurance"
                        }
                    ],
                    "platform": "google",
                    "type": "carousel_card"
                }
            ]
        });
    }
    // BIke data close
// Follow up intent
    if (req.body.result.action == "NoIntent") {
        return res.json({
            "followupEvent": {
                "name": "WELCOME"
            }
        });
    }

    //Download file
    if (req.body.result.action == "download") {
        return res.json({
            "messages": [
                {

                    "displayText": "Click on this link to download the file",
                    "platform": "google",
                    "textToSpeech": "Click on this link to download the file",
                    "type": "simple_response"
                },
                {
                    "destinationName": "File",
                    "platform": "google",
                    "type": "link_out_chip",
                    "url": "https://insurance-bott.herokuapp.com/download"
                }
            ]
        
            // "messages": [
            //     {
            //         "platform": "google",
            //         "displayText": "https://insurance-bott.herokuapp.com/download",
            //         "textToSpeech": "The quotations available are",
            //         "type": "simple_response"
            //     }]
        })
    }

})

// restService.post('/slack-test', function(req, res) {

//     var slack_message = {
//         "text": "Details of JIRA board for Browse and Commerce",
//         "attachments": [{
//             "title": "JIRA Board",
//             "title_link": "http://www.google.com",
//             "color": "#36a64f",

//             "fields": [{
//                 "title": "Epic Count",
//                 "value": "50",
//                 "short": "false"
//             }, {
//                 "title": "Story Count",
//                 "value": "40",
//                 "short": "false"
//             }],


//             "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
//         }, {
//             "title": "Story status count",
//             "title_link": "http://www.google.com",
//             "color": "#f49e42",

//             "fields": [{
//                 "title": "Not started",
//                 "value": "50",
//                 "short": "false"
//             }, {
//                 "title": "Development",
//                 "value": "40",
//                 "short": "false"
//             }, {
//                 "title": "Development",
//                 "value": "40",
//                 "short": "false"
//             }, {
//                 "title": "Development",
//                 "value": "40",
//                 "short": "false"
//             }]
//         }]
//     }
//     return res.json({
//         speech: "speech",
//         displayText: "speech",
//         source: 'webhook-echo-sample',
//         data: {
//             "google": slack_message
//         }
//     });
// });


restService.listen((process.env.PORT || 8000), function () {
    console.log("Server is listening to 8000");
});
