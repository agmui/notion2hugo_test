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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSM5UP2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDstBv0%2Fxy%2BCOebLfD5WA6bvIzsYaB%2FE7phPa7dj77T0AiEA7z%2FFxiYnYXAmQk4QOQPSe0%2Fiw%2Fe9YIrprWygx7jKcXsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHuWqFYeZ9hMd9%2BisyrcAyG66mvHU4Fs8CydZM4tHaEXPB%2FoDwOSrOpdicDR6Px9Al%2BwqZFsKIququcMXJPLTwJw73%2BuAECUM00zz2Lt007%2BIf78VmrknMI%2Fk46LKAJxNWBVjtMsMYmAp%2F3%2FZ3dGHAU4W6eVX5JBR8K515cVHiBl%2BbtfSb48zbHla5MIq66Ytp4gk1pOpr0XBd7X2T%2FS7Xg7zCU6r2%2FuV9DraMqjRfr8oRn0vILoNzQgEVx1b00zU2Tjc%2FT0QHuNp6clpnBZhZpIEakafcd2JalOjUCBZgu89PueJqZzMJdjoZOUK6Hvdl8LQKTBNIKNqb7VRHcdS6%2BtKlY7zVbkzuHNCmTGuxck%2BiqnR6yBT3sER7tNRBMYilZ9ZVwGinDxxCo%2BmUjozT6tlAXBb3MiWMtCg7LhZtQtSnhQY8TpTNPnARUcNlTz3InWu1xxfIFWyNt%2FWGcMvyiNuxRZTnZmy61zfrF6czYRoV8bhMoMR1EkoaGV5E0aGhfOvb44GKzIyNNscC8Tl8RtRskbSvhcDsk5LF%2BvjJclilcqx%2FRJNVMrSv%2BdujoX33SIyjtat3HeJOahAdT30jdmB5qzSZTWw40zHDXSfifFvwDvkfCfhEmB1d7IdnwQLV%2B%2BMjX8xy9pcMHWMNOkzcMGOqUBHjPtgN0rOvWCQzH9TjiBrdfq57dk0qRorpLkZy0cICX2hOxi%2FmbBDNNc9kEGvaBox5zW71RCEcguh4zhZhw%2FvNMJi%2Bw0VXyeH9lrN0F0JJP5mN2JBkzPVTLgifdBOt1GpICWl8vWUo4SjX4enf6xy8YsR7ZwKIf38N9aPdwkn29jgCyhmPKUT0jn0cR0I%2BJwBx4UgUgpPcBYDfgGQjus%2BbXDGLnv&X-Amz-Signature=031ad1fdec12dff0dd308a81ed206ea270d3f33b20dd648b17e23cc574ef1304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSM5UP2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDstBv0%2Fxy%2BCOebLfD5WA6bvIzsYaB%2FE7phPa7dj77T0AiEA7z%2FFxiYnYXAmQk4QOQPSe0%2Fiw%2Fe9YIrprWygx7jKcXsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHuWqFYeZ9hMd9%2BisyrcAyG66mvHU4Fs8CydZM4tHaEXPB%2FoDwOSrOpdicDR6Px9Al%2BwqZFsKIququcMXJPLTwJw73%2BuAECUM00zz2Lt007%2BIf78VmrknMI%2Fk46LKAJxNWBVjtMsMYmAp%2F3%2FZ3dGHAU4W6eVX5JBR8K515cVHiBl%2BbtfSb48zbHla5MIq66Ytp4gk1pOpr0XBd7X2T%2FS7Xg7zCU6r2%2FuV9DraMqjRfr8oRn0vILoNzQgEVx1b00zU2Tjc%2FT0QHuNp6clpnBZhZpIEakafcd2JalOjUCBZgu89PueJqZzMJdjoZOUK6Hvdl8LQKTBNIKNqb7VRHcdS6%2BtKlY7zVbkzuHNCmTGuxck%2BiqnR6yBT3sER7tNRBMYilZ9ZVwGinDxxCo%2BmUjozT6tlAXBb3MiWMtCg7LhZtQtSnhQY8TpTNPnARUcNlTz3InWu1xxfIFWyNt%2FWGcMvyiNuxRZTnZmy61zfrF6czYRoV8bhMoMR1EkoaGV5E0aGhfOvb44GKzIyNNscC8Tl8RtRskbSvhcDsk5LF%2BvjJclilcqx%2FRJNVMrSv%2BdujoX33SIyjtat3HeJOahAdT30jdmB5qzSZTWw40zHDXSfifFvwDvkfCfhEmB1d7IdnwQLV%2B%2BMjX8xy9pcMHWMNOkzcMGOqUBHjPtgN0rOvWCQzH9TjiBrdfq57dk0qRorpLkZy0cICX2hOxi%2FmbBDNNc9kEGvaBox5zW71RCEcguh4zhZhw%2FvNMJi%2Bw0VXyeH9lrN0F0JJP5mN2JBkzPVTLgifdBOt1GpICWl8vWUo4SjX4enf6xy8YsR7ZwKIf38N9aPdwkn29jgCyhmPKUT0jn0cR0I%2BJwBx4UgUgpPcBYDfgGQjus%2BbXDGLnv&X-Amz-Signature=ed0cab895f34ecd66b02f720af2f3120b2204f43e732ff6eef880484ee221cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
