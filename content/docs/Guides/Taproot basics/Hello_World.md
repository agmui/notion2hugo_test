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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMF4MOY4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Bsxlx3KXqZEceuWBr%2BUSf%2BtghdYcWdHlSPJQDbxvZQIhALz%2BVasE2LJyi8OXlzp1I74Et8sB7U8j%2BSCOas%2BrR3RnKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTzkpmyQTryYelV2wq3AOtr8VQotDnpUwvpHRZYgFh5%2FALjiyf2AjbwrbPFzAevvi3IeA%2F0EJaL1vyk1x70G9aupqH%2FzpcvsTV99HXBJJgb93Hh5W3%2F7PzRsNq2fpkG51d%2FDU2k0Kv3x40tK30dXTBLUfbmLfTjEltFV48%2FYYc5l2MqhHVuj9RB0S688JKY2SDGu27Awc1JlgPssJCNkmhJzDnslBv6vfR7lBMU1oBV%2BY2jww%2BMKv5DURVNW8TrFISpF9TCexKvsWnVdljaqNW4sDy%2BPz%2Fr8i3odGrYOHdBuYsxAOsab982uLZTGZhSa84XwDY5SQLSzqFOz60BtMloyj6w0S%2FWyoOvKcUn%2FvATs0wKrI%2Fsu1ZPh48AOJfv2rEn2VEe2bL07JZU%2B1ysniaXDZYCuYh%2BjafczfKSRM5Eh5uOac8EgWT7TuBahfopHraDbK3ig%2BuWsW8yr3yEztFgymkmTcK6qsYrrTqeCmF5WRcENfwqykIaRpYGU4LHYve7MJ3CjODpxRi4M0wmjc%2Be%2Bl4pCKkhD3LNKaTO31TqzQhzzfWr7wglTCAPSUEqOxEtdhor5ND9hdb1v24iwkGVikYLw7v59FWj71tZMNeqcy22jB8m4ghRIfu6gY%2BLy21xSr2btM3Dw%2FFeTCcsuHBBjqkAUIwngDWhPBbWwRB9do4lyOfUYyJ00PlJb7stZcOdmLcToaafhXFpdmYMUg0A2kq4WYWdjiTZ%2FravoNITFgfKdedIwv9vwfe49274AFyBy43Bw4yF0Ifnbc3j%2BbJ0s6mlgMrdmbI53isvIU3KxwApU4RDuTMDHDSnDfQlKM9RItB7bjCiMxuhMw6AUxT62dUNCK2vu2fSfoPk%2BmLRIEW%2Fc2gFRkZ&X-Amz-Signature=5ae93befb328a2807b73e41b4294d74d44a1d72d1f6c74fab279278beec1273a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMF4MOY4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Bsxlx3KXqZEceuWBr%2BUSf%2BtghdYcWdHlSPJQDbxvZQIhALz%2BVasE2LJyi8OXlzp1I74Et8sB7U8j%2BSCOas%2BrR3RnKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTzkpmyQTryYelV2wq3AOtr8VQotDnpUwvpHRZYgFh5%2FALjiyf2AjbwrbPFzAevvi3IeA%2F0EJaL1vyk1x70G9aupqH%2FzpcvsTV99HXBJJgb93Hh5W3%2F7PzRsNq2fpkG51d%2FDU2k0Kv3x40tK30dXTBLUfbmLfTjEltFV48%2FYYc5l2MqhHVuj9RB0S688JKY2SDGu27Awc1JlgPssJCNkmhJzDnslBv6vfR7lBMU1oBV%2BY2jww%2BMKv5DURVNW8TrFISpF9TCexKvsWnVdljaqNW4sDy%2BPz%2Fr8i3odGrYOHdBuYsxAOsab982uLZTGZhSa84XwDY5SQLSzqFOz60BtMloyj6w0S%2FWyoOvKcUn%2FvATs0wKrI%2Fsu1ZPh48AOJfv2rEn2VEe2bL07JZU%2B1ysniaXDZYCuYh%2BjafczfKSRM5Eh5uOac8EgWT7TuBahfopHraDbK3ig%2BuWsW8yr3yEztFgymkmTcK6qsYrrTqeCmF5WRcENfwqykIaRpYGU4LHYve7MJ3CjODpxRi4M0wmjc%2Be%2Bl4pCKkhD3LNKaTO31TqzQhzzfWr7wglTCAPSUEqOxEtdhor5ND9hdb1v24iwkGVikYLw7v59FWj71tZMNeqcy22jB8m4ghRIfu6gY%2BLy21xSr2btM3Dw%2FFeTCcsuHBBjqkAUIwngDWhPBbWwRB9do4lyOfUYyJ00PlJb7stZcOdmLcToaafhXFpdmYMUg0A2kq4WYWdjiTZ%2FravoNITFgfKdedIwv9vwfe49274AFyBy43Bw4yF0Ifnbc3j%2BbJ0s6mlgMrdmbI53isvIU3KxwApU4RDuTMDHDSnDfQlKM9RItB7bjCiMxuhMw6AUxT62dUNCK2vu2fSfoPk%2BmLRIEW%2Fc2gFRkZ&X-Amz-Signature=2b7e34887c134cabadef545bb89956afc5fac28c9aec2a528e9f91dfd9c9c975&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
