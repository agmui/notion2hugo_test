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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJFCOLJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy9FUd%2Fno2CiDyoEagM00Zt6jXL9upmEpbVkrifSoYyAiEAjuHiTi%2B76Y1Tp9CQ2K23Z%2BeoWXPIRk6VPMTdghtUu58q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDErzh8ZMYIm1CsWv0CrcA3bYPIPQgua%2B0AWEEPY55MHsnKRXkVsQGczVrgF3ULK1lW4yirTpxrSty0gJ9LbVMIZ%2BfsVo1NITETR15a%2Bnppyihr1H68%2FQz2oKrr6q9m4sMbhcbjBguYUd2ZZ14VPpr9CDWpc%2F%2Fj46OIAtitwCL%2Bp2Blx%2BgHZcJ2kfKmBXWXab5W%2FGywwOAoYkCviCmOIPUAxq1U8a6A4FomnrIixtf1ALz1BwePkrxfhRQcyk8W14reeobDL1wGY0aeH30B0jjE5ONE%2FXY5YqntOYQTb8YPT%2Fu2Q9fYEn4LpIEAlrTdRJkrZ0c9%2FnEBYA4nvxGGKLVC6Z8Dts4W0BVQKrYkgKkwQq29ig920NS4pp0PrZJzg%2B7h0unlk53vXFcInZ7o7lzQHNLL%2F7iiexqlND%2BJeChSQO6QJ3k7AC%2B56h%2BsNCqLvBkLef%2FKHLkzv%2Fb%2BOMfakxneYnNyf9A5EoMox04lJRiY5vtEiyNymag5L94RIdCtsxrWQiwCUNQxwjyGFAC%2FFTfPb7Op5xzPBqDbfDOzBzLgYDqoNOqSi87mjZTdUVVo%2FyqXqmdH1wmxtpfy0znPOtmIC1EohrEyNJn8DMYXCQ6zeM%2FZji3eZdiww34OCFWp6%2BKBzLgyQu3veNnxOZMNSCrcAGOqUBQGrdgHS9x2Y9oAGG%2FmDVG60WFzJe%2Fs7cSuo4ypPgZ3c3ZhDmcHfjhOVXd6YbMJjjmKwRbEZEmEDanKT4DA0hSu4BOSFHvQ3su1dovSsijpvOHumO6DGfqmxqwUC2ehFOV7fuGFcUSAMGLsWh%2FC85YlUUK9u%2Bec92cJ8yvoUeHGXOSCNHed026SKyDR%2BKQJBvxrlxPgInp6Uj3F8LzwaJg%2BIfK5Fo&X-Amz-Signature=9dc5f281db483545c929979c71d684e9be1e6a2b47129d3daf598131bcea1c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJFCOLJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy9FUd%2Fno2CiDyoEagM00Zt6jXL9upmEpbVkrifSoYyAiEAjuHiTi%2B76Y1Tp9CQ2K23Z%2BeoWXPIRk6VPMTdghtUu58q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDErzh8ZMYIm1CsWv0CrcA3bYPIPQgua%2B0AWEEPY55MHsnKRXkVsQGczVrgF3ULK1lW4yirTpxrSty0gJ9LbVMIZ%2BfsVo1NITETR15a%2Bnppyihr1H68%2FQz2oKrr6q9m4sMbhcbjBguYUd2ZZ14VPpr9CDWpc%2F%2Fj46OIAtitwCL%2Bp2Blx%2BgHZcJ2kfKmBXWXab5W%2FGywwOAoYkCviCmOIPUAxq1U8a6A4FomnrIixtf1ALz1BwePkrxfhRQcyk8W14reeobDL1wGY0aeH30B0jjE5ONE%2FXY5YqntOYQTb8YPT%2Fu2Q9fYEn4LpIEAlrTdRJkrZ0c9%2FnEBYA4nvxGGKLVC6Z8Dts4W0BVQKrYkgKkwQq29ig920NS4pp0PrZJzg%2B7h0unlk53vXFcInZ7o7lzQHNLL%2F7iiexqlND%2BJeChSQO6QJ3k7AC%2B56h%2BsNCqLvBkLef%2FKHLkzv%2Fb%2BOMfakxneYnNyf9A5EoMox04lJRiY5vtEiyNymag5L94RIdCtsxrWQiwCUNQxwjyGFAC%2FFTfPb7Op5xzPBqDbfDOzBzLgYDqoNOqSi87mjZTdUVVo%2FyqXqmdH1wmxtpfy0znPOtmIC1EohrEyNJn8DMYXCQ6zeM%2FZji3eZdiww34OCFWp6%2BKBzLgyQu3veNnxOZMNSCrcAGOqUBQGrdgHS9x2Y9oAGG%2FmDVG60WFzJe%2Fs7cSuo4ypPgZ3c3ZhDmcHfjhOVXd6YbMJjjmKwRbEZEmEDanKT4DA0hSu4BOSFHvQ3su1dovSsijpvOHumO6DGfqmxqwUC2ehFOV7fuGFcUSAMGLsWh%2FC85YlUUK9u%2Bec92cJ8yvoUeHGXOSCNHed026SKyDR%2BKQJBvxrlxPgInp6Uj3F8LzwaJg%2BIfK5Fo&X-Amz-Signature=1896d84f95ea5f2b6a2637afa29d4bc722fcbe3530936a333dea638284ada4ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
