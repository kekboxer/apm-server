const express = require("express");
const config = require("config");
const db = require("./models");

const appConfig = config.get("app");

const APP_PORT = appConfig.port || 5000;

const app = express();

app.use("/api/auth", require("./routes/auth.routes"));

async function start() {
  try {
    await db.sequelize.authenticate().then(async () => {
      console.log("Connection has been established successfully.");
      await db.sequelize.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db.");
      });
      app.listen(APP_PORT, () => {
        console.log(`APM app listening on http://localhost:${APP_PORT}`);
      });
    });
  } catch (error) {
    console.error("Server error:", error);
  }
}

start();
