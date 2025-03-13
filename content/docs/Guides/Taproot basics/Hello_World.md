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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675C7UJQU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3Rart0wEeFYJ%2F%2BXmDh9dxjCt2DHXRwlE%2FTYR553%2Bf1AiAcr6yx46IPQiU9NQDDsF7uKWO1bVYtC7ut1mcg%2B3gn0SqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLKPc2Gx8fC4DrCfKtwDegmnI9lPwY8OzBhCUfbYJeFCy%2FOddvpitZ0LCtz3IoxA4iQKHzwtBinb2CkT17mD9z0rFbO%2Fb2dy4WIPcD%2FzmCBQCWiC%2Fm2KNpO34JJb20LnSsNgba7r%2BFrdIXiPfG9zlJEoA8Fh6YHusRsIKTDSiQx%2FyA1e93dBLu0CTWdlSckbCsXoRq0YBAqIF%2F5mRq1wD%2ByprXaqWK6xbBSAkNM9LPAtv4B3rKCf%2B%2BtuNQvKOBACQWARv%2BJKkSBmT0jePTVRB3%2Bbk43cIy76Lwhbuk5OYTdMzv6goEl%2BpIUPHmz39FofIv3gMlqA%2B3MyWCVUeqynEVS03TNcvgWc7DiEh%2FO1V9xzT0Amb6nyyGLa6Jty%2B9dGsKV5pdQ5tLNa4U6WaVinx4FJ0rWY0sNwZbQWh8rfNrcf%2Fgg554Q0acOl9c%2BLxsNEGBiz%2FFoz1Kak2QMz4nO4OCvaMBol1aN%2Bhbm1p7AT1LEETMSYaH%2F2AxurhO36xRh%2BVJZf81k9FyK%2FT41XJ7re1f7qbpx1Fte%2FLn2EVmgu8IW7TG7JLMTSxUTg4QApAFa9zEBi2UfSXaRjHu3uo64g8YomogBMjn1WmXwRJHDOQI%2Bk5INWnIUyy7csInO4ESvlrkfI62O74jWuOfUwlZzLvgY6pgGZ4EnSmedNdrLO1j10WplH6Z3fvQEb20M1sUjaub2eLuY33BAzkRerD%2BWeFH%2Bt9%2Ba%2Bd%2BX55k%2BHwq1cL8SNW2JH5%2FC5dEIpoPqjs5lDwK8tkVG2aH1JMZfnItIMHlAQe6Au88dDCBuaoJ9WoLneJlhu2%2FAGcIJK1vWiyfYPmAC5VlE71vGMjhgWop6dEp6pfQnZlPixO7WdVplQRkSLf8qvQoHCJt0g&X-Amz-Signature=dd3bbed36b0da8d22abd7fa524a6214f0ffa3dd4609d2d4f84e41485b40a28c4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675C7UJQU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3Rart0wEeFYJ%2F%2BXmDh9dxjCt2DHXRwlE%2FTYR553%2Bf1AiAcr6yx46IPQiU9NQDDsF7uKWO1bVYtC7ut1mcg%2B3gn0SqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLKPc2Gx8fC4DrCfKtwDegmnI9lPwY8OzBhCUfbYJeFCy%2FOddvpitZ0LCtz3IoxA4iQKHzwtBinb2CkT17mD9z0rFbO%2Fb2dy4WIPcD%2FzmCBQCWiC%2Fm2KNpO34JJb20LnSsNgba7r%2BFrdIXiPfG9zlJEoA8Fh6YHusRsIKTDSiQx%2FyA1e93dBLu0CTWdlSckbCsXoRq0YBAqIF%2F5mRq1wD%2ByprXaqWK6xbBSAkNM9LPAtv4B3rKCf%2B%2BtuNQvKOBACQWARv%2BJKkSBmT0jePTVRB3%2Bbk43cIy76Lwhbuk5OYTdMzv6goEl%2BpIUPHmz39FofIv3gMlqA%2B3MyWCVUeqynEVS03TNcvgWc7DiEh%2FO1V9xzT0Amb6nyyGLa6Jty%2B9dGsKV5pdQ5tLNa4U6WaVinx4FJ0rWY0sNwZbQWh8rfNrcf%2Fgg554Q0acOl9c%2BLxsNEGBiz%2FFoz1Kak2QMz4nO4OCvaMBol1aN%2Bhbm1p7AT1LEETMSYaH%2F2AxurhO36xRh%2BVJZf81k9FyK%2FT41XJ7re1f7qbpx1Fte%2FLn2EVmgu8IW7TG7JLMTSxUTg4QApAFa9zEBi2UfSXaRjHu3uo64g8YomogBMjn1WmXwRJHDOQI%2Bk5INWnIUyy7csInO4ESvlrkfI62O74jWuOfUwlZzLvgY6pgGZ4EnSmedNdrLO1j10WplH6Z3fvQEb20M1sUjaub2eLuY33BAzkRerD%2BWeFH%2Bt9%2Ba%2Bd%2BX55k%2BHwq1cL8SNW2JH5%2FC5dEIpoPqjs5lDwK8tkVG2aH1JMZfnItIMHlAQe6Au88dDCBuaoJ9WoLneJlhu2%2FAGcIJK1vWiyfYPmAC5VlE71vGMjhgWop6dEp6pfQnZlPixO7WdVplQRkSLf8qvQoHCJt0g&X-Amz-Signature=f3df47925a95bab7309944f0d82e1a7a0cae9e32bfdee33756f96bfb9fd8c070&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
