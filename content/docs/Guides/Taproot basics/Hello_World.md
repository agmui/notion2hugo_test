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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2JNBRNO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICY8bXiCIEpo8eEkzNI8X2gPQY%2BQPymY2PpybeLG8BRNAiEAhl76ycqB%2F7u6PVJ3W40uiDKRbMWZSad%2BZnP%2B5iMrAyoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhgDH4WapFIoLpXGCrcA1rv1LKrvWvaECfT8347xycgaD17CbvwubocqCE%2F2RoD0e1UoihrqCxL0fL0FlqF%2B8FdEx%2F49qZfgL%2BuRxu8cRMPKubCddXfEoOFqqKooVXcFdKrlqqVp4eofJIO1QIyrm%2F1dUzZVPTb%2BjVwaJhlShI%2FMQFoh7QxmvnI%2BsP1sE%2BlZbRPmOOTfaUP7NVf9x2EBqWVHrr2NYkPVkHi1%2Fr6sx46uwjhVNpROfAuABLn8ToSxYEewWA2A%2F8U3yhJFJOoRN1v%2FIro%2FZrK%2Fg0Lo1ioISY4NMnB5z8FHpRRYZO%2FOgnG1QPwOmyDJfW778kx93njKaVcuv%2FnLQ0utcBgYI1HGrRxQb%2FlDnXMi7HpOOs8ucH75ZqJfv%2B4y0CoyCEOlvsbYipDvFkr4VInu3NJKlS6pfhqXeH6FEWfsiUDrjLfUKaBncycJz13C3X%2FVf7MzN7yOc4Ju8iiPbF2aHgkLsL30qIAcMwVyGjSoR%2FT21yjk9xRon5vJAHd3rSgArHFc5uBAqGyMwwWieshCdJYJKL%2Fyqkbtrv0QEzQpx9ckpKUzt14kpl38XUB4frz0ToIdXU%2B3pPQ34D0Xe6boBmhnXx2QAihyoduFROJzsbh3BF9ZM%2BBbSBA%2FpwRqzV9UZbwMK%2FPhsEGOqUBPTZ7Q8Zhd9zvGPofivnCNGofJiw5Byc5yDyBYpGNl%2FXOVqr1p2bdRedMnUE9eOu4zseX6%2F%2FONBW9AtKqvpN8He5vnaDTY8KyCsyeX9HT9nV%2FhpVln5bXKkKfbKf1T4mejgq77i7CLrT1J5xXQzjhFnWPPrvX6CVmZXa4DQqWbi8WfyYQuBYWKhhW3CMWa6HdLhBcJ%2BPAMLiSsHQTodnKLrbFmEX4&X-Amz-Signature=dafb7e4546b5ad79002896f13bbf50d7803ccaedaaefda564667a692e8c9fa53&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2JNBRNO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICY8bXiCIEpo8eEkzNI8X2gPQY%2BQPymY2PpybeLG8BRNAiEAhl76ycqB%2F7u6PVJ3W40uiDKRbMWZSad%2BZnP%2B5iMrAyoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhgDH4WapFIoLpXGCrcA1rv1LKrvWvaECfT8347xycgaD17CbvwubocqCE%2F2RoD0e1UoihrqCxL0fL0FlqF%2B8FdEx%2F49qZfgL%2BuRxu8cRMPKubCddXfEoOFqqKooVXcFdKrlqqVp4eofJIO1QIyrm%2F1dUzZVPTb%2BjVwaJhlShI%2FMQFoh7QxmvnI%2BsP1sE%2BlZbRPmOOTfaUP7NVf9x2EBqWVHrr2NYkPVkHi1%2Fr6sx46uwjhVNpROfAuABLn8ToSxYEewWA2A%2F8U3yhJFJOoRN1v%2FIro%2FZrK%2Fg0Lo1ioISY4NMnB5z8FHpRRYZO%2FOgnG1QPwOmyDJfW778kx93njKaVcuv%2FnLQ0utcBgYI1HGrRxQb%2FlDnXMi7HpOOs8ucH75ZqJfv%2B4y0CoyCEOlvsbYipDvFkr4VInu3NJKlS6pfhqXeH6FEWfsiUDrjLfUKaBncycJz13C3X%2FVf7MzN7yOc4Ju8iiPbF2aHgkLsL30qIAcMwVyGjSoR%2FT21yjk9xRon5vJAHd3rSgArHFc5uBAqGyMwwWieshCdJYJKL%2Fyqkbtrv0QEzQpx9ckpKUzt14kpl38XUB4frz0ToIdXU%2B3pPQ34D0Xe6boBmhnXx2QAihyoduFROJzsbh3BF9ZM%2BBbSBA%2FpwRqzV9UZbwMK%2FPhsEGOqUBPTZ7Q8Zhd9zvGPofivnCNGofJiw5Byc5yDyBYpGNl%2FXOVqr1p2bdRedMnUE9eOu4zseX6%2F%2FONBW9AtKqvpN8He5vnaDTY8KyCsyeX9HT9nV%2FhpVln5bXKkKfbKf1T4mejgq77i7CLrT1J5xXQzjhFnWPPrvX6CVmZXa4DQqWbi8WfyYQuBYWKhhW3CMWa6HdLhBcJ%2BPAMLiSsHQTodnKLrbFmEX4&X-Amz-Signature=7afca713676ca390fb4024a5b1a4979bf3c9627dc1850f2791b529eba973e1d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
