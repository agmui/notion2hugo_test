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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZECJSM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPlzONw3BUiBCraJOVW4mDcFj5HGDdAvuqgbRLJfimygIgJzua04YQOTvFr4%2FwIXiMbxc3jGzkeP9Z3WthR7Yoc2Aq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHh4zKVh2RyNjn6ScyrcA%2FMkoJaEF%2BrlpTnVWpYqYpv8q%2BhAUSa%2BJLNK%2FjYJCCM%2Fpb9d3koKNyDRLWDaWifzSJjV21hNxwKT%2FoUgVv6geMkd65gVfT%2B0EwKnwxF6lNHHM0zPj2fcSENNZM4y2x7gu10YSR4aatFlCeGiK4Lnok0hocmAk1BIzvAIIlPjAnEIr4SPuSwJl6jvmP5bBlncmSbE2dEhTQoPRfTO14eLv7AJBrqhE2cCuEcdY3b5OMfyxU1LGwnVvRoswH7IcBgqBeFU02%2FRUcsNzZN3x1%2FRtgmErobZFvtAZIom6EpHIN5h5phfpg0MMH2cQgWlTrA2TNeK49n5HaE6cYRt3Fep3CqzyY2ziVaY%2B7tXKpiQ6Z8sHZ%2FUNAsFE%2F77TFZkYuLoWQpKbZb7szSvRRXvXsX8pYylzlUctP5hx2B7fF69U4OXmTQJlxe0UCzzXMwU4Er4E19TXUOKSj7gVrPYSs81ffh8M3nr4tqy9MZ3ofWOt4dYss1JTHS9MtEZz2Jk26osQ49x7udcl%2BSpUSY4DrJbZVbtmWZzg0XLDFg%2FE%2Fq4imNHzAb%2FUsKx40q6coctsXD9xyjaPgC9yVy67jTd3xX1thxDcSB7VH5gAkd3mrv%2FQ%2FpLa554rfMbtASuMRSNMNXGgMAGOqUBDtzfutyUOoSoNhednPSc2lhptr1Xy1DujkUuxcAV3xokMw%2FpxFKj3AvpItuUyntiHDsZ6MOZLPgmLKT2zmGHh0EeKRt8CYR6izmik9cxlYe3JO8a%2BS%2FztFBTVyf2iY%2F%2BCKsmF1wMAMdsqOjw75%2Fx3F6PczwJCkev1zxj8ubrXRu3zThoTnB399l3xBS0WmN31dkPib%2B3%2Blm3dFA%2FjzdMwBB0xkI3&X-Amz-Signature=fd7c1548173c90ea934a5d5341bfbbca02b82b114a2b1598f419662dbac727ac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZECJSM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPlzONw3BUiBCraJOVW4mDcFj5HGDdAvuqgbRLJfimygIgJzua04YQOTvFr4%2FwIXiMbxc3jGzkeP9Z3WthR7Yoc2Aq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHh4zKVh2RyNjn6ScyrcA%2FMkoJaEF%2BrlpTnVWpYqYpv8q%2BhAUSa%2BJLNK%2FjYJCCM%2Fpb9d3koKNyDRLWDaWifzSJjV21hNxwKT%2FoUgVv6geMkd65gVfT%2B0EwKnwxF6lNHHM0zPj2fcSENNZM4y2x7gu10YSR4aatFlCeGiK4Lnok0hocmAk1BIzvAIIlPjAnEIr4SPuSwJl6jvmP5bBlncmSbE2dEhTQoPRfTO14eLv7AJBrqhE2cCuEcdY3b5OMfyxU1LGwnVvRoswH7IcBgqBeFU02%2FRUcsNzZN3x1%2FRtgmErobZFvtAZIom6EpHIN5h5phfpg0MMH2cQgWlTrA2TNeK49n5HaE6cYRt3Fep3CqzyY2ziVaY%2B7tXKpiQ6Z8sHZ%2FUNAsFE%2F77TFZkYuLoWQpKbZb7szSvRRXvXsX8pYylzlUctP5hx2B7fF69U4OXmTQJlxe0UCzzXMwU4Er4E19TXUOKSj7gVrPYSs81ffh8M3nr4tqy9MZ3ofWOt4dYss1JTHS9MtEZz2Jk26osQ49x7udcl%2BSpUSY4DrJbZVbtmWZzg0XLDFg%2FE%2Fq4imNHzAb%2FUsKx40q6coctsXD9xyjaPgC9yVy67jTd3xX1thxDcSB7VH5gAkd3mrv%2FQ%2FpLa554rfMbtASuMRSNMNXGgMAGOqUBDtzfutyUOoSoNhednPSc2lhptr1Xy1DujkUuxcAV3xokMw%2FpxFKj3AvpItuUyntiHDsZ6MOZLPgmLKT2zmGHh0EeKRt8CYR6izmik9cxlYe3JO8a%2BS%2FztFBTVyf2iY%2F%2BCKsmF1wMAMdsqOjw75%2Fx3F6PczwJCkev1zxj8ubrXRu3zThoTnB399l3xBS0WmN31dkPib%2B3%2Blm3dFA%2FjzdMwBB0xkI3&X-Amz-Signature=178a0accf663911e5ed95c5b54fd218d03185048653f6472439bf3a668505b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
