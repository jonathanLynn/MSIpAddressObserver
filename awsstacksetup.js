//The below code creates the DynamoDB Table and Associated Keys.

var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-southeast-2'});
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  AttributeDefinitions: [
    {
      AttributeName: 'ROUTE_ID',
      AttributeType: 'N'
    },
    {
      AttributeName: 'ROUTE_IPv4',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'ROUTE_ID',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'ROUTE_IPv4',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'Office365',
  StreamSpecification: {
    StreamEnabled: false
  }
};

// Call DynamoDB to create the table
ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});