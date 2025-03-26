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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQQD4LM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWfi0m4qXRSVK%2FXhMSnOSPXnUQ3w8JL6ZWo%2BV46otdpwIgAYAxz0650NmTjbOkyCqbJldljNoqqWKpyA77hX27YWEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLHiskxscVMldk%2FPVyrcAxJuCV0si%2BbSyF7tUmrTvGehtY73cXP%2F9jaySqQu4Gpl%2BsnVBJGZZozYq5%2B42%2B9wei80pwJPkOxQFeVZz%2FJKK%2BxxX89RBhYL3Be8CgiEkZx6%2FGdImkRvsGyiL%2FcT%2BjE6gMmK6Oh02E1GHMQVd86wolu6sfEBNktESK7O1gG9s90EJb5PAhSB1GX2pz4MWkLua4vMKUu8pJLLIjfN1oZ%2FgD15DJDml9wSoYE9jJhcWQn9pQ9PswsVYeTgcR%2BHSY59Rui3%2Fjs0OAwUgthZ3X7yANr5zlwXtpa90nwEgcV4TJNl5fnAIWAtYFok0%2BEcLX1fZQvcopZPG8lYMMV7sZDpopTP4pN7aXNvtmwvop%2FSLiO4bDZ3zoZxA6x912daohIqRttibm6JUgb6p3cGj0uJ8cHRkAL7KEkYoNskEmvMhPvg9IlF1HIqrCqK%2BVhYlXHncP%2B4wXvynUSrFNoqTS9F6Ivsk%2F0uMi9OFp1I51NCWAm0wcwR6aM5C7h14w%2FbUHjq9rXaNmew6a31AjSOv%2F3Y6oIJYcJ8ASpVPhjqt1AXXU2M0p9oBvtIku%2FFKiDJ09QpgMW0KWP6JdRz8qAH8R2eRnH7biUSoe4Q1ucbgSqIQ7IV%2FHSg58u0yVH57OnsMPmUkb8GOqUBrrCsbEgcNRJJ6N7K7vSpWbQMDtmfK2RGlgxTC0rUA%2Bzspl5v7WTlzXMP5qnSaxexflWvYh%2FQ8XiDmaYGpxqZ5%2BNiTPipG5P2%2FxRd%2BCDAOJUFeuHJ5g49TueXJbiLCfm5n2T%2Ff3ob0h6rv7AvkWJI4s1vvCMbHwCKo%2FWXZj4vgSYVvl7Jvv1rZJ8u5qFkQz%2BF1htRkNLuHILOTf81Y1%2BNT%2BU%2Bf3ij&X-Amz-Signature=fcad7ddcad0edefed0aad8a14d0805107456843bbde90a417b4f733a19e2801a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQQD4LM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWfi0m4qXRSVK%2FXhMSnOSPXnUQ3w8JL6ZWo%2BV46otdpwIgAYAxz0650NmTjbOkyCqbJldljNoqqWKpyA77hX27YWEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLHiskxscVMldk%2FPVyrcAxJuCV0si%2BbSyF7tUmrTvGehtY73cXP%2F9jaySqQu4Gpl%2BsnVBJGZZozYq5%2B42%2B9wei80pwJPkOxQFeVZz%2FJKK%2BxxX89RBhYL3Be8CgiEkZx6%2FGdImkRvsGyiL%2FcT%2BjE6gMmK6Oh02E1GHMQVd86wolu6sfEBNktESK7O1gG9s90EJb5PAhSB1GX2pz4MWkLua4vMKUu8pJLLIjfN1oZ%2FgD15DJDml9wSoYE9jJhcWQn9pQ9PswsVYeTgcR%2BHSY59Rui3%2Fjs0OAwUgthZ3X7yANr5zlwXtpa90nwEgcV4TJNl5fnAIWAtYFok0%2BEcLX1fZQvcopZPG8lYMMV7sZDpopTP4pN7aXNvtmwvop%2FSLiO4bDZ3zoZxA6x912daohIqRttibm6JUgb6p3cGj0uJ8cHRkAL7KEkYoNskEmvMhPvg9IlF1HIqrCqK%2BVhYlXHncP%2B4wXvynUSrFNoqTS9F6Ivsk%2F0uMi9OFp1I51NCWAm0wcwR6aM5C7h14w%2FbUHjq9rXaNmew6a31AjSOv%2F3Y6oIJYcJ8ASpVPhjqt1AXXU2M0p9oBvtIku%2FFKiDJ09QpgMW0KWP6JdRz8qAH8R2eRnH7biUSoe4Q1ucbgSqIQ7IV%2FHSg58u0yVH57OnsMPmUkb8GOqUBrrCsbEgcNRJJ6N7K7vSpWbQMDtmfK2RGlgxTC0rUA%2Bzspl5v7WTlzXMP5qnSaxexflWvYh%2FQ8XiDmaYGpxqZ5%2BNiTPipG5P2%2FxRd%2BCDAOJUFeuHJ5g49TueXJbiLCfm5n2T%2Ff3ob0h6rv7AvkWJI4s1vvCMbHwCKo%2FWXZj4vgSYVvl7Jvv1rZJ8u5qFkQz%2BF1htRkNLuHILOTf81Y1%2BNT%2BU%2Bf3ij&X-Amz-Signature=21d31e3c8d4efd0dded5d53f60746a7e2fd0be488be364c015a73b89e0eb44cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
