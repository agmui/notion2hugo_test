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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72IJOKK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEXVHoHp6lSlZudyCLarDHayPfF9vbFQsHc0C54oYtdeAiAGuaoUxQa5ETPTBj6trKhQYt%2FrIaHQUK1wZmbLXVJcqCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVJM7Q%2Bam9sTI9AXKtwDmwZbtC5RvkculFmSdNm4rtn26WFmujdAnspiV28E7qMXJG9nF2k6RYCgGet03Fnzh41mjT%2Ba9UJnidwykftH26lQPnBRUtthyCBhJWlbtwZfYlz8tD6yHPFMyUFOAuAdEGsFbYqYHFos4I4EQG5WDcuRyHkOc7Wm2Htq7pEUJR6AX1g8codFow%2F5B%2BIGj3XBSnkZvFN%2FD9KF2D9kWPygS6S0%2Bso2%2B92DlVEgr1JzOZzY9AYFtK7%2BO8xQLK3%2FOFCkYPduKANopmjyTBz4RwIFxdOJABJ7z%2Boa0K0MXiLFOw%2BBuWS6vU1feR61z0%2FrsVqrnOz5j0M6z6%2FhhZ%2BzkzU7ld5kDDdVkAdsl5zk%2F0zfRSMAmQY33f%2B3FMn5LX3lDO8eKoLwqFZNUlnTX0IM2DbXhb%2BFYfjGvDoBUAVeLJ3oGSE4Hrxvp7TQmcGg2NMilcoupdTJTOVBvgu7IsdBdp8RK%2F5%2FYIQMZtbY7F4HNHHxdex1zYUhe%2FDjPBYNfEmmi4PxtlJQely4JKfxeSPWEwfDr4R9%2FcB4GYY50j6dFVn%2B7V9XFdEN7pFfkfV8UUuXLeT0VppceoPBrB4ZGpCpHhe7Z60FjuxbVEGeBtBLOxVVQQ9BpKLWqM3e8vlzNHEwnvvWvQY6pgFctddVtHOmZPED1XteKGTxPVaXPfx9kImYCSzJw7D%2BRz33urEet3%2BKorNlaKUQCiIeKGfmKSCKO0%2FowCc%2FwK0eEJz1nw2%2BHRaRazpxmU4s4AkJJrPrpfJO%2BmwRG3t9VK1zAUkNzVdW551yKxiWMj%2F6ZETvsvn2K%2B8LxYDC2QeP%2FjCeUhWQ4e9TfxdoiCB0ccsW0VDdP582ySaL%2BKVR55B1PHiqzzn3&X-Amz-Signature=03815e5adf53705873316398ab3e4f70f17c142736de18c61f0054c9471ecb1a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72IJOKK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEXVHoHp6lSlZudyCLarDHayPfF9vbFQsHc0C54oYtdeAiAGuaoUxQa5ETPTBj6trKhQYt%2FrIaHQUK1wZmbLXVJcqCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVJM7Q%2Bam9sTI9AXKtwDmwZbtC5RvkculFmSdNm4rtn26WFmujdAnspiV28E7qMXJG9nF2k6RYCgGet03Fnzh41mjT%2Ba9UJnidwykftH26lQPnBRUtthyCBhJWlbtwZfYlz8tD6yHPFMyUFOAuAdEGsFbYqYHFos4I4EQG5WDcuRyHkOc7Wm2Htq7pEUJR6AX1g8codFow%2F5B%2BIGj3XBSnkZvFN%2FD9KF2D9kWPygS6S0%2Bso2%2B92DlVEgr1JzOZzY9AYFtK7%2BO8xQLK3%2FOFCkYPduKANopmjyTBz4RwIFxdOJABJ7z%2Boa0K0MXiLFOw%2BBuWS6vU1feR61z0%2FrsVqrnOz5j0M6z6%2FhhZ%2BzkzU7ld5kDDdVkAdsl5zk%2F0zfRSMAmQY33f%2B3FMn5LX3lDO8eKoLwqFZNUlnTX0IM2DbXhb%2BFYfjGvDoBUAVeLJ3oGSE4Hrxvp7TQmcGg2NMilcoupdTJTOVBvgu7IsdBdp8RK%2F5%2FYIQMZtbY7F4HNHHxdex1zYUhe%2FDjPBYNfEmmi4PxtlJQely4JKfxeSPWEwfDr4R9%2FcB4GYY50j6dFVn%2B7V9XFdEN7pFfkfV8UUuXLeT0VppceoPBrB4ZGpCpHhe7Z60FjuxbVEGeBtBLOxVVQQ9BpKLWqM3e8vlzNHEwnvvWvQY6pgFctddVtHOmZPED1XteKGTxPVaXPfx9kImYCSzJw7D%2BRz33urEet3%2BKorNlaKUQCiIeKGfmKSCKO0%2FowCc%2FwK0eEJz1nw2%2BHRaRazpxmU4s4AkJJrPrpfJO%2BmwRG3t9VK1zAUkNzVdW551yKxiWMj%2F6ZETvsvn2K%2B8LxYDC2QeP%2FjCeUhWQ4e9TfxdoiCB0ccsW0VDdP582ySaL%2BKVR55B1PHiqzzn3&X-Amz-Signature=56bab81b15659c40c0e77d99f7562470290e6ea4891b7bd50d2589ebb5b8fcef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
