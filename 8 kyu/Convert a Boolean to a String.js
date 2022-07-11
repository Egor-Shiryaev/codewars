"use strict";

function booleanToString(b) {
  return b + "";
}

function booleanToString(b) {
  return b.toString();
}

function booleanToString(b) {
  return b ? "true" : "false";
}

function booleanToString(b) {
  return String(b);
}

console.log(booleanToString(false));
