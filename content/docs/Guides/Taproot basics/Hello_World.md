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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOBBCZL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLFfh%2Be%2FONV5%2FCD3EgCjHxALc987MPNOQuxsXrmgMldwIgXEDgA7ty2j1NiUISYxETaVi%2FMW9GIQN8SS06ZISLWfQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN15wnUcoqCI%2FgVglyrcA57%2FqBg9dWzhA1jPL5dBfDlqDPGoQqdlgR3pkSEtGaSn2BlnOj08elqLXC0r8w9TJLbTcPeODoIjgYkN06im96DE7mkr55KOLCyCUFjUUDp5M5aTjXIoC8svhDxzHcgwohNnwFguxQiUdQISAxngIDrodzcAuDX2u9%2FySTpw%2F0RQYvshKcAbVbfNkwY3G%2BuNAF%2FcFWZOMkmfi6r9SaGqc%2FV3jbCRF1%2BUGp1N7ezjb%2B1ss%2Fhoa6Pn%2FOD1Nmw5soO6Rnkj0teTWwJ3rdzbWs4%2BHtNTmOi%2BBC%2FS0xEiNvD%2FPPpFR6vlO%2BRr4BxNjgs%2FjftGzufHkf9LkBXDK5IJLJ7hoe%2FvxuAhx6x4RTMtYNvDVgDqRHOheAPe5ZK9vsPfBXXvVuIcFyCdPWmQMvbF8%2FkhQzxctcRaA0YrG0hZKb2%2Bkly059fnGvyCn35vjKHKYIjhajMA3Ep%2FDxNbFf3nc8V%2FqXuj8HeupzQJHbiT5HAgYh0UYtqrX8BukxdzI39%2Bcvv74uoRZMtlD9ZmRclqjJV8YuhMEbMEcq8kjZvLmQLDz8HeJXZuv7J6s0yM0ma4W8x9d3CdPg92gD07j%2BcKhaaxPmiFJnpFfw0%2B8wwy9r5Os5%2FKUdGMRbDtPrWEMU%2FsMJ%2By1b4GOqUB5UFU%2Btau6TR4F3nwvRJH%2BDAwCkaLdOdokjkLjPaCEniwVyYRR0JuJ4sXafGaN47IqUK%2BwL4zRKfTRSfdKPsgAFg5hEmKmx67vz7L69Lyo2R4141%2BsaiR%2B2UhVViaroXC8AmvXz6A2e%2B664ifarNqYTm90MVs0tVK4fvNMJIwAqutK90Td0kaPqL%2FtDNpmhmtr7qTRj7XfKRlT3Xq9E3AxAos8u1c&X-Amz-Signature=d4f2cddc5253242115b2b0ea172dd623c80973b994722ac0ccfd252bece1aefc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOBBCZL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLFfh%2Be%2FONV5%2FCD3EgCjHxALc987MPNOQuxsXrmgMldwIgXEDgA7ty2j1NiUISYxETaVi%2FMW9GIQN8SS06ZISLWfQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN15wnUcoqCI%2FgVglyrcA57%2FqBg9dWzhA1jPL5dBfDlqDPGoQqdlgR3pkSEtGaSn2BlnOj08elqLXC0r8w9TJLbTcPeODoIjgYkN06im96DE7mkr55KOLCyCUFjUUDp5M5aTjXIoC8svhDxzHcgwohNnwFguxQiUdQISAxngIDrodzcAuDX2u9%2FySTpw%2F0RQYvshKcAbVbfNkwY3G%2BuNAF%2FcFWZOMkmfi6r9SaGqc%2FV3jbCRF1%2BUGp1N7ezjb%2B1ss%2Fhoa6Pn%2FOD1Nmw5soO6Rnkj0teTWwJ3rdzbWs4%2BHtNTmOi%2BBC%2FS0xEiNvD%2FPPpFR6vlO%2BRr4BxNjgs%2FjftGzufHkf9LkBXDK5IJLJ7hoe%2FvxuAhx6x4RTMtYNvDVgDqRHOheAPe5ZK9vsPfBXXvVuIcFyCdPWmQMvbF8%2FkhQzxctcRaA0YrG0hZKb2%2Bkly059fnGvyCn35vjKHKYIjhajMA3Ep%2FDxNbFf3nc8V%2FqXuj8HeupzQJHbiT5HAgYh0UYtqrX8BukxdzI39%2Bcvv74uoRZMtlD9ZmRclqjJV8YuhMEbMEcq8kjZvLmQLDz8HeJXZuv7J6s0yM0ma4W8x9d3CdPg92gD07j%2BcKhaaxPmiFJnpFfw0%2B8wwy9r5Os5%2FKUdGMRbDtPrWEMU%2FsMJ%2By1b4GOqUB5UFU%2Btau6TR4F3nwvRJH%2BDAwCkaLdOdokjkLjPaCEniwVyYRR0JuJ4sXafGaN47IqUK%2BwL4zRKfTRSfdKPsgAFg5hEmKmx67vz7L69Lyo2R4141%2BsaiR%2B2UhVViaroXC8AmvXz6A2e%2B664ifarNqYTm90MVs0tVK4fvNMJIwAqutK90Td0kaPqL%2FtDNpmhmtr7qTRj7XfKRlT3Xq9E3AxAos8u1c&X-Amz-Signature=37497b940901defae72c6e1769842d2a91d0e743ee7b904fe20cdebfdfa517d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
