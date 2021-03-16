import mongoose from 'mongoose';

const peopleSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  job: String,
  name: String,
  creator: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PeopleList = mongoose.model('PeopleList', peopleSchema);

export default PeopleList;
