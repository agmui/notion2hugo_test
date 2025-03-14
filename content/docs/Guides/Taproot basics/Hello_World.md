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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXKVGVL3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC46AqPf796xF0LdJ4XnGq%2Bj6F5dkBgYAmqdKHAjYC5ZAIgM9rF%2BWQu7xf1gku%2BL8xSitmIXnKArwBYid505WGsJh8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMdmJSVlbG016YCKircA25zyl1xalROLAlC2Hr05n1add01R82EBF%2FXUABLEcf5r8%2Fh5HqS76pB6nV7p3lKJxVYW35geY0P1XMyBhWR2z55VwzKOGxi6kCjZVxOJBJfkz%2FQFMSWMQi97Lq3R8IFdqoApfnRLsqTOM6n9uwKAR6KqjI8Ogx0yQGbkI8FkyAZo15R%2FmTvsdWB3T5tBbVTB0VBWD4lHlLfyyCJW0j4o0uOFrM3SoqbvdMlNSg%2BNCQzz%2FH%2BHIraMfk1ku5jehjKkEl7ETgAsBnc9Bc5gPopprhIBNY2VbLB60eUjN8k9hk5SnXKsq%2BhCCQw1Hh5HLyTrutyqcIeC8zVmapTg6OSpN4Sw%2FAD4ESVQa9jfw1VfPsm7ZYuAs67hoxdtBGMFtElsBbfvsFo5qzgKP9dPaDZEa7bltFFo5ioWdLXx%2FxIGgPRZJwC8z%2B9hbEY49PJ1M2aKxFvhILCxpPEP6ds49UIYATs383Ryv2KbxbTv0a3vG9iUggxRhv1U94KwB4UyyTMXSFc953ebAcnvO4XoF0csXQyJvDi517kG0qNTS7TnD3R7ku6Lip2lRE%2BnrX%2F1hiPpIhDMZKDNxK7nllkBkeu5t5HKqaTFxwkM6DYfSDIR7roll2v8vd4cs0N0j0NMM3Q0r4GOqUBvaYWNrH4dOCOqwn7ogIPrNgbLD0svCU2TNrdS7HketeAtzqdMvI6nYp4X2VtQp%2BbQ3Gmuk%2Fgh5dcKjpHA6wiGKg8jS4BhSOVecbAL%2Beo184e7sK%2F96iAugyQxm%2FmtzxLQ3HMoVh096JoYQoaZDdODO7Sxbol7H2I075e3TcYe%2Bzpo2txfUBk3jj%2BXIJRpCAAwGwWdwTkuS7Qgfh4sBTiqeGedMYi&X-Amz-Signature=a40da586e2e08782e0aa5bc2acf771ae57b59d18b3604e31c9a11b43532c9562&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXKVGVL3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC46AqPf796xF0LdJ4XnGq%2Bj6F5dkBgYAmqdKHAjYC5ZAIgM9rF%2BWQu7xf1gku%2BL8xSitmIXnKArwBYid505WGsJh8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMdmJSVlbG016YCKircA25zyl1xalROLAlC2Hr05n1add01R82EBF%2FXUABLEcf5r8%2Fh5HqS76pB6nV7p3lKJxVYW35geY0P1XMyBhWR2z55VwzKOGxi6kCjZVxOJBJfkz%2FQFMSWMQi97Lq3R8IFdqoApfnRLsqTOM6n9uwKAR6KqjI8Ogx0yQGbkI8FkyAZo15R%2FmTvsdWB3T5tBbVTB0VBWD4lHlLfyyCJW0j4o0uOFrM3SoqbvdMlNSg%2BNCQzz%2FH%2BHIraMfk1ku5jehjKkEl7ETgAsBnc9Bc5gPopprhIBNY2VbLB60eUjN8k9hk5SnXKsq%2BhCCQw1Hh5HLyTrutyqcIeC8zVmapTg6OSpN4Sw%2FAD4ESVQa9jfw1VfPsm7ZYuAs67hoxdtBGMFtElsBbfvsFo5qzgKP9dPaDZEa7bltFFo5ioWdLXx%2FxIGgPRZJwC8z%2B9hbEY49PJ1M2aKxFvhILCxpPEP6ds49UIYATs383Ryv2KbxbTv0a3vG9iUggxRhv1U94KwB4UyyTMXSFc953ebAcnvO4XoF0csXQyJvDi517kG0qNTS7TnD3R7ku6Lip2lRE%2BnrX%2F1hiPpIhDMZKDNxK7nllkBkeu5t5HKqaTFxwkM6DYfSDIR7roll2v8vd4cs0N0j0NMM3Q0r4GOqUBvaYWNrH4dOCOqwn7ogIPrNgbLD0svCU2TNrdS7HketeAtzqdMvI6nYp4X2VtQp%2BbQ3Gmuk%2Fgh5dcKjpHA6wiGKg8jS4BhSOVecbAL%2Beo184e7sK%2F96iAugyQxm%2FmtzxLQ3HMoVh096JoYQoaZDdODO7Sxbol7H2I075e3TcYe%2Bzpo2txfUBk3jj%2BXIJRpCAAwGwWdwTkuS7Qgfh4sBTiqeGedMYi&X-Amz-Signature=0cc5fb6066d8a4e7c1f6d3804a911bd6bd0dfce4baf58ed8ba2dcbc5fe456684&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
