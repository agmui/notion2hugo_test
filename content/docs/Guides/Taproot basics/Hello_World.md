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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGITGCVJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAn1%2Bj19vvRgJuADoIuczozI10%2BxPuGKa6UuMdmb0zLMAiEAmzzCLmIZ4geKZR1kzPQZUmzicThq9GHazWTbzMFFvJIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEJYL76TbGNy0N2nyrcA%2Bbx%2Fh8YrXvnFhAYw6og8rhkO1%2BlOWMvbpq55Utu5ROWEHf4HfYX%2BDJMnvJzEPMTwaYRyD3Z8cprUR97kLLPQ8ZxCEcKbOniCzUkGGy7toicadaiSeTHGc7diCNlLoO8PE%2Fsf8udUlolDeEHCwBZ5hGAMO0gyXWsEkN4a2XjwHphT14JkWc5zK%2Fshd5uTwaGJi1L%2FwttEtuBU0w3QyxVXNUrbIrP2y7VmuSzmSqjRtv%2FjGzWlABndX7uIc6WkIcLj23TehseMDeK%2FDqTAem56QOoYh9LKani%2B1afflRha5bq6y%2F7%2FKvIjgIGlOIJwnr2AXPTCC5c4VzCz5%2FSMVZfNL4VkziEN8B%2FA%2F3tl3NOUck5y8nOw%2F7HrWpLx2xMYPC%2FFVyy1x26M%2Br9rebpLoT9hSfdzalcnF4sbczdBELL%2FgNYxkvKgIpHiXGdPsFYoww4m0E8pRhKL3LLd3CmE6QO0pEhFkX99lRBsK%2B8i0IK4qgEblz82ScUyt7rhR4ccBJILd%2FLJcHrDMJ%2FcAlzXeXcE5VQ229oyZF7Gyu2Sn7ylSjyrWLrGnH%2FcuZUcgXSIwzmR%2FMYbVt%2FeYnFEVbz0ocjcKIBAzAd4d0MOUiCHLsWLO4ku0Ekrn6SHRM3GmxCMKbqx8AGOqUBT0YqrDTVbcEwjRlsn56ADSjmsvW9Z5bS9SdNuWDrSG3eNoO4X%2FID%2F2zhIbAFpvnnssImnZRtUEL2Yl1q8%2Ft5PF1fXYA9EOLsbOG3qnAGRrNFC5X4Kva%2FH0eprq%2FuNMynbl%2BvAxNMwOINpv4UhKDLvAXa8wVi8UzKrxp200WoMATcLBXSJaQg7NKKlkIFEtIYacFxL7SIkc%2FS%2F8srG%2BLDXKvqejWI&X-Amz-Signature=8223aac8063c3410670c2bc072319d7baeb13e94efb1928530dcda3a70c0f48c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGITGCVJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAn1%2Bj19vvRgJuADoIuczozI10%2BxPuGKa6UuMdmb0zLMAiEAmzzCLmIZ4geKZR1kzPQZUmzicThq9GHazWTbzMFFvJIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEJYL76TbGNy0N2nyrcA%2Bbx%2Fh8YrXvnFhAYw6og8rhkO1%2BlOWMvbpq55Utu5ROWEHf4HfYX%2BDJMnvJzEPMTwaYRyD3Z8cprUR97kLLPQ8ZxCEcKbOniCzUkGGy7toicadaiSeTHGc7diCNlLoO8PE%2Fsf8udUlolDeEHCwBZ5hGAMO0gyXWsEkN4a2XjwHphT14JkWc5zK%2Fshd5uTwaGJi1L%2FwttEtuBU0w3QyxVXNUrbIrP2y7VmuSzmSqjRtv%2FjGzWlABndX7uIc6WkIcLj23TehseMDeK%2FDqTAem56QOoYh9LKani%2B1afflRha5bq6y%2F7%2FKvIjgIGlOIJwnr2AXPTCC5c4VzCz5%2FSMVZfNL4VkziEN8B%2FA%2F3tl3NOUck5y8nOw%2F7HrWpLx2xMYPC%2FFVyy1x26M%2Br9rebpLoT9hSfdzalcnF4sbczdBELL%2FgNYxkvKgIpHiXGdPsFYoww4m0E8pRhKL3LLd3CmE6QO0pEhFkX99lRBsK%2B8i0IK4qgEblz82ScUyt7rhR4ccBJILd%2FLJcHrDMJ%2FcAlzXeXcE5VQ229oyZF7Gyu2Sn7ylSjyrWLrGnH%2FcuZUcgXSIwzmR%2FMYbVt%2FeYnFEVbz0ocjcKIBAzAd4d0MOUiCHLsWLO4ku0Ekrn6SHRM3GmxCMKbqx8AGOqUBT0YqrDTVbcEwjRlsn56ADSjmsvW9Z5bS9SdNuWDrSG3eNoO4X%2FID%2F2zhIbAFpvnnssImnZRtUEL2Yl1q8%2Ft5PF1fXYA9EOLsbOG3qnAGRrNFC5X4Kva%2FH0eprq%2FuNMynbl%2BvAxNMwOINpv4UhKDLvAXa8wVi8UzKrxp200WoMATcLBXSJaQg7NKKlkIFEtIYacFxL7SIkc%2FS%2F8srG%2BLDXKvqejWI&X-Amz-Signature=fdfc993152fca4fce50774de11c68d42abf1c96b4b776a1cc2ed8916cfdf55dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
