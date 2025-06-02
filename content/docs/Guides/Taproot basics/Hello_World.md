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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNA5SOG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIH4%2Bx4A2mV%2FOLCtH6wGADxIAMOL2HXGmfWWGhhNCwgJDAiBN%2BepOtka2R%2Bqay7bhqoqPiI%2BcdYufiO7zx%2FtGbgpnVCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRplaIrXdRJFZRPqKtwD47zem6lUDChPw1U7idvcPs8VdMxkcKJWEHCd7InMSfSLvbTLAL4EuVa5%2Fz2D6NVGEEiWF8%2FVGyAPw0B7M7S6pXRaBFtLeR0ticzysa7Vf5AVM4GM5JnLTsB7kN1%2B5MEfJMsOHDIPLNA4vMcI2cghpsBdDv5eeI9RFeYVcedugpunZY1FDuUY6sJ9jX%2FrM4zxqzvdEPUEOLUFszSx7WJJGT7kP3%2Fy%2BYmq%2BV1XGDMJXEvXB37zjywN4dijjG3f1b13y8vl7dbBhBwhrLu49cHDl1HtlwZkxWCZ7Xe%2ByWhrBbGFDr5OCNd2cXv5AEBLJxO05f1T4tXpnfWnefRXQj1WSfav5YBuUgwz1ZbOikfUZF53q7aA00R%2BMpoyZoXPA5L5ea%2FhjqA0qCGb8DSMTlr%2BjmsOTksbYZur97mvB6jfBbfMO7mxBtYWpNqvxj8R9eeMz%2B%2FYA6a56HjfrIfjAgG8aQHwzbhhk%2BgNslSWt0D51x0GhM7ZtWKTJRstC9nYe6Y%2B12mrzzs8lK6OLOBFVtFXXublHFlPh686aFlZDDP8ijRpJKEJRZPnhzN%2FHsmmipzoXi0nZnTYnZdoPRvnyxUl6DDTgc8%2B%2F1F546ewvAPkR84UKtOrsUwAaKVkOJkwjNj0wQY6pgH1rccMtTuvDOGajTP6AeDOQrrYOR8VP%2BzfLVB2bBGuLmO1V%2Bwwxa6Ah6xKpGkhuSxoiAsXtocYfkDy83OTT%2BDFZnOvIiOSZFsiDTzavNXhmhXCsG%2F%2FMtISJ9jJo0cu3DCjjKj1t1Tg6LGm6Y2R5jv4deEgrP%2BjsTgzn3LOjAy4Rt7%2BW9Q0LlWSWntQdlpK9GCzBVDIpy9b%2FOrH8U2urJnizKSXLDDT&X-Amz-Signature=9c5ec0d6cf46a7af886f5abfb731deb58c56fe0038fb1948a369801fe504cbd4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNA5SOG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIH4%2Bx4A2mV%2FOLCtH6wGADxIAMOL2HXGmfWWGhhNCwgJDAiBN%2BepOtka2R%2Bqay7bhqoqPiI%2BcdYufiO7zx%2FtGbgpnVCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRplaIrXdRJFZRPqKtwD47zem6lUDChPw1U7idvcPs8VdMxkcKJWEHCd7InMSfSLvbTLAL4EuVa5%2Fz2D6NVGEEiWF8%2FVGyAPw0B7M7S6pXRaBFtLeR0ticzysa7Vf5AVM4GM5JnLTsB7kN1%2B5MEfJMsOHDIPLNA4vMcI2cghpsBdDv5eeI9RFeYVcedugpunZY1FDuUY6sJ9jX%2FrM4zxqzvdEPUEOLUFszSx7WJJGT7kP3%2Fy%2BYmq%2BV1XGDMJXEvXB37zjywN4dijjG3f1b13y8vl7dbBhBwhrLu49cHDl1HtlwZkxWCZ7Xe%2ByWhrBbGFDr5OCNd2cXv5AEBLJxO05f1T4tXpnfWnefRXQj1WSfav5YBuUgwz1ZbOikfUZF53q7aA00R%2BMpoyZoXPA5L5ea%2FhjqA0qCGb8DSMTlr%2BjmsOTksbYZur97mvB6jfBbfMO7mxBtYWpNqvxj8R9eeMz%2B%2FYA6a56HjfrIfjAgG8aQHwzbhhk%2BgNslSWt0D51x0GhM7ZtWKTJRstC9nYe6Y%2B12mrzzs8lK6OLOBFVtFXXublHFlPh686aFlZDDP8ijRpJKEJRZPnhzN%2FHsmmipzoXi0nZnTYnZdoPRvnyxUl6DDTgc8%2B%2F1F546ewvAPkR84UKtOrsUwAaKVkOJkwjNj0wQY6pgH1rccMtTuvDOGajTP6AeDOQrrYOR8VP%2BzfLVB2bBGuLmO1V%2Bwwxa6Ah6xKpGkhuSxoiAsXtocYfkDy83OTT%2BDFZnOvIiOSZFsiDTzavNXhmhXCsG%2F%2FMtISJ9jJo0cu3DCjjKj1t1Tg6LGm6Y2R5jv4deEgrP%2BjsTgzn3LOjAy4Rt7%2BW9Q0LlWSWntQdlpK9GCzBVDIpy9b%2FOrH8U2urJnizKSXLDDT&X-Amz-Signature=fa52861f718f5f84dc0868591b66bbd9e0dda2a58d1c8497efeed86f1a2c9eef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
