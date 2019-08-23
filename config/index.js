const fs = require('fs');
const {google} = require('googleapis');
const token = require('./token.json');
var credentials = require('./credentials.json');
const {client_secret, client_id, redirect_uris} = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);
// console.log(token);
oAuth2Client.setCredentials(token);
const drive = google.drive({version: 'v3',auth: oAuth2Client});
var folder = "16W4vxwPMIDiDABp8rJKsYZZdOpFYkUtM";
// drive.files.list({
//     pageSize: 10,
//     fields: 'nextPageToken, files(id, name)',
//     q:`'${folder}' in parents`
//   }, (err, res) => {
//     if (err) return console.log('The API returned an error: ' + err);
//     const files = res.data.files;
//     if (files.length) {
//       console.log('Files:');
//       files.map((file) => {
//         console.log(`${file.name} (${file.id})`);
//       });
//     } else {
//       console.log('No files found.');
//     }
//   });

//   var fileMetadata = {
//     'name': 'phong.png',
//     parents: [folder]
//   };
//   var media = {
    
//     body: fs.createReadStream('../3.png')
//   };
//   drive.files.create({
//     resource: fileMetadata,
//     media: media,
//     fields: 'id, name',
    
//   }, function (err, file) {
//     console.log( JSON.stringify(file) );
//     if (err) {
//       // Handle error
    
//       console.error(err);
//     } else {
//       console.log('File Id: ', file.data.id);
//     }
//   });
module.exports = drive;