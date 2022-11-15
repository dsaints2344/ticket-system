import mongoose from "mongoose";

// * User Properties
interface UserAttrs {
  email: string;
  password: string;
}

// * User Model
interface UserModel extends mongoose.Model<UserDoc> {
  build(UserAttrs: UserAttrs): UserDoc;
}

// * User Document

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
