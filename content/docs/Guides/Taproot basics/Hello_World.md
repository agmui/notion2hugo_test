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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWYSXZ4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCID36S3%2BMtZa%2B4lYLdo8EOC3gzeFeaTSZdrBFJ0itY5LPAiAkGBLh5BGXhPvYllsOXalpz8CGEWyM7HD2y6cGyFcJ3Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMZ0hhkCjcwvyTNhwaKtwD%2FtDI9BY32RiUNAVteAK4KkD4l6QNTmRISRSjliokTl%2Foe76SnGoduwxfSexY1UFRZ0LjxX6kH3de3LUigz9GLo8mkDDI%2Fy0%2BGcD9u0ACyM33%2BIkqFQT8LxrIgWLRRr2usuSsOLpXkVamay%2BJX%2FdcXAI1OhPxuwHZeiEXgqOCHkEeZECuTQ7cc8YOYSMCwsbVeKfO%2F%2Ff49lXjcoRJFXZ4tME7qrmooLHBvz1UU36oARThYsi1RbJySGnPTOFD%2FZEuPbw8Uz9kCFMvfNWR4u8KyQLeboqEHQvk66PPimW5LZRUHBL6pHlEquwCy5X%2FPF3lDeL0lLVg4xMEfhVlIPKtLoVkv%2FkzEThszGA%2B4edCyAFxJ3Wg6wtZo1aCd3jBDMdwDj3UUb1bHZvNhf33w5wMDYvJKGzv8elyK98w%2FbVTmY5BGBHz0%2BuvBaS4BTS988meo4NIQaA991vdRWi8GHI9oo1VtTalJAqku8XCz40MORbGiuhPf%2FU7nRqcuW2siJYb8r4LwDi4WYKTrhP%2Bs8jTghWy37w%2FDFzJ4NUdxh%2FUXLcUmCbk3XwGIoUBF1S6KceqQLAwv3iU6ARLfCy%2B0NYDoBDALG%2BOOufBlULc4HYHzsOAni29myGA7OS1BBIwhqLqwgY6pgEyCXQ7lsiO4BJDaV6t5Q8O64U7AQHAoVxB1DUFvBv10sY0uUaJAMAOqlRrIWyGsMSWsLi23NDbNzsEHL9QLvm5B%2BgzGVC4sFwTOOZhId67kVE8zJLztftyuyTS34oy3WWepkR%2FGMPfM85yfIFjq9XVtaiXFNTigl3VWcLdUfW8LRWzFyKBREQt%2BxWdf0KxptVn2QIxSxtdYMK4wgVAoHROEyR2sUXE&X-Amz-Signature=72a270186cf6eb16fc521416167c07648578acebfe1ceccd9fa4e394558a7571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWYSXZ4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCID36S3%2BMtZa%2B4lYLdo8EOC3gzeFeaTSZdrBFJ0itY5LPAiAkGBLh5BGXhPvYllsOXalpz8CGEWyM7HD2y6cGyFcJ3Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMZ0hhkCjcwvyTNhwaKtwD%2FtDI9BY32RiUNAVteAK4KkD4l6QNTmRISRSjliokTl%2Foe76SnGoduwxfSexY1UFRZ0LjxX6kH3de3LUigz9GLo8mkDDI%2Fy0%2BGcD9u0ACyM33%2BIkqFQT8LxrIgWLRRr2usuSsOLpXkVamay%2BJX%2FdcXAI1OhPxuwHZeiEXgqOCHkEeZECuTQ7cc8YOYSMCwsbVeKfO%2F%2Ff49lXjcoRJFXZ4tME7qrmooLHBvz1UU36oARThYsi1RbJySGnPTOFD%2FZEuPbw8Uz9kCFMvfNWR4u8KyQLeboqEHQvk66PPimW5LZRUHBL6pHlEquwCy5X%2FPF3lDeL0lLVg4xMEfhVlIPKtLoVkv%2FkzEThszGA%2B4edCyAFxJ3Wg6wtZo1aCd3jBDMdwDj3UUb1bHZvNhf33w5wMDYvJKGzv8elyK98w%2FbVTmY5BGBHz0%2BuvBaS4BTS988meo4NIQaA991vdRWi8GHI9oo1VtTalJAqku8XCz40MORbGiuhPf%2FU7nRqcuW2siJYb8r4LwDi4WYKTrhP%2Bs8jTghWy37w%2FDFzJ4NUdxh%2FUXLcUmCbk3XwGIoUBF1S6KceqQLAwv3iU6ARLfCy%2B0NYDoBDALG%2BOOufBlULc4HYHzsOAni29myGA7OS1BBIwhqLqwgY6pgEyCXQ7lsiO4BJDaV6t5Q8O64U7AQHAoVxB1DUFvBv10sY0uUaJAMAOqlRrIWyGsMSWsLi23NDbNzsEHL9QLvm5B%2BgzGVC4sFwTOOZhId67kVE8zJLztftyuyTS34oy3WWepkR%2FGMPfM85yfIFjq9XVtaiXFNTigl3VWcLdUfW8LRWzFyKBREQt%2BxWdf0KxptVn2QIxSxtdYMK4wgVAoHROEyR2sUXE&X-Amz-Signature=cc093d0f35726091a6c7ba471ef076b61582f10122c670f139e659874d13e382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
