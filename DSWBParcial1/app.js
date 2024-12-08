const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send(' Hello nati');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/tvshows");
            

var TVShowCtrl = require("./controllers/tvshows");
// API routes
var tvshows = express.Router();
tvshows
  .route("/tvshows")
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);
tvshows
  .route("/tvshows/:id")
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);
app.use("/api", tvshows);
            
            