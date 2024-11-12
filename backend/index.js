const express = require("express");
const multer = require("multer");
const { google } = require("googleapis");

const path = require("path");
const cors = require("cors");

const fs = require("fs");

const app = express();

// const AUTH_URL = process.env.AUTH_SCOPE;
// const FOLDER_ID = process.env.FOLDER_ID;

// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, callback) => {
//     const extension = file.originalname.split(".").pop();
//     callback(null, `${file.fieldname}-${Date.now()}.${extension}`);
//   },
// });

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/upload", upload.array("files"), async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "key.json",
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const drive = google.drive({
      version: "v3",
      auth,
    });

    const uploadedFiles = [];

    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];

      const response = await drive.files.create({
        requestBody: {
          name: file.originalname,
          mimeType: file.mimeType,
          parents: ["1Jf6W0Wmc6WaUeTijcxGQHpqUFYQ4m8fP"],
        },
        media: {
          // body: fs.createReadStream(file.path),
          body: Buffer.from(file.buffer),
        },
      });

      uploadedFiles.push(response.data);
    }

    res.json({ files: uploadedFiles });
  } catch (error) {
    console.log(error);
  }
});

// app.get("/upload", (req, res) => {
//   return upload.array("files");
// });

app.listen(5000, () => {
  console.log("app is listening on port 5000");
});

module.exports = app;
