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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VHGG2F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJKgwg77UclTA%2Fq78Z%2Bp1PUyCILfpHIBa%2BFtTfggDWEgIhAM6kXymgjpVS%2BxqcOB2avTTcXyPBvi55EQTn4%2FrHAOwsKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyk14m9804HfdR6zfUq3AMksyuySyldI4nJYxgQOJGotGpDYLfNwo8AQsIpwT1iytplJut8DVwzUurvOZeYnEMu7LN1OiB72higyQLQ%2BRUa6OPS3nT8N%2BUj3vi21ehKnRAgUEtHRRZSJxKyHBWUO6qEiUbgLHVYtZYYNNAJzirxDiMgNFK5lrP0%2FkkOzV4kpbNOS6Q%2BqAHM1zZ3h%2Ft0k%2FN7QdhuTfasOLKy11gi6qSWRM0zgBiPVi0HvM5S1uy1al71J2stmcaLaxnupUAwfRRHr1dTGMEJzWJbpIrYtWG5HSixfa4kh2aLpc8K%2FuLSh73nugl%2FCRDf0nsqeWoNjy%2FrMQfA4ctPDqFINrcvIXis9G%2BckJ1xca34zj%2Bqflfp4xhLwVD1dNYnZKl8JGy%2FQPs1Ibglf8uVKSuOhkBB0AtwXA3bqMBGpvCXhi%2FTlfDzwOLWkb7hJkP408vQFQKjuW541or5JcY1R9E7LQBIxnjf0XoQcx1b8klac2ZI2i05HFCMIqKkLVlCGKeoOfd5XOghs08wb6NRVOlro3E3cEZ2iO53YDwtxBAZdJtuytXkp%2BwAwsaK2FuJcCDlG%2BkFjGgDiTr9QvUXHxbAZJR57tzz1MFvcl2q9TYdz%2F3KHTfLALv1dOrxR%2B1%2FmB0ZjzDd%2BrPEBjqkAeV5qKkB66%2Bg7%2Fqr%2F8IcBIwfld4HSh4EmghtabiGmnYShuZLSUbJWGJBPJHPntrSq4hUYlQ9gVGC%2BCm2%2BaAuC%2BNBgTJfixP8bV4V0V3EzRM1iHLGfktdA1Vcopai28Va5O%2FxpjTry1b%2FC58iOGbdPRnq4%2B2TiPnmhm4C2GDJYxZxeHRmhb0fz7PozIE3kpecrJ8uOxSrJMq0F8tcEUf2Hl1TrXex&X-Amz-Signature=0c959cc8d30a4026236275e7a21dbf54f3a683858f950256fa552652e372f070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VHGG2F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJKgwg77UclTA%2Fq78Z%2Bp1PUyCILfpHIBa%2BFtTfggDWEgIhAM6kXymgjpVS%2BxqcOB2avTTcXyPBvi55EQTn4%2FrHAOwsKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyk14m9804HfdR6zfUq3AMksyuySyldI4nJYxgQOJGotGpDYLfNwo8AQsIpwT1iytplJut8DVwzUurvOZeYnEMu7LN1OiB72higyQLQ%2BRUa6OPS3nT8N%2BUj3vi21ehKnRAgUEtHRRZSJxKyHBWUO6qEiUbgLHVYtZYYNNAJzirxDiMgNFK5lrP0%2FkkOzV4kpbNOS6Q%2BqAHM1zZ3h%2Ft0k%2FN7QdhuTfasOLKy11gi6qSWRM0zgBiPVi0HvM5S1uy1al71J2stmcaLaxnupUAwfRRHr1dTGMEJzWJbpIrYtWG5HSixfa4kh2aLpc8K%2FuLSh73nugl%2FCRDf0nsqeWoNjy%2FrMQfA4ctPDqFINrcvIXis9G%2BckJ1xca34zj%2Bqflfp4xhLwVD1dNYnZKl8JGy%2FQPs1Ibglf8uVKSuOhkBB0AtwXA3bqMBGpvCXhi%2FTlfDzwOLWkb7hJkP408vQFQKjuW541or5JcY1R9E7LQBIxnjf0XoQcx1b8klac2ZI2i05HFCMIqKkLVlCGKeoOfd5XOghs08wb6NRVOlro3E3cEZ2iO53YDwtxBAZdJtuytXkp%2BwAwsaK2FuJcCDlG%2BkFjGgDiTr9QvUXHxbAZJR57tzz1MFvcl2q9TYdz%2F3KHTfLALv1dOrxR%2B1%2FmB0ZjzDd%2BrPEBjqkAeV5qKkB66%2Bg7%2Fqr%2F8IcBIwfld4HSh4EmghtabiGmnYShuZLSUbJWGJBPJHPntrSq4hUYlQ9gVGC%2BCm2%2BaAuC%2BNBgTJfixP8bV4V0V3EzRM1iHLGfktdA1Vcopai28Va5O%2FxpjTry1b%2FC58iOGbdPRnq4%2B2TiPnmhm4C2GDJYxZxeHRmhb0fz7PozIE3kpecrJ8uOxSrJMq0F8tcEUf2Hl1TrXex&X-Amz-Signature=21a5cb0f0ecd33d6de76ef5e56e33e829a15426fab0408567bc0d30af1fdf247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
