function makeUppercase(value) {
  console.log(value.toUpperCase());
}

// makeUppercase("peter");

// callback function

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
}

handleName("smilga");

// array methods, setTimeout, event listeners etc
