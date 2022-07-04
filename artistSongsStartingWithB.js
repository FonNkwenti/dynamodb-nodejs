const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

const tableName = "CameroonianHitsTable";

const documentClient = new AWS.DynamoDB.DocumentClient();

// Querying for an Artist Songs that begin with B
artistSongsStartingWithB = async () => {
  try {
    const params = {
      KeyConditionExpression: "artist = :artist AND begins_with (song , :song)",
      ExpressionAttributeValues: {
        ":artist": "Blanche Bailly",
        ":song": "B",
      },
      TableName: tableName,
    };
    const result = await documentClient.query(params).promise();
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error(error);
  }
};

artistSongsStartingWithB();
