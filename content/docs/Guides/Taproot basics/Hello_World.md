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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YX3IHF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCH%2FsK71xJjE8VMlyB%2BFmZXFNnWi5XTPU%2BVSO4E%2BRN7YQIhAO8xDzdUWQrAVy5tldG65FdICB67odmB7sL1GJENXYREKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy98wXMWxQEyjvfadwq3AO65kQKU2ma9%2FMWVqGIJF%2BwepFo0ZCL01Z2f188vkkw%2F%2BQwF1QQI1S4jbEo3Ql1yafB08rBhcRZVjMdZYFaNWjdpSZMbGb3d%2FNURFqV80zMYlKQTDOSAhQGebGITekPe8y%2Fd63FKQgs9mae1PDEVEr1AjZYFg7M%2FvgXafm7n%2B1L2nyY7FgGeS8QTh5TJFJZYMSahIDd1qYEra5mxx1CQYrYn2jMGpyQuJc18jRRkOsCSB4IZ8h1OpLNZPF2zjSFMYsxeMWOrTCi%2FM8lfSos3ob5ZJ2dFRA%2BpMHgqZEhTIg8B83mrG9jQu1qL9B0zxIcz6mpxkvLa2ZeTbB9ayBvdjo%2BI2eIlnhmhKcghQVXnDFS%2FCLreF%2FNhwUsRyy73bQ6uXkf%2BRrLOTY2I%2BiX3aQYoUNx6Zanyl8CFT4%2B5p1%2Fijmd1mxDTl4wjkT4VN1kxAqHd0I5usI8OcK5WAQ8R7RPbHNYmNJ9BkJV7425xlcV8AP7hlYZBot6zabnlW27wbc0CGpFGRcC6ruzKalHiIDUa8DnwpxeUoj2jHM9mQ57PTys5kbO4KpWkyvMoy9fcBh5g3zvsZSaJ027%2BNpxXciQDfDueqiTHjpih0X%2BfrU7DQGoXiHKDAU1hDKPwcnWHDDygZHABjqkAe%2FKNQWhM5f%2B8lEMH4ZX9kyM0oKaiF%2F7hxUC4Yqu5TUueV5fhPq0fqtFhlXzGbzQjCrlNY6WEqIJkUCn9s2ZwWf6n%2BTREe4iqEl7X3vfbVPBxFmKlnHz%2FsZ4Yq9TYpIdrCmqq4xXD78cMXNKsJUdPrnfL8M2kc7VReJzpkg%2FuDxIvWqEqJr0C788s8eVOh%2FD1GVfDkZ4nNHs9jdj6av6UuyZEYCM&X-Amz-Signature=2de100b10ccbfffe06891e1f7491608eb892885209631d7cb83de78171bb5c19&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6YX3IHF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCH%2FsK71xJjE8VMlyB%2BFmZXFNnWi5XTPU%2BVSO4E%2BRN7YQIhAO8xDzdUWQrAVy5tldG65FdICB67odmB7sL1GJENXYREKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy98wXMWxQEyjvfadwq3AO65kQKU2ma9%2FMWVqGIJF%2BwepFo0ZCL01Z2f188vkkw%2F%2BQwF1QQI1S4jbEo3Ql1yafB08rBhcRZVjMdZYFaNWjdpSZMbGb3d%2FNURFqV80zMYlKQTDOSAhQGebGITekPe8y%2Fd63FKQgs9mae1PDEVEr1AjZYFg7M%2FvgXafm7n%2B1L2nyY7FgGeS8QTh5TJFJZYMSahIDd1qYEra5mxx1CQYrYn2jMGpyQuJc18jRRkOsCSB4IZ8h1OpLNZPF2zjSFMYsxeMWOrTCi%2FM8lfSos3ob5ZJ2dFRA%2BpMHgqZEhTIg8B83mrG9jQu1qL9B0zxIcz6mpxkvLa2ZeTbB9ayBvdjo%2BI2eIlnhmhKcghQVXnDFS%2FCLreF%2FNhwUsRyy73bQ6uXkf%2BRrLOTY2I%2BiX3aQYoUNx6Zanyl8CFT4%2B5p1%2Fijmd1mxDTl4wjkT4VN1kxAqHd0I5usI8OcK5WAQ8R7RPbHNYmNJ9BkJV7425xlcV8AP7hlYZBot6zabnlW27wbc0CGpFGRcC6ruzKalHiIDUa8DnwpxeUoj2jHM9mQ57PTys5kbO4KpWkyvMoy9fcBh5g3zvsZSaJ027%2BNpxXciQDfDueqiTHjpih0X%2BfrU7DQGoXiHKDAU1hDKPwcnWHDDygZHABjqkAe%2FKNQWhM5f%2B8lEMH4ZX9kyM0oKaiF%2F7hxUC4Yqu5TUueV5fhPq0fqtFhlXzGbzQjCrlNY6WEqIJkUCn9s2ZwWf6n%2BTREe4iqEl7X3vfbVPBxFmKlnHz%2FsZ4Yq9TYpIdrCmqq4xXD78cMXNKsJUdPrnfL8M2kc7VReJzpkg%2FuDxIvWqEqJr0C788s8eVOh%2FD1GVfDkZ4nNHs9jdj6av6UuyZEYCM&X-Amz-Signature=a533a7b5921572a02e0b6aaa9b2d3cfe45df9dd06074a2777fbc347d85cd8175&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
