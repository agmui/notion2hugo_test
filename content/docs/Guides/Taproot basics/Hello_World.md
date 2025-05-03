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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPL7SV74%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCe2BHze5zQO34jM4epJXvDnJXTi%2BkR7XUk8mDJOm16ewIhAJFsMYrYOSqhc91MeBqsPHk3Oxs5PKQH1dGrWNE2I9EEKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFAf6cXx%2FzjXgyK4Qq3AOztihEvObPkg5MPp8YvohbcKu4ytdXGgC6hFFFdHzNWN1PutvYtNkoQc4H5qMPcKfHXhlWW%2F%2FctpOOzmrdxjeWI%2FR5aoshkQOkKH2ZDK6DNr2KxvxXxt8qIzsXPnpC%2FEMV7w3ilq0kdQaMTI7LPBvxd97RwpUGznvI5BqPEqEJX0AhPWfCjqDXU9esQUJX86F6Mr40%2BqQg1ADMDa7wUFKG08FWGxTuqvEAYLGxvaoE2ez%2BlDEXUIDffnBwg9gSy5ECB%2B5hxgQXfKldzcarTZEgw1J9fogq%2BBt1FUcs2yCDy5iN4knQ%2B8YRunPKQFXWtL17Yj9N5Dpi74Rz7q4L0En63Hpb4vKau3ObJa6jzyOz3Lx1lPmh87s7KqfrPeuTB9b2hbIw8dZ5d0UDSfxbRYyAiwg2gDOXHbFD51MsaYNGJ0xp1umTrOqOGmm%2Fdwz6GIM5IrFtP3iK3mUV0zELdPISZb1PyEo2VvnD4Rlf8FRuGX0M%2F8yja5L9OkMl3g%2FUzE5PcT1ISkGBaPOQwp251N0QXFaS9%2BkDvHDJnbvk3oLtSeoVyi1GCDogsir8ZgdAftu%2Ffu6qJv%2FeqPBjfZSZnTYav48fgOd1mzPPxwTZ%2Bkoxz1fZ%2F1%2B%2BcmIiAyUNfTC%2B3tfABjqkAbv20VJYNtjhwFf1ZMIVUhw7Qzoo9N%2Fw0Qv0JQZ%2BWJZ0aoY%2BhIvz1ewS6huERi4yvYeKVRUv%2F9NB81h%2FiKDv5xnIkrOVR0yJ35Y4PzXP9Yjl4UQhvwWWZmUS3lwZ25otEY%2BRKVh%2BuWhYnPRXgiggDWgTyRdMzIg6jH5mio6mkzCe8lAY%2FSMzcGf3lxJakDp7SrAdzWnpsOIBsfPHszm%2BnUwP9X5K&X-Amz-Signature=629d69f8e4d80b3c45fa08cfbdda5025b1d3a86aa994bbf89667ba615cdbef7d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPL7SV74%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCe2BHze5zQO34jM4epJXvDnJXTi%2BkR7XUk8mDJOm16ewIhAJFsMYrYOSqhc91MeBqsPHk3Oxs5PKQH1dGrWNE2I9EEKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFAf6cXx%2FzjXgyK4Qq3AOztihEvObPkg5MPp8YvohbcKu4ytdXGgC6hFFFdHzNWN1PutvYtNkoQc4H5qMPcKfHXhlWW%2F%2FctpOOzmrdxjeWI%2FR5aoshkQOkKH2ZDK6DNr2KxvxXxt8qIzsXPnpC%2FEMV7w3ilq0kdQaMTI7LPBvxd97RwpUGznvI5BqPEqEJX0AhPWfCjqDXU9esQUJX86F6Mr40%2BqQg1ADMDa7wUFKG08FWGxTuqvEAYLGxvaoE2ez%2BlDEXUIDffnBwg9gSy5ECB%2B5hxgQXfKldzcarTZEgw1J9fogq%2BBt1FUcs2yCDy5iN4knQ%2B8YRunPKQFXWtL17Yj9N5Dpi74Rz7q4L0En63Hpb4vKau3ObJa6jzyOz3Lx1lPmh87s7KqfrPeuTB9b2hbIw8dZ5d0UDSfxbRYyAiwg2gDOXHbFD51MsaYNGJ0xp1umTrOqOGmm%2Fdwz6GIM5IrFtP3iK3mUV0zELdPISZb1PyEo2VvnD4Rlf8FRuGX0M%2F8yja5L9OkMl3g%2FUzE5PcT1ISkGBaPOQwp251N0QXFaS9%2BkDvHDJnbvk3oLtSeoVyi1GCDogsir8ZgdAftu%2Ffu6qJv%2FeqPBjfZSZnTYav48fgOd1mzPPxwTZ%2Bkoxz1fZ%2F1%2B%2BcmIiAyUNfTC%2B3tfABjqkAbv20VJYNtjhwFf1ZMIVUhw7Qzoo9N%2Fw0Qv0JQZ%2BWJZ0aoY%2BhIvz1ewS6huERi4yvYeKVRUv%2F9NB81h%2FiKDv5xnIkrOVR0yJ35Y4PzXP9Yjl4UQhvwWWZmUS3lwZ25otEY%2BRKVh%2BuWhYnPRXgiggDWgTyRdMzIg6jH5mio6mkzCe8lAY%2FSMzcGf3lxJakDp7SrAdzWnpsOIBsfPHszm%2BnUwP9X5K&X-Amz-Signature=8fe8be3ffdcaa462345bc050ffde0a221c4257ee2455631221ed5a2322ef57a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
