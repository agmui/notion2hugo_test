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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSS4XFCO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIH1E7PBErDS%2BJMiIYlOKZbnkUoZm5s2I95fUAwedDHN8AiBrREu%2F2d1eptE6L9P9SVglziy957rRcQP3E9kY6pb3XSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbfJTItw239%2BAwFVOKtwDaGV8xWfFvqBXAN5LgLdKkXE2JI%2F7vbYh2mc9zHmTw%2FNtPlH34xURb1DZQBqEvv70%2FD8gezjf2mjl2d7LUaSt78MDzCOdE1hY9t065ehuC1efxMo9VH%2BSQ1FtWipffuJu%2Be5HnnJU%2BCDF5jlry%2FfEaD6g6GBitBWM%2FwgsUZd1yuCmqP%2B0%2F0RoFHhALofFg3q2pMwvS1offrOtBDuf1rTwwlZm1ijLGd9Iqlx8689Ms7b7m7v3eJx4pj4cGZslxFeOBkwAJ0%2FBWXAAmfyB85TYxYsJYBtonOhf7y6becVrwqFWV0NJW39xoOtOd8mqE8IYV%2F9ViIBuJJB8py3J4ae%2BwbsL6e%2Fip0zHM94u6Slv46bu6svJonJM50a9M605NbsspFSPSZmsUrKnaVEKl6HM2P%2FIMUZfTmyM3b7QdTAZ5ceBYpy4MrJrnMNE5PvH4ActwVYhvO7HPjUSBzM6C4893Y%2FK0Pz3%2BlJSh6xcw0iThXxcIduCGZTBGdxXGM3Rxn4dXmVli8sF7%2B8Ebl3ITl%2Bp9oYG%2BrS4g4RZ1rVVXrHLrQ3NCMEgQpPPhtr5UunVNa9UhhBGK24EFPsz7m7wr9Gy8crhrAIq0QS5QMheRi7Jp0dJa25%2FsZs0lcg%2FFjMw5vnzvgY6pgHXc8%2F1vmbPs7AIoEQDKyf2gwzaWyw59bXQN0FZfHcR%2B5rbZCEvxg%2FNyFi4XWVFVMa%2BAg8EkMoPLheeYoIcN9zn%2BF%2FeaHmV9PdqO%2BLa3t%2F2REhR5V7Rx%2B2arywTbsFli1Z4B05TyuSRjPVA4HpuqKO5k9tt%2FuHhq8n1DniygBhZSvIzBSeGJaJVKIvJYFyF8KiDwl4SdJ96j7oP%2BzFR9XEmfv7jZOMb&X-Amz-Signature=443b0ff96b827ff54ff27d063e4fe689f95256ea8531914d86a9e82d6047d8ce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSS4XFCO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIH1E7PBErDS%2BJMiIYlOKZbnkUoZm5s2I95fUAwedDHN8AiBrREu%2F2d1eptE6L9P9SVglziy957rRcQP3E9kY6pb3XSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbfJTItw239%2BAwFVOKtwDaGV8xWfFvqBXAN5LgLdKkXE2JI%2F7vbYh2mc9zHmTw%2FNtPlH34xURb1DZQBqEvv70%2FD8gezjf2mjl2d7LUaSt78MDzCOdE1hY9t065ehuC1efxMo9VH%2BSQ1FtWipffuJu%2Be5HnnJU%2BCDF5jlry%2FfEaD6g6GBitBWM%2FwgsUZd1yuCmqP%2B0%2F0RoFHhALofFg3q2pMwvS1offrOtBDuf1rTwwlZm1ijLGd9Iqlx8689Ms7b7m7v3eJx4pj4cGZslxFeOBkwAJ0%2FBWXAAmfyB85TYxYsJYBtonOhf7y6becVrwqFWV0NJW39xoOtOd8mqE8IYV%2F9ViIBuJJB8py3J4ae%2BwbsL6e%2Fip0zHM94u6Slv46bu6svJonJM50a9M605NbsspFSPSZmsUrKnaVEKl6HM2P%2FIMUZfTmyM3b7QdTAZ5ceBYpy4MrJrnMNE5PvH4ActwVYhvO7HPjUSBzM6C4893Y%2FK0Pz3%2BlJSh6xcw0iThXxcIduCGZTBGdxXGM3Rxn4dXmVli8sF7%2B8Ebl3ITl%2Bp9oYG%2BrS4g4RZ1rVVXrHLrQ3NCMEgQpPPhtr5UunVNa9UhhBGK24EFPsz7m7wr9Gy8crhrAIq0QS5QMheRi7Jp0dJa25%2FsZs0lcg%2FFjMw5vnzvgY6pgHXc8%2F1vmbPs7AIoEQDKyf2gwzaWyw59bXQN0FZfHcR%2B5rbZCEvxg%2FNyFi4XWVFVMa%2BAg8EkMoPLheeYoIcN9zn%2BF%2FeaHmV9PdqO%2BLa3t%2F2REhR5V7Rx%2B2arywTbsFli1Z4B05TyuSRjPVA4HpuqKO5k9tt%2FuHhq8n1DniygBhZSvIzBSeGJaJVKIvJYFyF8KiDwl4SdJ96j7oP%2BzFR9XEmfv7jZOMb&X-Amz-Signature=39da843d92fad971177b96c0f776af1542a163e28ba13036e1ede2fe52846151&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
