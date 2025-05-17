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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72NYT7W%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICY%2F%2BITW5PJn7Utym%2FH4y5nXFYl7UbZ92xp14yMVeEC6AiEA3WS6jJ9CpeP%2FP6aL%2BdS5h2R%2B38Q2xsAyW8qTJp0jebMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKY1A2H2MTCy5LK4RCrcA%2BTGKDOoL5PruXnm39LQmXm3J8eNdGMaNS3OT%2FovQV9vH8ag2ADG9pfYLLFyDkJwOmVJZ5NRPrTtExtXkN5HHpMZshtYFRJFmcibM9jB%2FUowdaruwoC%2BxEE0b0mKMJ4beLoSu4FeUs97q6uaomoPrfRdFkDKclGkSwvVV2g94asiyLLw0sTBFbPhxf44BGDUayO%2F%2BnHNoLxrxUA3elInyzX0CEOfUTQW2%2FOc9BZShkAblIimLHDDPZDhXjQl3OepH6I5f5XhrlRStloeZcDGkU4MNfl0YAnQJU9ZJXPYPsu%2F5w%2F4im0t1%2FSTTQPdJag3VcaYuDN3551fhvq8oeozuC2iY5s3myT4LgGQObjLVog%2FRfI9IqSfPLuxtDqnBGt%2FiVWlI%2BA5EcJ7zN%2F782y7Lr%2FkMmWsvmX8TrjCtrhF4QO4xDLVk2Qu6ErXwLo13%2FFVYKRSFOrMKi128ZlvUo28%2B9lDC8MHK7EsxobaPOxcXIB%2BwQ1cybFuNZiyg1mFWmhWe9l9sGageI%2Bpv1qP%2BRdr1hn5tnddRVAm4KQqMOVp95IhuIOO8LKESaZLmxbPpPlH2wjjWES4w5uvX9hKg1pi2ACCS%2B2z8FT7pqd3HaeK7dFlyM6cGMzA8dRI%2BfMcMJbEoMEGOqUBZWM4eMnssFKJJQ7TffSMFaJ7Z6vrEUJJcA%2F8nRidwsBlwT5ulC6qLw%2F%2B%2BhEw0%2F4afMiy%2F5CvivIrJBMaS4kXeZAee6CuJfJnL16Cio3cCzykenOu6hOdc4WHjuMFJg%2FQctB0QTLcY8FCB6lK%2B137JL21LUmwifvjw54gnlnPoC7J%2FMxx6yC5Br4T1H%2FTR3bexXHzlFClDmHkcZnF%2F95PcbjsOABK&X-Amz-Signature=136b0197a64ec661c5c549dcf79e92522d713c8defb4ccb89ed5173d617f51d3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72NYT7W%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICY%2F%2BITW5PJn7Utym%2FH4y5nXFYl7UbZ92xp14yMVeEC6AiEA3WS6jJ9CpeP%2FP6aL%2BdS5h2R%2B38Q2xsAyW8qTJp0jebMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKY1A2H2MTCy5LK4RCrcA%2BTGKDOoL5PruXnm39LQmXm3J8eNdGMaNS3OT%2FovQV9vH8ag2ADG9pfYLLFyDkJwOmVJZ5NRPrTtExtXkN5HHpMZshtYFRJFmcibM9jB%2FUowdaruwoC%2BxEE0b0mKMJ4beLoSu4FeUs97q6uaomoPrfRdFkDKclGkSwvVV2g94asiyLLw0sTBFbPhxf44BGDUayO%2F%2BnHNoLxrxUA3elInyzX0CEOfUTQW2%2FOc9BZShkAblIimLHDDPZDhXjQl3OepH6I5f5XhrlRStloeZcDGkU4MNfl0YAnQJU9ZJXPYPsu%2F5w%2F4im0t1%2FSTTQPdJag3VcaYuDN3551fhvq8oeozuC2iY5s3myT4LgGQObjLVog%2FRfI9IqSfPLuxtDqnBGt%2FiVWlI%2BA5EcJ7zN%2F782y7Lr%2FkMmWsvmX8TrjCtrhF4QO4xDLVk2Qu6ErXwLo13%2FFVYKRSFOrMKi128ZlvUo28%2B9lDC8MHK7EsxobaPOxcXIB%2BwQ1cybFuNZiyg1mFWmhWe9l9sGageI%2Bpv1qP%2BRdr1hn5tnddRVAm4KQqMOVp95IhuIOO8LKESaZLmxbPpPlH2wjjWES4w5uvX9hKg1pi2ACCS%2B2z8FT7pqd3HaeK7dFlyM6cGMzA8dRI%2BfMcMJbEoMEGOqUBZWM4eMnssFKJJQ7TffSMFaJ7Z6vrEUJJcA%2F8nRidwsBlwT5ulC6qLw%2F%2B%2BhEw0%2F4afMiy%2F5CvivIrJBMaS4kXeZAee6CuJfJnL16Cio3cCzykenOu6hOdc4WHjuMFJg%2FQctB0QTLcY8FCB6lK%2B137JL21LUmwifvjw54gnlnPoC7J%2FMxx6yC5Br4T1H%2FTR3bexXHzlFClDmHkcZnF%2F95PcbjsOABK&X-Amz-Signature=afad420d932e5e3f07fd429e04cd7e70fa37e6a587d294f3b23c0fd51c1df2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
