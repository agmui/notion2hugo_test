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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLYZBHG%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFwm%2B8kabFXbZiHwMewpUSmcPWC70pFlFOojiODGdXjGAiBronivVM6cVqfNK8SAJXUSDtgWlK3TOQFJMg2kHyH4MSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM2L8W5gm%2B%2FXBO7QD2KtwD3Q1lQGEsJJEz2jSj9I3TJ%2FWUddIbkUbCYl3PMQxgZEdi7AwrSHZvCAXdFc5xtKtaGpV8BNZ3mERppM%2F13QrRAsyY1qddpSElh5fOaUMPP4b15glTDsOBxh0%2BuENe4LMf4c51S5vtzGK1CG91hbfzHoJKTXev1w2dsRwGzeY0%2FNrjS3f3P3C545s4wI8m34hhQ14WzYqUoYs0plQleaR2RN9u5eKvOjuZGfemsoL1eyUcJRw3qxurjMvZgB4NxxSC220%2FI7x5hGrlyWQ2JZFh%2Bp8lrJXLpDppfABu%2B0Q7%2FG7coK1YzI3T9KEsQW%2F619J1fyozk2I3mEqvLUL54nbgJwPWQCDzRjQXnPYOXtt3Q4nO1MtYsTRriCvY2Da0taUa7P%2BTEsBOi7t3Nr1ttVVYzAK8Zr1bGUYUYRZSDrA5L0HPmnJQ6l8NCRuJB5hFn23ITnBRRkW39cMXIpB%2FOGM7dRUBWR%2FRYe8CgXF153jPHV0QI9zvreBLjGOLJ1bYeZpW0NY71fAMQm8uQbz%2FXcHqkbGuOhnZECLLvd2ISxZ8CfN%2BCGdy%2FK%2Fy5ebqQJU4fW%2BUislN4OG38U6afBj%2Bmiea%2F8PF2hoNYRPssQn7iIu0fPZ1%2BxnwQME5Xv25gXUw2O%2FVywY6pgGLD%2FCF36XIqDl%2B0tN%2BPmSUdTQqDkvsgAKTRgIzxORuMY3PrO2xmtgl0n2t6EN3qkSKa%2FF%2B3PTfH%2Fo50Iu4NdZwMSMAsgwXjHM0XU5Xndry0kI%2Bv3mlBa7r1JFyGXSSSoqDw8FgbsX05UIBoVGJsJ2Hb88DsfaWltAN%2F%2FJYJGPYyit6VtyaeLzGcnIytxOxmz60lHT%2B%2B0NUEfBX01Kl%2B9G%2B0pbHNmji&X-Amz-Signature=d5879a97f6c75b6a472e715a8169ef213998d0c8cc11e9f0612dd8ed0e83a755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLYZBHG%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFwm%2B8kabFXbZiHwMewpUSmcPWC70pFlFOojiODGdXjGAiBronivVM6cVqfNK8SAJXUSDtgWlK3TOQFJMg2kHyH4MSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM2L8W5gm%2B%2FXBO7QD2KtwD3Q1lQGEsJJEz2jSj9I3TJ%2FWUddIbkUbCYl3PMQxgZEdi7AwrSHZvCAXdFc5xtKtaGpV8BNZ3mERppM%2F13QrRAsyY1qddpSElh5fOaUMPP4b15glTDsOBxh0%2BuENe4LMf4c51S5vtzGK1CG91hbfzHoJKTXev1w2dsRwGzeY0%2FNrjS3f3P3C545s4wI8m34hhQ14WzYqUoYs0plQleaR2RN9u5eKvOjuZGfemsoL1eyUcJRw3qxurjMvZgB4NxxSC220%2FI7x5hGrlyWQ2JZFh%2Bp8lrJXLpDppfABu%2B0Q7%2FG7coK1YzI3T9KEsQW%2F619J1fyozk2I3mEqvLUL54nbgJwPWQCDzRjQXnPYOXtt3Q4nO1MtYsTRriCvY2Da0taUa7P%2BTEsBOi7t3Nr1ttVVYzAK8Zr1bGUYUYRZSDrA5L0HPmnJQ6l8NCRuJB5hFn23ITnBRRkW39cMXIpB%2FOGM7dRUBWR%2FRYe8CgXF153jPHV0QI9zvreBLjGOLJ1bYeZpW0NY71fAMQm8uQbz%2FXcHqkbGuOhnZECLLvd2ISxZ8CfN%2BCGdy%2FK%2Fy5ebqQJU4fW%2BUislN4OG38U6afBj%2Bmiea%2F8PF2hoNYRPssQn7iIu0fPZ1%2BxnwQME5Xv25gXUw2O%2FVywY6pgGLD%2FCF36XIqDl%2B0tN%2BPmSUdTQqDkvsgAKTRgIzxORuMY3PrO2xmtgl0n2t6EN3qkSKa%2FF%2B3PTfH%2Fo50Iu4NdZwMSMAsgwXjHM0XU5Xndry0kI%2Bv3mlBa7r1JFyGXSSSoqDw8FgbsX05UIBoVGJsJ2Hb88DsfaWltAN%2F%2FJYJGPYyit6VtyaeLzGcnIytxOxmz60lHT%2B%2B0NUEfBX01Kl%2B9G%2B0pbHNmji&X-Amz-Signature=92a34fb04244d31286d157cf3992ce156aeb2f8aa09534709229eea1dfe30180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
