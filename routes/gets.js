const express = require("express");
const axios = require("axios");

var app = express();

app.get("/loan-possible", async (req, res) => {
  const loanPossibleApiResponse = await axios({
    method: "get",
    url: `https://api.moni.com.ar/api/v4/scoring/pre-score/${req.query.dni}`,
    headers: { credential: "ZGpzOTAzaWZuc2Zpb25kZnNubm5u" },
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { status: "error", has_error: true };
    });

  return res.status(200).json(loanPossibleApiResponse);
});

app.get("/allLoans", async (req, res) => {
  const allLoansWithUsers = await axios({
    method: "get",
    url: `https://wired-torus-98413.firebaseio.com/users.json`,
  })
    .then((res) => {
      let usersWithLoansArray = [];
      const usersArray = Object.keys(res.data).map((key) => ({
        ...res.data[key],
        uid: key,
      }));

      usersArray.forEach((user) => {
        if (user.hasOwnProperty("loanStatus")) usersWithLoansArray.push(user);
      });

      return usersWithLoansArray;
    })
    .catch((error) => {
      return null;
    });

  return res.status(200).json(allLoansWithUsers);
});

module.exports = app;
