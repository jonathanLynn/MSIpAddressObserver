const fetch = require("node-fetch");

fetch('https://endpoints.office.com/endpoints/worldwide?clientrequestid=b10c5ed1-bad1-445f-b386-b919946339a7')
  .then(response => response.json())
  //var apiResponse = response
  .then(response => response[0]["ips"])
  .then((response) => {

    function pushtoDB(response) {
             //AWS DynamoDB Session
             var AWS = require('aws-sdk');
             AWS.config.update({region: 'ap-southeast-2'});
             // Create the DynamoDB service object
             var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
             for (i = 0; i < response.length; i++) {
                formattedString = "'" + response[i] + "'"
                formattedKey = "'" + i + "'"
                //console.log(response[i])
                var params = {
                  TableName: 'Office365-2', //Changed from Office365
                  Item: {
                      'ROUTE_ID' : {S: formattedKey}, // Changed from 'ROUTE_ID' : {N: '0'},
                      'ROUTE_IPv4' : {S: formattedString} //Changed from 'ROUTE_IPv4' : {S: formattedString}
                        }
                              };
                  ddb.putItem(params, function(err, data) {
                  if (err) {
                  console.log("Something went terribly wrong!", err);
                  } else {
                  console.log("Success!!", data);
                  }
                  });
                                                    }
                                };
    pushtoDB(response)
                              });
