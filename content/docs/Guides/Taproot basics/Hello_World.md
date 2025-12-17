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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFAR554%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWNZVZr3VBucwZra6Sd%2BLgKh8fGR9NUc49XlQ9OFerZQIhAKwCyZBBxr0kdi%2FXe8e3WFHVzb%2BUnY37HWLV7QXicsM3Kv8DCHIQABoMNjM3NDIzMTgzODA1IgzeEXzJ4jWit7KoYqwq3AMXRe5EDbE5iuFaDvtYM3%2FcHQwGGL0LLBrRSk5mAKTqf8TKdzcxzgPTzE8QReoT8jrRNsgkGzS7HsLoqTLvApGRd7nuZhdW3Ca9PosIV%2Ba03%2FINgsBuXXdHrf7VeiieYFfWbQ8OrGedYytQ3%2FdJ3jURzsQV3gWR%2F3vs55Cal3Op5zKN94hzebcovw0MCFqrmulkwIdDsVSreBSvmm8bZ%2B06S5h7gs7Tc%2FKaogRnP3zmRWJmgrqWlH%2Fx8yFeX2IEfD2Xt5UtDpQpJIEQqm5MYTiRutbXG7GNu78nneH6Vfb1rfUgTYDOH9%2FTiiVDdpCoHsrP66yPTyPd3%2BgvN2If%2BLKm5AdvaQWIwGNNx1CbyFT7oI0L4CyV99amggVP0y8ph4CxBEQOE6Tnnq%2BVcNb5mTh9KcjJ45ZWApbK5%2FxWannDXfxgBfAzuY7Z4zKc%2FA%2BQLgt0CRdDQzOmJPDElFcHptbLN6jmFiMUw%2FRWzFCGUNkT5LdZdEaMqhqSukYicTT5oqcdKThQZTIkAjCZmLg3pwc2GPrBgiXALnJg9gr2rjEQvfPhH8SR9XHVqLC0KDADd6RGLm053bLYv9FkCaLxwvatYmO6tbhCB%2FB9kjNL4jZi%2FquJkfsVXls4%2FCKwdjDF%2B4fKBjqkAS9jelBlwp0ib4TscWHgn%2FuVooeRHyztiz5rA%2FcufQiB0CvzRu501eFSs8%2FpWjsTnXWifVG0%2FiDYdWGCcD2hIM4YR8mIXq1AYsUwOGOpYzyjqaZ%2Fb%2FVxvoHqtZE71YmBm%2ByVWJ0Q3T%2BVfMlKhuKnsPG1EfFmFCP02iWefwujwCvRgZOBO0PdJ0Y3cvcjdtWtKoHynTn%2BTEg1dHKLFr0IDpXxmYMQ&X-Amz-Signature=fe58c08189b128ba7757658672b8b190db116a5672dc7e88236d94621813ee59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFAR554%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWNZVZr3VBucwZra6Sd%2BLgKh8fGR9NUc49XlQ9OFerZQIhAKwCyZBBxr0kdi%2FXe8e3WFHVzb%2BUnY37HWLV7QXicsM3Kv8DCHIQABoMNjM3NDIzMTgzODA1IgzeEXzJ4jWit7KoYqwq3AMXRe5EDbE5iuFaDvtYM3%2FcHQwGGL0LLBrRSk5mAKTqf8TKdzcxzgPTzE8QReoT8jrRNsgkGzS7HsLoqTLvApGRd7nuZhdW3Ca9PosIV%2Ba03%2FINgsBuXXdHrf7VeiieYFfWbQ8OrGedYytQ3%2FdJ3jURzsQV3gWR%2F3vs55Cal3Op5zKN94hzebcovw0MCFqrmulkwIdDsVSreBSvmm8bZ%2B06S5h7gs7Tc%2FKaogRnP3zmRWJmgrqWlH%2Fx8yFeX2IEfD2Xt5UtDpQpJIEQqm5MYTiRutbXG7GNu78nneH6Vfb1rfUgTYDOH9%2FTiiVDdpCoHsrP66yPTyPd3%2BgvN2If%2BLKm5AdvaQWIwGNNx1CbyFT7oI0L4CyV99amggVP0y8ph4CxBEQOE6Tnnq%2BVcNb5mTh9KcjJ45ZWApbK5%2FxWannDXfxgBfAzuY7Z4zKc%2FA%2BQLgt0CRdDQzOmJPDElFcHptbLN6jmFiMUw%2FRWzFCGUNkT5LdZdEaMqhqSukYicTT5oqcdKThQZTIkAjCZmLg3pwc2GPrBgiXALnJg9gr2rjEQvfPhH8SR9XHVqLC0KDADd6RGLm053bLYv9FkCaLxwvatYmO6tbhCB%2FB9kjNL4jZi%2FquJkfsVXls4%2FCKwdjDF%2B4fKBjqkAS9jelBlwp0ib4TscWHgn%2FuVooeRHyztiz5rA%2FcufQiB0CvzRu501eFSs8%2FpWjsTnXWifVG0%2FiDYdWGCcD2hIM4YR8mIXq1AYsUwOGOpYzyjqaZ%2Fb%2FVxvoHqtZE71YmBm%2ByVWJ0Q3T%2BVfMlKhuKnsPG1EfFmFCP02iWefwujwCvRgZOBO0PdJ0Y3cvcjdtWtKoHynTn%2BTEg1dHKLFr0IDpXxmYMQ&X-Amz-Signature=7dd89d08138c3254bc48eb483c375c75cb98ed84d81e272c484aa9d9226ddbda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
