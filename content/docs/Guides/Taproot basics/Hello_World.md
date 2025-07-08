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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPILMMDK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxENZA5w6Q1%2BykdMmfo%2BhCLVQb%2B5vxiKSeV4fXnJvRBAiEAnYMHjsCBQHmxeWyE1lFTzGoGS5lvzWp9%2B1%2FQMcYpTfcqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDART%2FotJbFNo%2B2WzIircAwH0D6J3BaCPjGQ1DlaLuefvvM2jiVzfjZ4a4EJsLjNWsMWG8vNbfOkHZe4v7%2BLrSixg2Hd3AFugrxE6zOhJWRK6SC2D3AvPwUCVyFLe55ohTW4M0beoJqD%2BO9aOksZPG%2BreGHJkeLt5PqDhcpRs6MoU3vFzG1uC%2BdpM32LZj18nSoL0X9VnnxTL3MxZbVLH8N6cypD11h31AXFeCGDcY3xBRMjpOYo0OYh0AXDuXYArnGMku8bdsiqTArfy2NcBnioo3fgjuA7FoL4j6WbLgMJ3x1kVZvNflFIYGc7ge7LPejm427kONZwz8ddHoxZn0nH8zqQoZQd00P%2BA7bb8NqKCbkUlnyD6fbjvdrL9fcYBR2Il5j2BFCRnS020%2Bne1EzElxuLpdFe9dq7LRVArM5%2Fgial%2B6JGj%2BCx3d7R8ZYmftXMHXBAIoEPHzqUzNlMWtDYxtjxnG%2B2fQF39AaQeSUDU8XvTNA0beIETHoplj398Myg3FT3DL4gI9YMFadiZaqxTrtSKGjBCMIfMtc%2FITNDsRDHkZ7cPfumvQ9cT913Eqi39qfdPcxkMGJnRsWLwb8HBEyZW92Ble%2B%2BCevpRqKPuXCFY9IUV8P1P2WjYIXugheVQpEmYRt2B4pdJMKKmtMMGOqUBCNKMvbCwrpEVmVsrGLhYSF64eVsB%2BLD4knYXVW6iDxGnfPaUjhngWJniScwwtP3YXlOCNuKMgGsvTmH%2BSIrsREUGHmbtxMzbXNLRNjbjH%2B5faGlTHjDufDiLSUzNNV27czXF%2B9EreqEbAl1UVtiyho5p1Qrn1k7%2BGESd%2FveRixrFRSpVcRfVZm8awV2CfQ4YBPTD3ycg%2F16eIyaRwd7Xh4%2BiDW0o&X-Amz-Signature=cee8676f2a1798d2fcb1dffbd33627db98dae5acca12bcea9f12fe7c5b8fa27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPILMMDK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxENZA5w6Q1%2BykdMmfo%2BhCLVQb%2B5vxiKSeV4fXnJvRBAiEAnYMHjsCBQHmxeWyE1lFTzGoGS5lvzWp9%2B1%2FQMcYpTfcqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDART%2FotJbFNo%2B2WzIircAwH0D6J3BaCPjGQ1DlaLuefvvM2jiVzfjZ4a4EJsLjNWsMWG8vNbfOkHZe4v7%2BLrSixg2Hd3AFugrxE6zOhJWRK6SC2D3AvPwUCVyFLe55ohTW4M0beoJqD%2BO9aOksZPG%2BreGHJkeLt5PqDhcpRs6MoU3vFzG1uC%2BdpM32LZj18nSoL0X9VnnxTL3MxZbVLH8N6cypD11h31AXFeCGDcY3xBRMjpOYo0OYh0AXDuXYArnGMku8bdsiqTArfy2NcBnioo3fgjuA7FoL4j6WbLgMJ3x1kVZvNflFIYGc7ge7LPejm427kONZwz8ddHoxZn0nH8zqQoZQd00P%2BA7bb8NqKCbkUlnyD6fbjvdrL9fcYBR2Il5j2BFCRnS020%2Bne1EzElxuLpdFe9dq7LRVArM5%2Fgial%2B6JGj%2BCx3d7R8ZYmftXMHXBAIoEPHzqUzNlMWtDYxtjxnG%2B2fQF39AaQeSUDU8XvTNA0beIETHoplj398Myg3FT3DL4gI9YMFadiZaqxTrtSKGjBCMIfMtc%2FITNDsRDHkZ7cPfumvQ9cT913Eqi39qfdPcxkMGJnRsWLwb8HBEyZW92Ble%2B%2BCevpRqKPuXCFY9IUV8P1P2WjYIXugheVQpEmYRt2B4pdJMKKmtMMGOqUBCNKMvbCwrpEVmVsrGLhYSF64eVsB%2BLD4knYXVW6iDxGnfPaUjhngWJniScwwtP3YXlOCNuKMgGsvTmH%2BSIrsREUGHmbtxMzbXNLRNjbjH%2B5faGlTHjDufDiLSUzNNV27czXF%2B9EreqEbAl1UVtiyho5p1Qrn1k7%2BGESd%2FveRixrFRSpVcRfVZm8awV2CfQ4YBPTD3ycg%2F16eIyaRwd7Xh4%2BiDW0o&X-Amz-Signature=33437317e8cb6291d7fe7d42b31e87f0437ad3319c83f9777e1d25c5872dd25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
