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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XE3PVK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCVp5evCUivCkzx9YPJvaQJMjLVYYQrztg8LP8nzDF%2FKwIgYchCKNJ116IndGIzD4TwPzzArMRYsf6BYpJwqW4gJ3UqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwTqVaj5RWpSrD3cSrcA83nsRXD2KLKoz5b43bd6xXP2S%2BNmWCkOOm8VMJWu5kBV6JI4LAcMoD9Iue9K7XjwPQq3CRLTK%2F50wFfxpWg9oMicd5z7buuoHfrO7QzsXie1lwzu%2F4XOm3Bj7Q45FlTq9fN6xzQpeNwpK2S1AAbOyuFSpmgno96FWusHrxwG6JJYU%2BysItoxlISjT4S4rRy3cK9Xwu%2F6tWh87ppTtiva5r6nIdIwKVuev2MT01DW1FeXEmo6VJtNYbNXxfNPGWUz90XZcTS6NYaByYvrAU4TkiznnBlt3At3%2Fhb%2Fe1qFkpg8gGBwIt5%2BC%2Fft0wwfH4RrfpSumDJKmxdCC3%2BogZQ7ZQ8mtFEJtf5t%2BBQ8ZuJnRsYdAXM8u%2BqVZQsZybf01kGGs1yz9%2Bi%2BlGOWlirAlwYl7aTtjCFSNVhXmwHxF%2FBKzAxl6TwQrxNNQZPPvtOg9gYebWuhqGkkB5HlM89D6mdXbzMQwp5vDm7G55ohPiHVRacpNNkIHu7QXRlA6F1FDzS%2FiXKmZOFCl7iG%2BDHr5uqV4GlSBgW%2Bg7VqagV5lD1vvOPJFQBnN3Cg8%2BVy3FWWtkEtj%2BkA2VB5X2qqg81atrV2HewHSFY46a12PV4sOHIybOjgVGMEX0m1knC6N3xMO%2FE1b0GOqUBcaPSZFMZegkQDJMTY44Qt76pj0MEDZk545tsz5cCTxibVdqpGUK0%2F4O2mjPK%2B78agwmLgknNyLfDZMjU21EmnfdfAfzwBcE2MGLwkFxhVUECrp7jbkHDWt7YVVwMBy3nIqxXbePcvjbaEK6ezZ3lgRH%2BK8R5QsDNVIYBjHEjSaK5c9pTff%2BWmEA4UHXTF7d8cgtoZau05UwDBPtjQvwbtCYs%2FPCd&X-Amz-Signature=a27b89274cf058df89ac9f0e5e322b4f2f3882ff075e5b008c29fb68e3361af2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XE3PVK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCVp5evCUivCkzx9YPJvaQJMjLVYYQrztg8LP8nzDF%2FKwIgYchCKNJ116IndGIzD4TwPzzArMRYsf6BYpJwqW4gJ3UqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwTqVaj5RWpSrD3cSrcA83nsRXD2KLKoz5b43bd6xXP2S%2BNmWCkOOm8VMJWu5kBV6JI4LAcMoD9Iue9K7XjwPQq3CRLTK%2F50wFfxpWg9oMicd5z7buuoHfrO7QzsXie1lwzu%2F4XOm3Bj7Q45FlTq9fN6xzQpeNwpK2S1AAbOyuFSpmgno96FWusHrxwG6JJYU%2BysItoxlISjT4S4rRy3cK9Xwu%2F6tWh87ppTtiva5r6nIdIwKVuev2MT01DW1FeXEmo6VJtNYbNXxfNPGWUz90XZcTS6NYaByYvrAU4TkiznnBlt3At3%2Fhb%2Fe1qFkpg8gGBwIt5%2BC%2Fft0wwfH4RrfpSumDJKmxdCC3%2BogZQ7ZQ8mtFEJtf5t%2BBQ8ZuJnRsYdAXM8u%2BqVZQsZybf01kGGs1yz9%2Bi%2BlGOWlirAlwYl7aTtjCFSNVhXmwHxF%2FBKzAxl6TwQrxNNQZPPvtOg9gYebWuhqGkkB5HlM89D6mdXbzMQwp5vDm7G55ohPiHVRacpNNkIHu7QXRlA6F1FDzS%2FiXKmZOFCl7iG%2BDHr5uqV4GlSBgW%2Bg7VqagV5lD1vvOPJFQBnN3Cg8%2BVy3FWWtkEtj%2BkA2VB5X2qqg81atrV2HewHSFY46a12PV4sOHIybOjgVGMEX0m1knC6N3xMO%2FE1b0GOqUBcaPSZFMZegkQDJMTY44Qt76pj0MEDZk545tsz5cCTxibVdqpGUK0%2F4O2mjPK%2B78agwmLgknNyLfDZMjU21EmnfdfAfzwBcE2MGLwkFxhVUECrp7jbkHDWt7YVVwMBy3nIqxXbePcvjbaEK6ezZ3lgRH%2BK8R5QsDNVIYBjHEjSaK5c9pTff%2BWmEA4UHXTF7d8cgtoZau05UwDBPtjQvwbtCYs%2FPCd&X-Amz-Signature=8e3dab767e39757b964a80c0d9f2ec8e22650dc876d27257d6d56e885fde552c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
