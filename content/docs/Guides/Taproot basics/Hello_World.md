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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFHP6Q4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFLT0Eq5SM%2F8GebB5I7INFtcXKfQXIOLy2k9qHPmFBwTAiEAp57VEW8V4BLnH938EIC3eKJgBWDhq%2F8eY03nlm4HrpEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJmcxWQoaIz8CmXsjCrcA6cEWX82F5qRyQFYHD7M9sQcHVzg%2B6MKOoWj02mlLcbz1vB8yPTMCeYPKgzboql1NBY9%2FCiilDwNxOadzgm%2BWVj7fCO%2BzpO6SL0s1kZL6tknsKoUsu1xuQj%2B%2BEpB%2FdyX9gEoG8FI%2BKFhEC6LalQA492U%2BaPUFoEnBQcw3tf85I%2BdizJJ8%2B%2BesrCGw5cu7P8FtsGLTjAgSPzcK%2BwXIS3ZjXjNEGaA0%2FtoW1Wsi8UgWYSsumqHjkAI9e1mL8Wbi4QtlM7pus949KkNKrr2HJh3q0zwpFQeVC8%2FCD0K0XtpMFc3k1agE%2B91xiUGNQr5Cy1I0YFLAdyRZztuAXAPw5QpXM25TxfP7wfBYKxCYua51KesmS5v2iRrTMx%2BRbdO8Em5EJACfLYY40FA%2BpLlHGeqgkQs90uhc1rpyR1fykDJImzg5Y45cBcJ29ayKZOoxMOMk9p%2F%2FmqFAeiLlayp56eZwYSn34sAjgYfGv8EVLewsgEuWOax%2FDYhsQZjm2ny8NXgdF5NVm%2Bcb30bvpg9k3kwnzEle04NKMH1PDvBXn9cYJ0FJlDj92YwQLOdimqDDguRvd%2BC26nDeGdRET7JDZuSIeFXyqqZZEJn9yU61eDCXbzV3JPjV496gVingixMMLnCpMMGOqUBnrkKYzdsA9jUzsAsB9nVVYb6r94Xhd%2FCa9ONEVGH7KNrYQYr3Ijsn3Z8iZwvtc3KP6TL7yXSvrlNqsc%2F9qLXnMVElRvwV6SHPZLAUQe%2FECKyse4190%2F2fDGxWkrEiNscyzeuvtbvPqPFK6wsr3BwYETLRtrHsogxSWNsKDxmw9XGpk%2B6PLaR0Ay3Tpc97WFp2vrpVm8EOhAgLCSaXWGExWIbVKKt&X-Amz-Signature=b802a3a7ef6e236e6c991a067a5a787126f2a3d7bf7ecc5c651445a00f66c8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFHP6Q4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFLT0Eq5SM%2F8GebB5I7INFtcXKfQXIOLy2k9qHPmFBwTAiEAp57VEW8V4BLnH938EIC3eKJgBWDhq%2F8eY03nlm4HrpEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJmcxWQoaIz8CmXsjCrcA6cEWX82F5qRyQFYHD7M9sQcHVzg%2B6MKOoWj02mlLcbz1vB8yPTMCeYPKgzboql1NBY9%2FCiilDwNxOadzgm%2BWVj7fCO%2BzpO6SL0s1kZL6tknsKoUsu1xuQj%2B%2BEpB%2FdyX9gEoG8FI%2BKFhEC6LalQA492U%2BaPUFoEnBQcw3tf85I%2BdizJJ8%2B%2BesrCGw5cu7P8FtsGLTjAgSPzcK%2BwXIS3ZjXjNEGaA0%2FtoW1Wsi8UgWYSsumqHjkAI9e1mL8Wbi4QtlM7pus949KkNKrr2HJh3q0zwpFQeVC8%2FCD0K0XtpMFc3k1agE%2B91xiUGNQr5Cy1I0YFLAdyRZztuAXAPw5QpXM25TxfP7wfBYKxCYua51KesmS5v2iRrTMx%2BRbdO8Em5EJACfLYY40FA%2BpLlHGeqgkQs90uhc1rpyR1fykDJImzg5Y45cBcJ29ayKZOoxMOMk9p%2F%2FmqFAeiLlayp56eZwYSn34sAjgYfGv8EVLewsgEuWOax%2FDYhsQZjm2ny8NXgdF5NVm%2Bcb30bvpg9k3kwnzEle04NKMH1PDvBXn9cYJ0FJlDj92YwQLOdimqDDguRvd%2BC26nDeGdRET7JDZuSIeFXyqqZZEJn9yU61eDCXbzV3JPjV496gVingixMMLnCpMMGOqUBnrkKYzdsA9jUzsAsB9nVVYb6r94Xhd%2FCa9ONEVGH7KNrYQYr3Ijsn3Z8iZwvtc3KP6TL7yXSvrlNqsc%2F9qLXnMVElRvwV6SHPZLAUQe%2FECKyse4190%2F2fDGxWkrEiNscyzeuvtbvPqPFK6wsr3BwYETLRtrHsogxSWNsKDxmw9XGpk%2B6PLaR0Ay3Tpc97WFp2vrpVm8EOhAgLCSaXWGExWIbVKKt&X-Amz-Signature=d6ffa391d1ae3680e7eee645658f8d8548c6ce66f60d44a120542f5d4019924f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
