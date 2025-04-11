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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC3JXUFE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIBzM4cjO%2Fo1TyXAXTAlkEoj1R11WSHeyq1NPqNpupuasAiA7xCZicRDk1bjtKrfzO4W%2BXe5vf%2BiWuYlHK3KgB%2BemtCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuyA6j8alb4%2Bx72L1KtwDC2NlQHAK%2FUmVErncDhQEFXqgZcUwWrli83HkZqW36svp2NXIviofVQEDChwc6PD5D0he36OqQN0T%2Fh4ojwB1Ro%2FjYzXwme%2FhslCiBn9vOXeD2TyBxYXosy87BlT11CoRkNrJcU2F9s0azZX3e2v5w90qDLXtZWsJMJBRZoYA7fuYEZSfhonpMw0wmsfbljb%2BBK7whXhOFq5p4hZEgLv9vYU3FCkJDjWSBVL0gCK2hkJy%2FZlkrKQ6JKrc1iTmTW9%2FsSXCve5MgHa%2B26gte5Tp5HVR6k7uWFuzc3kkQtDFpZrrj8fm1yh395DL59a6S2NtYQ8yxLIim8Rr%2B7IsrP5sQt9KRzr%2BHnDW0GZaYsVl4bIClDSSmWX1g24fbjQZ%2FyNug7dI%2BgoBfLP1a%2BTbaoX6BK%2BWed0O4N9l1%2Bh8ZdAdYKTZq4f%2FESZuzrQJXr5hLj49u3%2FR4rUH%2Fm%2BSWBJNlsUl83HYURzT%2FLZ6riDGD%2Brcjj6fxWd4pnOsGAXfw6zUVnLlK2QrCoxTKfX4rI%2BOm6N2pATib%2FpEZyH5I5RCtmx1AOCHMGYdb11WBJAdg2dytuYuybRgvb5WYpgJAAxghUqujcSkTPamUPEaPk6IfgvVacw0yLYp3cedlQ01oNIwz8rjvwY6pgE6IajZEF12LRVXSrGpDegXWhpFQE1L6NKkz60RyaM3UHhLQdE1z5Ejdu1SUeDLD53EtPUQamAkLm8CDe3ghIYlW8Ad%2BHz1Mzl7GPMEIKAVhQ%2ByLS5od7RvCCkt8M8l2XEF3WXJ26B4LELFz0aPB9A4D5WYh4NG93rmLJsdUm3zM0Krk2MPM24mL5rgHnxc2%2Ff742u92g9rRacuWL1kCbkQTcuczA%2Fx&X-Amz-Signature=d3e8230a165750d7659f96eecaaa4a974825dc3f32a65ae02b8742c6365865e2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC3JXUFE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIBzM4cjO%2Fo1TyXAXTAlkEoj1R11WSHeyq1NPqNpupuasAiA7xCZicRDk1bjtKrfzO4W%2BXe5vf%2BiWuYlHK3KgB%2BemtCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuyA6j8alb4%2Bx72L1KtwDC2NlQHAK%2FUmVErncDhQEFXqgZcUwWrli83HkZqW36svp2NXIviofVQEDChwc6PD5D0he36OqQN0T%2Fh4ojwB1Ro%2FjYzXwme%2FhslCiBn9vOXeD2TyBxYXosy87BlT11CoRkNrJcU2F9s0azZX3e2v5w90qDLXtZWsJMJBRZoYA7fuYEZSfhonpMw0wmsfbljb%2BBK7whXhOFq5p4hZEgLv9vYU3FCkJDjWSBVL0gCK2hkJy%2FZlkrKQ6JKrc1iTmTW9%2FsSXCve5MgHa%2B26gte5Tp5HVR6k7uWFuzc3kkQtDFpZrrj8fm1yh395DL59a6S2NtYQ8yxLIim8Rr%2B7IsrP5sQt9KRzr%2BHnDW0GZaYsVl4bIClDSSmWX1g24fbjQZ%2FyNug7dI%2BgoBfLP1a%2BTbaoX6BK%2BWed0O4N9l1%2Bh8ZdAdYKTZq4f%2FESZuzrQJXr5hLj49u3%2FR4rUH%2Fm%2BSWBJNlsUl83HYURzT%2FLZ6riDGD%2Brcjj6fxWd4pnOsGAXfw6zUVnLlK2QrCoxTKfX4rI%2BOm6N2pATib%2FpEZyH5I5RCtmx1AOCHMGYdb11WBJAdg2dytuYuybRgvb5WYpgJAAxghUqujcSkTPamUPEaPk6IfgvVacw0yLYp3cedlQ01oNIwz8rjvwY6pgE6IajZEF12LRVXSrGpDegXWhpFQE1L6NKkz60RyaM3UHhLQdE1z5Ejdu1SUeDLD53EtPUQamAkLm8CDe3ghIYlW8Ad%2BHz1Mzl7GPMEIKAVhQ%2ByLS5od7RvCCkt8M8l2XEF3WXJ26B4LELFz0aPB9A4D5WYh4NG93rmLJsdUm3zM0Krk2MPM24mL5rgHnxc2%2Ff742u92g9rRacuWL1kCbkQTcuczA%2Fx&X-Amz-Signature=a097e83ccb9cf8e1e7f27ec0d159f2cde7abda6c4eedb7e0706f044d74cd5c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
