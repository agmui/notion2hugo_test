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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEAVS7Q%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDQMRCnxR4iIzGO5BED55MhHIIZs4XpitpVW8MYdOm8XwIgGgEcB9ZkvMG53GLE8%2FxIfJgeMssjzCYHhwSt0IALpTQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOCk1gPkFpcQgCGl5ircA9eRQiSRYseyfgeeG7NFwsFB4AvNCjSB2arRwJOfWCpwu398MumYkC0IHhWBQv2QzRBG1mI7ZEDfKQxitok6wF8lrDdqZsxWEVhVxEuM5NO9u9ofoIpjmKZX1KduiThGzPTiYReX3NS8KThLIXsRMHlg7aJPx2NCHAz8DUfQsnQTH37CWkSLAGVeIdo%2FdJb4PavCs4zzgaq7%2BoW9G04tNUWrn66lZvq3AQSbpxVsYKI3fDkIqqhRMPaSCYOrQUxOoaZSIBtcWAjlYmQH99OvUdk0UjecsJ48oN3kKcH5ZWXLyuRmen61%2BUpFlg0GprsPrBczrx69ir8FH1wwZJO7YVAnKvtn4czNY3E3HlSDdtnHFCtr3KWCE%2BMk9zBeMRdQ%2B28%2BFGeg%2BQdYlzdO4KaJWXGEmM8yFQhh%2FkQMDscLuWlTmGN2VlhtuqLY4Ik9K6qLzpEDpaDrJRWUx6h7geRfjPm8FMbsK%2FJ88lDsks8RROzLyT3eSAeolgrRa0Dt2ZJsWqHXnx%2BqtMFkAofalxLLmCI7XQ%2BD72AR52gtKYBgjjxNGwSYeAQvzOi8u1DxAzdULpvKjmsqvzStPJLhGIjGuZ%2FSfKc106jbNbVCr1Rt4UXjcRmhZirwU26hsatkMLXhp8oGOqUBGdhigDKhOcM1Ww9k2M7mfA3Vuv92MXqiHPuROcnKoZh5iuinbWYdDt5K173mDLrF5QN3LAAnxHzHAtvELc3Z4fbZQZVZ9Sd%2BEIn8pTRq6MmFrwM1WtdMQwMlr0SeRXR0To9CSRkzYyLcC6sBhn41uAMqIeMAztAwcBx%2BMPB4k9IzfY%2BL4h9fqEhMuQeg9ruR8pO6bSUlfnPFY%2FD%2Fh05Ilc8CvWDp&X-Amz-Signature=1c4e40c5235823bc40cb998d45823fb07b8a6120eb24f29fef64214e316d8db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEAVS7Q%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDQMRCnxR4iIzGO5BED55MhHIIZs4XpitpVW8MYdOm8XwIgGgEcB9ZkvMG53GLE8%2FxIfJgeMssjzCYHhwSt0IALpTQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOCk1gPkFpcQgCGl5ircA9eRQiSRYseyfgeeG7NFwsFB4AvNCjSB2arRwJOfWCpwu398MumYkC0IHhWBQv2QzRBG1mI7ZEDfKQxitok6wF8lrDdqZsxWEVhVxEuM5NO9u9ofoIpjmKZX1KduiThGzPTiYReX3NS8KThLIXsRMHlg7aJPx2NCHAz8DUfQsnQTH37CWkSLAGVeIdo%2FdJb4PavCs4zzgaq7%2BoW9G04tNUWrn66lZvq3AQSbpxVsYKI3fDkIqqhRMPaSCYOrQUxOoaZSIBtcWAjlYmQH99OvUdk0UjecsJ48oN3kKcH5ZWXLyuRmen61%2BUpFlg0GprsPrBczrx69ir8FH1wwZJO7YVAnKvtn4czNY3E3HlSDdtnHFCtr3KWCE%2BMk9zBeMRdQ%2B28%2BFGeg%2BQdYlzdO4KaJWXGEmM8yFQhh%2FkQMDscLuWlTmGN2VlhtuqLY4Ik9K6qLzpEDpaDrJRWUx6h7geRfjPm8FMbsK%2FJ88lDsks8RROzLyT3eSAeolgrRa0Dt2ZJsWqHXnx%2BqtMFkAofalxLLmCI7XQ%2BD72AR52gtKYBgjjxNGwSYeAQvzOi8u1DxAzdULpvKjmsqvzStPJLhGIjGuZ%2FSfKc106jbNbVCr1Rt4UXjcRmhZirwU26hsatkMLXhp8oGOqUBGdhigDKhOcM1Ww9k2M7mfA3Vuv92MXqiHPuROcnKoZh5iuinbWYdDt5K173mDLrF5QN3LAAnxHzHAtvELc3Z4fbZQZVZ9Sd%2BEIn8pTRq6MmFrwM1WtdMQwMlr0SeRXR0To9CSRkzYyLcC6sBhn41uAMqIeMAztAwcBx%2BMPB4k9IzfY%2BL4h9fqEhMuQeg9ruR8pO6bSUlfnPFY%2FD%2Fh05Ilc8CvWDp&X-Amz-Signature=1f38b93403ebe207877d9e5f6771c5f8ecc906e6edac6abd069945d2cc249d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
