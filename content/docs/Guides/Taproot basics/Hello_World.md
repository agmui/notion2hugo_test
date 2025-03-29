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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4YNVTE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIEeVhc%2BhYgK8XAhTLlv%2FgX%2BAx0LXGI5JjXisqUXcHdczAiAulRrp99gola2M0Mlx9vYv1yOAPdn38A56S%2FKE8L36XSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMw5qv4jB7%2FN44ypOLKtwDvxqS0wZKQTf6C%2FgB1qT5Cnl7Opwc5gFixo9tNhoJXkWWkWjefYMLPhvfbQHeF%2B5Qyog%2FJNta6npnOesvJfq9iLckvXwVpZIEYU6ed9ZcBaXbZd%2FVZl74RLUI9Y63fdWLanpg4XTTT9DEPWrNr5CzT1VZ7hjPioVOZ3L%2FDzEExAn70Tx7iBnLT8DLHTxls75hEZ0amaiVlA8A5QuEr%2FKAkYuupNJUeBFyUxDR%2Ftxk0Dpt6PYpAJ2%2Bs2numSnFNfH32O3Jd26Ild2Qa3UBYv%2FG3ouc0%2BtMobtMRC2EjWAKwOMSp36tP1jc94UOgsvAoYDkftUGHhO5DMLDAZrDNbaQ9dWhgdw9hEpHSTvCcTkaZcsGNdqyNdz7isP%2BsGK8%2FDK3X%2BzORhPnodNKes7RQERGTOl%2FTfo%2FvICEE%2Be7zwiWxX5izo%2BlX1VBMd5MOs9ptRlL%2Febb3Zei3w7evJDEzdLAv2Bv9amAsbpFObaTHi8hr1B%2FQyMJkxI4dovkzjKPQGgzwqnIzi5Xhwj3zdhI6R1JDqHWnthse0Kscp8zbIEOMFCR%2FGicAS7vyCZad5eyemjw1L%2B6GC%2Fyf3UPRnZTgMJYZbwV96NGaxbOOQgKi1kvyL1GqDBNHOJsnBJMoGUwsIufvwY6pgFLuXPSWSeZ5CGhIA%2B6ctaS4pkYIj%2FZePg6XYdu5LR3l2%2FukwG9zXisW3iQUBAt9eINzZfp1cAQjH%2B0PqxGQITJlZCPLH2GMapnurk61JZ%2FWDcgfg%2FIikkDzP%2FlIzoV8Jl2nVf82JqQJiYBbPkETGq9iROXKp2pZx9V4IPr4FtuyriRGT20gax%2FHNQA19PjN81yGe9h%2BkhNlebZQxXX8aI8cCZgDoDG&X-Amz-Signature=be7a51dae0d0e3db7568d056af2df0c8eab355fb71d47f140706e74745d58ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4YNVTE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIEeVhc%2BhYgK8XAhTLlv%2FgX%2BAx0LXGI5JjXisqUXcHdczAiAulRrp99gola2M0Mlx9vYv1yOAPdn38A56S%2FKE8L36XSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMw5qv4jB7%2FN44ypOLKtwDvxqS0wZKQTf6C%2FgB1qT5Cnl7Opwc5gFixo9tNhoJXkWWkWjefYMLPhvfbQHeF%2B5Qyog%2FJNta6npnOesvJfq9iLckvXwVpZIEYU6ed9ZcBaXbZd%2FVZl74RLUI9Y63fdWLanpg4XTTT9DEPWrNr5CzT1VZ7hjPioVOZ3L%2FDzEExAn70Tx7iBnLT8DLHTxls75hEZ0amaiVlA8A5QuEr%2FKAkYuupNJUeBFyUxDR%2Ftxk0Dpt6PYpAJ2%2Bs2numSnFNfH32O3Jd26Ild2Qa3UBYv%2FG3ouc0%2BtMobtMRC2EjWAKwOMSp36tP1jc94UOgsvAoYDkftUGHhO5DMLDAZrDNbaQ9dWhgdw9hEpHSTvCcTkaZcsGNdqyNdz7isP%2BsGK8%2FDK3X%2BzORhPnodNKes7RQERGTOl%2FTfo%2FvICEE%2Be7zwiWxX5izo%2BlX1VBMd5MOs9ptRlL%2Febb3Zei3w7evJDEzdLAv2Bv9amAsbpFObaTHi8hr1B%2FQyMJkxI4dovkzjKPQGgzwqnIzi5Xhwj3zdhI6R1JDqHWnthse0Kscp8zbIEOMFCR%2FGicAS7vyCZad5eyemjw1L%2B6GC%2Fyf3UPRnZTgMJYZbwV96NGaxbOOQgKi1kvyL1GqDBNHOJsnBJMoGUwsIufvwY6pgFLuXPSWSeZ5CGhIA%2B6ctaS4pkYIj%2FZePg6XYdu5LR3l2%2FukwG9zXisW3iQUBAt9eINzZfp1cAQjH%2B0PqxGQITJlZCPLH2GMapnurk61JZ%2FWDcgfg%2FIikkDzP%2FlIzoV8Jl2nVf82JqQJiYBbPkETGq9iROXKp2pZx9V4IPr4FtuyriRGT20gax%2FHNQA19PjN81yGe9h%2BkhNlebZQxXX8aI8cCZgDoDG&X-Amz-Signature=e5d01d5ef0fad172344cdb2b5917e237ae9b33ab682521a7c9d41415e24cc4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
