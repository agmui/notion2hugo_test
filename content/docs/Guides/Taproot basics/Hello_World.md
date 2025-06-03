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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675R7YGNW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFmdXXPJ3SnGj7zTcbt3W8bTlfXQ4eWYsn3zOsgcLRdrAiEAz%2BkfNBt6%2BFFe3qOksas%2F0PaI3CqKdjOOnjmMnBoR2QMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHkCbfcK4WJI47dInSrcA4swj1lujAmvhGWrwfl1A865Nkc3cFVHk9Pk%2BSNVV9cqso80n4Au6R2P3InpZjPw4%2FAiK6GUfGmvqx9PxcD%2B2qbIrGHV8IWEPiYowChOTJkdJz7CmtTwWGWGyqTivSMqe5eh6fbCe6r0yICt1tHq%2BtNPupeP162KikW6TlieV19EL2%2FiuU%2BhjnTZ9BSEDtCtE9xXQtNOLbwmaa9lDBJfbu8JUXoWLkj2XB45y1dkZBrWA0pCLia3HdoIe%2BPDOPU4wYxBVT1IfHuZ3Yef4jDP1UgmqsRq%2B2HdMwMrWh3IWaml5%2F%2FFHZXnAUHSzyJ91u26d2elkTJXKErYUJ1KGejfmtIv61nmQpa7pzh2LPw6MC5g6aajpfglk%2BsuZbhVaEGl6vNyWVwKpYoQMjRApOLvsfSMAa7Mf9KVIKGymo68bEYn7hx8LFCYXDvdnB95fK2TA7%2B6AxTqA9fAxSlYT05VjcPGvj0SZYgc%2BjNn%2Fo3lC1SHLqUlN5WMQszqs6QvOSJ4HLOJ0rN3ZKE9xgWd5MMPDuOrHTDGmKw8XQ%2B0ceF0fxMLF23xvbqmSFlhxfykitMLQVqggV5jtBoXY3GmTiKhKHWfPHydaFHsF9rGPlMpW4Ymq9qHHG0GMMpvo0GaMJ6t%2B8EGOqUBtPj%2BYJYXGQ0W3mMA83fHHGd4QT9AUwTRE7iIY7FipbO1wwk40muIFMRlCrhY4HTtpYtB230Eu25JmjI4bhvUDwx82ohiHod9rkyztkuWjBf3CSp3mzVRXcWYKg4oUTBK1nuDdqlhR7oRYN3JYoIOW28jGzQfroTfZxmjGV4zTpzSiW3VRJfTcwsybzElbccg2WVmnskqvGcAgbhuiBLvJG3uc6d8&X-Amz-Signature=884a69bc6efe5e16c3988c29bebb9831c5474ccf879193e8beaef298a5b2343a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675R7YGNW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFmdXXPJ3SnGj7zTcbt3W8bTlfXQ4eWYsn3zOsgcLRdrAiEAz%2BkfNBt6%2BFFe3qOksas%2F0PaI3CqKdjOOnjmMnBoR2QMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHkCbfcK4WJI47dInSrcA4swj1lujAmvhGWrwfl1A865Nkc3cFVHk9Pk%2BSNVV9cqso80n4Au6R2P3InpZjPw4%2FAiK6GUfGmvqx9PxcD%2B2qbIrGHV8IWEPiYowChOTJkdJz7CmtTwWGWGyqTivSMqe5eh6fbCe6r0yICt1tHq%2BtNPupeP162KikW6TlieV19EL2%2FiuU%2BhjnTZ9BSEDtCtE9xXQtNOLbwmaa9lDBJfbu8JUXoWLkj2XB45y1dkZBrWA0pCLia3HdoIe%2BPDOPU4wYxBVT1IfHuZ3Yef4jDP1UgmqsRq%2B2HdMwMrWh3IWaml5%2F%2FFHZXnAUHSzyJ91u26d2elkTJXKErYUJ1KGejfmtIv61nmQpa7pzh2LPw6MC5g6aajpfglk%2BsuZbhVaEGl6vNyWVwKpYoQMjRApOLvsfSMAa7Mf9KVIKGymo68bEYn7hx8LFCYXDvdnB95fK2TA7%2B6AxTqA9fAxSlYT05VjcPGvj0SZYgc%2BjNn%2Fo3lC1SHLqUlN5WMQszqs6QvOSJ4HLOJ0rN3ZKE9xgWd5MMPDuOrHTDGmKw8XQ%2B0ceF0fxMLF23xvbqmSFlhxfykitMLQVqggV5jtBoXY3GmTiKhKHWfPHydaFHsF9rGPlMpW4Ymq9qHHG0GMMpvo0GaMJ6t%2B8EGOqUBtPj%2BYJYXGQ0W3mMA83fHHGd4QT9AUwTRE7iIY7FipbO1wwk40muIFMRlCrhY4HTtpYtB230Eu25JmjI4bhvUDwx82ohiHod9rkyztkuWjBf3CSp3mzVRXcWYKg4oUTBK1nuDdqlhR7oRYN3JYoIOW28jGzQfroTfZxmjGV4zTpzSiW3VRJfTcwsybzElbccg2WVmnskqvGcAgbhuiBLvJG3uc6d8&X-Amz-Signature=ed958020bfb70aad2833a3b69d18b43a789cf64f93237f24be8090355a93a1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
