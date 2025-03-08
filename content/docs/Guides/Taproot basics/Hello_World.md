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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NBP2FO6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCwayVVni0VL%2Ft%2BI4bVJ38j6%2FNnLBvVp3fp7hfd39D%2F2QIgOcDUsWxnGw%2BzDVeaSGuiwBc1b%2FoaN2EX%2FLWUy0bCU6Yq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG7GWOnBcm4MvMarMircA4ktvtvIFd9ec6yHLSPbDpWdh1JHd8%2F%2FGm8apGivaCQHiCxzA8QOU56hNNVryQ1mf%2BUVeqCdS1PHW2ubtd0La%2FSXBXOdpLB89ay0YWgqLOIWAIX4b0oDn8Q6y2py2m6X0PLKo1nS6jpXoRNRzNSgcGWIeq03jZtMsHQVfqlyQQzVothWi0t%2FJ21UGQQBR5UcGlmpQDihLvLOrK8NBG8CD75wXmCqQMOPAKMo7gKO4RRmFOHT6THgNQlqCqP55b%2FV0JlMjgID7NibyUogxq3CI1uTwbStN8d2xewfDI3UZi3k79N9r%2B5gt7y9DE3GkN48mi74ZEycWP4kPmT1lCedjTCffv9RgIU741I9VXY4aH3TLNYnDE4oqToA82D%2B%2FNfBMPH7o3%2FzYkwhmA38XE%2Bc7XNPfpJKgdfI67exoF3QGUENO90LI8loTJ6bOJuPkdkMriAblFa3bmn4rpYUIRcR9Gax%2FUvqqvLtqs3d6mG0yNvQWeytnCaFSKwH4Ub3Do30SiUQWIgll8nweZfBu10tlPHM7wSJoPFbyU%2F5ZMFq3cy%2BSP1qM70LsvVkW6VKjE8DZsvmECd5y6clipgyfFQ9GfgakQ9jRgENKM3P48GFoH5hz1nprdWhRpjIgWKbMLLgr74GOqUBXWZYbo7uN2VevLlFVaHisxEby8lR1z48JuMimq1H06Qodod3N8TosZGcw%2BRIrdnCzOP%2Bn0TK0XWR9f2pfugRD3pB7dsDszYHGWOwldK7ovQav%2BMK2XuRhJ25sOWZDtWS3RE2UcNH7uvenv1wNMyfNAjduXSEd%2Bi0JvirLWK2%2BZWxXSNhI5VUKhYGOmQpY%2BkFfTK557i8%2FbDU3EeMRxk8O8136uvq&X-Amz-Signature=cb062348032b09ecba59f9be53824632a107a2db3325b3b72ccbc05482c5b66d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NBP2FO6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCwayVVni0VL%2Ft%2BI4bVJ38j6%2FNnLBvVp3fp7hfd39D%2F2QIgOcDUsWxnGw%2BzDVeaSGuiwBc1b%2FoaN2EX%2FLWUy0bCU6Yq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG7GWOnBcm4MvMarMircA4ktvtvIFd9ec6yHLSPbDpWdh1JHd8%2F%2FGm8apGivaCQHiCxzA8QOU56hNNVryQ1mf%2BUVeqCdS1PHW2ubtd0La%2FSXBXOdpLB89ay0YWgqLOIWAIX4b0oDn8Q6y2py2m6X0PLKo1nS6jpXoRNRzNSgcGWIeq03jZtMsHQVfqlyQQzVothWi0t%2FJ21UGQQBR5UcGlmpQDihLvLOrK8NBG8CD75wXmCqQMOPAKMo7gKO4RRmFOHT6THgNQlqCqP55b%2FV0JlMjgID7NibyUogxq3CI1uTwbStN8d2xewfDI3UZi3k79N9r%2B5gt7y9DE3GkN48mi74ZEycWP4kPmT1lCedjTCffv9RgIU741I9VXY4aH3TLNYnDE4oqToA82D%2B%2FNfBMPH7o3%2FzYkwhmA38XE%2Bc7XNPfpJKgdfI67exoF3QGUENO90LI8loTJ6bOJuPkdkMriAblFa3bmn4rpYUIRcR9Gax%2FUvqqvLtqs3d6mG0yNvQWeytnCaFSKwH4Ub3Do30SiUQWIgll8nweZfBu10tlPHM7wSJoPFbyU%2F5ZMFq3cy%2BSP1qM70LsvVkW6VKjE8DZsvmECd5y6clipgyfFQ9GfgakQ9jRgENKM3P48GFoH5hz1nprdWhRpjIgWKbMLLgr74GOqUBXWZYbo7uN2VevLlFVaHisxEby8lR1z48JuMimq1H06Qodod3N8TosZGcw%2BRIrdnCzOP%2Bn0TK0XWR9f2pfugRD3pB7dsDszYHGWOwldK7ovQav%2BMK2XuRhJ25sOWZDtWS3RE2UcNH7uvenv1wNMyfNAjduXSEd%2Bi0JvirLWK2%2BZWxXSNhI5VUKhYGOmQpY%2BkFfTK557i8%2FbDU3EeMRxk8O8136uvq&X-Amz-Signature=b6b91f9542876856156929e7f322bac97c4d0936271a27f5b4510b15f1bce666&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
