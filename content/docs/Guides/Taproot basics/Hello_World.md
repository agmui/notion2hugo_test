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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBDG24N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCAqs1QgJmxWsPAqLZTR0eSserEBn5Psf5MjyIdHBhobwIgEU6FCHisAFLHxMYK80pAkPqyraEDSZRyJyvHCdfEfFMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPFlYspyiAQAXAkfqSrcAwbGfx86zSo6UsJnE2b81i3jTtbauOAk8HM8IaxE%2BaZizbO3CxPvoF2zQqjwgZijF6TzRRYbGwE2MzoOR5Kpw%2FtyXo2XsaPA0q1m04k7EJiRVU7X83if7XdJiN8EalMgNOXBIqcx4h%2BlUnY7MKRlhKKPK3PV4IBnag7z5G4%2FYcf1lHRok%2F65rg7qOI4iDn%2BaKwvCvnCYW4MyCgSb8fbQMXuOTO3mtDpQP708xJxng739kDDqOmDmxElqMHqAi4H9pVl9XT1IzSiUZDn3TuyG7y%2FLJhYZ9X3KrlRuQtpc5%2FOEuBT1GIojgnXkKbgCAXSDTdqQouYgKzS9LnBW9YEpdRbJ3xg%2FdIotYCpEUli8QytTpHuJ0bnJdA1MgqhdQQfVi9TeWMnQecLJvL3wKIAwA%2BwnkhJzg8FLlJFZA%2FopRdvEKFb3XqC8eYp5cfk5HkH8Kl55BjB8BSVGiqP5MUDUDhcn3cMCVjsaxn6e1Gq1xkUvPuOKSLnvBd4dE0yMYMuCG2aOJVEldppjsLNtMTaarSAXivxm7HXcGIJKIoXpasgsnQhFiZ%2FjP7tak3ZAKvcuY1IUCKhITky3Qh6mG8qTyCGNb9mZXrqKdsInD98QeBJAPi963clkNbLsa%2Bx3MJuu2cMGOqUBjyFZU3RJ29xuShI62BtSbNx0f0GupCzIhoC9OLW3oQlUMVmqEpYq45VcZyLlp5E38W9uOX48jSedNzv9dNohZEp0VY6V3FiYkcFjuwskFMhQWx7rW169qeF90gFOpgi7Cdrc%2FCdiHj6l%2BtItdQqIkT6R6uWOfe5Hzh%2BhKaH0qBqwW7qFgLejHjh1UnSzXa%2BgzVQAMAOYvAHhS%2BFCEDTMNn9y97%2Bj&X-Amz-Signature=b789f68b3822ac15b2bff7faadef331dad24019fd088ca85c1ac22db8c62051a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBDG24N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCAqs1QgJmxWsPAqLZTR0eSserEBn5Psf5MjyIdHBhobwIgEU6FCHisAFLHxMYK80pAkPqyraEDSZRyJyvHCdfEfFMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPFlYspyiAQAXAkfqSrcAwbGfx86zSo6UsJnE2b81i3jTtbauOAk8HM8IaxE%2BaZizbO3CxPvoF2zQqjwgZijF6TzRRYbGwE2MzoOR5Kpw%2FtyXo2XsaPA0q1m04k7EJiRVU7X83if7XdJiN8EalMgNOXBIqcx4h%2BlUnY7MKRlhKKPK3PV4IBnag7z5G4%2FYcf1lHRok%2F65rg7qOI4iDn%2BaKwvCvnCYW4MyCgSb8fbQMXuOTO3mtDpQP708xJxng739kDDqOmDmxElqMHqAi4H9pVl9XT1IzSiUZDn3TuyG7y%2FLJhYZ9X3KrlRuQtpc5%2FOEuBT1GIojgnXkKbgCAXSDTdqQouYgKzS9LnBW9YEpdRbJ3xg%2FdIotYCpEUli8QytTpHuJ0bnJdA1MgqhdQQfVi9TeWMnQecLJvL3wKIAwA%2BwnkhJzg8FLlJFZA%2FopRdvEKFb3XqC8eYp5cfk5HkH8Kl55BjB8BSVGiqP5MUDUDhcn3cMCVjsaxn6e1Gq1xkUvPuOKSLnvBd4dE0yMYMuCG2aOJVEldppjsLNtMTaarSAXivxm7HXcGIJKIoXpasgsnQhFiZ%2FjP7tak3ZAKvcuY1IUCKhITky3Qh6mG8qTyCGNb9mZXrqKdsInD98QeBJAPi963clkNbLsa%2Bx3MJuu2cMGOqUBjyFZU3RJ29xuShI62BtSbNx0f0GupCzIhoC9OLW3oQlUMVmqEpYq45VcZyLlp5E38W9uOX48jSedNzv9dNohZEp0VY6V3FiYkcFjuwskFMhQWx7rW169qeF90gFOpgi7Cdrc%2FCdiHj6l%2BtItdQqIkT6R6uWOfe5Hzh%2BhKaH0qBqwW7qFgLejHjh1UnSzXa%2BgzVQAMAOYvAHhS%2BFCEDTMNn9y97%2Bj&X-Amz-Signature=798fd903b9e71240c43cbf1e41a028a2538dd7cb2363b47951cac11b20a1ef67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
