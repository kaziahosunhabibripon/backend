import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process_params.CLOUDINARY_CLOUD_NAME,
  api_key: process_params.CLOUDINARY_API_KEY,
  api_secret: process_params.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      const uploadResult = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      console.log(
        `File uploaded successfully on cloudinary ${uploadResult.url}`
      );

      return uploadResult;
    }
  } catch (err) {
    fs.unlinkSync(localFilePath); // delete the local file path
    console.log(err);
  }
};
