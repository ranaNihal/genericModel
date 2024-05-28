import { Document, Schema } from 'mongoose';

export interface IUserSchema extends Document {
  name: string;
  email: string;
  password: string;
}

export const UserSchema = new Schema<IUserSchema>({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'email can not be empty'],
    match: [
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email should be valid',
    ],
  },
  password: {
    type: String,
    required: [true, 'Password can not be empty'],
    minlength: [6, 'Password should include at least 6 chars'],
  },
});
