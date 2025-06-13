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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5RDFFK%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCd%2B%2BwsWjX22Uorgt45HZk%2Bq%2B0Y7LPJTDP2%2BHoa1mWqywIgUKzMa%2FStaj17IhtFMGzKHPRZIhrFRH3XqYPv10nnvBkqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8x0xRd8nRU%2FK4LsCrcAzXehnTMUlyRFy3iawlyMTCU%2BDiIyW7NVO8Isb0AuqcaOXMuI0QSKhT0zkO3BC%2BX9ObySNfsP%2FLwsSSGIe9cI5mL5spnNDYibnZlK%2BaKVpZL7RDctMINFbVgcZIsUYN%2FUNcfUkYVgLU6wAARTcO6oIG1r0bMKcVHXQ98YITBNRzXoZUewcspLOa%2F2hY0LQA83ChO%2FqZ5tqVcE3%2F%2BfeulaceGGmmbRr5wbJfVUr6%2BaHP9plNp%2BRbOzaRnsZJv3bwBm8sKw7SlZp3Pd66ib7Q%2FfP4DTEt%2FeWPjOJhCEOnsD53DpRYh9fW%2BgA33XQNwyNlibR4gBF4RzbC%2FNZU7wg4%2B%2FKjLdaEwhjRkGm7nWYK7TM7qfhUPL2%2BgIbwI9kAoH8CKLURD2qyNKLTobj5%2BKx5%2FvZZhhHY%2BsDcM8NnnEfHbqze4caH2dXBDbRug%2FLa0QpGg%2FWcDYtWQoicIQIZSE76wi2S06mPY3qOzDN1phu3uBxDpuCwYMjMTm3twOpuDG17UonTHwsj1FOUYmllQaXTpfq2wnVdpMOmMxXFNJ1ru1G%2B7BhF%2B4Y0vzPROd0d3EJ9eJVt%2Be3SIWDejtHHoE3xlnvzBmfS00eSeLZqKqayhwgXevS%2F%2Bw8H%2BxyJuIyKEMNvarsIGOqUBfXC3UZnRjZBxhSxhC69JZWMpl3nWg8UHdrBMC4PWeP7ows6cdqCbFHySiLEWJn5Jjjku%2FcAe2eqbR1isfA6CIf8P%2FRsU4ZPyFnEiQCpCrKiDPG7nsUxhF4ACQJbdW%2BFYdkhtBQIys4lG0Fh6gQYeDWntFPK7jkAAZh8c3l7bxyRlFF3AkWgUB%2FPgf9jdPhtk8m%2FJHDnse17QMamsY%2FtG%2FPqFSLgO&X-Amz-Signature=3b23263d9d46ea4b3804d3ca22955d2d6214cb43d19859eb9686dc974a75453c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5RDFFK%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCd%2B%2BwsWjX22Uorgt45HZk%2Bq%2B0Y7LPJTDP2%2BHoa1mWqywIgUKzMa%2FStaj17IhtFMGzKHPRZIhrFRH3XqYPv10nnvBkqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8x0xRd8nRU%2FK4LsCrcAzXehnTMUlyRFy3iawlyMTCU%2BDiIyW7NVO8Isb0AuqcaOXMuI0QSKhT0zkO3BC%2BX9ObySNfsP%2FLwsSSGIe9cI5mL5spnNDYibnZlK%2BaKVpZL7RDctMINFbVgcZIsUYN%2FUNcfUkYVgLU6wAARTcO6oIG1r0bMKcVHXQ98YITBNRzXoZUewcspLOa%2F2hY0LQA83ChO%2FqZ5tqVcE3%2F%2BfeulaceGGmmbRr5wbJfVUr6%2BaHP9plNp%2BRbOzaRnsZJv3bwBm8sKw7SlZp3Pd66ib7Q%2FfP4DTEt%2FeWPjOJhCEOnsD53DpRYh9fW%2BgA33XQNwyNlibR4gBF4RzbC%2FNZU7wg4%2B%2FKjLdaEwhjRkGm7nWYK7TM7qfhUPL2%2BgIbwI9kAoH8CKLURD2qyNKLTobj5%2BKx5%2FvZZhhHY%2BsDcM8NnnEfHbqze4caH2dXBDbRug%2FLa0QpGg%2FWcDYtWQoicIQIZSE76wi2S06mPY3qOzDN1phu3uBxDpuCwYMjMTm3twOpuDG17UonTHwsj1FOUYmllQaXTpfq2wnVdpMOmMxXFNJ1ru1G%2B7BhF%2B4Y0vzPROd0d3EJ9eJVt%2Be3SIWDejtHHoE3xlnvzBmfS00eSeLZqKqayhwgXevS%2F%2Bw8H%2BxyJuIyKEMNvarsIGOqUBfXC3UZnRjZBxhSxhC69JZWMpl3nWg8UHdrBMC4PWeP7ows6cdqCbFHySiLEWJn5Jjjku%2FcAe2eqbR1isfA6CIf8P%2FRsU4ZPyFnEiQCpCrKiDPG7nsUxhF4ACQJbdW%2BFYdkhtBQIys4lG0Fh6gQYeDWntFPK7jkAAZh8c3l7bxyRlFF3AkWgUB%2FPgf9jdPhtk8m%2FJHDnse17QMamsY%2FtG%2FPqFSLgO&X-Amz-Signature=9db0d25396e022bd99fdd84793c2a75cc6e5e5795b47b09a257e6a87a57b3bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
