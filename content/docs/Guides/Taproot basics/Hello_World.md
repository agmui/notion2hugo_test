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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IKQSN7S%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEQm39jAhsavQTjoSbU4fPwKp3KaL%2B4hSxjtiKKSZIKYAiEAgwPj9DSrwuZOx4zIfl%2BboXhClxcslFD6BAhB6kjQgCIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOPFwkm%2B1Nt22J4uSrcA%2BWIUcVs8WY0pHUkH1AzmyC8tgUF%2BdbYLoSrcfaf4v8ulsZJwmEGUAMmvXfiLVtCLo0pKeFEEPMjjZVOWbTUoQom4c50x8ZL3BXC6uLJR7gxbx4cyv79a6Kc6Zv%2Fr1xV02wYKkFrk%2BTuuXI7oJojF1sqnBb%2Fnb8425RkS7k7qH8wLCbCQmnn%2FP0G4EvhfbNNjf%2BgupmqkXdgVWuDBytZlx1VbAv%2FaJ%2FuxIF4fIeqYFV92iBICN1hZhAfwdqI3GXkqEqkgN0ixcwi5KM3yibF%2F9ImYCFOrxTE6uz7BKyWgNyyJdrBSLznGMqoP2UY%2FJJRgKDcEghtUVX4Rq2CcaLGuFTc7%2Fg8m0xe57JtfhBqK3dFoAV8eaSEzWi3zYOwCxqEUvr5g6H%2Bi78NQLlwTp5EFSsvq%2FNvh3%2F%2B5fnaQfri7cdxa0ScA9W9fWypkVrWHqP7HPJ%2F9b7lV6ruBA9khen%2FpLXVSLBwDXMOGZZ1CMFanDpa0QL1ssatgZ1FZDsOG0JArVTTY8ZN2qVj3xBAx8fak4B2Ppdi4C7GKcMkf%2FU6V%2Fyiy2AP9T8FP4HV7KaGmxfPCnlXZvVQv8rEcPwFcUFnu3mv09GFlTzmKmCZJB891jQYNCzVVzKu26PtNaejMMaVjL4GOqUBzVWrXMiOPVkrS1L4lRCXTnzZlQxT4Wy3HD9or4Ok%2BqSDYbv%2FzA5n92hS7xIrJC9LC5vKXVt2qduaDx09yxlbtiykG6LsUOuCUBX9SzAq0zZ4dk16DBH10b9HTFpJKwa08KecrvyZvyFK2se20ok3mAtXVjcEpq8h31xK0xObZaLIKwTJkrihB6ablcDZwpmHnmwp%2FZUmhp70OPXEHhdFLwk4Y0aR&X-Amz-Signature=0b74487da71f20e04ef7b64ba10782d714c51edbee4db710aa6f7f28efba0b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IKQSN7S%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEQm39jAhsavQTjoSbU4fPwKp3KaL%2B4hSxjtiKKSZIKYAiEAgwPj9DSrwuZOx4zIfl%2BboXhClxcslFD6BAhB6kjQgCIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOPFwkm%2B1Nt22J4uSrcA%2BWIUcVs8WY0pHUkH1AzmyC8tgUF%2BdbYLoSrcfaf4v8ulsZJwmEGUAMmvXfiLVtCLo0pKeFEEPMjjZVOWbTUoQom4c50x8ZL3BXC6uLJR7gxbx4cyv79a6Kc6Zv%2Fr1xV02wYKkFrk%2BTuuXI7oJojF1sqnBb%2Fnb8425RkS7k7qH8wLCbCQmnn%2FP0G4EvhfbNNjf%2BgupmqkXdgVWuDBytZlx1VbAv%2FaJ%2FuxIF4fIeqYFV92iBICN1hZhAfwdqI3GXkqEqkgN0ixcwi5KM3yibF%2F9ImYCFOrxTE6uz7BKyWgNyyJdrBSLznGMqoP2UY%2FJJRgKDcEghtUVX4Rq2CcaLGuFTc7%2Fg8m0xe57JtfhBqK3dFoAV8eaSEzWi3zYOwCxqEUvr5g6H%2Bi78NQLlwTp5EFSsvq%2FNvh3%2F%2B5fnaQfri7cdxa0ScA9W9fWypkVrWHqP7HPJ%2F9b7lV6ruBA9khen%2FpLXVSLBwDXMOGZZ1CMFanDpa0QL1ssatgZ1FZDsOG0JArVTTY8ZN2qVj3xBAx8fak4B2Ppdi4C7GKcMkf%2FU6V%2Fyiy2AP9T8FP4HV7KaGmxfPCnlXZvVQv8rEcPwFcUFnu3mv09GFlTzmKmCZJB891jQYNCzVVzKu26PtNaejMMaVjL4GOqUBzVWrXMiOPVkrS1L4lRCXTnzZlQxT4Wy3HD9or4Ok%2BqSDYbv%2FzA5n92hS7xIrJC9LC5vKXVt2qduaDx09yxlbtiykG6LsUOuCUBX9SzAq0zZ4dk16DBH10b9HTFpJKwa08KecrvyZvyFK2se20ok3mAtXVjcEpq8h31xK0xObZaLIKwTJkrihB6ablcDZwpmHnmwp%2FZUmhp70OPXEHhdFLwk4Y0aR&X-Amz-Signature=e3ff0a7528d2fc2b7f97034d7cbe746577ca6d3a5dca8c96773ee08241e90de0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
