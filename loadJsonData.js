const AWS = require("aws-sdk");
const fs = require("fs");
AWS.config.update({ region: "us-east-1" });
//-------------------------------

// Create the document client interface for DynamoDB
const documentClient = new AWS.DynamoDB.DocumentClient();

const dynamoDBClient = new AWS.DynamoDB.DocumentClient();

console.log("loading songs to DynamoDB...");

// read song data from the data.json file and parse the json into JS object store in the songData variable
const songData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

songData.forEach(song, =>{

})