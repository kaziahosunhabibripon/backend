import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, userName } = req.body;
  res.status(200).json({
    success: true,
    fullName,
    email,
    password,
    userName,
  });
  if (
    [fullName, email, password, userName].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "fullName is required");
  }

  const existedUser = User.findOne({
    $or: [{ email: email }, { userName: userName }],
  });
  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImagePath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImagePath);
  if (!avatar) {
    throw new ApiError(400, "avatar is required");
  }

  const user = await User.create({
    fullName,
    email,
    password,
    userName: userName.toLowerCase(),
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
  });

  const createdUser = await User.findById(user_id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Internal server error while creating user");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, "User register successfully"));
});

export default registerUser;
