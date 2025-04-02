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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMIAB44%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCuyTg2cu5CcjqDQloobEEX8F1Iu%2BYu4qlf0G5p5dbrjQIgWm3im7k7G3sNaftWVgyZmIAL78nlSW2MHIGcvVrB7D0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqfu0uYbXJ%2BVxxzlyrcAwIwqMjWSF0wXIY8lkUBr468hkaqEFQHrRPKP4abSuy0XIIQ6VOdV%2FLmUb43PtSS51faNpf1e7AEdLtaYSGENyohTr1bgHl0uB1099YoJve5q0GbeMn3SJI5HgXT%2BYQdlDhddKmhLmYtbAP4794af62zEzsM4vTZE1Eia%2FAc8iT1KfIuI247uKTlvY7esmGlIiexXZCA%2FH1IDyEmB4e2Q69CwEPDiWnW4MJ9zETyl5UaX%2FB3HiJ7h8gwEEUfkwctp%2BHZcUixjE7bz1Z3Sv%2B2P7FbkxIyoKJIozkdiYRvMnEi5gMvdUIyRVZB2r7%2FxHHwnipTIQuM%2Ff49VKy7xZCMpozKcrSm0Fbmw8etUSHLEkC35NDy2ch7YuZkR8PsQMG9ePq6NZ1rooA%2BxiXvyZ0SaA4wVYAsNFgzX4YysUSI9WCwq4mtQJpDmdlxwOAxncms7Tk7A0YJqwkluRx5hzaVgUv%2Fd2yqjeXkWdoYqlWVoVD1U%2Bau3TvqEfRCfBtOVnHvUAi8l%2BX08Kr5PeSUJgxL4xgHhRK4UCq3refF7fZPMPlv05QbcAyjLlZtWAlyA0zruWoKOcgLDP2FL9b5S3kktLVNzuYeJWx2BLt8K38Iirv0BhKWqyxwECWy31W2MLKmtr8GOqUBU1PTBVE7JwCGHgMxPX0WcLk0NxPlOWV%2F18MjHxubJeNxDJAMH%2FgRO7JK0GkHvydJFlCzrx47th9HGT3VBzwe6f3K7Cd%2FKn9pBPFUq5OgG7F7xOP4%2Bqsp5GdVCuq0lF4vj70QXRe2%2FkQrPpBsk4oxOLjCJR2ZVJyLjjo%2Fn2A82RuXihNwrRjQShPxUD0WMTlN0e7VljCwNd2tjtVT8%2Fn40uAovLM%2B&X-Amz-Signature=e41b807c071ac295b61c765a4a30d9ce03c80800b00de1aa9ebdcb280aaafe47&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMIAB44%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCuyTg2cu5CcjqDQloobEEX8F1Iu%2BYu4qlf0G5p5dbrjQIgWm3im7k7G3sNaftWVgyZmIAL78nlSW2MHIGcvVrB7D0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqfu0uYbXJ%2BVxxzlyrcAwIwqMjWSF0wXIY8lkUBr468hkaqEFQHrRPKP4abSuy0XIIQ6VOdV%2FLmUb43PtSS51faNpf1e7AEdLtaYSGENyohTr1bgHl0uB1099YoJve5q0GbeMn3SJI5HgXT%2BYQdlDhddKmhLmYtbAP4794af62zEzsM4vTZE1Eia%2FAc8iT1KfIuI247uKTlvY7esmGlIiexXZCA%2FH1IDyEmB4e2Q69CwEPDiWnW4MJ9zETyl5UaX%2FB3HiJ7h8gwEEUfkwctp%2BHZcUixjE7bz1Z3Sv%2B2P7FbkxIyoKJIozkdiYRvMnEi5gMvdUIyRVZB2r7%2FxHHwnipTIQuM%2Ff49VKy7xZCMpozKcrSm0Fbmw8etUSHLEkC35NDy2ch7YuZkR8PsQMG9ePq6NZ1rooA%2BxiXvyZ0SaA4wVYAsNFgzX4YysUSI9WCwq4mtQJpDmdlxwOAxncms7Tk7A0YJqwkluRx5hzaVgUv%2Fd2yqjeXkWdoYqlWVoVD1U%2Bau3TvqEfRCfBtOVnHvUAi8l%2BX08Kr5PeSUJgxL4xgHhRK4UCq3refF7fZPMPlv05QbcAyjLlZtWAlyA0zruWoKOcgLDP2FL9b5S3kktLVNzuYeJWx2BLt8K38Iirv0BhKWqyxwECWy31W2MLKmtr8GOqUBU1PTBVE7JwCGHgMxPX0WcLk0NxPlOWV%2F18MjHxubJeNxDJAMH%2FgRO7JK0GkHvydJFlCzrx47th9HGT3VBzwe6f3K7Cd%2FKn9pBPFUq5OgG7F7xOP4%2Bqsp5GdVCuq0lF4vj70QXRe2%2FkQrPpBsk4oxOLjCJR2ZVJyLjjo%2Fn2A82RuXihNwrRjQShPxUD0WMTlN0e7VljCwNd2tjtVT8%2Fn40uAovLM%2B&X-Amz-Signature=bf3b0bf05afa2460c20a8ac1d8cdb1f82b09ea250d5b7d9554c5f17ace8ee6be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
