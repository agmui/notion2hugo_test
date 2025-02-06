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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCOHQZC%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDK4G%2FaclLlVbZYDSkNj906QT7no7k3J5HoDsgm6xI1CQIgc1yOdYK%2BCwRnCDfJvXmONFg%2FfRO%2BfPOhwTCihw3%2B214q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAfycz5NshuoUNOqRircA%2BPKEsLkZFHg7T8UcidSY2RCCSQNX0fgNbOvtIIJ2D4hV4lzsyyqLYTfB0SrP%2BP66Cy9F0oIQVvU%2BkTaMvtID7QpA0faeWsBTIILYr0FVPwqqXPIGMFgzkdTgtOSd%2BKLNIFKoC8m4CM7ZUymwyCXaqM0Mkv%2FbGuN%2BEUaZU%2FYOhSufRanlTioKtkvxSr9gEQBS7FZJeqAUZSOQiZxr3dxPJHu0rs%2Fl1KqnM1r6IXtUHyAvAHfXs%2FfFpc6UieN1De3NmGLmJaByvIM9zU1Oogk8cV2Gn2on3DOlj9VBV5g4nwSBncrsAN%2Bjzzh0U0DDuiq7igtf%2F746JfdsBSJsmpF%2Bio2IfIQq0GgHkCApRduX9IfVMtXUguH5awyj%2FhbSOq90%2BoDB9qyke4bsa%2FZ4iomiyfSJJimUYxtZpycMK5srdjLQraUVqdkeomem7Rim01KqdblaWu2uLr8UVk7KC%2Fq7V6Vg%2B0h7uQnO8kuVnjre%2FpvbmNNBEUiSGtdrPJ9NA0WHn5NeFd4Ezj%2FAzm6vsvI8dnAlRtes%2FFFsUpwjaXRE1S0ShM3T5FlbD03ouQHbvgY7oyqDXBuXXiN%2BkoZ%2BrFZoBDWQeMlawqeveVtHwzAQR6jOEF3D9ZAh3cglDZsMJv9k70GOqUBKwVomfQLdbfCho33Xy%2BnBvW8%2FEThESzQ61%2B7ESfQQVoXxR4FWUokMRWuu1wiCEKwM2EV%2BkrvVYPzABhyB1NzfJvBj3KtHPII6fvioEbYC3shZ%2FvTzvLYbcdcUPCXue3gWYwoztn1g8pKYh%2FSHUxha1LYERXMZzEbpcZGCWMMa8zlZSthETZo0Qk%2FbNzzncz5fAU%2FkJPHN6CmOTrltoL8%2B2SHnmwn&X-Amz-Signature=a59a18b1b8bdb01612e99fe01b43b3f8bd2a91c0cebb51c6854440e8f66e67d3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCOHQZC%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDK4G%2FaclLlVbZYDSkNj906QT7no7k3J5HoDsgm6xI1CQIgc1yOdYK%2BCwRnCDfJvXmONFg%2FfRO%2BfPOhwTCihw3%2B214q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAfycz5NshuoUNOqRircA%2BPKEsLkZFHg7T8UcidSY2RCCSQNX0fgNbOvtIIJ2D4hV4lzsyyqLYTfB0SrP%2BP66Cy9F0oIQVvU%2BkTaMvtID7QpA0faeWsBTIILYr0FVPwqqXPIGMFgzkdTgtOSd%2BKLNIFKoC8m4CM7ZUymwyCXaqM0Mkv%2FbGuN%2BEUaZU%2FYOhSufRanlTioKtkvxSr9gEQBS7FZJeqAUZSOQiZxr3dxPJHu0rs%2Fl1KqnM1r6IXtUHyAvAHfXs%2FfFpc6UieN1De3NmGLmJaByvIM9zU1Oogk8cV2Gn2on3DOlj9VBV5g4nwSBncrsAN%2Bjzzh0U0DDuiq7igtf%2F746JfdsBSJsmpF%2Bio2IfIQq0GgHkCApRduX9IfVMtXUguH5awyj%2FhbSOq90%2BoDB9qyke4bsa%2FZ4iomiyfSJJimUYxtZpycMK5srdjLQraUVqdkeomem7Rim01KqdblaWu2uLr8UVk7KC%2Fq7V6Vg%2B0h7uQnO8kuVnjre%2FpvbmNNBEUiSGtdrPJ9NA0WHn5NeFd4Ezj%2FAzm6vsvI8dnAlRtes%2FFFsUpwjaXRE1S0ShM3T5FlbD03ouQHbvgY7oyqDXBuXXiN%2BkoZ%2BrFZoBDWQeMlawqeveVtHwzAQR6jOEF3D9ZAh3cglDZsMJv9k70GOqUBKwVomfQLdbfCho33Xy%2BnBvW8%2FEThESzQ61%2B7ESfQQVoXxR4FWUokMRWuu1wiCEKwM2EV%2BkrvVYPzABhyB1NzfJvBj3KtHPII6fvioEbYC3shZ%2FvTzvLYbcdcUPCXue3gWYwoztn1g8pKYh%2FSHUxha1LYERXMZzEbpcZGCWMMa8zlZSthETZo0Qk%2FbNzzncz5fAU%2FkJPHN6CmOTrltoL8%2B2SHnmwn&X-Amz-Signature=87461b4a1c30fdbcf2d56052e2ef153dbdd84531298566120e9f832eba9faf47&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
