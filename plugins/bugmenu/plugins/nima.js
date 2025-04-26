const { exec } = require("child_process");

module.exports = {
  name: "nima", // Main command name
  alias: [],
  description: "Push bugUrl.js file to GitHub",
  category: "owner",
  react: "🚀",
  start: async (Miku, m, { text, args }) => {
    if (args[0] !== "bug") {
      return m.reply("❌ Invalid subcommand! Use: nima bug");
    }
    exec('git add bugUrl.js && git commit -m "Add bugUrl.js file" && git push', (err, stdout, stderr) => {
      if (err) {
        return m.reply(`❌ Error:\n${stderr}`);
      }
      m.reply(`✅ Successfully pushed bugUrl.js to GitHub!\n\n${stdout}`);
    });
  }
};
