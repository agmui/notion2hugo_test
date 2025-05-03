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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4TEPW2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIF%2FjkJFkyX2daatVL0bP1ma%2FOpRHT53xS16xy5FzGqUBAiBD27OgPnh%2B18zG9EMJ5yQI1djyRLJSCPYgnprlsyleaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2%2FTnjqI5cZieIXjKtwDSRnjFEc0e2IjbsIJD1vnN0t4aq%2Bidj1fJxt59wCRWNPeOHyqwc%2B30TWEc77g2KUpERUSnw0%2B9eP9U0OE0d%2Fxd9zQm%2BcZ2s61b1Scw%2BaRaU5mr1ZqYE3XNy91R6NDT5ArmJuik%2BL4zRJ9G4I%2Ft65svy5qZ6B%2BNtLMQUBddxiZXo%2B558f%2BLu95zbku%2Fi%2Fy850mbnhzFluKPMQIvUOAeB0z%2BDAET%2BxsyUlLmnpqUkJqmRBrJaRMkpyqUkmJMDXUAjzwgTbjo5cVHYoqtJuHeXKHVKHWIibA07cjctqI0%2Frt%2FuWagVceuOnkQ0Ag4ZLuVJ1ysxzPnXXRwTA1GuO3H9ogRe3gi1vNLLwVrPOd462YE27%2BhhlFerEvR4uD1QgXEq%2F1ib4nzp%2FfP7OzhfqHJGZi8lKLffyMpLVVLg%2Ftse8G6YvQLQ90xw8PGEcSxsvQcg8wzTG7jSrRguILLN7HDOdS6fvwVrI3ol94dYV3NQDtW0FDQYPdlO4apREIL76Fbwy60B%2FkaR5UnMoiHRJ54X0fdE%2Fgmq6TSaNfDZtXkI2XH9qopajgnTXTJFafuw9nxVyCPlq%2Fc%2BYa8kmmxVvRz%2FB%2FWk3JNYSyJQ%2F8Cwfs8P4%2Bb9DDezwOzhxrBpJQzf4wvd7XwAY6pgHGxdYVjEw2%2Fyr33oLo6%2BpfjjJ5P1tgMQwA2srRMSnuE3w0L9FzVm26BxI%2BTWB4oVrsAIYT7dfBg3%2Feu4VtK3hVC0LnMqJ34FSfBXuIrIlYd%2BIJ%2B61vc6s56hK%2FdF%2FX5ri7EPEsoy5HAMPcstit9NhJPRdNvf8IK%2BC2oD9jzVfHr5hWbIO2dq2v5NmAJwVieJ714KbOCooyu99Q0X6QqsusUkmhQeSp&X-Amz-Signature=cf23b618d33a52e8f46d2edbd9f583c3cf9f46fcd3d6aee16d10efa1c590bd77&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4TEPW2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIF%2FjkJFkyX2daatVL0bP1ma%2FOpRHT53xS16xy5FzGqUBAiBD27OgPnh%2B18zG9EMJ5yQI1djyRLJSCPYgnprlsyleaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2%2FTnjqI5cZieIXjKtwDSRnjFEc0e2IjbsIJD1vnN0t4aq%2Bidj1fJxt59wCRWNPeOHyqwc%2B30TWEc77g2KUpERUSnw0%2B9eP9U0OE0d%2Fxd9zQm%2BcZ2s61b1Scw%2BaRaU5mr1ZqYE3XNy91R6NDT5ArmJuik%2BL4zRJ9G4I%2Ft65svy5qZ6B%2BNtLMQUBddxiZXo%2B558f%2BLu95zbku%2Fi%2Fy850mbnhzFluKPMQIvUOAeB0z%2BDAET%2BxsyUlLmnpqUkJqmRBrJaRMkpyqUkmJMDXUAjzwgTbjo5cVHYoqtJuHeXKHVKHWIibA07cjctqI0%2Frt%2FuWagVceuOnkQ0Ag4ZLuVJ1ysxzPnXXRwTA1GuO3H9ogRe3gi1vNLLwVrPOd462YE27%2BhhlFerEvR4uD1QgXEq%2F1ib4nzp%2FfP7OzhfqHJGZi8lKLffyMpLVVLg%2Ftse8G6YvQLQ90xw8PGEcSxsvQcg8wzTG7jSrRguILLN7HDOdS6fvwVrI3ol94dYV3NQDtW0FDQYPdlO4apREIL76Fbwy60B%2FkaR5UnMoiHRJ54X0fdE%2Fgmq6TSaNfDZtXkI2XH9qopajgnTXTJFafuw9nxVyCPlq%2Fc%2BYa8kmmxVvRz%2FB%2FWk3JNYSyJQ%2F8Cwfs8P4%2Bb9DDezwOzhxrBpJQzf4wvd7XwAY6pgHGxdYVjEw2%2Fyr33oLo6%2BpfjjJ5P1tgMQwA2srRMSnuE3w0L9FzVm26BxI%2BTWB4oVrsAIYT7dfBg3%2Feu4VtK3hVC0LnMqJ34FSfBXuIrIlYd%2BIJ%2B61vc6s56hK%2FdF%2FX5ri7EPEsoy5HAMPcstit9NhJPRdNvf8IK%2BC2oD9jzVfHr5hWbIO2dq2v5NmAJwVieJ714KbOCooyu99Q0X6QqsusUkmhQeSp&X-Amz-Signature=7ab93c16f82e2bb96229acd6229632a1934f0d856a61af157ac35e96f1a69da4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
