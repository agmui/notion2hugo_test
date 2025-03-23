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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSUMRVC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAj3tYcqjYTnq5s9nCAD14QQWIn6nQRJvuFlArJRgfg7AiAKNpMz4BgQ1dzMgzMpomTmKXTfEgbtO3vLSJO9WKXegiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVUHHNGCj%2BpYlnqAKtwDfu09iZ9ykBTS8InibIPuoSdQtWV6AiI%2FXeZkk%2B9SwjeuHoWYaAoorT5GaF5Jwgo%2BcSX30SH4370laDe6MLHiYaQIMjpIgQ%2F60D%2Fmi6AtY5UUSW9eS3w%2FHVwCM%2F7ShjB5YoDZIuJfvMKCA%2F%2BdfrhWcbiVKF%2FmYCGN3vWA8AOu%2F80axZAfj6Pxmk3VrBv8x9Zm5lOIusgzoFjqQuL9Ct9Hno9FQJIS%2BAW1JBv%2BUFw3BfEBmjG4VXFniPrZohrN4vyyfMXeKJGimWHUDL7DmCdb7cwkKIKV0dtkp0w9kx%2F%2Ftz3vCYV6DyuXSXd1WMMFQPFgAlnmSSjtUZ3z%2FBUOfKQxza%2BsnQ9uwcw9sybng%2B6QDWCPloeBdmrDimg0apk331BLCK%2FqQmdJmOjWouplow%2FmMgm9U3AP5fGHus3zfHULKylY8my853IlkZPMtbyjV8%2FS5VEFlV2NTpkZadEp41ti7MZQnG32LHl9S1qshJFblBVik11qFTSRoQI0kEXnWn4T83Bw6ArUrfCP6pA44z%2Bjj0th7URDQ0uhvo0wZofTXFthFf%2BCPGNlCXiYS7%2BI%2F2IsZSU7CMUOgYrumblezzZgPb1tq2wExkW6udyDa0rR7xuT4uRDtLp2bduu7%2BYwxMz%2FvgY6pgEUI5U26thiwf2VDrJ0UgzAR%2BvvZA%2Baxwn9o3%2BG8jNTgtTK%2FysYvz%2FyhIIYBFjX%2F%2BwF7SqUZJUKQcIgr1yoPhVMK7nz18Zc7WV2fYnXFcMtAj2LKXglwFBDJi0vzjqFe3IgrGqd37COg3GvLGWIOFbQriyqepjmQ4vgIvHpMOzyXl7f%2BT%2FP0eGr3bB5mDF9YORjI4pkfaFfIbtu8b0%2B3KzQF1axOppd&X-Amz-Signature=1eb5f12a2bd57465a701e422aa2fc0dc3f9aafdde19643394f29445dce1d3366&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSUMRVC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAj3tYcqjYTnq5s9nCAD14QQWIn6nQRJvuFlArJRgfg7AiAKNpMz4BgQ1dzMgzMpomTmKXTfEgbtO3vLSJO9WKXegiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVUHHNGCj%2BpYlnqAKtwDfu09iZ9ykBTS8InibIPuoSdQtWV6AiI%2FXeZkk%2B9SwjeuHoWYaAoorT5GaF5Jwgo%2BcSX30SH4370laDe6MLHiYaQIMjpIgQ%2F60D%2Fmi6AtY5UUSW9eS3w%2FHVwCM%2F7ShjB5YoDZIuJfvMKCA%2F%2BdfrhWcbiVKF%2FmYCGN3vWA8AOu%2F80axZAfj6Pxmk3VrBv8x9Zm5lOIusgzoFjqQuL9Ct9Hno9FQJIS%2BAW1JBv%2BUFw3BfEBmjG4VXFniPrZohrN4vyyfMXeKJGimWHUDL7DmCdb7cwkKIKV0dtkp0w9kx%2F%2Ftz3vCYV6DyuXSXd1WMMFQPFgAlnmSSjtUZ3z%2FBUOfKQxza%2BsnQ9uwcw9sybng%2B6QDWCPloeBdmrDimg0apk331BLCK%2FqQmdJmOjWouplow%2FmMgm9U3AP5fGHus3zfHULKylY8my853IlkZPMtbyjV8%2FS5VEFlV2NTpkZadEp41ti7MZQnG32LHl9S1qshJFblBVik11qFTSRoQI0kEXnWn4T83Bw6ArUrfCP6pA44z%2Bjj0th7URDQ0uhvo0wZofTXFthFf%2BCPGNlCXiYS7%2BI%2F2IsZSU7CMUOgYrumblezzZgPb1tq2wExkW6udyDa0rR7xuT4uRDtLp2bduu7%2BYwxMz%2FvgY6pgEUI5U26thiwf2VDrJ0UgzAR%2BvvZA%2Baxwn9o3%2BG8jNTgtTK%2FysYvz%2FyhIIYBFjX%2F%2BwF7SqUZJUKQcIgr1yoPhVMK7nz18Zc7WV2fYnXFcMtAj2LKXglwFBDJi0vzjqFe3IgrGqd37COg3GvLGWIOFbQriyqepjmQ4vgIvHpMOzyXl7f%2BT%2FP0eGr3bB5mDF9YORjI4pkfaFfIbtu8b0%2B3KzQF1axOppd&X-Amz-Signature=47c1b08dbff55da82f0b3d1fbcb50d3aa79c8e6a21d3edbc5998245e1dbf314e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
