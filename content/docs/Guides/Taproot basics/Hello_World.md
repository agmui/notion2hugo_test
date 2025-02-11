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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGKIXMB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhnbLB%2FDH%2BzjPxe%2Fx25q%2FDBL6gAUj0ZNlJLsAPa%2B5u2AiEA%2F0qUH3t%2F3hGbC%2Ffs1KhDnykk49JmZXRC7Yx2ux%2BXPQIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmSR%2FD7OeZguVuWUyrcA48DmJcyX1M%2F3lbUeQafkxu9Afc8YUxk4GGiIPFyydJ5xCRLLtGf1%2BzVBuGx6i%2Fu%2BvR97gmxLS5FIKeEABYuhIGM9jwU0%2FevfKyMFmhyHD%2FxU0CjcxnKiFXfal%2FmvUA%2BPxly1sOb1gDz64wZqwKKpNKA3qRZMFa2K0AgitvmPUaRyOYrs%2B6JrwVqodLbvuK2DPM2%2FhJrG7ApqKCIZVTjx%2Bkq1odPfD71b1bWG4FEVVFOlvmm2vav7oURxccgxQQx2o3qWLte4JCANTaFf6Aj4%2BPMBZ2Wj3BkPcRfmWsWttw7QWtlKC%2FrTzXqqUSjSGlTTLYvnjzFZ3JA4ZQ04ruvyrr3LZqJX97xvmLBCxTCjKh8Ws3w%2BX9S1NmJQEibzTDQLJ8FbY8CvN4v2YorWbGH33iwGXrmmE7REk3HkwzIxHEeHU88F6cHsTKJvHkRXCqzAkNPTgEc8nc78dzVazfHytPob4t2sbqhxHtJ2IwMkV61cN3Hfh6hcjPYAIQ57LS00SecQoDxDda9Z5a4OpXuQKLObXcTWdcm2d%2Bh%2BE6cYdfaR53CLSP78xl5sHQbDY0KWnfNMrvEiYAaMMgGIevFWV9ClXasApmIYZRr7efsBA4zQkbKTKMlLh2TbwrRMLuSrr0GOqUBsVYfpbYOsxDzL2zrDCtBgiHpzJfXCa0ooNr6wDVTYByMEtHBukVTRY%2Bs67LmN1zUh3szIEeb8yVx95xiSLzGwbnSQuoRlxz67fgJHBnjJiw3Hvr1m0%2Fc7YbNRq%2FTaCv1zDZm6eg%2BkJaBYuNIEixm%2FJL%2FyuYtL%2F5yQDf%2BKNF%2FBRo%2FE8qK7Sl3H7PYFk%2B6a47ACj2ewHzuZ9xb45y3hwyObKDN2Nna&X-Amz-Signature=ae1f450f047b405b6b1d929675eebb307f7e87f3185cffd61091dda43cb3b4eb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGKIXMB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhnbLB%2FDH%2BzjPxe%2Fx25q%2FDBL6gAUj0ZNlJLsAPa%2B5u2AiEA%2F0qUH3t%2F3hGbC%2Ffs1KhDnykk49JmZXRC7Yx2ux%2BXPQIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmSR%2FD7OeZguVuWUyrcA48DmJcyX1M%2F3lbUeQafkxu9Afc8YUxk4GGiIPFyydJ5xCRLLtGf1%2BzVBuGx6i%2Fu%2BvR97gmxLS5FIKeEABYuhIGM9jwU0%2FevfKyMFmhyHD%2FxU0CjcxnKiFXfal%2FmvUA%2BPxly1sOb1gDz64wZqwKKpNKA3qRZMFa2K0AgitvmPUaRyOYrs%2B6JrwVqodLbvuK2DPM2%2FhJrG7ApqKCIZVTjx%2Bkq1odPfD71b1bWG4FEVVFOlvmm2vav7oURxccgxQQx2o3qWLte4JCANTaFf6Aj4%2BPMBZ2Wj3BkPcRfmWsWttw7QWtlKC%2FrTzXqqUSjSGlTTLYvnjzFZ3JA4ZQ04ruvyrr3LZqJX97xvmLBCxTCjKh8Ws3w%2BX9S1NmJQEibzTDQLJ8FbY8CvN4v2YorWbGH33iwGXrmmE7REk3HkwzIxHEeHU88F6cHsTKJvHkRXCqzAkNPTgEc8nc78dzVazfHytPob4t2sbqhxHtJ2IwMkV61cN3Hfh6hcjPYAIQ57LS00SecQoDxDda9Z5a4OpXuQKLObXcTWdcm2d%2Bh%2BE6cYdfaR53CLSP78xl5sHQbDY0KWnfNMrvEiYAaMMgGIevFWV9ClXasApmIYZRr7efsBA4zQkbKTKMlLh2TbwrRMLuSrr0GOqUBsVYfpbYOsxDzL2zrDCtBgiHpzJfXCa0ooNr6wDVTYByMEtHBukVTRY%2Bs67LmN1zUh3szIEeb8yVx95xiSLzGwbnSQuoRlxz67fgJHBnjJiw3Hvr1m0%2Fc7YbNRq%2FTaCv1zDZm6eg%2BkJaBYuNIEixm%2FJL%2FyuYtL%2F5yQDf%2BKNF%2FBRo%2FE8qK7Sl3H7PYFk%2B6a47ACj2ewHzuZ9xb45y3hwyObKDN2Nna&X-Amz-Signature=fec5d72ed8aa226a2cfe87dbaef9b536473bce7bf09fc3de6e4ddab768a542b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
