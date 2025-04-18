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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EK7BZ2O%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCooq91EHhUPDf5H8oBy0Q3jD88REWyv1R2L8CUxIRFwQIgH%2F9BTKXquWYOWAsLGOH7R22I6dYdDJEQsLnru7gqfiAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHetNY6GsopsGxAIKircAwH2GVXXfTg0HLRMqY2A3Vti86W7mSKJOsB0B1dbQz%2FjFeAECyG76OQP5lHimwXd1HHXAQ9RgYAOwZtoYtVaHTG2J6k4ikpRnAPmn%2FkWvNfaqIfiwtdh2Bd7Dr9G2lM9PjIC1r6oF%2Ft46kxkQjHc2Nmir%2BCv02yr2vpTQscUgRUEAJl2kzBwcOWvNpzd08NxomwUILDpdgOi2sIYEGL%2FHBBvbZSvkcMe%2BpNEX9rjx6VjtVIpap%2F35OG7P270iES6s%2FQUNKdZ7HZxbxC%2FUYO4KDuBIX8F0H0kUW6qQ7AXUgYIRNsvIKw8Gg7%2BG1I6oQALrgO6CWAHenQ%2BYuG0OCsUqSlk%2FDy9lRAh8OaEUXlRI5ECgZvhVHM5JWNOH2GW1RB0BDlQuMN7Sgizk7GKAjChQ6q09P5U3lf3Sslwapcaxpp9yLSvF727JN%2BkEXsJV4TpVw%2FuXAmcYWPoGngmoNrkuGbuFCQJCDrMBCprnUlQE0vKCFP8wDfYrdPtPwI9Y%2B6%2BcgKSkR1Ti1QNiZOM%2FLztxaJqFY%2FIoKkgYdqeTG9vQBqH%2F%2FyrtnV%2BF4OaA9cB5AS%2F1cskOBikYZo3SXnldB%2Fl5Gcu2SrJ79LVSInpwWHyab7vvIoTIyEVijJegIb2MNmYi8AGOqUBvhRzsJlLeX88JS5k161cUZBi%2FrT%2Fq2kPUZnIRtjQxn9yQgNs%2FJp7NGZ1f2p%2F%2FXIq34DhdTgU3FpX0VsFvFOLuKARlIjAAZfZcewnJSsYOmBB%2F6ficveZQKQH5W25JiPneG%2F23eNXWTf4hg5q2hv2RmijhlX6%2Ba8vTGeVE4YN8gIv1naG0C%2BluDPPotVE9HBcuwWU3IgLM5imGFR1eX7PNdOr5i21&X-Amz-Signature=ec20b5d910acb43c0f6f8f457368918e4adcace8e7c95eb3a84dbaabfd6daeeb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EK7BZ2O%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCooq91EHhUPDf5H8oBy0Q3jD88REWyv1R2L8CUxIRFwQIgH%2F9BTKXquWYOWAsLGOH7R22I6dYdDJEQsLnru7gqfiAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHetNY6GsopsGxAIKircAwH2GVXXfTg0HLRMqY2A3Vti86W7mSKJOsB0B1dbQz%2FjFeAECyG76OQP5lHimwXd1HHXAQ9RgYAOwZtoYtVaHTG2J6k4ikpRnAPmn%2FkWvNfaqIfiwtdh2Bd7Dr9G2lM9PjIC1r6oF%2Ft46kxkQjHc2Nmir%2BCv02yr2vpTQscUgRUEAJl2kzBwcOWvNpzd08NxomwUILDpdgOi2sIYEGL%2FHBBvbZSvkcMe%2BpNEX9rjx6VjtVIpap%2F35OG7P270iES6s%2FQUNKdZ7HZxbxC%2FUYO4KDuBIX8F0H0kUW6qQ7AXUgYIRNsvIKw8Gg7%2BG1I6oQALrgO6CWAHenQ%2BYuG0OCsUqSlk%2FDy9lRAh8OaEUXlRI5ECgZvhVHM5JWNOH2GW1RB0BDlQuMN7Sgizk7GKAjChQ6q09P5U3lf3Sslwapcaxpp9yLSvF727JN%2BkEXsJV4TpVw%2FuXAmcYWPoGngmoNrkuGbuFCQJCDrMBCprnUlQE0vKCFP8wDfYrdPtPwI9Y%2B6%2BcgKSkR1Ti1QNiZOM%2FLztxaJqFY%2FIoKkgYdqeTG9vQBqH%2F%2FyrtnV%2BF4OaA9cB5AS%2F1cskOBikYZo3SXnldB%2Fl5Gcu2SrJ79LVSInpwWHyab7vvIoTIyEVijJegIb2MNmYi8AGOqUBvhRzsJlLeX88JS5k161cUZBi%2FrT%2Fq2kPUZnIRtjQxn9yQgNs%2FJp7NGZ1f2p%2F%2FXIq34DhdTgU3FpX0VsFvFOLuKARlIjAAZfZcewnJSsYOmBB%2F6ficveZQKQH5W25JiPneG%2F23eNXWTf4hg5q2hv2RmijhlX6%2Ba8vTGeVE4YN8gIv1naG0C%2BluDPPotVE9HBcuwWU3IgLM5imGFR1eX7PNdOr5i21&X-Amz-Signature=bf90612d4e33440de26ebd364970f2f5fd5101d6f77984c0a400c512efec0d1f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
