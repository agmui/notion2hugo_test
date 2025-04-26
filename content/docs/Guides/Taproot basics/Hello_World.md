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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZAV6QX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIcsEe4Vr%2BXRk6GaMMnMGXfIS5LyiuDf%2FAc3cwZ02VOAiA9Brou%2BoRaRDPRSpHmwBMxWxh6aj3R5CK5mT%2Feu3Opfyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOI5%2Fw%2Bq2nzyL0mGiKtwDwcau1kQ6NWvesWV2zM9dF7kX%2BF9VnVKmp0G2kMVFxgepEhBWh9RzXmlvpN0eNMYHTqUxbKxyw97BcGWtvVeV9TR%2F3mOcfNCWV4Y6fqkPJn3NfY5x3i91aW26a2En7Q%2Bj08NzD%2BI%2BP2HeO7GsPu2jdNSFSjIPDG420bFbrOZ%2Frjcdc7Z%2FgTAMkl4AtFq87QfVW7iPdFQMNfeed0G6CIFmHwxGPobK1y0SsTrFc33nK%2Bsk0plQxRoWFplOQK5aFgR6QZ%2BXI5RFW6e8zV7ukWPN4%2BzBu7hd%2BYRyh5yLcaHgck9A8%2BQrEKp%2B%2FNZ7JCW5ITuVlIaF3wugXwRYwsSug1W9R1QGqF8gASG6AsdWVxmNKd%2BJyqcPj%2FYm68r8WslDVX0w1xrMQLB5M3JKszwLvaFpDC9RNBChnNISNZNo97Hk4I9zUW4UdUtBOvEduxGVY6RboI1UA0wNdD2C0voPQJztJnxhlNgXeudEp5IQLPFq54bezdl35RxlpEi07%2BHWW%2F1LvMmQ%2FZ%2FRDUJVdZ43cO0v%2FVSgJCHNHpZTz0cY9%2Ft8GKzWVVXfaQSSu%2B%2BjlANvFleaJv3t8zbh13%2FF9l0EebQ1L%2FXjbaUsc1yrYIlRj8xhpvTBvGP85qyyxgvzf10w6Y2xwAY6pgGMVP3SE6HFJ5%2BDZ807x8XQUKvirVpx%2B1gYrUOwNdhrh8VeqAhhVlWJ4PC6tTn5eB9bLXrj%2BoAkTwwSb2X71tfrvud%2Fc8aa%2FTG8WGbuWTCW3QV2IlDn4Hj%2BhBmIfjSMUEaSYj%2FrhqtVfE67nXU1gURDp6QUH764zHeWVyQ4cvluobo01717bIVaiG07oKOZ%2FsQEyFqUju0uUQsUGeOdwvG9wf3nLddS&X-Amz-Signature=fbd58d4ea8105da63fac117fc1a7fd0dd7b852ef5d3c9523a4d0cf319a962464&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZAV6QX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIcsEe4Vr%2BXRk6GaMMnMGXfIS5LyiuDf%2FAc3cwZ02VOAiA9Brou%2BoRaRDPRSpHmwBMxWxh6aj3R5CK5mT%2Feu3Opfyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOI5%2Fw%2Bq2nzyL0mGiKtwDwcau1kQ6NWvesWV2zM9dF7kX%2BF9VnVKmp0G2kMVFxgepEhBWh9RzXmlvpN0eNMYHTqUxbKxyw97BcGWtvVeV9TR%2F3mOcfNCWV4Y6fqkPJn3NfY5x3i91aW26a2En7Q%2Bj08NzD%2BI%2BP2HeO7GsPu2jdNSFSjIPDG420bFbrOZ%2Frjcdc7Z%2FgTAMkl4AtFq87QfVW7iPdFQMNfeed0G6CIFmHwxGPobK1y0SsTrFc33nK%2Bsk0plQxRoWFplOQK5aFgR6QZ%2BXI5RFW6e8zV7ukWPN4%2BzBu7hd%2BYRyh5yLcaHgck9A8%2BQrEKp%2B%2FNZ7JCW5ITuVlIaF3wugXwRYwsSug1W9R1QGqF8gASG6AsdWVxmNKd%2BJyqcPj%2FYm68r8WslDVX0w1xrMQLB5M3JKszwLvaFpDC9RNBChnNISNZNo97Hk4I9zUW4UdUtBOvEduxGVY6RboI1UA0wNdD2C0voPQJztJnxhlNgXeudEp5IQLPFq54bezdl35RxlpEi07%2BHWW%2F1LvMmQ%2FZ%2FRDUJVdZ43cO0v%2FVSgJCHNHpZTz0cY9%2Ft8GKzWVVXfaQSSu%2B%2BjlANvFleaJv3t8zbh13%2FF9l0EebQ1L%2FXjbaUsc1yrYIlRj8xhpvTBvGP85qyyxgvzf10w6Y2xwAY6pgGMVP3SE6HFJ5%2BDZ807x8XQUKvirVpx%2B1gYrUOwNdhrh8VeqAhhVlWJ4PC6tTn5eB9bLXrj%2BoAkTwwSb2X71tfrvud%2Fc8aa%2FTG8WGbuWTCW3QV2IlDn4Hj%2BhBmIfjSMUEaSYj%2FrhqtVfE67nXU1gURDp6QUH764zHeWVyQ4cvluobo01717bIVaiG07oKOZ%2FsQEyFqUju0uUQsUGeOdwvG9wf3nLddS&X-Amz-Signature=76978249c28bbd77748e982259d45591468c76c53bd5c528eb915192421a5776&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
