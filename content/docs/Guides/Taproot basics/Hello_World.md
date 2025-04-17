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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQI6YYDM%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHUzNLsgq0ZvDJO9yRGwmZOLm9M%2B6xqJwpKGqijhoigAiEA5sseuYRI6Ldg1TQAc7%2FILqXTSHPr5bqq7IASFW3Qlfsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDK1cWg9g2WWSzlJsKyrcAyY6gpbT43xLNb2lRJ4lFoUw3H87TtbI0XB0dhVaQPkLo21oZExLod6WQVBZcZaGVOUkFr2RiE0iJCSn%2Fk%2B7TETPgfZC%2F0B3wPy2TptGHjWOD%2BWvydXjYhEIhkHkpI89%2B3%2FkPkkuA%2BIf9fb%2BsF%2FvXWXivvu1EqDoLjNScvsytCOuDbg4qz6Cb8EdMZY3qOVqdgIIg9CybIP3LI4JcJ0zMcYbdTedRnAfxrBIzUlLyD7Gn9ShYnWhUJXve6C7u9t9Z%2FZ%2FPcjXYziW9HwioQ69AAYWvQEc25RBeDpzcmLkmMd%2BJeixptdU56lWo%2BOZgN9WPGgT5UQ0vkLiENB5YeYLwl%2Blfo5ozoa4s5vAaINexoH8rPnA6s0ZaXSV1iUSLX8%2F5YRo98OUAa53Lxd4yLmHYHacRAVsoCho%2Bbl%2F0MlybbWjWHb4AMayOUIT8tApJZ6522wU7XdGu1vx9jJa5rYPZklz8fYbaLf38UzCjsFFakCrll%2B9taddbCOk5ysejPNqK9dxthSzYuNJLpVZQ0sEjv7xhnRJUcaIWDO3Hpz1aXmUxZZbOK00vBWNsc74%2F3%2BvR2VA3QF51ABZIg7Mq3Ugb36aB%2Fn4VSXdUdJQDzSrodb1BFpwrKlVFK1LX0UeMJXKhMAGOqUBRmH%2FvfmROFYR78yr%2FJg1GhoSLf9d2CmXVVkpdg3%2BbKONJ79aInPJQfbCGjA3a0IZnIqkJ0V8jbf63Q4wXEcIIsC2Gs9t0XqcIHIuBH19ZGSv7NhT21snpnx5mivw0DKlMUiAm%2BWM%2BXGbGKKdQgdgg8v0Q9HjCN7z%2BUr2274Hyx1v5lyotGOpIptur%2F2H9kZyrrS058oOfwwrmtxwMpIR9dMvllPE&X-Amz-Signature=5b52fbf752bdb1a733ea2552a47a121c133320486ad1dd47d74be3ccb62386f7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQI6YYDM%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHUzNLsgq0ZvDJO9yRGwmZOLm9M%2B6xqJwpKGqijhoigAiEA5sseuYRI6Ldg1TQAc7%2FILqXTSHPr5bqq7IASFW3Qlfsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDK1cWg9g2WWSzlJsKyrcAyY6gpbT43xLNb2lRJ4lFoUw3H87TtbI0XB0dhVaQPkLo21oZExLod6WQVBZcZaGVOUkFr2RiE0iJCSn%2Fk%2B7TETPgfZC%2F0B3wPy2TptGHjWOD%2BWvydXjYhEIhkHkpI89%2B3%2FkPkkuA%2BIf9fb%2BsF%2FvXWXivvu1EqDoLjNScvsytCOuDbg4qz6Cb8EdMZY3qOVqdgIIg9CybIP3LI4JcJ0zMcYbdTedRnAfxrBIzUlLyD7Gn9ShYnWhUJXve6C7u9t9Z%2FZ%2FPcjXYziW9HwioQ69AAYWvQEc25RBeDpzcmLkmMd%2BJeixptdU56lWo%2BOZgN9WPGgT5UQ0vkLiENB5YeYLwl%2Blfo5ozoa4s5vAaINexoH8rPnA6s0ZaXSV1iUSLX8%2F5YRo98OUAa53Lxd4yLmHYHacRAVsoCho%2Bbl%2F0MlybbWjWHb4AMayOUIT8tApJZ6522wU7XdGu1vx9jJa5rYPZklz8fYbaLf38UzCjsFFakCrll%2B9taddbCOk5ysejPNqK9dxthSzYuNJLpVZQ0sEjv7xhnRJUcaIWDO3Hpz1aXmUxZZbOK00vBWNsc74%2F3%2BvR2VA3QF51ABZIg7Mq3Ugb36aB%2Fn4VSXdUdJQDzSrodb1BFpwrKlVFK1LX0UeMJXKhMAGOqUBRmH%2FvfmROFYR78yr%2FJg1GhoSLf9d2CmXVVkpdg3%2BbKONJ79aInPJQfbCGjA3a0IZnIqkJ0V8jbf63Q4wXEcIIsC2Gs9t0XqcIHIuBH19ZGSv7NhT21snpnx5mivw0DKlMUiAm%2BWM%2BXGbGKKdQgdgg8v0Q9HjCN7z%2BUr2274Hyx1v5lyotGOpIptur%2F2H9kZyrrS058oOfwwrmtxwMpIR9dMvllPE&X-Amz-Signature=4805cdd6a45a623e365a566d7a50aacd76a3826a9840f19f984bf9a187f6c690&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
