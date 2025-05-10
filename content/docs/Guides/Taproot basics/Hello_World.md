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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625UKQYBV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIG7v%2BSPK0YHHYQI7J%2BXNvC6IlPhGSiPsyOm8F7NI57vzAiEAv1agkFxJEA5BUrPeF5tR%2FkTgaFRa1q5i19U%2Bq%2BcGgMIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVDH7J1sBhTrjT%2FjCrcA7gaD78gF0fym8zanqxB0XceDwHLOyv0JqQIYsgWyCZ5WNzugERo2tLfLWF%2BpaM%2BxpCkbD7kyY2tp7a8WbN5V5mj0EjAcG7m6rxe8GUPDReUoXwTPjcLENjkA8u3U1jlF9eKFvwcAr9hpGMmUyzOtumv1d%2ByNP%2BqLol5UT8%2B%2FFz%2B%2FsxgG%2Buetxnt0w8GhR%2BMsL0qVZKhaeyumXVp4D%2B82zhDvPVTyyCGvJjcRZ5kFbOXFGO36YVp4XTx1N28QGi1z7KFJ0feQlkOZUF%2Bo50oQW4Yu61Qy2V3W6qAqEd0RBBSrHcIIYmO9oxblK2Ff1nUPkkxIRHQdF2SSM2qGdfGGzEeCF2mxx2FYlDE9sfibM2XhkSthjJ7GafcMfgsTaK00LCoOlXTDer8HRHWKe2SphH%2F45g9DkCVroiB9yz2y6%2FkYTngxrYGzyLq0y%2B6dj30XyQQf0Fvjzex4uR6x5X%2FyYtlAstS44I6OO3c5AmqJWmycT2Qxd2uLuFz9Ewr6VbsAm1xQM0XfABZeIrOY2Kx%2F9Z7i4A4FkGftReZZBGJqDyq1KgPPHN5CC%2FT1QCURhOzKoetlsnkaFq4TOMlRRrhJevjjv0vCwgbAmlu3wl7wGmFXu2kilf7gInCRu7jMK6K%2F8AGOqUBjYxZx%2FYKP3HVUv%2B80FzURdmw9r43cIv8OduLCVCsxkWWMYh763GqkJ8MxuZV5%2FaOWoanJIBWEjQd6mBjTMP%2Fb14t%2FUX9ZC%2BbtHGXHzSZV2u9z3Cjh3zjKnKTuKBwUOPJMEbS%2FJ6jHqiYW0%2BD2oYHH3tZ%2B7pgu2%2FpF9JKJIo%2BJFu%2FLJJbsfuk0rlboH12dF4%2FNBskYegLR88RWJM%2B7reNnNmjBaLa&X-Amz-Signature=084227853940b86f4e3300a4174d02c8c113a0c1881651822bee86c33e675f55&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625UKQYBV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIG7v%2BSPK0YHHYQI7J%2BXNvC6IlPhGSiPsyOm8F7NI57vzAiEAv1agkFxJEA5BUrPeF5tR%2FkTgaFRa1q5i19U%2Bq%2BcGgMIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVDH7J1sBhTrjT%2FjCrcA7gaD78gF0fym8zanqxB0XceDwHLOyv0JqQIYsgWyCZ5WNzugERo2tLfLWF%2BpaM%2BxpCkbD7kyY2tp7a8WbN5V5mj0EjAcG7m6rxe8GUPDReUoXwTPjcLENjkA8u3U1jlF9eKFvwcAr9hpGMmUyzOtumv1d%2ByNP%2BqLol5UT8%2B%2FFz%2B%2FsxgG%2Buetxnt0w8GhR%2BMsL0qVZKhaeyumXVp4D%2B82zhDvPVTyyCGvJjcRZ5kFbOXFGO36YVp4XTx1N28QGi1z7KFJ0feQlkOZUF%2Bo50oQW4Yu61Qy2V3W6qAqEd0RBBSrHcIIYmO9oxblK2Ff1nUPkkxIRHQdF2SSM2qGdfGGzEeCF2mxx2FYlDE9sfibM2XhkSthjJ7GafcMfgsTaK00LCoOlXTDer8HRHWKe2SphH%2F45g9DkCVroiB9yz2y6%2FkYTngxrYGzyLq0y%2B6dj30XyQQf0Fvjzex4uR6x5X%2FyYtlAstS44I6OO3c5AmqJWmycT2Qxd2uLuFz9Ewr6VbsAm1xQM0XfABZeIrOY2Kx%2F9Z7i4A4FkGftReZZBGJqDyq1KgPPHN5CC%2FT1QCURhOzKoetlsnkaFq4TOMlRRrhJevjjv0vCwgbAmlu3wl7wGmFXu2kilf7gInCRu7jMK6K%2F8AGOqUBjYxZx%2FYKP3HVUv%2B80FzURdmw9r43cIv8OduLCVCsxkWWMYh763GqkJ8MxuZV5%2FaOWoanJIBWEjQd6mBjTMP%2Fb14t%2FUX9ZC%2BbtHGXHzSZV2u9z3Cjh3zjKnKTuKBwUOPJMEbS%2FJ6jHqiYW0%2BD2oYHH3tZ%2B7pgu2%2FpF9JKJIo%2BJFu%2FLJJbsfuk0rlboH12dF4%2FNBskYegLR88RWJM%2B7reNnNmjBaLa&X-Amz-Signature=abdada304778bda2c64041599046aa914be6375e6677b520f23b158a51b45abc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
