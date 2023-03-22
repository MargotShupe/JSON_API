import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/gameofthrones", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;
/*import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/gameofthrones", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;
*/
