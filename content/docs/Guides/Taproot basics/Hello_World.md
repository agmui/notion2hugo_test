---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624DOZMU5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAg0bcPl%2BsthdrqI5IVvGO2hu9KZ6xtCmFANy6WFSaAAiEA%2FEfeMaDqaEqWhwmMtl1LMA9QbUdt4U7S175ptniqDQYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOqQHId3n9UnMriiPircA0C8t1eeSO4UwhLVkPjsp7jpd%2FJaL80CYesJ1IjUwSUwCORBQzE3Xhvbw7l%2BqsAbCNK1qFbQhlG8BndLVFzCX42EgQi6V1oYu2B%2BznvMTF06DXXwBcLaC8EU78U9EHAYDPi%2FmlgflTc6cCm6kNOfcexNFNQvA7jpSPWRD2HehhcWq7LWJcCw8seXjSQHKHRhvl%2FNY4Dkw8eIUpm4d4zdNVr1Z0VqReMKgIAMjjdX1QS6jo%2BEWfx%2F%2B7dGIjmETpDhGid%2BN5%2FRhTgGKnhCWK%2FlvsZjnSlnwfgOq6WDcoTbYec9moIkGMW1Yw7QEQ9gvW9z8MBzQVyW0TVgoKPVazALxFIarSp%2F4n6niHGzdPMEwphZrrYoX6D4h4%2FKmVsvoFsucEi0P80sEBJkLM%2BotPXnDGdYdnTTbYow84p%2BZk2UktORGSnL0UTx%2BEM%2FfCBCRGYUJwSUhgDewCtBucs%2B%2Byv2%2B7c2ECb2uxqXy9WV1%2Fy2O%2BOB7pHyz7vOLNrDab1rzeMXVaW0mt1n2%2BRTQWmJV4NezZD18Pic0oWsAQ%2BXXYHvdNmM9fXktn6%2BUW7e9Tzcx4KQ%2B1VmJEnJLs0qW5OMmuJ%2FN1oKkDwF2k%2BTBhHwvYXnVrWbZkYNzWvCB%2FTfQ%2BntMOG0pb4GOqUBKFXPxQ8hP9SpMTybfdlnspTHFVXZ2mhnvMtSapXbFJkd%2B4HzGhk3wcxdxabV3xJBa4hZajkSaRqkUgr1vAYG5oaDiX393odGI9aK16%2F5l3%2B3Z%2BfnRi2Hf%2F056LWlaEerjjZQ3Z3lknwg3SIIMXx6eWHRwohB8WAEjzPBeHSV3%2BDZIEyki7HgY6DTzPWIEorVhLhkPJA0qbY12%2BiPbV6chkOMG71n&X-Amz-Signature=1bef8b314db4844aff831b701264495bdc577f52047761edc0a81d7d1cb77c53&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624DOZMU5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAg0bcPl%2BsthdrqI5IVvGO2hu9KZ6xtCmFANy6WFSaAAiEA%2FEfeMaDqaEqWhwmMtl1LMA9QbUdt4U7S175ptniqDQYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOqQHId3n9UnMriiPircA0C8t1eeSO4UwhLVkPjsp7jpd%2FJaL80CYesJ1IjUwSUwCORBQzE3Xhvbw7l%2BqsAbCNK1qFbQhlG8BndLVFzCX42EgQi6V1oYu2B%2BznvMTF06DXXwBcLaC8EU78U9EHAYDPi%2FmlgflTc6cCm6kNOfcexNFNQvA7jpSPWRD2HehhcWq7LWJcCw8seXjSQHKHRhvl%2FNY4Dkw8eIUpm4d4zdNVr1Z0VqReMKgIAMjjdX1QS6jo%2BEWfx%2F%2B7dGIjmETpDhGid%2BN5%2FRhTgGKnhCWK%2FlvsZjnSlnwfgOq6WDcoTbYec9moIkGMW1Yw7QEQ9gvW9z8MBzQVyW0TVgoKPVazALxFIarSp%2F4n6niHGzdPMEwphZrrYoX6D4h4%2FKmVsvoFsucEi0P80sEBJkLM%2BotPXnDGdYdnTTbYow84p%2BZk2UktORGSnL0UTx%2BEM%2FfCBCRGYUJwSUhgDewCtBucs%2B%2Byv2%2B7c2ECb2uxqXy9WV1%2Fy2O%2BOB7pHyz7vOLNrDab1rzeMXVaW0mt1n2%2BRTQWmJV4NezZD18Pic0oWsAQ%2BXXYHvdNmM9fXktn6%2BUW7e9Tzcx4KQ%2B1VmJEnJLs0qW5OMmuJ%2FN1oKkDwF2k%2BTBhHwvYXnVrWbZkYNzWvCB%2FTfQ%2BntMOG0pb4GOqUBKFXPxQ8hP9SpMTybfdlnspTHFVXZ2mhnvMtSapXbFJkd%2B4HzGhk3wcxdxabV3xJBa4hZajkSaRqkUgr1vAYG5oaDiX393odGI9aK16%2F5l3%2B3Z%2BfnRi2Hf%2F056LWlaEerjjZQ3Z3lknwg3SIIMXx6eWHRwohB8WAEjzPBeHSV3%2BDZIEyki7HgY6DTzPWIEorVhLhkPJA0qbY12%2BiPbV6chkOMG71n&X-Amz-Signature=9dea2c7933ff0d74e76072745f0a1aba942b1377a0b99ed43a7a8a8f0112e721&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
