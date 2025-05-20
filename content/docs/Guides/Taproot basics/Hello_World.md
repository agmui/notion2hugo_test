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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZJ7AKW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeOuCirpqchSPxlQ0bmQQ8ZF0efzHDnDVoyYquY%2FHN%2BgIgHTE%2Fj%2BUIwcHn0AXvXei4mR5SpbxU0kPo72x0EG%2BtEioqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIegsB0MH3dZ9PDx6SrcAy3KpF%2FliefXIdkvyw0HZGvbb%2BpM2qwG3wfRbuLb8OP72WoTvg35nrnSaKYVAY495pw1MD8yGcgzDPG6nR91SdLYBAB%2BIHU%2FZHXnPiS7N9dimMdYjqIo9pBwKIrj%2FN2RSP3ukz%2BgXR7rOf0WNayFl9K1qbJ%2Fn3CfbxFkyS9CYPNaYBYaiYmhM%2Bjc2Bp9gT2t5rxmR1%2FUg776ibneiHSYQxDDpxU9UhZgXoB6L8RpoOeAJ0Xynjb5rGLsesoXN%2BhLaxuNeBGzloLDgWJrktYnB5xv%2FPa6nVXvO12N9Jm61EnWRC6acXijfdaqFbKomh78GaNg%2BuMAacLPc9%2FP2GqQdB2Yv77O5VkfEsbg5Dep5k0wFhy8A0qRBO5SEsSNkqXpgNpSdWIMnRCIt%2FeBj0m4eylz8R6L%2B0y0h7vUQYtgYT4WvyIlp6NTUv0Kq5RLAA%2FcoLaJQ%2BWZseAGrQvX1E2xpZjodOOCeZ2DR3KC4WK2ifKQcsW1H9738vkTbNE0xi6QZqXweYXItYpGG%2Bv1lGsfljhNza98xSLjxtCVnEYGuv9qA6Z9L6VI8m2niQQO%2B1qs0g39yyrA%2BKAwzh22ypdgpfDZNodTyIRp2WDe%2B%2Fx2k%2FC72ujcTYDXSJtHTgMAMI%2BYs8EGOqUBnPjNhECTKDkBVyHuB%2FDTs%2F%2F2dsT4lpIOlf3m5z5NxDwIqiMOAGPYvJ3gkEZE89eyfs0BtyEl3qF6sM%2BIxRnF7mJ0PjsGZMj1X6Ei5GJ9rFU%2F98XKxJPBjaG634SSqr6vomepyGHIY5ZGp7Lx6Qn10dRvcTxpSp02yiuujTXktI4RrV03pKnZJeMGRtW1%2B9GRwwClGlO7woUie3lAmnrXO0p1yr6i&X-Amz-Signature=7919af4bd646618e64726baa562aff6aca0daae016af49ce00bbbd3a4d2e9110&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZJ7AKW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeOuCirpqchSPxlQ0bmQQ8ZF0efzHDnDVoyYquY%2FHN%2BgIgHTE%2Fj%2BUIwcHn0AXvXei4mR5SpbxU0kPo72x0EG%2BtEioqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIegsB0MH3dZ9PDx6SrcAy3KpF%2FliefXIdkvyw0HZGvbb%2BpM2qwG3wfRbuLb8OP72WoTvg35nrnSaKYVAY495pw1MD8yGcgzDPG6nR91SdLYBAB%2BIHU%2FZHXnPiS7N9dimMdYjqIo9pBwKIrj%2FN2RSP3ukz%2BgXR7rOf0WNayFl9K1qbJ%2Fn3CfbxFkyS9CYPNaYBYaiYmhM%2Bjc2Bp9gT2t5rxmR1%2FUg776ibneiHSYQxDDpxU9UhZgXoB6L8RpoOeAJ0Xynjb5rGLsesoXN%2BhLaxuNeBGzloLDgWJrktYnB5xv%2FPa6nVXvO12N9Jm61EnWRC6acXijfdaqFbKomh78GaNg%2BuMAacLPc9%2FP2GqQdB2Yv77O5VkfEsbg5Dep5k0wFhy8A0qRBO5SEsSNkqXpgNpSdWIMnRCIt%2FeBj0m4eylz8R6L%2B0y0h7vUQYtgYT4WvyIlp6NTUv0Kq5RLAA%2FcoLaJQ%2BWZseAGrQvX1E2xpZjodOOCeZ2DR3KC4WK2ifKQcsW1H9738vkTbNE0xi6QZqXweYXItYpGG%2Bv1lGsfljhNza98xSLjxtCVnEYGuv9qA6Z9L6VI8m2niQQO%2B1qs0g39yyrA%2BKAwzh22ypdgpfDZNodTyIRp2WDe%2B%2Fx2k%2FC72ujcTYDXSJtHTgMAMI%2BYs8EGOqUBnPjNhECTKDkBVyHuB%2FDTs%2F%2F2dsT4lpIOlf3m5z5NxDwIqiMOAGPYvJ3gkEZE89eyfs0BtyEl3qF6sM%2BIxRnF7mJ0PjsGZMj1X6Ei5GJ9rFU%2F98XKxJPBjaG634SSqr6vomepyGHIY5ZGp7Lx6Qn10dRvcTxpSp02yiuujTXktI4RrV03pKnZJeMGRtW1%2B9GRwwClGlO7woUie3lAmnrXO0p1yr6i&X-Amz-Signature=2374bab5d090204a68cb4819a77d0b87feda90f97840e5fcdb0ef464956e1476&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
