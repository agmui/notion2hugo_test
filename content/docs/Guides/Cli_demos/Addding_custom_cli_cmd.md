---
sys:
  pageId: "320ca7c5-7fbb-4499-9c9c-34e3413c87f8"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T01:24:00.000Z"
  propFilepath: "docs/Guides/Cli_demos/Addding_custom_cli_cmd.md"
title: "Addding_custom_cli_cmd"
date: "2024-04-16T00:00:00Z"
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

you cant “sniff” any var, cuz u have drivers, or just run some
test

```c++
#include <stdio.h>#include "pico/stdlib.h"#include <drivers.h>#include <string>// function to run when pilk is calledvoid pilk(pico::Drivers *drivers)
{    char pilk[] =        "$$$$$$$\\ $$$$$$\\ $$\\       $$\\   $$\\ \n"        "$$  __$$\\\\_$$  _|$$ |      $$ | $$  |\n"        "$$ |  $$ | $$ |  $$ |      $$ |$$  / \n"        "$$$$$$$  | $$ |  $$ |      $$$$$  /  \n"        "$$  ____/  $$ |  $$ |      $$  $$<   \n"        "$$ |       $$ |  $$ |      $$ |\\$$\\  \n"        "$$ |     $$$$$$\\ $$$$$$$$\\ $$ | \\$$\\ \n"        "\\__|     \\______|\\________|\\__|  \\__|\n\n";    puts(pilk);// basically printf()    // drivers is passed in so you can print out whatever you want    printf("setting: %d\n", drivers->debug.getSetting());}int main(){    stdio_init_all();    sleep_ms(1000);    for (int i = 0; i < 4; i++)    {        sleep_ms(1000);        printf("%d,", 4 - i);        if (getchar_timeout_us(100) != -1)            break;    }    puts("");// basically printf()    pico::Drivers *drivers = new pico::Drivers();    // setting up new cmd    debugtools::cmd_def_t cmd = {pilk,
                                 "pilk\n"                                 "this is a sample cmd"};    // debugtools::CLI::command_map.insert(std::make_pair("pilk", cmd));    // adding new cmd to command_map    debugtools::CLI::command_map["pilk"] = cmd;    while (1)    {        // emulate stuff happening        printf("doing stuff");        sleep_ms(200);        printf(".");        sleep_ms(200);        printf(".");        sleep_ms(200);        printf(".\n");        // type in pilk to see output        drivers->debug.runNextCommand();    }}
```
