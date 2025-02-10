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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSQXKRD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLsdpMk6T8NjsEbzG2QJR7wijpOrqR6Vw8cFsOqX4u0AiEA7ODQ49%2FzQ50YnqnwMhfb7CsBKjFA7AfO8IqdZ2Ozcp4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHUWqb2AXY3lUkoDSrcA8Inhdp66YbC04h3VdHCn4Dmsc0JCjDY0SkGbd4x8bybQeXStObkHWLcD9vOu5QQCqjXhXih4GHTkAZgNaClEEoSOKC8zIYfCHuT5zWiU5JZQS4qivBxFRzfUGIpa0F803Gh%2BiVb%2BKXzKndeFzhgE1GtmXiDFXTW7AmyJcpr7SpNQO5VpNMF5vdAbN6koJgN8Zt7Wf0Gz2kW8VLcEjHByoyjEysrDB0%2Bvaap4K7GNF3KCKAIUzd09cfjKrPKAqj7uf4Q%2F%2FOh5LaNJp6l6437s1zIj23UiKcSX6%2FuzNdwQ4oYp7bT2i12pvC0TA5kHsGS3SENGNBieGoo4vn8fkthTYns6jgYYG8GoqzIUQFwNuqm9CkAjkTXM4zrYs0yFlDaTzLdzkue%2Fp4DuNGtmdpXKhTK1E3FQPjjjWefKb1C8LihWZeytgiMT6jbYeQwLPBjnjagMOOT6Z87Wy0gq0Oas0CajYIqAyDVrnDE3L965uNOB8CbjLEvQdkvnhDeFZZgzsXaK6f5tkoAte15BQu5mh6lwZW3nlbbh9iKTGSOSrm%2Fyxe8nkdCxwQj%2B2PIlC%2BGfkAt4jvZNCf2NxFit1t7lsZvLouiu%2BGtIOPAZ%2FSeuzbNroejO9zZMvQ2KRPYMOOyqb0GOqUBpvVn4Auh3HU957h3NrjwZDLKntw3avOl2e8jbfw4RreHAF75Zp9VC8jJSVjak2jmSWHRko9E2sWHp6bOzpIPqW6T7qJER8Q2M5xnnmk0WbmsIlTgIkOJeuIGD8wKaFRHg%2FwkXq6uG9WXHfoA1gifr%2F7cpYtkeCX5lsl%2BFYM9oRqu%2F9fIvid9gALukw%2FMMR0Cj71aOs%2BSYc5q7Yg2N8%2BicD3HpwlJ&X-Amz-Signature=98855ea111be88f4a013fa29520b907c1d8854b74723f98af73f07d0647338a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSQXKRD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLsdpMk6T8NjsEbzG2QJR7wijpOrqR6Vw8cFsOqX4u0AiEA7ODQ49%2FzQ50YnqnwMhfb7CsBKjFA7AfO8IqdZ2Ozcp4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHUWqb2AXY3lUkoDSrcA8Inhdp66YbC04h3VdHCn4Dmsc0JCjDY0SkGbd4x8bybQeXStObkHWLcD9vOu5QQCqjXhXih4GHTkAZgNaClEEoSOKC8zIYfCHuT5zWiU5JZQS4qivBxFRzfUGIpa0F803Gh%2BiVb%2BKXzKndeFzhgE1GtmXiDFXTW7AmyJcpr7SpNQO5VpNMF5vdAbN6koJgN8Zt7Wf0Gz2kW8VLcEjHByoyjEysrDB0%2Bvaap4K7GNF3KCKAIUzd09cfjKrPKAqj7uf4Q%2F%2FOh5LaNJp6l6437s1zIj23UiKcSX6%2FuzNdwQ4oYp7bT2i12pvC0TA5kHsGS3SENGNBieGoo4vn8fkthTYns6jgYYG8GoqzIUQFwNuqm9CkAjkTXM4zrYs0yFlDaTzLdzkue%2Fp4DuNGtmdpXKhTK1E3FQPjjjWefKb1C8LihWZeytgiMT6jbYeQwLPBjnjagMOOT6Z87Wy0gq0Oas0CajYIqAyDVrnDE3L965uNOB8CbjLEvQdkvnhDeFZZgzsXaK6f5tkoAte15BQu5mh6lwZW3nlbbh9iKTGSOSrm%2Fyxe8nkdCxwQj%2B2PIlC%2BGfkAt4jvZNCf2NxFit1t7lsZvLouiu%2BGtIOPAZ%2FSeuzbNroejO9zZMvQ2KRPYMOOyqb0GOqUBpvVn4Auh3HU957h3NrjwZDLKntw3avOl2e8jbfw4RreHAF75Zp9VC8jJSVjak2jmSWHRko9E2sWHp6bOzpIPqW6T7qJER8Q2M5xnnmk0WbmsIlTgIkOJeuIGD8wKaFRHg%2FwkXq6uG9WXHfoA1gifr%2F7cpYtkeCX5lsl%2BFYM9oRqu%2F9fIvid9gALukw%2FMMR0Cj71aOs%2BSYc5q7Yg2N8%2BicD3HpwlJ&X-Amz-Signature=acfccd08285d4de227dd853717e8115bf07554500256c8fa32b5e4cc096eaee4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
