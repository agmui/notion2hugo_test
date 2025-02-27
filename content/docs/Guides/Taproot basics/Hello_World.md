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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZANDH7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHXO%2F3RsnLM%2Fl9UXCXX6MrD8FDCsV3qyKzRKi2h4Qp7NAiEAhc9d7DZ54UNTbjjQiQaFjFAxHTGf2TYVwG9VsNOeAloqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE17MLBiZcfJrI3hSircA5n%2BugNb12ZgLBMZ4VWPUA136zt467Y93BpnWJqHN4PaYy55JVpB9KaJ6Wx8RlTCW8pDDWArxNZ3Sq%2F29yrYhl2pwRLARxA6%2FPG%2FGz%2BIHrOi32YtJMYZJX6L73A6k2OBgAhQzoIfnyFk%2BjHQYDmLzTo9JBlOScMrENKN6OTeIA9fO%2F%2FgkPuJC9SJ9gY0PrdN%2Fv5d9eUPKvvQbqKFtV4EmpHMa%2Bcph0eB0Wpfk88EWE06c2oiYBQNjkhdwG14Ukqg3Ub2jF6fUj%2Bav2XbepiPyQzrucx9EwTcnAD8WFqDjb32A0aENbrI6iTAiyMkbQTRdxOJxnnZ0D6056LHOkUEG8hSlyUUfzjO2G%2BABBRfjmvVj6BVZALC%2F9%2B2C3vqWN0eixWEg%2BvCkkXUMWf3%2BE5N6%2BpJ%2BiwSCFftONUbRpr11dqz1e%2FSGxSh%2BLNZxxc%2FedS7n6RaQGLXPOIiiYIRtq28o99wVEMlbDsf1igbz3ZkMsdWFVbvSGbMADzkuH4iz6mrjsGyqcVppRQgFJxN0mZUcCvzwldTbqCMjuPcaCl4aivPX3UbH8T50HJ3TPg%2Fml40EMf47DCiY8ZnJ%2Bdzvm6lj7%2BwZjEmrUAYvfGz8ZSx4bkai7FNqjxsSDI8nIELMMPZg74GOqUBB8na8maow4WCKjApLh2CxKgAIBAs7jOguAXKlH9OyJ2ZMjsXuCop5NmwQ0WGb9n9jsC49mgO5KUZ8fTCYnBmIiJL7Nt%2FrP%2FYUsbuoXsuqJB52M8wNPo0jAZx51j%2FGklPP%2B0OS%2FTo529W3iNg3yNgHKLoHMTIHEZEXOv6dJsvTQyfLCQ30QYrKlGhl%2FSawFZQCqMSmSnMVFwTuD35v3SqP5ccWUYX&X-Amz-Signature=eb34567fbc9e5f750f922adf88c12ac6164cbb412f7aaf7c172dc31e54b150eb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZANDH7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHXO%2F3RsnLM%2Fl9UXCXX6MrD8FDCsV3qyKzRKi2h4Qp7NAiEAhc9d7DZ54UNTbjjQiQaFjFAxHTGf2TYVwG9VsNOeAloqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE17MLBiZcfJrI3hSircA5n%2BugNb12ZgLBMZ4VWPUA136zt467Y93BpnWJqHN4PaYy55JVpB9KaJ6Wx8RlTCW8pDDWArxNZ3Sq%2F29yrYhl2pwRLARxA6%2FPG%2FGz%2BIHrOi32YtJMYZJX6L73A6k2OBgAhQzoIfnyFk%2BjHQYDmLzTo9JBlOScMrENKN6OTeIA9fO%2F%2FgkPuJC9SJ9gY0PrdN%2Fv5d9eUPKvvQbqKFtV4EmpHMa%2Bcph0eB0Wpfk88EWE06c2oiYBQNjkhdwG14Ukqg3Ub2jF6fUj%2Bav2XbepiPyQzrucx9EwTcnAD8WFqDjb32A0aENbrI6iTAiyMkbQTRdxOJxnnZ0D6056LHOkUEG8hSlyUUfzjO2G%2BABBRfjmvVj6BVZALC%2F9%2B2C3vqWN0eixWEg%2BvCkkXUMWf3%2BE5N6%2BpJ%2BiwSCFftONUbRpr11dqz1e%2FSGxSh%2BLNZxxc%2FedS7n6RaQGLXPOIiiYIRtq28o99wVEMlbDsf1igbz3ZkMsdWFVbvSGbMADzkuH4iz6mrjsGyqcVppRQgFJxN0mZUcCvzwldTbqCMjuPcaCl4aivPX3UbH8T50HJ3TPg%2Fml40EMf47DCiY8ZnJ%2Bdzvm6lj7%2BwZjEmrUAYvfGz8ZSx4bkai7FNqjxsSDI8nIELMMPZg74GOqUBB8na8maow4WCKjApLh2CxKgAIBAs7jOguAXKlH9OyJ2ZMjsXuCop5NmwQ0WGb9n9jsC49mgO5KUZ8fTCYnBmIiJL7Nt%2FrP%2FYUsbuoXsuqJB52M8wNPo0jAZx51j%2FGklPP%2B0OS%2FTo529W3iNg3yNgHKLoHMTIHEZEXOv6dJsvTQyfLCQ30QYrKlGhl%2FSawFZQCqMSmSnMVFwTuD35v3SqP5ccWUYX&X-Amz-Signature=0498f8b33cb7587a35fc0bed7a15b8a9cbac1b0cb89b186f036c94fbd180a41a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
