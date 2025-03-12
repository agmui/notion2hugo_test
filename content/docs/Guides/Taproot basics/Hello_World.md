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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPSDETH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJFMEMCICR0pKhfvi%2BizmebodJ%2BG9vzVm5K2E5gaiSPQYbWPl8xAh8VOPy%2BkW2v4KyB5YGx0mjqHQo6%2FuYZtGoP7Rzrhp6vKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcJV30jNFbldX%2B8BQq3APhnWaDkxIzXSs5b5ikqtP1Jfjzgsrd1Ve3F18LeGzcB2DOVEVuelSe420Be9jczd9GZw5daLvFNX2FRjP%2Bd7Q%2FKZRfnqv18SC8%2BmlNwTnDieXOf3rkTr6D4an0XKVFSROR70OiHBvmytJPy2kRzafBQC8xKCwBcXSF5RVo6Py%2FUDu8m7jwaUgXIm2EuX7HVbq0EwRSVg0R%2FPp1C98kXomwScZFSr00ogzRZkD5uCFik2q0vlAIzu7NnjQDjJNSHyHOYQkJszV16Ql8UN%2F6%2F7C%2BfF%2BS%2BAz7ZKxxcOHzLaeqI0PTa33eDu2%2FiS%2B2VQL4WDhTw%2B5ZPg4mK2QNcza9Bycf24sUg7pDqch1bQfiHYvy90RHtRMT%2FNLFSsDJ2Gs5tuvwhqwdYz4jQKh%2F8Wf3m4H2bD7fZgebqjjHM3M17m%2BI0AzPBLoPu713UOtnXSlC%2FIpaAH3wt20xzDrjBY4g%2FVCZXDx3Yktc3xU8ooi4fxhNgzlswra9G1ItKoSU3ON3fT1toBUJA2X2BbXX9Zexm1ckoUBkHn5gmqVGCvwTKte9gfZRRPXV1vF2mDEikz2HkytNccW3d%2FsHA55%2FPKLOsxenh7a5pjGMeS4%2FFluIXjrcc7%2BE6lCiDs9Kj2LjrTDvvcW%2BBjqnAWcVCuuBNzMVNDzG%2F6e62c5z97gw%2B7QIbSp5WVhniRHy0mazMSbCY6OPkv%2F7ndsvIVx1qUesLwijwuVRT77SreX6wIujwff9ZKhMbiFg%2BpY3VTzr%2B8nO7CstSeJSpE%2Fh8IeCMxpQQpH0Vgp1nDQeYhF2L%2FiK0Is0X7I%2FAHmo0GvgyPQ3qunj3mtKjV2BBSveTfUIHKpyE8Yg7wu5XrceateNP67xiaWC&X-Amz-Signature=3cbb40dc5a88e853f5dc59e2398d49286cd19dd8c6b97f44d9dea8683d4ba89d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPSDETH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJFMEMCICR0pKhfvi%2BizmebodJ%2BG9vzVm5K2E5gaiSPQYbWPl8xAh8VOPy%2BkW2v4KyB5YGx0mjqHQo6%2FuYZtGoP7Rzrhp6vKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcJV30jNFbldX%2B8BQq3APhnWaDkxIzXSs5b5ikqtP1Jfjzgsrd1Ve3F18LeGzcB2DOVEVuelSe420Be9jczd9GZw5daLvFNX2FRjP%2Bd7Q%2FKZRfnqv18SC8%2BmlNwTnDieXOf3rkTr6D4an0XKVFSROR70OiHBvmytJPy2kRzafBQC8xKCwBcXSF5RVo6Py%2FUDu8m7jwaUgXIm2EuX7HVbq0EwRSVg0R%2FPp1C98kXomwScZFSr00ogzRZkD5uCFik2q0vlAIzu7NnjQDjJNSHyHOYQkJszV16Ql8UN%2F6%2F7C%2BfF%2BS%2BAz7ZKxxcOHzLaeqI0PTa33eDu2%2FiS%2B2VQL4WDhTw%2B5ZPg4mK2QNcza9Bycf24sUg7pDqch1bQfiHYvy90RHtRMT%2FNLFSsDJ2Gs5tuvwhqwdYz4jQKh%2F8Wf3m4H2bD7fZgebqjjHM3M17m%2BI0AzPBLoPu713UOtnXSlC%2FIpaAH3wt20xzDrjBY4g%2FVCZXDx3Yktc3xU8ooi4fxhNgzlswra9G1ItKoSU3ON3fT1toBUJA2X2BbXX9Zexm1ckoUBkHn5gmqVGCvwTKte9gfZRRPXV1vF2mDEikz2HkytNccW3d%2FsHA55%2FPKLOsxenh7a5pjGMeS4%2FFluIXjrcc7%2BE6lCiDs9Kj2LjrTDvvcW%2BBjqnAWcVCuuBNzMVNDzG%2F6e62c5z97gw%2B7QIbSp5WVhniRHy0mazMSbCY6OPkv%2F7ndsvIVx1qUesLwijwuVRT77SreX6wIujwff9ZKhMbiFg%2BpY3VTzr%2B8nO7CstSeJSpE%2Fh8IeCMxpQQpH0Vgp1nDQeYhF2L%2FiK0Is0X7I%2FAHmo0GvgyPQ3qunj3mtKjV2BBSveTfUIHKpyE8Yg7wu5XrceateNP67xiaWC&X-Amz-Signature=f543cdce8896228bd75483ff7b3fad980c589d6b18fe244106d96899dfe7561e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
