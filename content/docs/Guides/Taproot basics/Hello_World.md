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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVRK65N%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDnHmL00XjFAVn3EGWT62MEJF3uSPOOWyBAKbTk6u5jYgIhAMLOjBm1toZ%2BIc5%2BPlUuAoARy%2FgFgNk%2BM%2FYWZd06lV3xKv8DCGcQABoMNjM3NDIzMTgzODA1IgxhMHV7qr6Avzv03OAq3AOoSF4%2B1EJJ1BodcsTYXcSqwpwYdhqzInvAwQ4G2XbGDU6Er%2B6qfahV99v0ID%2B20S32oY%2Bknc5bM3rl7aUtIrqh4nAd4sBuXE2QHJ6jjZcJZ53a78Hwkn8%2FQ2pHSpNzeMxOxwjehiuRXjwGCIxnO11jx%2FwmP8wnfbqnj1M46RYm4t68Tt2NptbZLTMEcM0B0xfzFUeUCRsj2IThi4g2NdNi362p3bNsVnzdRCP26%2B3mxazWP4cXuSFzkLOfhc9ybZr2aFvEDaADwhNzoDxpeW44PTdiz1UBnsqwv1e2vNmhWmhXMFY8p1awEER%2BJx%2B5UqgEwRMmYrzRSLjcJxH6%2ByrFCb4hAWy3JRzIRoq4U7hv2t34baUs4yY0gXC2rbujP2Q%2FQMPCDjoxBIgJ2p0u46dkKSBelvJvE0%2FdYLHI3mGkF9GQel0OieTiI6x%2FdYSSC2yS6qMnluABw5wS4VsgeHBvAJNrXvUPUcmMoHIEFmczyXfDf3Pkc5LT1e0eKJxOMYOm2N%2FWbnEf5RPCCoi%2BRR6%2FNQ%2FUpfKk%2FygAbcaipxBLleVbHWXHxmKGbGDakACf8d2WcwSiK4UX%2BgnWIzrTiQvrNttNe8T14E8e7iS0q4Z5S%2Bm%2Fb0vtg8vVotGEwzCK2P7EBjqkAVNnH%2FcBOW3RfnXm94PCoCqRq%2BIfXnx%2Fc5wYACKBnnlCVqP8H8SbFRbtgcrs5%2B6jBLZGvvEKPzexXakgpTroa%2Bofkzido1ny%2FSiKcVqdqG%2B6frTfBBlIrV%2FU5zAj74lqpJ%2B40gJfeUsEQmNyk3lzDl5a1L36SWejkDUbw0YrTxbBdY3b5vMWXsxpAQJC7a9JD9ePEkUPsnltckyL0YBiv%2BEs8w%2Fk&X-Amz-Signature=785766cea85a981b9dec5ca54bea787806c067af4510df61a34ebe62baf3f56b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVRK65N%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDnHmL00XjFAVn3EGWT62MEJF3uSPOOWyBAKbTk6u5jYgIhAMLOjBm1toZ%2BIc5%2BPlUuAoARy%2FgFgNk%2BM%2FYWZd06lV3xKv8DCGcQABoMNjM3NDIzMTgzODA1IgxhMHV7qr6Avzv03OAq3AOoSF4%2B1EJJ1BodcsTYXcSqwpwYdhqzInvAwQ4G2XbGDU6Er%2B6qfahV99v0ID%2B20S32oY%2Bknc5bM3rl7aUtIrqh4nAd4sBuXE2QHJ6jjZcJZ53a78Hwkn8%2FQ2pHSpNzeMxOxwjehiuRXjwGCIxnO11jx%2FwmP8wnfbqnj1M46RYm4t68Tt2NptbZLTMEcM0B0xfzFUeUCRsj2IThi4g2NdNi362p3bNsVnzdRCP26%2B3mxazWP4cXuSFzkLOfhc9ybZr2aFvEDaADwhNzoDxpeW44PTdiz1UBnsqwv1e2vNmhWmhXMFY8p1awEER%2BJx%2B5UqgEwRMmYrzRSLjcJxH6%2ByrFCb4hAWy3JRzIRoq4U7hv2t34baUs4yY0gXC2rbujP2Q%2FQMPCDjoxBIgJ2p0u46dkKSBelvJvE0%2FdYLHI3mGkF9GQel0OieTiI6x%2FdYSSC2yS6qMnluABw5wS4VsgeHBvAJNrXvUPUcmMoHIEFmczyXfDf3Pkc5LT1e0eKJxOMYOm2N%2FWbnEf5RPCCoi%2BRR6%2FNQ%2FUpfKk%2FygAbcaipxBLleVbHWXHxmKGbGDakACf8d2WcwSiK4UX%2BgnWIzrTiQvrNttNe8T14E8e7iS0q4Z5S%2Bm%2Fb0vtg8vVotGEwzCK2P7EBjqkAVNnH%2FcBOW3RfnXm94PCoCqRq%2BIfXnx%2Fc5wYACKBnnlCVqP8H8SbFRbtgcrs5%2B6jBLZGvvEKPzexXakgpTroa%2Bofkzido1ny%2FSiKcVqdqG%2B6frTfBBlIrV%2FU5zAj74lqpJ%2B40gJfeUsEQmNyk3lzDl5a1L36SWejkDUbw0YrTxbBdY3b5vMWXsxpAQJC7a9JD9ePEkUPsnltckyL0YBiv%2BEs8w%2Fk&X-Amz-Signature=ab1172751490b0d57406a4891b24305939076d117d74f12ecd680941fcd2ece6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
