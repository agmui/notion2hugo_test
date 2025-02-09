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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUUQO3J%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqiXZCzNGsW5WDuSpchEvlG3WvgFLFWN%2F7LiWFR3hXyAiEAufINaA788G50arwA9pCo7sM4wTqbE%2FIJrgv%2FHMtZev4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsmq1v9llK%2FXkP28SrcA1Lt02hPvFs8JlGST1UgU08dwEgnQGjUT1KqU4jmDgrS74ybIWje71bpfgHsm5dYgY4oO6AW5LT3nE2YI426Ch4Ns8xbQ5SZnIYYkmk1ayMJL60W0kwmIniwfr9tz3z9lJBev0nFfxEjyPRZjhDzjb6oeaC5Yog8Z5TwhFnGdyfNhrqOKJ9tgWddzI%2F1uEKcpfVrw2ADKTvBBOY5xvCj0JxnMTQh4bmtq8MGja3R0iHnuyehAAw1Jzv%2Fr29ho6A8ESqMgs14wS4O3kjDvabJ%2FDcw2lWGSOo6CttoJfvhJ3%2FJ0brFmDAOkzDjjtGauGllfe3yuPWfnG%2B1EqFjMIWzJ%2F4a2p7x98iNPAcQrs0AXH%2FnQBWT3F6VFjivQW5HOO5I9sHkuZf4arR%2BCxR34fD9svsWNn81z9ZrCI2VF%2F7vJ3E0aeHXDbTvjteH24ObSOnAGhaEr2WItofuYEJNh%2FSigPHU5%2BkdomDUSV%2BnqIJ0ct7p2Jd7aM9l5v%2BlJfX1sZJbXFnF1retTG59yNkSPJsvADp8PoSsJ8n7aWDPN%2FLL5S24HTLITevaiXTvAR9wHuVO%2FISeBQ6T9b1q94LZejBg3Z8gclin9aP0LBkiwffs3RuEcvj3YV%2F53GyAYBEsMIKQpL0GOqUBQ6as4Th1Gwi7VLNjiCj5GVqj0xFigMXxxzpLBt6WFMt58%2FtwiCPBh0gr7HTlucIwqh2AUIrJtDozbK3eAW8DUIfSVWy%2Fo%2FpmIA2HGdGHQue7v5sWkD%2BTqg1hcwktfjZobeYvX2m46pV3XaqoEJ0BiMsR4LFu7a7RZawXDzqb1OKZ3BcjHQctfeWlZToHdjn4egsLzQCr4MjLHa3A7Zih1tktaeAi&X-Amz-Signature=3d1e0ca083bc8551630845133a9ca2f051aa5e8e464ce1e92f89ff79dd4a357c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUUQO3J%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqiXZCzNGsW5WDuSpchEvlG3WvgFLFWN%2F7LiWFR3hXyAiEAufINaA788G50arwA9pCo7sM4wTqbE%2FIJrgv%2FHMtZev4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsmq1v9llK%2FXkP28SrcA1Lt02hPvFs8JlGST1UgU08dwEgnQGjUT1KqU4jmDgrS74ybIWje71bpfgHsm5dYgY4oO6AW5LT3nE2YI426Ch4Ns8xbQ5SZnIYYkmk1ayMJL60W0kwmIniwfr9tz3z9lJBev0nFfxEjyPRZjhDzjb6oeaC5Yog8Z5TwhFnGdyfNhrqOKJ9tgWddzI%2F1uEKcpfVrw2ADKTvBBOY5xvCj0JxnMTQh4bmtq8MGja3R0iHnuyehAAw1Jzv%2Fr29ho6A8ESqMgs14wS4O3kjDvabJ%2FDcw2lWGSOo6CttoJfvhJ3%2FJ0brFmDAOkzDjjtGauGllfe3yuPWfnG%2B1EqFjMIWzJ%2F4a2p7x98iNPAcQrs0AXH%2FnQBWT3F6VFjivQW5HOO5I9sHkuZf4arR%2BCxR34fD9svsWNn81z9ZrCI2VF%2F7vJ3E0aeHXDbTvjteH24ObSOnAGhaEr2WItofuYEJNh%2FSigPHU5%2BkdomDUSV%2BnqIJ0ct7p2Jd7aM9l5v%2BlJfX1sZJbXFnF1retTG59yNkSPJsvADp8PoSsJ8n7aWDPN%2FLL5S24HTLITevaiXTvAR9wHuVO%2FISeBQ6T9b1q94LZejBg3Z8gclin9aP0LBkiwffs3RuEcvj3YV%2F53GyAYBEsMIKQpL0GOqUBQ6as4Th1Gwi7VLNjiCj5GVqj0xFigMXxxzpLBt6WFMt58%2FtwiCPBh0gr7HTlucIwqh2AUIrJtDozbK3eAW8DUIfSVWy%2Fo%2FpmIA2HGdGHQue7v5sWkD%2BTqg1hcwktfjZobeYvX2m46pV3XaqoEJ0BiMsR4LFu7a7RZawXDzqb1OKZ3BcjHQctfeWlZToHdjn4egsLzQCr4MjLHa3A7Zih1tktaeAi&X-Amz-Signature=6925b89ce9857beeec0e599e4e6a2609220730b1e3761ca54cc717ac73e6191b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
