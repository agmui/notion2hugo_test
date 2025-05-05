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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UUMNHQJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIfZGieX9Vdi6upd3ACy3ZnC5pGUaEpKFYUkDPyOc6NAIgV9Snozi3bj0hLo0TGYE9Ob8B20Jfqk%2FEVYuTgQLenU4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPwqysFkoUHmFRaDACrcA1JcPqMwR2g6FhSrhAt8isDiljkbJg95YMF%2BAApWSSf7kdwP%2FLKpPL1zA6TORbpnIsgU%2BsaWbvEpAs7gMzjFCZAZuxNRqa4QqePEIX1ffkiK3pOjqCfSKQOapwfd2f6uQtrRQtVh35bWLcPtGl7CvHipT1F%2FFEUR84YwHqK%2B%2Bp3s8dTc1%2BF5YaF%2BhGVe%2FZXw2ym2XgS4YzLBMV5fiBGNke2KvYIVy17a1SwwLe79hXQQtSccOWc2EIPoEBXnkcd%2FanV22dNG%2F4Lj%2BzbpvxDuXPLd3UhUdQj4sbvNL3dswC2NdEsWqoRJBaiuKZJMPrpwhPYZ7Pster158%2BE5GYpMuT%2Bg0zeLr4lEvWbnVs9T92RULhH%2F7v56HQeD68fcxlvzgzcTGM3mxBlgRNVG8PIJ2IMdL8yK7Ds0AitsQhvzKcqRJ8DfWCpsEdYHJTUzueKXnEb6VV64GfCJuEkvyO0ScKOszuyei3hzRXbylshzFV5CM5B1%2FPNVclhyB4BR8sFhQRFQCGXlKBrJXf5xyecm%2FhhBYTyI4YnHBqCkFMXQzmP4q%2F%2F6OtuJe7JfXTGHJL0ZYmeWSQlP9H0LDD8hmkX5ck2Qh4QUK17H%2B5EXB5s1eE4JyB%2BM%2FG9j9rrDoyWNMMzl5MAGOqUBMmzuYv7OyB5rEGPaKf6MyC30qH5MTUOdYkItrJxYPZQ3%2BUAr0bzI1su4r01dHi5EeeohaM8tyffXgH%2FboxrUBwfeVxN0cWa0zWm8cOkUFLjk2IdSuqjkXpnlSjZ0F1YrEoGqvI3MwWAeb6crzMF7OJLljc1GUWbdx1dvlosVLkp7oWIV4DQ%2Bgnw1O3PP%2FlAcPsq22eutRXDjqIfZPTiYjxu6Hg52&X-Amz-Signature=83a1e13361c93c9d37ef7e47912e0f5b58303826e20bd8d48b59b69d7cc930b5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UUMNHQJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIfZGieX9Vdi6upd3ACy3ZnC5pGUaEpKFYUkDPyOc6NAIgV9Snozi3bj0hLo0TGYE9Ob8B20Jfqk%2FEVYuTgQLenU4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPwqysFkoUHmFRaDACrcA1JcPqMwR2g6FhSrhAt8isDiljkbJg95YMF%2BAApWSSf7kdwP%2FLKpPL1zA6TORbpnIsgU%2BsaWbvEpAs7gMzjFCZAZuxNRqa4QqePEIX1ffkiK3pOjqCfSKQOapwfd2f6uQtrRQtVh35bWLcPtGl7CvHipT1F%2FFEUR84YwHqK%2B%2Bp3s8dTc1%2BF5YaF%2BhGVe%2FZXw2ym2XgS4YzLBMV5fiBGNke2KvYIVy17a1SwwLe79hXQQtSccOWc2EIPoEBXnkcd%2FanV22dNG%2F4Lj%2BzbpvxDuXPLd3UhUdQj4sbvNL3dswC2NdEsWqoRJBaiuKZJMPrpwhPYZ7Pster158%2BE5GYpMuT%2Bg0zeLr4lEvWbnVs9T92RULhH%2F7v56HQeD68fcxlvzgzcTGM3mxBlgRNVG8PIJ2IMdL8yK7Ds0AitsQhvzKcqRJ8DfWCpsEdYHJTUzueKXnEb6VV64GfCJuEkvyO0ScKOszuyei3hzRXbylshzFV5CM5B1%2FPNVclhyB4BR8sFhQRFQCGXlKBrJXf5xyecm%2FhhBYTyI4YnHBqCkFMXQzmP4q%2F%2F6OtuJe7JfXTGHJL0ZYmeWSQlP9H0LDD8hmkX5ck2Qh4QUK17H%2B5EXB5s1eE4JyB%2BM%2FG9j9rrDoyWNMMzl5MAGOqUBMmzuYv7OyB5rEGPaKf6MyC30qH5MTUOdYkItrJxYPZQ3%2BUAr0bzI1su4r01dHi5EeeohaM8tyffXgH%2FboxrUBwfeVxN0cWa0zWm8cOkUFLjk2IdSuqjkXpnlSjZ0F1YrEoGqvI3MwWAeb6crzMF7OJLljc1GUWbdx1dvlosVLkp7oWIV4DQ%2Bgnw1O3PP%2FlAcPsq22eutRXDjqIfZPTiYjxu6Hg52&X-Amz-Signature=5010d2b87f9102e23bb75600b4843b60af65b10385d71371194ef47667518d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
