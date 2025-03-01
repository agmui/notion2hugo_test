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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QUJCQMD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC0WLcy1KKJx2cdglu5jHevocID07tc0uoExTqzJhiqjwIgHodwv300KeggLB%2F4PwGMvx3cFX1aMLPv%2ByeMHFiSD9YqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FdOjXSO85EE1PwMircA1VycJq7OSiastBhXAcfnoy9PcBFHtlwgxYSdCk44uItrXJz110dM87%2Be1HkcdqZtNbQpOr256nc5C%2F8jXpOTsFMG01wYAmX2SLXXjQhMdRIDe5SvJK4jpjzgCY24jFNggSwz2cwiRREZJeOtIr9yLS6oC2jsgLdzUKJZkEuT2Xj9I2VlImL%2F%2FizJqdX5eVqtssLuBMzfubWkaeex%2FIxFBKYcqhSjx1Wj0mGYWli9DzuYYU%2BAjyjQBzg7gMbo8CO7QDeW1yQq5suKwB%2Bbog%2B1F4fQGa5G%2BVrUFO4DtrPbrK5Q%2FwgQcTd%2FGC3EkUQfgSThfz2S%2FQz%2FRwmcxHSQyA6IojQXuzGSyw2hAIsz16GklQjHRmgrUEF0PUQUaPu7n%2BwP0gxXhY66GjWWUvgUD%2BzWgL9PwaAywZZwCJI69Uc3sf2AunInKsKCjTQhJvpeUhyB7jHb4nv6KVmOMfilD8K%2F4pb0kNCxzT%2F2p2BXkcAAUirbS3fi8vloXRV1PZx6q83XSqDwfjyzWOHsAkC%2BKog4yusM4Ilg8VTIsKlrYTL1k6S4xK0e%2FcPjZUwXOZymL7CgICChwoV%2Bn%2F7yTq8IxcpKHkM3ZMjYzZdWfFCZqfVfXGCHT3yRpR1OKLbic%2FvMLSVjL4GOqUBE3kOAA%2FfGWrDGpIPGb9Mx8qNq0BQJHBcsWLGwXh12DR5ACB2Xx7JtK10dRgmTv1RgMY6v%2BwpEBBTFJL9HYafINeIx53AO%2FBlYXS8O0w6nOEe%2FZogHAjiED78D96s9P0Ppw9mU5y1GzQnMgX6hSz4i%2FHBogfsHoujFZv01MqeMrw29jRcrfydfL5brOdEay2zD6XMbR%2Bet%2BZJcQLnpvvOtOfadmJz&X-Amz-Signature=7a01615067c48339ab50a205eae89ea7e90d2ec90d21d9c358d4c2a242400b93&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QUJCQMD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC0WLcy1KKJx2cdglu5jHevocID07tc0uoExTqzJhiqjwIgHodwv300KeggLB%2F4PwGMvx3cFX1aMLPv%2ByeMHFiSD9YqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FdOjXSO85EE1PwMircA1VycJq7OSiastBhXAcfnoy9PcBFHtlwgxYSdCk44uItrXJz110dM87%2Be1HkcdqZtNbQpOr256nc5C%2F8jXpOTsFMG01wYAmX2SLXXjQhMdRIDe5SvJK4jpjzgCY24jFNggSwz2cwiRREZJeOtIr9yLS6oC2jsgLdzUKJZkEuT2Xj9I2VlImL%2F%2FizJqdX5eVqtssLuBMzfubWkaeex%2FIxFBKYcqhSjx1Wj0mGYWli9DzuYYU%2BAjyjQBzg7gMbo8CO7QDeW1yQq5suKwB%2Bbog%2B1F4fQGa5G%2BVrUFO4DtrPbrK5Q%2FwgQcTd%2FGC3EkUQfgSThfz2S%2FQz%2FRwmcxHSQyA6IojQXuzGSyw2hAIsz16GklQjHRmgrUEF0PUQUaPu7n%2BwP0gxXhY66GjWWUvgUD%2BzWgL9PwaAywZZwCJI69Uc3sf2AunInKsKCjTQhJvpeUhyB7jHb4nv6KVmOMfilD8K%2F4pb0kNCxzT%2F2p2BXkcAAUirbS3fi8vloXRV1PZx6q83XSqDwfjyzWOHsAkC%2BKog4yusM4Ilg8VTIsKlrYTL1k6S4xK0e%2FcPjZUwXOZymL7CgICChwoV%2Bn%2F7yTq8IxcpKHkM3ZMjYzZdWfFCZqfVfXGCHT3yRpR1OKLbic%2FvMLSVjL4GOqUBE3kOAA%2FfGWrDGpIPGb9Mx8qNq0BQJHBcsWLGwXh12DR5ACB2Xx7JtK10dRgmTv1RgMY6v%2BwpEBBTFJL9HYafINeIx53AO%2FBlYXS8O0w6nOEe%2FZogHAjiED78D96s9P0Ppw9mU5y1GzQnMgX6hSz4i%2FHBogfsHoujFZv01MqeMrw29jRcrfydfL5brOdEay2zD6XMbR%2Bet%2BZJcQLnpvvOtOfadmJz&X-Amz-Signature=40b09867b1dd0a455e3cf5311b638e986cb7f9a3086f4d8ba5f66a31c046ac43&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
