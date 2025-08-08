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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KMQE7QX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFkmPyQ0KqrAAMXMaSCwAgB8KPQRdDD1hWWkELIQUWkXAiEAy7%2BgYR00lugU0WcMTs7bhoW2cWa8QN21E2Ac5GdS0XUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY1yOpW%2Bp31smw4YircA0CTCa47LM7KSgTRH%2FPP1ZUSQOCGDACU5dS18c13OPYWQK1LD9gUZ3TaQB6IlNF3fZWxkZn41m0j9Ie7EcQUc6ULMr%2Fyk3ySFTRYQYxLv8R8PLGPnVSpvjEIjiZBSiGcy3ufpFhDBDV2tBE6iVmR58H0ACbrorKtkPLr%2FwJcqO2smYt1PBAds6MvE5tzsxOudG4p0lR580UgMZrxax83Qi99s5Be8ifvOkhCDJAliGDjAEcrACx5YSiYj%2B%2FtmEUcQRTMsxdXg6zLI2ONSaRbV%2FN3hw%2F2XpoMIrN5%2BVvlN2SZzGybQ%2FkCDRJhqDagP4vSx1tKr27VnuWBQYO2%2Fe95OdHTCHpdfx7fXKbBm6HifGNCeWQIXY%2FH8W5YjHIlcvHEs3VehzmyWy1plWK44Njxtx1kWlmybvz5x%2Bqmn2YWQHczf9B7bCbBY4yTBVIYC0w1Hi6Z9szFG%2FhYlVPcoioHgGsVNFcdHp3AfgU2vQwMVDISXSD0FOMXSpiHi%2FPMdz1ybWNzxlITVgTrlAoNbeh7Zj4cV94eEgIf8yoLLic8GhoPp5rHwQ4E5M2dovtDxGuBihA%2BQIcmnC9o%2B%2F26F6T%2FKAdemKDkrq5AOttr7Ic%2FilsNSAQ%2FLIeepubDczPdMPim2MQGOqUBtSdzyizp7cDRTl2ycyi%2Bf6kbKxf%2BfIJTlLRskLIa2KZq1ovj%2FXmdFSHtVtaeRAZMbVXPf%2BTfzBfEsT7WUBOxHD0QdN4GLVU5X%2BusihQ%2B4i%2FEc8JssJOIx%2Fx5PruR9YqcP4dOHX7Rr8w9xgvwezP7bwrPcjTb2rd%2Fq1wvuY7ncYAgARJOQoKT%2B0Mu5lvWpAJfFcB62czB1%2Fc%2BFpA7dY5T8y%2FNvDWB&X-Amz-Signature=a0686701b8bdfe1a1e5382976c5cce22f14e8ca13f3a58bb3c6705dd7df760ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KMQE7QX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFkmPyQ0KqrAAMXMaSCwAgB8KPQRdDD1hWWkELIQUWkXAiEAy7%2BgYR00lugU0WcMTs7bhoW2cWa8QN21E2Ac5GdS0XUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY1yOpW%2Bp31smw4YircA0CTCa47LM7KSgTRH%2FPP1ZUSQOCGDACU5dS18c13OPYWQK1LD9gUZ3TaQB6IlNF3fZWxkZn41m0j9Ie7EcQUc6ULMr%2Fyk3ySFTRYQYxLv8R8PLGPnVSpvjEIjiZBSiGcy3ufpFhDBDV2tBE6iVmR58H0ACbrorKtkPLr%2FwJcqO2smYt1PBAds6MvE5tzsxOudG4p0lR580UgMZrxax83Qi99s5Be8ifvOkhCDJAliGDjAEcrACx5YSiYj%2B%2FtmEUcQRTMsxdXg6zLI2ONSaRbV%2FN3hw%2F2XpoMIrN5%2BVvlN2SZzGybQ%2FkCDRJhqDagP4vSx1tKr27VnuWBQYO2%2Fe95OdHTCHpdfx7fXKbBm6HifGNCeWQIXY%2FH8W5YjHIlcvHEs3VehzmyWy1plWK44Njxtx1kWlmybvz5x%2Bqmn2YWQHczf9B7bCbBY4yTBVIYC0w1Hi6Z9szFG%2FhYlVPcoioHgGsVNFcdHp3AfgU2vQwMVDISXSD0FOMXSpiHi%2FPMdz1ybWNzxlITVgTrlAoNbeh7Zj4cV94eEgIf8yoLLic8GhoPp5rHwQ4E5M2dovtDxGuBihA%2BQIcmnC9o%2B%2F26F6T%2FKAdemKDkrq5AOttr7Ic%2FilsNSAQ%2FLIeepubDczPdMPim2MQGOqUBtSdzyizp7cDRTl2ycyi%2Bf6kbKxf%2BfIJTlLRskLIa2KZq1ovj%2FXmdFSHtVtaeRAZMbVXPf%2BTfzBfEsT7WUBOxHD0QdN4GLVU5X%2BusihQ%2B4i%2FEc8JssJOIx%2Fx5PruR9YqcP4dOHX7Rr8w9xgvwezP7bwrPcjTb2rd%2Fq1wvuY7ncYAgARJOQoKT%2B0Mu5lvWpAJfFcB62czB1%2Fc%2BFpA7dY5T8y%2FNvDWB&X-Amz-Signature=513ce1068333462506945c4d83c01e0988121f4e8c55d07b8a90a0c3e49b26ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
