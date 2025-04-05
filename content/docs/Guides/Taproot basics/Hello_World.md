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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECJJ6QE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVToluwVgBQOhAAKG6cimUk%2F1fIjOW9gNZJXVB5EeJYgIhAN2J4lWlMIuGSvZOxLfwujMFokYVg%2BV%2FYjzVwM3nFWvcKv8DCDEQABoMNjM3NDIzMTgzODA1Igxzu0dqbDPHayGq1CIq3AM6zTtxbmQgcp%2FdtRzcO2SOr7e0mzueF7KYvc4C0XPod%2FFIpKYudnQJ1cTnVj9lyihr2iuvtgYsUQTvVoXsSlbJ3HAnOoZGvlPxCjpXR21qM7xu8nC%2FjyNiZATiJPMsuNmKQlJBbU8zmvffpfFESFNCfzXMpRnqmMBJSGqxJRYFxQT7KK2j4t1XRphENROkECsG5p40B0q7e0wPlJh7V64Y3btFZCe3WpGyDRm1%2FC9586qzjVWAQHNMOMcWQ6Drkg%2BzpcGscQOO7TecmHJqYcECxNGjBr2mvqQEmHQYicDWkeNK60qI84gfSOA%2FkBAl8GVsmtukIzfGizkN6GFhjKL4ySBfTmKGxhZMnxYbRo3hocsOqie1nKDx2e03Xhl741ogDwfkHC5AWT8afRiAc6cLd33lIhebT%2Fkk07Z%2BE9pA00rGOaWySoqD8AE928dM7kmztXjZwtdQZiXGSW9GsiID%2Bncvl1LuPCmw4rjd49ms3%2Bd6gYr4FC0OJCz1uKjbMJBxVXxAY%2Bd7DTnx8pFdyRjc4h5u3B0p3CZB1bOGZFHha2U%2BIVlbqh0G0%2F%2F3FMvBp2dn2KChbyc9Fz4nivYunRztqQRl6rlG2TI0IxH4CiyVMS8GB%2FK9oODU9EvMlTCnpcW%2FBjqkAYuQ9THPwUsGyeJB2h91rbDGsNpKA4Y2QY%2FduKCHUzta7LXQqMj0uCA5J5mVfskqRJCzHfhqzENjR6ubamzEpnz2UKBPWRM7am5C3LRfr9k0WTM9Mk8mQFi5CAeDWFTPJ2nO6%2FHn%2FTdLjOJSQg%2B65FqBu1Y2Mv9Axe5FRI4BU2l%2FYfgDKks40V3L6XxiJ%2BziGVauxedyRJjrd%2F%2Bizm5oGv4J6ODk&X-Amz-Signature=d4abdd5b9de7cd9e7bbe6d3e14f86f5c5b8bc7d19f386bf8982acdc5c9d3f56a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECJJ6QE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVToluwVgBQOhAAKG6cimUk%2F1fIjOW9gNZJXVB5EeJYgIhAN2J4lWlMIuGSvZOxLfwujMFokYVg%2BV%2FYjzVwM3nFWvcKv8DCDEQABoMNjM3NDIzMTgzODA1Igxzu0dqbDPHayGq1CIq3AM6zTtxbmQgcp%2FdtRzcO2SOr7e0mzueF7KYvc4C0XPod%2FFIpKYudnQJ1cTnVj9lyihr2iuvtgYsUQTvVoXsSlbJ3HAnOoZGvlPxCjpXR21qM7xu8nC%2FjyNiZATiJPMsuNmKQlJBbU8zmvffpfFESFNCfzXMpRnqmMBJSGqxJRYFxQT7KK2j4t1XRphENROkECsG5p40B0q7e0wPlJh7V64Y3btFZCe3WpGyDRm1%2FC9586qzjVWAQHNMOMcWQ6Drkg%2BzpcGscQOO7TecmHJqYcECxNGjBr2mvqQEmHQYicDWkeNK60qI84gfSOA%2FkBAl8GVsmtukIzfGizkN6GFhjKL4ySBfTmKGxhZMnxYbRo3hocsOqie1nKDx2e03Xhl741ogDwfkHC5AWT8afRiAc6cLd33lIhebT%2Fkk07Z%2BE9pA00rGOaWySoqD8AE928dM7kmztXjZwtdQZiXGSW9GsiID%2Bncvl1LuPCmw4rjd49ms3%2Bd6gYr4FC0OJCz1uKjbMJBxVXxAY%2Bd7DTnx8pFdyRjc4h5u3B0p3CZB1bOGZFHha2U%2BIVlbqh0G0%2F%2F3FMvBp2dn2KChbyc9Fz4nivYunRztqQRl6rlG2TI0IxH4CiyVMS8GB%2FK9oODU9EvMlTCnpcW%2FBjqkAYuQ9THPwUsGyeJB2h91rbDGsNpKA4Y2QY%2FduKCHUzta7LXQqMj0uCA5J5mVfskqRJCzHfhqzENjR6ubamzEpnz2UKBPWRM7am5C3LRfr9k0WTM9Mk8mQFi5CAeDWFTPJ2nO6%2FHn%2FTdLjOJSQg%2B65FqBu1Y2Mv9Axe5FRI4BU2l%2FYfgDKks40V3L6XxiJ%2BziGVauxedyRJjrd%2F%2Bizm5oGv4J6ODk&X-Amz-Signature=431622d0e7c608431eefa02caba2bdac13e2e1520bee3e6b4c22f57a7271a0bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
