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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWKVVUL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmuld7suAKuW7ZUJEwIJ0J84VnsZbebqXw1QxYS81Z%2BQIgaeDv7IlnhOk0vbb%2FMf%2BYHy3gJI7UoLJVWsvOyxNzXU0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMUhXDmn8eMz2ithhyrcA%2F9ZlWHTqlc1L1n9iLTrPhddCufV2q%2FZa3DZBqdJd%2BsNJmuw8IvipN%2FKYfKaxIJlTg44BmJsta6IYx0KBethNlywdg19C8Wb9gtzU8LO4wCwf%2B7e%2FnfL5Dq7dGPygRY6FA2IggwhKLMX1w2jZwzI4Eij%2BjGbKK6TBou6NQjB1ZXJrlWs6yt%2BWaoWYB1oRtINXhJ5fXm3aIDYDismdWp0OFDRbCYbEApe%2FB3rmqLlZVa4SLc0tbO9KE7Y8m3GkqaEXbbj3CeLglkQNZwmCJhp%2Fxmreuzn9UL9GG1OMMU7ziJl2e73ChQ9A3sopt52CaGxzdVKnJcRFpgxKMvnrnVzGnrAL7JMnAMUJMqwWuBaP97fO7Q%2FU8141Z62z7%2BqpD7l8htRWLvRXCmdBnW4nxJlxlsEcjSAjWT88kDZii9XFnN%2BulCyFfbSf6kDiw1zEaxjv99gdtUByOygLlJ%2BC67CvvcTiamUEYW5zlpNAu5IETdTfrScr35swc2IhZWgbvZZFZeygBJA7jh8XHoHz9Qkdyx3qS8%2FPj5tZMAfv4JohdfbZAVA1Jvm6DETMHNIqdr222ym8L0ROPlmHTu2D8Tr2HNbC0ysfEJqQIJ8nMS2gvB2LXUihWTggZFzUKPbMLuAusQGOqUBOln3nA6M93rF1ukObAO3Vp7iAcV3kw5vEbYKRkxummw9QA6Gj2%2FJxRjndfy%2FKJGhl3szHa4fsxpk1Vp6uqjNKn6TVks7%2F5KZMly62VtJFfXLdHAaIfD91o7jjxQhqv1PEbaJN6XCvSqKRMCvQ1cOcmUWBfGJ10kHqnYWF7U5If%2BbHf5x28mEu6m0%2Fh22cDz2Pv4HfcRgah%2Bl5RUWtz8zs4he%2FYUi&X-Amz-Signature=85a3cc4a71858aeda47bf539340c9984a852a15b052ea8d61b5c7621b05f163c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWKVVUL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmuld7suAKuW7ZUJEwIJ0J84VnsZbebqXw1QxYS81Z%2BQIgaeDv7IlnhOk0vbb%2FMf%2BYHy3gJI7UoLJVWsvOyxNzXU0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMUhXDmn8eMz2ithhyrcA%2F9ZlWHTqlc1L1n9iLTrPhddCufV2q%2FZa3DZBqdJd%2BsNJmuw8IvipN%2FKYfKaxIJlTg44BmJsta6IYx0KBethNlywdg19C8Wb9gtzU8LO4wCwf%2B7e%2FnfL5Dq7dGPygRY6FA2IggwhKLMX1w2jZwzI4Eij%2BjGbKK6TBou6NQjB1ZXJrlWs6yt%2BWaoWYB1oRtINXhJ5fXm3aIDYDismdWp0OFDRbCYbEApe%2FB3rmqLlZVa4SLc0tbO9KE7Y8m3GkqaEXbbj3CeLglkQNZwmCJhp%2Fxmreuzn9UL9GG1OMMU7ziJl2e73ChQ9A3sopt52CaGxzdVKnJcRFpgxKMvnrnVzGnrAL7JMnAMUJMqwWuBaP97fO7Q%2FU8141Z62z7%2BqpD7l8htRWLvRXCmdBnW4nxJlxlsEcjSAjWT88kDZii9XFnN%2BulCyFfbSf6kDiw1zEaxjv99gdtUByOygLlJ%2BC67CvvcTiamUEYW5zlpNAu5IETdTfrScr35swc2IhZWgbvZZFZeygBJA7jh8XHoHz9Qkdyx3qS8%2FPj5tZMAfv4JohdfbZAVA1Jvm6DETMHNIqdr222ym8L0ROPlmHTu2D8Tr2HNbC0ysfEJqQIJ8nMS2gvB2LXUihWTggZFzUKPbMLuAusQGOqUBOln3nA6M93rF1ukObAO3Vp7iAcV3kw5vEbYKRkxummw9QA6Gj2%2FJxRjndfy%2FKJGhl3szHa4fsxpk1Vp6uqjNKn6TVks7%2F5KZMly62VtJFfXLdHAaIfD91o7jjxQhqv1PEbaJN6XCvSqKRMCvQ1cOcmUWBfGJ10kHqnYWF7U5If%2BbHf5x28mEu6m0%2Fh22cDz2Pv4HfcRgah%2Bl5RUWtz8zs4he%2FYUi&X-Amz-Signature=7b5488cdce2ffdbecbfffb46792bcc2e1618ed22adf3870b89b0859ac7bbdfb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
