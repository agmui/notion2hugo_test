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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USDTCQIZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXG9t%2BqjyNlMn1rjqlKAqV9RLBrNloedtonE8D8di2cAiASwKnroUxew0IvuDnZvR714WMjKsv%2F3nohaK8ts8EcfCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWFJS5VlSxjGkEiDqKtwDQBbM%2FgLEpVYpvOMTUoBnv7xhgEHwnc8UKDeBn%2Fjrxw%2FKLCv4Rg97ZOSqxfeeNF3pQg7nTeUP2%2B%2BwK1Tmd3QFoOITF3NHy9EfXd72f6BBSzwPzLIUMJuBcofCF1Y1KCij60u7LmQ6ncV3%2FndlnYYiebo%2F0fK0gxe8cGuMeMjDsu6LQxgIk1YANURPS%2FjUjPrmSofUz3rdIUsnN2VpkREU2aVNlIAyTyVFDr5ljHrz33XmZT6lBcK2iKrKxoepCo9nYnxPFdB0%2FoBKj3WhiEDPBdzcnrLJsK1oeD24fdGu2cnMe4WjOjGtA0FIbTvtyTuHjoe3cUEe8JFyVZPand6juljxLo67QslC7PBhgfI173NiITh4rl39TYwVtwdF2gSvSo7ohvaK56vnVUBXWXGAmrGZCwY2i7msCoSqhehD1CCzghCXoJikvu2ff4Nud%2BNPBgyHyBI1CUwXG4C4Bsfg4vNVGRbQJKj%2BreNQzjf2GfQt4k5tXELZjLn2fQ7MTZpACWxE0ZPwJsrbF6slduY8xvLTL2dt%2Fyq5IFOxy2r4lz5bpxOKro8KW75THbFnslh7KbL654WPZhA3NisvQ29L8vp4mPP6MGcHeXkM7PwXuVxBGUEe3tVWfIxTHhIwgc%2FqvQY6pgHdVc2EmevA3TNsQ4oOoNbvZh6cpu5lDzKzgnoFENS%2FOnzlc6n4pU3mU4ZFXGgmywka7xHuG684Q70SR4CuBwRG8t3KDd8ZT9hJpjg8Y95f8%2BXEbDpO1IWVwzAkD%2BNz7RpPTI2dlM0mVZf%2BiEkCcj7FdRj5chiyOYJ%2BK7IAu5Veo67DNhN2E47kWVzQdT4wVzWN4Q7IYRT%2FlQKulOJqu9A0PpdE%2FpX3&X-Amz-Signature=0036c26f780b2ccaca40ada7845abeeffb17718dc9f2a6ee45ca64469e0826a4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USDTCQIZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXG9t%2BqjyNlMn1rjqlKAqV9RLBrNloedtonE8D8di2cAiASwKnroUxew0IvuDnZvR714WMjKsv%2F3nohaK8ts8EcfCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWFJS5VlSxjGkEiDqKtwDQBbM%2FgLEpVYpvOMTUoBnv7xhgEHwnc8UKDeBn%2Fjrxw%2FKLCv4Rg97ZOSqxfeeNF3pQg7nTeUP2%2B%2BwK1Tmd3QFoOITF3NHy9EfXd72f6BBSzwPzLIUMJuBcofCF1Y1KCij60u7LmQ6ncV3%2FndlnYYiebo%2F0fK0gxe8cGuMeMjDsu6LQxgIk1YANURPS%2FjUjPrmSofUz3rdIUsnN2VpkREU2aVNlIAyTyVFDr5ljHrz33XmZT6lBcK2iKrKxoepCo9nYnxPFdB0%2FoBKj3WhiEDPBdzcnrLJsK1oeD24fdGu2cnMe4WjOjGtA0FIbTvtyTuHjoe3cUEe8JFyVZPand6juljxLo67QslC7PBhgfI173NiITh4rl39TYwVtwdF2gSvSo7ohvaK56vnVUBXWXGAmrGZCwY2i7msCoSqhehD1CCzghCXoJikvu2ff4Nud%2BNPBgyHyBI1CUwXG4C4Bsfg4vNVGRbQJKj%2BreNQzjf2GfQt4k5tXELZjLn2fQ7MTZpACWxE0ZPwJsrbF6slduY8xvLTL2dt%2Fyq5IFOxy2r4lz5bpxOKro8KW75THbFnslh7KbL654WPZhA3NisvQ29L8vp4mPP6MGcHeXkM7PwXuVxBGUEe3tVWfIxTHhIwgc%2FqvQY6pgHdVc2EmevA3TNsQ4oOoNbvZh6cpu5lDzKzgnoFENS%2FOnzlc6n4pU3mU4ZFXGgmywka7xHuG684Q70SR4CuBwRG8t3KDd8ZT9hJpjg8Y95f8%2BXEbDpO1IWVwzAkD%2BNz7RpPTI2dlM0mVZf%2BiEkCcj7FdRj5chiyOYJ%2BK7IAu5Veo67DNhN2E47kWVzQdT4wVzWN4Q7IYRT%2FlQKulOJqu9A0PpdE%2FpX3&X-Amz-Signature=ffa13be1b54ff2b03970604344fcf543b1c606671308f335dcca7a8e6a20ca10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
