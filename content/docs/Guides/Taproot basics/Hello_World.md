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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZR23BQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEt3r7lBiAXuFarM9gVzxgj40NnPrHKXDBI8%2BIJuETI5AiEAt2FJzyTBwfhAe9N162hU9q1JiFOfdpmVR4rJWpT6g70qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR83ZeafhR6ArOfDSrcA09rbFvncxNbeFxfXMFnejQzVWNNSEUnlfxsWQxgEXmWLjAHYIPlyezlIysn04HIKzlO5ASyQRTEjXA0Bjh5bayAit8blHJ6TQ1iUCWUJ9B1QjxmE3ZfWzNlu2kgBCSUdmKA%2BAj%2F6P%2Fd4U4RaaLDfIKWMeJSBFNrKjbw0976dEQ2NqPbXX7%2FuB3OYnVnyPT0%2FxHF%2B%2FKvK5q9B6W3psQbkDjIoHEr58VoQ8JKKR3Z9tN24jcymNz44ZUyLpwBD5MtQCJbLk61qJYh9%2B0cOHPFs6YnRZeu9bhUrEUnwioCQx9Ia6EqanWSg64uFD5qGINS4EUQfkzfFJhp6UvmoIMnjkEBsgADzX1qkCWIQUikZ6vRX1o%2F2XIJ%2BPQoHCOiM5NHP9eQVBaJG1aDf92h5DQHmvC1mN%2BUBFRgtha%2BRc1TgGSTOM8lVpjpdIZJ8EeGb%2BC1QcMHwis0ZMoJYRJYznTE00D6gqPQvrodKZ5K1%2F9cBty1VZCjRbn0Beuc5qHgva8an4h8kONo36qmhoezWYFY5gui%2F1TmKHSnfiJA3wUk15tuUm%2BEeYwTYUvLEMsHktiQ%2BpilBpA5Pueiqcx5WLi7vKnAYV8JZpsxMFnjDHhqymYL5qsZV2DdxgsX8MT8MMjwm8AGOqUBVQ0ggbgFYm0qysqwdVB507LvvxH4JE7NkDF8J%2FJIHhXzyEIY5OIIrHOCXLgg48MrFU%2Fqq2C1WxuzjzBwhJnHMS3tLY1tX9vnTKw1Cp1nUuPZ3%2F7f%2BofjUIHwIaMR7p2%2Bn0uZlM0bqFIdo%2Bnvx4mX586oSQzaTTRPA4lnk0jB5EqDtVZtQHJPiee7eL1BGHA892LIPo1Mso0DJGLs6on7dcrtSUfX&X-Amz-Signature=7aa63a5f49279f284ccdbff59a5c27738f9b2661c3698e0d7f8495dd98fda6e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZR23BQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEt3r7lBiAXuFarM9gVzxgj40NnPrHKXDBI8%2BIJuETI5AiEAt2FJzyTBwfhAe9N162hU9q1JiFOfdpmVR4rJWpT6g70qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR83ZeafhR6ArOfDSrcA09rbFvncxNbeFxfXMFnejQzVWNNSEUnlfxsWQxgEXmWLjAHYIPlyezlIysn04HIKzlO5ASyQRTEjXA0Bjh5bayAit8blHJ6TQ1iUCWUJ9B1QjxmE3ZfWzNlu2kgBCSUdmKA%2BAj%2F6P%2Fd4U4RaaLDfIKWMeJSBFNrKjbw0976dEQ2NqPbXX7%2FuB3OYnVnyPT0%2FxHF%2B%2FKvK5q9B6W3psQbkDjIoHEr58VoQ8JKKR3Z9tN24jcymNz44ZUyLpwBD5MtQCJbLk61qJYh9%2B0cOHPFs6YnRZeu9bhUrEUnwioCQx9Ia6EqanWSg64uFD5qGINS4EUQfkzfFJhp6UvmoIMnjkEBsgADzX1qkCWIQUikZ6vRX1o%2F2XIJ%2BPQoHCOiM5NHP9eQVBaJG1aDf92h5DQHmvC1mN%2BUBFRgtha%2BRc1TgGSTOM8lVpjpdIZJ8EeGb%2BC1QcMHwis0ZMoJYRJYznTE00D6gqPQvrodKZ5K1%2F9cBty1VZCjRbn0Beuc5qHgva8an4h8kONo36qmhoezWYFY5gui%2F1TmKHSnfiJA3wUk15tuUm%2BEeYwTYUvLEMsHktiQ%2BpilBpA5Pueiqcx5WLi7vKnAYV8JZpsxMFnjDHhqymYL5qsZV2DdxgsX8MT8MMjwm8AGOqUBVQ0ggbgFYm0qysqwdVB507LvvxH4JE7NkDF8J%2FJIHhXzyEIY5OIIrHOCXLgg48MrFU%2Fqq2C1WxuzjzBwhJnHMS3tLY1tX9vnTKw1Cp1nUuPZ3%2F7f%2BofjUIHwIaMR7p2%2Bn0uZlM0bqFIdo%2Bnvx4mX586oSQzaTTRPA4lnk0jB5EqDtVZtQHJPiee7eL1BGHA892LIPo1Mso0DJGLs6on7dcrtSUfX&X-Amz-Signature=9e07d3761cc9303ee465a7b8e13bb4ad2edc0fc3a90459c0923e83aa201ca814&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
