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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBU3XKN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAG690GsdssGrm2K7X9NTbMV0psO%2FbRxrvJzOFndw6UoAiEA9jrHT2%2BjPLNH4jS%2BpL6GBpojahbR7qz8Ihwyp6Zs2nAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBvYJ1qGVjUeHNKdNCrcA8lZDjzcPvzofKK4lqph3qfjpA8f8oJkeFhMDrJ5thCK0yXjLDj7nGbVWVCnUNu%2FXxCJQ%2BBjWBI7HP04wDDPdUcVK8%2F1%2BiOzBu6o4RUPGmrfEUkj%2B3jTIl3yTswJar%2Fl2DlaFpmxlzreTEcr3IC6HsNan18B8cme5IK52c%2F4fT%2BfGAS5bPr5f%2BmWqXNKuYVr767H0JTbVafV9oehfQcqn%2F3FqLdKIc2zhHdsESj5MJOiF8EtgkYd7I%2Bi3qK6Z8m2cMV0WVladM7IE%2BUlq2Z4yjUMlZuVXZ9TK83%2B0R4HX4CQHEQW14KG33a1Q8sU%2FSil8jVb2XzswXK%2FNRFmRXJ3i0j5xaK82hpZH%2F8FaaQ8krNk4fWnwl0s9T5BnzfrloqVbYytgayv%2FIxmcraRqfOwRLI7mkQ3fvlUkLyML5tcueFOWCduZbF07CfCyPdYxf5WtEjI054PsU2VJL2%2F6YSXKkuF9VgS8cBQAbrRQ12ht8q9wM9o6JDhLKP%2F%2BuSX0dr3CnPZ8420IU%2FhMTAs8%2B6s4YAtqk185PXpkbgnwFbQe9bkYcWgMF7Pcv%2FLU%2B5OcoUTc9bMjKn3zu7VPozc5dY5vXnpCQ6TLrmivRuS107hlUHM6%2FFV1qcCQ96RYiqYMNibyr0GOqUBki05L40VHS1AHDvyQjGG%2F3fXM1B162nNBtdY%2Br2SKwp7JGyjfv%2BVo4c7qmuFWio4FJuOKTwxiBhlYL4jU2yIrjs%2Bh0n5J%2FB%2FsNLzGuX7WwlQwLGCUTTVi7wsgZN7U6s53TQlrUfub9sRn8jvAJXvSB7aDcapkocoWaxyb3VkgXHXmuFulx2FFW9p5oQbdml%2F%2F%2FgCFfy5lSaOxQxm%2Foou%2B0A2071o&X-Amz-Signature=4452c48cb07143a850df2b070dc759e93a89dc53d67d00bd1a6786d837dad1dc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBU3XKN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAG690GsdssGrm2K7X9NTbMV0psO%2FbRxrvJzOFndw6UoAiEA9jrHT2%2BjPLNH4jS%2BpL6GBpojahbR7qz8Ihwyp6Zs2nAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBvYJ1qGVjUeHNKdNCrcA8lZDjzcPvzofKK4lqph3qfjpA8f8oJkeFhMDrJ5thCK0yXjLDj7nGbVWVCnUNu%2FXxCJQ%2BBjWBI7HP04wDDPdUcVK8%2F1%2BiOzBu6o4RUPGmrfEUkj%2B3jTIl3yTswJar%2Fl2DlaFpmxlzreTEcr3IC6HsNan18B8cme5IK52c%2F4fT%2BfGAS5bPr5f%2BmWqXNKuYVr767H0JTbVafV9oehfQcqn%2F3FqLdKIc2zhHdsESj5MJOiF8EtgkYd7I%2Bi3qK6Z8m2cMV0WVladM7IE%2BUlq2Z4yjUMlZuVXZ9TK83%2B0R4HX4CQHEQW14KG33a1Q8sU%2FSil8jVb2XzswXK%2FNRFmRXJ3i0j5xaK82hpZH%2F8FaaQ8krNk4fWnwl0s9T5BnzfrloqVbYytgayv%2FIxmcraRqfOwRLI7mkQ3fvlUkLyML5tcueFOWCduZbF07CfCyPdYxf5WtEjI054PsU2VJL2%2F6YSXKkuF9VgS8cBQAbrRQ12ht8q9wM9o6JDhLKP%2F%2BuSX0dr3CnPZ8420IU%2FhMTAs8%2B6s4YAtqk185PXpkbgnwFbQe9bkYcWgMF7Pcv%2FLU%2B5OcoUTc9bMjKn3zu7VPozc5dY5vXnpCQ6TLrmivRuS107hlUHM6%2FFV1qcCQ96RYiqYMNibyr0GOqUBki05L40VHS1AHDvyQjGG%2F3fXM1B162nNBtdY%2Br2SKwp7JGyjfv%2BVo4c7qmuFWio4FJuOKTwxiBhlYL4jU2yIrjs%2Bh0n5J%2FB%2FsNLzGuX7WwlQwLGCUTTVi7wsgZN7U6s53TQlrUfub9sRn8jvAJXvSB7aDcapkocoWaxyb3VkgXHXmuFulx2FFW9p5oQbdml%2F%2F%2FgCFfy5lSaOxQxm%2Foou%2B0A2071o&X-Amz-Signature=8ebecffad99569da2fe6106afbf6576e3e87b84ec76dc214825573b42b14da5d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
