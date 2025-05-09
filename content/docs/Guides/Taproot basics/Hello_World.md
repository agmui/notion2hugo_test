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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CR7YORD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlJwINz656gXx6eDAZ2AYopIrEiiywRDxhrP7fLh7B1AiAFaAbGdQ539SBtu7Rb6IOMTgkwcYBVfJQCB8jZIv1cniqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhQpR%2BucZo4PtTC2YKtwDrUvVb%2BWGhT7H%2BAJlRIwUXY882DwPPUuALfcb9nCRwKwd%2Fu8rohzQgq8u1QFRhRoGtkSM4xJvWZiOXGYHgmpgx%2FP1Aaxf8MwMu4Cr8E3eU%2BIWRrFCUGTNYnjljHrEjeMD3Uu27PY9Fdf%2FofkXbE6UzHWROGE6v%2BFdQSPBZKXZ%2Fs4B%2Bz%2B37F3u80AGjYYJVsKylrg3zNhBO4dTda%2BkQcNrDYT1rMt2jRMeKNwzFR0ob6q9yiFG2EUoooOkIozLxQsicVpkVJ3I3AJsIbaxmvv%2BbiZS8LB3pOl9nh7PtT2fNQtd6EY%2B2ynkmvmxDWV00iLCIorlV%2FDYsxTcg5OYyzgINNbcMiLFcrRWGNbF6ptHzNC5rDpLQhMCQqG2UuJv9mIF2iTy3Z9shXVi2KyBk54rLG4UpO8nyEpYrwrfwJsn818A3A1HfC%2BB3W0LrkZTnXYQAMQ%2BzLpaw%2BOr9wjnhL4rlFu8XuISckzP%2BWLIMO5BuJWqBMFSWmOGJ66SShcbupzvvfJrDnWc%2FMXLhvXjzOTb%2F%2BfqAWR5IbbFWcrJt657xgUJIrvjYrEvxHTttkog%2FxI9JBg1P8pgFq9Iz8Y8CRPYahLNnaZC9t9Y7l2%2FJQQzwwsd%2BdzRqBn08p29ey4w%2F%2F31wAY6pgG%2B3AI7tsoOoFkirGNnzGfB68VJFfWkGY62PJQRbB%2BvUIWvR2Kwl0GryLMdBxE9fTnjr9g4nm2uCJ5cO%2BYVUybxRJPQR2V%2BV14Ehzta9ZDMmShEaJ0e%2FLIcis8cucEWZ1dTUDq94NM3dSWGND0b1KnYTIOIYt0IUIBUQzIrF%2BmPeFEGEI3e0BOlQR5fQzglxrHzyxLz%2FEc7X2D7KhQOawqKDorCweQc&X-Amz-Signature=f4cc41391785354208f181a6a301cf14fa2a9e0cf01164014cf435f57cd10492&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CR7YORD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlJwINz656gXx6eDAZ2AYopIrEiiywRDxhrP7fLh7B1AiAFaAbGdQ539SBtu7Rb6IOMTgkwcYBVfJQCB8jZIv1cniqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhQpR%2BucZo4PtTC2YKtwDrUvVb%2BWGhT7H%2BAJlRIwUXY882DwPPUuALfcb9nCRwKwd%2Fu8rohzQgq8u1QFRhRoGtkSM4xJvWZiOXGYHgmpgx%2FP1Aaxf8MwMu4Cr8E3eU%2BIWRrFCUGTNYnjljHrEjeMD3Uu27PY9Fdf%2FofkXbE6UzHWROGE6v%2BFdQSPBZKXZ%2Fs4B%2Bz%2B37F3u80AGjYYJVsKylrg3zNhBO4dTda%2BkQcNrDYT1rMt2jRMeKNwzFR0ob6q9yiFG2EUoooOkIozLxQsicVpkVJ3I3AJsIbaxmvv%2BbiZS8LB3pOl9nh7PtT2fNQtd6EY%2B2ynkmvmxDWV00iLCIorlV%2FDYsxTcg5OYyzgINNbcMiLFcrRWGNbF6ptHzNC5rDpLQhMCQqG2UuJv9mIF2iTy3Z9shXVi2KyBk54rLG4UpO8nyEpYrwrfwJsn818A3A1HfC%2BB3W0LrkZTnXYQAMQ%2BzLpaw%2BOr9wjnhL4rlFu8XuISckzP%2BWLIMO5BuJWqBMFSWmOGJ66SShcbupzvvfJrDnWc%2FMXLhvXjzOTb%2F%2BfqAWR5IbbFWcrJt657xgUJIrvjYrEvxHTttkog%2FxI9JBg1P8pgFq9Iz8Y8CRPYahLNnaZC9t9Y7l2%2FJQQzwwsd%2BdzRqBn08p29ey4w%2F%2F31wAY6pgG%2B3AI7tsoOoFkirGNnzGfB68VJFfWkGY62PJQRbB%2BvUIWvR2Kwl0GryLMdBxE9fTnjr9g4nm2uCJ5cO%2BYVUybxRJPQR2V%2BV14Ehzta9ZDMmShEaJ0e%2FLIcis8cucEWZ1dTUDq94NM3dSWGND0b1KnYTIOIYt0IUIBUQzIrF%2BmPeFEGEI3e0BOlQR5fQzglxrHzyxLz%2FEc7X2D7KhQOawqKDorCweQc&X-Amz-Signature=a41a34096dc14d0c18d83bf542cdcfd5588d6e81260d50f13f990ad63f139cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
