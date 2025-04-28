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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHAEIKE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvhSFlPYB3I3bMZfSvNBO2u0Lrpxtf02J4JsxIC19GTAiEAuiVCWqdTRH8QH%2BPPtqKHIgjyx4LIkg5BzV0pjoqMC%2Bcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOTgd3rVwUJeKeTvNSrcAxJPQQhjwwQuD3iESu82nQhv2gLyfTQNgJ73ySgAkUuMplrbTsuBrykq0WAqiWBOIeT0ciASkLpNbhYPP7NwgyXT%2F1PxOg6XGZYIkPBlDTtyUV3Zd2ff4kQP0jIHbOzyUA0P%2FOUen8MCXQhu9Ncir%2BW0NhqwvD4SOr5AIEwC9Moa68tKSTWbTN6f4QSGECa6vC8awypnFCNiCEFmZiYocerCAMf292Vzx24vvKc1QRQg7LEaDecn8HpJIGfPybc%2Fr7xFX1GSwS%2F5Xe702ibLUeC7f8gBgaoaHEE0EtlIMEmK0iYFln3IO6p1FCXHy7eZP%2BY149TpDXKRJptzPN2GRBzaMNjdBgBT4CvHSFFrdDIx5P00YtwsUvB45sXD5ZRj4KlqlHD2Pb1evSJvbKcACSdN4lhlPiicI8CYz5Kd%2B953darcabbgMD7XY%2FRKTOQon%2FvJiU75EdJTop3bDCSqxqQTzgdJmt%2BJRCf4cWg0IXAEieMYf675HX9fHSEFlB1Jmg%2FlCqLaDMvt4gUWNpYFwDQRUnxW8DbLZPn0wqIpGNYlAxhq7TT5XYoEaBt99khVCcyXmAyztXvuwr5GEZpY3jihx51WUNfAFUX1zTihmImcrfImVT6YtAdKdwnpMNeUvMAGOqUBAxetNddfAeDV7wfGtPw47UsJUQ2EoqC8lBWm%2BYyb%2Fmq%2BwixdD66o8iZejo0E8TD7pqjyIx3HfYwBaM7KTySHqBa3yd2mZ1vCZMwOgUcD5pNunNOgJBrEFwcRTkWNxfc94dacYDiFNbVy7HVbhciwm8Ks5U2krBk0EboZjnh1D71quP21f2h8AUyPZFeYNCx%2F1yjxKZXQMB%2BLHsXDlfhpwX2CxJ9A&X-Amz-Signature=428ec1831bc73456fb06642c506bfe4a19157de78f721bd75e58f438094c3194&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHAEIKE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvhSFlPYB3I3bMZfSvNBO2u0Lrpxtf02J4JsxIC19GTAiEAuiVCWqdTRH8QH%2BPPtqKHIgjyx4LIkg5BzV0pjoqMC%2Bcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOTgd3rVwUJeKeTvNSrcAxJPQQhjwwQuD3iESu82nQhv2gLyfTQNgJ73ySgAkUuMplrbTsuBrykq0WAqiWBOIeT0ciASkLpNbhYPP7NwgyXT%2F1PxOg6XGZYIkPBlDTtyUV3Zd2ff4kQP0jIHbOzyUA0P%2FOUen8MCXQhu9Ncir%2BW0NhqwvD4SOr5AIEwC9Moa68tKSTWbTN6f4QSGECa6vC8awypnFCNiCEFmZiYocerCAMf292Vzx24vvKc1QRQg7LEaDecn8HpJIGfPybc%2Fr7xFX1GSwS%2F5Xe702ibLUeC7f8gBgaoaHEE0EtlIMEmK0iYFln3IO6p1FCXHy7eZP%2BY149TpDXKRJptzPN2GRBzaMNjdBgBT4CvHSFFrdDIx5P00YtwsUvB45sXD5ZRj4KlqlHD2Pb1evSJvbKcACSdN4lhlPiicI8CYz5Kd%2B953darcabbgMD7XY%2FRKTOQon%2FvJiU75EdJTop3bDCSqxqQTzgdJmt%2BJRCf4cWg0IXAEieMYf675HX9fHSEFlB1Jmg%2FlCqLaDMvt4gUWNpYFwDQRUnxW8DbLZPn0wqIpGNYlAxhq7TT5XYoEaBt99khVCcyXmAyztXvuwr5GEZpY3jihx51WUNfAFUX1zTihmImcrfImVT6YtAdKdwnpMNeUvMAGOqUBAxetNddfAeDV7wfGtPw47UsJUQ2EoqC8lBWm%2BYyb%2Fmq%2BwixdD66o8iZejo0E8TD7pqjyIx3HfYwBaM7KTySHqBa3yd2mZ1vCZMwOgUcD5pNunNOgJBrEFwcRTkWNxfc94dacYDiFNbVy7HVbhciwm8Ks5U2krBk0EboZjnh1D71quP21f2h8AUyPZFeYNCx%2F1yjxKZXQMB%2BLHsXDlfhpwX2CxJ9A&X-Amz-Signature=b3553e7b43a9300c3330ee4131b225884297532ece9fe508d63389125030dd02&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
