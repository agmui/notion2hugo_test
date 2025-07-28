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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGIL7WN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHiTXH7MmZvvSRhCVHdPACM%2FjdNGihZEfUNMKWgxeY9EAiEAwR%2BhAvqlAkBZZ6br96dBLXWB1uJ3vd6JkJqcqu2H7fQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKJNjLsepJfubFPvSrcAxYexBrCtqzFG41vZTq9AyctGVoHswUmCyOkyGbllWu6tAsdMyn6H6vZgcy%2FG111XNaTHfgTq66ur2tTQUSa0if0u%2FU5MDZFJ25Ayvy7KCOX%2BA%2FawGSgOQJBNZ5GEp6Bg%2FAK5qtC6sfW%2BzkqV%2Bb4mJB1fYA%2B%2B76uAhb3e9%2BxHuQ71n4zy3ElAkPynaB7FoQhBh3x0FuDRKJ5Eo6jCXntpLue7PEi9X5jkzTaQt3qAEWp2E8wSWMM%2BAUYYQTdJME4ozQF5dP3Aj5bsNVOmkPiXZEfLpvv7tU6GqcoKzxlck1C8pIU5ydsvUSmbt0Gh4Y1P3lI5ReuzdEksjZgXVPREG8wZtLiPHrCxkheiO0vvUUi0JkfHUO%2B6I3PCLxDDS7VUm%2BckiztGLJer1O5O2BzJ9DfUOsqrnsxMNDjxhr3dXVxW8COeHw3babmbxfjda40wibN%2B6rCRJ%2F4dxdE9ySOvpp9jkXOb4gE0evIXVtPX7jZiVupELQlt%2FHT4UgUWwsK%2FwIfcRWXZC7%2Fbz5OKK1s89lA9I6VS9bY3e%2Br%2Bu2u48F9ZUfcCoMKpONq49E%2BJCNV%2FFX20jyK5s%2FoolZdWa4sKiGN7dOEh0qrO%2FQjPHz7XHeFwzdY%2FKcLvAlRzDrhMNLInMQGOqUBs5ynz1fpJNSdy5PvL9SY16fP%2FXhbHGuhKSio4U60YKjYOqCYK%2BKBMY02Fjt6tj3fsE60TVdzNkWhMC2bf0D0VxkufsgOxK%2BZjz%2FPJEvGpZWYvw9jTazoC8JKeQvsr%2FIbuhekztrsyn7ue87OYd4TMmX%2FFQHPVjySYUSS1UQ8FOcJdNK3VEQTVKszc5p1Yn%2B4YxFcmwno4IPfi5G6tvBin1z8vqt4&X-Amz-Signature=e65bd728adce86228f75fb7fac9672fb9609c2f44eae48df8ba25317a96622ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJGIL7WN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHiTXH7MmZvvSRhCVHdPACM%2FjdNGihZEfUNMKWgxeY9EAiEAwR%2BhAvqlAkBZZ6br96dBLXWB1uJ3vd6JkJqcqu2H7fQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKJNjLsepJfubFPvSrcAxYexBrCtqzFG41vZTq9AyctGVoHswUmCyOkyGbllWu6tAsdMyn6H6vZgcy%2FG111XNaTHfgTq66ur2tTQUSa0if0u%2FU5MDZFJ25Ayvy7KCOX%2BA%2FawGSgOQJBNZ5GEp6Bg%2FAK5qtC6sfW%2BzkqV%2Bb4mJB1fYA%2B%2B76uAhb3e9%2BxHuQ71n4zy3ElAkPynaB7FoQhBh3x0FuDRKJ5Eo6jCXntpLue7PEi9X5jkzTaQt3qAEWp2E8wSWMM%2BAUYYQTdJME4ozQF5dP3Aj5bsNVOmkPiXZEfLpvv7tU6GqcoKzxlck1C8pIU5ydsvUSmbt0Gh4Y1P3lI5ReuzdEksjZgXVPREG8wZtLiPHrCxkheiO0vvUUi0JkfHUO%2B6I3PCLxDDS7VUm%2BckiztGLJer1O5O2BzJ9DfUOsqrnsxMNDjxhr3dXVxW8COeHw3babmbxfjda40wibN%2B6rCRJ%2F4dxdE9ySOvpp9jkXOb4gE0evIXVtPX7jZiVupELQlt%2FHT4UgUWwsK%2FwIfcRWXZC7%2Fbz5OKK1s89lA9I6VS9bY3e%2Br%2Bu2u48F9ZUfcCoMKpONq49E%2BJCNV%2FFX20jyK5s%2FoolZdWa4sKiGN7dOEh0qrO%2FQjPHz7XHeFwzdY%2FKcLvAlRzDrhMNLInMQGOqUBs5ynz1fpJNSdy5PvL9SY16fP%2FXhbHGuhKSio4U60YKjYOqCYK%2BKBMY02Fjt6tj3fsE60TVdzNkWhMC2bf0D0VxkufsgOxK%2BZjz%2FPJEvGpZWYvw9jTazoC8JKeQvsr%2FIbuhekztrsyn7ue87OYd4TMmX%2FFQHPVjySYUSS1UQ8FOcJdNK3VEQTVKszc5p1Yn%2B4YxFcmwno4IPfi5G6tvBin1z8vqt4&X-Amz-Signature=40a4038069c035ed9f9ed25d8002178bb60ea92494d63321fd4ce42f53325cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
