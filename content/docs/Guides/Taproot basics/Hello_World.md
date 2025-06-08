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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6CJI3MO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLvptvcuOYQWhoh08eTVk3Jr3QITQysTXHibZXTZ9yrwIgDJSAdDTO%2F7wonuCSNWNsbJ32wCXB9F7EQPymuOg3u4sqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzi12Gi9Oy7euya0SrcAw0rgydG7PNzCxOfhO7mg2163WcemQwwnZNjI9ysLCfBtDctlMImj2At0Eobo0KYH6BACRJOx%2F8CN3KjW04xciYdSK%2B5oj2FNuGYG4ikkY8HHAcynk0xKHgiFHkXpSMITYwEMZofxf%2FDMFKWdDNwPly9OOdU6qPBYWPavezNnIjGVCOYFo%2FQ1eoBJ7Y5YO19xM1l4MPOwef70NUVbdu22zMUH1x5q2CemXzdPIgdb5tWpmz5pfvR59dXeTptNtVudN4BVyY3o%2Fp8HG7rj%2BosxqAqGgxwZX2%2BIbEF40CPb0nOsNP0xrsFYXhz11k9QnKwD%2B4mY70zkyU%2FkfXZ%2Fd79QZrMioLOCeM2iMxpsOl0TbPC3NhIwa98mz3lxYGPh7B4RiZ3oPf5FCpkY0yDpFbWBUmPSi%2BJAIjUGO%2Fwr1sQzL2f0mEr0aOtz7L9kW7cAMp%2FvQlxF5%2BNiB%2B7nTt18bxwxj%2BHLU64KD9OV3Z0I8YbLIovlAYBNJFT01stOSGGqDxffJcypkPZUElOuZJU0TSQafbnh4CaC21rJjHtZvcOHgJnOB4y1Qxna%2BG44cpv1ImqD9zZfX7kSs%2FGfuLVl8UCPQ5ZV88mF7%2Fyn%2Bgw9xTECuMJzZLe3oo3xgt8XuYdMPrylMIGOqUB%2BL4jjD1QnNWmmK6Ltvr2rJ4IRKA6G0SUX3TZfwSWFAZmmzNMzZ4ZD83T2icHfRqFqPWeJUHokINf81MCJ1veqOHdJdH0t%2Fs6%2B%2B2olt2aeuWgTsicKF8cCo%2BEGBWcAYSyJS9tGS54reiBl4zxUwTcsTmbfg5erDEBKzYNtxutLCp%2BPE4b9V4KgCYVuJ31U%2B%2FMs%2B%2BvAmhgoJk5wXuPM0AyGcGHHlPW&X-Amz-Signature=485e1afc67f625cbc336cfea9a952bf0055f60d68174a8893a5f9cea530ad005&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6CJI3MO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLvptvcuOYQWhoh08eTVk3Jr3QITQysTXHibZXTZ9yrwIgDJSAdDTO%2F7wonuCSNWNsbJ32wCXB9F7EQPymuOg3u4sqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzi12Gi9Oy7euya0SrcAw0rgydG7PNzCxOfhO7mg2163WcemQwwnZNjI9ysLCfBtDctlMImj2At0Eobo0KYH6BACRJOx%2F8CN3KjW04xciYdSK%2B5oj2FNuGYG4ikkY8HHAcynk0xKHgiFHkXpSMITYwEMZofxf%2FDMFKWdDNwPly9OOdU6qPBYWPavezNnIjGVCOYFo%2FQ1eoBJ7Y5YO19xM1l4MPOwef70NUVbdu22zMUH1x5q2CemXzdPIgdb5tWpmz5pfvR59dXeTptNtVudN4BVyY3o%2Fp8HG7rj%2BosxqAqGgxwZX2%2BIbEF40CPb0nOsNP0xrsFYXhz11k9QnKwD%2B4mY70zkyU%2FkfXZ%2Fd79QZrMioLOCeM2iMxpsOl0TbPC3NhIwa98mz3lxYGPh7B4RiZ3oPf5FCpkY0yDpFbWBUmPSi%2BJAIjUGO%2Fwr1sQzL2f0mEr0aOtz7L9kW7cAMp%2FvQlxF5%2BNiB%2B7nTt18bxwxj%2BHLU64KD9OV3Z0I8YbLIovlAYBNJFT01stOSGGqDxffJcypkPZUElOuZJU0TSQafbnh4CaC21rJjHtZvcOHgJnOB4y1Qxna%2BG44cpv1ImqD9zZfX7kSs%2FGfuLVl8UCPQ5ZV88mF7%2Fyn%2Bgw9xTECuMJzZLe3oo3xgt8XuYdMPrylMIGOqUB%2BL4jjD1QnNWmmK6Ltvr2rJ4IRKA6G0SUX3TZfwSWFAZmmzNMzZ4ZD83T2icHfRqFqPWeJUHokINf81MCJ1veqOHdJdH0t%2Fs6%2B%2B2olt2aeuWgTsicKF8cCo%2BEGBWcAYSyJS9tGS54reiBl4zxUwTcsTmbfg5erDEBKzYNtxutLCp%2BPE4b9V4KgCYVuJ31U%2B%2FMs%2B%2BvAmhgoJk5wXuPM0AyGcGHHlPW&X-Amz-Signature=5552c29a89dcbf3174c9ebc12f8803286e9716748d281d945a924c5e6e8d9829&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
