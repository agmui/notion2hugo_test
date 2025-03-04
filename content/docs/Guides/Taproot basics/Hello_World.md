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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677OXV3FL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBry%2F5D6QX60NBsw0WRrB6vVfNjyRyGy0iqMrBBWA%2FHSAiAorlUIoCx4N5FJaLWP1Y575Ij13LgqK67O3ws2RpZlzCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8QSPtiapygLzDxvDKtwDqf%2BJ1o0Gaw7b%2FDMBBUiiFgPyUdMJ4Iddkki7104W9HI9UMk6MoBJU%2BozsKE3XiQhnamheemjh5n0j6EBz4Bchzbf6JX8KeAQp%2Fzlr70HhMn9yiqI2UaoYWNsPtgpsdmCdG7lubeMutr2C9UH9qVApy6umNER6kJ6DRzZWcU2G5golbR3pP%2B3mj56eAmWh0YQqW2DDeBcS812DPf7bd3FvGhMIAX9Axfnh8trSEs12xsQ%2F6VZfRoyfxUsx%2BPwMIoBP67iCrVow%2BvoFBF3ReL%2FtPKS8MW%2BHp1v4Xi80CEx12Ylg8NKNgdtoDNvPaAKjeWqNoThOvr0PJfL3qK4Kx1ccGXP1HectYaSis8H5EHWrgzvwtMSYZZGz7C83PiTNUAMiYj3xp6wsvrTVgnZaRkgZeA1nzG3FBgX1Vclufnwe293tfThDSDt2HFWsLkBWJn7drj3FEE%2FtwT8jz%2BL1sum2llE9sWRKPvYPP7o2Una5DHiJcYP%2FZfcLk6KPpSt4XTroxWaXAU3Gmc1yOQYCWh%2Fp2ten2JvSn7pDUEt2T%2BUxbbAhFJmuMI%2FMvgAMAe5zq41kbEE8Us0%2Bs2MdsVsr%2FqVsUdQbsJGxoFTnNBTkh184Hqc3y1Ws2upwnB3KNEwq%2BqbvgY6pgHZLWZ%2FHDMl1HJPDC3Za6lhVkyCB5yLM%2BB3ByEr2AaeW9no6c1yYu5yKQK9Nn1SirpmzwiUfa6lFJATMz8z5HRy9pEhP089B%2FzNBzVuIPwbcWB1kL9RJCtDG3XTqJuKENNf8fZa%2F%2F8C4PWcMj6uXekbKg5j7H2USKxFtApf5NH2lSbxEJd6x1vwBx3F9AMqEa3weNwfqZmHdUoLN1jeqLu6Ijx%2BcMgW&X-Amz-Signature=d37eaf910d02befde728aa14f3e77c76940e7eb46ce6fee3dbd13ae9772e676a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677OXV3FL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBry%2F5D6QX60NBsw0WRrB6vVfNjyRyGy0iqMrBBWA%2FHSAiAorlUIoCx4N5FJaLWP1Y575Ij13LgqK67O3ws2RpZlzCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8QSPtiapygLzDxvDKtwDqf%2BJ1o0Gaw7b%2FDMBBUiiFgPyUdMJ4Iddkki7104W9HI9UMk6MoBJU%2BozsKE3XiQhnamheemjh5n0j6EBz4Bchzbf6JX8KeAQp%2Fzlr70HhMn9yiqI2UaoYWNsPtgpsdmCdG7lubeMutr2C9UH9qVApy6umNER6kJ6DRzZWcU2G5golbR3pP%2B3mj56eAmWh0YQqW2DDeBcS812DPf7bd3FvGhMIAX9Axfnh8trSEs12xsQ%2F6VZfRoyfxUsx%2BPwMIoBP67iCrVow%2BvoFBF3ReL%2FtPKS8MW%2BHp1v4Xi80CEx12Ylg8NKNgdtoDNvPaAKjeWqNoThOvr0PJfL3qK4Kx1ccGXP1HectYaSis8H5EHWrgzvwtMSYZZGz7C83PiTNUAMiYj3xp6wsvrTVgnZaRkgZeA1nzG3FBgX1Vclufnwe293tfThDSDt2HFWsLkBWJn7drj3FEE%2FtwT8jz%2BL1sum2llE9sWRKPvYPP7o2Una5DHiJcYP%2FZfcLk6KPpSt4XTroxWaXAU3Gmc1yOQYCWh%2Fp2ten2JvSn7pDUEt2T%2BUxbbAhFJmuMI%2FMvgAMAe5zq41kbEE8Us0%2Bs2MdsVsr%2FqVsUdQbsJGxoFTnNBTkh184Hqc3y1Ws2upwnB3KNEwq%2BqbvgY6pgHZLWZ%2FHDMl1HJPDC3Za6lhVkyCB5yLM%2BB3ByEr2AaeW9no6c1yYu5yKQK9Nn1SirpmzwiUfa6lFJATMz8z5HRy9pEhP089B%2FzNBzVuIPwbcWB1kL9RJCtDG3XTqJuKENNf8fZa%2F%2F8C4PWcMj6uXekbKg5j7H2USKxFtApf5NH2lSbxEJd6x1vwBx3F9AMqEa3weNwfqZmHdUoLN1jeqLu6Ijx%2BcMgW&X-Amz-Signature=d1db1482905cb33a4ffc1950ad0011f623eb42b1b368d06de22c2a9c8666644a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
