---
sys:
  pageId: "1015b398-079b-4cdb-9788-d374ab94b798"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-09-03T23:43:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Remote.md"
title: "Remote"
date: "2024-09-03T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 128
toc: false
icon: ""
---

import taproot library

```cpp
#include "tap/board/board.hpp"

#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"
```

use `tap::communication::serial` namespace for printing

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the board and terminal

```cpp
    //get drivers(controls basically everything)
    src::Drivers *drivers = src::DoNotUse_getDrivers();

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    Board::initialize();
    drivers->remote.initialize();   // init remote
```

initialize the remote

```cpp
    drivers->remote.initialize();     // init remote
```

in the main while loop read the remote with `drivers->remote.read()` and check if its connected with `drivers->remote.isConnected()`

Then to read any value on the remote use `drivers->remote.getChannel`

In this case, we are reading the left joystick horizontal channel

```cpp
        drivers->remote.read();                                          // Reading the remote before we check if it is connected yet or not.
        if (drivers->remote.isConnected())
        {
            // get remote value
            double remoteValue = drivers->remote.getChannel(tap::communication::serial::Remote::Channel::LEFT_HORIZONTAL);

            s.printf("remote: %f\n", remoteValue);         // print out value
            modm::delay_us(10000);
        }
```

### Code:

```cpp
#include "tap/board/board.hpp"

#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main()
{
    //get drivers(controls basically everything)
    src::Drivers *drivers = src::DoNotUse_getDrivers();

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    Board::initialize();
    drivers->remote.initialize();    // init remote

    while (1)
    {
        // Reading the remote before we check if it is connected yet or not.
        drivers->remote.read();  
        if (drivers->remote.isConnected())
        {
            // get remote value
            double remoteValue = drivers->remote.getChannel(tap::communication::serial::Remote::Channel::LEFT_HORIZONTAL);

            s.printf("remote: %f\n", remoteValue);         // print out value
            modm::delay_us(10000);
        }else{
            s.printf(".");
        }
        modm::delay_us(10);
    }
}
```
