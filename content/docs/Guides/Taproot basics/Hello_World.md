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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JUW5MW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0GPBtEAtaAc9fHeiXnJDvZ5Ej59eWXu89xnAZ5JmA%2BAIgUNcrsdkwP8%2BJiRF2%2F4OyEIjX2YZHsE36U1b1VuFLKmEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDSAJ5JDQnZj9gijCrcA9g5WOcs%2BOqvTpsjKKSwBPbnXCjF%2BKAEOxkt%2FJB8oLijBXLpZ4iwc4%2Bm31RUUWpU9H92l0pXNpwgvBO1Sv90bcAB3%2BkCffaGZbfa4YYFdW1Q%2FX%2FYIfjqdG7TBa%2FFJy0CfkbGN9rP8VhdJvpqfHKxwjoqn%2FMfBILRTVZKNWXhjwmbECPZo%2FxOGJDIrtSZfcQQMQf8IInsdtMMPqDwmklcowg2gJ18xzdLn0YgC2foPqIT7QMXxhMVkV7IQRHQXoWuhrJE38nPRY7FR60q6ED0Fo2Qpb5vn1L3P52csl9Of2xjqEqJGps92SlnH0%2B2MgWq9LZ9aIxyKce1WIqK6RArBld8mQ%2BVpuQwpMrEDjxpxPPDilKm0faNuZa3sDoH3kj2HCZ4Zsxii2O1CJHnQZTmPF4K7LMn3GjxHi1GbcUEt7uylEwDbyc1h1EoLO2usY1VA6ADV9vf%2FlwhIKY%2Focgh5KqYmRjoD95wyAxCSb7P%2FOLdmShsedYdy5iAkx1pCPSUZ39tiuAO1n3fGv%2FKyE8VVNQ%2FACrGz5l4ySZHv2ktsaUhpMO5mvtNSsBh9YZnnuc%2FBt8wIULYYKAm1WInQGogX0zlNf%2FuXcqHzsi5JCWM2XOmBnehNqXRBXrcoGYlMOWl97wGOqUB0GrcJwIOYaCfIwIU3C3uucU06f4Uds1qUV65la4QlBL4duLy0G1ZzWHwuPpCaH8q5dq1eNintURtmcNgYdUG9%2B5Ohe%2BHFL8AifYD0crCoEDG2v%2BgzNyU0Cw607PfYgcBMW%2BvTk3RkAuW0VXysr3het4QO%2F6%2BmUWwurGSnxV3EyQUYfSjsueF5sgSZ6LhllTsk9fw0B7NpIfqPOpKHOJq0%2B2ciBmc&X-Amz-Signature=6e3bd584a9276ce377c39fcd9984f5a168502e09e92763598b37226754e3d00f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JUW5MW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0GPBtEAtaAc9fHeiXnJDvZ5Ej59eWXu89xnAZ5JmA%2BAIgUNcrsdkwP8%2BJiRF2%2F4OyEIjX2YZHsE36U1b1VuFLKmEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDSAJ5JDQnZj9gijCrcA9g5WOcs%2BOqvTpsjKKSwBPbnXCjF%2BKAEOxkt%2FJB8oLijBXLpZ4iwc4%2Bm31RUUWpU9H92l0pXNpwgvBO1Sv90bcAB3%2BkCffaGZbfa4YYFdW1Q%2FX%2FYIfjqdG7TBa%2FFJy0CfkbGN9rP8VhdJvpqfHKxwjoqn%2FMfBILRTVZKNWXhjwmbECPZo%2FxOGJDIrtSZfcQQMQf8IInsdtMMPqDwmklcowg2gJ18xzdLn0YgC2foPqIT7QMXxhMVkV7IQRHQXoWuhrJE38nPRY7FR60q6ED0Fo2Qpb5vn1L3P52csl9Of2xjqEqJGps92SlnH0%2B2MgWq9LZ9aIxyKce1WIqK6RArBld8mQ%2BVpuQwpMrEDjxpxPPDilKm0faNuZa3sDoH3kj2HCZ4Zsxii2O1CJHnQZTmPF4K7LMn3GjxHi1GbcUEt7uylEwDbyc1h1EoLO2usY1VA6ADV9vf%2FlwhIKY%2Focgh5KqYmRjoD95wyAxCSb7P%2FOLdmShsedYdy5iAkx1pCPSUZ39tiuAO1n3fGv%2FKyE8VVNQ%2FACrGz5l4ySZHv2ktsaUhpMO5mvtNSsBh9YZnnuc%2FBt8wIULYYKAm1WInQGogX0zlNf%2FuXcqHzsi5JCWM2XOmBnehNqXRBXrcoGYlMOWl97wGOqUB0GrcJwIOYaCfIwIU3C3uucU06f4Uds1qUV65la4QlBL4duLy0G1ZzWHwuPpCaH8q5dq1eNintURtmcNgYdUG9%2B5Ohe%2BHFL8AifYD0crCoEDG2v%2BgzNyU0Cw607PfYgcBMW%2BvTk3RkAuW0VXysr3het4QO%2F6%2BmUWwurGSnxV3EyQUYfSjsueF5sgSZ6LhllTsk9fw0B7NpIfqPOpKHOJq0%2B2ciBmc&X-Amz-Signature=2f526ff25114d493ef5f3a13691dbaacb40a36ef2962eb077030f64a0ac36edf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
