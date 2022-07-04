const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

const tableName = "CameroonianHitsTable";

const documentClient = new AWS.DynamoDB.DocumentClient();

const deleteArtistSong = async () => {
  try {
    const params = {
      Key: {
        artist: "Jovi",
        song: "Et puis quoi?",
      },
      TableName: tableName,
    };
    const result = await documentClient.delete(params).promise();
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error(error);
  }
};

deleteArtistSong();
