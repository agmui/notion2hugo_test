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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV52QNFH%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAPn5Ff2UGYsJse7ZmcE00W3vmgacUxrJYKw%2BtULY3KXAiEArgOEwmmarUdeX7M3i0gt%2FvA74Wp%2FpsYpTnoTWOVG6O8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHyIjfpFCgz0VKUg7CrcA0WIUv6y313uDO6FNPwUAPumHQodrTG08tZ3ziUZwH%2Bcy6L39qqBA9kDGyzAKDnjLhUfkOWXFY9gvkXqGvsY4PknCkREB2msS9fMnypWCNxMQWx8%2FPjho6Au5xWZ6VQS2dIFzUExRc8TQk%2BqKC8QWvLE8cOtg54o8OhXspX6HzRMGUhiiFJO0wA2xflZN53LjD%2FAf7ObE7yVQ5Hb7%2BCCDspCFKvvQSqkcMFOe8DqZbPPJ4OL3AZIdLjdlg%2Fy3PRhALqcFlj3U1hEeeMLyK%2BhKGXeWQMXjOwYRC5EORQG%2B9hNtzlPNqIfeFqGj1CVEkPsjQ5ynFbaGE8c3Otkj0jqGjWP5lBYlhTT%2FjmK0kF9%2FDTw8XWeP6R8%2Fix8g1OHMxNZr1XlxMhc1w3dcO5IsbrUVWgxPjgNs0pwB6IxxLgQjSc3kj65CgVmVFJQs4ckWBgG159QkUkhZV95xTs7qyh%2FlTGpNDRsEGZ%2BfbDuLGB7jQphLs976ScrD3qhtK05GJId5DsRLqrAKX4Tuh4FeWLcvBWiih8NyoaGGuj51n7rAqB0sfY4C9PWZelCW4i0IQSs3Hf3SusJqgo%2FbUPd9M%2F8ktv4IXnyv7W61byAQUy8mKfCLhiII8PhZtzgxcjtMOeUy70GOqUBjMZtuTaqs%2FJu7I0%2FoD05EzCTKXs5WaZlF63CO2gpfk6Ir0BNgMNDRZ1INaKBzFgfLLznkVgRqrfNOXkqYZ7FQ%2BdwbMT2ygrE%2BrflXejHJy8aY8qQaiE5EP2%2B%2BhblbyLLIhUAH9Q8GwKTB0ExNUgjoK6xYR80pkOAT%2BDc%2B0zGXkdYQR35tQAfT8VCdbQYoeoZ8Y%2F54VsNMlioyImnXfJs6U3QKwds&X-Amz-Signature=3b30faf67bd176a2f354f7ba24c04bfd13149006ce38363cf513877f8683ea54&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV52QNFH%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAPn5Ff2UGYsJse7ZmcE00W3vmgacUxrJYKw%2BtULY3KXAiEArgOEwmmarUdeX7M3i0gt%2FvA74Wp%2FpsYpTnoTWOVG6O8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHyIjfpFCgz0VKUg7CrcA0WIUv6y313uDO6FNPwUAPumHQodrTG08tZ3ziUZwH%2Bcy6L39qqBA9kDGyzAKDnjLhUfkOWXFY9gvkXqGvsY4PknCkREB2msS9fMnypWCNxMQWx8%2FPjho6Au5xWZ6VQS2dIFzUExRc8TQk%2BqKC8QWvLE8cOtg54o8OhXspX6HzRMGUhiiFJO0wA2xflZN53LjD%2FAf7ObE7yVQ5Hb7%2BCCDspCFKvvQSqkcMFOe8DqZbPPJ4OL3AZIdLjdlg%2Fy3PRhALqcFlj3U1hEeeMLyK%2BhKGXeWQMXjOwYRC5EORQG%2B9hNtzlPNqIfeFqGj1CVEkPsjQ5ynFbaGE8c3Otkj0jqGjWP5lBYlhTT%2FjmK0kF9%2FDTw8XWeP6R8%2Fix8g1OHMxNZr1XlxMhc1w3dcO5IsbrUVWgxPjgNs0pwB6IxxLgQjSc3kj65CgVmVFJQs4ckWBgG159QkUkhZV95xTs7qyh%2FlTGpNDRsEGZ%2BfbDuLGB7jQphLs976ScrD3qhtK05GJId5DsRLqrAKX4Tuh4FeWLcvBWiih8NyoaGGuj51n7rAqB0sfY4C9PWZelCW4i0IQSs3Hf3SusJqgo%2FbUPd9M%2F8ktv4IXnyv7W61byAQUy8mKfCLhiII8PhZtzgxcjtMOeUy70GOqUBjMZtuTaqs%2FJu7I0%2FoD05EzCTKXs5WaZlF63CO2gpfk6Ir0BNgMNDRZ1INaKBzFgfLLznkVgRqrfNOXkqYZ7FQ%2BdwbMT2ygrE%2BrflXejHJy8aY8qQaiE5EP2%2B%2BhblbyLLIhUAH9Q8GwKTB0ExNUgjoK6xYR80pkOAT%2BDc%2B0zGXkdYQR35tQAfT8VCdbQYoeoZ8Y%2F54VsNMlioyImnXfJs6U3QKwds&X-Amz-Signature=0743f6368cf9ffd3d79ffe6ca1397d926a88a7e63b29f44978d3c9c9c4db974b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
