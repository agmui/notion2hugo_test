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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ERFMWP3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBcGT9u9cCnyulNWmn5tdzyv4BbFCmoxxyW2nQ5zX1AhAiA4hpjSuZvt1paRvSWAoWTv8o6JlNYafab1LiT%2Bl2vy6Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMfN6ea3EgZlCB6BhuKtwDnjJDa6rhPg37XdkV%2FnYfsLfRBEnRA%2FOKT4eeySfK6qmKC887K1CZlRfEDKEf%2F0zBi3O0Ud%2BPhvIBuiIwGhZkui7lHyaU0uLRdVFQeDgJL3ALzO1l%2BOlS9QzT0bAD%2BJI8AfJd2GvFP6APkZDRmOWxT%2F9nKMQBQDOzJQFXZC9DujbHn6AqYbHdtZbtwg%2BXjbb7gX2IGLp9%2FOZx%2FzwIQpxl6aC4mQRQdil%2Bj4XCADV%2BLuDvNiAWglQq%2FYTd8sB1T978B%2Fbib3ZY7kFeJEjt0fZTcnjQkWHcSQXCHDpsvHUY%2FhjuUvElOVylFuH1ZLz8wY8dar24UUSN%2BKUxUiitPDKm3nZLhlTWL05u0UKMIaRyd5t2q6O1tk4DqcicOPQFYKPcmfQIInfRgolKzHVUd66%2Fq%2F1AE7X1HMIQgOuGMftUNtuCzkCweglEu74y9UdT0mUPHhEDEPYKRJeHPeg1wnOecnmDvz8%2BUhbXuzNXjLWvVktAl7eI64ja3BVPY4S4NYKqkDt0WOcDKwH9ItiD%2BfdfxLlW5wTLzNkSFZlLNS%2FkK7ANPU6FevSa%2B9d9li1IffHAn0l90XWGbTqtC3W8R9kM8fQ4H2nr%2F5fmYona%2BAvfquls7FMlfsfJzKU6o1ww3oj%2FwQY6pgFAwpLhtSGvWpbzMzoMcT05vx0MwKx4%2FgHuKasxN2J5mo22jiFV5Y64g%2BqOy642APdkmjkXVEb4U8tI8xLk5g%2FKmJKU%2FKQb6FBpRtKmRmjMsnCoEu7pg6IUdBmdIQLtIzJcEZ8LEXqkjdOKNbKwm4BsntHaLonxhR2GqhK1mTwwSJ95Bft1hiLfKm1kK58iAgn%2FZiqPso%2FsE%2Bb1V4OSnlS5Ntwkg%2BD%2F&X-Amz-Signature=bf47a42fbf0114ab3a7fa5d541156808c1349f2f1f985e4cef38f134940ab0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ERFMWP3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBcGT9u9cCnyulNWmn5tdzyv4BbFCmoxxyW2nQ5zX1AhAiA4hpjSuZvt1paRvSWAoWTv8o6JlNYafab1LiT%2Bl2vy6Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMfN6ea3EgZlCB6BhuKtwDnjJDa6rhPg37XdkV%2FnYfsLfRBEnRA%2FOKT4eeySfK6qmKC887K1CZlRfEDKEf%2F0zBi3O0Ud%2BPhvIBuiIwGhZkui7lHyaU0uLRdVFQeDgJL3ALzO1l%2BOlS9QzT0bAD%2BJI8AfJd2GvFP6APkZDRmOWxT%2F9nKMQBQDOzJQFXZC9DujbHn6AqYbHdtZbtwg%2BXjbb7gX2IGLp9%2FOZx%2FzwIQpxl6aC4mQRQdil%2Bj4XCADV%2BLuDvNiAWglQq%2FYTd8sB1T978B%2Fbib3ZY7kFeJEjt0fZTcnjQkWHcSQXCHDpsvHUY%2FhjuUvElOVylFuH1ZLz8wY8dar24UUSN%2BKUxUiitPDKm3nZLhlTWL05u0UKMIaRyd5t2q6O1tk4DqcicOPQFYKPcmfQIInfRgolKzHVUd66%2Fq%2F1AE7X1HMIQgOuGMftUNtuCzkCweglEu74y9UdT0mUPHhEDEPYKRJeHPeg1wnOecnmDvz8%2BUhbXuzNXjLWvVktAl7eI64ja3BVPY4S4NYKqkDt0WOcDKwH9ItiD%2BfdfxLlW5wTLzNkSFZlLNS%2FkK7ANPU6FevSa%2B9d9li1IffHAn0l90XWGbTqtC3W8R9kM8fQ4H2nr%2F5fmYona%2BAvfquls7FMlfsfJzKU6o1ww3oj%2FwQY6pgFAwpLhtSGvWpbzMzoMcT05vx0MwKx4%2FgHuKasxN2J5mo22jiFV5Y64g%2BqOy642APdkmjkXVEb4U8tI8xLk5g%2FKmJKU%2FKQb6FBpRtKmRmjMsnCoEu7pg6IUdBmdIQLtIzJcEZ8LEXqkjdOKNbKwm4BsntHaLonxhR2GqhK1mTwwSJ95Bft1hiLfKm1kK58iAgn%2FZiqPso%2FsE%2Bb1V4OSnlS5Ntwkg%2BD%2F&X-Amz-Signature=7705812702ce5bb076dfbb3aacf8dcc118c91e51bc9f3f6ce105816074eaaa81&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
