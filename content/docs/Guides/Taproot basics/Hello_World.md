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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA33Y3UN%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCID6Zgt9CiTDSl%2BGLRA9Y0owNqJEgY8PrJ%2FhZDWBv1LBjAiEAleJX8HRPLEEgX24tLK0AZMFclynb7ok980dVpbNCfiMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSh%2BbEcjqDnW7alaSrcA8oGn2D%2B4MvnBt1IkFWJg1z0qQh%2BYg1I2hAp3L0hdaG%2BmSCgn76Q2tfDTbBdCNHq5CcRGzgG21Cjm%2FIsE6WS8zAMlogsO5tQz8FFvzmK0u2R02tZAOOGKr2eT7WOxI0hocDtCiwsjnp6YmRmNgVkRnw%2BY4WlQzznrc1xVg%2BzAfgfejJFnx8rC0bc71UyVcUbd9vIxi0JPfJslQYJJgB1HxdGL%2Fqw5Za%2FEOyhAo6y5rXYn0H6X0TfvyClMZqCkrmyxa4NGPLosF2%2FKwB3U7t35Tlj%2BXB4%2B5m5OK4Jo8kh2WNP51zcbd33i8ITrz7YZv8m543zUBwc3ETSCmNgqrJl6XzOWAfGz%2F%2BzDMwdyvXgjLzOGSYDzNL965TCUWmJGdZC%2BXsz8LkafdLo40UqcZ%2BwL03QVz7N7C8jpXXwPPfBsAPlitU9khpzkmq9KbxEOtYNMXMKILcg0eaTv6Zw%2F5aXgG92gywT1kpSTlCx9DNIDc9lYix8JDTVUP7GD4Nz0h%2BzNK1vimn%2B%2FfWyUFq6o6neUO6%2Biyvd3fxsYOo86inQZfZUsHO8ZEqN6NHdHSJoV439G5NaD9mlvqNJBJRkRDZ2K5GudGaSZOMinny4%2Be1yWjHvoc4Nc9wsSYP%2FZ35HMIGVzMAGOqUBcixGKzgJgN%2FEX8vpfh5Vz2LfaX8kI4RiWDFFcrDVqTnzmCyStJF4VUPH3d0Ti%2BVnY7mmoMfy9fB6%2Bb2OQYk0gCPZh3TuuD5Q9N4zqqP1RHkUe7K9QiOuTkBxLvxWiHNjXvroMd9HwLUzly%2F7cQMll2rsEOaa02fkYe96CtNMhX7JbV82i8xaxhwAtKUSITG3dKaQ6TgmRgDWnO3RzItrqLAAz6vQ&X-Amz-Signature=c27fd5e73740339d8cd4d86a2a6c118d87125303a79d4a7a57859ea7bcf5f012&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA33Y3UN%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCID6Zgt9CiTDSl%2BGLRA9Y0owNqJEgY8PrJ%2FhZDWBv1LBjAiEAleJX8HRPLEEgX24tLK0AZMFclynb7ok980dVpbNCfiMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSh%2BbEcjqDnW7alaSrcA8oGn2D%2B4MvnBt1IkFWJg1z0qQh%2BYg1I2hAp3L0hdaG%2BmSCgn76Q2tfDTbBdCNHq5CcRGzgG21Cjm%2FIsE6WS8zAMlogsO5tQz8FFvzmK0u2R02tZAOOGKr2eT7WOxI0hocDtCiwsjnp6YmRmNgVkRnw%2BY4WlQzznrc1xVg%2BzAfgfejJFnx8rC0bc71UyVcUbd9vIxi0JPfJslQYJJgB1HxdGL%2Fqw5Za%2FEOyhAo6y5rXYn0H6X0TfvyClMZqCkrmyxa4NGPLosF2%2FKwB3U7t35Tlj%2BXB4%2B5m5OK4Jo8kh2WNP51zcbd33i8ITrz7YZv8m543zUBwc3ETSCmNgqrJl6XzOWAfGz%2F%2BzDMwdyvXgjLzOGSYDzNL965TCUWmJGdZC%2BXsz8LkafdLo40UqcZ%2BwL03QVz7N7C8jpXXwPPfBsAPlitU9khpzkmq9KbxEOtYNMXMKILcg0eaTv6Zw%2F5aXgG92gywT1kpSTlCx9DNIDc9lYix8JDTVUP7GD4Nz0h%2BzNK1vimn%2B%2FfWyUFq6o6neUO6%2Biyvd3fxsYOo86inQZfZUsHO8ZEqN6NHdHSJoV439G5NaD9mlvqNJBJRkRDZ2K5GudGaSZOMinny4%2Be1yWjHvoc4Nc9wsSYP%2FZ35HMIGVzMAGOqUBcixGKzgJgN%2FEX8vpfh5Vz2LfaX8kI4RiWDFFcrDVqTnzmCyStJF4VUPH3d0Ti%2BVnY7mmoMfy9fB6%2Bb2OQYk0gCPZh3TuuD5Q9N4zqqP1RHkUe7K9QiOuTkBxLvxWiHNjXvroMd9HwLUzly%2F7cQMll2rsEOaa02fkYe96CtNMhX7JbV82i8xaxhwAtKUSITG3dKaQ6TgmRgDWnO3RzItrqLAAz6vQ&X-Amz-Signature=6cf2c944417c7bf1cc199371591044a1e09ba6a12d3baf7909f23c171bb50740&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
