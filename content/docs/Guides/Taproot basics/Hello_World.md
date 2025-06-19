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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZ4ZNAG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiz7dBn0wjc3%2FcYGbE7ug8Jru57e%2BBNv8qZj53AO3OqAiEApmVGYb2aeShHuj6lm7TYRCvb7ksHnv0ngmmVTueBY0EqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxFy4JgGavZZvrjEircA1d8%2Fy0lfWyooJI5h8ibKZfBAjEQW1XczmyfpHMV3%2FhSW6EqtRWUVFRPcS6uGKEtQSVl2hhoy8JiteoSlGfTYUVZdZXcPrXbKgwlCiEYx9BMfGFXsf%2BMwyyCC4lbNMdRCewk2Z7N2t1GFWyGartH1LljfsHh5lsw2j72slhb%2FKqC3%2F4gmL7dZyq08l5R44c13tUZow9A4ZwpJLvEcFvx1dzI2%2FS8FlL1eXXrnT1SBxTgddVP9XUrcsWwST5nYhjL0TwbtkcN%2BRD7UphKswhD1VqxD9HtGaxhW1QFuws%2FFqkL4v15%2FqhTs1%2B9Mw0HACBtv%2BX2GPGpiY1eCn5waMPNVSGV51x6WquYHmoHJvO8eNla2Z6yyOoHKt1Um%2BbjyVqeVvWpDxuP4k2CzIIwMSEOi5PlR3EC6bNaX3fyPlgnqnECuMXhyYQszUC%2FX8soyEt9xQ1z%2FC%2BVaNUL6xHAqPcvtHxbIa6kV07QMn4Bhtb0P7bFl%2BEEaokAB02xhjzKnaqMyJf9xwVCEKnvqsNBxchWTvcslVltCl8qakHbxxuDSv5OKNgvKMiS8BUG7JrLifPVUK%2FcNuS9CCcC0kPtq8fpmAM25d9B5wpoei7%2B5rJ1eZtC0hTSBBRF7GGnw%2BdjMIqSz8IGOqUBZfGtz1wLAOhK4ahbbAf1WSmHDncUOg%2FyfwsJ2oTsqcxRCJz07HlZOMoPWuy78jElk3JC5KOgqstWxKNoY5dPpQHXwiE4lR7sNgJz0%2F40%2F1rasBmDPayQ665hvuQ4c%2FlhZfHEyrDc4%2BzFtnHU%2FMbi5HKH6tzJweZFXhQkh%2FuLat%2BKEp7VXKOnDw7pgndHf8oSp8GUSORnONEVp15oMLwrUWK2dWef&X-Amz-Signature=c74a4ac2264996b12e25458140596b8db03abd0c86e73c83f3eabfd742a53021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZ4ZNAG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiz7dBn0wjc3%2FcYGbE7ug8Jru57e%2BBNv8qZj53AO3OqAiEApmVGYb2aeShHuj6lm7TYRCvb7ksHnv0ngmmVTueBY0EqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxFy4JgGavZZvrjEircA1d8%2Fy0lfWyooJI5h8ibKZfBAjEQW1XczmyfpHMV3%2FhSW6EqtRWUVFRPcS6uGKEtQSVl2hhoy8JiteoSlGfTYUVZdZXcPrXbKgwlCiEYx9BMfGFXsf%2BMwyyCC4lbNMdRCewk2Z7N2t1GFWyGartH1LljfsHh5lsw2j72slhb%2FKqC3%2F4gmL7dZyq08l5R44c13tUZow9A4ZwpJLvEcFvx1dzI2%2FS8FlL1eXXrnT1SBxTgddVP9XUrcsWwST5nYhjL0TwbtkcN%2BRD7UphKswhD1VqxD9HtGaxhW1QFuws%2FFqkL4v15%2FqhTs1%2B9Mw0HACBtv%2BX2GPGpiY1eCn5waMPNVSGV51x6WquYHmoHJvO8eNla2Z6yyOoHKt1Um%2BbjyVqeVvWpDxuP4k2CzIIwMSEOi5PlR3EC6bNaX3fyPlgnqnECuMXhyYQszUC%2FX8soyEt9xQ1z%2FC%2BVaNUL6xHAqPcvtHxbIa6kV07QMn4Bhtb0P7bFl%2BEEaokAB02xhjzKnaqMyJf9xwVCEKnvqsNBxchWTvcslVltCl8qakHbxxuDSv5OKNgvKMiS8BUG7JrLifPVUK%2FcNuS9CCcC0kPtq8fpmAM25d9B5wpoei7%2B5rJ1eZtC0hTSBBRF7GGnw%2BdjMIqSz8IGOqUBZfGtz1wLAOhK4ahbbAf1WSmHDncUOg%2FyfwsJ2oTsqcxRCJz07HlZOMoPWuy78jElk3JC5KOgqstWxKNoY5dPpQHXwiE4lR7sNgJz0%2F40%2F1rasBmDPayQ665hvuQ4c%2FlhZfHEyrDc4%2BzFtnHU%2FMbi5HKH6tzJweZFXhQkh%2FuLat%2BKEp7VXKOnDw7pgndHf8oSp8GUSORnONEVp15oMLwrUWK2dWef&X-Amz-Signature=775e5a688407207850549d777145ac0926679a5afb13d2fb9c892e688a878237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
