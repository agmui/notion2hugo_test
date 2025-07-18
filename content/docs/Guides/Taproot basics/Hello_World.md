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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FYHZRC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAIOSPUd2caAKaCQUdYXjDcez23lpL4szu3DzDw8%2F6u0AiEA7VH7bzU2SfhPEDNxjVFTTd82dWzrkLaYSBxZ8PrH1%2FUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnCccgrzrdyJ5clCSrcA50s0ubUSNiFZd6R11YUj2ZR9WUk5ytNZo4jgO85GfNog0kQexMTr2nJLEtY1Rz44uFuXOsVB9fCoZeO643JDgvIWvVkvxUToHZPJVKolcCX2OKLsHKJjiDOMHEaqB86a7POI1aVZICW6LHXBhF2T%2B2YcqZz%2BbKKZsquI3RJlZQcU2GgTUJ06CKEGdYckg7uQlXKa7VTaTwAKg8ovqwmRZEdUmnMtBqHWdo2l5cRUgkz%2BefJFW3t7XcDPUx%2BrkBZo35KaGXyyodqHtgNuREpwcEdC5H4z5RgE16MeExAhvEGKuRJGwtuQ3sUmo%2B6Q9ywu73pFB%2BWMszG6rTbjx9Wn41gtBcMVj9lRw8GcDv43ONlqc4rsqjxAXYBxy7KFibYb0eRXGjv4V1mzFumIpbfObfXK2EomGB3cO2l8WPfp4Eoc3e6lv0BOlLOMbQx%2F4gxFdTLI%2BmioZuEAOhDuZpAM0kOx2PoXmBVLYfaMdrWt4dEYkHS4ywljwmdKKfoih1s99M%2FSGRH%2Bq0XcexOMUA%2F8iVYzIr28FBHCY3c4iH3u2HxlE6gzZD0Zu3AhHbnLjjeyGr7348NJEg%2B8GmEh6mGMYGI7zqf1Fchy13gankeH5jcVS85qlQCOLq3xazRMJ%2BK68MGOqUBwKD0bTTH2veFlvH921w0uM%2FYukiow7C%2B7iUCNbAh%2B2pG98cgCrzUiN%2ByfhsS5BTMmmRThO%2Fa31Hpt5sc2eup%2Fjwnvy1d3EPxULTPY%2FHKTzbOpl8swxIsEIBLRBo7mZMCVv3WyoIpsS%2FjXmU0BBbPx925VTZ2i%2F7kFkzoGApK%2BUaVPGeDr8dno6om2kiiPioPpYHer%2B9i%2BOTr5WEFHtRTFKqnOR0E&X-Amz-Signature=053291860421e8347ef9d0827ff0e9e2191e57d29e30bcf43895428f0274a9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FYHZRC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAIOSPUd2caAKaCQUdYXjDcez23lpL4szu3DzDw8%2F6u0AiEA7VH7bzU2SfhPEDNxjVFTTd82dWzrkLaYSBxZ8PrH1%2FUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnCccgrzrdyJ5clCSrcA50s0ubUSNiFZd6R11YUj2ZR9WUk5ytNZo4jgO85GfNog0kQexMTr2nJLEtY1Rz44uFuXOsVB9fCoZeO643JDgvIWvVkvxUToHZPJVKolcCX2OKLsHKJjiDOMHEaqB86a7POI1aVZICW6LHXBhF2T%2B2YcqZz%2BbKKZsquI3RJlZQcU2GgTUJ06CKEGdYckg7uQlXKa7VTaTwAKg8ovqwmRZEdUmnMtBqHWdo2l5cRUgkz%2BefJFW3t7XcDPUx%2BrkBZo35KaGXyyodqHtgNuREpwcEdC5H4z5RgE16MeExAhvEGKuRJGwtuQ3sUmo%2B6Q9ywu73pFB%2BWMszG6rTbjx9Wn41gtBcMVj9lRw8GcDv43ONlqc4rsqjxAXYBxy7KFibYb0eRXGjv4V1mzFumIpbfObfXK2EomGB3cO2l8WPfp4Eoc3e6lv0BOlLOMbQx%2F4gxFdTLI%2BmioZuEAOhDuZpAM0kOx2PoXmBVLYfaMdrWt4dEYkHS4ywljwmdKKfoih1s99M%2FSGRH%2Bq0XcexOMUA%2F8iVYzIr28FBHCY3c4iH3u2HxlE6gzZD0Zu3AhHbnLjjeyGr7348NJEg%2B8GmEh6mGMYGI7zqf1Fchy13gankeH5jcVS85qlQCOLq3xazRMJ%2BK68MGOqUBwKD0bTTH2veFlvH921w0uM%2FYukiow7C%2B7iUCNbAh%2B2pG98cgCrzUiN%2ByfhsS5BTMmmRThO%2Fa31Hpt5sc2eup%2Fjwnvy1d3EPxULTPY%2FHKTzbOpl8swxIsEIBLRBo7mZMCVv3WyoIpsS%2FjXmU0BBbPx925VTZ2i%2F7kFkzoGApK%2BUaVPGeDr8dno6om2kiiPioPpYHer%2B9i%2BOTr5WEFHtRTFKqnOR0E&X-Amz-Signature=46808934cb4f9653020af6c66c8d1231229fce52474cb7cc17214827efaa3ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
