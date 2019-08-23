var express = require('express');
var router = express.Router();
var multer  = require('multer');
var {google} = require('googleapis')
var fs= require('fs');
var GoogleDriveStorage = require('multer-google-drive');
var multerGdrive = require('multer-gdrive');
var key = require('../config/credentials.json');
var drive = require('../config/index');
var upload= multer();
var upload = multer({
  storage: GoogleDriveStorage({
    drive: drive,
    parents: '16W4vxwPMIDiDABp8rJKsYZZdOpFYkUtM',
    fileName: function (req, file, cb) {
      console.log(req)
      let filename = `test-${file.originalname}`;
      cb(null, filename);
    }
  })
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/upload',upload.array('fileToUpload',2),(req,res)=>{
      
  res.send('Upload thành công ' + JSON.stringify( req.files) + ' files!')
    
})

module.exports = router;
