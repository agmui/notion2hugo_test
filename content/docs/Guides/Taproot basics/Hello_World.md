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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WKKA6MJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCirAQ98NmuDxcr44Z%2FvkIfL80giUnHuYGc9Ny5IViW6QIhAP9rDlNSrv1XE4dt77nsPiU0xDZ1DkqUnNptUGEo0PqWKv8DCEkQABoMNjM3NDIzMTgzODA1IgxQFos%2Bkzj%2FTA%2FUa4cq3ANZhSqjks5%2BMOMs2JHuYGIhfathJ%2BCYjg6yOI6PAK0BpN1peZ30boLNMPGd5xjYAwr1vwVWdQIbT%2FKxbzf5Md9PfAtn9HixDSDWy9OerOrVYwbD0eEbN102AW2jZce0MDRmL8R%2BPHSLQEHo%2FmjvSeFz%2BUqUsp%2Fs5dZp2CGcpiMVWXwTHiutvEQOhDnxp6CXkdoAy3Erlw09p6O%2FnhV4lcjwRy33VVi6ve6xcsfJ15BA0McR%2F9Kae2VIczoHU5j9A58XDzpEJyIPc2hJ8dRU%2BHGI%2BRhXL0sr%2FXzdBdjJUQTI%2BcsoQWvBrUR0FDnfNOgui8uRMkmnucCa1R4ijr826fbxe6q00AiKexm%2B9Ipbt3zVf1Eu0uaxbArQA0oUUYEgRl%2BWT1BXccUcY%2BD%2BPNkdq5EcBDgIu1yVT8SJK9pAtpIDpg%2BpaLJF6aXy5ECyO%2BQoZJrh%2FnlNWD9uFgPpsQOxwdgzG%2Fwd46GhfH1NA3F4T%2FZIIWZdnDDsrsgpoJ0ZrDoPeXUjvYeLAWzb9xpLvaXzs8HJtYSf5NvDLxOeX7l6xsQy4tWtbNiV%2Bp60I71gsoOyzx68C%2BUbIrCOTkKVVW6m1B%2BaD88ew5zAw91h1gmKLfpaSdWTiVZmqEN1XdedQDDQ0Pe9BjqkAS9Im7RMDp234rAvRjxvTThD4NMKBEjMRUqU5imGzh4kIJoDDUynlwbIa3kgKQuaX4zTH%2ByeHpf9IAqZtmXC1X3PKmP76ReB61Ur%2B063ASlKqLZucGZhQBcXPIgSIeM6vW%2FUWMZfP1ZZiyDsCEAq9b9YiZa3BM7D8zglvPXEJCBZvrcSwY7ArP34ECsyKx7p5ZxskcSC3wD6xDUOX53Epb6G8Fld&X-Amz-Signature=666d16c5576729cc1c51df2979cd6f870ba05a7b99904d97523e46dcf4002193&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WKKA6MJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCirAQ98NmuDxcr44Z%2FvkIfL80giUnHuYGc9Ny5IViW6QIhAP9rDlNSrv1XE4dt77nsPiU0xDZ1DkqUnNptUGEo0PqWKv8DCEkQABoMNjM3NDIzMTgzODA1IgxQFos%2Bkzj%2FTA%2FUa4cq3ANZhSqjks5%2BMOMs2JHuYGIhfathJ%2BCYjg6yOI6PAK0BpN1peZ30boLNMPGd5xjYAwr1vwVWdQIbT%2FKxbzf5Md9PfAtn9HixDSDWy9OerOrVYwbD0eEbN102AW2jZce0MDRmL8R%2BPHSLQEHo%2FmjvSeFz%2BUqUsp%2Fs5dZp2CGcpiMVWXwTHiutvEQOhDnxp6CXkdoAy3Erlw09p6O%2FnhV4lcjwRy33VVi6ve6xcsfJ15BA0McR%2F9Kae2VIczoHU5j9A58XDzpEJyIPc2hJ8dRU%2BHGI%2BRhXL0sr%2FXzdBdjJUQTI%2BcsoQWvBrUR0FDnfNOgui8uRMkmnucCa1R4ijr826fbxe6q00AiKexm%2B9Ipbt3zVf1Eu0uaxbArQA0oUUYEgRl%2BWT1BXccUcY%2BD%2BPNkdq5EcBDgIu1yVT8SJK9pAtpIDpg%2BpaLJF6aXy5ECyO%2BQoZJrh%2FnlNWD9uFgPpsQOxwdgzG%2Fwd46GhfH1NA3F4T%2FZIIWZdnDDsrsgpoJ0ZrDoPeXUjvYeLAWzb9xpLvaXzs8HJtYSf5NvDLxOeX7l6xsQy4tWtbNiV%2Bp60I71gsoOyzx68C%2BUbIrCOTkKVVW6m1B%2BaD88ew5zAw91h1gmKLfpaSdWTiVZmqEN1XdedQDDQ0Pe9BjqkAS9Im7RMDp234rAvRjxvTThD4NMKBEjMRUqU5imGzh4kIJoDDUynlwbIa3kgKQuaX4zTH%2ByeHpf9IAqZtmXC1X3PKmP76ReB61Ur%2B063ASlKqLZucGZhQBcXPIgSIeM6vW%2FUWMZfP1ZZiyDsCEAq9b9YiZa3BM7D8zglvPXEJCBZvrcSwY7ArP34ECsyKx7p5ZxskcSC3wD6xDUOX53Epb6G8Fld&X-Amz-Signature=5d2807d7e769b31df3788914aef5158fdb5badf4ecbff8b6245a100fcb6920ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
