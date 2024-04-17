---
sys:
  pageId: "10888cf0-367d-4e2d-ad48-bb77a5b5ae69"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T06:52:00.000Z"
  propFilepath: "docs/Guides/pico_basics/Remote.md"
title: "Remote"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
weight: 113
toc: false
icon: ""
---

Get drivers object (controls basically everything)

```c++
pico::Drivers *drivers = new pico::Drivers();

```

allows for printing

```c++
stdio_init_all();

```

init remote class

```c++
drivers->remote.initialize();

```

prints "....." while waiting for controller to connect

```c++
    std::cout << "." << std::endl;

```

Reading the remote before we check if it is connected yet or not.

```c++
    drivers->remote.read();

```

Returns true if connected

```c++
    drivers->remote.isConnected()

```

get value of left horizontal "joystick"

```c++
float remoteValue = drivers->remote.getChannel(pico::communication::serial::Remote::Channel::LEFT_HORIZONTAL);

```

prints value

```c++
        std::cout << "remote: " << drivers->remote.getChannel(pico::communication::serial::Remote::Channel::LEFT_HORIZONTAL) << std::endl;

```

### Code:

```c++
#include <iostream>
#include <drivers.h>
#include "pico/stdlib.h"

int main(int argc, char const *argv[])
{
    //get drivers(controls basically everything)
    pico::Drivers *drivers = new pico::Drivers();

    stdio_init_all();

    // init remote
    drivers->remote.initialize();
    while (1)
    {
        std::cout << "." << std::endl;
        drivers->remote.read(); // Reading the remote before we check if it is connected yet or not.
        if (drivers->remote.isConnected())
        {
            // get remote value
            float remoteValue = drivers->remote.getChannel(pico::communication::serial::Remote::Channel::LEFT_HORIZONTAL);
            // print out value
            std::cout << "remote: " << remoteValue << std::endl;
        }
    }
}


```
