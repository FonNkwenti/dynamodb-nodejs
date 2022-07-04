AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

const documentClient = new AWS.DynamoDB.DocumentClient();

const tableName = "CameroonianHitsTable";

const addArtistSong = async () => {
  try {
    const params = {
      Item: {
        artist: "KO-C",
        song: "Balancer",
      },
      TableName: tableName,
    };
    const result = await documentClient.put(params).promise();
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error(error);
  }
};

addArtistSong();
