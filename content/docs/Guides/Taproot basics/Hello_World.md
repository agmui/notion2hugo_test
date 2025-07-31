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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKAMKNL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUnrpTi%2B8N9s8a3NDLfm3aAqCxB2WNEGEzJR%2FKN2Rz9AiEA4FxDkpeM1kGxjc1AB%2BLrkmA2kK1iPWY5Qi64Ub4Kvz0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWSHIhHqh8GEe710ircA4wxWYNCQ4fTWmZMNbCnSAWF4DZrjtlsVCtCFAur8nA15La3seaV7cvxAh4%2F5bRVRF787W298RqMwRYkma9HJJAucLmJVpv6hyTvXRgDOW6NLeo5pcXZBVbksKpybLUFvyfxhvYljzPSqppOvYN%2B62c2L%2FQKgfahyaN%2BPSyf43%2B8Nkx4379vjKU%2BABSHYb%2FgniFhnWG8%2BBgjpnDCEvI8PwdjMuoSNNo9DRdFM1ZkvK8uvBvA2ehIgMz0IXJyBptO%2FgMGhy2y4rP38INUVkt3IWZzIIR9%2FmyJXvftp%2FSy14CXvuuk7GgCIc%2BfgeGXbVBhwjZUgYNm1ZJek9RjtbQ4nJc89X8GhylPeom2bwUdsNMKA%2B6%2FoJpTEVUvQlfTad909bXQxN%2Fpcgz2eWtTAHZGh2oFsBfEOK1aZP%2BorqZ6pvVQ2BNn%2BqPTkVW4HgYnEyvhIE2Yeka7QP9Z%2Fd01mNhPwBpPZ3Dlb04FQb9j32FN%2BerREb4yHO268RRg%2BEKE7%2BhDuIl78laR8JaoGwcXfbXm3eHkD%2FPYQ1nSxNihUvy4uOlruMHFtfrMwecE%2BK56bV18qw2aFPRSgXjobY7KTvDwT6ONNBWQpM8RdtQZRlM%2FKvtHI5M3j0F6aSC0WbRJMOLcrsQGOqUBzFPnCbLHC94XtRlwibqtFHXYBI%2BlIx44bQtWjLBZmekCfhl%2Be21LT6HpuZRtCjx0mK%2BxBaQyOZsnG41aM1insL1tI3azj93i%2Bo2NL%2BnTx%2B%2FnJw0GkTAM4Vva88PF5Lnny%2BSf%2F3IRYoPMjfX6acxIuv3dCoRpYDAS%2BHkbUTJvpyycIujlJrJw7AreCGWj9PSWfX%2F8ACH%2BOZ3FE0clP9mHUsACPANx&X-Amz-Signature=88fe324720029c43a99bc988dc0952397fda4ef7cf6084043955888937e94add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKAMKNL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUnrpTi%2B8N9s8a3NDLfm3aAqCxB2WNEGEzJR%2FKN2Rz9AiEA4FxDkpeM1kGxjc1AB%2BLrkmA2kK1iPWY5Qi64Ub4Kvz0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWSHIhHqh8GEe710ircA4wxWYNCQ4fTWmZMNbCnSAWF4DZrjtlsVCtCFAur8nA15La3seaV7cvxAh4%2F5bRVRF787W298RqMwRYkma9HJJAucLmJVpv6hyTvXRgDOW6NLeo5pcXZBVbksKpybLUFvyfxhvYljzPSqppOvYN%2B62c2L%2FQKgfahyaN%2BPSyf43%2B8Nkx4379vjKU%2BABSHYb%2FgniFhnWG8%2BBgjpnDCEvI8PwdjMuoSNNo9DRdFM1ZkvK8uvBvA2ehIgMz0IXJyBptO%2FgMGhy2y4rP38INUVkt3IWZzIIR9%2FmyJXvftp%2FSy14CXvuuk7GgCIc%2BfgeGXbVBhwjZUgYNm1ZJek9RjtbQ4nJc89X8GhylPeom2bwUdsNMKA%2B6%2FoJpTEVUvQlfTad909bXQxN%2Fpcgz2eWtTAHZGh2oFsBfEOK1aZP%2BorqZ6pvVQ2BNn%2BqPTkVW4HgYnEyvhIE2Yeka7QP9Z%2Fd01mNhPwBpPZ3Dlb04FQb9j32FN%2BerREb4yHO268RRg%2BEKE7%2BhDuIl78laR8JaoGwcXfbXm3eHkD%2FPYQ1nSxNihUvy4uOlruMHFtfrMwecE%2BK56bV18qw2aFPRSgXjobY7KTvDwT6ONNBWQpM8RdtQZRlM%2FKvtHI5M3j0F6aSC0WbRJMOLcrsQGOqUBzFPnCbLHC94XtRlwibqtFHXYBI%2BlIx44bQtWjLBZmekCfhl%2Be21LT6HpuZRtCjx0mK%2BxBaQyOZsnG41aM1insL1tI3azj93i%2Bo2NL%2BnTx%2B%2FnJw0GkTAM4Vva88PF5Lnny%2BSf%2F3IRYoPMjfX6acxIuv3dCoRpYDAS%2BHkbUTJvpyycIujlJrJw7AreCGWj9PSWfX%2F8ACH%2BOZ3FE0clP9mHUsACPANx&X-Amz-Signature=3b00022ab29ed5cddf3083f437e88fbdcbb739d247d0fb1798d61cbacd04974d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
