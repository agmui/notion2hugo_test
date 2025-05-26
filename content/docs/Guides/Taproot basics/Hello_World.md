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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZUSYGPD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUr%2Bhb7BoCz8OVOYNTs9gEgL6mK2y4RfpvsPyR4fbBXQIgaPZQxLD1k6TIBvon1egmBvJRmdQr3vZdyJ3LuInSDPoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFZvPvfP90PFy99AKircAzVEHQuxo2SgkWCOdlML4IkPc89Oo1qyglRr%2BiEvJ2ctntQI7t7VXyuoHNTXHqVFPSL2mfEr3Rzjh42YXUbFnC22LxlZGpfPxJOBmKDZhi08UlDib9esA4G%2BH3WNDhX8UUciqjyST%2FCTWtfGDAMn2%2BJv%2BrS4Ao8t%2FPkvVCbdTMTy%2FF4M3Gl4q%2Fyxbl4irWvO9BDrFov2gqg5q5C9gXCkIzuSs5dPiMPTbQ1EbMXSXaw2QTGRWpsBOKSTQLEp%2F282%2BCn8kRNTcmyadzGYAuOwaG%2Fv9pqTegu9r5dMnb8yc7EoyKHwzJXtdWZKPrHJaj7D7Szovcu8WI8Wlx670xDY%2BD0uzXCw1CMdGrXgLoCB6yzS9pFfmKgO4VUFWBXNpca8%2FIJwAo5RLkJkbAP1C2QRbf0xo9IYtQQ%2FXuUJsZ0rVl6YnSLouw5XTJnHa3IWZb%2ByRo2OChwlIWk7dNv7cKS8SPT2R0Ym%2FcBEIkjyRx60hSqk9UgUD3OKMBmnn%2B%2F%2Bwf9JY%2BJwcq5RkKQG3lyDzv2%2FV0Jy3%2Blo1INPnXGSO4SZ8t5RW8AtgFwcblvfxyi03G57311Hu9YfyIBjhx186zsA2RXxn%2Bbdv2bwAJ%2FotH0OUJnuSlXwkJ4ybYMKDbN5MIfm0cEGOqUBUne9BSig8r8b8KAhGw73Zgky4So8aCy30fFNs73Hng1qkdaIeKZdocYiLBK7TQ6pf%2BH%2B6TmkRto%2BIG6j3A8unECS3WMkNWSCgv9wNsUX9THoxMpU2NUflq4gOvk3dWqegYdQinQb9n4U%2FtGxe0VbtsTxUDT6lK%2BoPf5lkiVM1Kywp6iT4nu2K0UiiaTGHmnLMGAIaQoIeEkijT3Tz%2BL9IsGoopAG&X-Amz-Signature=7b746ab483345bc516a9ad9c04eea9f3897f5b71d9abb6a2d74868b1e3f710b8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZUSYGPD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUr%2Bhb7BoCz8OVOYNTs9gEgL6mK2y4RfpvsPyR4fbBXQIgaPZQxLD1k6TIBvon1egmBvJRmdQr3vZdyJ3LuInSDPoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFZvPvfP90PFy99AKircAzVEHQuxo2SgkWCOdlML4IkPc89Oo1qyglRr%2BiEvJ2ctntQI7t7VXyuoHNTXHqVFPSL2mfEr3Rzjh42YXUbFnC22LxlZGpfPxJOBmKDZhi08UlDib9esA4G%2BH3WNDhX8UUciqjyST%2FCTWtfGDAMn2%2BJv%2BrS4Ao8t%2FPkvVCbdTMTy%2FF4M3Gl4q%2Fyxbl4irWvO9BDrFov2gqg5q5C9gXCkIzuSs5dPiMPTbQ1EbMXSXaw2QTGRWpsBOKSTQLEp%2F282%2BCn8kRNTcmyadzGYAuOwaG%2Fv9pqTegu9r5dMnb8yc7EoyKHwzJXtdWZKPrHJaj7D7Szovcu8WI8Wlx670xDY%2BD0uzXCw1CMdGrXgLoCB6yzS9pFfmKgO4VUFWBXNpca8%2FIJwAo5RLkJkbAP1C2QRbf0xo9IYtQQ%2FXuUJsZ0rVl6YnSLouw5XTJnHa3IWZb%2ByRo2OChwlIWk7dNv7cKS8SPT2R0Ym%2FcBEIkjyRx60hSqk9UgUD3OKMBmnn%2B%2F%2Bwf9JY%2BJwcq5RkKQG3lyDzv2%2FV0Jy3%2Blo1INPnXGSO4SZ8t5RW8AtgFwcblvfxyi03G57311Hu9YfyIBjhx186zsA2RXxn%2Bbdv2bwAJ%2FotH0OUJnuSlXwkJ4ybYMKDbN5MIfm0cEGOqUBUne9BSig8r8b8KAhGw73Zgky4So8aCy30fFNs73Hng1qkdaIeKZdocYiLBK7TQ6pf%2BH%2B6TmkRto%2BIG6j3A8unECS3WMkNWSCgv9wNsUX9THoxMpU2NUflq4gOvk3dWqegYdQinQb9n4U%2FtGxe0VbtsTxUDT6lK%2BoPf5lkiVM1Kywp6iT4nu2K0UiiaTGHmnLMGAIaQoIeEkijT3Tz%2BL9IsGoopAG&X-Amz-Signature=25260f4765e76c3b3db85ade11fe9303523db4f9b162b6d4a9cd9ffd81c96e45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
