'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));
restService.use(bodyParser.json());


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
                        },
                        {
                            "title": "Health"
                        }
                    ],
                    "type": "suggestion_chips"
                }
            ]
        });
    }


    if (req.body.result.action == "CarInsurance.CarInsurance-no") {
        return res.json({
            "followupEvent": {
                "name": "WELCOME"
            }
                
            
        });
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
