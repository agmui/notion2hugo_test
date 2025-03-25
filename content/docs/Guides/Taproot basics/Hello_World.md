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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KADIIFI%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGsoVPT6QVpJd6N6IKMEDvc%2Bt4wFMsMF4mgKO5i525tAiB29qoDUcJjTPmPQuQpm6L15W%2BDYX4FC0AVBRIGTjFwdyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMScC3KZuhmBI%2BhzVkKtwDiWHSziHaxGqeVbBo80lHpsD3AW0cbo3g3wRczYTb6b3Z97iRp6TQXXN4MGn2Y%2FAfNBf%2Bbf%2FkxkD8G80intYINogw7Y%2BjuaoxNFXlWDoCYDGS4UgQIbUX35n2PmMgHD2FMupR37LfJrCmj%2FM1o27lZZJkeFlQCBaKLMRqLwtlADiv7XMpwLgHTLgElxo1flOoyae38kCwHPdwe8JpQKB9tEod22BrK75LG6e1YrX7eHPjhWG5oRtDAD9nDwjA9A3LIOQU15oEUTSmbJ3CisLsTlz6xIqFSy1XoToynwYdNAp3hjyRI9sy%2B1jU0sM7zghdYFvxJRc9rZKWNkeFgVfSFO4Xk%2B9ksZ9LHg3Y%2FzNtCdI2dVrS9FtVYYd8svxrwrV6g9glcuEUobjkwBWNVNEVoa%2Fs9kcvFwr2hMjbn861WJXSGmq5tEYATZGeHc%2BgOOmyOHzKchm53a7lvZo%2BaGxU71u7xv6udyXOgefQFJvq1bIYUc6FXxmRKQUSQ%2F3mI5fe7ZudHvMy37ufLJAhiP%2FeDmJOAq4UgbIEOi6XkIfYIG0yyT5aVBrOiE%2BHnLX38syaJBIke9oO41zI5kPCLXzdOIiYNcGBDXvNN2WTGsF%2B0YD7NA5cm5z7mtoB0G0wva%2BJvwY6pgEEUfMBB%2B1z8gO1jWxRtl%2FG1aoBkm6c1g5LJQrsCWj3XKEsNAZz2hjoeukBxX6FiuXK%2BOUanhCCooPa1oMzwSOjGu4cDqmXYWYUwfTTAZHuGA6%2Fy5fdRJEYf%2BrewGBA8zzs2G3w%2FtqYATQ4yBsngkCgpouDYAl8TEVDugAlRCtAXUks6xbEqeaLeOkfoqGLF0qKhWq8FymQGLlyHnk%2Br3tbrZeoxnud&X-Amz-Signature=1f4d6be39be95c7afdfb2bb85a1a0244ad891163017864f4876fec397bb141bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KADIIFI%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGsoVPT6QVpJd6N6IKMEDvc%2Bt4wFMsMF4mgKO5i525tAiB29qoDUcJjTPmPQuQpm6L15W%2BDYX4FC0AVBRIGTjFwdyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMScC3KZuhmBI%2BhzVkKtwDiWHSziHaxGqeVbBo80lHpsD3AW0cbo3g3wRczYTb6b3Z97iRp6TQXXN4MGn2Y%2FAfNBf%2Bbf%2FkxkD8G80intYINogw7Y%2BjuaoxNFXlWDoCYDGS4UgQIbUX35n2PmMgHD2FMupR37LfJrCmj%2FM1o27lZZJkeFlQCBaKLMRqLwtlADiv7XMpwLgHTLgElxo1flOoyae38kCwHPdwe8JpQKB9tEod22BrK75LG6e1YrX7eHPjhWG5oRtDAD9nDwjA9A3LIOQU15oEUTSmbJ3CisLsTlz6xIqFSy1XoToynwYdNAp3hjyRI9sy%2B1jU0sM7zghdYFvxJRc9rZKWNkeFgVfSFO4Xk%2B9ksZ9LHg3Y%2FzNtCdI2dVrS9FtVYYd8svxrwrV6g9glcuEUobjkwBWNVNEVoa%2Fs9kcvFwr2hMjbn861WJXSGmq5tEYATZGeHc%2BgOOmyOHzKchm53a7lvZo%2BaGxU71u7xv6udyXOgefQFJvq1bIYUc6FXxmRKQUSQ%2F3mI5fe7ZudHvMy37ufLJAhiP%2FeDmJOAq4UgbIEOi6XkIfYIG0yyT5aVBrOiE%2BHnLX38syaJBIke9oO41zI5kPCLXzdOIiYNcGBDXvNN2WTGsF%2B0YD7NA5cm5z7mtoB0G0wva%2BJvwY6pgEEUfMBB%2B1z8gO1jWxRtl%2FG1aoBkm6c1g5LJQrsCWj3XKEsNAZz2hjoeukBxX6FiuXK%2BOUanhCCooPa1oMzwSOjGu4cDqmXYWYUwfTTAZHuGA6%2Fy5fdRJEYf%2BrewGBA8zzs2G3w%2FtqYATQ4yBsngkCgpouDYAl8TEVDugAlRCtAXUks6xbEqeaLeOkfoqGLF0qKhWq8FymQGLlyHnk%2Br3tbrZeoxnud&X-Amz-Signature=3c1e8c7a5848d4a515cff865cc52a84afbbc5febf9126eef5c11046249b9b772&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
