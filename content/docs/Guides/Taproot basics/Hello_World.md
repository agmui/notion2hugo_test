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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6DBZ3Z%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb%2FHuZUbZlE2SUao6wj3xLC3AZ6d0LZQTj82IeUCSVLAiEAupMLSioQkgFZVPcD8jbCZ%2FQqTbSxpudFuEM8ZICH9f4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKsiblWrX%2B04ojRcircA88jrOFc4EZC8q1xFC%2BSiLdmT3tn5ho%2Fko%2Bh6WHeZzDgpsptFAHuxiB3MqBde8tOrJ3yTOfrLSBsibWplWmLcrW9ZegAgRBvAePdJJ%2Fj5qUIbo32Q97WfF8H08B8OnJAZmOeJ%2BBw0Qd7nO%2FCjzNuk1Ft8IT43%2FA4h1dj1Z4GZ5ZxmlV6E7QY0SYnYb7npY68BxytZnl7O1xpbj1GDoqfNerxNlies44FTUU%2BtEAlGtmcTenfP3ddChechEh7NI%2FD1aTuwZWUBta7iBoRAG3PJR%2FI0RzvDV4f%2FGTIhayabKLPhSRoA%2FGJyfpy31LI%2B88nXS9t6OnH7qKxH%2BIKiTX90AZeghZAPDo1zB4ihQIwIfbdtwslim1fcPi1XLojviOxpQagKxj5ffIYxWNeu6aOozvnwp0GRUXyABQQsY%2FKf%2BX7mqaFyXRQrNb3tBY0a6eWa6d2pJgx%2FNVGis4WbDme6PxYeM2xHrPgbe0DgAubL9hJKZPumcPu8SZBpGaajsFYwn7hHAScJa%2FLvdEsh2e1OkMhrbzeXrL5ystebhj13HvujXPpJI9%2BWQWLW9pj1s7cFTftUBGW0XR4Pxa2uVYPIeEDigdWab2l7giP9hCNliU0IcOFYolaG2%2FzddrCMJW1xsMGOqUBpnjrTRwbGTvOEzKRLmvPb9BRCjk%2BTaYPIxmXrRALga%2FonbO3xgyqIDWvXxI7Clc0JC7sGGIPcAGM9cacx3i5VjKLP4X7y7rZKaj93Dv1JFVd2bJSd%2F5tYe1%2FrwbWB3Pzg5m%2F8IthboAATcdpyw6exYFUSNI1wBKm1k7T3rHSgtfXsbYCt1tHucgVgE93dtSPg2iBlCXA9embQaGvB%2BaQzg0%2FnUGS&X-Amz-Signature=6c681e83baa1b7505517d2432eec25552c090315e01c858bcd1dbf85edea53f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6DBZ3Z%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb%2FHuZUbZlE2SUao6wj3xLC3AZ6d0LZQTj82IeUCSVLAiEAupMLSioQkgFZVPcD8jbCZ%2FQqTbSxpudFuEM8ZICH9f4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKsiblWrX%2B04ojRcircA88jrOFc4EZC8q1xFC%2BSiLdmT3tn5ho%2Fko%2Bh6WHeZzDgpsptFAHuxiB3MqBde8tOrJ3yTOfrLSBsibWplWmLcrW9ZegAgRBvAePdJJ%2Fj5qUIbo32Q97WfF8H08B8OnJAZmOeJ%2BBw0Qd7nO%2FCjzNuk1Ft8IT43%2FA4h1dj1Z4GZ5ZxmlV6E7QY0SYnYb7npY68BxytZnl7O1xpbj1GDoqfNerxNlies44FTUU%2BtEAlGtmcTenfP3ddChechEh7NI%2FD1aTuwZWUBta7iBoRAG3PJR%2FI0RzvDV4f%2FGTIhayabKLPhSRoA%2FGJyfpy31LI%2B88nXS9t6OnH7qKxH%2BIKiTX90AZeghZAPDo1zB4ihQIwIfbdtwslim1fcPi1XLojviOxpQagKxj5ffIYxWNeu6aOozvnwp0GRUXyABQQsY%2FKf%2BX7mqaFyXRQrNb3tBY0a6eWa6d2pJgx%2FNVGis4WbDme6PxYeM2xHrPgbe0DgAubL9hJKZPumcPu8SZBpGaajsFYwn7hHAScJa%2FLvdEsh2e1OkMhrbzeXrL5ystebhj13HvujXPpJI9%2BWQWLW9pj1s7cFTftUBGW0XR4Pxa2uVYPIeEDigdWab2l7giP9hCNliU0IcOFYolaG2%2FzddrCMJW1xsMGOqUBpnjrTRwbGTvOEzKRLmvPb9BRCjk%2BTaYPIxmXrRALga%2FonbO3xgyqIDWvXxI7Clc0JC7sGGIPcAGM9cacx3i5VjKLP4X7y7rZKaj93Dv1JFVd2bJSd%2F5tYe1%2FrwbWB3Pzg5m%2F8IthboAATcdpyw6exYFUSNI1wBKm1k7T3rHSgtfXsbYCt1tHucgVgE93dtSPg2iBlCXA9embQaGvB%2BaQzg0%2FnUGS&X-Amz-Signature=e917b00a6b9385b8ea4a1257b0730d01c8c08dc83cb4c6eb0c2c4ff1bff71ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
