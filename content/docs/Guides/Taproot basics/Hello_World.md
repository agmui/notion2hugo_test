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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TRRNXI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuPiDRf8nADaNwtl8PRQojP%2Bh9gtfpFs1X8oSr5n%2BxmAiB34yGyGFzMrrdVqj%2B%2BuETPiJnU9U8paTSn9i4vZVWY7SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnfwZ1GTSdQkt4xFBKtwDe%2F5cx68OxdMKz2mi9g13A3bAUFXHqNSIDMJ8r8EZZaq7gFxMg63B6LH7mc16KqVYDTvo7CPGLng4F6dAZcn7dENQlom%2BQFUApZBhGdZ2nSxjssRXg3Thlic2eRh1uXK7jclYhzPfNrMwOoaS2dERxXJCw8HAb%2BOA9hSxsvRFVRKfd5v4NMQD%2FEedTW960NRjE1uCBeBG7E6TA2w6%2BYYIKNAB7pLovPqkW0ZN6md7YEAhncNHrbaB1P6WEaYDUYdDLOrWA5DHHcOvO6fFXV9rzjZKQ%2FqN5MNWTNxD1zgYFTxRrTt%2B9qOMEzdB3RXcfVHXAlU5N%2BSXFCKL2sGa3NEMSBavPY5%2BG0UNbJfSgKhG9Ke4dNEhocLrPGcfSxWIpBM%2Be4AZ8Q1wqvBpODtVA5XXf%2FmNmD8YF%2BjQgbJZKHap3i00BvCQiGxweYPff8N%2FNN8d2KyjGqqoD3yWRV4mVHPb8W1WZOh%2F51o7k%2FB3uWVEV1%2FtZFSGb0zRxsu0OODQzKK3N%2BUbAgoFCu1NjVbY1jMG%2FobeOXlMGTTFs%2BzakY9OS%2B97abEsyso6s%2BtdVvjckKePc0W%2FztQ9n2ULU0bncktr9dp5IaG2S9gXZQuxOM4cAPPdTddrg5tDEiRDwy8wjvv0vAY6pgEuthCc%2FnhM4fdaVe5Xsx8AX98EaebhIY0kniKqb9rLbgnpdfhtF0BPjrxHgeu2UbQeV57BB1saXA5XY%2BFCOLzH0qwBoUsHXaVXOkIQGvfjVIH3dvI33lphv7Wuks0bUNWJDxLyYduoHMPJAdiPZwvGd%2B%2FfngA%2F3HhXdf%2BwUzj%2FJiEax3FAHDSMjam1kHE%2BpC3FxDjToq0mnkEJXg%2B7XRhA%2BCWF321%2B&X-Amz-Signature=e93a6da952ec9e6eb95e50d6e35b5620313b3239866cd3b47a27238c21d49ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TRRNXI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuPiDRf8nADaNwtl8PRQojP%2Bh9gtfpFs1X8oSr5n%2BxmAiB34yGyGFzMrrdVqj%2B%2BuETPiJnU9U8paTSn9i4vZVWY7SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnfwZ1GTSdQkt4xFBKtwDe%2F5cx68OxdMKz2mi9g13A3bAUFXHqNSIDMJ8r8EZZaq7gFxMg63B6LH7mc16KqVYDTvo7CPGLng4F6dAZcn7dENQlom%2BQFUApZBhGdZ2nSxjssRXg3Thlic2eRh1uXK7jclYhzPfNrMwOoaS2dERxXJCw8HAb%2BOA9hSxsvRFVRKfd5v4NMQD%2FEedTW960NRjE1uCBeBG7E6TA2w6%2BYYIKNAB7pLovPqkW0ZN6md7YEAhncNHrbaB1P6WEaYDUYdDLOrWA5DHHcOvO6fFXV9rzjZKQ%2FqN5MNWTNxD1zgYFTxRrTt%2B9qOMEzdB3RXcfVHXAlU5N%2BSXFCKL2sGa3NEMSBavPY5%2BG0UNbJfSgKhG9Ke4dNEhocLrPGcfSxWIpBM%2Be4AZ8Q1wqvBpODtVA5XXf%2FmNmD8YF%2BjQgbJZKHap3i00BvCQiGxweYPff8N%2FNN8d2KyjGqqoD3yWRV4mVHPb8W1WZOh%2F51o7k%2FB3uWVEV1%2FtZFSGb0zRxsu0OODQzKK3N%2BUbAgoFCu1NjVbY1jMG%2FobeOXlMGTTFs%2BzakY9OS%2B97abEsyso6s%2BtdVvjckKePc0W%2FztQ9n2ULU0bncktr9dp5IaG2S9gXZQuxOM4cAPPdTddrg5tDEiRDwy8wjvv0vAY6pgEuthCc%2FnhM4fdaVe5Xsx8AX98EaebhIY0kniKqb9rLbgnpdfhtF0BPjrxHgeu2UbQeV57BB1saXA5XY%2BFCOLzH0qwBoUsHXaVXOkIQGvfjVIH3dvI33lphv7Wuks0bUNWJDxLyYduoHMPJAdiPZwvGd%2B%2FfngA%2F3HhXdf%2BwUzj%2FJiEax3FAHDSMjam1kHE%2BpC3FxDjToq0mnkEJXg%2B7XRhA%2BCWF321%2B&X-Amz-Signature=ef9b68def1b17a49e3fb7ed4a7824a6dec1452b10d00f5158c572c6012abefba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
