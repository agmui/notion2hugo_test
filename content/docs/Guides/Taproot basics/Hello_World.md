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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIYVPDHU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCI%2FXYS6hBSgVL083%2B03QAhbVKSQvvgpCKAQchEcc9%2BCgIgCT%2FChgJUpqDUlnGIKBDsVxh5Olut4NPWer1yBMidnXUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFEIKGKrRH0KBrj7kCrcA5t1WtaJUkLsObUwYNhtZXYgd%2ByrAvHopM4wzT6SPzBFM%2BK51MFeBXqO5I2zV58mbTjQOrCrCawrk%2BDd0WWp%2FJpH91i1ZfsSTTpZc09OsMuT5uNbbn5WdsoxzALi2HdS66SlAurmfIerQkMY1YlkQxDlDOD%2B2%2BQ5oozBHcQnUHjZYIhCFJ7NsKtfSnpSEroGNEFuQxVobbwUljg6orAtadAdTdS0oBnCuBztlhTIcZ%2FEvNJDgm%2FwOHMR2uZsHZ4Jhq2dmyDR%2F85MOQHjJhB%2Buz43HouWO2EVQ7ThQlR%2BqCCzRDWD29a6P%2F6K7pr4iuZ%2FfofQOx9CTMwQFpCa6AnqUKWdWZ09ptcC%2Fv4WJR%2BKkXqnSycvN8s3sd4LWm9CMhllG8eFx2DDknD57nhW14e60FJh4VK33ERIiZJQx6gMaq3mgAN8%2FW3a9nP4EI3y00BO8mxjp74RYKno1P6N%2FzpuxRNQWJLUDd1HbdB9yOZlNUCUunz6vkwcfHhC6rLp8ORU3uzWgtNJbHB9tyoZrL3AwKfub1IOeY12sFwFrf8qxp4hrG8zO4O0lWSaLmNuwOuh92hp4POYXorUNM8H3PBFglvQpZIUcH5Iz9YmDWWxHSYcYYxAOY0pDPlhSEyeMIvLy8QGOqUB3hPSLJjldKddZ6e%2BeKSr%2FnFfrCdrwB4vOnIweuh4TDbE2qOYjjlv5%2FAmAdky9Aeo0QRW0OcKkNlgzbAwRfGiwclv0TviBC4%2FSBLEhlLe%2BalwfMpMUgKd6bN8%2BLotZi7Kj655eIl2u%2BvraTrYDyItsAyQAb%2FZx3G3HV5P4h8iN9qasxXiBRLwpLacKLOdoJX4pKlVwpCTZ1II2zNEvLGiyuVbxxQD&X-Amz-Signature=5f3bdf45a28b18a7d9d5c9592eaa3f4ae4c2b7efefe25ea2668b7cef46d7fedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIYVPDHU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCI%2FXYS6hBSgVL083%2B03QAhbVKSQvvgpCKAQchEcc9%2BCgIgCT%2FChgJUpqDUlnGIKBDsVxh5Olut4NPWer1yBMidnXUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFEIKGKrRH0KBrj7kCrcA5t1WtaJUkLsObUwYNhtZXYgd%2ByrAvHopM4wzT6SPzBFM%2BK51MFeBXqO5I2zV58mbTjQOrCrCawrk%2BDd0WWp%2FJpH91i1ZfsSTTpZc09OsMuT5uNbbn5WdsoxzALi2HdS66SlAurmfIerQkMY1YlkQxDlDOD%2B2%2BQ5oozBHcQnUHjZYIhCFJ7NsKtfSnpSEroGNEFuQxVobbwUljg6orAtadAdTdS0oBnCuBztlhTIcZ%2FEvNJDgm%2FwOHMR2uZsHZ4Jhq2dmyDR%2F85MOQHjJhB%2Buz43HouWO2EVQ7ThQlR%2BqCCzRDWD29a6P%2F6K7pr4iuZ%2FfofQOx9CTMwQFpCa6AnqUKWdWZ09ptcC%2Fv4WJR%2BKkXqnSycvN8s3sd4LWm9CMhllG8eFx2DDknD57nhW14e60FJh4VK33ERIiZJQx6gMaq3mgAN8%2FW3a9nP4EI3y00BO8mxjp74RYKno1P6N%2FzpuxRNQWJLUDd1HbdB9yOZlNUCUunz6vkwcfHhC6rLp8ORU3uzWgtNJbHB9tyoZrL3AwKfub1IOeY12sFwFrf8qxp4hrG8zO4O0lWSaLmNuwOuh92hp4POYXorUNM8H3PBFglvQpZIUcH5Iz9YmDWWxHSYcYYxAOY0pDPlhSEyeMIvLy8QGOqUB3hPSLJjldKddZ6e%2BeKSr%2FnFfrCdrwB4vOnIweuh4TDbE2qOYjjlv5%2FAmAdky9Aeo0QRW0OcKkNlgzbAwRfGiwclv0TviBC4%2FSBLEhlLe%2BalwfMpMUgKd6bN8%2BLotZi7Kj655eIl2u%2BvraTrYDyItsAyQAb%2FZx3G3HV5P4h8iN9qasxXiBRLwpLacKLOdoJX4pKlVwpCTZ1II2zNEvLGiyuVbxxQD&X-Amz-Signature=2efa645c1f28bceecb3e17d211465e4da761443769ef9526582ffba228daae25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
