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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466453U425Z%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB%2Bby%2BX73jDoce79SoEaCPkHhnBJDLR9Alwx%2F%2Ba2rhHtAiEAmZh%2FR2DZXPCxhjJVMZhFBusP%2BhJlfbCDKY829r8mcsUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnd8XlBEMlDHPQ9VyrcAzhFX64qSMQp55zG1QSclx3OBWo01XjoBQkjuo7ZKkF44EBZSDuNftywZgNKs11NbnSgFcXcdKUKKjB1RFF4K9Ln1O7%2BsjUlQ3Rc462tH%2F3ZNRrqaHNwFV854s8rKkGSjMNUP6sDeFYMtFAiuWqV4U9%2FwFtLqJPMCifa8nm1On3jbKq2DHzYC0Rkte06jjzfl63oTNW2vHlNPkUymxV3uNljrahjMeyRg%2FRwec%2BZ9I8%2BQYPkFWzYKhq4474BEn%2F4Zj4B5GGyiXUY3bBkTACmkT4bKv%2F65htlP%2BvLUPzR%2Bke277P5SmzsVD3rj7NU5bMZng5Ve0sx353U9JJr0QzJ%2BM0885H0PBiTYMnUF208NWAy1zyHcD19x91h%2B7dsL9uKC4JA0SgYr3ySoQSnjxMyXFN%2F1UfEsuz1v4tS968T2353aDJozuFv9DUWwFM7%2Fz80r80mamduOUJwIDiVMIabVxsT31m%2FKiQs4f%2FFqDWqgKiyIJfnxqRb2NJub6CczoRikrh%2B7YG02F%2FxLSXDxXqytCsGVHODT63u8XkFuAo5oLU5lTooiXdRZNuQGT1M%2FkDxDoXX3ASpzbMPUOACOzxn6qFtUNyFplyVCR%2BDoGKhSq3xZDQWKok03jhKFcJvMPWU1MQGOqUBbfbUcIwp7fA79dl2f6J4k1iu3Cvge1%2BxlAT1cxM068v5hYxSX4CHdng6HrzapzBpN9HiSu1IwpoaxHryz6nz5nAJxR138aDY9Y74ZLfBlbuMsB6Ek54%2Be5vZRbUqNcrdUKcbKLJQHOIIQYViq3484NCef2Mbr1ngYqImYf3GhudYvzScMq2NLRpB%2BNohmC0HwqSNP3AFkHjTMl%2B%2BftsA2JJxahDV&X-Amz-Signature=6c10621b1481422354425c78f1ac58c09a975df17ee6db784509dff218b93a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466453U425Z%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB%2Bby%2BX73jDoce79SoEaCPkHhnBJDLR9Alwx%2F%2Ba2rhHtAiEAmZh%2FR2DZXPCxhjJVMZhFBusP%2BhJlfbCDKY829r8mcsUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnd8XlBEMlDHPQ9VyrcAzhFX64qSMQp55zG1QSclx3OBWo01XjoBQkjuo7ZKkF44EBZSDuNftywZgNKs11NbnSgFcXcdKUKKjB1RFF4K9Ln1O7%2BsjUlQ3Rc462tH%2F3ZNRrqaHNwFV854s8rKkGSjMNUP6sDeFYMtFAiuWqV4U9%2FwFtLqJPMCifa8nm1On3jbKq2DHzYC0Rkte06jjzfl63oTNW2vHlNPkUymxV3uNljrahjMeyRg%2FRwec%2BZ9I8%2BQYPkFWzYKhq4474BEn%2F4Zj4B5GGyiXUY3bBkTACmkT4bKv%2F65htlP%2BvLUPzR%2Bke277P5SmzsVD3rj7NU5bMZng5Ve0sx353U9JJr0QzJ%2BM0885H0PBiTYMnUF208NWAy1zyHcD19x91h%2B7dsL9uKC4JA0SgYr3ySoQSnjxMyXFN%2F1UfEsuz1v4tS968T2353aDJozuFv9DUWwFM7%2Fz80r80mamduOUJwIDiVMIabVxsT31m%2FKiQs4f%2FFqDWqgKiyIJfnxqRb2NJub6CczoRikrh%2B7YG02F%2FxLSXDxXqytCsGVHODT63u8XkFuAo5oLU5lTooiXdRZNuQGT1M%2FkDxDoXX3ASpzbMPUOACOzxn6qFtUNyFplyVCR%2BDoGKhSq3xZDQWKok03jhKFcJvMPWU1MQGOqUBbfbUcIwp7fA79dl2f6J4k1iu3Cvge1%2BxlAT1cxM068v5hYxSX4CHdng6HrzapzBpN9HiSu1IwpoaxHryz6nz5nAJxR138aDY9Y74ZLfBlbuMsB6Ek54%2Be5vZRbUqNcrdUKcbKLJQHOIIQYViq3484NCef2Mbr1ngYqImYf3GhudYvzScMq2NLRpB%2BNohmC0HwqSNP3AFkHjTMl%2B%2BftsA2JJxahDV&X-Amz-Signature=10a496a1667198487f27f80bafe59143f3583e44b08d7634613715232e7f422a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
