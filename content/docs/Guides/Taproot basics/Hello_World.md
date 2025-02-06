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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RCCNIK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDDOR4hNIOW3Pi8fOAB4LMvW6SCNVZSYVzXrBwIMh%2FIogIhAJoc0Wzm1OGh0rnpbif1jXEds0UXryNr3pPRj3DPrKl5Kv8DCFEQABoMNjM3NDIzMTgzODA1Igx8eogWAHqnZlZstfsq3AMg9SWlHja9yYuD%2FfG%2ByVAiiDMkjSB%2FGVKwlQeq0OuIXI%2B5EGNS53k0ZdcIFieVYQOJlTQajfXQqaHzg5fx2pI4dzZ9yOLssVd65PuNRbqUQg7IYDXNDEziH2kWoo1Q1vIG7dMGJNkI2YgQ8EmDG6SBHTf7YzIjcjgweRwN6IO1G0JCzKXRVnfGD5qzg4VS1EfLtxaIBLDzglOYWAjuVBSjd%2F6ocGA0WX%2BUcf574jeMBt7WzZjKpTcemuvTSr%2Bty2DabMAgFHKAVvE7qzUEceKRyUACH5u8lHE8D8LyFrApGexQ%2BJ4iI%2FsvuZm0Oee%2Bpgv0uQyYsHo%2FOQIJtxYkYWoKZjjr%2BnuHymDGBgCQf9L7mfZKl33Tax%2F6Aa7gj%2BfxgvbtoSQPMaA6rfJ6wAhKN%2FIT2tF9Ivicb26grS5N0Tu1qFEuiiGV2W4NlkbpCdqzvkQKEc4IvmLrXV9qmubqfxzf9E10N6DSINhY58JzBs004hSSTasB8XlM8u1W%2BIFy1T%2FBSK1MvOdf%2BbMwmDV5M5K5JUXXSWoBm5CKu84oZdfcsJilvhn5ZG9woaS2fPx6Ji%2FUuukmPecSFdNZZiRTbdfbfKxU22765d46GgDn3nZXF1gL7eAg%2BNTX4oRTATDc7I%2B9BjqkAceWyZDXu1YZ8v5NIpurPID9OISMneObd6nzGxgy%2BcIydNdl5oEquPBg9V%2F12LdPMvz3f83Hyl5cAyq%2BBVxDq9EmJ4wjvVRkKDc2K6W2lNJT2t5nzYJXGKQEeUnFoUkweOMyUL4xouo8M0xoFYssRuRuRZaVzrWBuaL01fGfHj7e9QMobK0vEEyiCb9Gcss8IHlIZ6ob6TA3Gx0G%2BmjE248EvQPl&X-Amz-Signature=7bdb2aaba28ae84cf3b6316e439bde786090b3b7069fe9a6d25ab935c1bff226&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RCCNIK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDDOR4hNIOW3Pi8fOAB4LMvW6SCNVZSYVzXrBwIMh%2FIogIhAJoc0Wzm1OGh0rnpbif1jXEds0UXryNr3pPRj3DPrKl5Kv8DCFEQABoMNjM3NDIzMTgzODA1Igx8eogWAHqnZlZstfsq3AMg9SWlHja9yYuD%2FfG%2ByVAiiDMkjSB%2FGVKwlQeq0OuIXI%2B5EGNS53k0ZdcIFieVYQOJlTQajfXQqaHzg5fx2pI4dzZ9yOLssVd65PuNRbqUQg7IYDXNDEziH2kWoo1Q1vIG7dMGJNkI2YgQ8EmDG6SBHTf7YzIjcjgweRwN6IO1G0JCzKXRVnfGD5qzg4VS1EfLtxaIBLDzglOYWAjuVBSjd%2F6ocGA0WX%2BUcf574jeMBt7WzZjKpTcemuvTSr%2Bty2DabMAgFHKAVvE7qzUEceKRyUACH5u8lHE8D8LyFrApGexQ%2BJ4iI%2FsvuZm0Oee%2Bpgv0uQyYsHo%2FOQIJtxYkYWoKZjjr%2BnuHymDGBgCQf9L7mfZKl33Tax%2F6Aa7gj%2BfxgvbtoSQPMaA6rfJ6wAhKN%2FIT2tF9Ivicb26grS5N0Tu1qFEuiiGV2W4NlkbpCdqzvkQKEc4IvmLrXV9qmubqfxzf9E10N6DSINhY58JzBs004hSSTasB8XlM8u1W%2BIFy1T%2FBSK1MvOdf%2BbMwmDV5M5K5JUXXSWoBm5CKu84oZdfcsJilvhn5ZG9woaS2fPx6Ji%2FUuukmPecSFdNZZiRTbdfbfKxU22765d46GgDn3nZXF1gL7eAg%2BNTX4oRTATDc7I%2B9BjqkAceWyZDXu1YZ8v5NIpurPID9OISMneObd6nzGxgy%2BcIydNdl5oEquPBg9V%2F12LdPMvz3f83Hyl5cAyq%2BBVxDq9EmJ4wjvVRkKDc2K6W2lNJT2t5nzYJXGKQEeUnFoUkweOMyUL4xouo8M0xoFYssRuRuRZaVzrWBuaL01fGfHj7e9QMobK0vEEyiCb9Gcss8IHlIZ6ob6TA3Gx0G%2BmjE248EvQPl&X-Amz-Signature=1ba1dc1c117d368199d1bd94de7acc7ea0829650e90c8119cc5ea410dcc172d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
