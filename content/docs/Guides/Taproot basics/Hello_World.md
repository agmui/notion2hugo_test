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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJONKA6N%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAIh1RGiT1RLhRn1E5tcoV0LeIhYUee%2BiMFkdaUs0mRPAiEAvU%2BMIxPXwXnkC5Y0NM%2BmvDjuZB0lOHzHnr1uGle2MVYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKe%2Fe1WaDd1MN68pJCrcA9pepPj8zylzykRauncFsj%2BPQFmirNmi6FwODiqUnE3ULpMSue2%2Buq%2FNEICmET5m3boywPOSoaqiKAJKJhyV8kHme1%2F4E6vnp0RzaulGdy8JSi9%2BKZKahk%2BTi0%2FaIqigqVNMbz08G0BeJTAdxNj0vo235I7q4LgUPVBsrHs8wkFw7ArgPBP%2BFSfSRnQUlGJV5XDhWFUuekvAizxD0O69DiLqwW80NuI1x4BgBwqAgvJitUnmwoyGCsgvePhzRlSFetRrSHzlHwuuaxLltT8OD5%2BWneU6%2BXur1%2FUkLzA0Y%2BTzxXQmVsm8Hr5PJEOgCk00S%2BZN4cv5DI%2FsOB2UjkQeuTzg6QqmIkTWgKkDSZiuV%2F1O8WblhXnWPSldQhuDyIVMy7Rpjg3cnSBJhJsGjoVx26KWbp0kArVivyx1QzJHueA%2F6mi50q1CL%2FZBzQSz%2BU05x%2BUx3StVwdMRgARgCr5n%2B%2FSliN1t%2BJRVSnlrd%2BRYZcAizEBXjqsXNsZ%2FtZEVi8mIMzkWdedaqnzwEJJvdzbbcujRe5qMAyoHieJ2cxMfRzSEbcrxnSEKbVufmNPCMWw8t2QmFbdPhzQp1321eUWs%2F0sHgYb3VRkxR5YE4xrUGKCyrOTUy0U6SgLrQsHLMKzk8L4GOqUBuF54YxOFQyJvl8gCoiqzV24FI2hVqrEoMXTS0XKUq3dehEK51o9V1dUJRVyQgIcM1Emfctdqc8f3Z3sZGvw2Yq13ZwpXa80kzVfgct6nKsYrsh2LVx7jf0gBt2XewYapCf3XSQbK7Y%2B30ZaO5wId3%2FrOXiCo7%2FMxuSGkQexJC8vVal2f2iG4mTdG51mIdK7bkIFpib3dtYkUYA6XQPf1RNnAYtDo&X-Amz-Signature=4db37e3eddadf7bf0313324f26024c97a4967d4d294c2b5fcbb753801fa1e915&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJONKA6N%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAIh1RGiT1RLhRn1E5tcoV0LeIhYUee%2BiMFkdaUs0mRPAiEAvU%2BMIxPXwXnkC5Y0NM%2BmvDjuZB0lOHzHnr1uGle2MVYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKe%2Fe1WaDd1MN68pJCrcA9pepPj8zylzykRauncFsj%2BPQFmirNmi6FwODiqUnE3ULpMSue2%2Buq%2FNEICmET5m3boywPOSoaqiKAJKJhyV8kHme1%2F4E6vnp0RzaulGdy8JSi9%2BKZKahk%2BTi0%2FaIqigqVNMbz08G0BeJTAdxNj0vo235I7q4LgUPVBsrHs8wkFw7ArgPBP%2BFSfSRnQUlGJV5XDhWFUuekvAizxD0O69DiLqwW80NuI1x4BgBwqAgvJitUnmwoyGCsgvePhzRlSFetRrSHzlHwuuaxLltT8OD5%2BWneU6%2BXur1%2FUkLzA0Y%2BTzxXQmVsm8Hr5PJEOgCk00S%2BZN4cv5DI%2FsOB2UjkQeuTzg6QqmIkTWgKkDSZiuV%2F1O8WblhXnWPSldQhuDyIVMy7Rpjg3cnSBJhJsGjoVx26KWbp0kArVivyx1QzJHueA%2F6mi50q1CL%2FZBzQSz%2BU05x%2BUx3StVwdMRgARgCr5n%2B%2FSliN1t%2BJRVSnlrd%2BRYZcAizEBXjqsXNsZ%2FtZEVi8mIMzkWdedaqnzwEJJvdzbbcujRe5qMAyoHieJ2cxMfRzSEbcrxnSEKbVufmNPCMWw8t2QmFbdPhzQp1321eUWs%2F0sHgYb3VRkxR5YE4xrUGKCyrOTUy0U6SgLrQsHLMKzk8L4GOqUBuF54YxOFQyJvl8gCoiqzV24FI2hVqrEoMXTS0XKUq3dehEK51o9V1dUJRVyQgIcM1Emfctdqc8f3Z3sZGvw2Yq13ZwpXa80kzVfgct6nKsYrsh2LVx7jf0gBt2XewYapCf3XSQbK7Y%2B30ZaO5wId3%2FrOXiCo7%2FMxuSGkQexJC8vVal2f2iG4mTdG51mIdK7bkIFpib3dtYkUYA6XQPf1RNnAYtDo&X-Amz-Signature=6f4557ce4ab9f21069ffe1025e389cefd52df327ad2ac24d1be0357b81a247b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
