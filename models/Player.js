const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  playerid: {
    type: Number,
    required: true
  },
  Rock: {
    type: Boolean,
    required: true
  },
  Paper: {
    type: Boolean,
    required: true
  },
  Scissors: {
    type: Boolean,
    required: true
  },
  Games: {
    type: Number,
    default: 0
  }
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;