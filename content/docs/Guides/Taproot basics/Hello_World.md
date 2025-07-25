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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NLX5IRB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIEhFv8%2B3OBXLHtDbpyjuZ1%2FZfjzLc%2FPE3lSMyMrbhyRNAiEA7EXqyEa4Zb1PrajIwvT1rz02AH%2BVhTeEIkUS0Y4nmg4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJQ7VtuHPGr1sK10vCrcAyefEPik9TctJHaM7jTdYRTpU6oWxrKvuYLvH37j3nzNjm1GHLL48hvC8gj6X0y6WiRflHXW7JqEx2OZT4AD9%2F8h9FfDHfdwWui2G5jX6op6yiG%2BguLWAUSuNei%2FlC7HcDe2tLYm2FJ3ACVp4sm5tw85Uwf6OQW9c2TX0R2dUW45vDGwczqViksu9ouRedO3tX5rGcDilsikjCIP8fLJnpVkrOTtBPpVpDVmOD4qnXjiuz%2BOzsF3liEthY7EqDdEDcki3ezL1MwMRlHHLWn8LIMAsTvZDRDk5i7NgSIc14fk9iqPW4MLeooTrHsuh%2F5LkHJ8wSJVN0qmFMtE2AtX59%2Bjip5%2BW%2FAKqeYBBTncCKyKlS9KgZSoCHE0EbrQQ7wTar6%2FJJ1OICgLou4oXhysghj7hupdBsvn4%2FdnP3XpfnCfktwH2pyoeSa2b4LWdnJVupVqCjbs9L0WGBcBEOiBY%2FwGKQayZp56G9PRdWBZvgWFVRukAz%2Bl6WmSLF3byuh8%2BS53D%2F2UwqgfcC%2BkhYJgI8h1N6nBdxK8IVJagcxW3KqcCE5r5veopH5KKyYJJrYDfl5H3%2F6tITABK5DSqQbEB94Qzj9Aezi%2BX6D2eHhprl6uoQ497WfT8QXGLhA2MJGGj8QGOqUB70KdBwR5HXEeUIAG2paDXuYP1lnH5rjf7CtHjbqV%2BHfiTRzKWDtLJEloYNrxtHJLcjLhDmEkqTnmJ0CAZCxoBT%2B5fgSRDvMff%2Fw7LqfrZS37DbTH80ZoSsmjtv7NMp6KhGSInF6EFNXDb2LumfoY0nPU8F4cNSkaIKLG42gUsOJG00wFyTdFClEPMXYrN%2BMziiwTl9i9rABCCRKL2uPvUuD%2B5xl0&X-Amz-Signature=96bb69e6ac40640d790122e10cbac7075fcad48a7053568c1264bd245b807c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NLX5IRB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIEhFv8%2B3OBXLHtDbpyjuZ1%2FZfjzLc%2FPE3lSMyMrbhyRNAiEA7EXqyEa4Zb1PrajIwvT1rz02AH%2BVhTeEIkUS0Y4nmg4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJQ7VtuHPGr1sK10vCrcAyefEPik9TctJHaM7jTdYRTpU6oWxrKvuYLvH37j3nzNjm1GHLL48hvC8gj6X0y6WiRflHXW7JqEx2OZT4AD9%2F8h9FfDHfdwWui2G5jX6op6yiG%2BguLWAUSuNei%2FlC7HcDe2tLYm2FJ3ACVp4sm5tw85Uwf6OQW9c2TX0R2dUW45vDGwczqViksu9ouRedO3tX5rGcDilsikjCIP8fLJnpVkrOTtBPpVpDVmOD4qnXjiuz%2BOzsF3liEthY7EqDdEDcki3ezL1MwMRlHHLWn8LIMAsTvZDRDk5i7NgSIc14fk9iqPW4MLeooTrHsuh%2F5LkHJ8wSJVN0qmFMtE2AtX59%2Bjip5%2BW%2FAKqeYBBTncCKyKlS9KgZSoCHE0EbrQQ7wTar6%2FJJ1OICgLou4oXhysghj7hupdBsvn4%2FdnP3XpfnCfktwH2pyoeSa2b4LWdnJVupVqCjbs9L0WGBcBEOiBY%2FwGKQayZp56G9PRdWBZvgWFVRukAz%2Bl6WmSLF3byuh8%2BS53D%2F2UwqgfcC%2BkhYJgI8h1N6nBdxK8IVJagcxW3KqcCE5r5veopH5KKyYJJrYDfl5H3%2F6tITABK5DSqQbEB94Qzj9Aezi%2BX6D2eHhprl6uoQ497WfT8QXGLhA2MJGGj8QGOqUB70KdBwR5HXEeUIAG2paDXuYP1lnH5rjf7CtHjbqV%2BHfiTRzKWDtLJEloYNrxtHJLcjLhDmEkqTnmJ0CAZCxoBT%2B5fgSRDvMff%2Fw7LqfrZS37DbTH80ZoSsmjtv7NMp6KhGSInF6EFNXDb2LumfoY0nPU8F4cNSkaIKLG42gUsOJG00wFyTdFClEPMXYrN%2BMziiwTl9i9rABCCRKL2uPvUuD%2B5xl0&X-Amz-Signature=76a8475b1d8d466e466eb0d371320e1b62e3d230d20b6e1b6d38d5d2cae8c6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
