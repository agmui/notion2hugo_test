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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV76R6XQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHX5fRXLK5PgYtwRNsa0QgkvgALtuG0JURVcIeikxAqnAiEA8jFnBoU08OGY3OOah79UdOx8EWeB4eWKb0myenGx1U4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFenlf9BfY%2Bskd7a4yrcA1aKLrZo%2B%2BRrWxVCtvC7pJHayO7nob%2B1yqTg%2FW%2FzYr%2FvxSaqLQL%2F0%2FT2VF9SGbGq6%2BCQfcK4pZEyq70RhX%2FeaKEKA7DMci3aUdOIFnAD%2BsAUshIjLBYjjBfZuBMqM87JYYWhenSwXQ%2B3BbyttPNp9FyPeScNJ%2B9xzqS8OI98Rmgr1c4TE01jLNBIkAUNAkrmsIYBPxOW7hJ88PPCpOqiznxlBaK5aO7NEM2EFyhMhzJaLGIx7IArDQbyTes24iq0KmBjQwx8Ojv1SuVN81GWeo7m58iHsdMrGaEShnOr%2FAK4vexF%2FOLRpxD%2Bg73D5fjxPKVNJwxGs7KH5CFDpy2QzqQOxNWV6JpyyOZxZ%2FGYCHoKwY3XliNhJz0snq59mGEfVPIMBseqE9SQmv%2BseGeN3%2B3EIjM%2BIyuKi%2BK4kuxpl04tlZmQpi6j9f2LOatP9XGim5Ss388eLkln8%2Fj6qPzB5oprQDr%2F91o2o1Yr0racDVbuNYqPaVH%2B%2FMJ9aOrq5jmrhexZT9fFIR7fQjs%2B8cVDwNcw0MoeGu2D8LJwlydJJFu8RAvvGq4CF1%2Blh1bCmoc34LP3y4jhjnlQHYT%2BMTuMCo5GV%2BuW6ZguoD7t8Qr%2F8MQuxCXB9yPb8Cstz1GhMNnNp74GOqUB544Bq0hSK%2Ftzvtj9yWWJg1ACC0dpns%2Fme0fN5D14MzzOGoZt8helUTBOWUWkhWrpXWRCNcarwYmrTQNHUDgVLztIfARh2yxeCS4PO6jqA033dE5H6E0KatgnPCYRyxr3psMPAdOF0xiuPdY4UocG0V8I%2BjsmFegps6n7VJRZuyhhaUDK6s%2BGpIc9iydQQrgmqHkl530gx9EZU8fX029GlweuQfzo&X-Amz-Signature=c713c1279a8c6934872fdf64415bd516d7082b0d1c8f76b5a417228041b3c864&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV76R6XQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHX5fRXLK5PgYtwRNsa0QgkvgALtuG0JURVcIeikxAqnAiEA8jFnBoU08OGY3OOah79UdOx8EWeB4eWKb0myenGx1U4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFenlf9BfY%2Bskd7a4yrcA1aKLrZo%2B%2BRrWxVCtvC7pJHayO7nob%2B1yqTg%2FW%2FzYr%2FvxSaqLQL%2F0%2FT2VF9SGbGq6%2BCQfcK4pZEyq70RhX%2FeaKEKA7DMci3aUdOIFnAD%2BsAUshIjLBYjjBfZuBMqM87JYYWhenSwXQ%2B3BbyttPNp9FyPeScNJ%2B9xzqS8OI98Rmgr1c4TE01jLNBIkAUNAkrmsIYBPxOW7hJ88PPCpOqiznxlBaK5aO7NEM2EFyhMhzJaLGIx7IArDQbyTes24iq0KmBjQwx8Ojv1SuVN81GWeo7m58iHsdMrGaEShnOr%2FAK4vexF%2FOLRpxD%2Bg73D5fjxPKVNJwxGs7KH5CFDpy2QzqQOxNWV6JpyyOZxZ%2FGYCHoKwY3XliNhJz0snq59mGEfVPIMBseqE9SQmv%2BseGeN3%2B3EIjM%2BIyuKi%2BK4kuxpl04tlZmQpi6j9f2LOatP9XGim5Ss388eLkln8%2Fj6qPzB5oprQDr%2F91o2o1Yr0racDVbuNYqPaVH%2B%2FMJ9aOrq5jmrhexZT9fFIR7fQjs%2B8cVDwNcw0MoeGu2D8LJwlydJJFu8RAvvGq4CF1%2Blh1bCmoc34LP3y4jhjnlQHYT%2BMTuMCo5GV%2BuW6ZguoD7t8Qr%2F8MQuxCXB9yPb8Cstz1GhMNnNp74GOqUB544Bq0hSK%2Ftzvtj9yWWJg1ACC0dpns%2Fme0fN5D14MzzOGoZt8helUTBOWUWkhWrpXWRCNcarwYmrTQNHUDgVLztIfARh2yxeCS4PO6jqA033dE5H6E0KatgnPCYRyxr3psMPAdOF0xiuPdY4UocG0V8I%2BjsmFegps6n7VJRZuyhhaUDK6s%2BGpIc9iydQQrgmqHkl530gx9EZU8fX029GlweuQfzo&X-Amz-Signature=1bae1424bbf939ef6f7dd47e6b379d71d3819263ad290d69f29cfb8edf998fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
