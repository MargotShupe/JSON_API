import mongoose from "../db/connection.js";

const CharactersgSchema = new mongoose.Schema({
  groups: {
    type: "array",
    items: [
      {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          characters: {
            type: "array",
            items: [
              {
                type: "string",
              },
            ],
          },
        },
      },
    ],
  },
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
