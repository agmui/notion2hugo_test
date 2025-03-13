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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRONZ6RB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDId0zO56Y8zVWeIbnhC0idtV94xOTsCwxHpu9FJB7k4QIhALpR7GySAKjbRGxILY6yX28DGrv29pfSKB2wrCiAb4wxKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQTLR7GYtWhR4Uhoq3ANLLn1NCUYqFC6e3fENsLaUCQ0tOHjX91QierIbF2uZpipP8YRIZVOWfrVQk2tfQXvlDPBqvE8BNdFSwrnTOovzO6Kt0fikJPq2N6WuQIfAM1%2BANyQPYzXx0ep29GdnxzUrH4qAJljxJnj5KfNBCAXU45fhdzJdynGrjdwX9AJGTWD947FLo2czei2Az%2F7UdEaeoXPqiXZGLQP88CSKe0TUi1VcLrV44zI011EgtVg9H5bdq5WuCNyKYEr%2BS%2FXJyhSFngZZo06mA8cp%2F7XUO%2FookXOd3nP%2FIrxmEf%2Beyw19P%2BJ7A2Nkp1%2BnuHAs4DYgRvpMCbbbQ%2FucWd%2BWcgx2L0i%2Bo3WYVR1Ng%2F95sdapLGD%2Bp%2FxWXN2JRdq49%2Fmtat94TNwXvv1USwOv8MuGDehMXjHjxa3SckoB4nKjlLBepMkmezSttjo72cOvxzUIsqqOMPWOHNd%2FQEI%2FDb2coAoiQBjK78GPUn0YzXpK4zg%2FmNypK%2B6X6UtpnlrYpJkR5NgJv2HGdYNKcRSIdt5sEk257mnXx8xqw1YEtIFYG6QQezgMDsUwFg%2BSerbbzCqyvnSG6OuNRVRuZY6HOHKA8QmHwuTPXiwjTrKNiIUlsvv8dvSbOJ0Cw%2FePcGAIZ8cTITCJ2su%2BBjqkAbLS98o1N4GK5ofczf4YM3I371ZzgMtwfZMp724bSrgA54s1cGJOOoi194pR%2BV4s0YXaZKo7EwIH%2BnTUELoPktVdOMui9Q9ZTdmOXS8FrsyTmqEug%2FTb5iFIQk5FLzdKAlxvSTvWlhmA8TXf1Q%2FR01j%2FHd5waEeMiY2ZRC4RaWQAVU1Drxj2ZCoQZzIirfB4UVDpU7uusO%2FBAH%2FN8FCZXRAsXqkH&X-Amz-Signature=b3fa007e0e361ef6ddab6572da84c542bfd67491c668ce4aad573476db68b533&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRONZ6RB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDId0zO56Y8zVWeIbnhC0idtV94xOTsCwxHpu9FJB7k4QIhALpR7GySAKjbRGxILY6yX28DGrv29pfSKB2wrCiAb4wxKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQTLR7GYtWhR4Uhoq3ANLLn1NCUYqFC6e3fENsLaUCQ0tOHjX91QierIbF2uZpipP8YRIZVOWfrVQk2tfQXvlDPBqvE8BNdFSwrnTOovzO6Kt0fikJPq2N6WuQIfAM1%2BANyQPYzXx0ep29GdnxzUrH4qAJljxJnj5KfNBCAXU45fhdzJdynGrjdwX9AJGTWD947FLo2czei2Az%2F7UdEaeoXPqiXZGLQP88CSKe0TUi1VcLrV44zI011EgtVg9H5bdq5WuCNyKYEr%2BS%2FXJyhSFngZZo06mA8cp%2F7XUO%2FookXOd3nP%2FIrxmEf%2Beyw19P%2BJ7A2Nkp1%2BnuHAs4DYgRvpMCbbbQ%2FucWd%2BWcgx2L0i%2Bo3WYVR1Ng%2F95sdapLGD%2Bp%2FxWXN2JRdq49%2Fmtat94TNwXvv1USwOv8MuGDehMXjHjxa3SckoB4nKjlLBepMkmezSttjo72cOvxzUIsqqOMPWOHNd%2FQEI%2FDb2coAoiQBjK78GPUn0YzXpK4zg%2FmNypK%2B6X6UtpnlrYpJkR5NgJv2HGdYNKcRSIdt5sEk257mnXx8xqw1YEtIFYG6QQezgMDsUwFg%2BSerbbzCqyvnSG6OuNRVRuZY6HOHKA8QmHwuTPXiwjTrKNiIUlsvv8dvSbOJ0Cw%2FePcGAIZ8cTITCJ2su%2BBjqkAbLS98o1N4GK5ofczf4YM3I371ZzgMtwfZMp724bSrgA54s1cGJOOoi194pR%2BV4s0YXaZKo7EwIH%2BnTUELoPktVdOMui9Q9ZTdmOXS8FrsyTmqEug%2FTb5iFIQk5FLzdKAlxvSTvWlhmA8TXf1Q%2FR01j%2FHd5waEeMiY2ZRC4RaWQAVU1Drxj2ZCoQZzIirfB4UVDpU7uusO%2FBAH%2FN8FCZXRAsXqkH&X-Amz-Signature=615e5f859e79f694c8f8f8bdfdff5657a8571542b8b1ecaa39da5babb80afa3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
