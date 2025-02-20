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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMESOTN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC03HT5aP9YVJnLFT3xGiV4JibjFvnlsKrySipl7j9esQIhAIy61hsX2nOr43dRm2DnR%2BfQczwcJfyBRZRB6BwIUSOoKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0ocdfiCbKo8D%2FluQq3AMTzoThK5CiNaonVdm0o4ql284X%2BbRC4%2FrDKzxaTGLGGJcdSpvITG9s2nP23YEPtoJL6zWRGeoDslPnF%2F2rZ5Lp9ti2LAx3wnIAZ0hv66C9Puv5eR0E8At3DcUPr855yL%2BRzjssH4hBaIb%2B9pdv3k7b85D4xN8EXS4e1ddkxrHSeUen0oLUgoG6n%2B6TwF7dBmeFcQwS42MC6OIEvsEfUB3tCBoBmmhUOhuaokQh8l%2B%2BiVsgSnm4zsAaVCwpSJUuDcIybGSI9fgqM%2FrxcdUWTYzSZ9dWlOLAFSsiEEHw3y8YAbE5zEO9aG%2FGWQ7AYlF%2FviaGBXZB%2F8R4y%2F9YEUMXoTmwUvyPCxerlUjV0y3w5jihatXj3vASVE66vZIDrcocEIkWfu5IhJ0IJhS7bNbf1VQS02gP4sTiHnP12u1yHgaMB%2Bi9KIZKIXk9hmu0YJNeM%2B55OH9s9x1DVoB7fGgK7yODnbtYQBrDzfL%2BOL8cJjDMrO%2BNL3nbR6GB96xHlRR3aKV7jZFcMgOSoftzMJ6kWIYYrrDCY5eCikbVBqqswsxn%2BiJGLghdtpUXP8yY7ydQ4e78u8WtpB%2FSuBpdLe4LGdKWcgQxhCqTjpqWJLxzMZX2fY6jR%2BxpDg8au62XzTCHjt69BjqkAYUL2A3LZ5LuMRGAnpK2jSsSj3fv2RGjj0JX9eMUF7BD7UiUn2bwOFo1q6wm5zPldCYfSJwcoMWqBrFu96Az03c9fTuX338SBI39FaO3H66zpW6wiA3QeXj5JBDqZrfh1iHZBiLaHC6MRz40AMiQXe4%2FABqu%2BK9XsiwjXPOUlw3YXxuvA8IyqG%2FSpaC7WjTPPoswwMTb7IFUsJK29ddm5Xotm227&X-Amz-Signature=5cfbd1b4369ab15523262765e361d3c9dcd70157c4d9e1a4db589585afbf626a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMESOTN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC03HT5aP9YVJnLFT3xGiV4JibjFvnlsKrySipl7j9esQIhAIy61hsX2nOr43dRm2DnR%2BfQczwcJfyBRZRB6BwIUSOoKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0ocdfiCbKo8D%2FluQq3AMTzoThK5CiNaonVdm0o4ql284X%2BbRC4%2FrDKzxaTGLGGJcdSpvITG9s2nP23YEPtoJL6zWRGeoDslPnF%2F2rZ5Lp9ti2LAx3wnIAZ0hv66C9Puv5eR0E8At3DcUPr855yL%2BRzjssH4hBaIb%2B9pdv3k7b85D4xN8EXS4e1ddkxrHSeUen0oLUgoG6n%2B6TwF7dBmeFcQwS42MC6OIEvsEfUB3tCBoBmmhUOhuaokQh8l%2B%2BiVsgSnm4zsAaVCwpSJUuDcIybGSI9fgqM%2FrxcdUWTYzSZ9dWlOLAFSsiEEHw3y8YAbE5zEO9aG%2FGWQ7AYlF%2FviaGBXZB%2F8R4y%2F9YEUMXoTmwUvyPCxerlUjV0y3w5jihatXj3vASVE66vZIDrcocEIkWfu5IhJ0IJhS7bNbf1VQS02gP4sTiHnP12u1yHgaMB%2Bi9KIZKIXk9hmu0YJNeM%2B55OH9s9x1DVoB7fGgK7yODnbtYQBrDzfL%2BOL8cJjDMrO%2BNL3nbR6GB96xHlRR3aKV7jZFcMgOSoftzMJ6kWIYYrrDCY5eCikbVBqqswsxn%2BiJGLghdtpUXP8yY7ydQ4e78u8WtpB%2FSuBpdLe4LGdKWcgQxhCqTjpqWJLxzMZX2fY6jR%2BxpDg8au62XzTCHjt69BjqkAYUL2A3LZ5LuMRGAnpK2jSsSj3fv2RGjj0JX9eMUF7BD7UiUn2bwOFo1q6wm5zPldCYfSJwcoMWqBrFu96Az03c9fTuX338SBI39FaO3H66zpW6wiA3QeXj5JBDqZrfh1iHZBiLaHC6MRz40AMiQXe4%2FABqu%2BK9XsiwjXPOUlw3YXxuvA8IyqG%2FSpaC7WjTPPoswwMTb7IFUsJK29ddm5Xotm227&X-Amz-Signature=210b59adb616d74feffa5a5ca527f8ba831a518597909f9ec226913b79d2a5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
