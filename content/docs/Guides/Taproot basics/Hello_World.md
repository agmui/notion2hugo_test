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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYJAULN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyUTxAuhT8f0QQgnQJwWEaXV%2FhlgSoIkakTWpDCkRm5AiBANfWjITRO%2FREh7U0a7Su3fyjbRdW0fnxoaN0Vk5wv9iqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41voYvcUYDNyjSYsKtwDI1LE9fAi7HRx9t1M6XP6mCcobBlXtlVwoP4%2FWtsGK3mLN2rwIHfuY0x01hPmGusUU5DiO7hqgplWbCZOH1qCUHZU1naIusu6tvTGg7211WnKnU%2BJw8sth1dGpG0F5dNXECaU3qeLEZtLISFUppH4nlxu%2B4H2Oi10dw7WL5jfJiOcGU7GXlzZU7%2FQ%2BXpGzLkzPyXtAFIZy2c2ozPQJ2l0y7jNvg4Q0CxMfIIVxzQLnroilwjD2Qv45vAgkTsXW9ycp3LFBK%2BWvcvzFSVi1E6OyLx50v4IMP5SOHaodx%2F3vckpQCweLjAuoY3N4iHcZDMV51eLRt2G5E%2FN4HoUgrq%2F0k%2B66CJjhYCkJHXqyKmGG7XtVO6gcNVJ3t02FfbS5UdoxEFyLjVdFC%2FJT84hQrOm9aXbfbufllZ9c6cxrwqtxBPQALd6oucCezE2xfqU5S8hddfz%2FbbZTN%2Brzqkq8cT0UXtzskWYlsYKpEh41iGrJTxs0hJFahPUftvyilhInk8vStSQHU7Ey6Al1tRlJxNsObczU50gby%2Fk%2FwUq4eEWW5YmuALaKX9kVwwpdyR1hj%2BKHbX0rj4L2qHmxfpKMRJyjBYPbMxtXjq72Mh4d00JNvi%2FmzNOFRfY%2BTlpticw0vfLvgY6pgH%2FVCnVx%2BaLNJ4AjZM5LAcTBsV14n%2BT0%2B02cApTKrrttgEzPYNC7Lz0VZy7Wq5ioOECyAQOeOqn4fQWb2fIGLxvhlLXIB6btOOnHhcGu4RDWeRdJKl7RJ14DGzIDZcr4k83QKOzBr9s2lhdy9b%2BZFWfq4IrrTFvIcd7cSSj2WC%2BFF4qpWW7w1avtYObCCjxKyD7ODSNTWdqLSgjeGr%2BhCQfbDGtUAm7&X-Amz-Signature=d7fdc4c13a6c294ca200660be125ad4ab22a16c921666a36a4eed4948df8b910&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYJAULN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyUTxAuhT8f0QQgnQJwWEaXV%2FhlgSoIkakTWpDCkRm5AiBANfWjITRO%2FREh7U0a7Su3fyjbRdW0fnxoaN0Vk5wv9iqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41voYvcUYDNyjSYsKtwDI1LE9fAi7HRx9t1M6XP6mCcobBlXtlVwoP4%2FWtsGK3mLN2rwIHfuY0x01hPmGusUU5DiO7hqgplWbCZOH1qCUHZU1naIusu6tvTGg7211WnKnU%2BJw8sth1dGpG0F5dNXECaU3qeLEZtLISFUppH4nlxu%2B4H2Oi10dw7WL5jfJiOcGU7GXlzZU7%2FQ%2BXpGzLkzPyXtAFIZy2c2ozPQJ2l0y7jNvg4Q0CxMfIIVxzQLnroilwjD2Qv45vAgkTsXW9ycp3LFBK%2BWvcvzFSVi1E6OyLx50v4IMP5SOHaodx%2F3vckpQCweLjAuoY3N4iHcZDMV51eLRt2G5E%2FN4HoUgrq%2F0k%2B66CJjhYCkJHXqyKmGG7XtVO6gcNVJ3t02FfbS5UdoxEFyLjVdFC%2FJT84hQrOm9aXbfbufllZ9c6cxrwqtxBPQALd6oucCezE2xfqU5S8hddfz%2FbbZTN%2Brzqkq8cT0UXtzskWYlsYKpEh41iGrJTxs0hJFahPUftvyilhInk8vStSQHU7Ey6Al1tRlJxNsObczU50gby%2Fk%2FwUq4eEWW5YmuALaKX9kVwwpdyR1hj%2BKHbX0rj4L2qHmxfpKMRJyjBYPbMxtXjq72Mh4d00JNvi%2FmzNOFRfY%2BTlpticw0vfLvgY6pgH%2FVCnVx%2BaLNJ4AjZM5LAcTBsV14n%2BT0%2B02cApTKrrttgEzPYNC7Lz0VZy7Wq5ioOECyAQOeOqn4fQWb2fIGLxvhlLXIB6btOOnHhcGu4RDWeRdJKl7RJ14DGzIDZcr4k83QKOzBr9s2lhdy9b%2BZFWfq4IrrTFvIcd7cSSj2WC%2BFF4qpWW7w1avtYObCCjxKyD7ODSNTWdqLSgjeGr%2BhCQfbDGtUAm7&X-Amz-Signature=68e24c40e028149e391024959d0a4a0d17c72c872819ea2962e9831ea673902d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
