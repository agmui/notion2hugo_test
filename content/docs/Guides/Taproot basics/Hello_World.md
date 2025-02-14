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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVIQG7M%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGduT0m2nFSsdexCGX2RrOp0F%2FWo6IK6W88ty9UdhDvCAiBHmzK9dKmU0vsOEVMuVxc81IrR598p2VcDvuhDG0hSgSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMzW8lY9TKZ%2B7bBDOCKtwDJKAhzwGxz7LcapckIEU0GG6HzyQm%2BOQasTKvf4OjjpY%2B7RgXdc5ZkeZR%2BiimgTJgBMHFpfbfiT6MJD%2FHo%2B%2BbnANip9%2F6dA01JPHceQNqeivYFmbrzRUDu3fDelKqvV0vKNutQd6yX8pp90fxe2mS2YrUMNwxPMQHn5aIGyHyJSYS9iG51Mx2xiOEyBz%2BsibaEJJb%2FF18buahGou6H9R4kQHOm3q32GBx3WSzY6q63m1Blcrmnk4GUo8ouSo2BhwL6cR%2BhObj5yWJ4f4QgFAlPEa8N%2BGPX9yCVxzZ8wv01GSMv%2Bgn70H4K%2Fl235qpmpXmf%2FR%2FP5S%2BFnB2gWtPCTS%2FYdIPjao%2F6t39rPxiqXVIbHxcSe8ZbVvxozHNtawUmrqd6tXsNGpKptRvfuTazzMHwlDxPWcYR9EvtvylvXSbpejyCaTa9b0BEh3rRXkHBNdJTz3TVuje3pPI53xp6S4RCwZJq7EsGSOfrn4o4NtSIW07hL4djCR8t6y2eaq9sJrW%2Fv88Jmwi%2BY6bXRw1p6u6i4BaZjpKfkqMlamEcEThzrt8L%2BezWirbF6qmsOGXBFPS4tqHn1G3TgDuQUGkseY%2B47KxoQsIcFURafEUkkg%2B62WiJbe58VX2dwsaBB4wsuq8vQY6pgG%2FbBjV%2B36k4gVd0v11gLY7EwiL1Uv6y1KV5FKmvf6Z4hiQaCjzgP8LnUIAGdDgScoU3Gs0%2FW%2BJdK7PaiH%2FGOkWpR9VBh79HFBLkIL1SBBNO11e%2Fk8x0ok2SmpRfHFoh1jpSTE%2B52wjryq8V3oB72kncJDGpy%2FwmQmAN%2BgsKBwTaz47tgSYYTwM0Xokp%2BlfRvtPvCipFf0gUDUu5atSedvMQKFGAwuF&X-Amz-Signature=672710cb3e2e09da4c57e76487344ea1b5bb04627bb54bc5ce5ed2b8422f99d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVIQG7M%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGduT0m2nFSsdexCGX2RrOp0F%2FWo6IK6W88ty9UdhDvCAiBHmzK9dKmU0vsOEVMuVxc81IrR598p2VcDvuhDG0hSgSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMzW8lY9TKZ%2B7bBDOCKtwDJKAhzwGxz7LcapckIEU0GG6HzyQm%2BOQasTKvf4OjjpY%2B7RgXdc5ZkeZR%2BiimgTJgBMHFpfbfiT6MJD%2FHo%2B%2BbnANip9%2F6dA01JPHceQNqeivYFmbrzRUDu3fDelKqvV0vKNutQd6yX8pp90fxe2mS2YrUMNwxPMQHn5aIGyHyJSYS9iG51Mx2xiOEyBz%2BsibaEJJb%2FF18buahGou6H9R4kQHOm3q32GBx3WSzY6q63m1Blcrmnk4GUo8ouSo2BhwL6cR%2BhObj5yWJ4f4QgFAlPEa8N%2BGPX9yCVxzZ8wv01GSMv%2Bgn70H4K%2Fl235qpmpXmf%2FR%2FP5S%2BFnB2gWtPCTS%2FYdIPjao%2F6t39rPxiqXVIbHxcSe8ZbVvxozHNtawUmrqd6tXsNGpKptRvfuTazzMHwlDxPWcYR9EvtvylvXSbpejyCaTa9b0BEh3rRXkHBNdJTz3TVuje3pPI53xp6S4RCwZJq7EsGSOfrn4o4NtSIW07hL4djCR8t6y2eaq9sJrW%2Fv88Jmwi%2BY6bXRw1p6u6i4BaZjpKfkqMlamEcEThzrt8L%2BezWirbF6qmsOGXBFPS4tqHn1G3TgDuQUGkseY%2B47KxoQsIcFURafEUkkg%2B62WiJbe58VX2dwsaBB4wsuq8vQY6pgG%2FbBjV%2B36k4gVd0v11gLY7EwiL1Uv6y1KV5FKmvf6Z4hiQaCjzgP8LnUIAGdDgScoU3Gs0%2FW%2BJdK7PaiH%2FGOkWpR9VBh79HFBLkIL1SBBNO11e%2Fk8x0ok2SmpRfHFoh1jpSTE%2B52wjryq8V3oB72kncJDGpy%2FwmQmAN%2BgsKBwTaz47tgSYYTwM0Xokp%2BlfRvtPvCipFf0gUDUu5atSedvMQKFGAwuF&X-Amz-Signature=b737b3bf59ab053034a7657b20b58d54a22bf93525d29df5899378fd591a22fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
