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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7T25ZF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAM%2FYk%2B4aH7ypKH7U7LP6CfE5UyXP62VrFsxdtNRGDYAiEAqfF62BjdGOvPsI9lG6yAkCmjY8rTXRDXQylISDki9gsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcQC6MJnXnjXJMe1SrcA73ZxQmPEW%2FibJSpy3Ne4y5v%2FmfTK04zmaAnC1%2B0cGinMps8Dx2A%2FCtmAE0TWij3JV1xLeA6YM6NiG207GGC0UloW92nauyPC3juGweWbjGezP6hHm7xGWYMwUiQoLkGxRwbe5BntLeJDxPYol%2BYpR824%2BTL51fWniM%2FIUaPrGxUrAhf78Pm%2FnMhKPxBrtn8ZA1rAaNZthC4n3F%2FeQpS4zyFEeX0Lq6YmQ7feXS%2FC3CB311pBkeudS1y2bSECJgFHk9X4ZzQPJD5Y9bbRIoGUQE3IFwcAoIaAvQE7r85j9obfbsF0WyvQTmGcqUa12VHgknikS1KUi6N5tUH4Wz5A42XkwjjqS6%2BkcUTjk999u%2BXGovvNn6i8QycaxB4aXXNBLQH9CwPCD5r0kVAfbYyk0VnM40uHcKoHczv4xtZFSlqcO3Nzym2QB%2F63dnJF2TncJLHZdFxPH8GIXN3Jzd5JHybe4CD4IfRgM8jeM6jz2fQ%2Bq3sKM9MSUc4%2BUDx4cWhdHI2A1BegQaJ4zk5vzsC2rINFQ6T2Ye3hCHf%2FfaKhUojy0ZOYfS6t2xmFI0XAQPJLEr7hZhiqaGc8jB%2BFPf82WzU7Inyo7RB1UgO1kRFiu6s3inXp4TgAKffACOzMLmc8rwGOqUByPaZY%2B5I%2F2EoqFVMUoTe0oSF6vMG7qow4lVcKUldXIf6WDKsweZtLfv3L3BnFY6htaIkf1SOdl5sodebBAGoMNL9D83%2B65OFVTMvwQX%2Fn5epBQmjnxjsdzuNv41C34ldB5Vn3bLM7e6CDquf9Q0RwvnvWxACNOILI5hzHLEXqAwju6NzioCCVam%2FB3IYIUZjBCeYSWJRnccOTSezMCwbS0Ew%2B8gh&X-Amz-Signature=7ed2495a818e0ead5475d7042afe19822557eb64088b78218424a8ad35e25264&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7T25ZF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAM%2FYk%2B4aH7ypKH7U7LP6CfE5UyXP62VrFsxdtNRGDYAiEAqfF62BjdGOvPsI9lG6yAkCmjY8rTXRDXQylISDki9gsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcQC6MJnXnjXJMe1SrcA73ZxQmPEW%2FibJSpy3Ne4y5v%2FmfTK04zmaAnC1%2B0cGinMps8Dx2A%2FCtmAE0TWij3JV1xLeA6YM6NiG207GGC0UloW92nauyPC3juGweWbjGezP6hHm7xGWYMwUiQoLkGxRwbe5BntLeJDxPYol%2BYpR824%2BTL51fWniM%2FIUaPrGxUrAhf78Pm%2FnMhKPxBrtn8ZA1rAaNZthC4n3F%2FeQpS4zyFEeX0Lq6YmQ7feXS%2FC3CB311pBkeudS1y2bSECJgFHk9X4ZzQPJD5Y9bbRIoGUQE3IFwcAoIaAvQE7r85j9obfbsF0WyvQTmGcqUa12VHgknikS1KUi6N5tUH4Wz5A42XkwjjqS6%2BkcUTjk999u%2BXGovvNn6i8QycaxB4aXXNBLQH9CwPCD5r0kVAfbYyk0VnM40uHcKoHczv4xtZFSlqcO3Nzym2QB%2F63dnJF2TncJLHZdFxPH8GIXN3Jzd5JHybe4CD4IfRgM8jeM6jz2fQ%2Bq3sKM9MSUc4%2BUDx4cWhdHI2A1BegQaJ4zk5vzsC2rINFQ6T2Ye3hCHf%2FfaKhUojy0ZOYfS6t2xmFI0XAQPJLEr7hZhiqaGc8jB%2BFPf82WzU7Inyo7RB1UgO1kRFiu6s3inXp4TgAKffACOzMLmc8rwGOqUByPaZY%2B5I%2F2EoqFVMUoTe0oSF6vMG7qow4lVcKUldXIf6WDKsweZtLfv3L3BnFY6htaIkf1SOdl5sodebBAGoMNL9D83%2B65OFVTMvwQX%2Fn5epBQmjnxjsdzuNv41C34ldB5Vn3bLM7e6CDquf9Q0RwvnvWxACNOILI5hzHLEXqAwju6NzioCCVam%2FB3IYIUZjBCeYSWJRnccOTSezMCwbS0Ew%2B8gh&X-Amz-Signature=c0ac74d8ef85f1b4000e68755892e05c052768ad3ada9fb0b235efaa289405ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
