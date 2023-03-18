import mongoose from "mongoose";

const CharactersgSchema = new mongoose.Schema({
  groups: [
    {
      type: String,
    },
  ],
});

export default mongoose.model("Charactersg", CharactersgSchema);
/*
"groups":[
		{
			"name":"Stark",
			"characters":[
				"Arya Stark",
				"Benjen Stark",
				"Bran Stark",
				"Catelyn Stark",
				"Eddard Stark",
				"Ghost",
				"Grey Wind",
				"Jon Snow",
				"Lady",
				"Nymeria",
				"Rickon Stark",
				"Robb Stark",
				"Sansa Stark",
				"Shaggydog",
				"Summer"
			]
*/
