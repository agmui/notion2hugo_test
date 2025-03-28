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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ7RVAW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHVpc0ft9Z2mVsjdhJBmrBMTD03989i%2Fo1KNFK3922GAiBGOmPQybdxzH6JgHYXIL2tRk7iZ%2BGwu8dURe3TKTD8vCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMHmAYl%2BGDCCsDs3DcKtwDHesWgjc%2BKfvExXQQly1w0y8HEHoI25JWIZHTpHHtwhe5dp7QCWRSoKbFOlz6a7AHr7LF1%2BlFdi7wJb8O08r1%2Fz6JpMqsz8tv4VJyWS1B0P9W%2Bxabmo520%2FhYsFtTjG8T9%2B8gHS4dt7skf5AMsyYUzcKsM0q9H8rpXyGHvj8pNK3NcjSBPKL%2F9SL1ESxGuVNu2Z%2BwuIcFZfvO%2FXuuiwD%2FNW2w2FSJyNdYnFwZrkXDD74xtNR9D%2FdLTP9T4acpEyMHSXQ9%2FjxMDjyK8y8IP7PueiHAaku5ORxfA%2FtiacOk57Mkjy3hgsmJwJOmJdxuz10eqxrGfcZjTEYkNqUeN4k%2FHt0KWXK8odX%2FTgcnyazR0KfTwTvJvs2jl39oM11UHg2L7Nm7%2FdsuuAYYS7fTw9mAjPLIxJsclYin20YenUA2gmVnh%2BNwAfsTsVA%2BWg68gZIgHyBtVDMjsCSepZbYHd2gWwP%2F4om%2FwQQAIaa6rQwuESkw9nqeaeSnuAz2vMdJcnE%2B8dI21L%2BnAg77Kl4%2BaOADNvHC6S%2FJed%2FlW5nuC%2BZcvFEhGsQexvuRXwZmsgrFEVbiHVA3CT6xDszH%2BbjCAfwDs9b4kw9anBYupr1JVia7%2FpyjChqn7Q4z0fDGlnYwwtqXvwY6pgHsD8PblGF7Wwtw9Tlt%2BRsokQxV7dxLr6voXZS4Kp6iO1v2zVMD2ntfUZ6b4YRgMPMdzhm3A2oICc%2FgEouq7ciqc1LPCqIE4AwfDpgt4FmlZ52x6g17fv%2FYui5K%2BOyFQOJkuQfRdIrlrTA8KJTAPutO3hBWaMGsQad5CEqMYYriZhkYbIIUuL4mBRtsvblDMtpNbLCTMHjy3C2LNeOQIy3fNyQfg8Hn&X-Amz-Signature=bfb3492142b9b761c12fdd80de28e8e62e2a0159813ee848cdbbf7b129371b62&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ7RVAW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHVpc0ft9Z2mVsjdhJBmrBMTD03989i%2Fo1KNFK3922GAiBGOmPQybdxzH6JgHYXIL2tRk7iZ%2BGwu8dURe3TKTD8vCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMHmAYl%2BGDCCsDs3DcKtwDHesWgjc%2BKfvExXQQly1w0y8HEHoI25JWIZHTpHHtwhe5dp7QCWRSoKbFOlz6a7AHr7LF1%2BlFdi7wJb8O08r1%2Fz6JpMqsz8tv4VJyWS1B0P9W%2Bxabmo520%2FhYsFtTjG8T9%2B8gHS4dt7skf5AMsyYUzcKsM0q9H8rpXyGHvj8pNK3NcjSBPKL%2F9SL1ESxGuVNu2Z%2BwuIcFZfvO%2FXuuiwD%2FNW2w2FSJyNdYnFwZrkXDD74xtNR9D%2FdLTP9T4acpEyMHSXQ9%2FjxMDjyK8y8IP7PueiHAaku5ORxfA%2FtiacOk57Mkjy3hgsmJwJOmJdxuz10eqxrGfcZjTEYkNqUeN4k%2FHt0KWXK8odX%2FTgcnyazR0KfTwTvJvs2jl39oM11UHg2L7Nm7%2FdsuuAYYS7fTw9mAjPLIxJsclYin20YenUA2gmVnh%2BNwAfsTsVA%2BWg68gZIgHyBtVDMjsCSepZbYHd2gWwP%2F4om%2FwQQAIaa6rQwuESkw9nqeaeSnuAz2vMdJcnE%2B8dI21L%2BnAg77Kl4%2BaOADNvHC6S%2FJed%2FlW5nuC%2BZcvFEhGsQexvuRXwZmsgrFEVbiHVA3CT6xDszH%2BbjCAfwDs9b4kw9anBYupr1JVia7%2FpyjChqn7Q4z0fDGlnYwwtqXvwY6pgHsD8PblGF7Wwtw9Tlt%2BRsokQxV7dxLr6voXZS4Kp6iO1v2zVMD2ntfUZ6b4YRgMPMdzhm3A2oICc%2FgEouq7ciqc1LPCqIE4AwfDpgt4FmlZ52x6g17fv%2FYui5K%2BOyFQOJkuQfRdIrlrTA8KJTAPutO3hBWaMGsQad5CEqMYYriZhkYbIIUuL4mBRtsvblDMtpNbLCTMHjy3C2LNeOQIy3fNyQfg8Hn&X-Amz-Signature=e9cfc6938218c30bda5717e58c68140d7b217a5474a4e5f79afa27410f389af2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
