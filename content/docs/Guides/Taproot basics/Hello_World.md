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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JLM6RI2%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB55Gz2lYMBpHoAsJZDSQntiyyh5%2FHyC1b3N75NaevffAiEA22635kjUhiOYe0rG%2B%2BIyuLbC2xYXUilaeh8wFAQiyssqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPPYiwK3U%2BBxNSuLSrcA0R7I9NXjwVpH2EFn4M7DWy8hR8XPK3fgMyronIbVNnIhc9QWYF2U%2FJSBrLGxPEBexkMsxj6goIKYiPAIsVCbFn5LL%2FrB5QkZT2tWRJduFtl8k%2BootNtOmAEAwTIdpsreC5FTjtTM%2BGc87dfz1BvJSk18y4XSOHa0rlLyF3c%2BtQPAadNRLIZVnfNlf5n3%2Bk9EsAbjb4fOkX62YZUcFGwE17uVQkmaTgL3Ei9Ufcpnu%2FxSFxSDZ3BjzoQKaJXVmdgUHLW1z9%2BESpehCtoCBX01SD4kzWTsQPE%2BXVU3e4ZcGoWN2nzk3CeoRDXHR%2Fs34OmL8Zle4y7gfxJ1u0XVXH8IGAuZQz1gldNfnuO2H4VVo9XOKQncf1OgLdeN5el8QuD8FF1KfAIB2iISgucgIGIHAoFGquUJ792PFmM1WyI%2BXZv3PJ7FXrvZ1qElAFFkelcO6G0rtg5lcxNXaH35tk0bP2OsNS8WHMQK9IpCnGs6MM%2FsE%2B%2B7Yzoylhxrvv%2BNlr%2FVig4t4hCiBqSrHfx1f%2BDCq1uF7pO3C25gaBSaNUsivkxfylk2Eml32Bf4nrEzimEfOFFIclfD8T3tfWj5m8v%2F0sukWZyQzsf7krhdZ1QKs0k39RjueuZgVoFCtCHMMX8yMMGOqUBYLqAvN1AlrddVCGoJ3nP2YNcSDQw%2FN7t449QEHdetjyHa6i79XEZ%2FLeAyDmsL5TT%2BY%2Fyv0jF6xZNQLfjRTjv3zVH%2Ba4J%2B%2ByeYdEv7sTW%2BpGqC36AyZOrPXOp6WyRVpxEcN32rqWLBjzN5vNqlxzrJuVOqfxmMRLLA2tShXsthtx9M7tlbuFOVgUAcFYAGimzf4i8EODo%2BUGs08kyNHEmJW49OOha&X-Amz-Signature=58ca67c70d121e353d75cb4f7e95600f36f09f569437129715f418177bde6ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JLM6RI2%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB55Gz2lYMBpHoAsJZDSQntiyyh5%2FHyC1b3N75NaevffAiEA22635kjUhiOYe0rG%2B%2BIyuLbC2xYXUilaeh8wFAQiyssqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPPYiwK3U%2BBxNSuLSrcA0R7I9NXjwVpH2EFn4M7DWy8hR8XPK3fgMyronIbVNnIhc9QWYF2U%2FJSBrLGxPEBexkMsxj6goIKYiPAIsVCbFn5LL%2FrB5QkZT2tWRJduFtl8k%2BootNtOmAEAwTIdpsreC5FTjtTM%2BGc87dfz1BvJSk18y4XSOHa0rlLyF3c%2BtQPAadNRLIZVnfNlf5n3%2Bk9EsAbjb4fOkX62YZUcFGwE17uVQkmaTgL3Ei9Ufcpnu%2FxSFxSDZ3BjzoQKaJXVmdgUHLW1z9%2BESpehCtoCBX01SD4kzWTsQPE%2BXVU3e4ZcGoWN2nzk3CeoRDXHR%2Fs34OmL8Zle4y7gfxJ1u0XVXH8IGAuZQz1gldNfnuO2H4VVo9XOKQncf1OgLdeN5el8QuD8FF1KfAIB2iISgucgIGIHAoFGquUJ792PFmM1WyI%2BXZv3PJ7FXrvZ1qElAFFkelcO6G0rtg5lcxNXaH35tk0bP2OsNS8WHMQK9IpCnGs6MM%2FsE%2B%2B7Yzoylhxrvv%2BNlr%2FVig4t4hCiBqSrHfx1f%2BDCq1uF7pO3C25gaBSaNUsivkxfylk2Eml32Bf4nrEzimEfOFFIclfD8T3tfWj5m8v%2F0sukWZyQzsf7krhdZ1QKs0k39RjueuZgVoFCtCHMMX8yMMGOqUBYLqAvN1AlrddVCGoJ3nP2YNcSDQw%2FN7t449QEHdetjyHa6i79XEZ%2FLeAyDmsL5TT%2BY%2Fyv0jF6xZNQLfjRTjv3zVH%2Ba4J%2B%2ByeYdEv7sTW%2BpGqC36AyZOrPXOp6WyRVpxEcN32rqWLBjzN5vNqlxzrJuVOqfxmMRLLA2tShXsthtx9M7tlbuFOVgUAcFYAGimzf4i8EODo%2BUGs08kyNHEmJW49OOha&X-Amz-Signature=3b7b1349b114ceb05d47e27bfd555b55a129dacd8c8e0024fd13565f5b313019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
