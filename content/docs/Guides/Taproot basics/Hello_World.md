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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTL2BSSL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD2oUu4V2yzfzRe7mNwRNlp6tg5XMVB7wsWwqSm%2B0WZ5wIgAoyt9LCJeZlikulFutQOSGQ%2FTt1%2BNeL9YTPnArzufEUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIo1f2RNWKeq%2F92eZyrcA%2FvpAU4jNnfwIKrYqEB%2FDDndiiHFC8YyWys2chjCwnXsq5kp3tT%2FRwuk5PUlQzgaDhDNxBis8rrCOE8FCs0ks0GbD10iu%2BVyekZP4ByQgSeHRxSbBbN5BVpNEm%2FhTdQLMOqpAwvP65WWKGrZKeWYiN%2Bkk6juB%2F3F%2FDfzP4L2OZct8tNqVeRdEgvfPtUBlX1%2FxuFfeybmnUSnwou1WcAhJYAKrc2qoRXrVMyypdkI0Wo31GWsvMsrtwcxNzIT0EXe4D1jz6ngGctp55uv6AUsPgCyu5lQyx6q93BrfXiRdek9W8n%2F0SPQlSlB543ZhLvtMLttlLa%2Fd5r3H4Q8K%2BCY0uxRZeCQFWYJ30K%2FwUHNekJ5zmWEdpkOe%2BnjhFKWftH%2FZIjMNYBvT%2FHi%2BZguGhVcGTCZnS9xYVzj8MwzvmF%2BtcY%2BPuUYhXetLxZ4WrLa%2FuCuuYrTrVGX6vcN%2FMnUW6UVE%2BIZ3woRglBbkW4Vc0huhYlG3Aow%2FL4xO2cL5vztlcCeDuzmiKbSBPUiDuNEXGdvo5Jj7XJ%2BB%2FUkbV3pHCQ4Un2Zj9AkVPNE7XAjfhrK9vQDwVDFw%2Fkh8iKcD5qTJrcbCOqbDLx4diKBEBBuRuqU0iWbun1fXyRAVlK7qTv%2FMKDw88IGOqUBWHxhLt2PAnVSBMHw14%2FDezJUX3pXC1AtE9g9q5hVObvsUPPV4ppmFmvJRaMrcio9lRTuZF4Iyeu3HJW7MFQ56HVsKlbXH2DelXNRuOoUxPoeTQY%2B2TxkKPDMDo2qXOO2o5jdDmZFPbissM6H0KjD6rd5dUPUav9%2FM0WzSt7jVSlBdpSpGIpYt2QBpMrftOiUb1mykn9i2deXora%2FR3VPcoKH8pZW&X-Amz-Signature=a3a4b22378ffce451e3bb7ec126d0eff0ab8ff3c69ecaa4be749cff776d6ced9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTL2BSSL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD2oUu4V2yzfzRe7mNwRNlp6tg5XMVB7wsWwqSm%2B0WZ5wIgAoyt9LCJeZlikulFutQOSGQ%2FTt1%2BNeL9YTPnArzufEUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIo1f2RNWKeq%2F92eZyrcA%2FvpAU4jNnfwIKrYqEB%2FDDndiiHFC8YyWys2chjCwnXsq5kp3tT%2FRwuk5PUlQzgaDhDNxBis8rrCOE8FCs0ks0GbD10iu%2BVyekZP4ByQgSeHRxSbBbN5BVpNEm%2FhTdQLMOqpAwvP65WWKGrZKeWYiN%2Bkk6juB%2F3F%2FDfzP4L2OZct8tNqVeRdEgvfPtUBlX1%2FxuFfeybmnUSnwou1WcAhJYAKrc2qoRXrVMyypdkI0Wo31GWsvMsrtwcxNzIT0EXe4D1jz6ngGctp55uv6AUsPgCyu5lQyx6q93BrfXiRdek9W8n%2F0SPQlSlB543ZhLvtMLttlLa%2Fd5r3H4Q8K%2BCY0uxRZeCQFWYJ30K%2FwUHNekJ5zmWEdpkOe%2BnjhFKWftH%2FZIjMNYBvT%2FHi%2BZguGhVcGTCZnS9xYVzj8MwzvmF%2BtcY%2BPuUYhXetLxZ4WrLa%2FuCuuYrTrVGX6vcN%2FMnUW6UVE%2BIZ3woRglBbkW4Vc0huhYlG3Aow%2FL4xO2cL5vztlcCeDuzmiKbSBPUiDuNEXGdvo5Jj7XJ%2BB%2FUkbV3pHCQ4Un2Zj9AkVPNE7XAjfhrK9vQDwVDFw%2Fkh8iKcD5qTJrcbCOqbDLx4diKBEBBuRuqU0iWbun1fXyRAVlK7qTv%2FMKDw88IGOqUBWHxhLt2PAnVSBMHw14%2FDezJUX3pXC1AtE9g9q5hVObvsUPPV4ppmFmvJRaMrcio9lRTuZF4Iyeu3HJW7MFQ56HVsKlbXH2DelXNRuOoUxPoeTQY%2B2TxkKPDMDo2qXOO2o5jdDmZFPbissM6H0KjD6rd5dUPUav9%2FM0WzSt7jVSlBdpSpGIpYt2QBpMrftOiUb1mykn9i2deXora%2FR3VPcoKH8pZW&X-Amz-Signature=c36af0fbfffd43899cc663f4dea4b919e0923fa5e1834fb90976c5d3b3bac36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
