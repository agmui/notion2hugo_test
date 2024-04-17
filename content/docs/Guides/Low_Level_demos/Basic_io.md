---
sys:
  pageId: "5740b03f-4b53-4fd8-8734-b963150c091f"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T05:42:00.000Z"
  propFilepath: "docs/Guides/Low_Level_demos/Basic_io.md"
title: "Basic_io"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
weight: 161
toc: false
icon: ""
---

From here on its recommend you don't mess with the pico-sdk because it may mess with the
rm_pico_dev. So only use its functions if you need to.

## basic input output

```c++
#include <stdio.h>
#include "pico/stdlib.h"

// guide: <https://forums.raspberrypi.com/viewtopic.php?t=336230>
int main(){
    //Initialise I/O
    stdio_init_all();

    // Initialise GPIO (Green LED connected to pin 25)
    gpio_init(25);
    gpio_set_dir(25, GPIO_OUT);

    char userInput;

    //Main Loop
    while(1){
        //Get User Input
        printf("Command (1 = on or 0 = off):\\n");
        userInput = getchar();

        if(userInput == '1'){
            // Turn On LED
            gpio_put(25, 1); // Set pin 25 to high
            printf("LED switched on!\\n");
        }
        else if(userInput == '0'){
            // Turn Off LED
            gpio_put(25, 0); // Set pin 25 to high.
            printf("LED switched off!\\n");
        }
        else{
            printf("Invalid Input!\\n");
        }
    }
}

```
