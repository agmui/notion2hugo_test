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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L67Z6JF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD%2F7xbPAMpcoij040CJ4QalBjy9Xfajhuc0ko8Nl0oWAgIgWAg9mhAeb1Kpla5z37i0ehks4CyCh20hD61XX535wgoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDD%2Fx7i%2B%2BK30rGYagTircAzZQn9VJ1Q%2Bb%2F2nN%2BC7hJgH6WfeoCCQS4ozISLFgB%2BatoLb1gF%2B%2FcwUOxZO%2BDw5l4Q8Q%2B9RlPuLjBt4FLSes0tvgxtl30wtPS7mDfjBNoLyBws%2F9IpsAg2Y2Zt4iMsYJNOVz6GIB%2F%2BNmc4qQsN5q6MSB0l17B3ZxS41i0QQ1ErW%2FPCR3SR0shoF5QB1HLD9ZJXMlTwlUjhhJUIfUuw1ieOIBuuKzslEE9UAJQTr3BJe0AknfGscmzV5DeGKB1QX9uKi0EmYz1Ewb1hrricfktyeBIjRGAsYXH5Dd0p%2BfIpGA1bAn7O94917utX%2BY92NrspR510OPaJK4g4zaO7nPaDGpewyb%2Btr%2FJ05X3juF2QH0i96c7iN3ffn9dUnq8w6igkrAFz02tvDEQkzQCnxpF1zs75dfZ19e8RmNG7l7DWa5BmmcV8rQh7g%2BQLWdcv1c%2FY2mFlxvRKJKr312%2FWoMpOGVFuNNRiOOPeIAzI1pD4YhSfe26NYQ%2BQhNWfEdNfcmHY2RFwB7M21dfghc8N2dyeWBovMn7jbzsNwTMvp6wG%2B%2FhFMS9Zuvpg3%2BMqRqTdxuxr3pUfT2L0%2FwLxzIPWU7xJToj49djO4h1kExtm55D2AZH4m5aMijOEqWshUjMIrn%2B8EGOqUBsvjBTSY2R9T4AV1VCc9bsI6MTgawh2OU3sRH%2FOEKC6DcXMu7bgh933eUQpTghIp7fEL1peJTY6PdH8CNGjv5cJ57WF51ZlnPTin0vzHzEPO3sku6hXBcHtA6XGiEiaqZkq0VranBRaYHGZoTkFt064COPz2SupJ%2B0VoVO5nudrq0p%2FWG%2BMzJCMxjm%2B2JG7C1y%2BG%2B8nmBudcJ3MoP9CE8ANTPe5F2&X-Amz-Signature=339f0c4a1e65142fd2c96c16a5781b898fe00f7dd06d888f4af47906910f6f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L67Z6JF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD%2F7xbPAMpcoij040CJ4QalBjy9Xfajhuc0ko8Nl0oWAgIgWAg9mhAeb1Kpla5z37i0ehks4CyCh20hD61XX535wgoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDD%2Fx7i%2B%2BK30rGYagTircAzZQn9VJ1Q%2Bb%2F2nN%2BC7hJgH6WfeoCCQS4ozISLFgB%2BatoLb1gF%2B%2FcwUOxZO%2BDw5l4Q8Q%2B9RlPuLjBt4FLSes0tvgxtl30wtPS7mDfjBNoLyBws%2F9IpsAg2Y2Zt4iMsYJNOVz6GIB%2F%2BNmc4qQsN5q6MSB0l17B3ZxS41i0QQ1ErW%2FPCR3SR0shoF5QB1HLD9ZJXMlTwlUjhhJUIfUuw1ieOIBuuKzslEE9UAJQTr3BJe0AknfGscmzV5DeGKB1QX9uKi0EmYz1Ewb1hrricfktyeBIjRGAsYXH5Dd0p%2BfIpGA1bAn7O94917utX%2BY92NrspR510OPaJK4g4zaO7nPaDGpewyb%2Btr%2FJ05X3juF2QH0i96c7iN3ffn9dUnq8w6igkrAFz02tvDEQkzQCnxpF1zs75dfZ19e8RmNG7l7DWa5BmmcV8rQh7g%2BQLWdcv1c%2FY2mFlxvRKJKr312%2FWoMpOGVFuNNRiOOPeIAzI1pD4YhSfe26NYQ%2BQhNWfEdNfcmHY2RFwB7M21dfghc8N2dyeWBovMn7jbzsNwTMvp6wG%2B%2FhFMS9Zuvpg3%2BMqRqTdxuxr3pUfT2L0%2FwLxzIPWU7xJToj49djO4h1kExtm55D2AZH4m5aMijOEqWshUjMIrn%2B8EGOqUBsvjBTSY2R9T4AV1VCc9bsI6MTgawh2OU3sRH%2FOEKC6DcXMu7bgh933eUQpTghIp7fEL1peJTY6PdH8CNGjv5cJ57WF51ZlnPTin0vzHzEPO3sku6hXBcHtA6XGiEiaqZkq0VranBRaYHGZoTkFt064COPz2SupJ%2B0VoVO5nudrq0p%2FWG%2BMzJCMxjm%2B2JG7C1y%2BG%2B8nmBudcJ3MoP9CE8ANTPe5F2&X-Amz-Signature=82683c3f29a3ab10b45343b860ee3262c7f43ab09774f82e59094a6373db9219&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
