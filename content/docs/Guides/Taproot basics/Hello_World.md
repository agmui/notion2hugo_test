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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOPZO5F%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIEVTv9URv7%2B4X%2FvvUo0QNuoiJM4%2Fy%2Fm7p09qyM60MAHoAiEA%2FmoahEYe%2FUA2GnATwjVkeWtSSusc9jxFxnMeGXxr9S8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJ4lQUBoICQRxki20yrcA8UGD7VOOWlgSHELOAjXiHFWzD%2F%2B68FvUSLLjpBSbyfPKhVndwjAassjVAm7c2R6fGWEzfsSfaYF9dNa1x1oKdFw5%2FgUXEeOwmQU6eL68MuHrVp0i5qJLX3qoWh9MeVD0KyC1gpOaPlOn53qgOA%2FvKL97MNaoDVvGy69OaJ8rWi90ToaqIwVtf5E4Qm576ghsPL%2BfNl%2FEctEgevr62GRQyuDhGpXbSvOL0gyawuV%2FKDGqif2GC77oH8%2FIbli3ic9TACE5u58bDQYwa%2F7g2qwGTLCHi1lMy6UzCztIre3XAHd%2BRQ9KIzwtQgnnJxN8tIecr7hmWDOjSw3%2BrSDJ71tGdZdAfCR7fH7PRBNbkLTxevkabLPIUj79hjcN9HrA8z0rB3Zp0bcCETgT9UXJNRDRq6Ec79pGkUV5oOIqpoY1fMKIY4YCiLVcDhDYFfUdGdq797SCxaKIJQrhX4CmThFgICHFJF63eXTiJuOeH%2FgBH2wzEklRX7ptJ1dktW7HqcCt2Yjk6rP6Ylt2k0mb1Opy9vQp0xvpffbzF4ysPD4bkdz%2BMAvas1fu1HefFN8SeWe8XiQR6bQ0Md3TOvTtmPPFm0lWneXadoD5mUyk3kKlZbJA2FA0B98LQ9ILTwVMPyP78IGOqUBq5f06SJyGa0gpszpZWHAGL%2BRGHGj4qtR7lwDF2q1hdt%2F1U%2F1NLyd9hCPWWRjtuc1BJW56wiMj14NA5OhHIJc%2FlZ8fizOrXSxauVMN%2BE6m2w8s6Q9UL6kOthekfup32kV16D5QNH0NGtcAtGI8KJZ03BSc18Z9cAZdbyzRvescW0WlfNma3WiAfT8x2II5wJU5sQUMNGWDpJT6RBw%2BUJKkwP1Kh5P&X-Amz-Signature=9770b3cc1777411406cbb5f83851bfcfa6606bce9706d9c72c13d32f2b3a444d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOPZO5F%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIEVTv9URv7%2B4X%2FvvUo0QNuoiJM4%2Fy%2Fm7p09qyM60MAHoAiEA%2FmoahEYe%2FUA2GnATwjVkeWtSSusc9jxFxnMeGXxr9S8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJ4lQUBoICQRxki20yrcA8UGD7VOOWlgSHELOAjXiHFWzD%2F%2B68FvUSLLjpBSbyfPKhVndwjAassjVAm7c2R6fGWEzfsSfaYF9dNa1x1oKdFw5%2FgUXEeOwmQU6eL68MuHrVp0i5qJLX3qoWh9MeVD0KyC1gpOaPlOn53qgOA%2FvKL97MNaoDVvGy69OaJ8rWi90ToaqIwVtf5E4Qm576ghsPL%2BfNl%2FEctEgevr62GRQyuDhGpXbSvOL0gyawuV%2FKDGqif2GC77oH8%2FIbli3ic9TACE5u58bDQYwa%2F7g2qwGTLCHi1lMy6UzCztIre3XAHd%2BRQ9KIzwtQgnnJxN8tIecr7hmWDOjSw3%2BrSDJ71tGdZdAfCR7fH7PRBNbkLTxevkabLPIUj79hjcN9HrA8z0rB3Zp0bcCETgT9UXJNRDRq6Ec79pGkUV5oOIqpoY1fMKIY4YCiLVcDhDYFfUdGdq797SCxaKIJQrhX4CmThFgICHFJF63eXTiJuOeH%2FgBH2wzEklRX7ptJ1dktW7HqcCt2Yjk6rP6Ylt2k0mb1Opy9vQp0xvpffbzF4ysPD4bkdz%2BMAvas1fu1HefFN8SeWe8XiQR6bQ0Md3TOvTtmPPFm0lWneXadoD5mUyk3kKlZbJA2FA0B98LQ9ILTwVMPyP78IGOqUBq5f06SJyGa0gpszpZWHAGL%2BRGHGj4qtR7lwDF2q1hdt%2F1U%2F1NLyd9hCPWWRjtuc1BJW56wiMj14NA5OhHIJc%2FlZ8fizOrXSxauVMN%2BE6m2w8s6Q9UL6kOthekfup32kV16D5QNH0NGtcAtGI8KJZ03BSc18Z9cAZdbyzRvescW0WlfNma3WiAfT8x2II5wJU5sQUMNGWDpJT6RBw%2BUJKkwP1Kh5P&X-Amz-Signature=737e3aa2d6a762753ea6177b62946570ce9ac1ad02e6e83b24395f23c139d0d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
