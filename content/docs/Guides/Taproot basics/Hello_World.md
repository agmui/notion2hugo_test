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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URPOT2X%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDCMRNVx8qUjiafHbTgQ5L8AocJPwOz%2Fhka9SlRwGtNwQIhAJTzGk6XxV9eLjT7%2BnxiTyR3Gm%2FKJOeWDOB89mBmdlKfKv8DCHoQABoMNjM3NDIzMTgzODA1IgxhMPvn9TcVoHnelVwq3AMHGT6CgQXLtl%2BjhYhZeC51RezUk54GlPxkpO5Tx%2FF3vjPIH5cDFec5eSyQqAPGlnZN406kCW6DyBzgJMqm9nXLl5w05pNZ5q4u4AtE7rMj%2BnFcRGCl2RIb53cwQwXiOlrTZgDNbTc8AW4zfNmDGuh2ldWn45x0M%2B72xOPzod1R8LQ%2BouTJrQf3BDsy2tdW7oCTY9BiduF4mtZBlASZuEelgl1bRSDzlgA%2BoYZByfqL6rb0Q29SHzQxxGhv9offP4FnNh58IIbSQAFpu8XzGqIJq%2BbTeDRyHuebf2%2F2F%2B8G7726fxrhD8fueAu2%2FPWTKPOQyS9qHn3Rhbu9AlOAv1hSInxInmJF5l9xot09ArKOk4304MnSoU5LTdv5M2RpDYe0etDHEFMzy9aH%2BzK7OxeHIcql%2FIjMyFzjK8EakMmy7i2PKdli%2FiD9qaU7sLEo487O84sdam%2B3rrkZqGhlZ5Wu68kWRJyCAPzX4SKdGwBvKPaAQA5BOvG6AXJgBdxGPLIE4kApVze6V60SHh3lYNUufmPzcYuvs7P%2BoxxQpGRZk%2FWB5GRyZ51RS7YeqE2T5Yg9WY0wzLeYo55FFPqGU4dSNoty7nOjQcMDrRidoLfrfhR9AhrdRt0HktjFHTCV%2FZi9BjqkAU6WbO%2F3pkL18lQ%2BTeFkbKY1urvkX2fZItwcH2o62UhbehkhLJ7NIfC9sMLT8HUW6n26UBzLnCXQFQfYlDgMoRRy3hmPfJj%2B19d%2F9mmbdGzNIMOd4rc7IykHreTg6NyascYB3DSerHqf5La52OK%2BCwE0TjC11AP5cBSsbrVHJV4iiBOfH1AdVpSAEF7XEUglSZibvC6Gy8BW750opCgWU2jDiNmS&X-Amz-Signature=042c9f9068abb5a3532a16b382896a9c41b5e391c72562add4e7486b2fe526db&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URPOT2X%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDCMRNVx8qUjiafHbTgQ5L8AocJPwOz%2Fhka9SlRwGtNwQIhAJTzGk6XxV9eLjT7%2BnxiTyR3Gm%2FKJOeWDOB89mBmdlKfKv8DCHoQABoMNjM3NDIzMTgzODA1IgxhMPvn9TcVoHnelVwq3AMHGT6CgQXLtl%2BjhYhZeC51RezUk54GlPxkpO5Tx%2FF3vjPIH5cDFec5eSyQqAPGlnZN406kCW6DyBzgJMqm9nXLl5w05pNZ5q4u4AtE7rMj%2BnFcRGCl2RIb53cwQwXiOlrTZgDNbTc8AW4zfNmDGuh2ldWn45x0M%2B72xOPzod1R8LQ%2BouTJrQf3BDsy2tdW7oCTY9BiduF4mtZBlASZuEelgl1bRSDzlgA%2BoYZByfqL6rb0Q29SHzQxxGhv9offP4FnNh58IIbSQAFpu8XzGqIJq%2BbTeDRyHuebf2%2F2F%2B8G7726fxrhD8fueAu2%2FPWTKPOQyS9qHn3Rhbu9AlOAv1hSInxInmJF5l9xot09ArKOk4304MnSoU5LTdv5M2RpDYe0etDHEFMzy9aH%2BzK7OxeHIcql%2FIjMyFzjK8EakMmy7i2PKdli%2FiD9qaU7sLEo487O84sdam%2B3rrkZqGhlZ5Wu68kWRJyCAPzX4SKdGwBvKPaAQA5BOvG6AXJgBdxGPLIE4kApVze6V60SHh3lYNUufmPzcYuvs7P%2BoxxQpGRZk%2FWB5GRyZ51RS7YeqE2T5Yg9WY0wzLeYo55FFPqGU4dSNoty7nOjQcMDrRidoLfrfhR9AhrdRt0HktjFHTCV%2FZi9BjqkAU6WbO%2F3pkL18lQ%2BTeFkbKY1urvkX2fZItwcH2o62UhbehkhLJ7NIfC9sMLT8HUW6n26UBzLnCXQFQfYlDgMoRRy3hmPfJj%2B19d%2F9mmbdGzNIMOd4rc7IykHreTg6NyascYB3DSerHqf5La52OK%2BCwE0TjC11AP5cBSsbrVHJV4iiBOfH1AdVpSAEF7XEUglSZibvC6Gy8BW750opCgWU2jDiNmS&X-Amz-Signature=5e8ab8a6da11d4769362dc401f39a284ec656aec6f27e4fc968d16079fed5eea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
