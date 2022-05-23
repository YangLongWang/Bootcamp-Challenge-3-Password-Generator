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

- HTML
- CSS
- JAVASCRIPT

### What I learned

- using String.formCharCode() converts Unicode values to characters.
- simplify funtion getOne by passing parameters.
- using array.push() add item into array.
- using array.some() check if the elements in array pass a function.
- using shrffle to randomize a array.


To see how I add code snippets, see below:

```JavaScript
for (var i=97; i<123; i++) {
  lowerCase.push(String.fromCharCode(i));
}

function getOne(value) {
  var pickIndex = Math.floor(Math.random()*value.length);
  var pickOne = value[pickIndex];
  return pickOne;
}

passArray.push(getOne(lowerCase));

var checktype = characterTypeNum.some(myFunction => myFunction == true);

for (var i = passArray.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = passArray[i];
  passArray[i] = passArray[j];
  passArray[j] = temp;
}  

passArray.splice(passLength, passArray.length - passLength );
```

## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)



what I learn
```

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