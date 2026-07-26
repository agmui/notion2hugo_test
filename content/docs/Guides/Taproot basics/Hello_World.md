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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRMWU4YG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCf1ptG6QFhBXiJzfUIcyfzX7t%2BKpzhpILihlFp1jgBUQIgapbLCOU9bTY9NzoTbnysly3ammfwlG6INerhOzbjEcEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJXuqiCIhel9cn4dlircA8GfWzQo0W22evnRIPg7hwWN8pPvywmku17hIJlst%2BVv7IgaT83nY%2Fwbisei7jI567g1vJTm4Zd88STBKCLdeFqLQr9zVQPRG8zWw4BLJ7YRtk%2F29jPNygIqBE6mJS0aG1PX%2BvXJ1GtPzyo3izyEY6v%2Ffl2yyU7W05M1yuyhsCqyrSZWmNRg8m3TKcnq229P0j82O4NJrfQ3Z23SJbFjYQQhwc0a%2B3IDb%2BxbE8XHpVwU0p5C9y2OhufsXn2YEoTM%2BUL1bSare2AiqKM%2FakXSQ%2FrnNngnmxW4fCKcSrD7kYHACP5rJ2qlLUgORzDkc6352%2Fhtt3rU6zFUQUPqUe0%2BOSPVmeBQSDb%2F2xlyPEqSrv55Y%2BcnQRRGe2h0NAahrc7v8wANLPg%2FFmknM24x0QibO1BIyHZeS5Nn5%2BRo5jzu5g7bNnee%2FnrmTWPEfJveYYzFaGHGze%2B1w1046UH9B8A%2BfswOZbVsAFOZhh4c4E1PLNdtvyFBB4fZxfECGxVCHo1oeDIaCNoKcTVSE%2FidnSUWx6nz27YR0dQEGMz0fFXVlKBHR%2BdXI67QQW%2Fyn0ztCNC7mLt0vXzInfuLOQLhlC7BCL2hMDd%2B%2F2Fx53MzLRMPhUSW3xmz7COASVSCEe28MP3mldMGOqUBQh%2FyG4%2FFl6RrMgqJQekqci02u6Uvri58vsyesqMPZ6dWjs8K1V51uSAKYfFg%2B5vbiTdbESFnH5Y2buhcE9TSvPXMi%2FoMgJUYEew7p36dz0InfW1lqUSZXZ2iu5B6eNKoFaUXzs07WAMthijMSKDhRL0HcjXTAIIAJXDTQljXqhxj3iEu7BbdL488kSvdAbVaXFhehAPPSHUnju4JssRx6R%2BaJJZv&X-Amz-Signature=493aaad66f694a3e0bc6e57a0c7916b3453565820db45e422b5db5a10c7c026d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRMWU4YG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCf1ptG6QFhBXiJzfUIcyfzX7t%2BKpzhpILihlFp1jgBUQIgapbLCOU9bTY9NzoTbnysly3ammfwlG6INerhOzbjEcEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJXuqiCIhel9cn4dlircA8GfWzQo0W22evnRIPg7hwWN8pPvywmku17hIJlst%2BVv7IgaT83nY%2Fwbisei7jI567g1vJTm4Zd88STBKCLdeFqLQr9zVQPRG8zWw4BLJ7YRtk%2F29jPNygIqBE6mJS0aG1PX%2BvXJ1GtPzyo3izyEY6v%2Ffl2yyU7W05M1yuyhsCqyrSZWmNRg8m3TKcnq229P0j82O4NJrfQ3Z23SJbFjYQQhwc0a%2B3IDb%2BxbE8XHpVwU0p5C9y2OhufsXn2YEoTM%2BUL1bSare2AiqKM%2FakXSQ%2FrnNngnmxW4fCKcSrD7kYHACP5rJ2qlLUgORzDkc6352%2Fhtt3rU6zFUQUPqUe0%2BOSPVmeBQSDb%2F2xlyPEqSrv55Y%2BcnQRRGe2h0NAahrc7v8wANLPg%2FFmknM24x0QibO1BIyHZeS5Nn5%2BRo5jzu5g7bNnee%2FnrmTWPEfJveYYzFaGHGze%2B1w1046UH9B8A%2BfswOZbVsAFOZhh4c4E1PLNdtvyFBB4fZxfECGxVCHo1oeDIaCNoKcTVSE%2FidnSUWx6nz27YR0dQEGMz0fFXVlKBHR%2BdXI67QQW%2Fyn0ztCNC7mLt0vXzInfuLOQLhlC7BCL2hMDd%2B%2F2Fx53MzLRMPhUSW3xmz7COASVSCEe28MP3mldMGOqUBQh%2FyG4%2FFl6RrMgqJQekqci02u6Uvri58vsyesqMPZ6dWjs8K1V51uSAKYfFg%2B5vbiTdbESFnH5Y2buhcE9TSvPXMi%2FoMgJUYEew7p36dz0InfW1lqUSZXZ2iu5B6eNKoFaUXzs07WAMthijMSKDhRL0HcjXTAIIAJXDTQljXqhxj3iEu7BbdL488kSvdAbVaXFhehAPPSHUnju4JssRx6R%2BaJJZv&X-Amz-Signature=5de00493fe6efec57b6da27ea6b57357d6409f9a9e9db387438deb1deb6d486d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
