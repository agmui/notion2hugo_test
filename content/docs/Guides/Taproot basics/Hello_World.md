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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZV5AVD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T003955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD%2FHSxGy2U5HkqYbWVcdGu4SJZ9cnM1PfW9WtTUrUiIeQIgaHj6IBLQp4VvO3WHq2BG%2BQuTmMo01GvHKQhUEEanSAgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0ip3OrYWzzfq9O4CrcAy2tZx4fUo4v1hhqOqP0L16iEtGYDEnM1D4FYDzEWtu8uzblu605EHWGd7q0VPyKxN9%2Bdp9lww45OpA50VQILgCss0c4ke4jYsScACPvKtb46rcywKmaFeHdOPtYDRsuS23g3NoyE8Rj%2Bu%2FkavY4dZOC5wilbe%2F%2FeE376J%2BWt8wfxxwRdqEYZGDDjIZIZsSomNhZJoUkaUbS%2BvxBjsBguYs4iCz6Y0fxJnZkJ6kuCqIq76XDBgutJPald5J7TPkGpdRAYUEYw7%2FCODLm6JSANE8JzysXYUvX5vKprYwUnfQTCzbN8KohGvo0b1jqpukBfUBCIxdaUx4s%2BEDwxY%2Fnb1V2MWWOWhs08JEu7lFPJwPFgFVAh0HAbNi0Kq%2Fkwj2XGCKQVibF5kKaMk5VZiNhB0yCrL5evipupik%2F6KtVwoMkx%2FnE%2FureUt13GOeFpXcDwk%2BglBBgn7N%2B7HGMzqHk64LKAettknaicU5y%2BJv9GeUKYhEU9BKDbl0yFkXTAX8M7oMTN9wkLQBvrON3TJWtQ0qJFQVYtwq7p1zmZUQQcpBuUgPJPrR5ozYlJFNRpEC%2FRs9jEWLkP9Nyu7%2B7oLtIELc32mosfcPFoIrB6%2FsD6icuSnUpHuC3rJvFVBoKMLL8pcAGOqUBaZjNmSxRPEu5FVvOlvX9tjObWjbHN5XtellwMVMewHLEqyaieGhl9MBUuLFjBc2OcpqE%2B%2FDDmqdQN9gZ5IcCBjvDwDAV7Yq82eeXpGpuHlqylBWIUwgR5caKFwSehW1Mq5z3sw4n%2FDFIdttGEV2u0kZWr%2FKsbwmfRzTUvX4PEP%2BeXuIaoFJNDW3ax4cJN%2BPqN6M6y0r5L50tTc1Xt5t9WO0gQpLo&X-Amz-Signature=a4c2f58c30727855d2bfb616e076a4cfb624e4bedee379f0ecb8b138aba2f55c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZV5AVD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T003955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD%2FHSxGy2U5HkqYbWVcdGu4SJZ9cnM1PfW9WtTUrUiIeQIgaHj6IBLQp4VvO3WHq2BG%2BQuTmMo01GvHKQhUEEanSAgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0ip3OrYWzzfq9O4CrcAy2tZx4fUo4v1hhqOqP0L16iEtGYDEnM1D4FYDzEWtu8uzblu605EHWGd7q0VPyKxN9%2Bdp9lww45OpA50VQILgCss0c4ke4jYsScACPvKtb46rcywKmaFeHdOPtYDRsuS23g3NoyE8Rj%2Bu%2FkavY4dZOC5wilbe%2F%2FeE376J%2BWt8wfxxwRdqEYZGDDjIZIZsSomNhZJoUkaUbS%2BvxBjsBguYs4iCz6Y0fxJnZkJ6kuCqIq76XDBgutJPald5J7TPkGpdRAYUEYw7%2FCODLm6JSANE8JzysXYUvX5vKprYwUnfQTCzbN8KohGvo0b1jqpukBfUBCIxdaUx4s%2BEDwxY%2Fnb1V2MWWOWhs08JEu7lFPJwPFgFVAh0HAbNi0Kq%2Fkwj2XGCKQVibF5kKaMk5VZiNhB0yCrL5evipupik%2F6KtVwoMkx%2FnE%2FureUt13GOeFpXcDwk%2BglBBgn7N%2B7HGMzqHk64LKAettknaicU5y%2BJv9GeUKYhEU9BKDbl0yFkXTAX8M7oMTN9wkLQBvrON3TJWtQ0qJFQVYtwq7p1zmZUQQcpBuUgPJPrR5ozYlJFNRpEC%2FRs9jEWLkP9Nyu7%2B7oLtIELc32mosfcPFoIrB6%2FsD6icuSnUpHuC3rJvFVBoKMLL8pcAGOqUBaZjNmSxRPEu5FVvOlvX9tjObWjbHN5XtellwMVMewHLEqyaieGhl9MBUuLFjBc2OcpqE%2B%2FDDmqdQN9gZ5IcCBjvDwDAV7Yq82eeXpGpuHlqylBWIUwgR5caKFwSehW1Mq5z3sw4n%2FDFIdttGEV2u0kZWr%2FKsbwmfRzTUvX4PEP%2BeXuIaoFJNDW3ax4cJN%2BPqN6M6y0r5L50tTc1Xt5t9WO0gQpLo&X-Amz-Signature=0933f22e9e5714c6f4540102ea7d0837fb05c47beb519a23870a181830ac77fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
