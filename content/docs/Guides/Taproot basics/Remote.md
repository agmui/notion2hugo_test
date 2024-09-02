---
sys:
  pageId: "1015b398-079b-4cdb-9788-d374ab94b798"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-09-02T12:57:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Remote.md"
title: "Remote"
date: "2024-09-02T12:57:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 128
toc: false
icon: ""
---

Get drivers object (controls basically everything)

```cpp
Drivers *drivers = DoNotUse_getDrivers();

```

init remote class

```cpp
drivers->remote.initialize();

```

prints "....." while waiting for controller to connect

```cpp
printf(".");

```

Reading the remote before we check if it is connected yet or not.

```cpp
drivers->remote.read();

```

Returns true if connected

```cpp
drivers->remote.isConnected()

```

get value of left horizontal "joystick"

```cpp
float remoteValue = drivers->remote.getChannel(pico::communication::serial::Remote::Channel::LEFT_HORIZONTAL);

```

prints value

```cpp
printf("remote: %d\n", remoteValue);         // print out value
```

### Code:

```cpp
#include "tap/board/board.hpp"

#include "drivers_singleton.hpp"

int main()
{
    //get drivers(controls basically everything)
    Drivers *drivers = DoNotUse_getDrivers();

    Board::initialize();
    drivers->remote.initialize();                                       // init remote

    while (1)
    {
        printf(".");
        drivers->remote.read();                                          // Reading the remote before we check if it is connected yet or not.
        if (drivers->remote.isConnected())
        {
            // get remote value
            float remoteValue = drivers->remote.getChannel(pico::communication::serial::Remote::Channel::LEFT_HORIZONTAL);

            printf("remote: %d\n", remoteValue);         // print out value
        }
        modm::delay_us(10);
    }
    return 0;
}


```
