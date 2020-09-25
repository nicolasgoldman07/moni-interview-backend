const express = require("express");
const axios = require("axios");

var app = express();

app.post("/add-loan", async (req, res) => {
  const addLoanApiResponse = await axios({
    method: "post",
    url: "https://wired-torus-98413.firebaseio.com/users.json",
    data: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      email: req.body.email,
      dni: req.body.dni,
      loanStatus: req.body.loanStatus,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { status: "error", has_error: true };
    });

  return res.status(200).json(addLoanApiResponse);
});

module.exports = app;
