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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4C4RVE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXrpSQApB%2BHWTuAnzu29ecNu98xvGIF5K%2BRFhzTCnsiAiB8oW8nlwtsS7aH3leM4PnCtWT%2F0nDqJ9TAs1qQu4nQcSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMTtCmMdQFrQ16wNa8KtwDBC7EIToPB3uK5F0Xe8LqAAniKB7wCF5Ldk3ky76kNcCJri%2BZZSXtN2aeNlavKQ8IlIgk63eOzVQlyJkcpBepGRZXspdf8zNJ00Dcv%2BjgNlcz%2FQF0iCGl8XPYdVmzJvI%2FFjwgGIjBd2ntciBGfW9odnFVSYOBAcWYJ6i6E6ACzWhnbixu5mC1Obzm0RtRYyGfT0mgzbAjwpDLK2OuUFYeiIXdypu08Q6XxfGkPMpjzGR4FyaQFcH7e7luq4SkBrU0BIvOSMx1cCUnuGDFzkiVI3uLI21Ip3TgQM7tqGAhKRL8peWTjJC15IHO3fQB6ChdeMIrl58wv1xfYuyY6RjLCmm24Va6AkLcyyHFixIA72LYpWZ5XdeIju2Pgi4O3iprFabIPFPwjyyMvk3ymZuktum%2BPZU5rHYEn9wkZ0TCQ7ymPK6FBXEBcDyyID%2FIBdogZhJxFik0Vy76t8GoIS8ApdM86h4GnPUq%2FRfBg9HfGX%2BrHG10pfgMbX9HPlfKpsQd0bBT7db6ANKROLWBMMhbmb5TL3NM3h3Pq5pnBBypIXV4FinGFDwf%2FnB4Pat6q69S5Rdthh7FiEq9sgzsxm66ZtmKF7wlPRmZg3Siq%2F4bs2VUYbE1xlD9cy95wuUwtMa5wAY6pgGjpPo2ct6Ke%2FoIeqmJ49UMcOsGcAYljdJTzYKNd2y2Pae7tvlQLtj1e2M3tVa%2BCAiJMA2kFXEWTZEXsqHFw9AGoUHCEmovM99ebX2HeYODTxOCMpYddycsKOVz4bpTje8lhn%2Bm0k4%2Bn6iyeZS0zeMy2qvoRQT%2BIIsmn%2Bi8ykIL85lWwyqFeM%2F7NLw4twXOL46rQVdVuu9HgCDBlHqMv3OHZAnFDznY&X-Amz-Signature=3bc0fb944311a21b8cb77a7e2086dfa182770b1a84002219ab8bf437567b0d71&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4C4RVE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXrpSQApB%2BHWTuAnzu29ecNu98xvGIF5K%2BRFhzTCnsiAiB8oW8nlwtsS7aH3leM4PnCtWT%2F0nDqJ9TAs1qQu4nQcSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMTtCmMdQFrQ16wNa8KtwDBC7EIToPB3uK5F0Xe8LqAAniKB7wCF5Ldk3ky76kNcCJri%2BZZSXtN2aeNlavKQ8IlIgk63eOzVQlyJkcpBepGRZXspdf8zNJ00Dcv%2BjgNlcz%2FQF0iCGl8XPYdVmzJvI%2FFjwgGIjBd2ntciBGfW9odnFVSYOBAcWYJ6i6E6ACzWhnbixu5mC1Obzm0RtRYyGfT0mgzbAjwpDLK2OuUFYeiIXdypu08Q6XxfGkPMpjzGR4FyaQFcH7e7luq4SkBrU0BIvOSMx1cCUnuGDFzkiVI3uLI21Ip3TgQM7tqGAhKRL8peWTjJC15IHO3fQB6ChdeMIrl58wv1xfYuyY6RjLCmm24Va6AkLcyyHFixIA72LYpWZ5XdeIju2Pgi4O3iprFabIPFPwjyyMvk3ymZuktum%2BPZU5rHYEn9wkZ0TCQ7ymPK6FBXEBcDyyID%2FIBdogZhJxFik0Vy76t8GoIS8ApdM86h4GnPUq%2FRfBg9HfGX%2BrHG10pfgMbX9HPlfKpsQd0bBT7db6ANKROLWBMMhbmb5TL3NM3h3Pq5pnBBypIXV4FinGFDwf%2FnB4Pat6q69S5Rdthh7FiEq9sgzsxm66ZtmKF7wlPRmZg3Siq%2F4bs2VUYbE1xlD9cy95wuUwtMa5wAY6pgGjpPo2ct6Ke%2FoIeqmJ49UMcOsGcAYljdJTzYKNd2y2Pae7tvlQLtj1e2M3tVa%2BCAiJMA2kFXEWTZEXsqHFw9AGoUHCEmovM99ebX2HeYODTxOCMpYddycsKOVz4bpTje8lhn%2Bm0k4%2Bn6iyeZS0zeMy2qvoRQT%2BIIsmn%2Bi8ykIL85lWwyqFeM%2F7NLw4twXOL46rQVdVuu9HgCDBlHqMv3OHZAnFDznY&X-Amz-Signature=04d711d78e1d350e37de74eac0c122944c5083786d8bad6415a8e155d3691f38&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
