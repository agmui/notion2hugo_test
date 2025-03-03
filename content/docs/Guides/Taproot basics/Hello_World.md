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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAF3RLR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKRN%2FT9jF3x8hzbhQ9pf%2B2Ex8TtZppsv7lSqnMSCGEEAiEA8M1d1Y949jgmUg8BASdu7Z5QqTJCrnf7clJUynOjdtAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHxuSAzW8LP%2F%2FoC2yrcAyM0wyEZvWJBt1xuFKStInC93Mnbt93%2B3ODNUEu5gZ%2BTbG7%2BPVWbPJXWTQtvOzIuY%2FoV0qItjPEIDRGy939pGSQbJG3hT4kRTLvwEuwKX1nPMdNUQY07%2BgCSwuqn2wdGDePZyxy6JGZQm%2B0NMz73ypTVOe4fneREMYmZ%2BfivK1DGQgSpqebkITT27o2T0VzjSIf84Ayg8lLEFKOoXznOxfM1LdehhI6iZAGa9DMzGPQ7wDEJOUAh6Bt4uczhngzuMvj1BoceDjQClIom9WNIR2FYHnlZUzc0Ms6gMGXJyeQRCFXdSQhhxb%2B5jKUKICRAUEIGCqIc0waKOlbN1epiRwHowXrz0KTgSgye0oTeyM%2F9X9pKJE5xqL4LznrnRQ3VS2bauL7rCU%2Bs4iJzFFl1X9hT3V6zjLzUnNaUpdPqblEY2tVPfchqnwD%2FdNx%2B%2Bwyl%2FGQ8ZDAWAZuiEM25xYUkYifV%2BaxBkXWI7bNJtllt4qKNkqGZJilr%2BsjAboof8H7GG2aBoViDpRgke5W3j8CdS6%2B5rAXXI3P%2B4cy8Gpu73UiSBNCiQqq8ef3HG2AF42LPj%2Bdv3NLd71Q09gZnL3FyfqdIlXJ%2FBGs1roGO4r46inebgeaDM41WLoJD7p5tMPmclr4GOqUByUj1eLeKUjqzJm%2FM81vO1TLz0M%2BgHyb71rJJYNXft50p%2F0G9oZCRremCUOKLNpooT%2FydBFOHVWo0RYKYTKssbZAN0AAptDFh1PxQ5LgaYRl1SjxPlFQlqy2fe6A9XNuWLpkx3H8Qtz%2Froq6%2B2Kz%2FCKon7Mh8DzZ9s2mJaXK1raegcukkRdxI%2F2Iq8CLLlu9TObeanqj5127jby0jnv9MtQe1Jq%2FT&X-Amz-Signature=b39863cfe7e672556254a3fe0489f50552732ec5d6c002c659a82aa323f85d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAF3RLR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKRN%2FT9jF3x8hzbhQ9pf%2B2Ex8TtZppsv7lSqnMSCGEEAiEA8M1d1Y949jgmUg8BASdu7Z5QqTJCrnf7clJUynOjdtAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHxuSAzW8LP%2F%2FoC2yrcAyM0wyEZvWJBt1xuFKStInC93Mnbt93%2B3ODNUEu5gZ%2BTbG7%2BPVWbPJXWTQtvOzIuY%2FoV0qItjPEIDRGy939pGSQbJG3hT4kRTLvwEuwKX1nPMdNUQY07%2BgCSwuqn2wdGDePZyxy6JGZQm%2B0NMz73ypTVOe4fneREMYmZ%2BfivK1DGQgSpqebkITT27o2T0VzjSIf84Ayg8lLEFKOoXznOxfM1LdehhI6iZAGa9DMzGPQ7wDEJOUAh6Bt4uczhngzuMvj1BoceDjQClIom9WNIR2FYHnlZUzc0Ms6gMGXJyeQRCFXdSQhhxb%2B5jKUKICRAUEIGCqIc0waKOlbN1epiRwHowXrz0KTgSgye0oTeyM%2F9X9pKJE5xqL4LznrnRQ3VS2bauL7rCU%2Bs4iJzFFl1X9hT3V6zjLzUnNaUpdPqblEY2tVPfchqnwD%2FdNx%2B%2Bwyl%2FGQ8ZDAWAZuiEM25xYUkYifV%2BaxBkXWI7bNJtllt4qKNkqGZJilr%2BsjAboof8H7GG2aBoViDpRgke5W3j8CdS6%2B5rAXXI3P%2B4cy8Gpu73UiSBNCiQqq8ef3HG2AF42LPj%2Bdv3NLd71Q09gZnL3FyfqdIlXJ%2FBGs1roGO4r46inebgeaDM41WLoJD7p5tMPmclr4GOqUByUj1eLeKUjqzJm%2FM81vO1TLz0M%2BgHyb71rJJYNXft50p%2F0G9oZCRremCUOKLNpooT%2FydBFOHVWo0RYKYTKssbZAN0AAptDFh1PxQ5LgaYRl1SjxPlFQlqy2fe6A9XNuWLpkx3H8Qtz%2Froq6%2B2Kz%2FCKon7Mh8DzZ9s2mJaXK1raegcukkRdxI%2F2Iq8CLLlu9TObeanqj5127jby0jnv9MtQe1Jq%2FT&X-Amz-Signature=6388853dcba9ddf3498c481fc383dfbae45d5ccb8fd258e76a6648cbe1ef9382&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
