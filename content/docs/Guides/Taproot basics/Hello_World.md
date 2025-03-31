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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN22BKFF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHMEjnulMZ40DEBbF68A51elR9x5dXIuoqUllUsPXbP8AiEA%2FXbiNA9yHOZs6%2FVNLZNu0ESEEelwfJwX7N4Voaju7%2FkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX1evw4HfBawnxPjCrcA1jPSA1a740RuB8uzhcB%2Bvr9rJxonkJ8Y%2FX%2F26LZyFRrxzDODMz3vTkoMyJ8IX182DMoO0pOYW1pAAeUZMO9HJjvtiwoNZyQABK%2BTpmRgonKCWLfNJNwnq5quc%2BxO0BL1mPQz36%2FJNWqhjGT1QrhU5021S%2FiNmbaZ1VgbvX%2BV3OXtEeYNodXFnnlhkvKKBNlop41%2FkeAghLp1nCkB7SxJiqbmwLTtwDXumMr7FOKw1Am2Zs6XbKNKfDjNfc%2FuAoZpfJBBHx0UbgBIRzXf9LF95GNC9zxo3%2FltXy2zbDf4uuwnbri5WPZRnw4hZDBtAxQeR%2BzTSFloVyJgtKGVIfSWJwsGUBQ8BEyX5Lk4Ul6wtMidBCi4eD75Q81vM6AllqipI1gCYMLGHSMlET%2BbfHHW24fQBmPGMdmhHXVT8rT8L5eUkX3ySo8Dy5bNqCaNeKEGtmig7s2%2BybxVVzX5SShOMlV356xKQmwFTIZf%2BRi%2FdXnbDo4f4aL18%2BLuFHgdcZLcLETrdQaCjjExUrefe2iXUyPI90CfZJI2ld2FxYzSIbJ6qoSgw%2FD1qIM7hpBdyGVVcRHAF7lxDTVjDZ0rejopU1Wei4bJfScepZODbaXdBd2T0MJPA%2FPtIAsBY7fMLW4q78GOqUB2Xt0y5hgyK2xzWHoD%2F9chELw2ulw9iVeCLFdMOxLh6yvp0Q42icT7D5mKTIuFdTFjxgILmVotkO30g%2FNvMyKP4KqEVZsYcAuQXdWm36q4EDlvX3KN0tK3pOkNM%2BO%2BUZ%2BbEfR4yiflh2DG0pBckmG0DX60IlOnW02O7wRtgKCqMJGFM6Iv12nWjG0oZWOmdHoDPc6Js%2FpQtiBqy8V0oAgkeZbIBN3&X-Amz-Signature=8263c2b6c1ef135e6b7d613462baf7a51404bddaf43a34d307a1c42f31833fac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN22BKFF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHMEjnulMZ40DEBbF68A51elR9x5dXIuoqUllUsPXbP8AiEA%2FXbiNA9yHOZs6%2FVNLZNu0ESEEelwfJwX7N4Voaju7%2FkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX1evw4HfBawnxPjCrcA1jPSA1a740RuB8uzhcB%2Bvr9rJxonkJ8Y%2FX%2F26LZyFRrxzDODMz3vTkoMyJ8IX182DMoO0pOYW1pAAeUZMO9HJjvtiwoNZyQABK%2BTpmRgonKCWLfNJNwnq5quc%2BxO0BL1mPQz36%2FJNWqhjGT1QrhU5021S%2FiNmbaZ1VgbvX%2BV3OXtEeYNodXFnnlhkvKKBNlop41%2FkeAghLp1nCkB7SxJiqbmwLTtwDXumMr7FOKw1Am2Zs6XbKNKfDjNfc%2FuAoZpfJBBHx0UbgBIRzXf9LF95GNC9zxo3%2FltXy2zbDf4uuwnbri5WPZRnw4hZDBtAxQeR%2BzTSFloVyJgtKGVIfSWJwsGUBQ8BEyX5Lk4Ul6wtMidBCi4eD75Q81vM6AllqipI1gCYMLGHSMlET%2BbfHHW24fQBmPGMdmhHXVT8rT8L5eUkX3ySo8Dy5bNqCaNeKEGtmig7s2%2BybxVVzX5SShOMlV356xKQmwFTIZf%2BRi%2FdXnbDo4f4aL18%2BLuFHgdcZLcLETrdQaCjjExUrefe2iXUyPI90CfZJI2ld2FxYzSIbJ6qoSgw%2FD1qIM7hpBdyGVVcRHAF7lxDTVjDZ0rejopU1Wei4bJfScepZODbaXdBd2T0MJPA%2FPtIAsBY7fMLW4q78GOqUB2Xt0y5hgyK2xzWHoD%2F9chELw2ulw9iVeCLFdMOxLh6yvp0Q42icT7D5mKTIuFdTFjxgILmVotkO30g%2FNvMyKP4KqEVZsYcAuQXdWm36q4EDlvX3KN0tK3pOkNM%2BO%2BUZ%2BbEfR4yiflh2DG0pBckmG0DX60IlOnW02O7wRtgKCqMJGFM6Iv12nWjG0oZWOmdHoDPc6Js%2FpQtiBqy8V0oAgkeZbIBN3&X-Amz-Signature=ad73a14b3e5a244ba646d9011fecbf8867503fd9a0973f4949f76a50e714bbe0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
