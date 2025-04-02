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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q2CVMCN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICB5tsT%2B%2FFpPw3PwIt1PrgkjWpAxmQ1Xbjh2ew0lHahgAiANJnLdKASKB96fzuLYmvWzfMDBkYdtzhQ3BWn8%2BK%2BuEiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSBLUlshayU%2BxO%2BboKtwDL9RNyp8YZjT%2BNkq9H3qu5oBxKypge2TnAsPDMLSVRvgxlNYbKX5%2BSn6gMQv50roMRrM%2BN7m8l7GyGH%2FG4WAt4vV860%2FRxEHwQqbyr2hxBfklG0HkfwPcoGztxsVpShgG4kT5DY%2BvvCzrLCckP48Re1WfXlnic64BJFX2MOfWGGqv9vDNh8K2Dx14unH5jTQfxQhwSaY0%2Bxz3YWCL9Vq2sfbVE3D2nu0i%2Fy%2B1JVuLQ2ZU5NEvPHZa2YqHnCeIuUOGJatZ7jXg8OGAXkKPbFGva%2F6XSjPoPKlXBaaBDitfcQK%2FCVsCZGZ5nN9ZozWzcaVlkGfWf6ec2WDdm04yMT2W76ZU05NgsGfnc%2FrVV6FKmVH5moOpq4YjmyVlvptAY3jsTU48%2B0auXOphg2x5zWxF9TWZ60%2BtdtK1JqDh8PP6NG785g0bgI%2FPi3%2F2JKFXDZUaAfb8irixySaHFmTWIWwvt%2ByXVdzOSscBoKOcceZ%2BjHlSOYY0Xs5jfnBDqIhEviDyOp3jKdcTFrOGZrNbLkTnFGF72iWSecj%2BKiZd89dMCQAf8tzOj769UekoVWPGok6Rx3K4OEXUVS%2FNrOJoV3SwRguh74DoYHRH3jsoK30VfHnxyGjQP%2FEQZTTcDGsw6NCzvwY6pgHxu2eBAOXQoxEM7Nth%2FecuCzFQX98lnw6ZbFtaLFjqIG64yhSRS3R9wc63LksXeRZ1ASCb1PA9sE101miRJ6%2BRsZvnhpndxDYuQ%2BJt1NLYuv6LBxX1SxVj8iWDGSOSrfREXBBar5LuhTt4Vu1DNsxuM7CYYj2wfUQzKFkN8UCsiP679CDscelj8WysVydSRixU6JUyA4nFf4s8fCkjYxxKxwtDYI6B&X-Amz-Signature=d53b4b81aaad73487ea555719ad8111f0eee1d8b31cdc9c30888f6271110639c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q2CVMCN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICB5tsT%2B%2FFpPw3PwIt1PrgkjWpAxmQ1Xbjh2ew0lHahgAiANJnLdKASKB96fzuLYmvWzfMDBkYdtzhQ3BWn8%2BK%2BuEiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSBLUlshayU%2BxO%2BboKtwDL9RNyp8YZjT%2BNkq9H3qu5oBxKypge2TnAsPDMLSVRvgxlNYbKX5%2BSn6gMQv50roMRrM%2BN7m8l7GyGH%2FG4WAt4vV860%2FRxEHwQqbyr2hxBfklG0HkfwPcoGztxsVpShgG4kT5DY%2BvvCzrLCckP48Re1WfXlnic64BJFX2MOfWGGqv9vDNh8K2Dx14unH5jTQfxQhwSaY0%2Bxz3YWCL9Vq2sfbVE3D2nu0i%2Fy%2B1JVuLQ2ZU5NEvPHZa2YqHnCeIuUOGJatZ7jXg8OGAXkKPbFGva%2F6XSjPoPKlXBaaBDitfcQK%2FCVsCZGZ5nN9ZozWzcaVlkGfWf6ec2WDdm04yMT2W76ZU05NgsGfnc%2FrVV6FKmVH5moOpq4YjmyVlvptAY3jsTU48%2B0auXOphg2x5zWxF9TWZ60%2BtdtK1JqDh8PP6NG785g0bgI%2FPi3%2F2JKFXDZUaAfb8irixySaHFmTWIWwvt%2ByXVdzOSscBoKOcceZ%2BjHlSOYY0Xs5jfnBDqIhEviDyOp3jKdcTFrOGZrNbLkTnFGF72iWSecj%2BKiZd89dMCQAf8tzOj769UekoVWPGok6Rx3K4OEXUVS%2FNrOJoV3SwRguh74DoYHRH3jsoK30VfHnxyGjQP%2FEQZTTcDGsw6NCzvwY6pgHxu2eBAOXQoxEM7Nth%2FecuCzFQX98lnw6ZbFtaLFjqIG64yhSRS3R9wc63LksXeRZ1ASCb1PA9sE101miRJ6%2BRsZvnhpndxDYuQ%2BJt1NLYuv6LBxX1SxVj8iWDGSOSrfREXBBar5LuhTt4Vu1DNsxuM7CYYj2wfUQzKFkN8UCsiP679CDscelj8WysVydSRixU6JUyA4nFf4s8fCkjYxxKxwtDYI6B&X-Amz-Signature=af912e6167ebf1ff91c7d12d47690292381901fc3813209d2ce0764de2330152&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
