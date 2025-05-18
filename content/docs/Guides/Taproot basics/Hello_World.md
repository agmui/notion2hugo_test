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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCRCYAR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCZB5CBmf3g7Jjg5KXhfeqpQelJvc3aUZiuboySYqY%2BAIga2g6J3mxruY6G216LkiO%2BzjP9JDXrkuVWIwrNxkwwikq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDESfr3s%2Bt3PBmse8tyrcA%2Fm5mxclhUC%2B9%2BzH01N8jNdK6Ny6faVYi8URzvpCsjKBk4m3vyKkPwm7fAyjvxXBf6DZEmUKuHOUFlOtK0GzENNadEoNO4UDYLjVoMQoXIanXeVHL9cOoMeDmG%2BWcYov3qUbraidlzdpH5z9oVIWsVI7GTJmZB%2F1U%2FjjnrOfDJR98wIluMi%2FLoCZB4K7Kp1KN32MMcb5dZMIgy%2BkQ5YSNtZNIa67b8vDyRyR182pVCM38Pc9MKRrYKAIVJO3MfeeTjK142WgABLJOq1JHm%2FlYiCxLXSLWRSRrWTUWCOX0P%2BmLQVw6zChIQn7NEQ0zL2mNtGYh2BrHzY6hP8YTF%2FdxTOYSjcy8VewcrZxjX5SS0egrPLLOeWm11mpXqT4pT%2FJYcCplPPv6xAhGvFkE9cJ6hfrZDwieSumLmyvheYmmNGM71IG6rF0P7mAz7RLSpCueV7KBtbz%2FpjoDU4p99uXIoRJf9%2ByZgsQFn%2BEsXYkAJLe7pPnPH09C7lROrfpPHTSEBihcoxtc64H%2B8Uf4kYlWS77WNfJLYsGvmKVvXLhI2QeXD4aKzXpwYHoBuJuT5dSiSqldSIi9srV3fDuJwDRDNqOQc7%2FkRcRHlrDr1AORr59bHyn2iSGTlofoML1MJGPp8EGOqUBcZsL8u9MaY4lVbF1%2FjXRmKD5KT70V97YfIRyoZZ1fMn4N4bb2ql2kejcEikTFD6%2Fizomvcf2GprY4wjgBO5bJCFggKF2YtOu%2BkIcu7BoT5kyCHIOmQFb%2FlGMXQsWx%2BK%2Fx96fIC5a8d3OTM6TmXDN%2FbZVbDH5o8VT31Zvw8%2FLDqTAAu5yTPiK7rBAFIdfB0E%2BJHGVu25bD64HZp7eia1hsh8OywP5&X-Amz-Signature=086e95a890a3acdb703b5b8a48d0654cf0bb68c4afae28cb49feefdf1c15e507&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCRCYAR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCZB5CBmf3g7Jjg5KXhfeqpQelJvc3aUZiuboySYqY%2BAIga2g6J3mxruY6G216LkiO%2BzjP9JDXrkuVWIwrNxkwwikq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDESfr3s%2Bt3PBmse8tyrcA%2Fm5mxclhUC%2B9%2BzH01N8jNdK6Ny6faVYi8URzvpCsjKBk4m3vyKkPwm7fAyjvxXBf6DZEmUKuHOUFlOtK0GzENNadEoNO4UDYLjVoMQoXIanXeVHL9cOoMeDmG%2BWcYov3qUbraidlzdpH5z9oVIWsVI7GTJmZB%2F1U%2FjjnrOfDJR98wIluMi%2FLoCZB4K7Kp1KN32MMcb5dZMIgy%2BkQ5YSNtZNIa67b8vDyRyR182pVCM38Pc9MKRrYKAIVJO3MfeeTjK142WgABLJOq1JHm%2FlYiCxLXSLWRSRrWTUWCOX0P%2BmLQVw6zChIQn7NEQ0zL2mNtGYh2BrHzY6hP8YTF%2FdxTOYSjcy8VewcrZxjX5SS0egrPLLOeWm11mpXqT4pT%2FJYcCplPPv6xAhGvFkE9cJ6hfrZDwieSumLmyvheYmmNGM71IG6rF0P7mAz7RLSpCueV7KBtbz%2FpjoDU4p99uXIoRJf9%2ByZgsQFn%2BEsXYkAJLe7pPnPH09C7lROrfpPHTSEBihcoxtc64H%2B8Uf4kYlWS77WNfJLYsGvmKVvXLhI2QeXD4aKzXpwYHoBuJuT5dSiSqldSIi9srV3fDuJwDRDNqOQc7%2FkRcRHlrDr1AORr59bHyn2iSGTlofoML1MJGPp8EGOqUBcZsL8u9MaY4lVbF1%2FjXRmKD5KT70V97YfIRyoZZ1fMn4N4bb2ql2kejcEikTFD6%2Fizomvcf2GprY4wjgBO5bJCFggKF2YtOu%2BkIcu7BoT5kyCHIOmQFb%2FlGMXQsWx%2BK%2Fx96fIC5a8d3OTM6TmXDN%2FbZVbDH5o8VT31Zvw8%2FLDqTAAu5yTPiK7rBAFIdfB0E%2BJHGVu25bD64HZp7eia1hsh8OywP5&X-Amz-Signature=1b9478d8b5b86edec5c8c27b5a7aef23825671c3b56af80d5c56e1df2fee4f05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
