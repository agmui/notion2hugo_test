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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XGRTMM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIER3ak3eormS2Wxanlt7jTB6SAm1dttFs2qoNDEDgx9WAiEAqqtEyytE9WOr%2Fa%2FjUXqqQcXz0DG1P%2BjgILnXo3HMUsYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyLNzyxX7zoUipbbCrcAyTXhrGEYksx8n8BCVr8n2UVwmma3HHFRFzWPoU0eUxlmUw5BTJe8AQQh8a830gPthCwabR2QqTyZOsyXt%2BhC4qrADGkCNT9r%2B%2FdHiBQ2KDpbh2M8uMvcz2K4VGbXFMxLl8cW07037yHolVTmnP7LCxuNRY3Gw1rMM6f1dJB%2Fahc9Rwd%2FjoPCRhCuEqqE2YxARIn1rXMk1qPJH8a23k%2FBt36eGelZOcXMXQ1uW9tp6wSqbQeKT5B67dPq9tzWZ0pOJRYYQGfDTqgBB6hacx9RqBrEUAjTuBhd9Gg6s83Tfj5cf08MEdK901YT6i%2FDtixc04Q%2FVdBoniNoB9jkGv5QCF6JFrW3prgA4GGa7sEpElFB%2FKf9%2BZMgTa4tqgQjWcMGAD61kMcO9ZKehEYsT3ZG2GuP6Xu%2Fukeb%2FfphtBVhsDHCC88Srjfgztm9RMZdXJKFJRRoe86vxdovP1wi5hyiR9AMMDTbKbzk0RDg%2BeQIpNFPf18fqMeJlk8PixbYPv0k0rD4f40R19nfnY9x6fEMCZSp%2BrAz8NDGKamXgruN3xB%2Bb3J%2Fmd%2Fd8%2B680FMfQXD7Tc1LnR%2Bnz2oFk4AN1XYdIRD3mkQJPziuZNy8NSAYIh7NUPrxTBriyLrXjALMO%2BQir4GOqUBg7wOkdoEvkNZGmElZG%2BvJFEFRU0S7XimjpAbjp5G2k69%2F4BO%2BHPwyUGaw3YHiYtB2eOoSar62ShB1l9B6saegsjeLvVCXfRLj%2BR5sxJrXpeJKQ6%2FNWZlY3XiJNlFeIq1iis7Bo%2BAgPT5diki0eDamPUVjxy6I7uDAYh%2FLFTHBzaHXbIo2fLjoPlyAJ5pNilxLS7ZPdAng2KiV3XxusJ1X3jL5l65&X-Amz-Signature=35f32144f3ffbb6ee7285fbccef051958aa6eaa818deb09672b4aa22145c50c2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XGRTMM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIER3ak3eormS2Wxanlt7jTB6SAm1dttFs2qoNDEDgx9WAiEAqqtEyytE9WOr%2Fa%2FjUXqqQcXz0DG1P%2BjgILnXo3HMUsYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyLNzyxX7zoUipbbCrcAyTXhrGEYksx8n8BCVr8n2UVwmma3HHFRFzWPoU0eUxlmUw5BTJe8AQQh8a830gPthCwabR2QqTyZOsyXt%2BhC4qrADGkCNT9r%2B%2FdHiBQ2KDpbh2M8uMvcz2K4VGbXFMxLl8cW07037yHolVTmnP7LCxuNRY3Gw1rMM6f1dJB%2Fahc9Rwd%2FjoPCRhCuEqqE2YxARIn1rXMk1qPJH8a23k%2FBt36eGelZOcXMXQ1uW9tp6wSqbQeKT5B67dPq9tzWZ0pOJRYYQGfDTqgBB6hacx9RqBrEUAjTuBhd9Gg6s83Tfj5cf08MEdK901YT6i%2FDtixc04Q%2FVdBoniNoB9jkGv5QCF6JFrW3prgA4GGa7sEpElFB%2FKf9%2BZMgTa4tqgQjWcMGAD61kMcO9ZKehEYsT3ZG2GuP6Xu%2Fukeb%2FfphtBVhsDHCC88Srjfgztm9RMZdXJKFJRRoe86vxdovP1wi5hyiR9AMMDTbKbzk0RDg%2BeQIpNFPf18fqMeJlk8PixbYPv0k0rD4f40R19nfnY9x6fEMCZSp%2BrAz8NDGKamXgruN3xB%2Bb3J%2Fmd%2Fd8%2B680FMfQXD7Tc1LnR%2Bnz2oFk4AN1XYdIRD3mkQJPziuZNy8NSAYIh7NUPrxTBriyLrXjALMO%2BQir4GOqUBg7wOkdoEvkNZGmElZG%2BvJFEFRU0S7XimjpAbjp5G2k69%2F4BO%2BHPwyUGaw3YHiYtB2eOoSar62ShB1l9B6saegsjeLvVCXfRLj%2BR5sxJrXpeJKQ6%2FNWZlY3XiJNlFeIq1iis7Bo%2BAgPT5diki0eDamPUVjxy6I7uDAYh%2FLFTHBzaHXbIo2fLjoPlyAJ5pNilxLS7ZPdAng2KiV3XxusJ1X3jL5l65&X-Amz-Signature=e0d79ddd27947de6ea68233af51e7053d5c16e3315b88dc8e82bd2257823f7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
