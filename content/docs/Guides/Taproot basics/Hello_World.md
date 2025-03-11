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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YS5GXI2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDbiFjoc%2B42%2BJ%2Fv6HOct75t1i2eWe4UknHj5ifp5TfHkQIgPKVA8XZCZrEUQKCGrSi9BiWufJSksxUhC9bhXtDReJ8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzOfEsfmILaZ90WtSrcA%2BGhr%2Ba8hWFnts%2F3Cxn%2Fzo4wddvqczmfrxw881B%2BQdNUoE9oDKxel%2BTsrUFIaJSpQE1xyTWKqW%2FQanQywrpOKV5pn6M2Qw7NO1CYfJXYDORvF%2FhdYE57K9DQ0mWUSFw8ytc9oAreNPkv6azuqdtmfQLtWbPSmSoqVOe2UYIHqMdWwEVuKV8QcZLpzdEF4Y7N2W6jrFQ62wjHpAJSCKH7qtxN6MluCAcZ%2B%2F7lBJJnDn%2BuN1pQD5Z438cCvcxBUbnfV48BV24083AA%2FRgFWNbvZE5BsmbPYGXGTLF7ZJ%2BYjNoos3VHT8r4aldBOncNjvZn9KqjJc2792SrxHOabd339RBDHBhyeAhmpHc1Te7Lq2DWqtDCc1TNE%2BVcaGpyxlM0fFtLqcdbcWm%2FS8lVqmrHLwSRDDhOE1Ou3ZpxtZuaXp9rLXvVmzfjUNa3YBegrazpwJL4WOM144DlH6DtQoyrUXiX%2FWuF5TdS%2FIjW0HXtipmo53HcNJxsVUVL87DIcmr9sqgG1NiW14TeJkx%2FPnty8c4NBn504W2ppTqR6doGvmPmnmzqCcB2r4spflNuHF6yI7%2FYdjFjPbA51Jo0IJ6BYhMPbEHr8m6TtBT1henTgKKX9ArYSTGb%2Bh7SDP5qMIaRwr4GOqUBzSHgtazDcs4QvhKZODMpPJeIoLFtRGjKp%2BXWMAJHQ5iTvYe4xultxxAIP1fst%2B7cSDLF%2BLdevnucUJpUj8z2pQoDXZI%2FhRB7NsRtoCzuIAR5o77XtQa9mSgTtGIjGc6BSdCYWI07z5k0G0nJ%2BsYHitRYx9N2Ngg1jbWDVJR8MaMdA0kuUG8ImOCjgK2ehYLhx8DzCJ5w57h8F97okoTPluRlHOtr&X-Amz-Signature=648d017dcedfcab41608bbbbc49bb163f7c96b57f4b0219dc00628c4bf387320&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YS5GXI2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDbiFjoc%2B42%2BJ%2Fv6HOct75t1i2eWe4UknHj5ifp5TfHkQIgPKVA8XZCZrEUQKCGrSi9BiWufJSksxUhC9bhXtDReJ8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzOfEsfmILaZ90WtSrcA%2BGhr%2Ba8hWFnts%2F3Cxn%2Fzo4wddvqczmfrxw881B%2BQdNUoE9oDKxel%2BTsrUFIaJSpQE1xyTWKqW%2FQanQywrpOKV5pn6M2Qw7NO1CYfJXYDORvF%2FhdYE57K9DQ0mWUSFw8ytc9oAreNPkv6azuqdtmfQLtWbPSmSoqVOe2UYIHqMdWwEVuKV8QcZLpzdEF4Y7N2W6jrFQ62wjHpAJSCKH7qtxN6MluCAcZ%2B%2F7lBJJnDn%2BuN1pQD5Z438cCvcxBUbnfV48BV24083AA%2FRgFWNbvZE5BsmbPYGXGTLF7ZJ%2BYjNoos3VHT8r4aldBOncNjvZn9KqjJc2792SrxHOabd339RBDHBhyeAhmpHc1Te7Lq2DWqtDCc1TNE%2BVcaGpyxlM0fFtLqcdbcWm%2FS8lVqmrHLwSRDDhOE1Ou3ZpxtZuaXp9rLXvVmzfjUNa3YBegrazpwJL4WOM144DlH6DtQoyrUXiX%2FWuF5TdS%2FIjW0HXtipmo53HcNJxsVUVL87DIcmr9sqgG1NiW14TeJkx%2FPnty8c4NBn504W2ppTqR6doGvmPmnmzqCcB2r4spflNuHF6yI7%2FYdjFjPbA51Jo0IJ6BYhMPbEHr8m6TtBT1henTgKKX9ArYSTGb%2Bh7SDP5qMIaRwr4GOqUBzSHgtazDcs4QvhKZODMpPJeIoLFtRGjKp%2BXWMAJHQ5iTvYe4xultxxAIP1fst%2B7cSDLF%2BLdevnucUJpUj8z2pQoDXZI%2FhRB7NsRtoCzuIAR5o77XtQa9mSgTtGIjGc6BSdCYWI07z5k0G0nJ%2BsYHitRYx9N2Ngg1jbWDVJR8MaMdA0kuUG8ImOCjgK2ehYLhx8DzCJ5w57h8F97okoTPluRlHOtr&X-Amz-Signature=c10b147e67215d949dbd7f8f797aee1ae90d28f19fabaa24e143e3f8cc4443d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
