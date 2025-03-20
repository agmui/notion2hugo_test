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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LL5JRS%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCJiuLwIzTIaW%2FrB11G01fHJutG2r7KUBju7pDIcgWDRwIgXL6uyaZQbFxbmr6p7zxoLXYFaisSBC%2FVtULe2i5uN4IqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8FxYs2E5%2FSxfZVZSrcA5jM5rAvTNepvjyeEPsO60z8prJMuH2uP0dWU2nxjsBB6L9NvPv8NF2FIEr0MblOn49QyYs%2FAIUU1j8I5efATmsmBJXmap0uZMnIr1yfJuDMIQkLJjC6xdWVaXPMFPJ0qAsoUUKwQGV%2FKKmwHDUeREzaX5GZC4e%2F%2BZ3y2IC4%2BEkGqLTYmUmZJpChJYu1fpZDOX%2FSV2PnJ7wzmaejD1mpRPPpaMUUrQ0F7vly8yJ0qQijCl5XfwRe843%2B8ckczBn%2BZukFzJmvITNywdTU4yVuEmhYdnvJN2h6ot8%2Fc0iM4Foz5cf0AUiaFf2C31%2ByLivTgyP0V7xyHzybIDmEUCx0RTPafCxJOuEV4tsZulklDf70czVwgML6oXIwbPkIIqrqeq2YSaibRLIoiubW4fbT9Rq2LbDgqpL6elRBpwKgrA0FffMICtwzxX9olDDpOB1fsaf%2F8Edo%2FohPEjikguQQ8j1dNG3WD1HgUr1%2BtuLi5J%2BVYa4TLrE2CKqOwaMwoYY7flZvcX9Z%2F4a%2FRcczrt8FN4i7pQhjZomqczoSGS2d9Dgh3a0YpXZATqurjkZOD70lAx9%2BP9LZX3HiIgZ%2BRp91n%2BPDRUEfKQmd6u2IZgkueVyzQOd77B%2FSJ6OV41NPMIOk8b4GOqUB5C1XPUK3Lm6IXM6XgVORvirtB56ZhCjXKp%2BArc3ReAZpC8ugJ09BvtRQnj4XcrCUUi9al8a5EgA%2F4EOLWPYnbfULUUXFd5Dw%2FCspwqbP3S6gIfbCVTlwAiuhyar4xKIdq7pfnS8qLQmr6huOPgjfuLvppFWSGlKB7HKAnYh3LxrZOjIkrUUu3M3tjCk9%2BJ8qbS0vJYV37ETe91L16H1EF%2FAR3l5z&X-Amz-Signature=21f53893961ea158d465bd26924288dcc2ca1adbd7e24b8133e68f5fb3acf704&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LL5JRS%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCJiuLwIzTIaW%2FrB11G01fHJutG2r7KUBju7pDIcgWDRwIgXL6uyaZQbFxbmr6p7zxoLXYFaisSBC%2FVtULe2i5uN4IqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8FxYs2E5%2FSxfZVZSrcA5jM5rAvTNepvjyeEPsO60z8prJMuH2uP0dWU2nxjsBB6L9NvPv8NF2FIEr0MblOn49QyYs%2FAIUU1j8I5efATmsmBJXmap0uZMnIr1yfJuDMIQkLJjC6xdWVaXPMFPJ0qAsoUUKwQGV%2FKKmwHDUeREzaX5GZC4e%2F%2BZ3y2IC4%2BEkGqLTYmUmZJpChJYu1fpZDOX%2FSV2PnJ7wzmaejD1mpRPPpaMUUrQ0F7vly8yJ0qQijCl5XfwRe843%2B8ckczBn%2BZukFzJmvITNywdTU4yVuEmhYdnvJN2h6ot8%2Fc0iM4Foz5cf0AUiaFf2C31%2ByLivTgyP0V7xyHzybIDmEUCx0RTPafCxJOuEV4tsZulklDf70czVwgML6oXIwbPkIIqrqeq2YSaibRLIoiubW4fbT9Rq2LbDgqpL6elRBpwKgrA0FffMICtwzxX9olDDpOB1fsaf%2F8Edo%2FohPEjikguQQ8j1dNG3WD1HgUr1%2BtuLi5J%2BVYa4TLrE2CKqOwaMwoYY7flZvcX9Z%2F4a%2FRcczrt8FN4i7pQhjZomqczoSGS2d9Dgh3a0YpXZATqurjkZOD70lAx9%2BP9LZX3HiIgZ%2BRp91n%2BPDRUEfKQmd6u2IZgkueVyzQOd77B%2FSJ6OV41NPMIOk8b4GOqUB5C1XPUK3Lm6IXM6XgVORvirtB56ZhCjXKp%2BArc3ReAZpC8ugJ09BvtRQnj4XcrCUUi9al8a5EgA%2F4EOLWPYnbfULUUXFd5Dw%2FCspwqbP3S6gIfbCVTlwAiuhyar4xKIdq7pfnS8qLQmr6huOPgjfuLvppFWSGlKB7HKAnYh3LxrZOjIkrUUu3M3tjCk9%2BJ8qbS0vJYV37ETe91L16H1EF%2FAR3l5z&X-Amz-Signature=8b5cb919bfbeb9912260efc83fa59052215748f46df8e28df9d88e470747eb2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
