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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UERFQE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCnlO9pRtJ4IQqdodIsGmssF3CG%2FkbV%2Bo6e%2BHcIeXv7LgIgCdoCibPxBZXpnlS78nB%2Fs%2F%2FAo1swuufFF%2F0f%2F9lLhOYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJyQi19lSkwsDzewFSrcA%2Bqnk%2FefbieNBbtiAAbKI6FOuBxqEllHyJdnZBPqSPUQ%2B0qWNTmfkRmvVeWtiUJ46pbNwiI0Mf2CPUWAKJalYvMfApcFwypfAYEuCQ5ecGExseoUfZ1ljFrGGvH31%2BlO69%2F4TdiQUZ2UqycEUPyCEwh4cYA1B8uOZPXxo06k6FEeEXkNCeO2Qv31nIvGRo%2BMS8LwDPQwInggOLlv1uKUvvtsOdFpzGRHv9G4Enl2kMf6zB1Id9X8XVavmWXcD99sKGgAbTRPbMmZgEhdLLiUGTbRYMwv1WgyjVF9GWkTPFrwD%2Fm5d%2FauwGj6eoozv6dy1scQ61G5GHSynlapCXVXoUTeFuacisL%2FdcDKHJhbOqAe8boW3xdn1T03lbDSUm9dmenAwKqmwxzOUXAt8DkfpUfx%2BI3Yja9AJxsguEm6sUEwaN3%2B5%2BsqZ3aKEmeRu5qrVcRyAVubkDiNI4QftwfvluOUjn%2BRmDqdnAprkwKOLdYzpmf%2BLjPqKPYTqXBjbxf4E0sTudWsm1uLTVea3%2B0%2B90Y9B0%2B3%2F8L8ueNeiTmE6MwCRRHoUDoCivmiOW5fjIR2L3NAQxaShMSqPNJVZWn7HFuI4jmuh7Q6B886D%2Bi7W8bTPi762DT%2BdiiyKnmJMN6dz8EGOqUBl1h0%2F8QDE70ixvRLF7fmfeudMe1so97ha1KXC0AvzKS%2BA8R5N7GJCyG1imBi2OusDX6y7u7Xz3j1S7dQ4c7R5vgGiqJ4VU2XHxeQcfwst4syUO%2BUT3nu5McrMpO4iEuRH9qz1bkU8pPmtxpDC%2B6HHjup9UD2ocvLu5ymtJrtOS%2FhjY2INC0BfwT78DFcPzUKZf3oVzAr0zRk%2B9Dw56evOaxctYRo&X-Amz-Signature=a39d2e282c8b1095f37e96ad673377a79645716e70ac6d6ebb48f8ef13e980ad&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UERFQE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCnlO9pRtJ4IQqdodIsGmssF3CG%2FkbV%2Bo6e%2BHcIeXv7LgIgCdoCibPxBZXpnlS78nB%2Fs%2F%2FAo1swuufFF%2F0f%2F9lLhOYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJyQi19lSkwsDzewFSrcA%2Bqnk%2FefbieNBbtiAAbKI6FOuBxqEllHyJdnZBPqSPUQ%2B0qWNTmfkRmvVeWtiUJ46pbNwiI0Mf2CPUWAKJalYvMfApcFwypfAYEuCQ5ecGExseoUfZ1ljFrGGvH31%2BlO69%2F4TdiQUZ2UqycEUPyCEwh4cYA1B8uOZPXxo06k6FEeEXkNCeO2Qv31nIvGRo%2BMS8LwDPQwInggOLlv1uKUvvtsOdFpzGRHv9G4Enl2kMf6zB1Id9X8XVavmWXcD99sKGgAbTRPbMmZgEhdLLiUGTbRYMwv1WgyjVF9GWkTPFrwD%2Fm5d%2FauwGj6eoozv6dy1scQ61G5GHSynlapCXVXoUTeFuacisL%2FdcDKHJhbOqAe8boW3xdn1T03lbDSUm9dmenAwKqmwxzOUXAt8DkfpUfx%2BI3Yja9AJxsguEm6sUEwaN3%2B5%2BsqZ3aKEmeRu5qrVcRyAVubkDiNI4QftwfvluOUjn%2BRmDqdnAprkwKOLdYzpmf%2BLjPqKPYTqXBjbxf4E0sTudWsm1uLTVea3%2B0%2B90Y9B0%2B3%2F8L8ueNeiTmE6MwCRRHoUDoCivmiOW5fjIR2L3NAQxaShMSqPNJVZWn7HFuI4jmuh7Q6B886D%2Bi7W8bTPi762DT%2BdiiyKnmJMN6dz8EGOqUBl1h0%2F8QDE70ixvRLF7fmfeudMe1so97ha1KXC0AvzKS%2BA8R5N7GJCyG1imBi2OusDX6y7u7Xz3j1S7dQ4c7R5vgGiqJ4VU2XHxeQcfwst4syUO%2BUT3nu5McrMpO4iEuRH9qz1bkU8pPmtxpDC%2B6HHjup9UD2ocvLu5ymtJrtOS%2FhjY2INC0BfwT78DFcPzUKZf3oVzAr0zRk%2B9Dw56evOaxctYRo&X-Amz-Signature=70ab3ee3df4d4de5e7cb1e0a2d81303f34ac243afc24ddd070e3f85eadc89ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
