# Password Generator Starter Code













```
for (var i=97; i<123; i++) {
  lowerCase.push(String.fromCharCode(i));
}

for (var z=65; z<91; z++) {
  upperCase.push(String.fromCharCode(z));
}

function getOneNum() {
  var pickIndex = Math.floor(Math.random()*number.length);
  var pickOne = number[pickIndex];
  console.log(pickOne);
  return pickOne;
}

function getOneLower() {
  var pickIndex = Math.floor(Math.random()*lowerCase.length);
  var pickOne = lowerCase[pickIndex];
  console.log(pickOne);
  return pickOne;
}

function getOneUpper() {
  var pickIndex = Math.floor(Math.random()*upperCase.length);
  var pickOne = upperCase[pickIndex];
  console.log(pickOne);
  return pickOne;  
}

function getOneSpecial() {
  var pickIndex = Math.floor(Math.random()*specialCharacters.length);
  var pickOne = specialCharacters[pickIndex];
  console.log(pickOne);
  return pickOne;  
}

// check types at least one
var checktype = false;
for (i=0; i<characterTypeNum.length; i++) {
  if (characterTypeNum[i] == true) {
    checktype = true;
    break;
  }
}
```