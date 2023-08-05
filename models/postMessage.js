import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String, // This will be a string representation of the image
  likes: {
    type: [String],
    default: [],
  },
  comments: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date() // This will be the current date
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
