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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673IP5HWL%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCj%2F%2F%2FPleR4DbrjiQ6oML4n7iV1DVTiWs3GFrdpkocf7wIgCDOWV%2FaOOX3PV%2BGXD0xTDpxDJwoYMGnqFLvHJwjztd4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEs4BQHmHmvCOajXKircAyu7cr0JHH7ZGCNHovDHN0tez3mmWTRvD9m%2FGkKKzrFNZDoQwzAJ5RYraPuvGc2U0PG5ZQcByfk2OtMCaydJRFGz3ctylq0DnHwLYulb%2FA1NHNzPooYNQUGRyfpDjKcJENm%2FFvVzzgl1hHGPLs0RzUqthao4LSCePLsF%2FPjl9YHpVLrrxBtm7139%2BUwCvFGG1mI%2ByCHeQ6jEpmS4WuRivSLh7CQuf9Dsso4pGXsszvdA%2BDwgTaM3MuDwqFx75J7JbQh1OT6fDA8VbxVjhTCdqRZAnyA9oOiLtnZAKD9KfcXgFsbqx%2BzY%2BOTSmpE2jAyZmTIJs75CbzYY5usGpkxyMUuv%2FIByrlvH2UmTOIoBpk326gDBIJllIQ4wnvUflucmE9A9%2BRmIUjjGEvuQ6FGrrfCr8tIcbhh35lLcwbc4TOGOc1Sq12gVB3mO5xSq2CrI7A8ez1ty%2FIbf7HMD0MpEMllCD%2FnWkYfQqweEb%2BG8ElpJKctDw757TCPeaD6EjDQG5Yik0U7wv7aQ02AcksuF46NUl2wm0328wX%2Bb8IwyOQf42qFOfkix6bGiww326q6I9dLmDp52OIgZ%2Fby1hYF65cn7rUb0f1HrecRJ%2FkUB9yc2zeHkdB5GWxd3%2BHF9MO%2Ba4cAGOqUB8hYlATIGnTj9gz0LYx6BpxEKGETKz5oBGJSXyko1ect6jStE6UcopaXD63xvzNRi6e%2Bh91jwTW1DynTGHhc6zdN9fguh5LnYpnJBaBXDbzW7P2OD8Dy8F1uvT0WIyUAPYMH8lyjL7031qn823DUH3SE5Se3ifrEZMqCd9hAkkoEOWUKzNV9ZmOL%2F7rZlFiooFu3G%2BMOjivY1uLrN8%2FDbvsrjJNht&X-Amz-Signature=afbaff7b6982045c0d0a6d96e6e4ef2c58667fb06fe03671ff1262201f60b916&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673IP5HWL%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCj%2F%2F%2FPleR4DbrjiQ6oML4n7iV1DVTiWs3GFrdpkocf7wIgCDOWV%2FaOOX3PV%2BGXD0xTDpxDJwoYMGnqFLvHJwjztd4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEs4BQHmHmvCOajXKircAyu7cr0JHH7ZGCNHovDHN0tez3mmWTRvD9m%2FGkKKzrFNZDoQwzAJ5RYraPuvGc2U0PG5ZQcByfk2OtMCaydJRFGz3ctylq0DnHwLYulb%2FA1NHNzPooYNQUGRyfpDjKcJENm%2FFvVzzgl1hHGPLs0RzUqthao4LSCePLsF%2FPjl9YHpVLrrxBtm7139%2BUwCvFGG1mI%2ByCHeQ6jEpmS4WuRivSLh7CQuf9Dsso4pGXsszvdA%2BDwgTaM3MuDwqFx75J7JbQh1OT6fDA8VbxVjhTCdqRZAnyA9oOiLtnZAKD9KfcXgFsbqx%2BzY%2BOTSmpE2jAyZmTIJs75CbzYY5usGpkxyMUuv%2FIByrlvH2UmTOIoBpk326gDBIJllIQ4wnvUflucmE9A9%2BRmIUjjGEvuQ6FGrrfCr8tIcbhh35lLcwbc4TOGOc1Sq12gVB3mO5xSq2CrI7A8ez1ty%2FIbf7HMD0MpEMllCD%2FnWkYfQqweEb%2BG8ElpJKctDw757TCPeaD6EjDQG5Yik0U7wv7aQ02AcksuF46NUl2wm0328wX%2Bb8IwyOQf42qFOfkix6bGiww326q6I9dLmDp52OIgZ%2Fby1hYF65cn7rUb0f1HrecRJ%2FkUB9yc2zeHkdB5GWxd3%2BHF9MO%2Ba4cAGOqUB8hYlATIGnTj9gz0LYx6BpxEKGETKz5oBGJSXyko1ect6jStE6UcopaXD63xvzNRi6e%2Bh91jwTW1DynTGHhc6zdN9fguh5LnYpnJBaBXDbzW7P2OD8Dy8F1uvT0WIyUAPYMH8lyjL7031qn823DUH3SE5Se3ifrEZMqCd9hAkkoEOWUKzNV9ZmOL%2F7rZlFiooFu3G%2BMOjivY1uLrN8%2FDbvsrjJNht&X-Amz-Signature=0a8404851b5d9fb8ce18537e65795b04f5ecf8c2b70825c51fdd1d927a9f84eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
