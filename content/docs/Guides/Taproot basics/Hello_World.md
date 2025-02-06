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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEFLOM4A%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDcsFDUFutkJ738kh%2BLBwpedCF91OTut5zMiyPUZfzjeAIgbLNxeG3Zk7qT3zn%2FKyjcCX%2BezQgUnIJo2k9bFMoE%2Fiwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAXZQHw6FxsWhHl7SCrcA1yJnr7gEO7%2Fygr3BQ7TJ8zQHLWfnvQNO91sGMtH0JpjRr%2B%2F3YBhy26lBTjgkmsfqw%2FbBMhezkKrwkXqAQAGOcgjA9EUUs0BO9orp07XvIAWZiVHG6IBEffEWQKg9bvdpAN4Tlfa%2FtDBRwgxyiruRghMs5e9vVpNSyn9pmCnp1wvdDll9U4Hqa6DcqOrM5%2Bhy5Kb%2B8XJjUAEaV%2F9x0qAVhy%2B5cOO58RZCGl%2FQ9MoOcLrekHMPx4B%2FWN6iXAQ%2BT2P0BpIfp2nYRLSlER9W2B0duPmkupL5dCTPL3x7FoFcwOmkEcWIejKeM%2BxAUfvC8K92zvVb47TRpyCOmfZsvdAasQ%2BhB%2FGxLW2JVw1F8Tdl7DmyHZ7GsKeYCFTnnuMOGaiGv2ZwvidBp%2Blmzyxx%2BV7XV03jViGiR06dFlNpezKbSEKYKOWBeQYFxd1Gc85Ygx6u%2FBb9wMzZcT9UFCP2XJ3imS0QrQiXnF0ZOse%2Btd8xr2Dl2ZtJeP72a4T7OBaLPjee423APcSMurNYnx0UabpvhUACiHNsaWwnRmV%2BrtmJUfZiEe8VnE6ECY%2FgrSFCZIoAvw21XC%2BtB0CninvsiQjoFCk6JhwPHGvqwUnjZ9e5pcm4YTLh903U9LAIBcCMK%2B5lL0GOqUB%2F4LWGW6rTD5spYZy7rUc3OW5CAIQx85Rqg7FIIOeKNd2O1lUcIOsO1Rhb9zPaNZ1YOnnxjckzyOBPwyPO84SHpU0Uu6cIJUxevnMmve%2BSAZnsO%2B7iSg%2FvwcstR%2FEIGyKTvxw8VcXazK4G5f3KbM9S2%2FdDxEPXFObOzAsSzNDifJAI6hpI5%2Fk3xG3xhn7fXoWjUZ4155DJ6%2Bkf0mW%2FazT%2F5Sxm9p%2B&X-Amz-Signature=c8e77c96f55af8ee3e592259a8aa07bb06672c0a2a96b366e4b1d6c99c7c356c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEFLOM4A%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDcsFDUFutkJ738kh%2BLBwpedCF91OTut5zMiyPUZfzjeAIgbLNxeG3Zk7qT3zn%2FKyjcCX%2BezQgUnIJo2k9bFMoE%2Fiwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAXZQHw6FxsWhHl7SCrcA1yJnr7gEO7%2Fygr3BQ7TJ8zQHLWfnvQNO91sGMtH0JpjRr%2B%2F3YBhy26lBTjgkmsfqw%2FbBMhezkKrwkXqAQAGOcgjA9EUUs0BO9orp07XvIAWZiVHG6IBEffEWQKg9bvdpAN4Tlfa%2FtDBRwgxyiruRghMs5e9vVpNSyn9pmCnp1wvdDll9U4Hqa6DcqOrM5%2Bhy5Kb%2B8XJjUAEaV%2F9x0qAVhy%2B5cOO58RZCGl%2FQ9MoOcLrekHMPx4B%2FWN6iXAQ%2BT2P0BpIfp2nYRLSlER9W2B0duPmkupL5dCTPL3x7FoFcwOmkEcWIejKeM%2BxAUfvC8K92zvVb47TRpyCOmfZsvdAasQ%2BhB%2FGxLW2JVw1F8Tdl7DmyHZ7GsKeYCFTnnuMOGaiGv2ZwvidBp%2Blmzyxx%2BV7XV03jViGiR06dFlNpezKbSEKYKOWBeQYFxd1Gc85Ygx6u%2FBb9wMzZcT9UFCP2XJ3imS0QrQiXnF0ZOse%2Btd8xr2Dl2ZtJeP72a4T7OBaLPjee423APcSMurNYnx0UabpvhUACiHNsaWwnRmV%2BrtmJUfZiEe8VnE6ECY%2FgrSFCZIoAvw21XC%2BtB0CninvsiQjoFCk6JhwPHGvqwUnjZ9e5pcm4YTLh903U9LAIBcCMK%2B5lL0GOqUB%2F4LWGW6rTD5spYZy7rUc3OW5CAIQx85Rqg7FIIOeKNd2O1lUcIOsO1Rhb9zPaNZ1YOnnxjckzyOBPwyPO84SHpU0Uu6cIJUxevnMmve%2BSAZnsO%2B7iSg%2FvwcstR%2FEIGyKTvxw8VcXazK4G5f3KbM9S2%2FdDxEPXFObOzAsSzNDifJAI6hpI5%2Fk3xG3xhn7fXoWjUZ4155DJ6%2Bkf0mW%2FazT%2F5Sxm9p%2B&X-Amz-Signature=f1c6b2d1098200ee741901444f633552abcffad0bc3cd188f02b6c26063b5aae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
