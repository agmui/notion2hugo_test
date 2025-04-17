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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6RKZY3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7OfxXrpqNgqzLq05iucZO82E8BBQNyUkYlGQEfCo3SAiEAlIXrk4fmigHJW4xWSADdscEsIe2nMvD40ZVMOlzDyWUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDE56HDd%2BXlC0T4sA%2ByrcA43RcZ%2FwqK%2BTCE%2BctJb3PQFAREjC6KXbKW9h7Wg1vSaqiD4kNuqHKSuLRiQn9XJMp5JzchXtew%2BdLqpH6G7Ymr%2FetPddWG8kLRBjII%2F7s2dzgDO9AzR0C0dcfoczL88mJD51tTQvPx7PjWcEDj%2FD0jnTxFWy8ERCM8fjsrw7T73Sb4cMlWaajtZq92brxbEOPc%2FOwtvuiBziGadZqUdICpQQo6sD5DdpwvmNpBmhWs6vTy4ZFCQjWsW3hy71FzjMRvZPKLmdqT250PrYUn20PV6dOrbfyqDOoCyEfX1xV3SMWrFdRVBmcFWv0bibHmvOgEF7dvAd7Tv0GF6XBUyjRa8XqK0J1mzR2qx0ATiFduAhqvIQ8GzB5iVcXOa8s5X5CmGsZcZXi9qvDFW6cgNaK2ZTR5d3%2B5V0039vB7oevVmUOI16kWIrOJwWTK4cxfkMxRbyb4C0fhmrhPTZYY30MX3h8u%2Bfqr7Lal5AtAXrWauCiZI5LJPZ1IxgL8GePhqoA6fMnMBH3v%2BdJXH3%2FNc6rKHL4GKY0ESa8%2FqxRZRn%2F%2BVkky5o4zavJ3rfk855WYFqOElIQhV%2FmOciLejxyFpk%2Fh0CfC8vjVxm7UQtCpIrFvdjqHiZZ11wuJP57aL0MOfQhcAGOqUBuvAXNRc3Y5nqxIp4QxDihfq1L4U3EgQmBF8WwgNLcQwzgmyxZQEca5Bd1fDkHNT4AxWmGyXKFEJLDUcDTmwClXKAd%2BBZX%2BYekk7TXmU8kcGgFxREYZ0jPTR6Z%2F73gUPDTxUhPlfeokboaggQxrmEwmtWajDMqpQDObbgcT4fk0thbhkICroi0WmgL1MaMiMPfpb%2BRYpK4zY1hSCodkXmTP4V018j&X-Amz-Signature=9f416e23d9ea7d34559feb210186ff99569f8c54b176d694fa6c8a071fae7e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6RKZY3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7OfxXrpqNgqzLq05iucZO82E8BBQNyUkYlGQEfCo3SAiEAlIXrk4fmigHJW4xWSADdscEsIe2nMvD40ZVMOlzDyWUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDE56HDd%2BXlC0T4sA%2ByrcA43RcZ%2FwqK%2BTCE%2BctJb3PQFAREjC6KXbKW9h7Wg1vSaqiD4kNuqHKSuLRiQn9XJMp5JzchXtew%2BdLqpH6G7Ymr%2FetPddWG8kLRBjII%2F7s2dzgDO9AzR0C0dcfoczL88mJD51tTQvPx7PjWcEDj%2FD0jnTxFWy8ERCM8fjsrw7T73Sb4cMlWaajtZq92brxbEOPc%2FOwtvuiBziGadZqUdICpQQo6sD5DdpwvmNpBmhWs6vTy4ZFCQjWsW3hy71FzjMRvZPKLmdqT250PrYUn20PV6dOrbfyqDOoCyEfX1xV3SMWrFdRVBmcFWv0bibHmvOgEF7dvAd7Tv0GF6XBUyjRa8XqK0J1mzR2qx0ATiFduAhqvIQ8GzB5iVcXOa8s5X5CmGsZcZXi9qvDFW6cgNaK2ZTR5d3%2B5V0039vB7oevVmUOI16kWIrOJwWTK4cxfkMxRbyb4C0fhmrhPTZYY30MX3h8u%2Bfqr7Lal5AtAXrWauCiZI5LJPZ1IxgL8GePhqoA6fMnMBH3v%2BdJXH3%2FNc6rKHL4GKY0ESa8%2FqxRZRn%2F%2BVkky5o4zavJ3rfk855WYFqOElIQhV%2FmOciLejxyFpk%2Fh0CfC8vjVxm7UQtCpIrFvdjqHiZZ11wuJP57aL0MOfQhcAGOqUBuvAXNRc3Y5nqxIp4QxDihfq1L4U3EgQmBF8WwgNLcQwzgmyxZQEca5Bd1fDkHNT4AxWmGyXKFEJLDUcDTmwClXKAd%2BBZX%2BYekk7TXmU8kcGgFxREYZ0jPTR6Z%2F73gUPDTxUhPlfeokboaggQxrmEwmtWajDMqpQDObbgcT4fk0thbhkICroi0WmgL1MaMiMPfpb%2BRYpK4zY1hSCodkXmTP4V018j&X-Amz-Signature=0b6c87061d8b2f303137f5ef5b717a7b67313e3cda9184330e8a7ce96d9371de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
