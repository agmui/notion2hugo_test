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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665276OXTW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6eWnLvTInr0uV%2BqyXEzObGaWYxiV9I4claJkI17Jy%2FgIhAL7QF4a%2Bb7fWRc1dadNVxR0nsLdhxdOoZj8YiZzaFMOVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ85GjViLPuRWGZV0q3AMn3Kx06EOcjV9BtGYBK%2Fz3gCykxaZD7yeVVg3VvNpDRuyk%2BF0zk5jUJ3QoHlpcKroo99bx2Nu%2BTMUIYmUnlepqFKHTGyI3rADPxnP42k4LYtJ3UN70WjMkNDvAVl5fUav3gwqf3XwhyXiSE7Y5%2FXPqNhLEIU0ytQ1tknRqzcIlU7V%2B%2BLZWTdBMqeQRiTRSOC5jYpFd9HMehd8uGNbyEW8bTaz%2FIptZMUsCHPMsTeYUGDI8aIp%2F3ZCAHWiQgZqCTmO4Sg4blJYpbnVDpo9%2BE8U6j%2Bd2TXcAnt99tkgip828lShKrzI0qh5eU8iqFXCU2xX%2BtalD467SD6S%2F5tn4Ip0KzD6U9jlsnGt7k1b8K%2FprK1k1ibbNlDVar4r%2FTcegXN%2BNPT5zQXepb%2Bjpey6Hh0I3fwCc%2F3eafNms3uWjoCbR6iWb0O4EytoUzHz%2BXK9z15q0lFfAat%2Fui%2BE3bqHk7lZh1o5%2BLrdCHGnY3CZipPtKlBo2gWDqxMb1YiLDENNdMwcUeZbe93y6NDfhI6JB9zsFI051GtEz%2FWXU2ZcuzeeOKh3IzUgzGpjz9Wev0K%2Fw2vtjkI4kqhG0AyTAPOq9hn54ejzc6rV3GAK0y4YlKQkGCsjRkmAmETi100F8RDD76s6%2BBjqkAXq4QWg3T61vJ%2FEAdMGUr1nTxqB7UtEGvPH2ugiMWWCuBq9Xau076luB0I1ECNcrnNh6coI%2BSBsjggDdi5hO0tsMQwFn5%2BhYza9XtWFGKNKavFNgx5UQZ8whTRBpYo%2Ft9YOWDoktF0Mb0mzpJskVl%2BNVy71MFdWg5RRw9EyAnQfSwd%2Fgfr4jB4QWP%2BbJhOq4fqO8N0uzk%2BsRDbiFisyNTWVFRcIh&X-Amz-Signature=b8f57d8dc2d588b81b8519705fe7c2694b6fe820b7e5a2cf8d6eca929734c9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665276OXTW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6eWnLvTInr0uV%2BqyXEzObGaWYxiV9I4claJkI17Jy%2FgIhAL7QF4a%2Bb7fWRc1dadNVxR0nsLdhxdOoZj8YiZzaFMOVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ85GjViLPuRWGZV0q3AMn3Kx06EOcjV9BtGYBK%2Fz3gCykxaZD7yeVVg3VvNpDRuyk%2BF0zk5jUJ3QoHlpcKroo99bx2Nu%2BTMUIYmUnlepqFKHTGyI3rADPxnP42k4LYtJ3UN70WjMkNDvAVl5fUav3gwqf3XwhyXiSE7Y5%2FXPqNhLEIU0ytQ1tknRqzcIlU7V%2B%2BLZWTdBMqeQRiTRSOC5jYpFd9HMehd8uGNbyEW8bTaz%2FIptZMUsCHPMsTeYUGDI8aIp%2F3ZCAHWiQgZqCTmO4Sg4blJYpbnVDpo9%2BE8U6j%2Bd2TXcAnt99tkgip828lShKrzI0qh5eU8iqFXCU2xX%2BtalD467SD6S%2F5tn4Ip0KzD6U9jlsnGt7k1b8K%2FprK1k1ibbNlDVar4r%2FTcegXN%2BNPT5zQXepb%2Bjpey6Hh0I3fwCc%2F3eafNms3uWjoCbR6iWb0O4EytoUzHz%2BXK9z15q0lFfAat%2Fui%2BE3bqHk7lZh1o5%2BLrdCHGnY3CZipPtKlBo2gWDqxMb1YiLDENNdMwcUeZbe93y6NDfhI6JB9zsFI051GtEz%2FWXU2ZcuzeeOKh3IzUgzGpjz9Wev0K%2Fw2vtjkI4kqhG0AyTAPOq9hn54ejzc6rV3GAK0y4YlKQkGCsjRkmAmETi100F8RDD76s6%2BBjqkAXq4QWg3T61vJ%2FEAdMGUr1nTxqB7UtEGvPH2ugiMWWCuBq9Xau076luB0I1ECNcrnNh6coI%2BSBsjggDdi5hO0tsMQwFn5%2BhYza9XtWFGKNKavFNgx5UQZ8whTRBpYo%2Ft9YOWDoktF0Mb0mzpJskVl%2BNVy71MFdWg5RRw9EyAnQfSwd%2Fgfr4jB4QWP%2BbJhOq4fqO8N0uzk%2BsRDbiFisyNTWVFRcIh&X-Amz-Signature=1d2e932d2a4e190da4ce51ac00f308f65cd64c7942c820a8c8ad9d3a3ac56e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
