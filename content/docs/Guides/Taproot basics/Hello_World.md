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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I65WZZ7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDyaXBy8EtlML6omQDIV%2Ff1P9BzO36sYvZ9CgE0pII2tQIhAPkWXFzMVbU6pUmJwqSfc1HhQXFHPjlIfUZiY8v0TUQ8Kv8DCDQQABoMNjM3NDIzMTgzODA1IgxYYY66%2FdtLOd6Ng68q3APx47HCxZaEMvo%2BDfjM3fghNqb70EGhxiYVADdgrhe65j5iCanK7hex2EiLSJ9iqqgqrnRh8XKZXCBRkKAk%2FlGYY%2Fxqv%2Fl%2B2odPPoZD6BM2sYBdSc8mWEzuPZDpIQ6OORzzyYZ5l0mQtkeyza2Soj%2FZIa7tNv%2FP%2FsL1%2B6sHYrS7Paj7LnXNweEiBr%2B05Vl9o9ctykDOKm%2BrXQm%2FSHOfEwAubGhz4JcQTng3EIQ%2FtN%2FHh0cxyvOH5O3c6IyfNvMGIvR4g%2FeD7UkBzVigCwQ1mJTxxfMuIj9djhJKWDIaIdxL7JbGeVpazvpCawdknMLWlpQguOC2ey1r1btKBm7eS7YUuH%2F1K32obJpBUHTubI%2B33%2BFBf5Z4CwT%2FRIVtJ5iObY%2FP4bQvS2QYkjdSOw%2FYrO5YS%2Bo3csNu0bx88dZFg%2Bn0%2BqfMsox%2BdhnoUBXtzPp4e02x1hOg5dY93U7gzxooIvuwfs4u2x9I8jeZQccb0iPpeuqBEL62GOBk77iCvbBYFDgtTvXA1b%2Ff2HrvShB%2FvinMmlg2qVUghlZNcdkkqGNn%2FnR8Ghpes%2FkFxDN5Y%2BihQKxTXLd80vG3UEXnUKsvgpw4Rp%2B%2BJqhQDUUv89P2NEGR%2BdpOtYI03QDNpQG70DDsvqDDBjqkAY4SabwZYALX%2FAj9zyzwb4BKgnlZCuViZTirEcFDXJ7oFJqNb9Oajux6zIZH%2FlWmXMB8OfxXJ5PYIGf2smvHtiMfx%2Bt7sjjlSACp1cXvmlCl3wUDMoRB2sn1gsIbL2ZGLRlwbCoB8LMVLbqheadzVTjYirVaU6%2FHPc5wMMA2KpN7lIqz%2Fw8k69Y%2BZobqiXoW2RDRQ6%2F4eb%2FUKQWleGavBobcfDdo&X-Amz-Signature=3c20fb8209b465afa24c4c2437da4d9cb34a849d3e70cc2c1cb1a6876bddd7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I65WZZ7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDyaXBy8EtlML6omQDIV%2Ff1P9BzO36sYvZ9CgE0pII2tQIhAPkWXFzMVbU6pUmJwqSfc1HhQXFHPjlIfUZiY8v0TUQ8Kv8DCDQQABoMNjM3NDIzMTgzODA1IgxYYY66%2FdtLOd6Ng68q3APx47HCxZaEMvo%2BDfjM3fghNqb70EGhxiYVADdgrhe65j5iCanK7hex2EiLSJ9iqqgqrnRh8XKZXCBRkKAk%2FlGYY%2Fxqv%2Fl%2B2odPPoZD6BM2sYBdSc8mWEzuPZDpIQ6OORzzyYZ5l0mQtkeyza2Soj%2FZIa7tNv%2FP%2FsL1%2B6sHYrS7Paj7LnXNweEiBr%2B05Vl9o9ctykDOKm%2BrXQm%2FSHOfEwAubGhz4JcQTng3EIQ%2FtN%2FHh0cxyvOH5O3c6IyfNvMGIvR4g%2FeD7UkBzVigCwQ1mJTxxfMuIj9djhJKWDIaIdxL7JbGeVpazvpCawdknMLWlpQguOC2ey1r1btKBm7eS7YUuH%2F1K32obJpBUHTubI%2B33%2BFBf5Z4CwT%2FRIVtJ5iObY%2FP4bQvS2QYkjdSOw%2FYrO5YS%2Bo3csNu0bx88dZFg%2Bn0%2BqfMsox%2BdhnoUBXtzPp4e02x1hOg5dY93U7gzxooIvuwfs4u2x9I8jeZQccb0iPpeuqBEL62GOBk77iCvbBYFDgtTvXA1b%2Ff2HrvShB%2FvinMmlg2qVUghlZNcdkkqGNn%2FnR8Ghpes%2FkFxDN5Y%2BihQKxTXLd80vG3UEXnUKsvgpw4Rp%2B%2BJqhQDUUv89P2NEGR%2BdpOtYI03QDNpQG70DDsvqDDBjqkAY4SabwZYALX%2FAj9zyzwb4BKgnlZCuViZTirEcFDXJ7oFJqNb9Oajux6zIZH%2FlWmXMB8OfxXJ5PYIGf2smvHtiMfx%2Bt7sjjlSACp1cXvmlCl3wUDMoRB2sn1gsIbL2ZGLRlwbCoB8LMVLbqheadzVTjYirVaU6%2FHPc5wMMA2KpN7lIqz%2Fw8k69Y%2BZobqiXoW2RDRQ6%2F4eb%2FUKQWleGavBobcfDdo&X-Amz-Signature=93c7105dbc0a80b7c77df5ec8e8f29c6de00b54cba2438bb696c4f45520d8d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
