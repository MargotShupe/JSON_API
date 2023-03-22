import mongoose from "../db/connection.js";

const EpisodesSchema = new mongoose.Schema({
  episodes: [
    {
      seasonNum: Number,
      episodeNum: Number,
      episodeTitle: String,
      episodeDescription: String,
      openingSequenceLocations: [
        {
          type: String,
        },
      ],
    },
  ],
});

export default mongoose.model("Episodes", EpisodesSchema);

/*{
   "episodes":[
      {
         "seasonNum":1,
         "episodeNum":1,
         "episodeTitle":"Winter Is Coming",
         "episodeLink":"/title/tt1480055/",
         "episodeAirDate":"2011-04-17",
         "episodeDescription":"Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.",
         "openingSequenceLocations":[
            "King's Landing",
            "Winterfell",
            "The Wall",
            "Pentos"
         ],
*/
