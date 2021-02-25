const express = require("express");
const fetch = require("node-fetch");
const btoa = require("btoa");
const { catchAsync } = require("../utils");

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = "http://localhost:50451/api/discord/callback";

router.get("/login", (req, res) => {
  res.redirect(
    `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect}&response_type=code&scope=identify%20email%20guilds`
  );
});

router.get(
  "/callback",
  catchAsync(async (req, res) => {
    if (!req.query.code) throw new Error("NoCodeProvided");
    const code = req.query.code;
    console.log("CODE:", code);
    const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    // const response = await fetch(
    //   `https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Basic ${creds}`,
    //     },
    //   }
    // );
    // const json = await response.json();

    const data = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: redirect,
      code: code,
      scope: "identify",
    };
    const response = await fetch("https://discordapp.com/api/oauth2/token", {
      method: "POST",
      body: new URLSearchParams(data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const json = await response.json();
    console.log("JSON:", json);
    res.redirect(`/?token=${json.access_token}`);
  })
);

module.exports = router;
