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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYOESBJU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkjboFPf%2FGk%2BOZEXV3iYIvLQ8uDaM7nMc8rVfr1733xAiAPQT1GpyqchEu5YEWV%2FHdRJF68%2BZNf5vCkhuXLQqaBbCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM6JdKTkJ9%2BE6hd8uNKtwD8DwehKXSxa5LImtrIl0bmC4ZePS8MlK3rcijFDIZyrwK65A8it48ZsbY1doyKh%2BZthXVk%2Bjk3J3vX28LO%2BDnLD4sjBBlAYdiH1rvy1rXR5gD5pd7%2BmzPYhlokfNl8NVOlNOVPjzlF9dWMrY799vv9Xg%2FdqV0Apk4RfZyfDviGARwE0qyA25LRVqGgHQy%2Bd%2FQyp%2F8GKlnfZ0p8Cf6SPS4TP7WAuHjN%2FkqaJzn%2FFpzgkTYUD1%2FRiB9YekajcIEdFF%2FLaR1tHbaN6HDEbhFOgYifZYhR4WLvW5p736A%2FbIdWkD950wzKyjFVnEet0ZKQjwydOaBZ%2FpIzI2z0p2qZox0sTTICb3JvkPbbX8vOVSTkYoQaliAWOU8ubGxiKgAFJtoENsY56JpWVGT7d0NFWQ6YP2Dj9gA4hggOt580ay8c7%2BbZN%2FFmtpzNl25Mx8nIqfesy%2BGmFHXsX5vgFxgkLuy8am1ax0472oG0%2FUgoa3GSXYN8IDSSRF24Kvtv5577RUSfcA89a2gOnoAzTfMlpLQ17gTJm0sBJaaVL0HPLFlDK1hBgy9YD0Drl%2BSvEt7BuHvErMgts1Jb%2BGtN%2BKkAr0%2FoC4z%2Bqd0NMjad8e%2B0Az8fl7fUYbAkvoOtbgXboow%2FeaowQY6pgF%2FwQujLETeKsqTlRmxtpmvI%2F7zpNvi7OaszQa9Oje3WHan31dQPImUio91TKOEMpt8xjlq8nGvva1IXe3%2B%2Blp6elH6qGQEnhhjoIxtm2H7s0ZFC%2B%2Fi5YIoBtWisU0eRekCmPD9AZw39bdp%2BRh1AqNQcN8%2FqOkp7YxlFWCbVdVPfUoS%2BaRvv%2BuDvjbN4%2FTA2LXN9O5yRV7zG70Ei07mhHCYR6LC2bOM&X-Amz-Signature=a7695e083169e53c537ee298c45a8144eacc4dc5b316c9d05bd6246db10b52b0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYOESBJU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkjboFPf%2FGk%2BOZEXV3iYIvLQ8uDaM7nMc8rVfr1733xAiAPQT1GpyqchEu5YEWV%2FHdRJF68%2BZNf5vCkhuXLQqaBbCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM6JdKTkJ9%2BE6hd8uNKtwD8DwehKXSxa5LImtrIl0bmC4ZePS8MlK3rcijFDIZyrwK65A8it48ZsbY1doyKh%2BZthXVk%2Bjk3J3vX28LO%2BDnLD4sjBBlAYdiH1rvy1rXR5gD5pd7%2BmzPYhlokfNl8NVOlNOVPjzlF9dWMrY799vv9Xg%2FdqV0Apk4RfZyfDviGARwE0qyA25LRVqGgHQy%2Bd%2FQyp%2F8GKlnfZ0p8Cf6SPS4TP7WAuHjN%2FkqaJzn%2FFpzgkTYUD1%2FRiB9YekajcIEdFF%2FLaR1tHbaN6HDEbhFOgYifZYhR4WLvW5p736A%2FbIdWkD950wzKyjFVnEet0ZKQjwydOaBZ%2FpIzI2z0p2qZox0sTTICb3JvkPbbX8vOVSTkYoQaliAWOU8ubGxiKgAFJtoENsY56JpWVGT7d0NFWQ6YP2Dj9gA4hggOt580ay8c7%2BbZN%2FFmtpzNl25Mx8nIqfesy%2BGmFHXsX5vgFxgkLuy8am1ax0472oG0%2FUgoa3GSXYN8IDSSRF24Kvtv5577RUSfcA89a2gOnoAzTfMlpLQ17gTJm0sBJaaVL0HPLFlDK1hBgy9YD0Drl%2BSvEt7BuHvErMgts1Jb%2BGtN%2BKkAr0%2FoC4z%2Bqd0NMjad8e%2B0Az8fl7fUYbAkvoOtbgXboow%2FeaowQY6pgF%2FwQujLETeKsqTlRmxtpmvI%2F7zpNvi7OaszQa9Oje3WHan31dQPImUio91TKOEMpt8xjlq8nGvva1IXe3%2B%2Blp6elH6qGQEnhhjoIxtm2H7s0ZFC%2B%2Fi5YIoBtWisU0eRekCmPD9AZw39bdp%2BRh1AqNQcN8%2FqOkp7YxlFWCbVdVPfUoS%2BaRvv%2BuDvjbN4%2FTA2LXN9O5yRV7zG70Ei07mhHCYR6LC2bOM&X-Amz-Signature=f6088fa25e38de6ea0ed9556ee95688239a5c33b07c835409768431e77846cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
