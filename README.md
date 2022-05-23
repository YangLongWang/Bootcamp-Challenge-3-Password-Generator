# Password Generator Starter Code
## Table of contents

- [Overview](#overview)
  - [Purpose](#purpose)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Purpose
To create an application that an employee can use to generate a random password based on criteria they’ve selected.

### The challenge

Users should be able to:

- click the button, then follow the required question to get a random password every time on the page.


### Screenshot

![](./asset/images/Password%20Generator%20-%201.png)
![](./asset/images/Password%20Generator%20-%202.png)

### Links

- Solution URL: [https://github.com/YangLongWang/Bootcamp-Challege-2-Professional-Portfolio](https://github.com/YangLongWang/Bootcamp-Challege-2-Professional-Portfolio)
- Live Site URL: [https://yanglongwang.github.io/Bootcamp-Challege-2-Professional-Portfolio/](https://yanglongwang.github.io/Bootcamp-Challege-2-Professional-Portfolio/)

## My process

### Build with

- Semantic HTML
- CSS

### What I learned

- using media queries to change the properties and the website's width to reach users can check the website on various screens and devices.
- Make the heading part stick to the top of the page.
- Practice using flex boxes.

To see how I add code snippets, see below:

```css
@media screen and (max-width: 980px) {
    header {
        padding: 25px;
    }

    p {
        text-align: center;
    }

    .text p {
        text-align: left;
    }

    .applications {
        padding: 0 40px;
    }

    footer {
        padding: 10px;
    }
}

header {
    padding: 30px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;
}
```

## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)











what I learn
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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));
                
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }   
    return array;
}
```




next update
```
  // for (var i = passArray.length - 1; i > 0; i--) {
  //   // Generate random number
  //   var j = Math.floor(Math.random() * (i + 1));
                
  //   var temp = passArray[i];
  //   passArray[i] = passArray[j];
  //   passArray[j] = temp;
  // }
  ```