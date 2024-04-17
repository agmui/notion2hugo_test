---
sys:
  pageId: "469cf05e-0286-4041-9d1b-ef6d33131549"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T04:41:00.000Z"
  propFilepath: "docs/Guides/Cli_demos/basic_CLI.md"
title: "basic_CLI"
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

```c++
#include <iostream>#include <drivers.h>#include <stdio.h>#include "pico/stdlib.h"#include <Command.h>int main(){    stdio_init_all();    for (int i = 0; i < 5; i++)    {        sleep_ms(1000);        printf("%d,", 5 - i);        if(getchar_timeout_us(100)!=-1) break;    }    pico::Drivers *drivers = new pico::Drivers();    // pico::Drivers *drivers = pico::Drivers::getDrivers();    gpio_init(25);    gpio_set_dir(25, GPIO_OUT);    while (1)    {        // waits like 1ms for cmd to come in        // if nothing it continues        drivers->debug.runNextCommand();        // prevent the pico from turning into a 1 use smoke machine        tight_loop_contents();
    }}
```
