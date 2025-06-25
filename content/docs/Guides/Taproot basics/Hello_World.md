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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKRLJ22%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGfpVMohpNgC1VRN%2BslOwHV0v%2B%2FpNEn7adZADHnfUR7DAiA8cVbmp9U8pwy0GjeV8G1D4en7p8TQlouaAnc8c0QdUir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2D%2FqEMvOJiW3fBXbKtwDESd4nlr4xkWsns2%2F1pSXI79ajTSVbmGlSTonLjVFBm2Vh2qtDElBCL2X8GvW%2BwUFxbvsMeyVMfF0aDbVvhA1hVmlj80fWS4%2BMOOm15x9hVK7y7NGCHWzMVa2NRMM%2B%2FbwTrIEjdXIoAtWLQ%2BnyG1xfr%2FWelw9GtcwXfP6%2FtQ%2Ficz%2BeQ1qhfc082%2F9rByuzpvkWlCMIvKTiATB19Bo3YiGM3V6QUsdHt3mPPeGWqGfP%2FrdgRgUpbEFgQcndjxGj9GNYRfq259OejN3ZkquHZ9HhRSm0oVaWtl72FXlKCGc2xLU1lVg7fDEtE2aKssCgQaUe%2FQRcWbsCPDEvVNZ12AOHQOVRfGRYe5Xa0sB2q9LcLdOHGUMa0XxmfAG8p5zS4wZtmV7HReKbxmmqmxcnvAEqffUYzXVbfeYVYdZQC5q%2FX0wPheAwYM9MsC0NP5nlTHQHny8AFNOHN03zcpceq1IeL78H763oKtbG7plhPL7qwqypXA7XwQ0qORx2%2B53CUOGVuj%2BRfWxYy5ZBEhmQiMw8VSlhT%2BUaaxldxh3Mhqocjf6IG2f8NqipRGMAAjXFFxWctX4yBgVpP8oqVOV08DgOnTwUeCSkZwyELYCzX9WdNyu%2F91nU%2BR42RIul1Uw1IzxwgY6pgGEBVvhOrMbmq45X3Dmg6skrc3CG85qsYQGv58VfJH7LpPtAYjiaubhAvIpEMu7MBrSODktHFrbk%2Bhf8%2FUp712VNXILmvsNsyffGNCh9wmwMBfEZudMS3oBACmHJhWJfHxjfJron7GFNehMln74d3TlviA0LQ%2FUZjQiU562OasOwPy%2B7k0JK9i2awt9H7hl4Q0gXOT5Pg5MXhf2GG2whSFYLk1haGyM&X-Amz-Signature=4efce33c2e9116a16aa8586e56aa3ac21478a9f316858d228176a68d35a2860c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKRLJ22%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGfpVMohpNgC1VRN%2BslOwHV0v%2B%2FpNEn7adZADHnfUR7DAiA8cVbmp9U8pwy0GjeV8G1D4en7p8TQlouaAnc8c0QdUir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2D%2FqEMvOJiW3fBXbKtwDESd4nlr4xkWsns2%2F1pSXI79ajTSVbmGlSTonLjVFBm2Vh2qtDElBCL2X8GvW%2BwUFxbvsMeyVMfF0aDbVvhA1hVmlj80fWS4%2BMOOm15x9hVK7y7NGCHWzMVa2NRMM%2B%2FbwTrIEjdXIoAtWLQ%2BnyG1xfr%2FWelw9GtcwXfP6%2FtQ%2Ficz%2BeQ1qhfc082%2F9rByuzpvkWlCMIvKTiATB19Bo3YiGM3V6QUsdHt3mPPeGWqGfP%2FrdgRgUpbEFgQcndjxGj9GNYRfq259OejN3ZkquHZ9HhRSm0oVaWtl72FXlKCGc2xLU1lVg7fDEtE2aKssCgQaUe%2FQRcWbsCPDEvVNZ12AOHQOVRfGRYe5Xa0sB2q9LcLdOHGUMa0XxmfAG8p5zS4wZtmV7HReKbxmmqmxcnvAEqffUYzXVbfeYVYdZQC5q%2FX0wPheAwYM9MsC0NP5nlTHQHny8AFNOHN03zcpceq1IeL78H763oKtbG7plhPL7qwqypXA7XwQ0qORx2%2B53CUOGVuj%2BRfWxYy5ZBEhmQiMw8VSlhT%2BUaaxldxh3Mhqocjf6IG2f8NqipRGMAAjXFFxWctX4yBgVpP8oqVOV08DgOnTwUeCSkZwyELYCzX9WdNyu%2F91nU%2BR42RIul1Uw1IzxwgY6pgGEBVvhOrMbmq45X3Dmg6skrc3CG85qsYQGv58VfJH7LpPtAYjiaubhAvIpEMu7MBrSODktHFrbk%2Bhf8%2FUp712VNXILmvsNsyffGNCh9wmwMBfEZudMS3oBACmHJhWJfHxjfJron7GFNehMln74d3TlviA0LQ%2FUZjQiU562OasOwPy%2B7k0JK9i2awt9H7hl4Q0gXOT5Pg5MXhf2GG2whSFYLk1haGyM&X-Amz-Signature=92dab26f4ceaed9ee59a0c5878a6f735aaa404b30a2be6f8087a5e0baf79ea71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
