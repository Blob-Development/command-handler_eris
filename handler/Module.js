const fs = require("fs"), homePath = process.cwd();

module.exports = client => {
  fs.readdir(`${homePath}/commands/`, (err, categories) => {
    if (err) console.log(err);
    console.log(`[available] ${categories.length} category`);

    categories.forEach(category => {
      let moduleConf = require(`${homePath}/commands/${category}/module.json`);
      if (moduleConf) {
        
        moduleConf.path = `${homePath}/commands/${category}`;
        moduleConf.cmds = [];
        client.helps.set(category, moduleConf);

        fs.readdir(`${homePath}/commands/${category}`, (err, files) => {

          console.log(`[available] ${files.length - 1} cmds - ${category} category`);
          if (err) console.log(err);

          files.forEach(file => {
            if (file.endsWith(".js")) {

              let prop = require(`${homePath}/commands/${category}/${file}`);
              client.commands.set(prop.help.name, prop);
              prop.conf.aliases.forEach(alias => client.aliases.set(alias, prop.help.name));
              client.helps.get(category).cmds.push(prop.help.name);

            };
          });
        });
      };
    });
  });
};
