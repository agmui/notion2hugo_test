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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLTWRE6E%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDSpRUs4cKGOzTuEq19HOXyEvM%2FE04sYvAya021OVpR6gIgE%2Fdh%2FDyjwIHGNjx1bzdLrI6YjrUvXbgIw7LtcM8gLq0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDy2ig201tF5skm6pCrcA8VLOaG%2FI4YWdjRyIpAoAwIH9DiSeV0Hm3A9pmLAA44i%2FTYPI4EZPpy5zg54ZdX3oQnxwRssDasmZXkIznqpe4P9ZE0fOFg0zQQiFOFuHaY7OxCXqndBB%2Fm8dd0xQA%2Bq%2FtJd6fmstC%2FSc3P107SbMFEiCI0qbojcMz8z89pgkrOOwSZQZpMkmdV8zPuEOBaU2o%2FZO9emPFfDcphWGzefp%2FAQ85173M9yN1CCnLfdH%2B1pPIOK8ExpbHQTO01QWZdD5Z%2Btd%2FtT79rscD%2FppQvtqroQphWS%2BokO7iKEd1deb8bdG2Njcu5pXX9%2F0%2FKOMyhbsTRgjJFRvK%2Fmb%2BSEPhWb4CwcOP8WtPBGkZ4CgVGxvsS%2BGEaBRK%2FM6mRjUfxhEx80sSo5Pe%2B7fZlgf2gWhFGm0YyA9jNSA9qHbF5FydroFF8dioR8Y3rTtFNr6XFPTHdSCVQDVexjVfX0rrjK4ovYx2BVCknJWPEtGc6Ds3hDZnpYG3%2FswMStkJl41QtlW%2BlLfv9as8xxpiaHjOK0huVZTdigEMq66eZTDx3m%2BO53rFpZWKRCtvO7qhfjOITLO7r2QITRfSviqh%2F243M94qe4BCTHi3BqcF7efROrUMEnmgfyvOiMWWWOTUN4vKCFMJb7uL4GOqUB%2F1YxGdD%2BbEtPMQWsyMlNyyM9PpApfslkl1X%2Ba4XndtgMMUEt5Lk%2BTBJNpL8PyIfwmDprAwH7qnu8xCrm0Huw%2B2cVXl0z9CUO3Xlee7Ak9InoIDdVy5bJup5LnRpcPUwDhfL6mu0q%2B2u8w8xe3odZmGbspK33I4HrjLVrvVDipvYjgOT%2BS0EODKACVAfDUiVtuoSqXrnW42wZ1Y%2FWJMHirZL0re1K&X-Amz-Signature=d339f7613ec18c6516fbdaa2957ce5df141619a57b6e4b4344df197ad3fa06aa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLTWRE6E%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDSpRUs4cKGOzTuEq19HOXyEvM%2FE04sYvAya021OVpR6gIgE%2Fdh%2FDyjwIHGNjx1bzdLrI6YjrUvXbgIw7LtcM8gLq0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDy2ig201tF5skm6pCrcA8VLOaG%2FI4YWdjRyIpAoAwIH9DiSeV0Hm3A9pmLAA44i%2FTYPI4EZPpy5zg54ZdX3oQnxwRssDasmZXkIznqpe4P9ZE0fOFg0zQQiFOFuHaY7OxCXqndBB%2Fm8dd0xQA%2Bq%2FtJd6fmstC%2FSc3P107SbMFEiCI0qbojcMz8z89pgkrOOwSZQZpMkmdV8zPuEOBaU2o%2FZO9emPFfDcphWGzefp%2FAQ85173M9yN1CCnLfdH%2B1pPIOK8ExpbHQTO01QWZdD5Z%2Btd%2FtT79rscD%2FppQvtqroQphWS%2BokO7iKEd1deb8bdG2Njcu5pXX9%2F0%2FKOMyhbsTRgjJFRvK%2Fmb%2BSEPhWb4CwcOP8WtPBGkZ4CgVGxvsS%2BGEaBRK%2FM6mRjUfxhEx80sSo5Pe%2B7fZlgf2gWhFGm0YyA9jNSA9qHbF5FydroFF8dioR8Y3rTtFNr6XFPTHdSCVQDVexjVfX0rrjK4ovYx2BVCknJWPEtGc6Ds3hDZnpYG3%2FswMStkJl41QtlW%2BlLfv9as8xxpiaHjOK0huVZTdigEMq66eZTDx3m%2BO53rFpZWKRCtvO7qhfjOITLO7r2QITRfSviqh%2F243M94qe4BCTHi3BqcF7efROrUMEnmgfyvOiMWWWOTUN4vKCFMJb7uL4GOqUB%2F1YxGdD%2BbEtPMQWsyMlNyyM9PpApfslkl1X%2Ba4XndtgMMUEt5Lk%2BTBJNpL8PyIfwmDprAwH7qnu8xCrm0Huw%2B2cVXl0z9CUO3Xlee7Ak9InoIDdVy5bJup5LnRpcPUwDhfL6mu0q%2B2u8w8xe3odZmGbspK33I4HrjLVrvVDipvYjgOT%2BS0EODKACVAfDUiVtuoSqXrnW42wZ1Y%2FWJMHirZL0re1K&X-Amz-Signature=c102223da715e60abbe7a39730a7464e48a9b2b3c567f434bc02d2b60f47c53c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
