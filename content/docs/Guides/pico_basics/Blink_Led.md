---
sys:
  pageId: "07376a5c-5a1e-4cd3-960a-8923f917e525"
  createdTime: "2024-04-16T19:45:00.000Z"
  lastEditedTime: "2024-04-17T06:09:00.000Z"
  propFilepath: "docs/Guides/pico_basics/Blink_Led.md"
title: "Blink_Led"
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c6900f8e-01c6-48e3-b789-96998d6c744b/led.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240417T080831Z&X-Amz-Expires=3600&X-Amz-Signature=8b8699a4489714eb86bb3f6638697e06c5c55ddff21bc77c43485180a47a8ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

sets up pin 25(the led) to blink

```c++
gpio_init(25);// init pin 25(the led)
gpio_set_dir(25, GPIO_OUT);//set pin 25 to output

```

Turn On LED

```c++
gpio_put(25, 1); // Set pin 25 to high

```

Turn Off LED

```c++
gpio_put(25, 0); // Set pin 25 to low.

```

wait for 250 ms

```c++
sleep_ms(250);

```

### Code:

```c++
#include <iostream>
#include <stdio.h>
#include "pico/stdlib.h" // the pico-sdk lib


int main(int argc, char const *argv[])
{
    stdio_init_all();// allows printing to terminal

    gpio_init(25);// init pin 25(the led)
    gpio_set_dir(25, GPIO_OUT);//set pin 25 to output

    while (1)
    {
        // Turn On LED
        gpio_put(25, 1); // Set pin 25 to high
        sleep_ms(250);//wait for 250 ms
        printf("LED switched on!\\n");// print
        // Turn Off LED
        gpio_put(25, 0); // Set pin 25 to low.
        sleep_ms(250);
        printf("LED switched off!\\n");

    }
}

```
