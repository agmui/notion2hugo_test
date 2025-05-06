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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PPZBVX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAt1LbW15IP99ig880lIN4IV3ToDylysbaKQGRffE1uCAiEAlCcd2N2lIYAc2%2Fo71RTn3p5C%2B6jC1skCc%2FDOTWFgUoMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMWdiyFvFG0V6W5MlircAwRql%2B4blzh%2FjYaNNHaaxtqo8lweKH0vzkni0BwYwFl4%2BXxwk%2B5IfdZIe66d8GqCIDiGNWyvgfRqNTHCI5YyHTTGJ7HFM1e%2F0e9MYjsRE4aeoWqPuV9RMkMru76e%2F%2BTWWH7D2%2FVmzb8ZVXCRHnJY%2BtxQGJGTyXhySKkR7T9jlm9I0A3uxO9CF01qf61cUkeZ6w%2FAOsZGDfk4lJU9ie8dVDCRFNB42gfwVhhhw3fyDjS%2BWt3TMyh%2BQ4xl3A3FPAh1QIMhl%2BbcuEYTFcWccwwatI0fXIQXMyaNCJlc9dRhTBpsJG5dgh874fxd6MjRNXbkueS%2Fvc6GnQk0awiz%2FfXcKvT0fiq%2FeCW5Z7SBupIA2fA7iiqFjLcb06AqwkVJuoAchoPHcqvTTe1lDBz3f6tZXj%2Bx88NHWnvh2GWtqmujfrV8JHjHSpgPSaK7UX9xDH7yMmLnvqc1rTQrXn8DGZa5lN5adrfgiO8kkPmr42%2BQVnC9qyBb9%2BKbU5U5Rz%2FUXhuBq%2F7tXXK%2Fz4L44MU61wtElLS2doipi8zgw2EG6Iu28iXeH9D2ElWbU%2BNjT2ZyGeYq5kQ6CF7RuJPVSnJXFmwRO%2F2I9Maub8vbgFkkSS0vUuuIa8wIwwTcMugH7KWjMPqX6MAGOqUBdwz7XvX7ZNOC5HaPSLqHbjAUjpOq%2BrWFTPlThqWTCZAHyADkeizgG8rkgJRcTumFgyMz%2Bry1JYcq5kaxQiZQ3JAK5jydUUGS1%2FxpwxxeGj5pjjl9l2KA7Gc%2BVjD6lcbLDYvJCnRHLNDCzMn0witO3Sz4sdVPGvMR4SIzBKuIADg6%2B35QQwDC1%2B%2FflYUtaSV60MO5Bjyc9A7wjZjUS3rXo90fZlP3&X-Amz-Signature=41dd75c485c99e943919586683fc6f2012061aedc20681f9331cc4068afed70b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PPZBVX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAt1LbW15IP99ig880lIN4IV3ToDylysbaKQGRffE1uCAiEAlCcd2N2lIYAc2%2Fo71RTn3p5C%2B6jC1skCc%2FDOTWFgUoMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMWdiyFvFG0V6W5MlircAwRql%2B4blzh%2FjYaNNHaaxtqo8lweKH0vzkni0BwYwFl4%2BXxwk%2B5IfdZIe66d8GqCIDiGNWyvgfRqNTHCI5YyHTTGJ7HFM1e%2F0e9MYjsRE4aeoWqPuV9RMkMru76e%2F%2BTWWH7D2%2FVmzb8ZVXCRHnJY%2BtxQGJGTyXhySKkR7T9jlm9I0A3uxO9CF01qf61cUkeZ6w%2FAOsZGDfk4lJU9ie8dVDCRFNB42gfwVhhhw3fyDjS%2BWt3TMyh%2BQ4xl3A3FPAh1QIMhl%2BbcuEYTFcWccwwatI0fXIQXMyaNCJlc9dRhTBpsJG5dgh874fxd6MjRNXbkueS%2Fvc6GnQk0awiz%2FfXcKvT0fiq%2FeCW5Z7SBupIA2fA7iiqFjLcb06AqwkVJuoAchoPHcqvTTe1lDBz3f6tZXj%2Bx88NHWnvh2GWtqmujfrV8JHjHSpgPSaK7UX9xDH7yMmLnvqc1rTQrXn8DGZa5lN5adrfgiO8kkPmr42%2BQVnC9qyBb9%2BKbU5U5Rz%2FUXhuBq%2F7tXXK%2Fz4L44MU61wtElLS2doipi8zgw2EG6Iu28iXeH9D2ElWbU%2BNjT2ZyGeYq5kQ6CF7RuJPVSnJXFmwRO%2F2I9Maub8vbgFkkSS0vUuuIa8wIwwTcMugH7KWjMPqX6MAGOqUBdwz7XvX7ZNOC5HaPSLqHbjAUjpOq%2BrWFTPlThqWTCZAHyADkeizgG8rkgJRcTumFgyMz%2Bry1JYcq5kaxQiZQ3JAK5jydUUGS1%2FxpwxxeGj5pjjl9l2KA7Gc%2BVjD6lcbLDYvJCnRHLNDCzMn0witO3Sz4sdVPGvMR4SIzBKuIADg6%2B35QQwDC1%2B%2FflYUtaSV60MO5Bjyc9A7wjZjUS3rXo90fZlP3&X-Amz-Signature=dc293d0642fca9fb35c97dd8bd809132b2baa0febb749b7fd44e1f17f38186e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
