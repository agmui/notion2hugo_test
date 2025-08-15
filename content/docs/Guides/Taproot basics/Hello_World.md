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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVWMG3B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIG7sOiMRMjLK0SiuAoXAlpqzAo4s3XVIizbYyK43JVLEAiEA0pfZjZVr7yhPaTvQPrPrG0WO9L300obOCFFJBr3i7Dsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDClOiJsgqmGejboD8ircAzSH0GjEEl%2BJWSjvwEkrbRhDZZfgVmEFTcVgmblFOjuEFcUWVxyXFga9N9CR2lfgjgcmVp3CmkBzcL1zVSSpAJVFMrdt6%2Fmc5bQStSxUf%2Be1wVXQ1D%2BLD0r%2FV7PY%2BtbGCpKAYoofazXOkEXEfDsMeg88tpNjE%2FcAnNiBe3xqGPIqAU5ejYG7XVXChBfpEUIDFEac4WIrIw3iXQ1hPej8e%2BP6kFK2RKwkOiS8utEtmP0WvnGSy5QGjv3w6QR0hA%2BJePbCP8qmJq4bDJmPJiI7ID0%2FZ2DIGUmbNP%2FNpQZcAQneGv2dkwxpq%2Fe3lhSIBmCj7vycQNBGILP0tKFnjxAeMPFOqBmFiCrAPGuYNxVTmOymFKdfxuKhCGuHsSRIhZKVhWBznbta%2BB19NW4W4ruCem40a07ienBZ7v8%2FoHVrAec%2FiybgHLvFTG%2FHNVuXET6GdFYbLleKdl6jcsWSEJBTvEkf6WKFyHw4K5hnL4CHBcrV6Cc2gAQKa8OWr5Y86Ws2MxB716qiRbdNsktQlwOEfuMCzGMDl8bzcsifRdpl3qnzeecfWA2WatGkDOv2Lkhjcnw2u4dGN9S0a7mdReukY7tg7Uj6ewLoO1dZMqvjLFNM5Dum5XOlh3IQtl6BMNbK%2B8QGOqUB%2BOmzv4a4HMcIfnkeTT96c49Bu2AFKvl4c1NBleLH5f5b%2BX9KEVKXdxTKeKskb5xU8D6Du4cav5aLbKEmw%2BGuILBUteq1%2B3x1LMy9leWfcL5ZGldvRILP%2BfvGLpDitAfIWXSH46Q1SK4Swn%2BycWj70rhp3rfJsYRtm016g26ehh%2FRaCJZwLBbcnrP0gOSRaN8F7raVTrIKSCzaHSr7iweh1Ii5PfU&X-Amz-Signature=7765b3d4e45bcc8ad626f72dfa9037c2830f0400ad45498ef7f5b9b42311d6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVWMG3B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIG7sOiMRMjLK0SiuAoXAlpqzAo4s3XVIizbYyK43JVLEAiEA0pfZjZVr7yhPaTvQPrPrG0WO9L300obOCFFJBr3i7Dsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDClOiJsgqmGejboD8ircAzSH0GjEEl%2BJWSjvwEkrbRhDZZfgVmEFTcVgmblFOjuEFcUWVxyXFga9N9CR2lfgjgcmVp3CmkBzcL1zVSSpAJVFMrdt6%2Fmc5bQStSxUf%2Be1wVXQ1D%2BLD0r%2FV7PY%2BtbGCpKAYoofazXOkEXEfDsMeg88tpNjE%2FcAnNiBe3xqGPIqAU5ejYG7XVXChBfpEUIDFEac4WIrIw3iXQ1hPej8e%2BP6kFK2RKwkOiS8utEtmP0WvnGSy5QGjv3w6QR0hA%2BJePbCP8qmJq4bDJmPJiI7ID0%2FZ2DIGUmbNP%2FNpQZcAQneGv2dkwxpq%2Fe3lhSIBmCj7vycQNBGILP0tKFnjxAeMPFOqBmFiCrAPGuYNxVTmOymFKdfxuKhCGuHsSRIhZKVhWBznbta%2BB19NW4W4ruCem40a07ienBZ7v8%2FoHVrAec%2FiybgHLvFTG%2FHNVuXET6GdFYbLleKdl6jcsWSEJBTvEkf6WKFyHw4K5hnL4CHBcrV6Cc2gAQKa8OWr5Y86Ws2MxB716qiRbdNsktQlwOEfuMCzGMDl8bzcsifRdpl3qnzeecfWA2WatGkDOv2Lkhjcnw2u4dGN9S0a7mdReukY7tg7Uj6ewLoO1dZMqvjLFNM5Dum5XOlh3IQtl6BMNbK%2B8QGOqUB%2BOmzv4a4HMcIfnkeTT96c49Bu2AFKvl4c1NBleLH5f5b%2BX9KEVKXdxTKeKskb5xU8D6Du4cav5aLbKEmw%2BGuILBUteq1%2B3x1LMy9leWfcL5ZGldvRILP%2BfvGLpDitAfIWXSH46Q1SK4Swn%2BycWj70rhp3rfJsYRtm016g26ehh%2FRaCJZwLBbcnrP0gOSRaN8F7raVTrIKSCzaHSr7iweh1Ii5PfU&X-Amz-Signature=0b57042a99ee3c0be9260d26719c5df6056e997b1faa3cc2268529b7ed0fae41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
