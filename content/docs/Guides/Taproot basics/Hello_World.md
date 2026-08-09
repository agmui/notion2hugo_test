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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZCQ7A2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYkiijEfzbAzetgk9qLVjOkjhxV9WioD5cDMgTRYO%2FGgIgf%2BSxpI0SbMAELL4hD1%2BdSQU%2BwBygfjFCIUqFJw4jOD8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDInCQ5SQDh%2BWtUXmwCrcAwR6gEsbh9WXhvPjqnhcpG4wM9y%2FdcChzgheYI%2F9IwOE3Xb6CopbUnDeWKS0aim%2FPpmkFUzGONnx%2Bbx%2BqmcCvq1RjafXI0eFL1Zj94rhqm7prhxi72Ma4Z7B4e%2BcjesMd4FUvhlWnzHaE9ZwF7Jn6Bhdpwq%2BOipa1aa8o5qKlLL9ycQY3W8kKZTAkCH8B0YLzN7W55uEpkACKgVjkFz4yfIP0z0zsXgOaLMpI5C0ehL8p0eQIWsOROh99rujzebHUpox6C8QGzCwwM2poilMZXyRA6t0HHmLWO6uKkmlc5iqMI7z6nKacTCHpQmwl3UP1%2BAudkCu84%2FTMsEONb6sCH7IVWzKIJikhlNfT5jEI%2B6NxqDpPICISq1f09qN2cuWHByPxg7AuCJC9ok6hU2HkXeaMv8vCKUJIueMVaCw6z1y32lRN5dv%2FcumYoTDz0TN7hV09cDjk3XtUEeae0g7cc0ZzvSITrFXKrIM28MLJUBjQ4hH1AZ7Sqg19%2FrQm8kIOgXuNPkQcP5d2uM0LwyJtiOHePG5uGkIt4WEna8frkHwExNbuOQkNUqQwzUq8zlQRTj%2FzodFa6QYqXPwyIWXp13zfdSUxieS4ercjZwGw5JpXPuHER%2BB%2B6zqQXz0MJrV3tMGOqUBMpicNCItVk5MQ1vjnm1B%2FNFiVimZ5dYb3lG2Fv2rUig%2BJ1fiB0ImFcKqO1CFeWqYdN%2FT0bK8VS829y3xytrLVfImDKCHbnzMXJXZUzidbBbdbIcDcLgPiEqf10QJma%2BjDEEaOV9PuGFRCDbCXp7jwcGpvM8D%2BYIOaZz7qhVb9g1aD%2BQ4GTv1BCd%2FXErSYBFdjGW3NJverJ3rPxlQz03U9lt1NKNr&X-Amz-Signature=35fd52b46f60c12661e29697b6b87c6de2c054b9ba1548da071870747af8e068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZCQ7A2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYkiijEfzbAzetgk9qLVjOkjhxV9WioD5cDMgTRYO%2FGgIgf%2BSxpI0SbMAELL4hD1%2BdSQU%2BwBygfjFCIUqFJw4jOD8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDInCQ5SQDh%2BWtUXmwCrcAwR6gEsbh9WXhvPjqnhcpG4wM9y%2FdcChzgheYI%2F9IwOE3Xb6CopbUnDeWKS0aim%2FPpmkFUzGONnx%2Bbx%2BqmcCvq1RjafXI0eFL1Zj94rhqm7prhxi72Ma4Z7B4e%2BcjesMd4FUvhlWnzHaE9ZwF7Jn6Bhdpwq%2BOipa1aa8o5qKlLL9ycQY3W8kKZTAkCH8B0YLzN7W55uEpkACKgVjkFz4yfIP0z0zsXgOaLMpI5C0ehL8p0eQIWsOROh99rujzebHUpox6C8QGzCwwM2poilMZXyRA6t0HHmLWO6uKkmlc5iqMI7z6nKacTCHpQmwl3UP1%2BAudkCu84%2FTMsEONb6sCH7IVWzKIJikhlNfT5jEI%2B6NxqDpPICISq1f09qN2cuWHByPxg7AuCJC9ok6hU2HkXeaMv8vCKUJIueMVaCw6z1y32lRN5dv%2FcumYoTDz0TN7hV09cDjk3XtUEeae0g7cc0ZzvSITrFXKrIM28MLJUBjQ4hH1AZ7Sqg19%2FrQm8kIOgXuNPkQcP5d2uM0LwyJtiOHePG5uGkIt4WEna8frkHwExNbuOQkNUqQwzUq8zlQRTj%2FzodFa6QYqXPwyIWXp13zfdSUxieS4ercjZwGw5JpXPuHER%2BB%2B6zqQXz0MJrV3tMGOqUBMpicNCItVk5MQ1vjnm1B%2FNFiVimZ5dYb3lG2Fv2rUig%2BJ1fiB0ImFcKqO1CFeWqYdN%2FT0bK8VS829y3xytrLVfImDKCHbnzMXJXZUzidbBbdbIcDcLgPiEqf10QJma%2BjDEEaOV9PuGFRCDbCXp7jwcGpvM8D%2BYIOaZz7qhVb9g1aD%2BQ4GTv1BCd%2FXErSYBFdjGW3NJverJ3rPxlQz03U9lt1NKNr&X-Amz-Signature=d69daac2dea120360e5e4e0c97f555c7b7f8398899071194cec0ee0b097bb87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
