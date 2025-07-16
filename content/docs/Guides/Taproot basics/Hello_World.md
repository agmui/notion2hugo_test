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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWZUWOHX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCKCoQ7DQ3htWHe9ijkbkwYvbhVlMaT%2FpMMulwtrmUT3AIhAOXuSMx1gBhVz9K4a2ASSD0%2FDr6Zjmbb5wzvq0nAbgcOKv8DCFgQABoMNjM3NDIzMTgzODA1Igzw78wmVj3tU0asdxwq3APG0Oy%2F3gzxXYpT16uYizo9quc9sHb93YibYJUw4Esrc8p%2FdpDr7zRF06ainUuFXAonMvJPfX02ewLApZSfkwa2unc8%2FFMaWfZGKReDamZmPc37OLf88Kt1nfF2qCPXtXq2aXD4l1jRXL14AFyHVSJwqjq4obM7S90wigNE9svxY6cWLkRYilH1cqBvubZguLKqLrFeyCqO5ZSlBt%2BEJ%2FCxuizcKkpWsFkFyRxkVXusc18tOGNmKd87G6X2x1sTvY7Tn9%2BupU9WCsPFzU3aQZWX%2FnAzdpLCG5M0c9fbH1J4NjJy6F7%2Bz1RSAfGhL5e0Q03NUv3a%2B2n1c%2BZ%2B0arzr0URYC5fqBKAbPD02ploP%2B8pv1ZoO8fXqoZkcHU4fI5Yl8yPNZTv4Dc7zyMCY0pF00dnRxUstjrv%2BJ%2FdjxOOfox%2Fo8kFBFr5zleAcUxWJRxuehkHFUFk1qwr%2FJwwPF6QsBrNv%2Byj7Dp2GFhWGlxbJnLkLTRy6EZQ1zHNP98EO2bpgZpJWhlWakutl6oofiBYPT36Aae820QSOH4gRjq24r7aCy8H%2BrpFaw%2FtRlaxqPimJEMUaWJu6smixzYawWO34P8P72ilZwBY0FnjpTdgVSgkatUnAS3lkxf%2FMRtQ4jDqkd3DBjqkAZNGSwCHZ8qXqrAms9ArpA2XW92OdBNP%2Fc8ebmdAwa%2Fv5MVc2WBg7M627zWUibK6ioxBlfrPIShLLAo6gBVMrtuWTU%2BjExnvkbEMdBK1GbIl3YriK1E2rXZW6LXvorHjGTPW9BUn%2Bi5gM6mJkW346e%2BYeaOTk%2BO80T%2BTPccYo%2FiRufNGJjyR%2FNP3AD3hRuSIEXGGRvSHPBaGNzM%2Bm1U5CCNA%2BGFN&X-Amz-Signature=f41f657a8f9fb3eccb597f4b363f687c3eef5ef52f0dcfae7d111e1c1c904f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWZUWOHX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCKCoQ7DQ3htWHe9ijkbkwYvbhVlMaT%2FpMMulwtrmUT3AIhAOXuSMx1gBhVz9K4a2ASSD0%2FDr6Zjmbb5wzvq0nAbgcOKv8DCFgQABoMNjM3NDIzMTgzODA1Igzw78wmVj3tU0asdxwq3APG0Oy%2F3gzxXYpT16uYizo9quc9sHb93YibYJUw4Esrc8p%2FdpDr7zRF06ainUuFXAonMvJPfX02ewLApZSfkwa2unc8%2FFMaWfZGKReDamZmPc37OLf88Kt1nfF2qCPXtXq2aXD4l1jRXL14AFyHVSJwqjq4obM7S90wigNE9svxY6cWLkRYilH1cqBvubZguLKqLrFeyCqO5ZSlBt%2BEJ%2FCxuizcKkpWsFkFyRxkVXusc18tOGNmKd87G6X2x1sTvY7Tn9%2BupU9WCsPFzU3aQZWX%2FnAzdpLCG5M0c9fbH1J4NjJy6F7%2Bz1RSAfGhL5e0Q03NUv3a%2B2n1c%2BZ%2B0arzr0URYC5fqBKAbPD02ploP%2B8pv1ZoO8fXqoZkcHU4fI5Yl8yPNZTv4Dc7zyMCY0pF00dnRxUstjrv%2BJ%2FdjxOOfox%2Fo8kFBFr5zleAcUxWJRxuehkHFUFk1qwr%2FJwwPF6QsBrNv%2Byj7Dp2GFhWGlxbJnLkLTRy6EZQ1zHNP98EO2bpgZpJWhlWakutl6oofiBYPT36Aae820QSOH4gRjq24r7aCy8H%2BrpFaw%2FtRlaxqPimJEMUaWJu6smixzYawWO34P8P72ilZwBY0FnjpTdgVSgkatUnAS3lkxf%2FMRtQ4jDqkd3DBjqkAZNGSwCHZ8qXqrAms9ArpA2XW92OdBNP%2Fc8ebmdAwa%2Fv5MVc2WBg7M627zWUibK6ioxBlfrPIShLLAo6gBVMrtuWTU%2BjExnvkbEMdBK1GbIl3YriK1E2rXZW6LXvorHjGTPW9BUn%2Bi5gM6mJkW346e%2BYeaOTk%2BO80T%2BTPccYo%2FiRufNGJjyR%2FNP3AD3hRuSIEXGGRvSHPBaGNzM%2Bm1U5CCNA%2BGFN&X-Amz-Signature=80222684a7cb9c2bd243ad8361319cdeca97bace9ead07c22a1b3d55b9c3fe22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
