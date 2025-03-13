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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AAOJQ2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXsfoS5dKJt9UFYl7S%2FR%2B2Se07f%2FKDHNQiWO3n2TyPjAiEAjlw%2F%2Bdh92uhMz9VDi%2Bjln3YbLiWzuzqZ6dg23ywKSGwqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbS4ovvKQX2%2Fk2utSrcA1kbawHEDo8%2B21vIpksB03ugVYjM4dW%2B%2FB3ERUoG%2BtbsfMmFO0L%2FpaqCTxtcYsocA5fHK1%2FobUBW%2B1UrYOLJdOkhXxPKzoQSz9ROxnJI%2F7zwGXB1rOrpz9eS47RsqctxiGnLj985Cr6UUi9TXQXvYo5Ayx09Z61lzQhuG7ld%2B7yv1ghkIL8VPBKdOHTCiZ5CpTp9pIN8xAoy9mz7HlF5mDuzBaP%2Bg95xEnXjVhfRQDHqPt%2FigBO9QZdnUUP4sjnnyzsYMy%2FPrIsE5z2TDcqo6FW3F8uXgnIQvgjRYrl9fc13Ylz24Y8imeyiOYNlFG1JlSvflWt%2FEuXcRer9O6999%2F8dJtcQpHJbKSOClrZ8wqb2C4VF92ELBkfr9mrDo7SHVDU2%2BS0fkVCtQe%2FN1pNVk81JFlX0K64GxCtu0VCQB8oRP%2BRie%2FYmilbyyWn1yEcjmIzUDOAJ7vT1CVs7reXJyWENRvozzd2Gk9NPgrPba9HMxtbMoMVdnPmoHGJa336AuYsw5p7TTFMRVG%2BSI8HkKssR8ZeZNC%2FvLxJDOB38vhvTndCbNVXQD0UT6L5tswUtn4n%2FLXaD%2BLwEy%2F%2B3n4z8JSM6BNRXCtL2e8cNw6hU12iU87ax90wEbTYftqQkMNiFyr4GOqUB0q5B0gAqgsEYunR0hn0DenApiirBl5Z0pIkuOhs3h0uJK1EszNrupQidXfoH0rJ1Dm0LlOdiswTf0sYI%2FCJLGtNkdElls%2BncJLJM%2BEiVllse8Ubbpbph4%2FD3PAivwhEm9%2F3LmbtNBlJnRNzd3%2BcIH80pQkew3iZqXRkoy6b5Xw41zmTNJiXMxaI6SIJgqOSNO57BO6giCWAhANqJQe1cq349Oyd7&X-Amz-Signature=8d8b46824d198eed0c88a73573a280978fbfbc66e2b9737291486cdf0a7a5196&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AAOJQ2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXsfoS5dKJt9UFYl7S%2FR%2B2Se07f%2FKDHNQiWO3n2TyPjAiEAjlw%2F%2Bdh92uhMz9VDi%2Bjln3YbLiWzuzqZ6dg23ywKSGwqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbS4ovvKQX2%2Fk2utSrcA1kbawHEDo8%2B21vIpksB03ugVYjM4dW%2B%2FB3ERUoG%2BtbsfMmFO0L%2FpaqCTxtcYsocA5fHK1%2FobUBW%2B1UrYOLJdOkhXxPKzoQSz9ROxnJI%2F7zwGXB1rOrpz9eS47RsqctxiGnLj985Cr6UUi9TXQXvYo5Ayx09Z61lzQhuG7ld%2B7yv1ghkIL8VPBKdOHTCiZ5CpTp9pIN8xAoy9mz7HlF5mDuzBaP%2Bg95xEnXjVhfRQDHqPt%2FigBO9QZdnUUP4sjnnyzsYMy%2FPrIsE5z2TDcqo6FW3F8uXgnIQvgjRYrl9fc13Ylz24Y8imeyiOYNlFG1JlSvflWt%2FEuXcRer9O6999%2F8dJtcQpHJbKSOClrZ8wqb2C4VF92ELBkfr9mrDo7SHVDU2%2BS0fkVCtQe%2FN1pNVk81JFlX0K64GxCtu0VCQB8oRP%2BRie%2FYmilbyyWn1yEcjmIzUDOAJ7vT1CVs7reXJyWENRvozzd2Gk9NPgrPba9HMxtbMoMVdnPmoHGJa336AuYsw5p7TTFMRVG%2BSI8HkKssR8ZeZNC%2FvLxJDOB38vhvTndCbNVXQD0UT6L5tswUtn4n%2FLXaD%2BLwEy%2F%2B3n4z8JSM6BNRXCtL2e8cNw6hU12iU87ax90wEbTYftqQkMNiFyr4GOqUB0q5B0gAqgsEYunR0hn0DenApiirBl5Z0pIkuOhs3h0uJK1EszNrupQidXfoH0rJ1Dm0LlOdiswTf0sYI%2FCJLGtNkdElls%2BncJLJM%2BEiVllse8Ubbpbph4%2FD3PAivwhEm9%2F3LmbtNBlJnRNzd3%2BcIH80pQkew3iZqXRkoy6b5Xw41zmTNJiXMxaI6SIJgqOSNO57BO6giCWAhANqJQe1cq349Oyd7&X-Amz-Signature=676d17ed8246f51f407c0e681ebedaa01707fddab5d99763ae113e5ec2031168&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
