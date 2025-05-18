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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNNYZB4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqxpF3AStVxdbE1XFTmxE5fcs62CrrfSbmvGLZQLz27AiBQUwY0AlQb1dfQJZ%2F5obWo8lpPfIEaAECeKanesJRpmCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMSz3kYjS8Q4buUrclKtwD2hJoQskCnvfcKCfMapEdTRxbh2xvXJ4c%2Bo3oRFdLCAmrvM7ik1pBS3auSQIQHZrxt5Bcyv2mzEu3ZZgz7TbGyMoU1nQYDEEPKHxxcUVxpWEd4VlTstxX0r%2FglcuvqLoMI4O8YlygnynA8CItY8HM3BhZCU%2F1a7AnQ40S3XW7B9l0wCggnm2Ht5nPGjlt26k46Evy%2BF20J07n310y4vEX%2FYjHU54ALbldK9XwnvftMkj7GT%2FP6El327gdQRL9fTdXR3ZmLLEjm98u%2BUpdcTPpF8%2F8ntjqNqw9lBLZNR%2Bz0oOi6kDKERdYe4FzhqJB10DQhPid%2FYvpSr%2FIRipVYuteULuissSajVlpB1N0mpYjhHbyhcN8u0q6g2fXPOV6%2FdYMEQDMo36tvFAiiIoW0zN9kwh3A6SqgK27d2YfaEUm31KKx%2BN5A%2Bqf1Xl%2F%2F7pk8hs%2Fhp%2FWtg3k0qOsY8PHyxxAGFvmdi0z05CEArhycUddJIu7HKgJIrLuBTHZVpuWtMeouI7q7%2BqyAbP5dUCMHGzqeQHAXNu7FP1d%2Bo7BhRnnQ5vztHPHkKFJa0T%2FN2gdIv7OJiyWYX1RuOyKr2xo%2FndzkHkdld5BgpaRQU18o6mY9mC0UallPk84sATJEBQw3PGnwQY6pgEMCV6iQOR35Uwc02bDxNzAp5PC8BWAXncnXEcX2ocCI13bzr4XPD34El8mP503QRWhIy0Z9QQjeXodHEwARXEbOTfEZg%2BHpYG4ZOwc8mf8I33I%2B%2F3syNEXM1cClYxexAQePg9%2Fi2RMbJOJWU3oMf6xa91rpZs79mqIuppwKrZor%2B9OPrEovF81yPsJ%2BE5a9OHhVzdy1CfQARx2MGqh9pWpwFi2Eo1%2B&X-Amz-Signature=0357404ea7398f85b619dba18c354003bc8662b91cafb1ed97ad3651bbf1f936&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNNYZB4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqxpF3AStVxdbE1XFTmxE5fcs62CrrfSbmvGLZQLz27AiBQUwY0AlQb1dfQJZ%2F5obWo8lpPfIEaAECeKanesJRpmCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMSz3kYjS8Q4buUrclKtwD2hJoQskCnvfcKCfMapEdTRxbh2xvXJ4c%2Bo3oRFdLCAmrvM7ik1pBS3auSQIQHZrxt5Bcyv2mzEu3ZZgz7TbGyMoU1nQYDEEPKHxxcUVxpWEd4VlTstxX0r%2FglcuvqLoMI4O8YlygnynA8CItY8HM3BhZCU%2F1a7AnQ40S3XW7B9l0wCggnm2Ht5nPGjlt26k46Evy%2BF20J07n310y4vEX%2FYjHU54ALbldK9XwnvftMkj7GT%2FP6El327gdQRL9fTdXR3ZmLLEjm98u%2BUpdcTPpF8%2F8ntjqNqw9lBLZNR%2Bz0oOi6kDKERdYe4FzhqJB10DQhPid%2FYvpSr%2FIRipVYuteULuissSajVlpB1N0mpYjhHbyhcN8u0q6g2fXPOV6%2FdYMEQDMo36tvFAiiIoW0zN9kwh3A6SqgK27d2YfaEUm31KKx%2BN5A%2Bqf1Xl%2F%2F7pk8hs%2Fhp%2FWtg3k0qOsY8PHyxxAGFvmdi0z05CEArhycUddJIu7HKgJIrLuBTHZVpuWtMeouI7q7%2BqyAbP5dUCMHGzqeQHAXNu7FP1d%2Bo7BhRnnQ5vztHPHkKFJa0T%2FN2gdIv7OJiyWYX1RuOyKr2xo%2FndzkHkdld5BgpaRQU18o6mY9mC0UallPk84sATJEBQw3PGnwQY6pgEMCV6iQOR35Uwc02bDxNzAp5PC8BWAXncnXEcX2ocCI13bzr4XPD34El8mP503QRWhIy0Z9QQjeXodHEwARXEbOTfEZg%2BHpYG4ZOwc8mf8I33I%2B%2F3syNEXM1cClYxexAQePg9%2Fi2RMbJOJWU3oMf6xa91rpZs79mqIuppwKrZor%2B9OPrEovF81yPsJ%2BE5a9OHhVzdy1CfQARx2MGqh9pWpwFi2Eo1%2B&X-Amz-Signature=72d4509ab312d9f547a6c405b80e1a1d44dbb697eb6f2e3303ff3bf149b63cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
