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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A2CNZBD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQD5VXFxluPbzIyNsXx2m3ZFCVQNTFaW5K2zbf2bN%2FKcBAIgM%2BH25cLtoZd6auHAnY5FmXHR4o7qWrq81oxF%2B%2BULofYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGT7P3Kk93Jkz6uTMircA5BFOzMdF7Rg40g3dled9R6QThpW2xIFArvQJoQNgdxkM1AJ%2F3X6szFJ%2F5f2L4OT1snNJ2vhWjvxZHUleymAPpL1gwyBcyS3Tco2NKTVot0366I9%2BUeUpmwhsnEImmcMoqieH%2Fz%2FYAQIIJhKKImvfaaBRm63nc6q4jioNx%2BrU2Z9JBj4siZXwIcwpui1lm8CpoDF53S1BUMTmReZmMoxDt7o5sKaMSGTr7tjVYenwfaKYshPi4PypqaI2hksxjcwKPNLUkQiA3dHeN4sz8aRKX5Ewz0%2FSHynZbD81ULaVzjqYSfCXp0c9koBO%2BYajJl90CoK9KWgxhMq64QCpzNJX99eVQmDLHuUmDVwvY6MB5SFzQNZyXqZyyeSJL8RYNhDK8UBRW%2FPuETZUiW%2BiY8Ez0Q%2BwdYsddHgSwtSnyCVz5RR%2Fr07MKQ6VBPrUya3%2Fe%2FoCKe%2BxiVU%2BSjM6BUOXcZwW%2Bv3eE2Kx2qKrYkgCryutIAFFwNLyBcix1cQ4%2FeiWqAOgqWK%2Fk%2BhdT00A0WDDmH7JWWOv9N4QqGBqz47CXgfN40DHVFWOOKKk9X3RVOwIZZobCrmXThEunBbG%2Fv21Mh4%2ByqPNZNAql619V5PeOPsWTw2peTFpAFJ0DnC%2F%2FCpMK7Ahr0GOqUBAXD1YiJ%2BXb1dvpCgekfe2o%2BcLI4%2FGcdwaqxtDhvbUDCvDDxPKNhHw63aHyLt%2BFuz5oP43qpfJ6jH18OPRfbGafIfk%2FNJLdPe8kEXHXTb4TYDJN3yv5r6bpJsvGIe15UNDKQR9EoIzewmB8o8OhjN5xSHTaQ7dLLcKmUY%2BMdQ0v6xA1MNoVlrBCojjXHa4m2zbd%2BNFuGXSM5Z%2Fv5yLCd4t3hdI3Xj&X-Amz-Signature=223778f3e6839c507609e97ba449c85261b3b75dab532d2427f87d2e3e9c8ede&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A2CNZBD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQD5VXFxluPbzIyNsXx2m3ZFCVQNTFaW5K2zbf2bN%2FKcBAIgM%2BH25cLtoZd6auHAnY5FmXHR4o7qWrq81oxF%2B%2BULofYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGT7P3Kk93Jkz6uTMircA5BFOzMdF7Rg40g3dled9R6QThpW2xIFArvQJoQNgdxkM1AJ%2F3X6szFJ%2F5f2L4OT1snNJ2vhWjvxZHUleymAPpL1gwyBcyS3Tco2NKTVot0366I9%2BUeUpmwhsnEImmcMoqieH%2Fz%2FYAQIIJhKKImvfaaBRm63nc6q4jioNx%2BrU2Z9JBj4siZXwIcwpui1lm8CpoDF53S1BUMTmReZmMoxDt7o5sKaMSGTr7tjVYenwfaKYshPi4PypqaI2hksxjcwKPNLUkQiA3dHeN4sz8aRKX5Ewz0%2FSHynZbD81ULaVzjqYSfCXp0c9koBO%2BYajJl90CoK9KWgxhMq64QCpzNJX99eVQmDLHuUmDVwvY6MB5SFzQNZyXqZyyeSJL8RYNhDK8UBRW%2FPuETZUiW%2BiY8Ez0Q%2BwdYsddHgSwtSnyCVz5RR%2Fr07MKQ6VBPrUya3%2Fe%2FoCKe%2BxiVU%2BSjM6BUOXcZwW%2Bv3eE2Kx2qKrYkgCryutIAFFwNLyBcix1cQ4%2FeiWqAOgqWK%2Fk%2BhdT00A0WDDmH7JWWOv9N4QqGBqz47CXgfN40DHVFWOOKKk9X3RVOwIZZobCrmXThEunBbG%2Fv21Mh4%2ByqPNZNAql619V5PeOPsWTw2peTFpAFJ0DnC%2F%2FCpMK7Ahr0GOqUBAXD1YiJ%2BXb1dvpCgekfe2o%2BcLI4%2FGcdwaqxtDhvbUDCvDDxPKNhHw63aHyLt%2BFuz5oP43qpfJ6jH18OPRfbGafIfk%2FNJLdPe8kEXHXTb4TYDJN3yv5r6bpJsvGIe15UNDKQR9EoIzewmB8o8OhjN5xSHTaQ7dLLcKmUY%2BMdQ0v6xA1MNoVlrBCojjXHa4m2zbd%2BNFuGXSM5Z%2Fv5yLCd4t3hdI3Xj&X-Amz-Signature=784c51463366510c2b0b1b79dceeea1e6ce798e0bf178cb125b845808a08d2be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
