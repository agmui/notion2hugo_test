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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAM55YN5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD6e4Ht9ko1uLuXw2vWUlMFVOS%2BiPiqegYuEECw2L3DbQIhAOQleX0nIwMPgqC%2BQ28e6qMzg21xGDExMCzosB4AmhQ0KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWrt6RQ3Aow2oJnA8q3ANzz%2FQvDex5cwKSPTwTk4NI0vzuToewm4X0YQqrrU2JIwx2Wa0Mqrj6L3SQOb6Kl21vlwhw8uh5e4Y21068N%2FdXyX1tAYNuyNM5dX1PXjY%2FUexwOk2oBNvS53d0aIEYLkpLsDobP5kxVgD4aLA0ck6H6UVOnG1TMcZDaQJY3cYkhjkZAsHS0dxRvbX6Y87b8qCtVI7g0Oo78TwpZ9m1lIuvTQbnE3FDx0a78MEL2xzb0LWQlT9lG3Q6mlnnWmHO665nrd29AaZGrApl12sI2EArf7h2oOaVdjkJ4jPiRO%2F0GxlY2pJDrrqYhukv7hI%2Bx%2FdYUfayaxLQqGWjuADn4C50x%2FPL1kqYDLDRJt%2F6S3riFl9Gf%2Fo8gjM7HqNRj7YbROrHUKvvq%2FgpWWlMEX7execKCyyD6EsvIyFG%2Fxa%2BIIQGUSMUoNTd7ruVdc5kRkkv5X9q4mVOfj57U3EPc9Yf0weEB%2B4F%2FnY60WIpaIYQ4fYE%2FWEAwrQ9tfccgGnxYMtb1oW6k6AA%2ByxGAmcuZ1UfV2XLonOdjBJEIq34ceQQoWsqa0QSDnXYHm4yGw%2BbcwAsPWnpTwTLA9dZdAgflWPLIintHp3Gl8iVVDkjT%2B%2Fpt4Gf8z0sIoAVBEWe3E83ETCElKnCBjqkATrs63TWIjusBRg3dnBMkjtljVVFz3zSphhrfk%2FRAxZx5F32999xXiu%2F%2Bn9pEm1ELWNSpg%2B9JmndbXxuP%2BgkWWzu3cj2NwXjBnnjEbhAXfdsSWy8ObZDkoMyZsZZPZfRob6Ovj8YsXS73nsXNJjbY3X6kyqIqMwDKfeM%2Fq6XMrKCqoDN6O5eKTm4lrzJo%2B3l7DAZKEnfbgLZQ25LPx9w2kiOsj%2Bl&X-Amz-Signature=216a7168154bec7e5b6e43f9f5922e2ccba68c5301ced895246dc3e1ab1e7ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAM55YN5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD6e4Ht9ko1uLuXw2vWUlMFVOS%2BiPiqegYuEECw2L3DbQIhAOQleX0nIwMPgqC%2BQ28e6qMzg21xGDExMCzosB4AmhQ0KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWrt6RQ3Aow2oJnA8q3ANzz%2FQvDex5cwKSPTwTk4NI0vzuToewm4X0YQqrrU2JIwx2Wa0Mqrj6L3SQOb6Kl21vlwhw8uh5e4Y21068N%2FdXyX1tAYNuyNM5dX1PXjY%2FUexwOk2oBNvS53d0aIEYLkpLsDobP5kxVgD4aLA0ck6H6UVOnG1TMcZDaQJY3cYkhjkZAsHS0dxRvbX6Y87b8qCtVI7g0Oo78TwpZ9m1lIuvTQbnE3FDx0a78MEL2xzb0LWQlT9lG3Q6mlnnWmHO665nrd29AaZGrApl12sI2EArf7h2oOaVdjkJ4jPiRO%2F0GxlY2pJDrrqYhukv7hI%2Bx%2FdYUfayaxLQqGWjuADn4C50x%2FPL1kqYDLDRJt%2F6S3riFl9Gf%2Fo8gjM7HqNRj7YbROrHUKvvq%2FgpWWlMEX7execKCyyD6EsvIyFG%2Fxa%2BIIQGUSMUoNTd7ruVdc5kRkkv5X9q4mVOfj57U3EPc9Yf0weEB%2B4F%2FnY60WIpaIYQ4fYE%2FWEAwrQ9tfccgGnxYMtb1oW6k6AA%2ByxGAmcuZ1UfV2XLonOdjBJEIq34ceQQoWsqa0QSDnXYHm4yGw%2BbcwAsPWnpTwTLA9dZdAgflWPLIintHp3Gl8iVVDkjT%2B%2Fpt4Gf8z0sIoAVBEWe3E83ETCElKnCBjqkATrs63TWIjusBRg3dnBMkjtljVVFz3zSphhrfk%2FRAxZx5F32999xXiu%2F%2Bn9pEm1ELWNSpg%2B9JmndbXxuP%2BgkWWzu3cj2NwXjBnnjEbhAXfdsSWy8ObZDkoMyZsZZPZfRob6Ovj8YsXS73nsXNJjbY3X6kyqIqMwDKfeM%2Fq6XMrKCqoDN6O5eKTm4lrzJo%2B3l7DAZKEnfbgLZQ25LPx9w2kiOsj%2Bl&X-Amz-Signature=285b348fc1e4f5400e63327f10bc2c4de75ed137a189dfe896755e2e87c8cdb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
