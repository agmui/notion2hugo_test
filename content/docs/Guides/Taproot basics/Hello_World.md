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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FBBMO3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldw1uRbdbETWhRfn25Ui1yO6lDykBePau9X6L698ocQIgLQboqL8kvvQbohHASxLnXJLZcOhKy11pLAtSR7%2FxCVwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGw4EILukIUC5WymircA8Bg3SXFh81d%2FxxjFhiJaupGOqIIqPaHM18ST88x6kvKhfuQutpgjIAk0lj3YEG8ja%2FRHzQ6M7GqPSX9poMQ1JWyuQVnQvY8VW8Gdfx7W4jD8hJoRHVpkOTk6BvDdvYAtSYZdLn2l6VHjSTuYJcAlM9uvj6X%2BYylvoFDLHdNjvkP178ktvDNp1t3nr0P0VVD5KBNpIQOE7ubJS9M2rvnscf4TjN5GFINYQkgBVFgRaSE6E8ulgdHIIowPTiGxW6rxr5QJ98VbFgs3V%2FUv%2FS3Q7dFGEeBFAJTCsltWol9ivJTkKVaqxK1rTQ3em7hjdGeR5V%2FpGBad5rKzwwCnB85WbEsjGKFSVmpHHOoYCGVumfKlS2lXz4Y1rJn8BcX54ue%2FrJQzkIXH%2FVIFpc0jYMG5wuqu8JDna9CXytw2OM1IV86dwNZ%2FW6%2B1ej9kvN2%2FPW3eKsVx2JsS4mRe56Z4zUh%2FqYq%2BegYuZnniaJRcYdmTRcX%2BVTbaVlQA%2BVdAiwxe57QAwRd134Jsy6xcQ5nPM93e0SQLOnQBb%2BSrtlzAIDSoUBUo3OM7aWbPz32hXAeOO4ru7Kg0QPtd7bBIU%2B8fMbGb0HElK0M%2Furs33PKvR3LEJqSicVXHt61JvhZqJtBMN7V0sIGOqUBK4rEaCesTL4lMO%2Bgwc38dldXfOMpBBa8qz07VVJzjbEsZnHSdE4zAFO1fbZbD2Dnc07dQF%2Fml412uY2%2FyXR6KPkhhAcIbma%2BRyNkGP%2BpyFA43mMYRMgPIX8Zt8%2FNQXvBgCmsj3GePu0PVLvwaytOJ8WoO6VrQ%2FOTIGHaMqwURst%2BD4Hv6HLx6X0on8RWWjP4C1BiFgq2HPjbYGiA7cvjC8xvGwrh&X-Amz-Signature=280f321a3e988da8af09b42c0695923749ded279ec4cab2807b3b03aae9e6806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FBBMO3%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldw1uRbdbETWhRfn25Ui1yO6lDykBePau9X6L698ocQIgLQboqL8kvvQbohHASxLnXJLZcOhKy11pLAtSR7%2FxCVwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGw4EILukIUC5WymircA8Bg3SXFh81d%2FxxjFhiJaupGOqIIqPaHM18ST88x6kvKhfuQutpgjIAk0lj3YEG8ja%2FRHzQ6M7GqPSX9poMQ1JWyuQVnQvY8VW8Gdfx7W4jD8hJoRHVpkOTk6BvDdvYAtSYZdLn2l6VHjSTuYJcAlM9uvj6X%2BYylvoFDLHdNjvkP178ktvDNp1t3nr0P0VVD5KBNpIQOE7ubJS9M2rvnscf4TjN5GFINYQkgBVFgRaSE6E8ulgdHIIowPTiGxW6rxr5QJ98VbFgs3V%2FUv%2FS3Q7dFGEeBFAJTCsltWol9ivJTkKVaqxK1rTQ3em7hjdGeR5V%2FpGBad5rKzwwCnB85WbEsjGKFSVmpHHOoYCGVumfKlS2lXz4Y1rJn8BcX54ue%2FrJQzkIXH%2FVIFpc0jYMG5wuqu8JDna9CXytw2OM1IV86dwNZ%2FW6%2B1ej9kvN2%2FPW3eKsVx2JsS4mRe56Z4zUh%2FqYq%2BegYuZnniaJRcYdmTRcX%2BVTbaVlQA%2BVdAiwxe57QAwRd134Jsy6xcQ5nPM93e0SQLOnQBb%2BSrtlzAIDSoUBUo3OM7aWbPz32hXAeOO4ru7Kg0QPtd7bBIU%2B8fMbGb0HElK0M%2Furs33PKvR3LEJqSicVXHt61JvhZqJtBMN7V0sIGOqUBK4rEaCesTL4lMO%2Bgwc38dldXfOMpBBa8qz07VVJzjbEsZnHSdE4zAFO1fbZbD2Dnc07dQF%2Fml412uY2%2FyXR6KPkhhAcIbma%2BRyNkGP%2BpyFA43mMYRMgPIX8Zt8%2FNQXvBgCmsj3GePu0PVLvwaytOJ8WoO6VrQ%2FOTIGHaMqwURst%2BD4Hv6HLx6X0on8RWWjP4C1BiFgq2HPjbYGiA7cvjC8xvGwrh&X-Amz-Signature=68ab6a8f669e84f095c7bc9f34ded1f6a001635ceb02ef93523b71f4d6cc4f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
