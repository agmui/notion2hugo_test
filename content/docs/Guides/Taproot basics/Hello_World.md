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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5FQYNI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD3ntFnwdRmHjWijaZZA1aULAkMySgmonP%2BkqeeoM1KnwIgWZ3WVhSoac%2BLioCaQPQdF0vDpS7AKiAQVktkmjeDze4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUq1VnyIZkzryhhnSrcA4W35nWJrn3lhI2IOlrmrns7578ZzeAlHtQkOFsGqgkKhCicRru6gPr%2BsbSnze%2BzCrUWvmoYcERGliq%2BI20Lxto1qNy%2FOnAqD8wONrgoCPd0%2BCpedj8KSjojQDMY%2FNItfhkzWutHJ0rnZE3MbKzzE1UVKsVLxFhVxjieccD0C6iJheDW4f59UWgPJEJuE3casPDLfSX7xyOXvPNzbiNvWkdUCFTK93nubr%2BgjWfU4rvOQzPvR5OTN8mu%2BHlUgGqqXbRwI46GIC0JNHdIgXY81nH4nDpr15uKo8p5xc9eDzixfEyabukncZMPFcuDgnsnGGWdg64wIQ3yqCSbq0fzAeShJPxVpXhZPW7Q%2F8eHhI%2BHJ0QkFSxNr7T%2FmFuou2azcdhTX68au4B4ZKZHWZm1e1%2BaRaX6jnzN96w0sLPUP0%2B0M88Uc%2BpdTUKUzFOa3TNEl8zqRSdyBWFUbPquFMnuIkbTcNi5qElq2cfiFJ1UrcWtp4rJsiLD0v2zAdOPnoezrkRf88lfokIUuL9g%2BnC%2FDUs%2BnPnFkvs%2B3gwFeL6Glc9XY9OVhS20iaZpsjjqSXWjILL35kigZZtCbmqJRJG6bzGKPBPE2HLSkc33DnVb3M2uxWVXKDsbllJrA6iaMMmegMEGOqUBU6%2B%2FlWYQYlTVQxieGIpUIKbk1BBhqamo%2BPTOo%2FjqtAgSlHMSqIZQ8sD1bnv2pb35rCzihd0UP1g92kaF0ejYmf%2Fei9Vwq%2FfB5zuxWhUFevKVuPjs59SlWhFxreUGupv%2Byv5aHamDUrCBd1IiC6uEnrti6AJxM7kcWhq4a9%2FjhubJq%2Bxc8vi7wDDRbcDARdCkHF4tLxmqQ1gZP2QULZBHDMMqHw12&X-Amz-Signature=a06a66242a8ed83882aa1014abf6c1375fdab77b5d098e4273b2edc799542aca&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5FQYNI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD3ntFnwdRmHjWijaZZA1aULAkMySgmonP%2BkqeeoM1KnwIgWZ3WVhSoac%2BLioCaQPQdF0vDpS7AKiAQVktkmjeDze4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUq1VnyIZkzryhhnSrcA4W35nWJrn3lhI2IOlrmrns7578ZzeAlHtQkOFsGqgkKhCicRru6gPr%2BsbSnze%2BzCrUWvmoYcERGliq%2BI20Lxto1qNy%2FOnAqD8wONrgoCPd0%2BCpedj8KSjojQDMY%2FNItfhkzWutHJ0rnZE3MbKzzE1UVKsVLxFhVxjieccD0C6iJheDW4f59UWgPJEJuE3casPDLfSX7xyOXvPNzbiNvWkdUCFTK93nubr%2BgjWfU4rvOQzPvR5OTN8mu%2BHlUgGqqXbRwI46GIC0JNHdIgXY81nH4nDpr15uKo8p5xc9eDzixfEyabukncZMPFcuDgnsnGGWdg64wIQ3yqCSbq0fzAeShJPxVpXhZPW7Q%2F8eHhI%2BHJ0QkFSxNr7T%2FmFuou2azcdhTX68au4B4ZKZHWZm1e1%2BaRaX6jnzN96w0sLPUP0%2B0M88Uc%2BpdTUKUzFOa3TNEl8zqRSdyBWFUbPquFMnuIkbTcNi5qElq2cfiFJ1UrcWtp4rJsiLD0v2zAdOPnoezrkRf88lfokIUuL9g%2BnC%2FDUs%2BnPnFkvs%2B3gwFeL6Glc9XY9OVhS20iaZpsjjqSXWjILL35kigZZtCbmqJRJG6bzGKPBPE2HLSkc33DnVb3M2uxWVXKDsbllJrA6iaMMmegMEGOqUBU6%2B%2FlWYQYlTVQxieGIpUIKbk1BBhqamo%2BPTOo%2FjqtAgSlHMSqIZQ8sD1bnv2pb35rCzihd0UP1g92kaF0ejYmf%2Fei9Vwq%2FfB5zuxWhUFevKVuPjs59SlWhFxreUGupv%2Byv5aHamDUrCBd1IiC6uEnrti6AJxM7kcWhq4a9%2FjhubJq%2Bxc8vi7wDDRbcDARdCkHF4tLxmqQ1gZP2QULZBHDMMqHw12&X-Amz-Signature=fdb79d3fdf69680226cd9a1eb468716f4a0da1a2864f63e0c71022e0e30d8664&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
