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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYDH2ESX%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEEH7n1rIISaknzVR4F%2FegL25e0Ckf4s6SNkOelL6HIuAiBK2J63AQWu56T1szI1wolecZJb6BoDFQB0V8gCXcyyZiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuQrxYrHnmL8yDzeKKtwDF8LBK5Y1T0ptF7RbKAfpEmznIVDGP1nZAkFRkgsS9wsSARf7zoxJ0nXmVhwVnQwx%2B7fpDi6pEKnf%2Fq3XKIeE2ztaf8e0adWBAx6uvs38%2FxiGSFJsv%2F1RsgtEWRQ%2BMIbQVag%2FJeaZSlrE2MoiiG0DsSlwHr%2F5Mn5lv02qAivS3frigsolgvlHoBAsrrKRTV9nzCdiHhWjn4qNXzCG0JDwdpeUlncYVysIdG4QD5jjo%2FK1wh2a10gWzpm1RdE5li%2FlJtHWIGfGIVEhTYKttjcgPY3AzsmMfjjvliwgQ%2FRHi7MRbeZE%2FjAX51uhORj2XAl8JG5zvIh34ZKjgW692p4OQk6%2FPLgRc3Cv3H4%2BhyOHQa9nlbe0r8UZ6uzvkwWZIJZRsWoUXNVGTNPNJsvtStDme4yf%2F%2FC8iEa1B%2BIq9T0jvLRlDBsBcStDQWo3NzSdALh9oZ43GTg4zqToikVl7rDZL2Bp9iEnS3YnPgy%2F5d2IsYb2EJqc2F7rSGSvMC40Fsf5BCCHFCFW0ju3%2B7nWOi5vEdecwcLt%2BIQLmIX0U9WdQJ6VBKTPjvj0ZwavWV66jTJKyMcnHeL91weI2v8bqe5udcYINKvKrTe2X%2BgLfEcGxiQsBwN5%2FLq7dwwF%2B08wlaGDwQY6pgGnu0EjnsiYvvuIC31wZ9smzBw0lXNAH6z0AubzdzrQN5U0pD6awu99IOBqkLLQ1nzuYxnUaBoRKR73qrH3FnIvgDjekKx1mc5ZAZC8pUOpzA0RnB%2BAoqieNzDyS5D9Ew6YeoM7fcEEg1vgIRw%2FpFUnoYNqFg3grN94maOBFhwVvoQvFUQpyRBaa2pCWPM8AFoiTqRR9nACxVZ3hR2gCoUSCLSQDCuQ&X-Amz-Signature=4b50a4f8ebd4baf0a0ce3ac0ea149636af12a9d65908495d006a5d3035fed00b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYDH2ESX%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEEH7n1rIISaknzVR4F%2FegL25e0Ckf4s6SNkOelL6HIuAiBK2J63AQWu56T1szI1wolecZJb6BoDFQB0V8gCXcyyZiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuQrxYrHnmL8yDzeKKtwDF8LBK5Y1T0ptF7RbKAfpEmznIVDGP1nZAkFRkgsS9wsSARf7zoxJ0nXmVhwVnQwx%2B7fpDi6pEKnf%2Fq3XKIeE2ztaf8e0adWBAx6uvs38%2FxiGSFJsv%2F1RsgtEWRQ%2BMIbQVag%2FJeaZSlrE2MoiiG0DsSlwHr%2F5Mn5lv02qAivS3frigsolgvlHoBAsrrKRTV9nzCdiHhWjn4qNXzCG0JDwdpeUlncYVysIdG4QD5jjo%2FK1wh2a10gWzpm1RdE5li%2FlJtHWIGfGIVEhTYKttjcgPY3AzsmMfjjvliwgQ%2FRHi7MRbeZE%2FjAX51uhORj2XAl8JG5zvIh34ZKjgW692p4OQk6%2FPLgRc3Cv3H4%2BhyOHQa9nlbe0r8UZ6uzvkwWZIJZRsWoUXNVGTNPNJsvtStDme4yf%2F%2FC8iEa1B%2BIq9T0jvLRlDBsBcStDQWo3NzSdALh9oZ43GTg4zqToikVl7rDZL2Bp9iEnS3YnPgy%2F5d2IsYb2EJqc2F7rSGSvMC40Fsf5BCCHFCFW0ju3%2B7nWOi5vEdecwcLt%2BIQLmIX0U9WdQJ6VBKTPjvj0ZwavWV66jTJKyMcnHeL91weI2v8bqe5udcYINKvKrTe2X%2BgLfEcGxiQsBwN5%2FLq7dwwF%2B08wlaGDwQY6pgGnu0EjnsiYvvuIC31wZ9smzBw0lXNAH6z0AubzdzrQN5U0pD6awu99IOBqkLLQ1nzuYxnUaBoRKR73qrH3FnIvgDjekKx1mc5ZAZC8pUOpzA0RnB%2BAoqieNzDyS5D9Ew6YeoM7fcEEg1vgIRw%2FpFUnoYNqFg3grN94maOBFhwVvoQvFUQpyRBaa2pCWPM8AFoiTqRR9nACxVZ3hR2gCoUSCLSQDCuQ&X-Amz-Signature=1e6c6c4a44d08bb6ee3574a489b4065bf3548c0c7ee54324d2ea214816403b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
