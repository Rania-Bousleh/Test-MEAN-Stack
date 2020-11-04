"use strict";
var dbConn = require("./../../config/db.config");
var Member = function (member) {
  this.name = member.name;
  this.subtitle = member.subtitle;
  this.role = member.role;
  this.photo = member.photo;
};
Member.create = function (newMem, result) {
  dbConn.query("INSERT INTO member set ?", newMem, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Member.findAll = function (result) {
  dbConn.query("Select * from member", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("member : ", res);
      result(null, res);
    }
  });
};

Member.delete = function (id, result) {
  dbConn.query("DELETE FROM member WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Member;
