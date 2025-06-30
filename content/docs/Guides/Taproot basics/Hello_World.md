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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEPHANAK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsutdwtTGhxWabaaeC%2F29ThAqz2mI4HJXnnPZfPhMeRQIgbGYjRFW64eJ%2FwEv68gS%2BwVGyPxM7s8TKqMd13QyCAz8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuut10CMmcQoApwBSrcA%2BLk5RSYTVCpH6IsIgTICQPeLHVhrDxDIdNEGv0suAARTMLU9LNenDveIC6mqo3%2FOdEkEwSiODzWD7vTr7fey0O5XK1%2BeFQDbxvjPZQjSRrgdpihFL5mYCYJisYd9qEYauxuqA0lAbWbYi2CckTX5TyrLse6c4ZJLAD7bspmQ%2BVvQS4Pdh0l%2Fy%2BQomDSbyquzQH54cYEo91lasPFgXyhybZ8JeiNE4BqGsVjsjrjGPKX%2BfSmcqO7oS%2BvYAnFDciPxeIVBsI6O7a3LpFnM%2BMoNIjTpV%2BwVvh5gODfyRdQ6z4b0PDSL8Rho3GfwDw3YewVMQ4%2BtBnXUfv7dkGvwYQoU2%2B6aJqdUAX5bw307%2Fdk8Hk45GqeKogO1grXsYMauJ6Z8kEXYOngh1vtvKxqcznDqMyuuTMBEpxWj29mhe6yfNcs204iUfyjWrz1dAT1xAVc8I8K6HqMEHPF7%2BwztTlK3T1mTT8DBu5c4ifQlkcvhGbzKBF51w7H%2FJUPlhRWJ8uwoRIikMC%2FG8%2FFgB0%2FpOgQ%2BogQgnFCZ5Mx%2BkWQ6TwJvCyrolmCGbJ7dyt3FTBBGa27yq40OxCQQ0m1Tuch%2FESZqe2olY%2BSoKzFoB9pHRw6aNmBQV7fxQUUpqE8AGHKMKXziMMGOqUBLRA%2BNMfEk4rKUbPADhubv0xx%2BcAyZOcDtP7O0WLvQA0AMvxwxJv4Ck9GGLs%2F7fFfj3%2F1bYm47bkdE9lnF7SWL0af3NPmkIWyUrnlKWXa3Q%2BLzU%2BvOXiRwUO0yRVCvrAeh8uIyh5%2Bal%2F4Eu849hO4tDaxRkCDhbVY%2BNKuuduusvzgahoD70h1DW2OKJ21vfhZMgHSFjgai112n4XnZdsn%2Fabq5vlz&X-Amz-Signature=f569fc96934ef31be18d90b8d178c6700530f81a79465a747f3d01f24cdd39be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEPHANAK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsutdwtTGhxWabaaeC%2F29ThAqz2mI4HJXnnPZfPhMeRQIgbGYjRFW64eJ%2FwEv68gS%2BwVGyPxM7s8TKqMd13QyCAz8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuut10CMmcQoApwBSrcA%2BLk5RSYTVCpH6IsIgTICQPeLHVhrDxDIdNEGv0suAARTMLU9LNenDveIC6mqo3%2FOdEkEwSiODzWD7vTr7fey0O5XK1%2BeFQDbxvjPZQjSRrgdpihFL5mYCYJisYd9qEYauxuqA0lAbWbYi2CckTX5TyrLse6c4ZJLAD7bspmQ%2BVvQS4Pdh0l%2Fy%2BQomDSbyquzQH54cYEo91lasPFgXyhybZ8JeiNE4BqGsVjsjrjGPKX%2BfSmcqO7oS%2BvYAnFDciPxeIVBsI6O7a3LpFnM%2BMoNIjTpV%2BwVvh5gODfyRdQ6z4b0PDSL8Rho3GfwDw3YewVMQ4%2BtBnXUfv7dkGvwYQoU2%2B6aJqdUAX5bw307%2Fdk8Hk45GqeKogO1grXsYMauJ6Z8kEXYOngh1vtvKxqcznDqMyuuTMBEpxWj29mhe6yfNcs204iUfyjWrz1dAT1xAVc8I8K6HqMEHPF7%2BwztTlK3T1mTT8DBu5c4ifQlkcvhGbzKBF51w7H%2FJUPlhRWJ8uwoRIikMC%2FG8%2FFgB0%2FpOgQ%2BogQgnFCZ5Mx%2BkWQ6TwJvCyrolmCGbJ7dyt3FTBBGa27yq40OxCQQ0m1Tuch%2FESZqe2olY%2BSoKzFoB9pHRw6aNmBQV7fxQUUpqE8AGHKMKXziMMGOqUBLRA%2BNMfEk4rKUbPADhubv0xx%2BcAyZOcDtP7O0WLvQA0AMvxwxJv4Ck9GGLs%2F7fFfj3%2F1bYm47bkdE9lnF7SWL0af3NPmkIWyUrnlKWXa3Q%2BLzU%2BvOXiRwUO0yRVCvrAeh8uIyh5%2Bal%2F4Eu849hO4tDaxRkCDhbVY%2BNKuuduusvzgahoD70h1DW2OKJ21vfhZMgHSFjgai112n4XnZdsn%2Fabq5vlz&X-Amz-Signature=1316610ee482260449721b2d1fab9e1151bc1072b7510df90a11fbec23f9a8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
