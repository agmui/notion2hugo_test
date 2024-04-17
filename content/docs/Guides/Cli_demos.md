---
sys:
  pageId: "f7c8cb1d-967e-4259-b902-b6144578958b"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T01:14:00.000Z"
  propFilepath: "docs/Guides/Cli_demos.md"
title: "Cli_demos"
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

## Addding_custom_cli_cmd

	you cant “sniff” any var, cuz u have drivers, or just run some
	test

	```c++
	#include <stdio.h>#include "pico/stdlib.h"#include <drivers.h>#include <string>// function to run when pilk is calledvoid pilk(pico::Drivers *drivers)
	{    char pilk[] =        "$$$$$$$\\ $$$$$$\\ $$\\       $$\\   $$\\ \n"        "$$  __$$\\\\_$$  _|$$ |      $$ | $$  |\n"        "$$ |  $$ | $$ |  $$ |      $$ |$$  / \n"        "$$$$$$$  | $$ |  $$ |      $$$$$  /  \n"        "$$  ____/  $$ |  $$ |      $$  $$<   \n"        "$$ |       $$ |  $$ |      $$ |\\$$\\  \n"        "$$ |     $$$$$$\\ $$$$$$$$\\ $$ | \\$$\\ \n"        "\\__|     \\______|\\________|\\__|  \\__|\n\n";    puts(pilk);// basically printf()    // drivers is passed in so you can print out whatever you want    printf("setting: %d\n", drivers->debug.getSetting());}int main(){    stdio_init_all();    sleep_ms(1000);    for (int i = 0; i < 4; i++)    {        sleep_ms(1000);        printf("%d,", 4 - i);        if (getchar_timeout_us(100) != -1)            break;    }    puts("");// basically printf()    pico::Drivers *drivers = new pico::Drivers();    // setting up new cmd    debugtools::cmd_def_t cmd = {pilk,
	                                 "pilk\n"                                 "this is a sample cmd"};    // debugtools::CLI::command_map.insert(std::make_pair("pilk", cmd));    // adding new cmd to command_map    debugtools::CLI::command_map["pilk"] = cmd;    while (1)    {        // emulate stuff happening        printf("doing stuff");        sleep_ms(200);        printf(".");        sleep_ms(200);        printf(".");        sleep_ms(200);        printf(".\n");        // type in pilk to see output        drivers->debug.runNextCommand();    }}
	```

## basic_CLI

	```c++
	#include <iostream>#include <drivers.h>#include <stdio.h>#include "pico/stdlib.h"#include <Command.h>int main(){    stdio_init_all();    for (int i = 0; i < 5; i++)    {        sleep_ms(1000);        printf("%d,", 5 - i);        if(getchar_timeout_us(100)!=-1) break;    }    pico::Drivers *drivers = new pico::Drivers();    // pico::Drivers *drivers = pico::Drivers::getDrivers();    gpio_init(25);    gpio_set_dir(25, GPIO_OUT);    while (1)    {        // waits like 1ms for cmd to come in        // if nothing it continues        drivers->debug.runNextCommand();        // prevent the pico from turning into a 1 use smoke machine        tight_loop_contents();
	    }}
	```

## Retroterm

	currently only works well with Putty

	screen, minicom, and serial terminal have mixed results

	```c++
	#include <stdio.h>#include <iostream>#include "pico/stdlib.h"// #include <retroTerm.h>#include "rm_pico_dev/src/Debug/UI_tests/terminalTest.cpp"// #include "widgetTest.cpp"uint8_t widgetId = 0; //Record the widget ID globallyuint32_t numberOfClicks = 1; // Record the number of clicksint main(){    stdio_init_all();    for (int i = 0; i < 6; i++)    {        sleep_ms(1000);        printf("%d,", 8 - i);    }    setup();    while (1)    {        loop();    }    return 0;}
	```

## SD_Card_CLI

	```c++
	#include <stdio.h>#include "pico/stdlib.h"#include <drivers.h>int main(){    stdio_init_all();    // lets Serial Monitor time to connect    for (int i = 0; i < 3; i++)    {        sleep_ms(1000);        printf("%d,", 3 - i);        if(getchar_timeout_us(100)!=-1) break;    }    puts("");    pico::Drivers *drivers = new pico::Drivers();    std::cout << "mounting..." << std::endl;    drivers->sdCard.init();// init sd card obj    drivers->sdCard.mount();// mount sd card    std::cout << "sdcard mounted" << std::endl;    while (1)    {        // emulates stuff running on pico        printf("doing stuff");        sleep_ms(200);        printf(".");        sleep_ms(200);        printf(".");        sleep_ms(200);        printf(".\n");        //waits for cmd. If no cmd goes on        drivers->debug.runNextCommand();    }}
	```
