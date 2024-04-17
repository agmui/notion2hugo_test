---
sys:
  pageId: "f747e96a-a84a-4479-afc2-cb0d99303c05"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T04:41:00.000Z"
  propFilepath: "docs/Guides/Cli_demos/SD_Card_CLI.md"
title: "SD_Card_CLI"
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
#include <stdio.h>#include "pico/stdlib.h"#include <drivers.h>int main(){    stdio_init_all();    // lets Serial Monitor time to connect    for (int i = 0; i < 3; i++)    {        sleep_ms(1000);        printf("%d,", 3 - i);        if(getchar_timeout_us(100)!=-1) break;    }    puts("");    pico::Drivers *drivers = new pico::Drivers();    std::cout << "mounting..." << std::endl;    drivers->sdCard.init();// init sd card obj    drivers->sdCard.mount();// mount sd card    std::cout << "sdcard mounted" << std::endl;    while (1)    {        // emulates stuff running on pico        printf("doing stuff");        sleep_ms(200);        printf(".");        sleep_ms(200);        printf(".");        sleep_ms(200);        printf(".\n");        //waits for cmd. If no cmd goes on        drivers->debug.runNextCommand();    }}
```
