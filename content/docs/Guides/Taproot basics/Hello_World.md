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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG42JV46%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJFMEMCH3Fz%2BsoDmnLKSr4eLa7wfBVBCQ%2FuO5m4ZxzjNgssfmwCIGsWH0g65fCb6r%2Ff9%2Fo4ukwgp4agVfJLOYCK%2FHlnOskOKv8DCEwQABoMNjM3NDIzMTgzODA1Igyaicu1%2FSmEALEv8%2B0q3AP%2Bw3c1hIqzc3QcDOozy6LyhrueHlZNTsauQWmq2%2FYKNNw7%2FYf26giqfKqNPuoT9qdHUWqFmlWkbqwL6ZWo9UJlFJPVcY5rTVRILDm6lQkwgkcqCUqvUhIu7eaRdMsM5epzICZxl7TRuuJ9dZfqhDdSNhvgmpcLtvEilhH8v9CV1DTdg4L6%2Fg59pRmW2wlxYieaMZWI4MsV6O1CVI1tdNVJZT75%2BRMssAcnNZAFPA1iUdT168q%2BvRIh9o3gZUwwu%2B140aSl%2BWob0URVWfm02VflDL8DI5pxXYc%2F%2BeNEh2YIEIoVJRDYLEhwOmLiCQGUlxeSORN3P6TQmTDlW9jXHffxNS8v8qeuR5jUoMj5p8I2G0A2xwAYlqSSF0%2FylJbAFocdifoFQeUWouiNfd%2FQWkSgDjEAwWhZOBlmWGc%2FhuMAKQUwpSTHIInEeIVRrkYQrESS4ROHxaRoUGwMdx3HJVa5YJem2okCHMx4brpkmPXmt48muZHKSwaWhktJWE5cJ3ykCXxL9G4vGGRtZ27CU0YgrepbTaQ3ShTBuL54rSBgbg5y8jyTA%2BRdvvJdm%2FOh2Gs0qtwI9zx7vyWtEzhLU4EigVsp4EORh%2Fi3Rzggr8krwjBkst7gcm4E0MG4ijCqgK2%2BBjqnASaGVDuApy8IJf4LmOW2VaFEbH18IDQwMQPSiKO%2BpzP6EoDjOp%2BidQVVIVDgtYd27kaoepTOqTv1Ub0uwOQPwGS2IuhWGska%2FSWNRY6GNAF0UOxOn0KuZ2WrHhrFCDDM21JJCDVeCYvmmSeuibVIxcWq9nCnozcrstf%2FiUw%2FxTz%2FP%2F5Dl7BnCEnnkwQJPi%2FX%2FvWw1miFxjaksg04cHTJqmHzaIMgb9ER&X-Amz-Signature=fabbf112afdc618ae56422a3751370610ffd05068937577cf76ec546390d9077&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG42JV46%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJFMEMCH3Fz%2BsoDmnLKSr4eLa7wfBVBCQ%2FuO5m4ZxzjNgssfmwCIGsWH0g65fCb6r%2Ff9%2Fo4ukwgp4agVfJLOYCK%2FHlnOskOKv8DCEwQABoMNjM3NDIzMTgzODA1Igyaicu1%2FSmEALEv8%2B0q3AP%2Bw3c1hIqzc3QcDOozy6LyhrueHlZNTsauQWmq2%2FYKNNw7%2FYf26giqfKqNPuoT9qdHUWqFmlWkbqwL6ZWo9UJlFJPVcY5rTVRILDm6lQkwgkcqCUqvUhIu7eaRdMsM5epzICZxl7TRuuJ9dZfqhDdSNhvgmpcLtvEilhH8v9CV1DTdg4L6%2Fg59pRmW2wlxYieaMZWI4MsV6O1CVI1tdNVJZT75%2BRMssAcnNZAFPA1iUdT168q%2BvRIh9o3gZUwwu%2B140aSl%2BWob0URVWfm02VflDL8DI5pxXYc%2F%2BeNEh2YIEIoVJRDYLEhwOmLiCQGUlxeSORN3P6TQmTDlW9jXHffxNS8v8qeuR5jUoMj5p8I2G0A2xwAYlqSSF0%2FylJbAFocdifoFQeUWouiNfd%2FQWkSgDjEAwWhZOBlmWGc%2FhuMAKQUwpSTHIInEeIVRrkYQrESS4ROHxaRoUGwMdx3HJVa5YJem2okCHMx4brpkmPXmt48muZHKSwaWhktJWE5cJ3ykCXxL9G4vGGRtZ27CU0YgrepbTaQ3ShTBuL54rSBgbg5y8jyTA%2BRdvvJdm%2FOh2Gs0qtwI9zx7vyWtEzhLU4EigVsp4EORh%2Fi3Rzggr8krwjBkst7gcm4E0MG4ijCqgK2%2BBjqnASaGVDuApy8IJf4LmOW2VaFEbH18IDQwMQPSiKO%2BpzP6EoDjOp%2BidQVVIVDgtYd27kaoepTOqTv1Ub0uwOQPwGS2IuhWGska%2FSWNRY6GNAF0UOxOn0KuZ2WrHhrFCDDM21JJCDVeCYvmmSeuibVIxcWq9nCnozcrstf%2FiUw%2FxTz%2FP%2F5Dl7BnCEnnkwQJPi%2FX%2FvWw1miFxjaksg04cHTJqmHzaIMgb9ER&X-Amz-Signature=8f681300855f2f3cf020577b291584ca20405c96dfaa9287d997c66ef0df4c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
