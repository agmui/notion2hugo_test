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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPWDRJR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDET6Pyd94wmXYLEpDLUfJFDHNsWzPTHPYeqT%2FrYK8xSgIgBhlQwpNiZreNUE8O5yzr8Tk7clxV5Z95321FAdeBwqEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqTUyWsX3BNyJxdYSrcAze5jyDupz%2B4%2Ba0Nl0gFlo9atgIBFfUoe1XzEaR4EBgDAOtkbujoJsgh8vY%2B%2BpzETkqofIi7ayHRMclFOatVICxq9hbu2Daiu6xtosz3LjMXlNo9891U9gMJVAsatne6EQ%2F3foOuMqR3dg030GJu3TuO0GEztqwu4AThe1d2x7CZeBc0BQ8MnAX%2FDKLYJ12CQWEDVVKUEfeGiQqPpxdd3Pg5fFcvWnEhyiF2MHwJaa15ykSjrNgh0wxyp6JnlyWumfvVVLSFfhgs1zXLY1cG%2B7DGrAI8T4TNqDum2Vr%2BjrR%2FqalTp5XxxCM9s1IGHU7j%2BSGMAJB2g6vLxTz2%2FYcXNLtMZE2TOgxalGSnAYWevJeG8ka65X6LnIrzIodw5%2FCMCxxyfMUfX92iHZmQ0kFoKxDaup7pj%2F3AyUuoNChIWcL9W3L0aE%2FsLWiCGt4pOe1qu5lz6qrs3nTzgskhAYiXG2lDHBZdAWNhlEsicf1sGBVHtjnLWOxm22kYbOQpsMkJ3hJX%2FQ91vBkeWvthHjJoRcqDP9DdFPZomEIv0EHfsH4vm7xGZB00Zc5865NJIZfTFdAEVDTJA%2FoddR3chJn8tZ2hAuD0mf6fH03QUUB%2B5mHqUZkkpEbck1GY1%2BKEMJPbl74GOqUByCLYv8reRcZopKSnE2tGuwA%2B6msARJMiom7bp48z%2FopDXx%2F6O0Ji%2F5gIxiHO6wKh5%2BVcvHhMYijM7K%2BuHkDj58gcbFaNjKRlMgXVVZuaJbkpRBq8B7rYoZvclE0SXyGzKrvcjNhayqGB2lMiS%2FivPPdGuO3WyaXpL1OojRteOWNSWWaYaDo9qYkddQviUGIb8b1ts6LscTVo553IsDuYwdFJ0pIQ&X-Amz-Signature=7ad7cb44917cbefdda7aad10719c75f18478343fed491931d1b92acc9689d7db&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPWDRJR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDET6Pyd94wmXYLEpDLUfJFDHNsWzPTHPYeqT%2FrYK8xSgIgBhlQwpNiZreNUE8O5yzr8Tk7clxV5Z95321FAdeBwqEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqTUyWsX3BNyJxdYSrcAze5jyDupz%2B4%2Ba0Nl0gFlo9atgIBFfUoe1XzEaR4EBgDAOtkbujoJsgh8vY%2B%2BpzETkqofIi7ayHRMclFOatVICxq9hbu2Daiu6xtosz3LjMXlNo9891U9gMJVAsatne6EQ%2F3foOuMqR3dg030GJu3TuO0GEztqwu4AThe1d2x7CZeBc0BQ8MnAX%2FDKLYJ12CQWEDVVKUEfeGiQqPpxdd3Pg5fFcvWnEhyiF2MHwJaa15ykSjrNgh0wxyp6JnlyWumfvVVLSFfhgs1zXLY1cG%2B7DGrAI8T4TNqDum2Vr%2BjrR%2FqalTp5XxxCM9s1IGHU7j%2BSGMAJB2g6vLxTz2%2FYcXNLtMZE2TOgxalGSnAYWevJeG8ka65X6LnIrzIodw5%2FCMCxxyfMUfX92iHZmQ0kFoKxDaup7pj%2F3AyUuoNChIWcL9W3L0aE%2FsLWiCGt4pOe1qu5lz6qrs3nTzgskhAYiXG2lDHBZdAWNhlEsicf1sGBVHtjnLWOxm22kYbOQpsMkJ3hJX%2FQ91vBkeWvthHjJoRcqDP9DdFPZomEIv0EHfsH4vm7xGZB00Zc5865NJIZfTFdAEVDTJA%2FoddR3chJn8tZ2hAuD0mf6fH03QUUB%2B5mHqUZkkpEbck1GY1%2BKEMJPbl74GOqUByCLYv8reRcZopKSnE2tGuwA%2B6msARJMiom7bp48z%2FopDXx%2F6O0Ji%2F5gIxiHO6wKh5%2BVcvHhMYijM7K%2BuHkDj58gcbFaNjKRlMgXVVZuaJbkpRBq8B7rYoZvclE0SXyGzKrvcjNhayqGB2lMiS%2FivPPdGuO3WyaXpL1OojRteOWNSWWaYaDo9qYkddQviUGIb8b1ts6LscTVo553IsDuYwdFJ0pIQ&X-Amz-Signature=d9d51dab1c90cc9494f3097289cf3ab9083fb8b31069db897652bfd8fa336fac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
