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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTKWWGFI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDbWW0%2Bcu9wosm56hDN9AZJyIcETSfKzEemxQ2DtsCWHAIgFwEi%2BMZwVRBjVrOXdrUp%2FmCSPvvOgjfqi8wfxBbppjsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYESp%2BOhNjw0vUp%2FyrcA4XhzzlD7HnxWP6ssPQNuJpn1tiLRGmYkblyT0F7hHdHATKPJfTSktqmInRpBG2vgKuekbkqtRnHBFHYFhXcmPIaDZ8AHXQVrCZ%2BvYJgy4VwU5bMV70q1u%2BV%2FERayPck16BtaBphcZ7uljPB1al%2B5%2FVWmtYjGt8feAab2BGBbDPOsYx6qXGPxfWkHF%2Bu4v10m98sQJMRoagiiuJVDfGwM1in0CgXJYWbt25SUKqBjenVdh2HFQHDc%2B7EFkZ63iBMGn4CIBZcf7JSJ9wgRr6r3egpqjSSeBCuNGBXcz16OP8uNlsPxX1m1QzryWyoSqFUBivVUxMlRnWL%2FmP%2BehNydYfnMfCSIju%2BRXnBEqnFq6DLgBClhdxGXwVpwr84kopofvp8EGJO%2FZDeAuEDN6vegMlrAYy8s2qi9Fz93ab8swmrcvrmk9NwYDorckrmVDZvMhGLH5tCcNQREbivVN0z9O9hwoQwWz%2FYoAQ%2F4DmyxqLKUDBGB1CVPxtXK9zFFEZXwGAaPGX8ZtyFjA3i8bZjCPDIu8L%2BOPDPtHdV9XNs%2FFy9y0QXuVTIC0NTZsazdrZFLXqPFYP7ngceDxz57YaptbUg7avH01b9jxSjYhKFkUaw8Xn8uVyhpPUWypAtML3O88EGOqUBzNgPDaNezS5tvSbxbOl6uGaVKrrvuvizwkP%2FHxu12MwJ5nznEoMNRazKOo33anKVUNDOdSWTfSIDzUZQtg41KnGRL1cSN%2FQBqCqJIe0EGfGKmRsiYKx30ERxJKJrJwEh0FupX5%2BEMmsC4Crr%2FtwNDrZIMWZJ0CCAec0mkaV1pQLjO%2FmK16uqJgao2DGafiweDzDCqvA%2Fmy%2BWTUp14scsnHpWgkA7&X-Amz-Signature=bdefb1ca47a87a9938eaba45794e7fe6416c126375f8a7a86445ac8f1ccbe2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTKWWGFI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDbWW0%2Bcu9wosm56hDN9AZJyIcETSfKzEemxQ2DtsCWHAIgFwEi%2BMZwVRBjVrOXdrUp%2FmCSPvvOgjfqi8wfxBbppjsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYESp%2BOhNjw0vUp%2FyrcA4XhzzlD7HnxWP6ssPQNuJpn1tiLRGmYkblyT0F7hHdHATKPJfTSktqmInRpBG2vgKuekbkqtRnHBFHYFhXcmPIaDZ8AHXQVrCZ%2BvYJgy4VwU5bMV70q1u%2BV%2FERayPck16BtaBphcZ7uljPB1al%2B5%2FVWmtYjGt8feAab2BGBbDPOsYx6qXGPxfWkHF%2Bu4v10m98sQJMRoagiiuJVDfGwM1in0CgXJYWbt25SUKqBjenVdh2HFQHDc%2B7EFkZ63iBMGn4CIBZcf7JSJ9wgRr6r3egpqjSSeBCuNGBXcz16OP8uNlsPxX1m1QzryWyoSqFUBivVUxMlRnWL%2FmP%2BehNydYfnMfCSIju%2BRXnBEqnFq6DLgBClhdxGXwVpwr84kopofvp8EGJO%2FZDeAuEDN6vegMlrAYy8s2qi9Fz93ab8swmrcvrmk9NwYDorckrmVDZvMhGLH5tCcNQREbivVN0z9O9hwoQwWz%2FYoAQ%2F4DmyxqLKUDBGB1CVPxtXK9zFFEZXwGAaPGX8ZtyFjA3i8bZjCPDIu8L%2BOPDPtHdV9XNs%2FFy9y0QXuVTIC0NTZsazdrZFLXqPFYP7ngceDxz57YaptbUg7avH01b9jxSjYhKFkUaw8Xn8uVyhpPUWypAtML3O88EGOqUBzNgPDaNezS5tvSbxbOl6uGaVKrrvuvizwkP%2FHxu12MwJ5nznEoMNRazKOo33anKVUNDOdSWTfSIDzUZQtg41KnGRL1cSN%2FQBqCqJIe0EGfGKmRsiYKx30ERxJKJrJwEh0FupX5%2BEMmsC4Crr%2FtwNDrZIMWZJ0CCAec0mkaV1pQLjO%2FmK16uqJgao2DGafiweDzDCqvA%2Fmy%2BWTUp14scsnHpWgkA7&X-Amz-Signature=5e5e8eb08689ec32ea24c4b19b0456f1982c6957f7f2bbd6da67950bbc76334d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
