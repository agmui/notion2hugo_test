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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VW2D66M%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCKTHCJFwIFzMYJk0Md4RsfhMgUsE6EDwHbz6EpUBB46gIgFN%2BjvrMmsRaviH0fIiZ08pRCFX%2BKTUYiKAgPoxKGiGEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDPjrOVwDmS5jYhMUKCrcA4wQ1wZ36ngcMEU41On%2BHkPcAV130%2BpL1wUQFzUaeLJBeT5YGs9oh7x1Vd3b3X0ZUIJvCOSui%2FUU4Bo6x5Swn9qpegga81yjuMRKJ69i%2B2TxBjyD03UFGJZz7%2BABbJov%2BLHShNm5Ih5Pn5n%2FOA5WMD8QHKLaD0k9XvGdZspN2vo7FAHCYB3V4GMOSUMLTpYME%2FvuBAhn%2FYipxahU%2B4wMiW3VgK5qtpeJ8NmXEKiD9jhMKlIr1GejWpFvllDq%2B286yktKfcMIfM5NegHNBDxSIx21r0q7xwj7u7XI8MPCKF843xw8WeexUBM93PfCbEHJ6crDTyQP3zKQiexTlz7%2F1%2F9BAQYen9BbXqsimkKDQoB%2FwnLnQuvqBHmh4QvDWkA4DCjuMqgGN7PDUvgoZoYyFO3GtkuRbDOCHjK5JB3PtqF4kQmumeGBv%2BL4ETgw92vKbVeWGWLl160gFakMCAn%2BmR4MiaSAiF7ofaHEOy%2FRBbnYX3Dwi8zOIraz0BGZqJ2Xl0eCu8bAUr2MpRUeztxYRqn%2FpLGdvKzI6imUABjkZ2lKmb%2BWCwIVNYzWY8MfkH9UnEuMyavd4aCTsrztphhkKLcA9gdtmGoDhT3WMWXXYBxYz%2BHTrhXRMR8Iul7YMJjzsr4GOqUBRUC0QxgAGlx3lR6g2vjFvj4e42DZPGqs4Kt8C8AQXryJHhwDUv3RcJrUZOPMo1AWYQDXM6u%2FPh6Mqba8nyb3NuzysUpFv82SjMQhGOs3KhECckskavD1oA6KKMCoK1ZOjJC4Wj85crKJwDyQ4iWIRLjjK%2BY3yTMGi80uKzJH2T3CmSEDxPCSC%2FXoaJivm0Ip%2F6mt%2BITZ0ajaKEXqdi%2FJ0AHp51Ca&X-Amz-Signature=380b16cd7911304d5bbdae86472510649f6a9de89ba339f8664f86c8b0adc0bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VW2D66M%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCKTHCJFwIFzMYJk0Md4RsfhMgUsE6EDwHbz6EpUBB46gIgFN%2BjvrMmsRaviH0fIiZ08pRCFX%2BKTUYiKAgPoxKGiGEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDPjrOVwDmS5jYhMUKCrcA4wQ1wZ36ngcMEU41On%2BHkPcAV130%2BpL1wUQFzUaeLJBeT5YGs9oh7x1Vd3b3X0ZUIJvCOSui%2FUU4Bo6x5Swn9qpegga81yjuMRKJ69i%2B2TxBjyD03UFGJZz7%2BABbJov%2BLHShNm5Ih5Pn5n%2FOA5WMD8QHKLaD0k9XvGdZspN2vo7FAHCYB3V4GMOSUMLTpYME%2FvuBAhn%2FYipxahU%2B4wMiW3VgK5qtpeJ8NmXEKiD9jhMKlIr1GejWpFvllDq%2B286yktKfcMIfM5NegHNBDxSIx21r0q7xwj7u7XI8MPCKF843xw8WeexUBM93PfCbEHJ6crDTyQP3zKQiexTlz7%2F1%2F9BAQYen9BbXqsimkKDQoB%2FwnLnQuvqBHmh4QvDWkA4DCjuMqgGN7PDUvgoZoYyFO3GtkuRbDOCHjK5JB3PtqF4kQmumeGBv%2BL4ETgw92vKbVeWGWLl160gFakMCAn%2BmR4MiaSAiF7ofaHEOy%2FRBbnYX3Dwi8zOIraz0BGZqJ2Xl0eCu8bAUr2MpRUeztxYRqn%2FpLGdvKzI6imUABjkZ2lKmb%2BWCwIVNYzWY8MfkH9UnEuMyavd4aCTsrztphhkKLcA9gdtmGoDhT3WMWXXYBxYz%2BHTrhXRMR8Iul7YMJjzsr4GOqUBRUC0QxgAGlx3lR6g2vjFvj4e42DZPGqs4Kt8C8AQXryJHhwDUv3RcJrUZOPMo1AWYQDXM6u%2FPh6Mqba8nyb3NuzysUpFv82SjMQhGOs3KhECckskavD1oA6KKMCoK1ZOjJC4Wj85crKJwDyQ4iWIRLjjK%2BY3yTMGi80uKzJH2T3CmSEDxPCSC%2FXoaJivm0Ip%2F6mt%2BITZ0ajaKEXqdi%2FJ0AHp51Ca&X-Amz-Signature=e6d34318a6ca037f647fe7ee872d74b36727da4b52cbe050d102176cc5f0e582&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
