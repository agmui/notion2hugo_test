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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTFF7NG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs%2FDFhI2o7Oc4FFkStUuliD9ru24%2BiCebN8J2wCZ27UAiEA6m0SpiffYFJjqrYqgi7q64nYzVeBk0mr%2F576OK6SJ0kqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI069%2F1Nu55rVPBxKSrcA1%2BZDagTQxds%2FUgFgb6OGzKaE%2BiSJxiCoDnYYhZqI%2Bq%2BJPKkKXWF4oPOrF8AIWiwh5dFgcQWm%2FxQsmZNBBZNRky5z37oHvKRi%2FFO8Kq%2FWUalfdKhTZSmoUibok%2BTKYzaoaaXg8cQ3lbDTRVHQ%2BK%2F%2FWrtpqFf%2Frd1nzblBXmuXh8RagpZpWmmSGwV4c0yT5S8uVdFYsV213Hndgee3CDDc0vnOXWhhtyd0OydNeISoUFtq6eV4CQ7QWtYrOinVinuj1fXPDugnCEmttbS5VeChSG6%2BFZlY0ELw8g7InlK0sIsSn4tISERyeWYz%2BfXGMENakdk%2FTB2Igslk7tpnkervjBQR2tlQWby1BsYZEucU%2F1uxhHeZJHfs1U1fwpfr80m%2BYQMPdCcjudhtXlfylzuS%2BrGQPa%2Fr4deutnS%2F%2Baezuud5FYiu2cZqLRFkGLSJf8otPVm%2FY07Iw3Vfbe7NADRaZ9Loi2sbN69PqE%2B5TSGrNmWUa2PEgkqWW4p%2BVQuvW3IBpsCuKk8AR8kyQWspO8u7md0m6RZI8Ca0l8UrRXCW0JfNl2Kfwe6NNKD91RcAnmD7WvEx8T9IGIXjxo5Pz7lOFV5h0Kb3Y5j2F2ZrQNAthRwkGhkJnvY3dJ4cKylMPD838EGOqUB8oWjHzUCqTceLPFzDklDgtU0MT5ZTzlyyqtG%2FfkM4BvlASmJnV31CxIko5fSa1r%2F5CdX8LYRRTCtOO50G9fA6O8clb8Fm769R4sfkBfzaasubGUCjT9pwvRx1uIkomrOkqAqwfmr%2Fyi5HumqOLflU8gHqFGwprYSoiP%2FIS9Owlu4S%2FkXY%2BINjClO%2BxA066dzJoGsQsl3X1ALlF%2FQsy5cfZA8ASLz&X-Amz-Signature=29c8ee4afd66f0299833c5fe83db147924aa8db1549d9d206ac4b3ef02fa370c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTFF7NG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs%2FDFhI2o7Oc4FFkStUuliD9ru24%2BiCebN8J2wCZ27UAiEA6m0SpiffYFJjqrYqgi7q64nYzVeBk0mr%2F576OK6SJ0kqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI069%2F1Nu55rVPBxKSrcA1%2BZDagTQxds%2FUgFgb6OGzKaE%2BiSJxiCoDnYYhZqI%2Bq%2BJPKkKXWF4oPOrF8AIWiwh5dFgcQWm%2FxQsmZNBBZNRky5z37oHvKRi%2FFO8Kq%2FWUalfdKhTZSmoUibok%2BTKYzaoaaXg8cQ3lbDTRVHQ%2BK%2F%2FWrtpqFf%2Frd1nzblBXmuXh8RagpZpWmmSGwV4c0yT5S8uVdFYsV213Hndgee3CDDc0vnOXWhhtyd0OydNeISoUFtq6eV4CQ7QWtYrOinVinuj1fXPDugnCEmttbS5VeChSG6%2BFZlY0ELw8g7InlK0sIsSn4tISERyeWYz%2BfXGMENakdk%2FTB2Igslk7tpnkervjBQR2tlQWby1BsYZEucU%2F1uxhHeZJHfs1U1fwpfr80m%2BYQMPdCcjudhtXlfylzuS%2BrGQPa%2Fr4deutnS%2F%2Baezuud5FYiu2cZqLRFkGLSJf8otPVm%2FY07Iw3Vfbe7NADRaZ9Loi2sbN69PqE%2B5TSGrNmWUa2PEgkqWW4p%2BVQuvW3IBpsCuKk8AR8kyQWspO8u7md0m6RZI8Ca0l8UrRXCW0JfNl2Kfwe6NNKD91RcAnmD7WvEx8T9IGIXjxo5Pz7lOFV5h0Kb3Y5j2F2ZrQNAthRwkGhkJnvY3dJ4cKylMPD838EGOqUB8oWjHzUCqTceLPFzDklDgtU0MT5ZTzlyyqtG%2FfkM4BvlASmJnV31CxIko5fSa1r%2F5CdX8LYRRTCtOO50G9fA6O8clb8Fm769R4sfkBfzaasubGUCjT9pwvRx1uIkomrOkqAqwfmr%2Fyi5HumqOLflU8gHqFGwprYSoiP%2FIS9Owlu4S%2FkXY%2BINjClO%2BxA066dzJoGsQsl3X1ALlF%2FQsy5cfZA8ASLz&X-Amz-Signature=2c3a3eb1ef74e752af10d9c7883f4b0aeb3fc5aebf380eeb52ca2bd0f742166d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
