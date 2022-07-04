const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

// Create the Service interface for DynamoDB

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "CameroonianHitsTable",

  AttributeDefinitions: [
    {
      AttributeName: "artist",
      AttributeType: "S",
    },
    {
      AttributeName: "song",
      AttributeType: "S",
    },
  ],

  KeySchema: [
    {
      AttributeName: "artist",
      KeyType: "HASH",
    },
    {
      AttributeName: "song",
      KeyType: "RANGE",
    },
  ],

  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
};

// Create the table.

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.log("Not able to create Table", err);
  } else {
    console.log("Table Created", data);
  }
});
