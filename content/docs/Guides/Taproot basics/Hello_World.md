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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ATMN6S%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCjTT5BjnstZSEmaK0xCRN7XOTy1VTYGF5c9uIeRFPAdAIgW993BaXyKwNjivJgKDI9w0ZN4rIBNyLULpx%2Fo2XCZlQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDB5d0kqxN3Ul4%2BCJHSrcA1YQyNaAes%2FbhtZ9FxfWafxPDQmkV00HMJyr8FYv0S8GaAsYQwLFE2LpCsD0KqlDWmfzdqdOmQ%2FHdNtYmJjr05W8CzfWoKBANmHSNzsEygSaSGdVj7W5PNL5YeEcrfRKZZt7wc7OQQOO1E2tdqS%2FAztZ7GC4R97zc8GtWpFE28OPkIAgIgvVFA%2F3pM1t1stSCWoWAw1UCVion4o6wDQY6h3GxzckHj8bzHW4xhyE0ywCW%2Fz3PjJMijjhkn0uX%2B540zhoYos9y8RqDPyBy2YtxZVAoHBjATCNqKrWbyvo5zotWZH3SWAvfio2wdluImXoJwqbah6L8gnda9yLObrVENAacMV2vMbZYTKtRLoKWqAFyFZ8mt3i%2FXhbzu4AJ4Hy%2FwFlZ4LvfXvzUqvUmWObCrc4NyvG3IygJ8oUOasckm1mrI6h066gTAFkE7fjIm2bXsNwKObyEwzOzSN2TOCHEeU2cU6we6yJ505khmzhNMpTQ3vttaDVZtQDGO6ywVtReu9Txs9G6tdj8y4RaTOmbW2ayR0xMRKeQgD5KBNsaMDiacxYKS9RBrDK%2BCUO2j77DoHB%2FaNz8c1wIJA7LHJx%2BCAtPUQGu%2F81U49FuL%2Fzn9tPftaYVw9RowW7cOMyMPm7674GOqUBWS%2Bd2NOfI2%2FT4qbbKbkpbuNYB2ZTMtWKWh18TtDQGcvjZXuhtmYBzK4G0OXsCJOamuN0qqSWe4%2BAyuKnayzcT%2BhtIbjnaNCz4%2F4GDn3pBu7c8VdB5C8GBb9BUvOA78egLOmDYzdwiYvbU6DJsY1fuhWSsmNytLx1pO5cVrBM8RUs4X20Bpc42ts5X0TQWfQiqG%2F6iHXXbAj%2Fgag6l1b2fJwOA2vs&X-Amz-Signature=f2d5b1553ddc3716e39e7bcc963f778795167a1c462c335822b3b3e852e3a6eb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ATMN6S%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCjTT5BjnstZSEmaK0xCRN7XOTy1VTYGF5c9uIeRFPAdAIgW993BaXyKwNjivJgKDI9w0ZN4rIBNyLULpx%2Fo2XCZlQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDB5d0kqxN3Ul4%2BCJHSrcA1YQyNaAes%2FbhtZ9FxfWafxPDQmkV00HMJyr8FYv0S8GaAsYQwLFE2LpCsD0KqlDWmfzdqdOmQ%2FHdNtYmJjr05W8CzfWoKBANmHSNzsEygSaSGdVj7W5PNL5YeEcrfRKZZt7wc7OQQOO1E2tdqS%2FAztZ7GC4R97zc8GtWpFE28OPkIAgIgvVFA%2F3pM1t1stSCWoWAw1UCVion4o6wDQY6h3GxzckHj8bzHW4xhyE0ywCW%2Fz3PjJMijjhkn0uX%2B540zhoYos9y8RqDPyBy2YtxZVAoHBjATCNqKrWbyvo5zotWZH3SWAvfio2wdluImXoJwqbah6L8gnda9yLObrVENAacMV2vMbZYTKtRLoKWqAFyFZ8mt3i%2FXhbzu4AJ4Hy%2FwFlZ4LvfXvzUqvUmWObCrc4NyvG3IygJ8oUOasckm1mrI6h066gTAFkE7fjIm2bXsNwKObyEwzOzSN2TOCHEeU2cU6we6yJ505khmzhNMpTQ3vttaDVZtQDGO6ywVtReu9Txs9G6tdj8y4RaTOmbW2ayR0xMRKeQgD5KBNsaMDiacxYKS9RBrDK%2BCUO2j77DoHB%2FaNz8c1wIJA7LHJx%2BCAtPUQGu%2F81U49FuL%2Fzn9tPftaYVw9RowW7cOMyMPm7674GOqUBWS%2Bd2NOfI2%2FT4qbbKbkpbuNYB2ZTMtWKWh18TtDQGcvjZXuhtmYBzK4G0OXsCJOamuN0qqSWe4%2BAyuKnayzcT%2BhtIbjnaNCz4%2F4GDn3pBu7c8VdB5C8GBb9BUvOA78egLOmDYzdwiYvbU6DJsY1fuhWSsmNytLx1pO5cVrBM8RUs4X20Bpc42ts5X0TQWfQiqG%2F6iHXXbAj%2Fgag6l1b2fJwOA2vs&X-Amz-Signature=1365a6fee6f209c1bbff5ac375fa3f9d04a624a19182a67d62f4d75c9cd4289c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
