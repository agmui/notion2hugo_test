---
sys:
  pageId: "2c186972-738f-45b3-8010-c79e039b1b58"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-06-27T12:58:00.000Z"
  propFilepath: "docs/Guides/intro to C++/C++_basics.md"
title: "C++_basics"
date: "2024-06-27T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 111
toc: false
icon: ""
---

Great resource [w3schools](https://www.w3schools.com/cpp/default.asp)

### Variables

```c++
int x = 0;
float f = 1.0;
string greeting = "Hello";
char character = 'a';

```

### Comments

```c++
// one line comment

/*
multi line comment
another line
yet another line!!
*/

```

### Print

```c++
std::cout << "hello world" << std::endl;

// or

printf("hello world\n"); // the \\n means newline

printf("%d\\n", 5); // prints: 5

int num = 5;
int s = "hi";
printf("%d, %s\n", num, s); // prints: 5, hi

```

### If

```c++

int never_gona = 0;
if(never_gona){
    printf("give you up\n");
}

// else if
int amount_of_pilk = 10;
if(amount_of_pilk == 0){
    printf("sad\n");
} else if (amount_of_pilk < 10) {
    printf("it is wut it is\n");
} else{
    printf("LEZZ GOOO\n");
}


```

### Loops

```c++
for(int i=0; i<10; i++){
    printf("%d\n",i); // %d means digit so we are printing the digit i
}
// outputs:
// 0
// 1
// 2
// 3
// ...

int j = 0;
while(j < 3){
    printf("%d\n",j);
    j++;// increments j
}
// outputs:
// 0
// 1
// 2

```

### Array

```c++
int[] arr = {1, 2, 3};
printf("%d\n", arr[0]); // prints 1

arr[0] = 69;
printf("%d\n", arr[0]); // prints 69

```

### Functions

```c++
int addOne(int x){ // just adds one to x
    x++;
    return x;
}

int myNum = 0;
int output = addOne(myNum);
printf("%d\n", output);

```
