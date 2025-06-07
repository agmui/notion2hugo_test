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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPF6U3X%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDue7argG9lViPVGn0lLCY7VTnvvU51h5w%2FNsuOaPWRfAIhAOPkmi7gd%2FTmCm9vr%2Fodf8jKWEgohuiZiWamfBO1flOKKv8DCG0QABoMNjM3NDIzMTgzODA1IgylvNQaTZkQkVe97JEq3APlTlrVXorbXHriJvnAPbDYW0lKSZep1gmwjIjnyhMEciCglsmOCW7hNIJVb3JFXWsjBK%2BZc0neEBWrxTbLHNdg6xAZ8tb6e%2BvxkE70iqZEHcl9HulXKH8rS0U2usCNU339b5%2B2QeRLIan8%2F6dGA7E4eQxNG5%2BqwZwhNYKZD1bLEhrNP3Yr2%2BRYwRod1ccvYlStHgyXtNq14NwzxWk0XzcLdCmLGy3qFYW9fWYp%2BRP0JLxtdpXdS3laYs31CGU7MrmeCL%2FTwia55e5yTQWGp0Z%2FDNf5jzldeCdOaZeMiXEXX8myEQmY6IO5GJ4f38Jo5duh9gzD0USxClE%2FHPdDI5NBQKJu5lTQJnCD8lIyMxkCDCbo4byG6ysY%2Fr%2FPNhVyfR6FOOvCKxuuJwcg1f9dUQz2k56lRf5%2FbkcIbF6VbNXJY42UeRC4FGlL5%2BsreFU8%2BVsYXebK40JWyRpvduHxJLgr6ZNiPgAU%2BG3pzWBs0K3lyOoQFf%2Fo%2BTlmatUJmg12iLTKTrUavaVK0JVsZKE6qzaMO0xgrbwY1z1%2BA%2Fa0iPlff2hIwROjumSY3RzJE03FkL6v%2FMgzA43peuR50MuX0fKWnR6qIDtEwSqEAxfhMyb7aJzSllCcCWGiqeQ9WTDZ%2B47CBjqkAYRtaOzZ7sd7kG%2FhFfsxe9M5gr7ZFqRX5Bm3tARXcltAVbwJOjrlzi9QrNuePEr8k04xL1SHkpGx3WHqf%2FHqYkQcg8nKZytwAZCldSn%2BMMrDRGp7GZZxSe6xwFinct5sUH8LJm%2F2v3RNxIHlNv%2Bg%2FgruPxIPTDvBa8vR66UBM8wTMVGSCPOPZjjHYwNg5U0kC0hFFYo6BoHri4GyjJ%2F%2BZ34g9lOQ&X-Amz-Signature=10417ad20a67bd467242dc15fc70a428dcc982b03d738b716e70e853de79bacc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPF6U3X%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDue7argG9lViPVGn0lLCY7VTnvvU51h5w%2FNsuOaPWRfAIhAOPkmi7gd%2FTmCm9vr%2Fodf8jKWEgohuiZiWamfBO1flOKKv8DCG0QABoMNjM3NDIzMTgzODA1IgylvNQaTZkQkVe97JEq3APlTlrVXorbXHriJvnAPbDYW0lKSZep1gmwjIjnyhMEciCglsmOCW7hNIJVb3JFXWsjBK%2BZc0neEBWrxTbLHNdg6xAZ8tb6e%2BvxkE70iqZEHcl9HulXKH8rS0U2usCNU339b5%2B2QeRLIan8%2F6dGA7E4eQxNG5%2BqwZwhNYKZD1bLEhrNP3Yr2%2BRYwRod1ccvYlStHgyXtNq14NwzxWk0XzcLdCmLGy3qFYW9fWYp%2BRP0JLxtdpXdS3laYs31CGU7MrmeCL%2FTwia55e5yTQWGp0Z%2FDNf5jzldeCdOaZeMiXEXX8myEQmY6IO5GJ4f38Jo5duh9gzD0USxClE%2FHPdDI5NBQKJu5lTQJnCD8lIyMxkCDCbo4byG6ysY%2Fr%2FPNhVyfR6FOOvCKxuuJwcg1f9dUQz2k56lRf5%2FbkcIbF6VbNXJY42UeRC4FGlL5%2BsreFU8%2BVsYXebK40JWyRpvduHxJLgr6ZNiPgAU%2BG3pzWBs0K3lyOoQFf%2Fo%2BTlmatUJmg12iLTKTrUavaVK0JVsZKE6qzaMO0xgrbwY1z1%2BA%2Fa0iPlff2hIwROjumSY3RzJE03FkL6v%2FMgzA43peuR50MuX0fKWnR6qIDtEwSqEAxfhMyb7aJzSllCcCWGiqeQ9WTDZ%2B47CBjqkAYRtaOzZ7sd7kG%2FhFfsxe9M5gr7ZFqRX5Bm3tARXcltAVbwJOjrlzi9QrNuePEr8k04xL1SHkpGx3WHqf%2FHqYkQcg8nKZytwAZCldSn%2BMMrDRGp7GZZxSe6xwFinct5sUH8LJm%2F2v3RNxIHlNv%2Bg%2FgruPxIPTDvBa8vR66UBM8wTMVGSCPOPZjjHYwNg5U0kC0hFFYo6BoHri4GyjJ%2F%2BZ34g9lOQ&X-Amz-Signature=af0999acfce8f817577f767c34d5b84959bdc2f90dbf44db89ac4010c6d3751f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
