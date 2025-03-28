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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LLMPF36%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqe5fbkP84r%2F8EM5%2FcHR%2B9sd6xGW97OGHWFpvowbIQWgIgYpBKcRhbkxCAm1UgE42ii%2FJHjR%2FMgITcsuDveoaUhsAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDs%2B7RkxWiYEtzIPISrcAxEUTPc%2FObrI98rHJIvu%2BaFnRh61pzD%2BrDuG5Elj7DJM5tD3Vv%2FHoINXH597PVO0Sri67eZgz%2FDMYKLr1lnE%2BA%2FtxF%2FA1fFL1nCtjHj9QEYhFeYdXTeAVYXReUgK1aNAFl7Kx%2FfIgRRT9TbntiioBC1v1yPPASzw2KaOWCmwui2qVY%2BaVHfgXwIQgO6MSW45lG2ShEqHpMPCaBbXRHQg0Rvp3FzUv6ehuUQaABPnOy2XNoCYDMN5RygLbzr2qAJ8Xnr%2FiqKR6BVKeuXwuUC8zxnbBsSHlGtUnNeqKyr92seP69coIUu2%2B9ML7uoqzI78GZcZ%2FWnmLvpVrKpdZCxz0vDut8K6QlYPiBykhupWaU9uPFd0EyZYckSkOOqPlvj5VjXcYcARKNtnTTmvUzGP553d%2BQd5ucAZxlVDBkoHg4XariBjpGZ0gM%2F1c57hmA%2Fjgpxo%2BI6ma78D%2BmP%2B8u0CSljv%2BQT%2FffUj%2BuV1w4cwy8Zk22vSWDd2DJD2FLtN5R8gwaPBYLwnoqtGzEotS3vE6QIiWkRbJEZV0MkXPunLZjLxIO1h8RUIkK%2FLLb%2B28oGqYNHwrveeTc24ULKhuEomay2xlrb7bQQILNiGc%2F9f5p%2BK%2FcDOsnLfT0yWXqf1MKj4mb8GOqUB4w1rcZNP4smTenmmiqfkGuU5xeoFFexma9hrAbWqMwLyQo8dzwgYbvV9JMQ82Z6DHq9SLAM5fIHOhHlm9%2B%2BQBF7vSv2Lrj9RYdobBNeLxWk2YElxzzR8mw0wD2i1znUsBp3Xn%2FppH%2FRYrno8jThmzcKKQT4aDXjtMe1uQtkSuj8jZK%2Fz2ClQD%2BNFiFsjK3xNMc1WPtGFHqsaEUDKStIvlSpXXuEU&X-Amz-Signature=d9091560acd4ef1a5d8984564944c2f50feeb8165f36a2dcd2a3a48d2fa0d986&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LLMPF36%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqe5fbkP84r%2F8EM5%2FcHR%2B9sd6xGW97OGHWFpvowbIQWgIgYpBKcRhbkxCAm1UgE42ii%2FJHjR%2FMgITcsuDveoaUhsAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDs%2B7RkxWiYEtzIPISrcAxEUTPc%2FObrI98rHJIvu%2BaFnRh61pzD%2BrDuG5Elj7DJM5tD3Vv%2FHoINXH597PVO0Sri67eZgz%2FDMYKLr1lnE%2BA%2FtxF%2FA1fFL1nCtjHj9QEYhFeYdXTeAVYXReUgK1aNAFl7Kx%2FfIgRRT9TbntiioBC1v1yPPASzw2KaOWCmwui2qVY%2BaVHfgXwIQgO6MSW45lG2ShEqHpMPCaBbXRHQg0Rvp3FzUv6ehuUQaABPnOy2XNoCYDMN5RygLbzr2qAJ8Xnr%2FiqKR6BVKeuXwuUC8zxnbBsSHlGtUnNeqKyr92seP69coIUu2%2B9ML7uoqzI78GZcZ%2FWnmLvpVrKpdZCxz0vDut8K6QlYPiBykhupWaU9uPFd0EyZYckSkOOqPlvj5VjXcYcARKNtnTTmvUzGP553d%2BQd5ucAZxlVDBkoHg4XariBjpGZ0gM%2F1c57hmA%2Fjgpxo%2BI6ma78D%2BmP%2B8u0CSljv%2BQT%2FffUj%2BuV1w4cwy8Zk22vSWDd2DJD2FLtN5R8gwaPBYLwnoqtGzEotS3vE6QIiWkRbJEZV0MkXPunLZjLxIO1h8RUIkK%2FLLb%2B28oGqYNHwrveeTc24ULKhuEomay2xlrb7bQQILNiGc%2F9f5p%2BK%2FcDOsnLfT0yWXqf1MKj4mb8GOqUB4w1rcZNP4smTenmmiqfkGuU5xeoFFexma9hrAbWqMwLyQo8dzwgYbvV9JMQ82Z6DHq9SLAM5fIHOhHlm9%2B%2BQBF7vSv2Lrj9RYdobBNeLxWk2YElxzzR8mw0wD2i1znUsBp3Xn%2FppH%2FRYrno8jThmzcKKQT4aDXjtMe1uQtkSuj8jZK%2Fz2ClQD%2BNFiFsjK3xNMc1WPtGFHqsaEUDKStIvlSpXXuEU&X-Amz-Signature=6817df0f97840c26969888b9752daf089de05a34ebaffef3f2e1a74e626ae793&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
