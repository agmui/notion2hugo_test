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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZKBQAK%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpMl4Mq9ycYzSLo4Es0GAVqHCG9eVnjS9WWr7NbQqXrAIgdjgHK%2Bm69YbmpeeirPCz7Ru90g0w8phAXEqUYExEA2YqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPh6R1X92qoI1%2BPOHSrcA9N1JuBPHt5RGh0eCJ%2FuXxV24JAGF0H7VRAJbVbim5yL0V%2B1sbgYchdP77%2BRRWyl%2Bt%2FcTL5UdxqHblkEJaCmqQVGnhLCG6QWQp4RTRZLigSM9drTIxqQ1mIaB%2B7gzzCeuklikIQGJAyrEdhjWdZJcqx%2BXi%2F42nSJSDxHExTM87Tx8jgCGTOncRLPIKsNkdaYcrhqW3uaOnJl4m8Zz7cahSTppmq1r1pRLcZ631f1cr98UDL5A3s2qe22Ytrao%2FgO4Ri7vy7EqRVELj5s%2FAb7%2FzrWbRWqHgPtsdy%2BQmsqobmvj6rBI%2BkvxLz3kJ%2BIjHT8RGCASutGhcK1lUF8LTj0zkZCE1abU3jU%2BopGzsrqTYoA9fSVeW6VJtYx7ZZzY12D5UAYiUYqWvNcUwF5OQc573y4uCwBO99S7JXok3JLm44N1Bg1i9cIOMqzZ%2Fr%2FvvqUefbohahdsuUiG%2FgmnS8f36F3yEESJ03M5zMcac9nvl7NwR654Ga6dWHEr85A1fVvUudVmZ8FhPzhjbG4Efq%2FCecGP7PEhwcuuAUIs8Euw3xaWlOsOzxjEnKFwMw6mpaQyIaPDBOS%2FLEL%2FBhkmJT%2F8i9aOfnJ60HfbyZ7q3%2Ff1pnZckU%2BN8zTF%2F01YM6JMP2dm8IGOqUBd%2BZGQwkHu3FW%2BZ6PJiyrgzEx7v%2BOQrv8ngcOMyvd1jtDngakUzSp6x6bbV471x90yeDw2JKpHz0gQh%2FxVYUEbvT%2FcqQilU4cNy%2FsdohrYRRth8nIJcFAy9hccHxOB3JydkI2MT79Fb9x2gzR8BVdAhl58CUzFcIrvhtd5QemJLsIlwUWfW%2FLCpEREqJiIrxaTzznjnUIUUf5wWoDZlTcLV%2FY3OZT&X-Amz-Signature=8680152acc4fe449e88133e4436ead018d426dab88ce73cd8e509e8771982184&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZKBQAK%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpMl4Mq9ycYzSLo4Es0GAVqHCG9eVnjS9WWr7NbQqXrAIgdjgHK%2Bm69YbmpeeirPCz7Ru90g0w8phAXEqUYExEA2YqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPh6R1X92qoI1%2BPOHSrcA9N1JuBPHt5RGh0eCJ%2FuXxV24JAGF0H7VRAJbVbim5yL0V%2B1sbgYchdP77%2BRRWyl%2Bt%2FcTL5UdxqHblkEJaCmqQVGnhLCG6QWQp4RTRZLigSM9drTIxqQ1mIaB%2B7gzzCeuklikIQGJAyrEdhjWdZJcqx%2BXi%2F42nSJSDxHExTM87Tx8jgCGTOncRLPIKsNkdaYcrhqW3uaOnJl4m8Zz7cahSTppmq1r1pRLcZ631f1cr98UDL5A3s2qe22Ytrao%2FgO4Ri7vy7EqRVELj5s%2FAb7%2FzrWbRWqHgPtsdy%2BQmsqobmvj6rBI%2BkvxLz3kJ%2BIjHT8RGCASutGhcK1lUF8LTj0zkZCE1abU3jU%2BopGzsrqTYoA9fSVeW6VJtYx7ZZzY12D5UAYiUYqWvNcUwF5OQc573y4uCwBO99S7JXok3JLm44N1Bg1i9cIOMqzZ%2Fr%2FvvqUefbohahdsuUiG%2FgmnS8f36F3yEESJ03M5zMcac9nvl7NwR654Ga6dWHEr85A1fVvUudVmZ8FhPzhjbG4Efq%2FCecGP7PEhwcuuAUIs8Euw3xaWlOsOzxjEnKFwMw6mpaQyIaPDBOS%2FLEL%2FBhkmJT%2F8i9aOfnJ60HfbyZ7q3%2Ff1pnZckU%2BN8zTF%2F01YM6JMP2dm8IGOqUBd%2BZGQwkHu3FW%2BZ6PJiyrgzEx7v%2BOQrv8ngcOMyvd1jtDngakUzSp6x6bbV471x90yeDw2JKpHz0gQh%2FxVYUEbvT%2FcqQilU4cNy%2FsdohrYRRth8nIJcFAy9hccHxOB3JydkI2MT79Fb9x2gzR8BVdAhl58CUzFcIrvhtd5QemJLsIlwUWfW%2FLCpEREqJiIrxaTzznjnUIUUf5wWoDZlTcLV%2FY3OZT&X-Amz-Signature=5dd100222b6ece997936c74ed9d137dea75767d34f9d45f0ebf5ec912f093577&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
