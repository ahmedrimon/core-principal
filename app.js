// callback function start

function handleUpperCase(value) {
  console.log(value.toUpperCase());
}

function handleReverse(value) {
  console.log(value.split("").reverse().join("").toUpperCase());
}

// callback function End

function handleName(name, cb) {
  const fullName = `${name} ahmed`;
  cb(fullName);
}

handleName("Iftekhar", handleUpperCase);
handleName("Iftekhar", handleReverse);
