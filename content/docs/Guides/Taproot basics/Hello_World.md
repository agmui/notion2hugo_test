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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVPTZ6U%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBlu9yl0IrzXPkmiswpQABxngEZOUQxJ%2Fg%2FbthoX%2FuycAiEAs%2BoK2Gh3lL8Qbt7gM3nv8X5WbEgmOAFs%2Fd%2BB7Bxd8Egq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAIH6xxKpdcTk3G4qSrcA8d%2BJ%2Bld%2BSf7e9QDXHPc3WsDuKGvuPbOj5qzLxOxzRgSZgivHWVIwXbjo%2F8FxF%2BDldRxhiqIInxK%2BrpIjZO2vhpNxFsxxPkffBZRQcJF5CeQ4T7kbk60rTn2%2BMJ6a5vCquMq8fU2OnaqpiCa%2B5QkYOI6ub3i0v4TE9S1Gim4tSYkN%2F43GKWzVX4UHwfHnW7mHuUlu%2BsQQVnU%2FLyOcCQkwTkES9n8wYRPapuUDU0k53%2Bw%2FJ0azY%2FaIoxmxqK6SkrVaB%2FlthRz27SKTVJM8poZ5PRaIczLRVmdcHV%2B61s9Q42HAwiOEMrZAUzW1%2F7P8ZJ7eRiyGOlbOx7NOHjlvww%2BOins8IiYnnZsz3vAfsY6HSE%2BwObUj9ow%2Bp8Z7wyhIPF2hcW4k4LX%2FeNaHuIT2rKxRUs3lafI76OmzE5WGUd8i6qyIeNhdlv0aozVOgG%2BRbA%2FsdoYCur18CjUwU88R8RAynLryLokc8pWXoRjM9VmYusyZJp4JqSf4ycRGinvWMcWr%2B7ai3SrdiGSGGhLKX3c7uGBJoIEkpuyzt6ebxfXslTIxeLFx2xSNFp1teXG931XrVi37WA4tHg6Dg3Rz3BJMO7F0B5YGkSxBnYrzeTe0G%2B%2FK1gF%2Fu1%2FjjEaQ2JtMMnUgsIGOqUBH0NTdwi0EAzsVOt7zt8raRNzlfsEVNhonInO8fR%2Fglv1Ylt%2FB8Hkw%2FyJbaRWMxXKDA1Pk4i40hY0WLvW30ZyjR%2FiOYY%2B3GY%2B74UMp%2FXqyy%2BtjJmukfQ0VX0YkdU5B%2FVS6q0I%2BpWJEpyU1M3N6URJEY8p7c%2BeW6CKQODcSqGG%2F%2FoBg0F%2FAiLASd%2BjSOmls3rG26WlxOyISoQPjbXuj0gfb9XFh%2FAi&X-Amz-Signature=693fe6f76870801adeaca467e74ea6c58653f35e23704bfa319baf58a72b05b3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVPTZ6U%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBlu9yl0IrzXPkmiswpQABxngEZOUQxJ%2Fg%2FbthoX%2FuycAiEAs%2BoK2Gh3lL8Qbt7gM3nv8X5WbEgmOAFs%2Fd%2BB7Bxd8Egq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAIH6xxKpdcTk3G4qSrcA8d%2BJ%2Bld%2BSf7e9QDXHPc3WsDuKGvuPbOj5qzLxOxzRgSZgivHWVIwXbjo%2F8FxF%2BDldRxhiqIInxK%2BrpIjZO2vhpNxFsxxPkffBZRQcJF5CeQ4T7kbk60rTn2%2BMJ6a5vCquMq8fU2OnaqpiCa%2B5QkYOI6ub3i0v4TE9S1Gim4tSYkN%2F43GKWzVX4UHwfHnW7mHuUlu%2BsQQVnU%2FLyOcCQkwTkES9n8wYRPapuUDU0k53%2Bw%2FJ0azY%2FaIoxmxqK6SkrVaB%2FlthRz27SKTVJM8poZ5PRaIczLRVmdcHV%2B61s9Q42HAwiOEMrZAUzW1%2F7P8ZJ7eRiyGOlbOx7NOHjlvww%2BOins8IiYnnZsz3vAfsY6HSE%2BwObUj9ow%2Bp8Z7wyhIPF2hcW4k4LX%2FeNaHuIT2rKxRUs3lafI76OmzE5WGUd8i6qyIeNhdlv0aozVOgG%2BRbA%2FsdoYCur18CjUwU88R8RAynLryLokc8pWXoRjM9VmYusyZJp4JqSf4ycRGinvWMcWr%2B7ai3SrdiGSGGhLKX3c7uGBJoIEkpuyzt6ebxfXslTIxeLFx2xSNFp1teXG931XrVi37WA4tHg6Dg3Rz3BJMO7F0B5YGkSxBnYrzeTe0G%2B%2FK1gF%2Fu1%2FjjEaQ2JtMMnUgsIGOqUBH0NTdwi0EAzsVOt7zt8raRNzlfsEVNhonInO8fR%2Fglv1Ylt%2FB8Hkw%2FyJbaRWMxXKDA1Pk4i40hY0WLvW30ZyjR%2FiOYY%2B3GY%2B74UMp%2FXqyy%2BtjJmukfQ0VX0YkdU5B%2FVS6q0I%2BpWJEpyU1M3N6URJEY8p7c%2BeW6CKQODcSqGG%2F%2FoBg0F%2FAiLASd%2BjSOmls3rG26WlxOyISoQPjbXuj0gfb9XFh%2FAi&X-Amz-Signature=6d5ddc5baffede6cf5893d369dbb54f7ba984fc98aa31569a199b7a281c6bbf7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
