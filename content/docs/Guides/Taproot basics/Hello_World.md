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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MVTNLXW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIGPVHkAEDao7ODo4zf%2BisS5%2FIrtdt%2Fz%2Be2wpgCgXQQWoAiEA0J9fdVSMiO97tHxdhG6t4WYG%2Fc68xh3t5HmoxG3DRNwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlSmSYHc2hDQwOocyrcA33Z6rooZhuhOtabMGGtraqq8p2tUNTgmTvY%2BP9QtCMs6BJi40ceHKcsDDCRm9%2B%2B0b7qYe4Pu2tUQKFSga%2BYokYjqtbhGOGoQLEbG2J8y0mbuo%2BSKVAl7NjCQcSnPTlKRRYt1iXWqIExf%2BnpS1592PnMpMlbPIzJ%2BZotL%2FqJEFp9aNOKJN9hCSIdlHHzndxQlMEI3%2Byz0ri8%2FmmrCC59YKo5sh6PG0CgHmPRRdyP%2BCKGnJg8Y2R%2BdkQN1tJfeHc%2FPVvrPT2aN%2BL4r5H34f2VcDcChh6N7VV%2Fxp4g8zL%2BPkM6cH3JumbxmO1JR1CpjCkwospBVx5Ou9R1Pj%2FlqJDJnCHMT9g8iMISTWpaTtsB9vi44j99Rd6dsYQdCipmWlkT%2BrajpIVHmeG8eP4Vx15FOMJ7NZkdsCP6tqx4h7bQRM%2FhwT9BOnmp9lma0uOGi2h5wYo10UoC7Z5p3IwHE0rJaZjcExPRWTVw3cQfg8H7VFvoKCtezN0jtPxJ7hjlCI7jyGg5aMDnB6QewFLHOPdi2G8yNW0FGf0Ry25TmHzstS5ZQFe%2BqVT%2BIuwvCV53KOMldlbyipcWdNlXjFjzEkoWSYHT6ccw6JQoTPMh7qS5w5AdWpW3Z62Z4M5iL34XMPC%2Fmr0GOqUBkEvRSP90RAzUNuf19MZIkoUOWEhvwFvrQuUBlBe57FmuT2oxUonixyQYw0t9PyxpE3cukzM2uTVmcpr9mrN3xG%2FoEflLSgOtveP8Bj7n2Qyca%2BArhHjYwX1qEdfi74UD%2F3WpuycoUAHoa1eHsMQlYSoV0%2BFGPrgkRWl5VwTlNjksp%2FmOU%2FIgFixLMthvP%2FHUrkHPPz8TmK1islH4RinvLwBo%2FgNG&X-Amz-Signature=458a631af1d4819a5012c352f56ab0f208b348cf32612b85285c28d603901ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MVTNLXW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIGPVHkAEDao7ODo4zf%2BisS5%2FIrtdt%2Fz%2Be2wpgCgXQQWoAiEA0J9fdVSMiO97tHxdhG6t4WYG%2Fc68xh3t5HmoxG3DRNwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlSmSYHc2hDQwOocyrcA33Z6rooZhuhOtabMGGtraqq8p2tUNTgmTvY%2BP9QtCMs6BJi40ceHKcsDDCRm9%2B%2B0b7qYe4Pu2tUQKFSga%2BYokYjqtbhGOGoQLEbG2J8y0mbuo%2BSKVAl7NjCQcSnPTlKRRYt1iXWqIExf%2BnpS1592PnMpMlbPIzJ%2BZotL%2FqJEFp9aNOKJN9hCSIdlHHzndxQlMEI3%2Byz0ri8%2FmmrCC59YKo5sh6PG0CgHmPRRdyP%2BCKGnJg8Y2R%2BdkQN1tJfeHc%2FPVvrPT2aN%2BL4r5H34f2VcDcChh6N7VV%2Fxp4g8zL%2BPkM6cH3JumbxmO1JR1CpjCkwospBVx5Ou9R1Pj%2FlqJDJnCHMT9g8iMISTWpaTtsB9vi44j99Rd6dsYQdCipmWlkT%2BrajpIVHmeG8eP4Vx15FOMJ7NZkdsCP6tqx4h7bQRM%2FhwT9BOnmp9lma0uOGi2h5wYo10UoC7Z5p3IwHE0rJaZjcExPRWTVw3cQfg8H7VFvoKCtezN0jtPxJ7hjlCI7jyGg5aMDnB6QewFLHOPdi2G8yNW0FGf0Ry25TmHzstS5ZQFe%2BqVT%2BIuwvCV53KOMldlbyipcWdNlXjFjzEkoWSYHT6ccw6JQoTPMh7qS5w5AdWpW3Z62Z4M5iL34XMPC%2Fmr0GOqUBkEvRSP90RAzUNuf19MZIkoUOWEhvwFvrQuUBlBe57FmuT2oxUonixyQYw0t9PyxpE3cukzM2uTVmcpr9mrN3xG%2FoEflLSgOtveP8Bj7n2Qyca%2BArhHjYwX1qEdfi74UD%2F3WpuycoUAHoa1eHsMQlYSoV0%2BFGPrgkRWl5VwTlNjksp%2FmOU%2FIgFixLMthvP%2FHUrkHPPz8TmK1islH4RinvLwBo%2FgNG&X-Amz-Signature=83b8e69a49d86b2945dde4bfc03d3ecde1947c1691209723d198202aa641667e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
