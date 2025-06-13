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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSFFD7SR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCCwleuxbuVS8Yr0v8Hzd%2FPjdSG1r7WSYEj1gaJPuEMhwIgCCWhYISIjcUaD3yAnHXosoMTl5vx8e446zmP4q5DgAQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDO14U9KfenFZqSPBVircA9uwcKMCargb96S4IGWcwrHt5CQSI4BovtQkBnaTg7EXQPRBWoOv7ZYwR2Wq3gixPtU%2B5tpaMvTr%2FHVSR%2F3z%2FV%2F42pd2NiWvl8uu9MLGcSS24qGpdaAv2jf4Qg9npTUPbsMKFbr8R58d%2FnBVyxAG%2FSxWg3W9R0iJgou%2FsUvrUXCDKu0PolKNMQv0C98M4D1PVSKggOBhgu8dPqpEvL8AF1yWH3BQrn2SjdxowXitHAq8J1%2BOv%2BRuSgYb%2BmUFXKEFXHfT8U7roLWrgcCqWXa9Gxbwtp%2BHU4bD0Yg44WSQxI6rXdO7VRsUVGxqE%2F0P4jijn7kTg7SERZsyR5ftISm%2FJdcsA7%2F0PArv2YgHFs4hnH5mwovSX3TkjphgVI%2FLni6FifgBffy945Gb0F5bUq%2BIaAHM0YtTgiRXnq1LpKDrUtN9uEZ6pTwvhv%2FInnUac23dOpSMKbhBRzJ0ixL3Br7QJabZMv2K8K8yAhR8%2BmKTAEe%2FXolIP7fir9qALfwWUpQeaYDqrEfGxDny%2BrM%2F%2BdEZ8k5SwO10DHRxKGwq1qgpXCDdvxc6BzBZAJLXmAnnr9%2BoVob9N1tn1yxR4GYr7iB1VBzjAg98RNPucDLqWtHAj9ank0zlJi%2B8LiB5uFg%2BMN2XscIGOqUBbgyhhbddqbdR8jLETu5ifH%2FQIlT9xWebwgbQaVQX9E8eVACuUCSC50tMCITw%2BrrQnHGWn2gAeoeBUklBn%2FP1CkFrayLT9PdcoOW%2BSOA%2FBITXfj2y0vqNxMszFkRgRN%2BmMRi0p6H722r%2BJB6iPAlHhRX0nOpWdZT2HUZfKHIB8yVmi5Onu2zInhegoda77FuKJ7pXhXUBO2e3oEwfB%2FNeA6ZDL8OG&X-Amz-Signature=d740be85089db5156d38d591833fe98aba7c2bf89a7745a60d67a113f66efdc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSFFD7SR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCCwleuxbuVS8Yr0v8Hzd%2FPjdSG1r7WSYEj1gaJPuEMhwIgCCWhYISIjcUaD3yAnHXosoMTl5vx8e446zmP4q5DgAQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDO14U9KfenFZqSPBVircA9uwcKMCargb96S4IGWcwrHt5CQSI4BovtQkBnaTg7EXQPRBWoOv7ZYwR2Wq3gixPtU%2B5tpaMvTr%2FHVSR%2F3z%2FV%2F42pd2NiWvl8uu9MLGcSS24qGpdaAv2jf4Qg9npTUPbsMKFbr8R58d%2FnBVyxAG%2FSxWg3W9R0iJgou%2FsUvrUXCDKu0PolKNMQv0C98M4D1PVSKggOBhgu8dPqpEvL8AF1yWH3BQrn2SjdxowXitHAq8J1%2BOv%2BRuSgYb%2BmUFXKEFXHfT8U7roLWrgcCqWXa9Gxbwtp%2BHU4bD0Yg44WSQxI6rXdO7VRsUVGxqE%2F0P4jijn7kTg7SERZsyR5ftISm%2FJdcsA7%2F0PArv2YgHFs4hnH5mwovSX3TkjphgVI%2FLni6FifgBffy945Gb0F5bUq%2BIaAHM0YtTgiRXnq1LpKDrUtN9uEZ6pTwvhv%2FInnUac23dOpSMKbhBRzJ0ixL3Br7QJabZMv2K8K8yAhR8%2BmKTAEe%2FXolIP7fir9qALfwWUpQeaYDqrEfGxDny%2BrM%2F%2BdEZ8k5SwO10DHRxKGwq1qgpXCDdvxc6BzBZAJLXmAnnr9%2BoVob9N1tn1yxR4GYr7iB1VBzjAg98RNPucDLqWtHAj9ank0zlJi%2B8LiB5uFg%2BMN2XscIGOqUBbgyhhbddqbdR8jLETu5ifH%2FQIlT9xWebwgbQaVQX9E8eVACuUCSC50tMCITw%2BrrQnHGWn2gAeoeBUklBn%2FP1CkFrayLT9PdcoOW%2BSOA%2FBITXfj2y0vqNxMszFkRgRN%2BmMRi0p6H722r%2BJB6iPAlHhRX0nOpWdZT2HUZfKHIB8yVmi5Onu2zInhegoda77FuKJ7pXhXUBO2e3oEwfB%2FNeA6ZDL8OG&X-Amz-Signature=7165d8a3192506077f9a0dbbe695a0c849fc022d607299d9036d9a6b3f4e0a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
