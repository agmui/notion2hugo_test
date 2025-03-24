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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KDWDUDE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPsyOzPH8BYcVP7BALET13bbigPDVUBNGpoRoSeT%2FwjAiEA06%2F%2BaBSPkI%2B1HgjaCOz51TuWmWh3LUdHZgWwGnqFdLgqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCS3KDlJys5Az%2BY5dyrcA60HOlIs6o5VQG%2FM%2FVzE0WkdMgkv677m2JzXpVKal6Ie%2FaLsGy8P%2BmlnRKf2tdHHzhhF0oJJScKcusUv6xG6JqWIL%2F68U10mvHw08DB%2BmXMI7R%2BEzB1NG7pZktRqxr7NDRST%2FYo8SFyogxjcoCwLobPGHPb4kB%2Bd4tgBLvsOnvK2L12vGZ9qkrcab8Hk4gCfAxLjUEqmCth8WuNOV8h2wBRjLt%2FqCxhIsAWDzoNlnn0cJheu2kUH4FN55qthO4VqheoFTzy2RS%2BBevw%2Fng8mobJAWy9X1DCn%2BJ45SGSwc1iRiImJRottcWZ%2FExU%2FlvzwF5yWNoK3TJDcMrU%2BKYm3j3%2Bg8TlYRy5H8Xs%2Bc%2F%2Bo3SXpH9vVqqZJ61fDynRS4GQ2TYy4KacbVaK%2BrhI6JfwSvF7bHLL0oUhkEZdTibw0Y7TEJz0Tve6UasWzcH8Euw5lJfkVx8qE%2F4uUI2BBSYrwoARfbpHefMI%2Bs1bX9btxdsk6xHln41qVsWegl9M1W3v5pYLtEog2IW68X6N%2FB0eE5ABuxo4Q%2Bk3x3bpyZavLmKG7sWMqLfPfxITUtrI8sCqRHIz8aDzS84Sc6qHLo6ue4JxX9m1wEzXKkJ2DVZzKdbC449Zzrkqw61%2BHjhDjMICwgr8GOqUBtSUdZmjIcBVWgjgjHZd8TvLK50DtASCl3LaLCV7kWCrtDlLBy9OmLJe2maRYyQuv7SgMWbBtgQ4neZKZS7YwGK5X3mEER8O2FaFqQWiRfFg1m6mp1YBOfYHYcTkpQcQfP3AsvnSn5hnEybWnYIdjD7Rnj%2B9DFPnJSwkZ%2B7VRzS%2F%2BNIRtqbO2sAnqAFX%2BHF2eX0Ha1VCQglp2KWCSPhP4nyvmsMyJ&X-Amz-Signature=7753f83de0a7cf0d152ceeb733fd27d918539c5ac66c517eb7b5b55e109eed0a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KDWDUDE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPsyOzPH8BYcVP7BALET13bbigPDVUBNGpoRoSeT%2FwjAiEA06%2F%2BaBSPkI%2B1HgjaCOz51TuWmWh3LUdHZgWwGnqFdLgqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCS3KDlJys5Az%2BY5dyrcA60HOlIs6o5VQG%2FM%2FVzE0WkdMgkv677m2JzXpVKal6Ie%2FaLsGy8P%2BmlnRKf2tdHHzhhF0oJJScKcusUv6xG6JqWIL%2F68U10mvHw08DB%2BmXMI7R%2BEzB1NG7pZktRqxr7NDRST%2FYo8SFyogxjcoCwLobPGHPb4kB%2Bd4tgBLvsOnvK2L12vGZ9qkrcab8Hk4gCfAxLjUEqmCth8WuNOV8h2wBRjLt%2FqCxhIsAWDzoNlnn0cJheu2kUH4FN55qthO4VqheoFTzy2RS%2BBevw%2Fng8mobJAWy9X1DCn%2BJ45SGSwc1iRiImJRottcWZ%2FExU%2FlvzwF5yWNoK3TJDcMrU%2BKYm3j3%2Bg8TlYRy5H8Xs%2Bc%2F%2Bo3SXpH9vVqqZJ61fDynRS4GQ2TYy4KacbVaK%2BrhI6JfwSvF7bHLL0oUhkEZdTibw0Y7TEJz0Tve6UasWzcH8Euw5lJfkVx8qE%2F4uUI2BBSYrwoARfbpHefMI%2Bs1bX9btxdsk6xHln41qVsWegl9M1W3v5pYLtEog2IW68X6N%2FB0eE5ABuxo4Q%2Bk3x3bpyZavLmKG7sWMqLfPfxITUtrI8sCqRHIz8aDzS84Sc6qHLo6ue4JxX9m1wEzXKkJ2DVZzKdbC449Zzrkqw61%2BHjhDjMICwgr8GOqUBtSUdZmjIcBVWgjgjHZd8TvLK50DtASCl3LaLCV7kWCrtDlLBy9OmLJe2maRYyQuv7SgMWbBtgQ4neZKZS7YwGK5X3mEER8O2FaFqQWiRfFg1m6mp1YBOfYHYcTkpQcQfP3AsvnSn5hnEybWnYIdjD7Rnj%2B9DFPnJSwkZ%2B7VRzS%2F%2BNIRtqbO2sAnqAFX%2BHF2eX0Ha1VCQglp2KWCSPhP4nyvmsMyJ&X-Amz-Signature=8bd583d800de723a932c3778dc9e580184209ac142339d1008112ec63b3e75f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
