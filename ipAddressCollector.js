const fetch = require("node-fetch");

fetch('https://endpoints.office.com/endpoints/worldwide?clientrequestid=b10c5ed1-bad1-445f-b386-b919946339a7')
  .then(response => response.json())
  //var apiResponse = response
  //.then(response => response[0]["ips"][0])
  .then((response) => {

    function pushtoDB(response) {
             //AWS DynamoDB Session
             var AWS = require('aws-sdk');
             AWS.config.update({region: 'ap-southeast-2'});
             // Create the DynamoDB service object
             var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
             //Format API Response
             ipAddress = "'" + response[0]["ips"][0] + "'"
 
             var params = {
             TableName: 'Office365',
             Item: {
                 'ROUTE_ID' : {N: '0'},
                 'ROUTE_IPv4' : {S: ipAddress}
                   }
                         };
 
             // Call DynamoDB to add the item to the table
             ddb.putItem(params, function(err, data) {
             if (err) {
             console.log("Error", err);
             } else {
             console.log("Success", data);
             }
             });
             }
    pushtoDB(response);
            });