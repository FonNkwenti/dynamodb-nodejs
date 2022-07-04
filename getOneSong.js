// GET ONE SONG WITH THE getItem OPERATION AND THE DOCUMENT CLIENT

// Load the AWS SDK for JavaScript
const AWS = require("aws-sdk");

// Set a region to interact with. this must be the same region as your DynamoDB table
AWS.config.update({ region: "us-east-1" });

// Set the table name that we will be using
const tableName = "CameroonianHitsTable";

// Create the Document Client interface for DynamoDB
const documentClient = new AWS.DynamoDB.DocumentClient();

/*
// Get a single item with the getItem operation and Documnet client.
// for demonstration 
async function getOneSong() {
  try {
    const params = {
      Key: {
        artist: "Jovi",
        song: "Et puis quoi?",
      },
      TableName: tableName,
    };
    // const result = await documentClient.get(params, (error, result)).promise();
    const result = await documentClient.get(params).promise();

    console.log(JSON.stringify(result));
  } catch (error) {
    console.error(error);
  }
}
getOneSong();

*/

//getOneSong API
// create the Document Client interface for DynamoDB
module.exports = (event, context, callback) => {
  const params = {
    TableName: tableName,
    Key: {
      artist: event.pathParameters.artist,
      song: event.pathParameters.song,
    },
  };

  // get Song & Artist from DynmoDB Database
  documentClient.get(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.log.apply(error);
      callback(null, {
        statusCode: error.statusCode || 500,
        headers: { "Content-Type": "text/plain" },
        body: `Couldn't fetch Artist and Hit Song.`,
      });
      return;
    }
    // create a response.
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};
