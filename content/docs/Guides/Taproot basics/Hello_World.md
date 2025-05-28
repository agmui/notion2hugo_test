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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDO6ORC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOC3dKlckniqp621UWj2XaOG4VYKwRhgPjYTY8cMycRAiEAvSrKhcXyZZre9a5sJXDN2OgAN9cCAYUJGRsvJnalVB4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMFNHwhUjsvCbus3gyrcA46CSYMlG9q7TOxwpulzL51lAuZW1XOebmXCShj%2F8ZaakDZ40q%2BPdfzBxOCJz1kHLVcI%2FmiebBi543P3C399M%2BgDWi%2BtWNuidRORn27T0ugZVSp1Gu2XzKh2F4cXGQ0hnbLvZu0lP%2BO%2FmBugxDc7VIPB93RSkzaoQcmT1Ftie%2F5aoxoXqbIL8BsTuLguY%2BtBnnFAdNr1oGKBYD2fbBV56ZvtmynhL3a5hP5s0T9NBFYxOy9e0Y7blRbpg1y5F%2Bu7z4eHcqHx4jn6kS84wwK5KbPrmex07xv1LeGUGfGIf4qXX%2FfMbRG%2F9JW%2Fot%2Fqrqg8gsIirnClf9t2oZln5FDgcDMVGb%2BDEL%2B2DRJRVWKPo8H9YHzgYYcp7MTuliij8k5M727LCeSvd3vuGYuGw%2FxnlfHACpoeZaPe%2FMIzjZDTlat98eGCNkoDz22JulODKBKpN6C%2B%2BiXeKc8h8DcvGYC095dp1HIx7T7B%2Bkn3VPz62%2Bd82hGBR2W23cWGNg4%2FR5lQeivcJ4A7gwGKJ8XAVwGxBbUTR4yAXbebraTrmwRNEoqQDgyJKOC04TNaytoxjr4zlhWziuCC7LA%2BB6TvOu7z8U%2BCPgIdgt056l7ndZeFglFONODWE2KHPkBshd1sMMn22sEGOqUB9PmRh4G9kLtYbtzzUsl39QZDCI0OYAnOyvkChsbLGKtsEnZbFO2iosRZWU8XVh7T0s2zCB560nLiEXgIP1t3zh4es9cZ%2F1Fl%2B3FMwdTUMTC%2F%2BTHkFIcvPp%2B%2FGsu6XNBr%2Bat4QZB0pa%2B6%2FOPtCZ%2FLjSrtRxn5AvVLWgfo%2BCxitlVSDQMMeDNKcQFNIJ2Qq5PzKY9SGu6lTcPKFQ%2BwxT2g2b0i211Z&X-Amz-Signature=8811ad922d96a0233d6ad900605454562c3e60f2088d1d1c18aacb7a1777cc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDO6ORC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOC3dKlckniqp621UWj2XaOG4VYKwRhgPjYTY8cMycRAiEAvSrKhcXyZZre9a5sJXDN2OgAN9cCAYUJGRsvJnalVB4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMFNHwhUjsvCbus3gyrcA46CSYMlG9q7TOxwpulzL51lAuZW1XOebmXCShj%2F8ZaakDZ40q%2BPdfzBxOCJz1kHLVcI%2FmiebBi543P3C399M%2BgDWi%2BtWNuidRORn27T0ugZVSp1Gu2XzKh2F4cXGQ0hnbLvZu0lP%2BO%2FmBugxDc7VIPB93RSkzaoQcmT1Ftie%2F5aoxoXqbIL8BsTuLguY%2BtBnnFAdNr1oGKBYD2fbBV56ZvtmynhL3a5hP5s0T9NBFYxOy9e0Y7blRbpg1y5F%2Bu7z4eHcqHx4jn6kS84wwK5KbPrmex07xv1LeGUGfGIf4qXX%2FfMbRG%2F9JW%2Fot%2Fqrqg8gsIirnClf9t2oZln5FDgcDMVGb%2BDEL%2B2DRJRVWKPo8H9YHzgYYcp7MTuliij8k5M727LCeSvd3vuGYuGw%2FxnlfHACpoeZaPe%2FMIzjZDTlat98eGCNkoDz22JulODKBKpN6C%2B%2BiXeKc8h8DcvGYC095dp1HIx7T7B%2Bkn3VPz62%2Bd82hGBR2W23cWGNg4%2FR5lQeivcJ4A7gwGKJ8XAVwGxBbUTR4yAXbebraTrmwRNEoqQDgyJKOC04TNaytoxjr4zlhWziuCC7LA%2BB6TvOu7z8U%2BCPgIdgt056l7ndZeFglFONODWE2KHPkBshd1sMMn22sEGOqUB9PmRh4G9kLtYbtzzUsl39QZDCI0OYAnOyvkChsbLGKtsEnZbFO2iosRZWU8XVh7T0s2zCB560nLiEXgIP1t3zh4es9cZ%2F1Fl%2B3FMwdTUMTC%2F%2BTHkFIcvPp%2B%2FGsu6XNBr%2Bat4QZB0pa%2B6%2FOPtCZ%2FLjSrtRxn5AvVLWgfo%2BCxitlVSDQMMeDNKcQFNIJ2Qq5PzKY9SGu6lTcPKFQ%2BwxT2g2b0i211Z&X-Amz-Signature=c6e343f126b0b88865f3b5bd6104837e90043eba1fe09d738da1e2609242cab7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
