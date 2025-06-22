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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRYJKK5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGP%2F097FFk25vRs%2BTWsWZq3GYyb1l2wOFgW2%2FMGxQMawIhANfgIBldcuG6dYEy9hO0Y8jtoF03%2F07FEiXhCAwxsQv5KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5dYEf8ZNIDctUslYq3AMJMQSGFRxn3bl05KJKfN1rC3DlQcLTNWo2NFXe5Zi7uAneWWaHlDAekwr5f30edXHM9HUtxRFvKq%2BaEmGGGCCbd8tMpFyuwxxoBOKbeV7%2FRPEOi2X67owlawXcTYl1jAH1uEdgV6qV%2BYW7RodeEzXkPq31Kp3RQ3DTyv7GrVacqSxp3Kjoox5qKkZ7VzgMnUSFf0ICvNsIAdfSWgcfLN%2BGCUnbKyQNN51nq0dbNcALhnPvBi%2BAbESno75istywThIsLLm0cP6zlZ3GLsZ9dcmbyUE7H4Mx83cetYN%2BlxodBYOxP7TuZG3YXyki8uAgGaZy1sCVKe3hCiVVRz%2Fi5sPZ2CFMvmID6O3v3JXXPxIX5li2dBKWV4KUPJnx82pzGnG3qx8zQ66ZNMg39zCpKYoeGYOV8zlZ%2BBih65llwVPi3p0ClDsxt5j0mhkOXyBzrgb6I4XMtgKAZVMz0uSzhSpdaGtYYLLbZL8FDBO49%2FHItg1IcBBvl1vCv5VK3Zj%2BsH6FI%2FSwNzWOv%2BAzl7W0H0TRnGkcgdiov5csAlBqvf1zGgwz2yOomoXCl1RpTS6J7vcltT8%2BhcwbREpFxVA51%2FZDCXfE1rBnsJZciWiMKK%2FS6C63PQlaKZuQNQ6DjjD%2FrN7CBjqkAfV8p0MjlWrqqVRLFsbmXlGUoWRCUHjUQK8WiYK7KPVswQDJQGGmmlLSViPiEPZbqdIlGhCHiPMxuDKiF2%2FCGXfs4UBoYyhE64NFoFq0mRCkKqR%2FCFkb8p4%2FLtWIlMtlmuUYqx%2FN2NJ8HSRWq3cBZCZqmMFabF%2FsD32033u9llSLxoYjewhbTEYOoYQ%2Bvtg7Fckvt6hXhGQqVKS%2BOK9ZE5ASBbWd&X-Amz-Signature=008d870f58194dd71532f65a1283f04873e6c798a77de14ca9f7622f2616f85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRYJKK5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGP%2F097FFk25vRs%2BTWsWZq3GYyb1l2wOFgW2%2FMGxQMawIhANfgIBldcuG6dYEy9hO0Y8jtoF03%2F07FEiXhCAwxsQv5KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5dYEf8ZNIDctUslYq3AMJMQSGFRxn3bl05KJKfN1rC3DlQcLTNWo2NFXe5Zi7uAneWWaHlDAekwr5f30edXHM9HUtxRFvKq%2BaEmGGGCCbd8tMpFyuwxxoBOKbeV7%2FRPEOi2X67owlawXcTYl1jAH1uEdgV6qV%2BYW7RodeEzXkPq31Kp3RQ3DTyv7GrVacqSxp3Kjoox5qKkZ7VzgMnUSFf0ICvNsIAdfSWgcfLN%2BGCUnbKyQNN51nq0dbNcALhnPvBi%2BAbESno75istywThIsLLm0cP6zlZ3GLsZ9dcmbyUE7H4Mx83cetYN%2BlxodBYOxP7TuZG3YXyki8uAgGaZy1sCVKe3hCiVVRz%2Fi5sPZ2CFMvmID6O3v3JXXPxIX5li2dBKWV4KUPJnx82pzGnG3qx8zQ66ZNMg39zCpKYoeGYOV8zlZ%2BBih65llwVPi3p0ClDsxt5j0mhkOXyBzrgb6I4XMtgKAZVMz0uSzhSpdaGtYYLLbZL8FDBO49%2FHItg1IcBBvl1vCv5VK3Zj%2BsH6FI%2FSwNzWOv%2BAzl7W0H0TRnGkcgdiov5csAlBqvf1zGgwz2yOomoXCl1RpTS6J7vcltT8%2BhcwbREpFxVA51%2FZDCXfE1rBnsJZciWiMKK%2FS6C63PQlaKZuQNQ6DjjD%2FrN7CBjqkAfV8p0MjlWrqqVRLFsbmXlGUoWRCUHjUQK8WiYK7KPVswQDJQGGmmlLSViPiEPZbqdIlGhCHiPMxuDKiF2%2FCGXfs4UBoYyhE64NFoFq0mRCkKqR%2FCFkb8p4%2FLtWIlMtlmuUYqx%2FN2NJ8HSRWq3cBZCZqmMFabF%2FsD32033u9llSLxoYjewhbTEYOoYQ%2Bvtg7Fckvt6hXhGQqVKS%2BOK9ZE5ASBbWd&X-Amz-Signature=2efa31589e40f9fc2f9093aed61340eeb20ea2da918577a42e1298bc9b6e3f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
