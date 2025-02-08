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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZBEIMLN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEcXTN6dOjuU4NyZneOU8035B7Mwv7DAHcTN2CxzTRzhAiEApo%2BT0wvscSAeyukXWXRfJ2TjCsGVYUCDyU9BQE%2FFl8IqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMSCXjfenRplJYJIircA5eYWMp66yN4k2drrIFzNdloZkHC%2BaziYAfzrRsyH6rDRwgTIUBYkt5qnTbkbVf45YZFOFNgWindlJ%2FmsQiSk3qOich9n69%2Bypll8qqCS30yn%2Fx2oX8lQQsBwxGKIq%2BU44PKmaHTitPJn2bjkt2QkZr6LCkluASfCQLcG1HGq6UJcaPZEg7XY34y4y22S6mLs2r3EgO6cgwqNZAcxoiWZ0TULcAbGseYF8R0kx0hYpifdYOdH61EN%2FMW2CqdPcEQflNwxBdOD9d0z%2Fc7i3sJ6iUyyRdOqaWNt99gAemhJGhc9FxvAd4NyifiCZPhanob3ad6%2FDs7TQ7PbAHhD%2BuwmRX4b9seN%2BnFkX3Fl5CqYJI11eIvHs6k35wuMxZli9qx%2Fo3f%2Ft9SJr4UN5OiDtPEnwO%2B9Rz7KN2aMyfKdkU2FAECc9tlzd6W88d6x3LOSWUmLI%2BkPiHRxnH6C4d4aAkBk2iY2HxXL53SpQDqRnZjLct26rGcFn%2BZPD38KIrDFTa6ggZV%2FXSWNoAHqxlIIU6ARYw0%2FeSRQGZYLxzccuSuhZPtvzZgtCQI0J4FtWH99Tbf1VxeLcwoP%2FBiabCAWBuiXFtz8y9%2BG%2BLCM7Vm%2FR5km6ljFaKoR9rBsSJIEWu7MLKHnb0GOqUBJ28B8sPEGJkNOZybAiJ7iMEwqd3jmdYo2gyc3dN1PAaOKa9MMw5UA9deBvNsPeChEdgTt2PH8B%2FNBzJjQkUIEuQdERD5hkjwfQURDLVM6CqKk5ROKJzwW%2FCYV%2FMurLBKLzpwpvK9hNz1jd99e7u89LhwQdbsDodWrMNHx70ddtazQR78Jcpv%2Bz78hGPi%2FSi%2BMFhJumMd%2B8%2BJMCYXZ2m%2BuYs0usYc&X-Amz-Signature=ac315528df3e9568fc6b2c2eeb5228a7aadb208029f628de14d04df07cf12bce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZBEIMLN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEcXTN6dOjuU4NyZneOU8035B7Mwv7DAHcTN2CxzTRzhAiEApo%2BT0wvscSAeyukXWXRfJ2TjCsGVYUCDyU9BQE%2FFl8IqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMSCXjfenRplJYJIircA5eYWMp66yN4k2drrIFzNdloZkHC%2BaziYAfzrRsyH6rDRwgTIUBYkt5qnTbkbVf45YZFOFNgWindlJ%2FmsQiSk3qOich9n69%2Bypll8qqCS30yn%2Fx2oX8lQQsBwxGKIq%2BU44PKmaHTitPJn2bjkt2QkZr6LCkluASfCQLcG1HGq6UJcaPZEg7XY34y4y22S6mLs2r3EgO6cgwqNZAcxoiWZ0TULcAbGseYF8R0kx0hYpifdYOdH61EN%2FMW2CqdPcEQflNwxBdOD9d0z%2Fc7i3sJ6iUyyRdOqaWNt99gAemhJGhc9FxvAd4NyifiCZPhanob3ad6%2FDs7TQ7PbAHhD%2BuwmRX4b9seN%2BnFkX3Fl5CqYJI11eIvHs6k35wuMxZli9qx%2Fo3f%2Ft9SJr4UN5OiDtPEnwO%2B9Rz7KN2aMyfKdkU2FAECc9tlzd6W88d6x3LOSWUmLI%2BkPiHRxnH6C4d4aAkBk2iY2HxXL53SpQDqRnZjLct26rGcFn%2BZPD38KIrDFTa6ggZV%2FXSWNoAHqxlIIU6ARYw0%2FeSRQGZYLxzccuSuhZPtvzZgtCQI0J4FtWH99Tbf1VxeLcwoP%2FBiabCAWBuiXFtz8y9%2BG%2BLCM7Vm%2FR5km6ljFaKoR9rBsSJIEWu7MLKHnb0GOqUBJ28B8sPEGJkNOZybAiJ7iMEwqd3jmdYo2gyc3dN1PAaOKa9MMw5UA9deBvNsPeChEdgTt2PH8B%2FNBzJjQkUIEuQdERD5hkjwfQURDLVM6CqKk5ROKJzwW%2FCYV%2FMurLBKLzpwpvK9hNz1jd99e7u89LhwQdbsDodWrMNHx70ddtazQR78Jcpv%2Bz78hGPi%2FSi%2BMFhJumMd%2B8%2BJMCYXZ2m%2BuYs0usYc&X-Amz-Signature=faf5f77196acbf22fd60e14307cc41cec21bbd3948b98f56c6edc170b2d92f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
