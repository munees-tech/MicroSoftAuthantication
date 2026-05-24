import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  microsoftId: {
    type: String,
  },
  displayName: {
    type: String,
  },
  email: {
    type: String, 
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
