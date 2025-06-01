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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTXDUBB%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEO5czy3pe7N5%2Bb0zYjjDrhOxdNDuAYtQfvJcFTxsonKAiEAxiPECkwEwHdDKqRxPU2WvG02aVKPusS%2BVKmOHPK%2B%2F%2FYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh%2BbrE1OKJBYiAWvircA0ExyJFIy5JjS%2FA0y2plrSXfvwqjOyFEdCchIPMmSMAqSHfeM4w4%2FOD%2F6Y4I8%2BIwf%2FxWFznKRqGrXVLSdmBcYovmqZFc683eq7UCfhcq10Xb8pB%2Fk7RKL4YZutnEImiLb3Z1D27nm4plErKVI0BQSpZRr1WLtWHH5Kl5cIpXrqJGMkPLRhBDuSxV8xKpK66yrvjiBWN3OUnJphjGHRStFIfwn5dIYTVqj5E%2F3PYstxkkI4NLEwqRsfGdj%2FxhNTqKU1AB0HaWGbo%2F%2B3oefQNRKZdrUQkLWDPTMdcXYu7x%2FzG2XOlmb8efR07sJLRhCmyt6GaNaG67FNa2RNbYSS%2Fev5VA63kf8LztJDgl9z%2Bu3R0DicqS7bTcfbQi0udqp%2B129uKCeWA2K2erKr2h%2BvEDJEY8t2YFVaZoPJ0nGVrCyVLb%2FBuWL0hGBdNoN7ltU0PJOE2Ne59ZpFA7r8k%2BeCpgl7C7oje8HMkEXmnvmV2LW%2FTa683YlRkrW2KKiLT82HK9Udu6AZEPZT0dPwv2MnwspGKS3C4SDU5b%2BbS9%2B80snasidarwv%2FDEQNGnT094hg1hZ8jnQofnfcU9jDiKCcXbzhgWe8OEUmXS0JslP49hmDbNbrt2ylBDEA5N91H%2BMIiG7sEGOqUB1PoIlCFOttH%2Bx61ragrmVEkWxckURFpRqgNyfTb9PJyYStFzedbZlW8a82dxJqz7iidpyMuNTtRYH%2BWaNsbOURrP3zk3QjVtPouMAEcCqDsBRSRSlj4ar4t0RVTlHbxuiEeDLUtJH6mcPHMKtlqoNRKLHtmMF2l2o7Un0ckhblEY%2Fugl5EexqUaKWMgsC7dNjdXj0v36eTEVYIP%2BK3W4Lqzgbw%2Fg&X-Amz-Signature=0cf40302431bab5ffb49cd21e5d4edb514298d22054fb5adbe52d749dbf48e59&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTXDUBB%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEO5czy3pe7N5%2Bb0zYjjDrhOxdNDuAYtQfvJcFTxsonKAiEAxiPECkwEwHdDKqRxPU2WvG02aVKPusS%2BVKmOHPK%2B%2F%2FYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh%2BbrE1OKJBYiAWvircA0ExyJFIy5JjS%2FA0y2plrSXfvwqjOyFEdCchIPMmSMAqSHfeM4w4%2FOD%2F6Y4I8%2BIwf%2FxWFznKRqGrXVLSdmBcYovmqZFc683eq7UCfhcq10Xb8pB%2Fk7RKL4YZutnEImiLb3Z1D27nm4plErKVI0BQSpZRr1WLtWHH5Kl5cIpXrqJGMkPLRhBDuSxV8xKpK66yrvjiBWN3OUnJphjGHRStFIfwn5dIYTVqj5E%2F3PYstxkkI4NLEwqRsfGdj%2FxhNTqKU1AB0HaWGbo%2F%2B3oefQNRKZdrUQkLWDPTMdcXYu7x%2FzG2XOlmb8efR07sJLRhCmyt6GaNaG67FNa2RNbYSS%2Fev5VA63kf8LztJDgl9z%2Bu3R0DicqS7bTcfbQi0udqp%2B129uKCeWA2K2erKr2h%2BvEDJEY8t2YFVaZoPJ0nGVrCyVLb%2FBuWL0hGBdNoN7ltU0PJOE2Ne59ZpFA7r8k%2BeCpgl7C7oje8HMkEXmnvmV2LW%2FTa683YlRkrW2KKiLT82HK9Udu6AZEPZT0dPwv2MnwspGKS3C4SDU5b%2BbS9%2B80snasidarwv%2FDEQNGnT094hg1hZ8jnQofnfcU9jDiKCcXbzhgWe8OEUmXS0JslP49hmDbNbrt2ylBDEA5N91H%2BMIiG7sEGOqUB1PoIlCFOttH%2Bx61ragrmVEkWxckURFpRqgNyfTb9PJyYStFzedbZlW8a82dxJqz7iidpyMuNTtRYH%2BWaNsbOURrP3zk3QjVtPouMAEcCqDsBRSRSlj4ar4t0RVTlHbxuiEeDLUtJH6mcPHMKtlqoNRKLHtmMF2l2o7Un0ckhblEY%2Fugl5EexqUaKWMgsC7dNjdXj0v36eTEVYIP%2BK3W4Lqzgbw%2Fg&X-Amz-Signature=976071e6cd6f0afa8a5ae059fb6b04d0ae2d417b49f6a4a7ac001c018b7de0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
