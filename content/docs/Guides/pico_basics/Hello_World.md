---
sys:
  pageId: "1fe5a2b2-572b-4046-b461-4f46a8dbb672"
  createdTime: "2024-04-16T19:45:00.000Z"
  lastEditedTime: "2024-04-17T06:19:00.000Z"
  propFilepath: "docs/Guides/pico_basics/Hello_World.md"
title: "Hello_World"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
weight: 112
toc: false
icon: ""
---

imports all the libraries that will be used

```c++
#include <iostream>// allows printing
#include <stdio.h>// allows da gud stuff ;)
#include "pico/stdlib.h" // the pico-sdk lib

```

Sets up the pico to be able to print

```c++
stdio_init_all();

```

2 ways of Printing Hello world

```c++
std::cout << "hello world" << std::endl; // c++ style print
printf("hello world\\n");//c style print

```

### Code:

```c++
#include <iostream>
#include <stdio.h>
#include "pico/stdlib.h" // the pico-sdk lib


int main(int argc, char const *argv[])
{
    stdio_init_all();// allows printing to terminal

    while (1)
    {
        //print hello world
        std::cout << "hello world" << std::endl;
        printf("hello world\\n");
    }
}

```

{{< alert context="info" text="to upload to the pico press `ctrl+shift+B`" />}}

TODO: talk about Wokwi

## Common issues:

- 
- 
