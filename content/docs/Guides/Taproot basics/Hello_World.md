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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35YDYEI%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICUf2Cl6rTmL7Wo3%2FbpLrmpA7oDKVNAszZUUxuqUG%2BzlAiBAAp%2BvxYI2l5sJDL45cDsVn81VuzYN6P%2BIuxklAj3KrSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLQuXEA0yp1c%2BV4FKtwDSm9FpvKZXh0xKFkkqYS7xZeZ4C03SUcwv%2F23h7nk2I6cwYDE%2B%2BZh%2FEy0locfH9mfHP0HpdVchgx0PixGTrDQmplR3V0sAFSemGDnRS97tHivTA7GFgNhG5A9N9yDfHyQe7RcjJ72xZzViPrP6f97HvHQgP6NkErskmI5m08YNGdVLuk4VEcNHcux%2F8BZfBYfcPXNEwCqNO%2BRImvMQ9jKF9WPtXTfNlYCmSlsJ%2BpuB5flc4O8pr8AO9%2FEFyhqS8hO%2BpErE1Ej6hu8o3Au4onO%2FfAh7fFGK9vXza%2FkAw2HQfGtMH84ncAeWf5t6QA7PiLpy5d6EAjlf8VuaOdRvpvvcQZQyloUgCylcxITfM9oboyprnq%2FzKJi7s8erJ5QnwE60FqGxLVpDj9RPp1uJMU%2F4J6EzTkNnplADVO6S9v9BxrGzQB54YoGH3U3zixTyyrZKLWK9uAUOeGOB3yTXv4iA4YMX63tz%2BiInpVKmdldeZKovWW6oQVDLDTGFZjpNRrY2iUvCl9n8riO8a0f1cc%2F8hOP%2FH6gWINIDIMxA5DFWOjmH8gLvxRW%2FLWE8%2FxhgBR5%2BI60L0kN%2BegyQgbJp5iZYmYo7WDsG75cvKsiPdUDu0wFKBilMRSE7TQRZ0kwytCivwY6pgFGz6vzKGR8a8FOAyvEPXm7qUk7XuLaRqjWGl0m9n87e5%2FcO255RMaKC2OoQGYJ5txo1ds6f2MMljZMy%2BGOXYGx4rzNAX9N9htFhi37P1K6W5HUOFP30JaeA6AJerjdBVWPEh8KJXJtZn8ZpW3DCUVVQavhBdzuTPnAjt0hrqLC9X%2BQagGeS9erT2GGIQSQRtP%2BDLjwnj081cF4lPXJWv1cdPzyGONy&X-Amz-Signature=4f61726941513043023839449f7b23cc1aa491401d0d7c98dceb28a89cd37f33&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35YDYEI%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICUf2Cl6rTmL7Wo3%2FbpLrmpA7oDKVNAszZUUxuqUG%2BzlAiBAAp%2BvxYI2l5sJDL45cDsVn81VuzYN6P%2BIuxklAj3KrSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLQuXEA0yp1c%2BV4FKtwDSm9FpvKZXh0xKFkkqYS7xZeZ4C03SUcwv%2F23h7nk2I6cwYDE%2B%2BZh%2FEy0locfH9mfHP0HpdVchgx0PixGTrDQmplR3V0sAFSemGDnRS97tHivTA7GFgNhG5A9N9yDfHyQe7RcjJ72xZzViPrP6f97HvHQgP6NkErskmI5m08YNGdVLuk4VEcNHcux%2F8BZfBYfcPXNEwCqNO%2BRImvMQ9jKF9WPtXTfNlYCmSlsJ%2BpuB5flc4O8pr8AO9%2FEFyhqS8hO%2BpErE1Ej6hu8o3Au4onO%2FfAh7fFGK9vXza%2FkAw2HQfGtMH84ncAeWf5t6QA7PiLpy5d6EAjlf8VuaOdRvpvvcQZQyloUgCylcxITfM9oboyprnq%2FzKJi7s8erJ5QnwE60FqGxLVpDj9RPp1uJMU%2F4J6EzTkNnplADVO6S9v9BxrGzQB54YoGH3U3zixTyyrZKLWK9uAUOeGOB3yTXv4iA4YMX63tz%2BiInpVKmdldeZKovWW6oQVDLDTGFZjpNRrY2iUvCl9n8riO8a0f1cc%2F8hOP%2FH6gWINIDIMxA5DFWOjmH8gLvxRW%2FLWE8%2FxhgBR5%2BI60L0kN%2BegyQgbJp5iZYmYo7WDsG75cvKsiPdUDu0wFKBilMRSE7TQRZ0kwytCivwY6pgFGz6vzKGR8a8FOAyvEPXm7qUk7XuLaRqjWGl0m9n87e5%2FcO255RMaKC2OoQGYJ5txo1ds6f2MMljZMy%2BGOXYGx4rzNAX9N9htFhi37P1K6W5HUOFP30JaeA6AJerjdBVWPEh8KJXJtZn8ZpW3DCUVVQavhBdzuTPnAjt0hrqLC9X%2BQagGeS9erT2GGIQSQRtP%2BDLjwnj081cF4lPXJWv1cdPzyGONy&X-Amz-Signature=aa8478a55cb946066b9804e66e27c60f376049d551e518fb0dc8c9e549cf7b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
