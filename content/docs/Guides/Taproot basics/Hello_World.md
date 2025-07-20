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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OOBRCW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOsipZGaSyIiiOkSHdnSp%2B50X7XLni0%2BcrrbcS8bejiAiBN0ZysXzb0ae121MUl7j6xGNgCQdbnNi2fdc%2BosOMeNiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNfc0p0VNC7IuQbI%2FKtwDzBmAESz4bCZblzFz29ECEQ22KOIqKcm6tPSKfwYu9Cbvtmy%2FH3KZydXveN7v0WQD6z2XvII2bPI0cb8JOs4oXjp7wcxVQqqvMZ4I6dRCF9ItWJuJt6ntq0lzohFT%2FWLSzP2YtkQsiaT4ixf%2F%2FboJKL8utkmLOrQ6PwpZ7lmOZt2ESYxWRIWd23xZbxT7MhTYR4xl8yWJc8afkRFJJn5DWZMRCjRtmmFnnkqmILn3J2bhaqQincHYNWLN5yfwT4anJMbwpl0wNIueXJR0Rq917IWp%2FJ%2F2GK6BpBNpuqvTJgh3PYtcYo4EG%2BLLw8a0Ps%2BYuHPmnfWMCySMx9lLPquD2xijwFAnSR2Z%2B0qDSfhToTG9n36WW7unfWJ2kNglN%2FFf%2FjzSmq0rlvUa9dxxatk6jdv1Y2lVlcdKjAogBFD%2FZr4P5Wic3ujZSnGx5FjRx%2FJ8wmfbypVOH4OgbUy6xmP69bPq1sG6tTMcF78QBV0DJGqXbmPo49hXX%2BMVE6DSMRCzb5AjwijwSaq%2FJrVxOjuzJv56Ay5o66gdDfoZyBUJ2d6rs7nQS4PtfQQ6yz84IeKg3ewXQkiESe5mjMiTyIXhfftqlk%2FZVgzQeBpOHTglcpSLzDykASbf6i25ybwwsdnzwwY6pgEmUsFoXkHrHCKbZ2cO82JNdl3nEPa2yxLA6pOEI1ZdDvq9SDhRpRSFYALHqUO9Me4R%2B81sWHMljUmUEnylFgOsDoMXYpA4g68DjQZHUeBKGTqCWn34BNRGOru1IZc3qpYKICVH%2BIUBzZKwsOCxHB41L8fqo75RzQiVGpUsEuxqbq6zXt%2FUIdtwzm9sgmCrjb5hUByYuRnYhO%2B0k8a8ldBQMfbjPqO9&X-Amz-Signature=a90f8e2a6bc81f5a1ca68dda03347c7d44eb9490864a5fcd47e4f72fa843882e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OOBRCW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOsipZGaSyIiiOkSHdnSp%2B50X7XLni0%2BcrrbcS8bejiAiBN0ZysXzb0ae121MUl7j6xGNgCQdbnNi2fdc%2BosOMeNiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNfc0p0VNC7IuQbI%2FKtwDzBmAESz4bCZblzFz29ECEQ22KOIqKcm6tPSKfwYu9Cbvtmy%2FH3KZydXveN7v0WQD6z2XvII2bPI0cb8JOs4oXjp7wcxVQqqvMZ4I6dRCF9ItWJuJt6ntq0lzohFT%2FWLSzP2YtkQsiaT4ixf%2F%2FboJKL8utkmLOrQ6PwpZ7lmOZt2ESYxWRIWd23xZbxT7MhTYR4xl8yWJc8afkRFJJn5DWZMRCjRtmmFnnkqmILn3J2bhaqQincHYNWLN5yfwT4anJMbwpl0wNIueXJR0Rq917IWp%2FJ%2F2GK6BpBNpuqvTJgh3PYtcYo4EG%2BLLw8a0Ps%2BYuHPmnfWMCySMx9lLPquD2xijwFAnSR2Z%2B0qDSfhToTG9n36WW7unfWJ2kNglN%2FFf%2FjzSmq0rlvUa9dxxatk6jdv1Y2lVlcdKjAogBFD%2FZr4P5Wic3ujZSnGx5FjRx%2FJ8wmfbypVOH4OgbUy6xmP69bPq1sG6tTMcF78QBV0DJGqXbmPo49hXX%2BMVE6DSMRCzb5AjwijwSaq%2FJrVxOjuzJv56Ay5o66gdDfoZyBUJ2d6rs7nQS4PtfQQ6yz84IeKg3ewXQkiESe5mjMiTyIXhfftqlk%2FZVgzQeBpOHTglcpSLzDykASbf6i25ybwwsdnzwwY6pgEmUsFoXkHrHCKbZ2cO82JNdl3nEPa2yxLA6pOEI1ZdDvq9SDhRpRSFYALHqUO9Me4R%2B81sWHMljUmUEnylFgOsDoMXYpA4g68DjQZHUeBKGTqCWn34BNRGOru1IZc3qpYKICVH%2BIUBzZKwsOCxHB41L8fqo75RzQiVGpUsEuxqbq6zXt%2FUIdtwzm9sgmCrjb5hUByYuRnYhO%2B0k8a8ldBQMfbjPqO9&X-Amz-Signature=bed25bdb79a2267ad6a09570af8ab056cb8d56b145cd83725d11b8848808be10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
