const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

const tableName = "CameroonianHitsTable";

const documentClient = new AWS.DynamoDB.DocumentClient();

// the query operation to get all songs by Artist Jovi
// an object will be returned with multiple Items.
// we set :artist in the ExpressionAttributeValues

getSongsByArtist = async () => {
  try {
    const params = {
      TableName: tableName,
      KeyConditionExpression: "artist = :artist",
      ExpressionAttributeValues: {
        ":artist": "Jovi",
      },
    };
    const result = await documentClient.query(params).promise();
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error(error);
  }
};

getSongsByArtist();
