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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPX4O6I%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BK6dR%2FCirZ758TgVinQg3Oro%2BINMu%2BrN1TFla%2B06BNAiA5m%2FWYmLO4tu9TtnPJNDf28dqHaMsd53V36uTqS0eVUSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMtRA8VclMflq2GLM9KtwDcdui00fD22ImZ4NVRzOxZCNOeZuXrUK%2BfEjlKTsM4Yjv2o%2B72kt42Dp1wdFYUcNQuJhSaxbJ9MKqUKumVb%2FVEMTCL2A7wDMk%2BQB1HorLHF0zKNHLey4I5RK2i7CJFIcqeHVsH0ThtY1cZQLjCzv%2FoH9mzJX%2Boh9YUzVdv51nbjiyiEGYzc9SvfirYNBekLsDdGoLaKc3fCmrBU1lhKvtVdxEU424eZpiJuN6WpyHtlb4YQiSGiSOPnOZd%2Frg80jh%2FMHjSkCe5c6ExCzvYsJ1JCoPDjH%2BfDb9ZKy2%2Fdi53HJXC3SfO%2BFBNwhfbUaluyzYEH%2F7PyOqzvItWH38cpnC4rmMy3lyTUzwi5mpUm1nmfxrZlrEawFQ4EzycWagUSlOC1%2BzMTHuJZ9BUlYWRrHxm3Rf80ltUFMtJbLkQhEzAsUah9b6ITheBfoNqkPGxua%2FMG1k3GtsmZCKRRkweFEe9AmY3ZMdi3s8KdEfYrJyXH0XIcz0rY03uFn8DPMKPX3pSDQeQ4L5H5Gz%2FELQomjrJJalcf7ZiMm4DLV1pzT4JpcVbzjrSrsxDDlgi%2FskIrhHq3PFjT5OVRxEc7HeDVb8YZzxIX4V0Wya19CZrYNT9ojM%2Baz2ltv2V1p3OT0wpKb5vwY6pgF3C8O8c9wKwTkrBUJMOjR1eji%2Fis0TdXZmhpwEU0O1fRS%2FlPeTcDPRoBjSLRnkYLgKOhBjBNq%2FRUG%2BqxjohkiN57g3AUNI5PQrqdNX9OydvJmGgt4VN0Ftz%2BoGr2XZ6eJbAgBTJdcoUGkDVGzdWYHbuSf432z3KI%2Br75T2D%2FLJnTPU04Ivr8IUxu4LHQ%2BqHcOGyBFWwt53lOws6QlNSSnER01ALpfi&X-Amz-Signature=dc7f2404d6c577511968ce4fdc9effb8d7061b86a90b704d5221f68f5a7802f3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPX4O6I%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BK6dR%2FCirZ758TgVinQg3Oro%2BINMu%2BrN1TFla%2B06BNAiA5m%2FWYmLO4tu9TtnPJNDf28dqHaMsd53V36uTqS0eVUSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMtRA8VclMflq2GLM9KtwDcdui00fD22ImZ4NVRzOxZCNOeZuXrUK%2BfEjlKTsM4Yjv2o%2B72kt42Dp1wdFYUcNQuJhSaxbJ9MKqUKumVb%2FVEMTCL2A7wDMk%2BQB1HorLHF0zKNHLey4I5RK2i7CJFIcqeHVsH0ThtY1cZQLjCzv%2FoH9mzJX%2Boh9YUzVdv51nbjiyiEGYzc9SvfirYNBekLsDdGoLaKc3fCmrBU1lhKvtVdxEU424eZpiJuN6WpyHtlb4YQiSGiSOPnOZd%2Frg80jh%2FMHjSkCe5c6ExCzvYsJ1JCoPDjH%2BfDb9ZKy2%2Fdi53HJXC3SfO%2BFBNwhfbUaluyzYEH%2F7PyOqzvItWH38cpnC4rmMy3lyTUzwi5mpUm1nmfxrZlrEawFQ4EzycWagUSlOC1%2BzMTHuJZ9BUlYWRrHxm3Rf80ltUFMtJbLkQhEzAsUah9b6ITheBfoNqkPGxua%2FMG1k3GtsmZCKRRkweFEe9AmY3ZMdi3s8KdEfYrJyXH0XIcz0rY03uFn8DPMKPX3pSDQeQ4L5H5Gz%2FELQomjrJJalcf7ZiMm4DLV1pzT4JpcVbzjrSrsxDDlgi%2FskIrhHq3PFjT5OVRxEc7HeDVb8YZzxIX4V0Wya19CZrYNT9ojM%2Baz2ltv2V1p3OT0wpKb5vwY6pgF3C8O8c9wKwTkrBUJMOjR1eji%2Fis0TdXZmhpwEU0O1fRS%2FlPeTcDPRoBjSLRnkYLgKOhBjBNq%2FRUG%2BqxjohkiN57g3AUNI5PQrqdNX9OydvJmGgt4VN0Ftz%2BoGr2XZ6eJbAgBTJdcoUGkDVGzdWYHbuSf432z3KI%2Br75T2D%2FLJnTPU04Ivr8IUxu4LHQ%2BqHcOGyBFWwt53lOws6QlNSSnER01ALpfi&X-Amz-Signature=fb5b6769d1b9a0d483c447b199e8eb83df8f76511619eb312788dd68e4c3268d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
