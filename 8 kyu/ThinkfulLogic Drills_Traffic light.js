// https://www.codewars.com/kata/thinkful-logic-drills-traffic-light

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
    default:
      break;
  }
}

function updateLight(current) {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}

const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);
