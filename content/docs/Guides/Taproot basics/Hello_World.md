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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DT322AV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUsAj%2BvUe%2BVrbA3fbRd5VKiQ1ApZMI4G5OWFbvo1s1gIgf7dyoP9k%2BMdogydob8N8xmng%2FY4sxu7OV3fQRb%2FgZx0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhaas0FNhywPXkmNircAwnHIsTyjjficRtD%2FylmwZpIZaPM4YxjKbziHcEqf3Uansxrk%2FQcL7yi8zPBA%2FSyWcgGRxlQTvSH4pA76GyGa14lTG8BskoUcLYavem8LWsukt2Bp%2Fe8IC6waex89iQkRz0EiEMfY%2FLZLXNRoHcPq4frn2263XJj2X%2BYs8IY%2Bc4AEk8zDdqpjAgn9n1w3x9RyRBPlkBlUrNu8ndmTUugZ6kZUdcMvsvOJxNnhVBEpLL2SDHHI8kinRwYOgPLZsV9IFP%2B565CZfIOBtvCFBqAe7zd1%2BfC%2FmqruMN5%2FSgz%2BpatJ9aK390RG2QtJd5vGrUGPT6j04wTV20MrZzYq7MhIc6c%2FtIU%2BpiGeH4UhYegSRDwf9zK025qTu4Mc9pNWHbM2vqjLtn7WBpuJA%2Bw%2BTfIlzSXFdXcE7XL%2BnGCoAW1Wp4Q0TIcwY6l0bHYm3WLNhw7O1aac0rG%2BsbRV%2BOuSldeRJeV5WmWutIUa44XF1BrCjOZfzk%2F%2FZhd9NpbOGz5%2B9IUkAlnU3FTLnRf3BK2jdQQuRcyHCENg3oWTfww%2BFb4SPHszJ451dW022D8peVoyPSRQgIpU0nuhvpDuClFnUflFXMDnEuSPiIiPUs0EjKOH8Yy0rDjJniLvp%2FE8wgMMI%2FL6MEGOqUB%2FrLy%2B4w2W1ofb77A4km0qPwMWpswSnslo%2Fstf45IOAarLUpDa1JtIpdCJaZvFgroBZTqqnNRoIc8i1QL%2BB%2BMbAh4CsDW65L%2BGYaUA9M%2FOAgJeV8o15EPlGVHoP0KSHygyztkb4%2FWFLnftfO8zIhfM1eoL6A8%2BlsbJR3pUjHjZ%2F9mD3tWcyD%2FMUjVzV25djvkkKKQg%2Fpr%2By02MpQIZ2Gn8ZxYvy8p&X-Amz-Signature=42891ca8f80ea5983e6aa699690efaea815993a7eaf8ef4e3deb18cc279cbfd7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DT322AV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUsAj%2BvUe%2BVrbA3fbRd5VKiQ1ApZMI4G5OWFbvo1s1gIgf7dyoP9k%2BMdogydob8N8xmng%2FY4sxu7OV3fQRb%2FgZx0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhaas0FNhywPXkmNircAwnHIsTyjjficRtD%2FylmwZpIZaPM4YxjKbziHcEqf3Uansxrk%2FQcL7yi8zPBA%2FSyWcgGRxlQTvSH4pA76GyGa14lTG8BskoUcLYavem8LWsukt2Bp%2Fe8IC6waex89iQkRz0EiEMfY%2FLZLXNRoHcPq4frn2263XJj2X%2BYs8IY%2Bc4AEk8zDdqpjAgn9n1w3x9RyRBPlkBlUrNu8ndmTUugZ6kZUdcMvsvOJxNnhVBEpLL2SDHHI8kinRwYOgPLZsV9IFP%2B565CZfIOBtvCFBqAe7zd1%2BfC%2FmqruMN5%2FSgz%2BpatJ9aK390RG2QtJd5vGrUGPT6j04wTV20MrZzYq7MhIc6c%2FtIU%2BpiGeH4UhYegSRDwf9zK025qTu4Mc9pNWHbM2vqjLtn7WBpuJA%2Bw%2BTfIlzSXFdXcE7XL%2BnGCoAW1Wp4Q0TIcwY6l0bHYm3WLNhw7O1aac0rG%2BsbRV%2BOuSldeRJeV5WmWutIUa44XF1BrCjOZfzk%2F%2FZhd9NpbOGz5%2B9IUkAlnU3FTLnRf3BK2jdQQuRcyHCENg3oWTfww%2BFb4SPHszJ451dW022D8peVoyPSRQgIpU0nuhvpDuClFnUflFXMDnEuSPiIiPUs0EjKOH8Yy0rDjJniLvp%2FE8wgMMI%2FL6MEGOqUB%2FrLy%2B4w2W1ofb77A4km0qPwMWpswSnslo%2Fstf45IOAarLUpDa1JtIpdCJaZvFgroBZTqqnNRoIc8i1QL%2BB%2BMbAh4CsDW65L%2BGYaUA9M%2FOAgJeV8o15EPlGVHoP0KSHygyztkb4%2FWFLnftfO8zIhfM1eoL6A8%2BlsbJR3pUjHjZ%2F9mD3tWcyD%2FMUjVzV25djvkkKKQg%2Fpr%2By02MpQIZ2Gn8ZxYvy8p&X-Amz-Signature=a6e29d541ceef24b8919003630755a0a3892bd3fc885e4936a171f2eded76e32&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
