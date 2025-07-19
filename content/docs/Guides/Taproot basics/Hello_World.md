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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DEA3WJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvTJLUjJSrbcY7uJykCckfS1nWd5bsaf%2BG5iBimugJkAiA0rclQv%2BlLMFwnRIm9LhhggIDQiTjj5DNYrglVIVyS4yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM54DHCvlTT5fJplycKtwD6Q%2FlEiwzFrlI19F5ZTMteo23ezeWIDH3cVk%2BavKADOdaTssZmEQCgO91W3ss4xj4CJX03yAqTXfuE9EvszSzZOaTgJpp2c94tjWyaYR%2BWRjz8a%2Fz3yzAddzwfzuZKw%2F98QOi9Jln%2F7QiLopDkrVmMjtRzPJw708jAfsoJfCe6YcPgiKtmW%2Bo0l5IAXNb4w%2FS5Xru%2BQj4PK%2BVTFT%2FDstwyL%2BYeSBF8Ts%2FFUqIXy2DVlbJTVf%2BNI1q9sJ9tFHiu0oRl2IuPSga8I3pTrXHiRDskjMHqY3YTz7NvjFJOTr1IBCnW%2BHghnPPMoKsIzj77U7Wayzu0ePQ%2FyEzBmL0Xlk0R2cLxlTyZmpxuyID2e5%2BOYu8DMc8t4vN%2FZa%2FvoL5TDyiYFS4dIpMG2gqCKoZji3nPxdxLGIXqEeB%2FVaHCOHqZQNcm5H3F7f%2FM13huC%2BBFGkOflrWuzqDiKzW%2Ftl%2FTkDb94yhFhCBrzBG%2BsZnMY4BibLiwNJvH7y5HaQ7Kh39e8iBBsyu1meDlL54EqM9NY0%2FaE13jquDQd3rw%2BzCje1H7hG0pbDs7WhNDVmCgWIoZ72YhVOwmpyLEmSlsCoKFdCz%2BWLsdtxLPU%2F0kOJHuia4qCvET3o9OESruG1vY%2FQwgvbvwwY6pgHOHVcV9%2B2JtuKlXF%2FPZXOLxWIMp1gNsKAJYgKzx58mAUhyApICud9PGDPEQDqaTQbq92nKMV3CpxoHUnSH2dnM7Kh6o8ZiU8w3qDWR42g0%2F4rVUz3hKkL9tKkO%2Fy%2B2GtS33qxBnZ0r1D2A29kPLNXRmadypYu12%2FywGG1jmn3TCLteoRYsEe6Qhoid0a8sJfFl0bEYhPjh9oNAldoT31XiC9VaJt8N&X-Amz-Signature=f43e82f692f35033b959d345b428d90eb036bdf4f084847da49d08c30e2d47e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DEA3WJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvTJLUjJSrbcY7uJykCckfS1nWd5bsaf%2BG5iBimugJkAiA0rclQv%2BlLMFwnRIm9LhhggIDQiTjj5DNYrglVIVyS4yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM54DHCvlTT5fJplycKtwD6Q%2FlEiwzFrlI19F5ZTMteo23ezeWIDH3cVk%2BavKADOdaTssZmEQCgO91W3ss4xj4CJX03yAqTXfuE9EvszSzZOaTgJpp2c94tjWyaYR%2BWRjz8a%2Fz3yzAddzwfzuZKw%2F98QOi9Jln%2F7QiLopDkrVmMjtRzPJw708jAfsoJfCe6YcPgiKtmW%2Bo0l5IAXNb4w%2FS5Xru%2BQj4PK%2BVTFT%2FDstwyL%2BYeSBF8Ts%2FFUqIXy2DVlbJTVf%2BNI1q9sJ9tFHiu0oRl2IuPSga8I3pTrXHiRDskjMHqY3YTz7NvjFJOTr1IBCnW%2BHghnPPMoKsIzj77U7Wayzu0ePQ%2FyEzBmL0Xlk0R2cLxlTyZmpxuyID2e5%2BOYu8DMc8t4vN%2FZa%2FvoL5TDyiYFS4dIpMG2gqCKoZji3nPxdxLGIXqEeB%2FVaHCOHqZQNcm5H3F7f%2FM13huC%2BBFGkOflrWuzqDiKzW%2Ftl%2FTkDb94yhFhCBrzBG%2BsZnMY4BibLiwNJvH7y5HaQ7Kh39e8iBBsyu1meDlL54EqM9NY0%2FaE13jquDQd3rw%2BzCje1H7hG0pbDs7WhNDVmCgWIoZ72YhVOwmpyLEmSlsCoKFdCz%2BWLsdtxLPU%2F0kOJHuia4qCvET3o9OESruG1vY%2FQwgvbvwwY6pgHOHVcV9%2B2JtuKlXF%2FPZXOLxWIMp1gNsKAJYgKzx58mAUhyApICud9PGDPEQDqaTQbq92nKMV3CpxoHUnSH2dnM7Kh6o8ZiU8w3qDWR42g0%2F4rVUz3hKkL9tKkO%2Fy%2B2GtS33qxBnZ0r1D2A29kPLNXRmadypYu12%2FywGG1jmn3TCLteoRYsEe6Qhoid0a8sJfFl0bEYhPjh9oNAldoT31XiC9VaJt8N&X-Amz-Signature=a219555ee620cb779b9d2ecc013037349478bd1993ad687b0885c74a1b3bd233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
