const Schema = require("mongoose").Schema;

const todoSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todos", todoSchema);
