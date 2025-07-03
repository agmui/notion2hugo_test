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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS3I2LD6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDbeIptDY%2F162t9sJ7QNoFCPL%2FGpOp%2B9o5%2BqFanyXA%2FdgIgD98aaueqdj5vhfsdSlDvorFjoPMbJnjOcPrxqVH%2BaWcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHjaCELt1w7l0NBAGSrcAyIXfE%2B9HUF9n0P1pD9kYK5qFsxJ2WtGfY58ZkdcprCBtUow8loP7NQFvnyhCQ8UKnMyDb%2BBK6keG4p1nfCUFx6zI6LSZcojXu%2Fn6wCnJWyJ0DXbfBTqVlQL1rhX5A6MVFvdRrRMbm1FIDH%2BY5%2BDvpkWRuP8gLtAVq0wlXEFzUjDcjbOx9vLBUzn3986qDF59MG8cpjFV5XJpVmYsRdHKYxImKf2qwVd5fbnA3nNiwi%2FhDg4wTDUY7pRuDVvF9V4fHvNr1plDQsUoLGxJQnxSPYl9PzWm8BzRgN%2BTRG5YChsIe4Qgr2Yorl13OmXmDfN5YAFpaCSSt2dZ3QbiJETokokd1336pJL%2BQrpoU3k%2FCpl0Ct7bdjGcBA1Wdk68YybDoU3P8yFaNpfGdRQp5TdnBu05Otm3eqkMjaGkU56rNPY6ZgKjZlJrhOKmtw1%2FOC3nGqhe518bif3OgafEwTHYSHEnBHZ1Fgvy9SZYqrPcW4OGhR7SYlP%2Be%2FZyzXimu%2FI3051U4ezPoasHnAsQxGoWoTl%2F66AlAZhW1RuNk12vmhauEDJgUIv%2Ff9iykkh71ctKQj03R6wRbgqqNW1rZGOMDqFPitJpbb3bHqniZabZy68U6fS1T85TdOc8kzoMPCNnMMGOqUBDZVtnd1F8GMVThp1DUzv3XSZEPKH%2FEgEdgQYFe35BXSGOFK%2BX%2FohwzoUbrxnlieiIq4OX3%2FGLOPi%2BF6x0zlW5LkZ5GkiI51FeblRTeY6Kh6OlpPO7h4gEY6lb8b10p9V3hL2HZYbbPaJkcxsznDx%2Fmjzp7TzHdBgcwNB1Fjg7%2BGQXyR3SflabkK5chDsZ4rNqZajIVOQYjTKwe0guH82K2idiWDK&X-Amz-Signature=7871da931d97e4c1ba55ec61d3bbd88ddb02f582ddd3631af5ef6cd3740bb7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS3I2LD6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDbeIptDY%2F162t9sJ7QNoFCPL%2FGpOp%2B9o5%2BqFanyXA%2FdgIgD98aaueqdj5vhfsdSlDvorFjoPMbJnjOcPrxqVH%2BaWcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHjaCELt1w7l0NBAGSrcAyIXfE%2B9HUF9n0P1pD9kYK5qFsxJ2WtGfY58ZkdcprCBtUow8loP7NQFvnyhCQ8UKnMyDb%2BBK6keG4p1nfCUFx6zI6LSZcojXu%2Fn6wCnJWyJ0DXbfBTqVlQL1rhX5A6MVFvdRrRMbm1FIDH%2BY5%2BDvpkWRuP8gLtAVq0wlXEFzUjDcjbOx9vLBUzn3986qDF59MG8cpjFV5XJpVmYsRdHKYxImKf2qwVd5fbnA3nNiwi%2FhDg4wTDUY7pRuDVvF9V4fHvNr1plDQsUoLGxJQnxSPYl9PzWm8BzRgN%2BTRG5YChsIe4Qgr2Yorl13OmXmDfN5YAFpaCSSt2dZ3QbiJETokokd1336pJL%2BQrpoU3k%2FCpl0Ct7bdjGcBA1Wdk68YybDoU3P8yFaNpfGdRQp5TdnBu05Otm3eqkMjaGkU56rNPY6ZgKjZlJrhOKmtw1%2FOC3nGqhe518bif3OgafEwTHYSHEnBHZ1Fgvy9SZYqrPcW4OGhR7SYlP%2Be%2FZyzXimu%2FI3051U4ezPoasHnAsQxGoWoTl%2F66AlAZhW1RuNk12vmhauEDJgUIv%2Ff9iykkh71ctKQj03R6wRbgqqNW1rZGOMDqFPitJpbb3bHqniZabZy68U6fS1T85TdOc8kzoMPCNnMMGOqUBDZVtnd1F8GMVThp1DUzv3XSZEPKH%2FEgEdgQYFe35BXSGOFK%2BX%2FohwzoUbrxnlieiIq4OX3%2FGLOPi%2BF6x0zlW5LkZ5GkiI51FeblRTeY6Kh6OlpPO7h4gEY6lb8b10p9V3hL2HZYbbPaJkcxsznDx%2Fmjzp7TzHdBgcwNB1Fjg7%2BGQXyR3SflabkK5chDsZ4rNqZajIVOQYjTKwe0guH82K2idiWDK&X-Amz-Signature=664801c0bde2df50912eebc644a0676f48352f12cdec73f3befbe2b02744c100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
