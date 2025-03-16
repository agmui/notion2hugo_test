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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOMV7BE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWalJEuS0gyMtkwV%2FiP9voq4N4TIVoxjd8Ca2B39f%2FswIgY8oXuLUZlywm%2FqEMoZ6E3uoWmdQIm1njqULZq3GO%2F8Iq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJIpkXsm6qrghQX0rSrcA%2FGQh%2B%2FqLYcLenkI7QO8TvJH5M5fvy3V3igvacCMKaxVvNEtin%2F%2BSI%2Bxp9DFZQpaQRVJ3Xt32p0pj%2BqY%2F%2Bjj%2Fe8cyK2CBIFy637QlctP7KPq%2BkmdA1iGDaIggncoPnZn%2FPFOSDBFZwtnI%2BDu%2BOCf5bLxL5xEvP11186klwFTwosL7wE0xj8VVWsOa6dN1Ff4yv3W6HZLzm%2FwcB7gLdLS9GgtJhwSeGquKzWDHgl9U7YPiv94kxu21rAUtU3dutqEiQHGutlB6hE5VjP9zR%2B64R2fDIzKbRF4u7z5OX%2FqEMwTGlOFj7YAXHwjyPYrrhBy5ay4JlSz7ZW%2Fm9b3LQUFtztHY83PVUVnc%2F1kjib%2BfUxU7zPSEb7MKr%2F916OMXXeXprDQG%2BBe15loEJCTRIvS79ZP7MhaTWGYr2uZmjUaUTquvaxsAEB951k1Y%2FBMpwjmWhkw87jmkCzNOxnX9tgX13A9m0ZhCDcX8vDSMaLqQIPlb2g%2FkkoQaXm8lOCdqO3R5qoWWpnQbdI08XTNQJvMbzOnsZLnuTdOtw73yVpyOrmJ5iGJQxSXgD4hfOMMINWFHHxa22rJFXknI106V3F2fDSaTEeoQl7i2h%2BHPuOlLVI%2Fjr%2FUUuF1EAwpjpKwMLXe274GOqUB2yx3QYQNUxjBFM9O0KT0YTxOxhBUvdYS7k0hCTGpTTgEQr25DyYRDUJAVuYppY3QK1m4LBXzNmN7GnuZ86y0T7yF%2Bwgq34n2BgKbEknZjQhQKLywpCevsmZRp%2Ff0G2NIhkcv1msLdOowp3ndU90RgcaMXpYCeP2Y%2BJ7EhSunhj8G7Y2Qh4153ApD5KYqVPAmYR3GxXJl7sE%2Fyul6Kz3jJ47ddE%2Fv&X-Amz-Signature=1b4ed43189ab9f35963858dc59bd749760ab44f0683f144fb6c68e380c41cc02&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOMV7BE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWalJEuS0gyMtkwV%2FiP9voq4N4TIVoxjd8Ca2B39f%2FswIgY8oXuLUZlywm%2FqEMoZ6E3uoWmdQIm1njqULZq3GO%2F8Iq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJIpkXsm6qrghQX0rSrcA%2FGQh%2B%2FqLYcLenkI7QO8TvJH5M5fvy3V3igvacCMKaxVvNEtin%2F%2BSI%2Bxp9DFZQpaQRVJ3Xt32p0pj%2BqY%2F%2Bjj%2Fe8cyK2CBIFy637QlctP7KPq%2BkmdA1iGDaIggncoPnZn%2FPFOSDBFZwtnI%2BDu%2BOCf5bLxL5xEvP11186klwFTwosL7wE0xj8VVWsOa6dN1Ff4yv3W6HZLzm%2FwcB7gLdLS9GgtJhwSeGquKzWDHgl9U7YPiv94kxu21rAUtU3dutqEiQHGutlB6hE5VjP9zR%2B64R2fDIzKbRF4u7z5OX%2FqEMwTGlOFj7YAXHwjyPYrrhBy5ay4JlSz7ZW%2Fm9b3LQUFtztHY83PVUVnc%2F1kjib%2BfUxU7zPSEb7MKr%2F916OMXXeXprDQG%2BBe15loEJCTRIvS79ZP7MhaTWGYr2uZmjUaUTquvaxsAEB951k1Y%2FBMpwjmWhkw87jmkCzNOxnX9tgX13A9m0ZhCDcX8vDSMaLqQIPlb2g%2FkkoQaXm8lOCdqO3R5qoWWpnQbdI08XTNQJvMbzOnsZLnuTdOtw73yVpyOrmJ5iGJQxSXgD4hfOMMINWFHHxa22rJFXknI106V3F2fDSaTEeoQl7i2h%2BHPuOlLVI%2Fjr%2FUUuF1EAwpjpKwMLXe274GOqUB2yx3QYQNUxjBFM9O0KT0YTxOxhBUvdYS7k0hCTGpTTgEQr25DyYRDUJAVuYppY3QK1m4LBXzNmN7GnuZ86y0T7yF%2Bwgq34n2BgKbEknZjQhQKLywpCevsmZRp%2Ff0G2NIhkcv1msLdOowp3ndU90RgcaMXpYCeP2Y%2BJ7EhSunhj8G7Y2Qh4153ApD5KYqVPAmYR3GxXJl7sE%2Fyul6Kz3jJ47ddE%2Fv&X-Amz-Signature=e60e0264f01894a271574575a3732c6b8a8d116ae242a45f023afde9c7796d60&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
