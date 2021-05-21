const Eris = require("eris");
require('pluris')(Eris);

module.exports = class TutorialBot extends Eris.Client {
  constructor(token, options) {
    super(token, options);
    this.commands = new Map();
    this.cooldowns = new Map();
    this.aliases = new Map();
    this.helps = new Map();
    this.recent = new Set();
    this.config = require("../config.json");
    this.package = require("../package.json");
  };
};
