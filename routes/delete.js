const express = require("express");
const axios = require("axios");

var app = express();

app.delete("/delete-loan", async (req, res) => {
  const deletedLoanReq = axios({
    method: "delete",
    url: `https://wired-torus-98413.firebaseio.com/users/${req.query.IdLoan}.json`,
  })
    .then((res) => {
      if (res.status === 200) return { status: 200, deleted: true };
      return { status: 200, deleted: false };
    })
    .catch((error) => {
      return { status: 400, deleted: false };
    });

  return deletedLoanReq;
});

module.exports = app;
