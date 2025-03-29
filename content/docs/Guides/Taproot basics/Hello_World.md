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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA5BUYW2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGJcfEyLfjGh%2FJEPes%2FC8IL0toQwHprjwB8MAwdKYYhOAiAROX7wiSNv%2Fitd4Ql4hIWNke97yQXkUhGHWpEFMeD62Cr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMzIEwjd1ZLjBh8%2Bc8KtwDECQ%2F5sIVBcOSYNN7KHmlwGGF1xgMMdq2l8tn7NwOcCDggRxK2FjSU7e9BsWUoskx8Edi6v1A%2B9mTDNOc0SIZTlsQM75aeevXxbHctxIouIJHDozCEd%2FP3YKPzNZmBEM3lGfovfeuZDJ88jo5slTGCb7bgWYw0ZUrNY2Baz9CmJSjqWg%2BLHb7lPFh4p92yEU9tc2zN2UD9iPaLDJlE0rQ50Am133w4W5OXvytNrEKrAX9ajlTBy1YsUZfpJwzA8JMvXNL6oZV3OegkhIL6gvVOOUMOSTmOBbow0KA7Cz8C60hxzYa4OXGcAmjckL8DeKynZ%2FujHYqBWDC6HbrClIngBesL0MQx807iYEgrZZOXmsovpQ%2FL6AnDlc3YmtW%2BOx3h%2F5xbeW6MW2HRIleMVH8xDmGWH8dA0zEyKW%2FkJhVIJ28Km3MDmSgukPGlyLEsR9noKcxoQGTsXubP9vla7NcuQkuywnrjAjF%2F5Zsm7UzzjFJ9CcX6oRBscQyLXGqpO0%2BCccoK5oiZgLEIuUs1fHy8hns3yFO6Rjy3tZeRZAYBp2QT9LH65uzLXOFSa30rIslEc62uoFxZ5uf9wwJUBa4OvWeMny%2FAV32DiuafGcSk317sjGm8XLVW%2B%2FixUwwkJCevwY6pgEYrv8D7mXzcRCxTZEQ%2BiCHOMS3TydG5%2BM5Ea9YVpIc7hJiI%2BTMrWDi8ItCr2uu2pH0s24QZw87yMcbpzSt3nbGx9UljWAppMmWj%2BhpOLfD%2FtMVbE3O6QzCk%2FKEQ2jZ2koSHkh2rmCPMSaDYJLtxsm8dw6KJmyUKNQh4nLhXstdQMdHH0to%2FwyKHeN8KOOyTdYVtfCebF1c%2BwjZTuPOKzGxt3ALwVlH&X-Amz-Signature=300364c9d8300e072a4de88bfa15c1711afcc14ab32c7a69ee560714ca91f41b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA5BUYW2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGJcfEyLfjGh%2FJEPes%2FC8IL0toQwHprjwB8MAwdKYYhOAiAROX7wiSNv%2Fitd4Ql4hIWNke97yQXkUhGHWpEFMeD62Cr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMzIEwjd1ZLjBh8%2Bc8KtwDECQ%2F5sIVBcOSYNN7KHmlwGGF1xgMMdq2l8tn7NwOcCDggRxK2FjSU7e9BsWUoskx8Edi6v1A%2B9mTDNOc0SIZTlsQM75aeevXxbHctxIouIJHDozCEd%2FP3YKPzNZmBEM3lGfovfeuZDJ88jo5slTGCb7bgWYw0ZUrNY2Baz9CmJSjqWg%2BLHb7lPFh4p92yEU9tc2zN2UD9iPaLDJlE0rQ50Am133w4W5OXvytNrEKrAX9ajlTBy1YsUZfpJwzA8JMvXNL6oZV3OegkhIL6gvVOOUMOSTmOBbow0KA7Cz8C60hxzYa4OXGcAmjckL8DeKynZ%2FujHYqBWDC6HbrClIngBesL0MQx807iYEgrZZOXmsovpQ%2FL6AnDlc3YmtW%2BOx3h%2F5xbeW6MW2HRIleMVH8xDmGWH8dA0zEyKW%2FkJhVIJ28Km3MDmSgukPGlyLEsR9noKcxoQGTsXubP9vla7NcuQkuywnrjAjF%2F5Zsm7UzzjFJ9CcX6oRBscQyLXGqpO0%2BCccoK5oiZgLEIuUs1fHy8hns3yFO6Rjy3tZeRZAYBp2QT9LH65uzLXOFSa30rIslEc62uoFxZ5uf9wwJUBa4OvWeMny%2FAV32DiuafGcSk317sjGm8XLVW%2B%2FixUwwkJCevwY6pgEYrv8D7mXzcRCxTZEQ%2BiCHOMS3TydG5%2BM5Ea9YVpIc7hJiI%2BTMrWDi8ItCr2uu2pH0s24QZw87yMcbpzSt3nbGx9UljWAppMmWj%2BhpOLfD%2FtMVbE3O6QzCk%2FKEQ2jZ2koSHkh2rmCPMSaDYJLtxsm8dw6KJmyUKNQh4nLhXstdQMdHH0to%2FwyKHeN8KOOyTdYVtfCebF1c%2BwjZTuPOKzGxt3ALwVlH&X-Amz-Signature=82337ea1d0a760feb8a599af0469c2e952e68879eacbf3b8d2ea715697bb83cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
