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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUPPTVW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIHrY59wfoDcwgNKB7XaxUG6QrXIQyi2caq4WgQQxplZvAiBKH9g0ihLjyjv%2FI%2FONoNHcGgTPl56lunD%2BHOxunXgNeyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmDqkAOpkBc1hfiCWKtwDj7U09KgDE5KLmd8u2E%2BJQTW2oqmzwSmpRdyDL174y5B3kfvl7HEDarP%2FvPIUhaEe4YhP9UJhh0PyIhLhd%2B8HlvElybiSlA%2BRPOo64W6rwP4iQNOBKUd6Ol5JwHbrlR4DL8kJu%2BS1%2BEshqfnCk0T11spsVkBFT5tvhUXvewOG68Qz5V%2BnNg9poLXCuopYfLw5G%2BexB2dKIv8SzzISikbM%2BYHtiYovUmubPZZzRJMJFGaLsWmVu7qudLm%2FAUwd8cqOgAJBoM5N4IOGaBBX%2FzsXu5IFwctxP1ICIKSJLdv%2FrKFOwoIpgpRFZT6qeD7X3YVMT9xnFtijfuEN17RXQLJCw%2FSsFpuursu%2B7ziYzZP3qSiKJjj55LIpoQpy2VqMyRDUfYsJTx698kY27u%2FhWHk6SNavN21shcE8mW1J1jNWQ4K1MNJmnd3%2BsrzoeiZMd3ZDjHgqDGVm6T7irZaNPlTaFZkYhLc8RDgJLhSfIcCwgRjLNgk3a8CVS7kd26cH4r5xO%2FHh11ceLxHpvDYIr6kHpJt47YqVj5OsjA09AD0LcdvpEC3ztfj5yTgRSiazvHfGxjMZbGXArGkv0PTToqpnU6DaccuMzIlbyWTjOMkEjcB4Ohyd8s4Ik82LC%2Fsw4dawvwY6pgGESUTbbq%2BeiH9ieVq1fwXY5T3cUTzVMUSSYfGliR1FC7H0MXUzwKCAL0EfCjWsHbR1XUHQEUh2v817le3VCpJSAb8OBIXeBJgT1UGyJYzduL6sy2KpK8dpN%2BtfEJYwQ7AqqNKIUkXWSJnloFck1DdbOljVElIodAsvU7qghqmMNs%2Bstmid%2Bfy2CTaiGMSsFFe%2B2JQgBnxy%2FXMJTDTczT%2BtE6dfyjtC&X-Amz-Signature=f4aaac880f3a885cb07612e50115a4d8b092546346b67d6af2046640c5035141&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUPPTVW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIHrY59wfoDcwgNKB7XaxUG6QrXIQyi2caq4WgQQxplZvAiBKH9g0ihLjyjv%2FI%2FONoNHcGgTPl56lunD%2BHOxunXgNeyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmDqkAOpkBc1hfiCWKtwDj7U09KgDE5KLmd8u2E%2BJQTW2oqmzwSmpRdyDL174y5B3kfvl7HEDarP%2FvPIUhaEe4YhP9UJhh0PyIhLhd%2B8HlvElybiSlA%2BRPOo64W6rwP4iQNOBKUd6Ol5JwHbrlR4DL8kJu%2BS1%2BEshqfnCk0T11spsVkBFT5tvhUXvewOG68Qz5V%2BnNg9poLXCuopYfLw5G%2BexB2dKIv8SzzISikbM%2BYHtiYovUmubPZZzRJMJFGaLsWmVu7qudLm%2FAUwd8cqOgAJBoM5N4IOGaBBX%2FzsXu5IFwctxP1ICIKSJLdv%2FrKFOwoIpgpRFZT6qeD7X3YVMT9xnFtijfuEN17RXQLJCw%2FSsFpuursu%2B7ziYzZP3qSiKJjj55LIpoQpy2VqMyRDUfYsJTx698kY27u%2FhWHk6SNavN21shcE8mW1J1jNWQ4K1MNJmnd3%2BsrzoeiZMd3ZDjHgqDGVm6T7irZaNPlTaFZkYhLc8RDgJLhSfIcCwgRjLNgk3a8CVS7kd26cH4r5xO%2FHh11ceLxHpvDYIr6kHpJt47YqVj5OsjA09AD0LcdvpEC3ztfj5yTgRSiazvHfGxjMZbGXArGkv0PTToqpnU6DaccuMzIlbyWTjOMkEjcB4Ohyd8s4Ik82LC%2Fsw4dawvwY6pgGESUTbbq%2BeiH9ieVq1fwXY5T3cUTzVMUSSYfGliR1FC7H0MXUzwKCAL0EfCjWsHbR1XUHQEUh2v817le3VCpJSAb8OBIXeBJgT1UGyJYzduL6sy2KpK8dpN%2BtfEJYwQ7AqqNKIUkXWSJnloFck1DdbOljVElIodAsvU7qghqmMNs%2Bstmid%2Bfy2CTaiGMSsFFe%2B2JQgBnxy%2FXMJTDTczT%2BtE6dfyjtC&X-Amz-Signature=b4b48b6253025140c5d439f731797c6eb2d02aae50e200224e26bef509d58517&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
