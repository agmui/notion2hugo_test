---
sys:
  pageId: "93088427-0283-439d-8e5a-a3b1b7d6f364"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T05:40:00.000Z"
  propFilepath: "docs/Guides/Cli_demos/Retroterm.md"
title: "Retroterm"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
weight: 154
toc: false
icon: ""
---

currently only works well with Putty

screen, minicom, and serial terminal have mixed results

```c++
#include <stdio.h>
#include <iostream>
#include "pico/stdlib.h"
// #include <retroTerm.h>

#include "rm_pico_dev/src/Debug/UI_tests/terminalTest.cpp"
// #include "widgetTest.cpp"

uint8_t widgetId = 0; //Record the widget ID globally
uint32_t numberOfClicks = 1; // Record the number of clicks

int main()
{
    stdio_init_all();

    for (int i = 0; i < 6; i++)
    {
        sleep_ms(1000);
        printf("%d,", 8 - i);
    }
    setup();

    while (1)
    {
        loop();
    }
    return 0;
}

```
