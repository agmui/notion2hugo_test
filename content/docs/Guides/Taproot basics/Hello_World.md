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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WPTQTD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC0k0QlDM%2BoVF%2BDsOTImwtlKex87KikH5XWuY2fDlptJAIhAPeUlJOdj%2FyyiMPvctu%2FHe5SkazJBl7hevoQpFqBA8uAKv8DCDkQABoMNjM3NDIzMTgzODA1Igx%2Babh3c3qSgO4XqiYq3ANU55kTujrIkS7ybV7QDOF%2FS%2F1MnVozz3wsG1iSxado9jVwlGRS3uxLQ8UszJNyakFOoIkcU3lG0VyivZ4jm0Mg6oSPaVxN%2FrhDEbS26JoW7rYMrngykQ6dX%2BuJrJwtZq0qbwxbrIsJ4%2BHRn1cP2q5qB%2F9kJt%2FVLvyNzTbu7wSgFYlAXS6H7LOoknj41WaAsIVRmA4AX1RvVpt7dF6WTpWd%2BUw9Qzq0FALW8r2dM%2Btfs5QXBC20Ps90z3BCFESK6SR3h85P6aeVkD6rLLCIlf5Asq8Ow6PHeEBI8zw5M0PM0iI%2FMV4XZlREF0%2Fyfz5UhKXnY91FQ4jkab9f%2FMhDa%2FzGjBwyXJ3CyP3kihigXyVJj%2BYBP7mGcBshUJkIdln8UpgGprHaPkKRr4o5D6wPQQgnFxSWoU0WLur8yzOqtzQESsR7RRnHm8IrlNFbtrY9XujEB6q%2F99bh%2BOm5nBJTEg%2BsgnWo6eUvcmVg6SUcNYJcZE7VxG5FTTZXVFfQEpQeIfHZXZy7l7VHNc28SGmNuA6rFn1QK8GzhZeg%2FqQbUB7TNExczMoOYiFm4qHKamG8iiRHvRTTmgUksCY0xJLrEsxzVPzPHUDtrHufE5XRUxutAtg9VHePTJ1iNEstOTDcgvS9BjqkAYxOgBQTHLqnW%2BkLKULUd%2FgWU8UfyMSJzdGfPxpFBkHD7k5OagOO79XUigCCG5WJElKyDs81gX%2BVeeq9WfuPyHcLp5LuQQ%2FoGIKqTg1ngdv%2BBuMj4bGmoh3XSaedioxBEpCxT9Hlcbcdvwbtjsa9wcT7BrUFRweQFjYNX6gFVlYFfJUAJKgr5IK%2BWCIIysTJrzGXzTZpgMdcraU9%2FRduR3zstwF%2F&X-Amz-Signature=8b35452d78057ca24100b710e836bbb0147ea465a2fc65dcafade28aef1b1d90&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WPTQTD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC0k0QlDM%2BoVF%2BDsOTImwtlKex87KikH5XWuY2fDlptJAIhAPeUlJOdj%2FyyiMPvctu%2FHe5SkazJBl7hevoQpFqBA8uAKv8DCDkQABoMNjM3NDIzMTgzODA1Igx%2Babh3c3qSgO4XqiYq3ANU55kTujrIkS7ybV7QDOF%2FS%2F1MnVozz3wsG1iSxado9jVwlGRS3uxLQ8UszJNyakFOoIkcU3lG0VyivZ4jm0Mg6oSPaVxN%2FrhDEbS26JoW7rYMrngykQ6dX%2BuJrJwtZq0qbwxbrIsJ4%2BHRn1cP2q5qB%2F9kJt%2FVLvyNzTbu7wSgFYlAXS6H7LOoknj41WaAsIVRmA4AX1RvVpt7dF6WTpWd%2BUw9Qzq0FALW8r2dM%2Btfs5QXBC20Ps90z3BCFESK6SR3h85P6aeVkD6rLLCIlf5Asq8Ow6PHeEBI8zw5M0PM0iI%2FMV4XZlREF0%2Fyfz5UhKXnY91FQ4jkab9f%2FMhDa%2FzGjBwyXJ3CyP3kihigXyVJj%2BYBP7mGcBshUJkIdln8UpgGprHaPkKRr4o5D6wPQQgnFxSWoU0WLur8yzOqtzQESsR7RRnHm8IrlNFbtrY9XujEB6q%2F99bh%2BOm5nBJTEg%2BsgnWo6eUvcmVg6SUcNYJcZE7VxG5FTTZXVFfQEpQeIfHZXZy7l7VHNc28SGmNuA6rFn1QK8GzhZeg%2FqQbUB7TNExczMoOYiFm4qHKamG8iiRHvRTTmgUksCY0xJLrEsxzVPzPHUDtrHufE5XRUxutAtg9VHePTJ1iNEstOTDcgvS9BjqkAYxOgBQTHLqnW%2BkLKULUd%2FgWU8UfyMSJzdGfPxpFBkHD7k5OagOO79XUigCCG5WJElKyDs81gX%2BVeeq9WfuPyHcLp5LuQQ%2FoGIKqTg1ngdv%2BBuMj4bGmoh3XSaedioxBEpCxT9Hlcbcdvwbtjsa9wcT7BrUFRweQFjYNX6gFVlYFfJUAJKgr5IK%2BWCIIysTJrzGXzTZpgMdcraU9%2FRduR3zstwF%2F&X-Amz-Signature=a6f51e7a5b18ef4803fdb7aa16b54e8ee50e435f264c3ee83ab96d2f14eaba46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
