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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77PE4M6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCX85IUZxm%2BeCRaBVq0AiI4NxfjaE70iCqqvV2rcOQGFgIhAPLege9IdogdvYAp5Wfy8zNnbt4ADOfC9SisEXEEAbJQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEc7i4OFqsRePn0wIq3AM0ztS8ytgtzBKAABY4YsaFh7d5PtsRBP1liHErKGq0kOc6y1i3xBQWxyjh2iCnMUDmrXbrNetxrGEEdqnSyhKlsLrOg%2FKtKeUK20zA50yAzLeoRk23pk000L%2Bu6xIImloWQxpoBkkcKGEfdYKk8hgN%2FqGHF%2BMyf7h7RvUksMxq4E8CQ7pJAn29gQTzFeUn9p7kKOKpq5qWPudkK%2BYTg%2B7GJ34saYxOJTAdpJzHGx7KOsMXojUTYKaVLpgCzASL3qh7fK2TfDODto4YQ3JyCIwsY54GiU2ArwEMs8C%2B%2BelYkQXKSCM2licvXAOl4hgw0HnbcZRgVqN5w%2BKRnh1P6llX3vfc9xR%2F00zTXBsTKUfK%2BL4zTObYrvyScvUSJhyFZ6Y63qKnriepO74OlvHKq8Pog2vc9JSwkeXELhNpAo7oFSjKL1aq1Ei6TJTR9TuaEEA%2FMz%2BVdM8sH6Pvk20Q4JCdSw85DSmIgdzMTMztCD5yBmlh4qArH2%2FuKs0eXlPZZPW4m4Gx2Gu6YOXETugOTgkmRrsKbAZhZXiAg362qltE7ic%2B%2B9PhIVoVYLcfUzaypePB3dsFzbgUvsmwKM94kNVm2VLS6kqfLa9fGFWBpH9j59FbWCKRI5KylLVCvzC9rdXEBjqkAebNsXG52vwMkdp89rvpXLUSyNwx%2Bffc%2FU3izN0WprQN0dbz9lJmGr3I1%2FlQgNVr9BTfWERHAP%2F604CWyQ1WcW%2B%2BZGeLzJ7KooJ1v%2BhjCwivRgaU%2FB%2BGD3QWKxAOPsT2Ocbw8psgezqAIDrNHCRfWf80Xvog2VpppmW7vp3QowVsr%2BOu1hPmjPxXj%2BHVi0mFYL8k72xbmpksVQO7kVFlDhBbvrgn&X-Amz-Signature=b7cb5a3741e48e21c1a5e16d5db68f38412bd354373ec0bc2634e258bdcb5192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77PE4M6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCX85IUZxm%2BeCRaBVq0AiI4NxfjaE70iCqqvV2rcOQGFgIhAPLege9IdogdvYAp5Wfy8zNnbt4ADOfC9SisEXEEAbJQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEc7i4OFqsRePn0wIq3AM0ztS8ytgtzBKAABY4YsaFh7d5PtsRBP1liHErKGq0kOc6y1i3xBQWxyjh2iCnMUDmrXbrNetxrGEEdqnSyhKlsLrOg%2FKtKeUK20zA50yAzLeoRk23pk000L%2Bu6xIImloWQxpoBkkcKGEfdYKk8hgN%2FqGHF%2BMyf7h7RvUksMxq4E8CQ7pJAn29gQTzFeUn9p7kKOKpq5qWPudkK%2BYTg%2B7GJ34saYxOJTAdpJzHGx7KOsMXojUTYKaVLpgCzASL3qh7fK2TfDODto4YQ3JyCIwsY54GiU2ArwEMs8C%2B%2BelYkQXKSCM2licvXAOl4hgw0HnbcZRgVqN5w%2BKRnh1P6llX3vfc9xR%2F00zTXBsTKUfK%2BL4zTObYrvyScvUSJhyFZ6Y63qKnriepO74OlvHKq8Pog2vc9JSwkeXELhNpAo7oFSjKL1aq1Ei6TJTR9TuaEEA%2FMz%2BVdM8sH6Pvk20Q4JCdSw85DSmIgdzMTMztCD5yBmlh4qArH2%2FuKs0eXlPZZPW4m4Gx2Gu6YOXETugOTgkmRrsKbAZhZXiAg362qltE7ic%2B%2B9PhIVoVYLcfUzaypePB3dsFzbgUvsmwKM94kNVm2VLS6kqfLa9fGFWBpH9j59FbWCKRI5KylLVCvzC9rdXEBjqkAebNsXG52vwMkdp89rvpXLUSyNwx%2Bffc%2FU3izN0WprQN0dbz9lJmGr3I1%2FlQgNVr9BTfWERHAP%2F604CWyQ1WcW%2B%2BZGeLzJ7KooJ1v%2BhjCwivRgaU%2FB%2BGD3QWKxAOPsT2Ocbw8psgezqAIDrNHCRfWf80Xvog2VpppmW7vp3QowVsr%2BOu1hPmjPxXj%2BHVi0mFYL8k72xbmpksVQO7kVFlDhBbvrgn&X-Amz-Signature=86a26bfd7f67636eb2fb349777babe6577be3dc8e3994b4cc0ed5814646f050d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
