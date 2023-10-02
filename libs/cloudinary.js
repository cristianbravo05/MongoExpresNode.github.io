//import { v2 as cloudinary } from "cloudinary";
const v2 = require("cloudinary");
//import { API_KEY, API_SECRET, CLOUD_NAME } from "../config.js";

/*cloudinary.config({
  cloud_name: dz0utotfu,
  api_key: 699252152583849,
  api_secret: API_SECRET,
});*/

v2.config({ 
  cloud_name: 'dz0utotfu', 
  api_key: '699252152583849', 
  api_secret: 'j-Ekq8QCGlIuGZsqtjHcyl5fOsM' 
});

exports.uploadImage = async (filePath) => {
  return await v2.uploader.upload(filePath, {
    folder: "posts",
  });
};

exports.deleteImage = async (id) => {
  return await v2.uploader.destroy(id);
};

