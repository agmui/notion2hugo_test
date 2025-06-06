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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ER6TFU4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0wwRGnYAlRYNyyF8XMnwV%2BrpJxPvBHZ%2FGmBDps2IaIgIhANb9PJ5DmT7yJ9uUPb35sJNwq%2B1CUwJb3RDKC8PY1rPhKv8DCF4QABoMNjM3NDIzMTgzODA1IgyPUJSWFJZCb9LrVsMq3AP4YiPfYioCRj5OOj8YoW89jHK4kcmHnaM%2Bj1daFsx64cCLSpF6r%2FHBR%2FfRpIr8N%2BWt6qqBfrI6ZyNoNe%2F60tP6iQUCpmWa7OfGZcXlz%2BI0JMX7xWXVRhDYuiJpjvFrm4kYLCdUNsDjhz7CHpteGJZmKU77f4ZhTPxAjhV1P5Rtcg8Qh8b5TnEQM9%2FYa%2FufojHlIW91JwVx1tArcA%2FKK7TIg%2BzgbApJXZ4ONWKp%2B6E0fAfxteO2bO6AnoV%2BxNSkB1M3o6EL1284U3%2Bz6quhbANoKkvBjHE4z%2B38KeNcpoOR7VowBu3CDwSaaXl9eX4T6GpBoVFyXf2OKTQp5DEwuMjChgGbhIUHpCdepB6qu7NSg%2FhZXa5CF68%2B0doYL8EtLie08EF2Soc4fezRP1LDrExLc8%2F369HBuNa4Ocq0LJJmjLHbMzHEnLW1c%2BgO15E%2B4nCUqE5fKH4dq%2BmyeUoZJakXawuO%2B2P%2Bg9lSNAPGB%2BzhOjPl2WaMY4VqcWv%2BWLnIvfgc38JQ6Z5NmLHZ6FCc2A4JK72u23Nk%2BXOLdCXuc%2FafkGhEqQk8JUt0XHIoQbQRi9kSyeF3UB%2Bx53nnuc0ntdnfaq0xYh42EL2MN9VoWQ8FvjZua7fImENpx%2FVVjzDyvYvCBjqkAYgLcmFn8WcStBab6MKL4w03vvTUKqSx9XanzNWD%2BpBffopGkqmn96UXn4p9g%2BJudPsW25U6mQHkNPc0bErTdv99jUnESWGlVPhiYMITlD8heZ%2BtDJ1cZUOSS%2BPoiNGlv5Upu3arzLQohgwXDUPjQqSVcYFq3L6LTXPK8U35fopXXaVJMkNZBN43H%2FVhKIySXpMYIHFIVMBG%2B1YLRh6bJDJfVkMf&X-Amz-Signature=9e079e910ed9bbe072eb6b69b981cfbfd8a6f5d930da5987d627d445089182af&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ER6TFU4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0wwRGnYAlRYNyyF8XMnwV%2BrpJxPvBHZ%2FGmBDps2IaIgIhANb9PJ5DmT7yJ9uUPb35sJNwq%2B1CUwJb3RDKC8PY1rPhKv8DCF4QABoMNjM3NDIzMTgzODA1IgyPUJSWFJZCb9LrVsMq3AP4YiPfYioCRj5OOj8YoW89jHK4kcmHnaM%2Bj1daFsx64cCLSpF6r%2FHBR%2FfRpIr8N%2BWt6qqBfrI6ZyNoNe%2F60tP6iQUCpmWa7OfGZcXlz%2BI0JMX7xWXVRhDYuiJpjvFrm4kYLCdUNsDjhz7CHpteGJZmKU77f4ZhTPxAjhV1P5Rtcg8Qh8b5TnEQM9%2FYa%2FufojHlIW91JwVx1tArcA%2FKK7TIg%2BzgbApJXZ4ONWKp%2B6E0fAfxteO2bO6AnoV%2BxNSkB1M3o6EL1284U3%2Bz6quhbANoKkvBjHE4z%2B38KeNcpoOR7VowBu3CDwSaaXl9eX4T6GpBoVFyXf2OKTQp5DEwuMjChgGbhIUHpCdepB6qu7NSg%2FhZXa5CF68%2B0doYL8EtLie08EF2Soc4fezRP1LDrExLc8%2F369HBuNa4Ocq0LJJmjLHbMzHEnLW1c%2BgO15E%2B4nCUqE5fKH4dq%2BmyeUoZJakXawuO%2B2P%2Bg9lSNAPGB%2BzhOjPl2WaMY4VqcWv%2BWLnIvfgc38JQ6Z5NmLHZ6FCc2A4JK72u23Nk%2BXOLdCXuc%2FafkGhEqQk8JUt0XHIoQbQRi9kSyeF3UB%2Bx53nnuc0ntdnfaq0xYh42EL2MN9VoWQ8FvjZua7fImENpx%2FVVjzDyvYvCBjqkAYgLcmFn8WcStBab6MKL4w03vvTUKqSx9XanzNWD%2BpBffopGkqmn96UXn4p9g%2BJudPsW25U6mQHkNPc0bErTdv99jUnESWGlVPhiYMITlD8heZ%2BtDJ1cZUOSS%2BPoiNGlv5Upu3arzLQohgwXDUPjQqSVcYFq3L6LTXPK8U35fopXXaVJMkNZBN43H%2FVhKIySXpMYIHFIVMBG%2B1YLRh6bJDJfVkMf&X-Amz-Signature=f43670fe89e546e55b4bf31c5c81faee6eda5ad52cf7b601c79501547a37d5b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
