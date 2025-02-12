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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQUNVKK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdtaOrZydOMqYmScAZWVwnFjzMXuj8jRZU%2F1xoKadl%2BwIgMY4flcFiZJe0QE6t7rtE6%2BA0IQolLJMxgH%2BmIOx8SsUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLWPCMFV2K%2BVC2QVCrcA4Iy%2FYyIddnEUBXxmT5dZPAcOOkkIgG%2Fvjx1wyMZgleD7IfvmwQRfAinpdry9zwq5meuZQfkivOo%2BE9E9idi6cPF2NUPuY1RhUR0hWpEp%2BNpNYHyplXCxI9jSSv9AzoUELJcObVikLpBJluN2b2a9g8xha%2BQfnv85mLoYdwyQBKsQs8utQ9wruy%2FUTo7A4yjT%2FjxTSFq2gXrz6IDSIadszFBWKu%2F46DaHJHzCpXaZk1cq73jhm0xLvGvC5uGEp%2Fg6Ge4xwSMGQ8A0Tn80H8NfrtXDVSDIgEa9cnnsrxnOYVndt5cYxtYdukjSRN9G1sRLDwTico7yOlituzY%2Fblka8SOkb4RRhYsxX%2FkUB7l8y1o%2BQakK0BksVOyGyK2q7GPoLVZoSTw7V%2FUsVx0wtt8upWnqlM%2BTBWSV%2F20xiEFtwyOcx1KIW7CDTN9oU0mYRK5m1MEwJzxPNwirnjjQU0C0hvO7XogkxfI6aETY0wCc1K3TaJYqzt41CQerfJMhOFrKJ4gZ%2BQP2gvnmxX5hitIqiE0LBCWC%2BNjWurbbNvSFEWUB%2FEwRNFqj5T6JGiXacx14zCMAXrWjp34IGgS45j2nbt6iCYXvUkuINnepcDo9%2BPyp%2FIthYq75heCXa%2FCMIXsr70GOqUBi6aeC6OYYrkX47488dk6%2Ffz855EHdXfk%2BmFHczIPVnZN8MEouLLloqvwTymObtfFQSOxadrsA%2FKtUnHaAyuKKWTmovSoEXO%2FnrIRtsOL7c9DTgeJYAdEqstPqWS%2BOTfVh5TY7Nw%2BvWV%2BbXz9T9MjxRN%2BVTSYpgcPZFVgEXw1lVORHQ0O8vbBdJ%2FopaCmJOtiH1rLbyA7JxJQfyPqg5bK0INcT1Ea&X-Amz-Signature=4dcb932d9f4a3aba2065a724021eba6edc8e3796b11ac5f7347b0c1ac67be40f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQUNVKK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdtaOrZydOMqYmScAZWVwnFjzMXuj8jRZU%2F1xoKadl%2BwIgMY4flcFiZJe0QE6t7rtE6%2BA0IQolLJMxgH%2BmIOx8SsUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLWPCMFV2K%2BVC2QVCrcA4Iy%2FYyIddnEUBXxmT5dZPAcOOkkIgG%2Fvjx1wyMZgleD7IfvmwQRfAinpdry9zwq5meuZQfkivOo%2BE9E9idi6cPF2NUPuY1RhUR0hWpEp%2BNpNYHyplXCxI9jSSv9AzoUELJcObVikLpBJluN2b2a9g8xha%2BQfnv85mLoYdwyQBKsQs8utQ9wruy%2FUTo7A4yjT%2FjxTSFq2gXrz6IDSIadszFBWKu%2F46DaHJHzCpXaZk1cq73jhm0xLvGvC5uGEp%2Fg6Ge4xwSMGQ8A0Tn80H8NfrtXDVSDIgEa9cnnsrxnOYVndt5cYxtYdukjSRN9G1sRLDwTico7yOlituzY%2Fblka8SOkb4RRhYsxX%2FkUB7l8y1o%2BQakK0BksVOyGyK2q7GPoLVZoSTw7V%2FUsVx0wtt8upWnqlM%2BTBWSV%2F20xiEFtwyOcx1KIW7CDTN9oU0mYRK5m1MEwJzxPNwirnjjQU0C0hvO7XogkxfI6aETY0wCc1K3TaJYqzt41CQerfJMhOFrKJ4gZ%2BQP2gvnmxX5hitIqiE0LBCWC%2BNjWurbbNvSFEWUB%2FEwRNFqj5T6JGiXacx14zCMAXrWjp34IGgS45j2nbt6iCYXvUkuINnepcDo9%2BPyp%2FIthYq75heCXa%2FCMIXsr70GOqUBi6aeC6OYYrkX47488dk6%2Ffz855EHdXfk%2BmFHczIPVnZN8MEouLLloqvwTymObtfFQSOxadrsA%2FKtUnHaAyuKKWTmovSoEXO%2FnrIRtsOL7c9DTgeJYAdEqstPqWS%2BOTfVh5TY7Nw%2BvWV%2BbXz9T9MjxRN%2BVTSYpgcPZFVgEXw1lVORHQ0O8vbBdJ%2FopaCmJOtiH1rLbyA7JxJQfyPqg5bK0INcT1Ea&X-Amz-Signature=572555a7949776551accc913ff7edb1e3a59b02d2d257676a106cc98ecead3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
