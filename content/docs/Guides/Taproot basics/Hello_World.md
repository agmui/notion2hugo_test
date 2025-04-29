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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NG6EAF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE%2Buqbg6UsaRC%2BxK2EhhCa1Yn92uuSXaASgC%2F2bqcxWQIgPWus8AheBI4R8bR7u6TACdJvh8NzWvpyoz614Pkfs%2FYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOONLJiZlfdfEkwX5ircA8O%2BE1tzCEh7WnS5QpRrFAaoeK3T9DPl3E%2BXSgSL14C%2Bznxkljez2DMqJx9ngm%2F9iZbP9g6xb0QgOZF2mgM0xTXeHdb8cKrrKNc%2FFwYZZReRs9Odofywi4OhwWLoeqzG1%2Bltv%2FzauqY%2Btj7p6CWfLMDuzhloiqROLXhEkNXdjWY%2B363cXmXmlSeJnVtB2i9twc2TN2IpPHo7aKfBMcjH0RF0gEzMXLfs0PnmxqZYHA2szZa1aF7bppEZ68iIwKBPiQQIewjaO60WdViaO1yRIV%2BaN0P6LHAmH43zYSDtZmNorH9vX7N99m3SFCxMae3g5aNPAvx3DwOPQkfeT81l7TgzocVKFMNQn8HLjTi6%2FMSufu1%2FiOqd38879PfT0OPZw1TQPIbkD8HLk7h5mDxRZ0FCvhDK%2FpBLcFLxoFvUtSPZ2DgXyfNwTw6RuMt0ofoMpxlBd2x0h33DeWUhFQ2%2BHB32%2FhyE%2BPwlLtutTYs0qaLMOXJdSGX9nekCeOQHkuDU5EcLsf033SITkiBeLeANK5AX1NoSH6ZlibEa2z6C5xq%2FBNMKB5tRUezIlNr8kFJV7r9h0DVR5xNJkBuFUWdp%2FvmPpi610bEDwB%2FYeTxqhH%2B7jQwla4liJX5hdaz1MM2jw8AGOqUBqgiYpOyzW6hH9zykDj1WA0Q%2F5pHQ10hXm%2FINQxPah8hzXym3THh38Wkm4RkCI%2Fzfda6D9hQ%2BWJURrPEUkI%2B79bcmqQ5qSGVfHrR1tyiy5yKrThIm8KbCsKIo0kDwJza8aqXjg%2FgfAwJh4B7TeWFh7KWAxDVefhUi1vJtDidFHnwBMNAR9DxudTz0%2BjShjRWqJ%2FdMjDIQlXF5hV6EMXG0f5fArirN&X-Amz-Signature=27d475842f0ad8b04670bc1aea689d648d6da0c08fe00d2070293f911cf9328e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NG6EAF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE%2Buqbg6UsaRC%2BxK2EhhCa1Yn92uuSXaASgC%2F2bqcxWQIgPWus8AheBI4R8bR7u6TACdJvh8NzWvpyoz614Pkfs%2FYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOONLJiZlfdfEkwX5ircA8O%2BE1tzCEh7WnS5QpRrFAaoeK3T9DPl3E%2BXSgSL14C%2Bznxkljez2DMqJx9ngm%2F9iZbP9g6xb0QgOZF2mgM0xTXeHdb8cKrrKNc%2FFwYZZReRs9Odofywi4OhwWLoeqzG1%2Bltv%2FzauqY%2Btj7p6CWfLMDuzhloiqROLXhEkNXdjWY%2B363cXmXmlSeJnVtB2i9twc2TN2IpPHo7aKfBMcjH0RF0gEzMXLfs0PnmxqZYHA2szZa1aF7bppEZ68iIwKBPiQQIewjaO60WdViaO1yRIV%2BaN0P6LHAmH43zYSDtZmNorH9vX7N99m3SFCxMae3g5aNPAvx3DwOPQkfeT81l7TgzocVKFMNQn8HLjTi6%2FMSufu1%2FiOqd38879PfT0OPZw1TQPIbkD8HLk7h5mDxRZ0FCvhDK%2FpBLcFLxoFvUtSPZ2DgXyfNwTw6RuMt0ofoMpxlBd2x0h33DeWUhFQ2%2BHB32%2FhyE%2BPwlLtutTYs0qaLMOXJdSGX9nekCeOQHkuDU5EcLsf033SITkiBeLeANK5AX1NoSH6ZlibEa2z6C5xq%2FBNMKB5tRUezIlNr8kFJV7r9h0DVR5xNJkBuFUWdp%2FvmPpi610bEDwB%2FYeTxqhH%2B7jQwla4liJX5hdaz1MM2jw8AGOqUBqgiYpOyzW6hH9zykDj1WA0Q%2F5pHQ10hXm%2FINQxPah8hzXym3THh38Wkm4RkCI%2Fzfda6D9hQ%2BWJURrPEUkI%2B79bcmqQ5qSGVfHrR1tyiy5yKrThIm8KbCsKIo0kDwJza8aqXjg%2FgfAwJh4B7TeWFh7KWAxDVefhUi1vJtDidFHnwBMNAR9DxudTz0%2BjShjRWqJ%2FdMjDIQlXF5hV6EMXG0f5fArirN&X-Amz-Signature=44b8385434b3d12b5e0e2615bc88e868e3511ecb88ecdf1d7a849fcc0c6d2e40&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
