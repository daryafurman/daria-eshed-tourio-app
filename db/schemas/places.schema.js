import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const placesSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
  comments: [{ type: String, required: true }],
});

const Places = models.places || model("places", placesSchema);

export default Places;
