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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG2UKKT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGAYSYa2GFlDYH01%2BHx2MtZv5LvqDunAnkv6IvKSXta5AiAikwuJ9TA7GUOHKeSB%2BupfPdi3zQvpdRv6X%2BffTVrQVCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMliHwsoilMbMk8JdpKtwDc%2FCHuObjHsqGB1xDt%2BQ1PxfGqjJByowPTQM1SPoRirYuv8TPQ5M6LGGewUSIr9SWkMbVB1xy9FroUga1gMQ%2BZsQF7TV6j2MtlqekgEZ33DSvzfaLiC%2BDQpGrwSOpP2rX42MDC9K%2FNqosBw1mW5kUiFvRAPtl818UIyZJzCtjActJl%2FoTMPyU21%2FA204LapNNDQfgk5jrzpYzagV6zklGN5ot%2FZ05Fbke3iVK5KFcwKdsieX52X2N5SUxwijGLRf0Hy63uOcFWus1JF6YnMHhNbuUb0xxOMRD1KBZ4O138Z0FeWH1Mrk5vjTAWNF4iJ%2BXUVVDHQwl%2BYQ0qabrgpa8eaMJXQnwdLnQU2FvhZzxtRZRgjc%2BCmacUH4HsF8QJ9AdXbavzOGhy7sTGLeCvKcK3v3%2F4B8uDnxaP%2FSqrbmCzOCWy%2BoGgJG6AjY333J8aklZxx8rL8t%2Bsd3gg%2FHjzM8hRnt7O4QFJ5jU8qet4ihWq60utWzUBKsH6D%2FsNqkn1zRIurBW4W3XZ0rje1MlX36%2FIsTZD7I7oTwlDcx31NiZD1eVewNApqCn3UuTfhtUmzSS%2FKILFz8FvxeIOVqTE26BngsfUOjMJ0kCnSjd4AXuOWtGY1thT2kJtGuc4wgw1KCowAY6pgFuJEDjJbXYlvW8KW96m1ZnJ1IE2UttR4mc1y6rt54PoL9GFxQu2NHdz5xN502fO8MBAkZqwkOic4NFReglrYkr1tcodj1ea1mjpTfVd0wG69QtfqlZYvTyGv1laIlWyBQPAUiOosU8P6VE6d1H8MphKKPlIOX3MMLOa9P%2BISXqEoKmH%2BFMTElBNYDHpHWg4jxngqWkXYCPBJCVmDQf9N1Z%2FI8jQrQ4&X-Amz-Signature=77f979efcb6fc88ad877259e865d7f5be867655c394cabe6a82fa2df4b7e5832&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG2UKKT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGAYSYa2GFlDYH01%2BHx2MtZv5LvqDunAnkv6IvKSXta5AiAikwuJ9TA7GUOHKeSB%2BupfPdi3zQvpdRv6X%2BffTVrQVCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMliHwsoilMbMk8JdpKtwDc%2FCHuObjHsqGB1xDt%2BQ1PxfGqjJByowPTQM1SPoRirYuv8TPQ5M6LGGewUSIr9SWkMbVB1xy9FroUga1gMQ%2BZsQF7TV6j2MtlqekgEZ33DSvzfaLiC%2BDQpGrwSOpP2rX42MDC9K%2FNqosBw1mW5kUiFvRAPtl818UIyZJzCtjActJl%2FoTMPyU21%2FA204LapNNDQfgk5jrzpYzagV6zklGN5ot%2FZ05Fbke3iVK5KFcwKdsieX52X2N5SUxwijGLRf0Hy63uOcFWus1JF6YnMHhNbuUb0xxOMRD1KBZ4O138Z0FeWH1Mrk5vjTAWNF4iJ%2BXUVVDHQwl%2BYQ0qabrgpa8eaMJXQnwdLnQU2FvhZzxtRZRgjc%2BCmacUH4HsF8QJ9AdXbavzOGhy7sTGLeCvKcK3v3%2F4B8uDnxaP%2FSqrbmCzOCWy%2BoGgJG6AjY333J8aklZxx8rL8t%2Bsd3gg%2FHjzM8hRnt7O4QFJ5jU8qet4ihWq60utWzUBKsH6D%2FsNqkn1zRIurBW4W3XZ0rje1MlX36%2FIsTZD7I7oTwlDcx31NiZD1eVewNApqCn3UuTfhtUmzSS%2FKILFz8FvxeIOVqTE26BngsfUOjMJ0kCnSjd4AXuOWtGY1thT2kJtGuc4wgw1KCowAY6pgFuJEDjJbXYlvW8KW96m1ZnJ1IE2UttR4mc1y6rt54PoL9GFxQu2NHdz5xN502fO8MBAkZqwkOic4NFReglrYkr1tcodj1ea1mjpTfVd0wG69QtfqlZYvTyGv1laIlWyBQPAUiOosU8P6VE6d1H8MphKKPlIOX3MMLOa9P%2BISXqEoKmH%2BFMTElBNYDHpHWg4jxngqWkXYCPBJCVmDQf9N1Z%2FI8jQrQ4&X-Amz-Signature=d48a030d375f8e620b072cbf478f20769c94ad64118cd0a336bfdc7c7969a7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
