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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7QSGYB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC5T8xEg8IhA%2Biv7ezbK4ACq%2FagEJjqgtWye0BVikhjawIgI1ZPL7bqaeZNqYYM63lhg%2F1D8Nfz5wiDcTO8DV%2B98%2BAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGYf0xGbN%2FuKlVNtuircAyyvb0Fqp5yW4CYPq2MGOCAy18vQEdWF2uTJ%2FsvHJh8XqJe4bjR4Szw0ggfguel6IjkUdrlEX3hN0VbHG9GimVn9gRQwhsHAU8gAvxQxEV5CYLnmE8UVKeAYEvmb2DkGFsu%2FhovA%2BIB7VqDoCD6KU2pUVpZumQayKruvjrxW1DD3U%2Bzq%2FEoLDFao%2BeAW%2F6WiGxmCvGl0VH8q0cEcdplGrG71Wvlcut23GYPHhCFec6q724GHLD8m9GhZc%2FZ1CIwEGEsxGpIoL%2BjT5e4DV%2BPnfow6em8f%2FVrTVA1irsd%2BlmnBMYICbWiLO1WXnhPpf7JnL725vApb5zjhNT9Zpm7m%2BWtvLjDjo98q7PtU%2B0gLZIyMv%2F1fl6A5lIJYHLo0ZR9mZZDhj6A5G%2FTAK%2Bz97QOkmYbG0fFeWxVrzuM1iE3axwKioxyFkIUrfOZEBx1u3ZCPI3elx6IoIR9quF%2FGPLfexc2Lh3b5K1iCAHICzrOwgqUb0dbKo6C2vXFsowciE5WrYArbrz36QDcoo0aKCLL3kScmbT4GfwExVueU1feLlKraFzib%2FiIW%2FHI7Cz%2FQQhbVwE7nb6NodYH1%2FchaqguOqzebn5WLQMGBwRUsdBO7g5SEIvUrF3bzNy%2Bdo0doMI6J%2FL0GOqUBezxhqPoiSPDHw7vQmte7XMHRyJdRYgOsSzpyc%2BGc0EmRHd4pU39ayAlJUbaauEw3EHPo41RWZ7zCeEoOApAmPCMcpNhH%2B93p98%2B3pUolKswZLIzHkQkLiO2Ey5jQuvYy1za1aSV8bLMPpSHNd8WO%2BC9jDIitH2EfIIrRhX0a%2FVvHA0MlAaJaWNn6HoOTdKva%2F9m0ujbfv7RPJw7c5PZMilEE8D4p&X-Amz-Signature=bc2162c2a16da4c69446b3d65254249e4e71ab75e7fd8e0dbf18ad61808f58c9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7QSGYB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC5T8xEg8IhA%2Biv7ezbK4ACq%2FagEJjqgtWye0BVikhjawIgI1ZPL7bqaeZNqYYM63lhg%2F1D8Nfz5wiDcTO8DV%2B98%2BAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGYf0xGbN%2FuKlVNtuircAyyvb0Fqp5yW4CYPq2MGOCAy18vQEdWF2uTJ%2FsvHJh8XqJe4bjR4Szw0ggfguel6IjkUdrlEX3hN0VbHG9GimVn9gRQwhsHAU8gAvxQxEV5CYLnmE8UVKeAYEvmb2DkGFsu%2FhovA%2BIB7VqDoCD6KU2pUVpZumQayKruvjrxW1DD3U%2Bzq%2FEoLDFao%2BeAW%2F6WiGxmCvGl0VH8q0cEcdplGrG71Wvlcut23GYPHhCFec6q724GHLD8m9GhZc%2FZ1CIwEGEsxGpIoL%2BjT5e4DV%2BPnfow6em8f%2FVrTVA1irsd%2BlmnBMYICbWiLO1WXnhPpf7JnL725vApb5zjhNT9Zpm7m%2BWtvLjDjo98q7PtU%2B0gLZIyMv%2F1fl6A5lIJYHLo0ZR9mZZDhj6A5G%2FTAK%2Bz97QOkmYbG0fFeWxVrzuM1iE3axwKioxyFkIUrfOZEBx1u3ZCPI3elx6IoIR9quF%2FGPLfexc2Lh3b5K1iCAHICzrOwgqUb0dbKo6C2vXFsowciE5WrYArbrz36QDcoo0aKCLL3kScmbT4GfwExVueU1feLlKraFzib%2FiIW%2FHI7Cz%2FQQhbVwE7nb6NodYH1%2FchaqguOqzebn5WLQMGBwRUsdBO7g5SEIvUrF3bzNy%2Bdo0doMI6J%2FL0GOqUBezxhqPoiSPDHw7vQmte7XMHRyJdRYgOsSzpyc%2BGc0EmRHd4pU39ayAlJUbaauEw3EHPo41RWZ7zCeEoOApAmPCMcpNhH%2B93p98%2B3pUolKswZLIzHkQkLiO2Ey5jQuvYy1za1aSV8bLMPpSHNd8WO%2BC9jDIitH2EfIIrRhX0a%2FVvHA0MlAaJaWNn6HoOTdKva%2F9m0ujbfv7RPJw7c5PZMilEE8D4p&X-Amz-Signature=6112466b7c67b2b39c2a603312d8375e4304e3f32ca320ae6afa4f36be8d1e26&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
