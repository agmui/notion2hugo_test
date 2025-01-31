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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5VLBL4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj9VV3dqIlGgYY6702RfXaiRMeIK0VdpPNq9mwOGO9pgIgTC5rRW4L1DAk7YkPmc2f%2FRzlP%2F4Df0sgL3SnJklyBEQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxPc%2BlorgRyIegIGCrcAzxU8pEQnG%2FsVgIVw7TelYUd7jo5ZM6b1x8frAQxCqODjsnFjzciijJt0v%2FY5HHVzcL5OzKXVmXuuiLdVPQnLV4X3UngxVWnmkaDUDgsMrzO0GQNikEW2GuHjjvcxCXBlJ8OVmmjzgCPOrGWVEvKv%2BxyGN%2FLiMj9b%2BIp78xdK88kF%2Br48pJw%2B3kaXyK4HSlDpeA0Px4J5e3y6I9DY%2BoYNa2ue4L0QonuL31UBYj%2FcW0BXLCgY1y9CD%2FP6NuQ%2FGhZxvluuuPZPruPX1iJM2tzhWimiepHjoaCmv%2B%2B093%2B65WWThk%2BIKD7%2B%2FpxT%2BTM26cd4uxC3yAhEogH8cGNlSy2WEIdCCN4igaqs2hsWnTqET39b0ZbvFxRPDbsYkMap1vK5XA30rQdP1%2FdMYHEA%2Fx4raSzedhEd%2FQV3DUlU5un2msdyYJE9H4hWXw1zeh6JG9p2kWU3Pz19pLeWUJ11p%2BepGazlOfPztP8i4iUA6WutEdCWo9yeltn1Jr3IB%2Ft6HmEfe0OK10ZqXJHAvjkZsyTG18MX2CnsjcIVfGVFc91CYMTvxWQSeBmBXDLM3PEldjI9sS1kgAMYNo9SFs2l8QbAHr8d7vjTIEiQk55Zy5hIfJWqrXu2eONbX8%2B8HHTMLWJ9LwGOqUBlgY8tLXyunrJHld12MqlT3XRalaANUtYDqJ%2FjkJ9GX9PCOMDxODtpYZSVv3dnXxtxA0pvXlsFL9N7kaOp1LumM89ey2SS3EZptXTBKQf7o1460tr0tt3ce2VxE25RHfp6izB9%2FhQdnhBA1YFOcbBU2iO3PhgCv3x6Ou49y1dqaUq5tlttVeOUyrhu5Q0QWgvG7H5QeZEPr0OZ3LR36QTd1pO%2B8o3&X-Amz-Signature=09253465535f4d8f373f46e929bf59fc4ce0628ce9d8c7c2efaccf95145eb6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5VLBL4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj9VV3dqIlGgYY6702RfXaiRMeIK0VdpPNq9mwOGO9pgIgTC5rRW4L1DAk7YkPmc2f%2FRzlP%2F4Df0sgL3SnJklyBEQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxPc%2BlorgRyIegIGCrcAzxU8pEQnG%2FsVgIVw7TelYUd7jo5ZM6b1x8frAQxCqODjsnFjzciijJt0v%2FY5HHVzcL5OzKXVmXuuiLdVPQnLV4X3UngxVWnmkaDUDgsMrzO0GQNikEW2GuHjjvcxCXBlJ8OVmmjzgCPOrGWVEvKv%2BxyGN%2FLiMj9b%2BIp78xdK88kF%2Br48pJw%2B3kaXyK4HSlDpeA0Px4J5e3y6I9DY%2BoYNa2ue4L0QonuL31UBYj%2FcW0BXLCgY1y9CD%2FP6NuQ%2FGhZxvluuuPZPruPX1iJM2tzhWimiepHjoaCmv%2B%2B093%2B65WWThk%2BIKD7%2B%2FpxT%2BTM26cd4uxC3yAhEogH8cGNlSy2WEIdCCN4igaqs2hsWnTqET39b0ZbvFxRPDbsYkMap1vK5XA30rQdP1%2FdMYHEA%2Fx4raSzedhEd%2FQV3DUlU5un2msdyYJE9H4hWXw1zeh6JG9p2kWU3Pz19pLeWUJ11p%2BepGazlOfPztP8i4iUA6WutEdCWo9yeltn1Jr3IB%2Ft6HmEfe0OK10ZqXJHAvjkZsyTG18MX2CnsjcIVfGVFc91CYMTvxWQSeBmBXDLM3PEldjI9sS1kgAMYNo9SFs2l8QbAHr8d7vjTIEiQk55Zy5hIfJWqrXu2eONbX8%2B8HHTMLWJ9LwGOqUBlgY8tLXyunrJHld12MqlT3XRalaANUtYDqJ%2FjkJ9GX9PCOMDxODtpYZSVv3dnXxtxA0pvXlsFL9N7kaOp1LumM89ey2SS3EZptXTBKQf7o1460tr0tt3ce2VxE25RHfp6izB9%2FhQdnhBA1YFOcbBU2iO3PhgCv3x6Ou49y1dqaUq5tlttVeOUyrhu5Q0QWgvG7H5QeZEPr0OZ3LR36QTd1pO%2B8o3&X-Amz-Signature=c0bc84909e10de2c24f06615ab73051cab486c31dff4c87d49449951e4b594bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
