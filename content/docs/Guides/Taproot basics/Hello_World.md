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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3XI55R%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIH%2FNH7Wfboi4LaPBsuh%2FZLDiQBEjxE4biLoku%2B%2F5SjC4AiBEn206xlRjavTRfPLkCIuV%2FHEgG5l0eFG0B8Ugv7dlrCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMIzGo63QzUp2bWsQTKtwDuxcjmlkuA2VGo4EWiuAmJtvCuSmxepJge4bz%2FIG%2BtyQfMykLVPyXqwGbyWyVTpTs%2BrNCS%2BlrZ%2BOPp9HH0HqePnLYQgOMJK2J83SaMiWt%2BBgGc4%2BNLxOjG%2BIOElvPsk2QB4olAI6%2BOtU%2FQhKqG3AQA6LqNn9%2FL5GcTvFqGvzLVJbXdSb6kDaqz3GvHGdxJBx61KO18BB9DETae5hBBXNodB%2FZ7sWNWQaypLw%2F8JUuL6UAj97eiOs9nWZKPs0FHQXAyUlf5JdFMPj4U1zfmVJGMSk3YphxQq%2FKMtS0vM7CR0o7uHrvWJuVdDsCv3asc6iCkYM9kvW5phy7m8G6pQ3oYycnRNlUaxKjSUxjaDufn0X2CHV9r3NmOUIwNoHlAEd4y2%2B87B4%2FwX96NlNb%2FfbHZX36hYgYjtebdcRhhNDQ5FJZKQdH9USWxly7Ce5LQDgCHVk6M8oW8Zr5m%2BwtP7Rn5Y%2BN25SYLpBrUw4P15fjLjnioqi7bZbewhdVQAkoULHvOK15QB%2B5LnwFPvXbrCmKGeNM6tEyZM33Hg%2Beks2RyMK0940lG2GCnZB1pTxYzzL8Hs6uKGHNr3FhhKSFVnNRDnIYlaWAH%2F1FjFT1%2F4%2BY0ZVuTFtN5uz9tfIN%2FfUwk7S%2FvQY6pgGEFw4O1%2B1IZH1WiZ%2F5I23pIe%2FyAk8FaWesmq0gdw7EVJF633dUW13fDDtWjATCBUOWhQICSSHgSQY%2BGtRK0MUJjm87573IYkY8VUxCzadvDJM80hdTF0DNuunBZOc6v5pzaJp5kIBWzpc9vrQpbfSQ2kpdBjcx%2BhChFP3upnP3i%2BdUC3swSbLaZxS5qep92%2FiWBEBhvX%2F5R6vtaK2TACLas15xTcfI&X-Amz-Signature=60815ab73139691337e0fd3a32c0ddcaddf45e23c04fd41c3256f29ee8474dac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3XI55R%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIH%2FNH7Wfboi4LaPBsuh%2FZLDiQBEjxE4biLoku%2B%2F5SjC4AiBEn206xlRjavTRfPLkCIuV%2FHEgG5l0eFG0B8Ugv7dlrCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMIzGo63QzUp2bWsQTKtwDuxcjmlkuA2VGo4EWiuAmJtvCuSmxepJge4bz%2FIG%2BtyQfMykLVPyXqwGbyWyVTpTs%2BrNCS%2BlrZ%2BOPp9HH0HqePnLYQgOMJK2J83SaMiWt%2BBgGc4%2BNLxOjG%2BIOElvPsk2QB4olAI6%2BOtU%2FQhKqG3AQA6LqNn9%2FL5GcTvFqGvzLVJbXdSb6kDaqz3GvHGdxJBx61KO18BB9DETae5hBBXNodB%2FZ7sWNWQaypLw%2F8JUuL6UAj97eiOs9nWZKPs0FHQXAyUlf5JdFMPj4U1zfmVJGMSk3YphxQq%2FKMtS0vM7CR0o7uHrvWJuVdDsCv3asc6iCkYM9kvW5phy7m8G6pQ3oYycnRNlUaxKjSUxjaDufn0X2CHV9r3NmOUIwNoHlAEd4y2%2B87B4%2FwX96NlNb%2FfbHZX36hYgYjtebdcRhhNDQ5FJZKQdH9USWxly7Ce5LQDgCHVk6M8oW8Zr5m%2BwtP7Rn5Y%2BN25SYLpBrUw4P15fjLjnioqi7bZbewhdVQAkoULHvOK15QB%2B5LnwFPvXbrCmKGeNM6tEyZM33Hg%2Beks2RyMK0940lG2GCnZB1pTxYzzL8Hs6uKGHNr3FhhKSFVnNRDnIYlaWAH%2F1FjFT1%2F4%2BY0ZVuTFtN5uz9tfIN%2FfUwk7S%2FvQY6pgGEFw4O1%2B1IZH1WiZ%2F5I23pIe%2FyAk8FaWesmq0gdw7EVJF633dUW13fDDtWjATCBUOWhQICSSHgSQY%2BGtRK0MUJjm87573IYkY8VUxCzadvDJM80hdTF0DNuunBZOc6v5pzaJp5kIBWzpc9vrQpbfSQ2kpdBjcx%2BhChFP3upnP3i%2BdUC3swSbLaZxS5qep92%2FiWBEBhvX%2F5R6vtaK2TACLas15xTcfI&X-Amz-Signature=8fe37501239c069688324a5f2a96f283ce9925070b4171f138b860bdf264d289&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
