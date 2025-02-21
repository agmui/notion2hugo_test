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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T43F6S6X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbzH4o5o3JnA1D5A7IaWwwejNdbzXkuXbkogbcApayqAiEA2Mw3JbuQiiUNLntXu%2BVctzuYxNxOYnpa374RLygHP%2BwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl33wvnqtlRN6N9cSrcA1U5x%2FGoEpT577LDGLpFcxNh1Euzh9XiNjN9zpNWcXGpt3DCuUSleSTi3RRBxsuF%2Fwwq9XVeTR15SS%2BC9E9JMZ0cnsqYp6RKyok9M65mp78BoKHlo14br4uKQJziS2hjjGsjz2TtAoNHjatCNFOY%2FEZH4ZeKS5WuqZoQYbA1tFsyd68HVC8f0DqNggZMgnUis0L7S6jaEoB0SRqkO0DgUHwWnr5wxkIsYVgae9nB4Ocfmq%2FPdzVbpDFZLEppI%2BshzGi%2BTSYJhfx%2F0pyJV3%2Bmv%2BVtLV9HMQecYgH%2BwxC9rUd6u3UFr9pdniTuAaEEm0WmbxHR4E2tRRdS4bQswkJuRPPG8MXFZdo36EwTCa5FLVqcowFqSFV3k1UBEwRBLG2DGF6LtqgZu8%2BZWjDVbrnG3LntkJ2L8STnYnjOkiWi4KjSL8lQ3q%2FDd20Q7%2FKQY4o7L2mBPjp3vxdDYbllLl1oNEyk5pX5UYe65gv%2FgjHVXT5P7fkcANXOoDNwaLUA9puq6yScqRY1q2SeCNbexFF0sE%2F4UP3ZSycpsRJ1u%2FinYz%2BIfp3Y9NHVl6N2XQsw%2BzSNuWcUsDJHJR8WVXkA%2FjwCHIsvQXToFz8Z0IbNXKlbRSLXNP04%2FGHR%2FpzTCH19MPLZ470GOqUBnzvmHQp694PLUp4dLKK5kUcmlPAIAHzNl0ALPOjva3XlITagIy2Tu8TBU9EvufZzvsnHGf8dN61brWtn2ne48gyBsVxLWeQxHwzKUO1Ufg0DaRkND4L348DnIZoFGfI2bRGPhkJZbEiL4BlqdpNP5ivg2MDvxYGjOOW58p4r6QfUMsoMkZUyfwZbcfrtVNGqo%2BDQQrh6DryJ89BKT7X5S9bOnyNr&X-Amz-Signature=3f1c3dee53ab6535204313cfdd0fadece37694acded96024a54304d72ed1ac57&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T43F6S6X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbzH4o5o3JnA1D5A7IaWwwejNdbzXkuXbkogbcApayqAiEA2Mw3JbuQiiUNLntXu%2BVctzuYxNxOYnpa374RLygHP%2BwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl33wvnqtlRN6N9cSrcA1U5x%2FGoEpT577LDGLpFcxNh1Euzh9XiNjN9zpNWcXGpt3DCuUSleSTi3RRBxsuF%2Fwwq9XVeTR15SS%2BC9E9JMZ0cnsqYp6RKyok9M65mp78BoKHlo14br4uKQJziS2hjjGsjz2TtAoNHjatCNFOY%2FEZH4ZeKS5WuqZoQYbA1tFsyd68HVC8f0DqNggZMgnUis0L7S6jaEoB0SRqkO0DgUHwWnr5wxkIsYVgae9nB4Ocfmq%2FPdzVbpDFZLEppI%2BshzGi%2BTSYJhfx%2F0pyJV3%2Bmv%2BVtLV9HMQecYgH%2BwxC9rUd6u3UFr9pdniTuAaEEm0WmbxHR4E2tRRdS4bQswkJuRPPG8MXFZdo36EwTCa5FLVqcowFqSFV3k1UBEwRBLG2DGF6LtqgZu8%2BZWjDVbrnG3LntkJ2L8STnYnjOkiWi4KjSL8lQ3q%2FDd20Q7%2FKQY4o7L2mBPjp3vxdDYbllLl1oNEyk5pX5UYe65gv%2FgjHVXT5P7fkcANXOoDNwaLUA9puq6yScqRY1q2SeCNbexFF0sE%2F4UP3ZSycpsRJ1u%2FinYz%2BIfp3Y9NHVl6N2XQsw%2BzSNuWcUsDJHJR8WVXkA%2FjwCHIsvQXToFz8Z0IbNXKlbRSLXNP04%2FGHR%2FpzTCH19MPLZ470GOqUBnzvmHQp694PLUp4dLKK5kUcmlPAIAHzNl0ALPOjva3XlITagIy2Tu8TBU9EvufZzvsnHGf8dN61brWtn2ne48gyBsVxLWeQxHwzKUO1Ufg0DaRkND4L348DnIZoFGfI2bRGPhkJZbEiL4BlqdpNP5ivg2MDvxYGjOOW58p4r6QfUMsoMkZUyfwZbcfrtVNGqo%2BDQQrh6DryJ89BKT7X5S9bOnyNr&X-Amz-Signature=9a5f090a9e452120d215f85d03d828b10e1311ce4860183606f372da282e2f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
