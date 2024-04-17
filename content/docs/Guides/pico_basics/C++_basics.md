---
sys:
  pageId: "9021d9b4-e87a-45a5-bb01-7030d4b6fbef"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T04:41:00.000Z"
  propFilepath: "docs/Guides/pico_basics/C++_basics.md"
title: "C++_basics"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
toc: false
icon: ""
---

Great resource [w3schools](https://www.w3schools.com/cpp/default.asp)

### Variables

```c++
int x = 0;float f = 1.0;string greeting = "Hello";
char character = 'a';
```

### Comments

```c++
// one line comment/*multi line commentanother lineyet another line!!*/
```

### Print

```c++
std::cout << "hello world" << std::endl;// orprintf("hello world\n"); // the \n means newlineprintf("%d\n", 5); // prints: 5int num = 5;int s = "hi";printf("%d, %s\n", num, s); // prints: 5, hi
```

### If

```c++
int never_gona = 0;if(never_gona){    printf("give you up\n");}// else ifint amount_of_pilk = 10;if(amount_of_pilk == 0){    printf("sad\n");} else if (amount_of_pilk < 10) {    printf("it is wut it is\n");} else{    printf("LEZZ GOOO\n");}
```

### Loops

```c++
for(int i=0; i<10; i++){    printf("%d\n",i); // %d means digit so we are printing the digit i}// outputs:// 0// 1// 2// 3// ...int j = 0;while(j < 3){    printf("%d\n",j);    j++;// increments j}// outputs:// 0// 1// 2
```

### Array

```c++
int[] arr = {1, 2, 3};printf("%d\n", arr[0]); // prints 1arr[0] = 69;printf("%d\n", arr[0]); // prints 69
```

### Functions

```c++
int addOne(int x){ // just adds one to x    x++;    return x;}int myNum = 0;int output = addOne(myNum);printf("%d\n", output);
```
