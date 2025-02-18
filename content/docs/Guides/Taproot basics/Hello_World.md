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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625T5Y67V%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgF9pABaYARlHJ2hMD6gmvVCUDToVjf%2FCnvnbGwmvcFwIgbKJxYocTyPXbYRWK3z4QayeyfWOfGEDWoC5iiEPFErAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArFuk3WPx4OTOufeCrcAwi4B4iDhueX8Z3RPYITR6ac8E6Q7WTgY%2BdDgsxJlHtkv9hfhp3zgLaebccccn0LrohyLU2buwBrz75nG0SONp48tpu84%2Bw6y9%2BcA5bckIP7pKhCaTcoJWhsIHRgI14381IKHaomr%2B6hAM2cZgDxYNEwylp%2F0P0PR%2F%2BwO%2BFJrCnKqYuqiZ%2FhQU4vhjiLs0o%2BuG1wqTw1qWMpDNbAnQ%2FG2EOYeRSp0es1F7u18xM4m3EwndZTfYrIGulzUrhBSPWs1f9oFHmshdfn50vR2Km3JfXkklacu0xuHreTaQpYl%2FTYweRwkajt3zG5OZVxizLnjBENCa1qY87SHle8OHEUBE7tU2ipJgtemvCeZhLftdalJwTqJjRvKR6NQGeVNXvwRBUqlfPEQj4ebVwXz%2FvjoHlyzrF10XqtaQzH5PhgbvIcUxMp3Q3r6Q%2BEOSEC%2B6lqetu30Mq5C0A56Za2E3nlwPz%2BXcQZWvTSwTBhzXQVPvOK3uIhjwRLsLHGAweXWW0tTeIvlFsdival%2BgKSqRoJ5HfoU8rptyaym4CeG8deX3lsJEFzFHmTNnJw9TNKoBNU0zwp13S%2FVtBGLOuiB3Ix5SKYg2Oco5lso5NSXPPGQggyCZ1nf7LENSMSWzTiMPWmz70GOqUBsboQNBn3qgX%2BoP7cN3e0bCiPfcGWrzC9l8BjgnuEeaShaKXlXUDzD6Lz1xM22Kqea8Hw220p7p%2FqFiJfM7oC%2FCk2kfEuqcM9frVniDeoOisdYvZK3fiDuvDkp91IHhf0ccYMY0l9PjQdp4G1pebbXE3Elp3wK6FefKsAXEhGM91F3I6u813fUUDOkz4eHDrkxznmD092J9kiM5pa7iCuLP5mbdm4&X-Amz-Signature=a8a2b7d90f98cf0d1857dfb2f973856d062c99d6c8cbcc772cce46547a155861&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625T5Y67V%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgF9pABaYARlHJ2hMD6gmvVCUDToVjf%2FCnvnbGwmvcFwIgbKJxYocTyPXbYRWK3z4QayeyfWOfGEDWoC5iiEPFErAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArFuk3WPx4OTOufeCrcAwi4B4iDhueX8Z3RPYITR6ac8E6Q7WTgY%2BdDgsxJlHtkv9hfhp3zgLaebccccn0LrohyLU2buwBrz75nG0SONp48tpu84%2Bw6y9%2BcA5bckIP7pKhCaTcoJWhsIHRgI14381IKHaomr%2B6hAM2cZgDxYNEwylp%2F0P0PR%2F%2BwO%2BFJrCnKqYuqiZ%2FhQU4vhjiLs0o%2BuG1wqTw1qWMpDNbAnQ%2FG2EOYeRSp0es1F7u18xM4m3EwndZTfYrIGulzUrhBSPWs1f9oFHmshdfn50vR2Km3JfXkklacu0xuHreTaQpYl%2FTYweRwkajt3zG5OZVxizLnjBENCa1qY87SHle8OHEUBE7tU2ipJgtemvCeZhLftdalJwTqJjRvKR6NQGeVNXvwRBUqlfPEQj4ebVwXz%2FvjoHlyzrF10XqtaQzH5PhgbvIcUxMp3Q3r6Q%2BEOSEC%2B6lqetu30Mq5C0A56Za2E3nlwPz%2BXcQZWvTSwTBhzXQVPvOK3uIhjwRLsLHGAweXWW0tTeIvlFsdival%2BgKSqRoJ5HfoU8rptyaym4CeG8deX3lsJEFzFHmTNnJw9TNKoBNU0zwp13S%2FVtBGLOuiB3Ix5SKYg2Oco5lso5NSXPPGQggyCZ1nf7LENSMSWzTiMPWmz70GOqUBsboQNBn3qgX%2BoP7cN3e0bCiPfcGWrzC9l8BjgnuEeaShaKXlXUDzD6Lz1xM22Kqea8Hw220p7p%2FqFiJfM7oC%2FCk2kfEuqcM9frVniDeoOisdYvZK3fiDuvDkp91IHhf0ccYMY0l9PjQdp4G1pebbXE3Elp3wK6FefKsAXEhGM91F3I6u813fUUDOkz4eHDrkxznmD092J9kiM5pa7iCuLP5mbdm4&X-Amz-Signature=e9a4a0a430a0d2c46e9e74c95edc5a254f41e2ff09c01f4cbdb768da708bd196&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
