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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMI7N6Z%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCcwMl5xK1JpvF0%2FFZI6EX39ueS26SYkFK36OqdppYr7gIgHKlJh%2BRYDyI7FT1GNuSBdqxmW57MEj6p%2BrpRS%2BtIhd8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwhdgOqiPu3fzmJKyrcA0twyBuSiPL250k65S6RnodNO0IY71EuWDo8kpr5HX%2FPl%2BjlUURSHN0%2BZ%2B7hSZiTdX8lkbdJTJYvNaUk1PjicHoHpNe7a0abO8Zdd6H8VCa8fnjZJlSpVJyJE9cw39eDX3I%2BbhY1QEIttehh6DV9hHxwK1XM3fcX%2F7iejkxCXhh1LQE7%2BMRxBdjZ0ZRspRis39qzV8IGI6z5KclvVQVLX16M122SGopsednhz5sR1pp4DSD9zeA3rmpXPHD4dhqZ1B7bWPvq6YIb%2FYiqXoxzWiLi879qAczGcsc42b1QPp%2FchwbkLkchjxN3pSzQUM0NhDaXymJHEQ2WB%2FlzCZRsIXk4mYH7YD4i8CdHyqgAolv3IEKiKr1rse3hepemUZbxGuj6bwj8K8Rt1C2j%2BJfD%2BNBjDDpXv7DNYS247uhptF3Lhrz2kDkWDH8s4ki4vkWZ5R5Sw5ZsclTOzcyWG5uVSfas7xzDJVeyxzSjxpKunAVld5fJ0mBjWyD7488a48q7XTAhA4Gv4YvPAcuH6t0nDTzlpNHBg6G%2BSCxmp3XtAZ0qtvdtsK11r%2FiHkYhGbRyBaH7sTiy5Vdo%2FZrWhgSBDEwmfFd%2FaePF1miqzxOU2wKbn%2F3uw%2B5tU0Pw7cZltMPXIt78GOqUB%2BfIYtrhdR7SG%2B7of26l5MHG%2Fi6s0CpKaM4aUL7eM%2F4V7NXVErru5yGo2NK3bZlttZ1jQ8y7zf4Tw8OvD0KHWNdElVW08FJu4qML%2B2BfSPnjiI8xkIHR0iSuxAbnIGIagkaRrmjbb42YAiAD1lBrEU0AOIwuAXXXHkhuQ0RHkqinRmvmN7wkEtHzuNABDn5eGFZ0WV%2B%2FRK48f%2F8DL0UPyv%2Fr5HS7Z&X-Amz-Signature=87c5580cc297e6f216dec98e592e054aeb8b05fb91501bf94f3132235dfd9cd8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMI7N6Z%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCcwMl5xK1JpvF0%2FFZI6EX39ueS26SYkFK36OqdppYr7gIgHKlJh%2BRYDyI7FT1GNuSBdqxmW57MEj6p%2BrpRS%2BtIhd8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwhdgOqiPu3fzmJKyrcA0twyBuSiPL250k65S6RnodNO0IY71EuWDo8kpr5HX%2FPl%2BjlUURSHN0%2BZ%2B7hSZiTdX8lkbdJTJYvNaUk1PjicHoHpNe7a0abO8Zdd6H8VCa8fnjZJlSpVJyJE9cw39eDX3I%2BbhY1QEIttehh6DV9hHxwK1XM3fcX%2F7iejkxCXhh1LQE7%2BMRxBdjZ0ZRspRis39qzV8IGI6z5KclvVQVLX16M122SGopsednhz5sR1pp4DSD9zeA3rmpXPHD4dhqZ1B7bWPvq6YIb%2FYiqXoxzWiLi879qAczGcsc42b1QPp%2FchwbkLkchjxN3pSzQUM0NhDaXymJHEQ2WB%2FlzCZRsIXk4mYH7YD4i8CdHyqgAolv3IEKiKr1rse3hepemUZbxGuj6bwj8K8Rt1C2j%2BJfD%2BNBjDDpXv7DNYS247uhptF3Lhrz2kDkWDH8s4ki4vkWZ5R5Sw5ZsclTOzcyWG5uVSfas7xzDJVeyxzSjxpKunAVld5fJ0mBjWyD7488a48q7XTAhA4Gv4YvPAcuH6t0nDTzlpNHBg6G%2BSCxmp3XtAZ0qtvdtsK11r%2FiHkYhGbRyBaH7sTiy5Vdo%2FZrWhgSBDEwmfFd%2FaePF1miqzxOU2wKbn%2F3uw%2B5tU0Pw7cZltMPXIt78GOqUB%2BfIYtrhdR7SG%2B7of26l5MHG%2Fi6s0CpKaM4aUL7eM%2F4V7NXVErru5yGo2NK3bZlttZ1jQ8y7zf4Tw8OvD0KHWNdElVW08FJu4qML%2B2BfSPnjiI8xkIHR0iSuxAbnIGIagkaRrmjbb42YAiAD1lBrEU0AOIwuAXXXHkhuQ0RHkqinRmvmN7wkEtHzuNABDn5eGFZ0WV%2B%2FRK48f%2F8DL0UPyv%2Fr5HS7Z&X-Amz-Signature=c77e0fba670c39421a533eed573d834de81cdbf3c5b8a625d8f2e87d3b6587db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
