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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3LUUI6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCA1aV9%2Bf5z0EttulFEzh3GRO8yP%2BLowlvESofWdxl%2BfQIgK%2B2R918FaenscXfV0Abw8oSy3XmUy0O2CDmTEkncACcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMWk10XDude7CSNIircA335iQ35lMrUttQb99H2wjjIn65gfY3jOvXX7VelropgyVj5mxnOqOwVnLfAIsk2sTcIyEUYYuZKf0nN8cRvS9rmUE88zhu3kk4aXKSG9L1V60ozPMS9FgdI%2Bi6FWsyelqsrIMExawEucRC%2F29nZ1F4fIVfYxByJJ30sGUREVNiqUepinMOqxWh%2BtDAS%2BRIx5JxkuEYt3xCPyyDBQ%2Fs0KECWqp3tqHZkM4w7v%2BJ2IosrdVbVBqkIU1BrtcHaZL090btaozvbA%2Fdf8JRHjnzqjTUFP6%2FKN1FSiHCgUAV6RKiHGL4NSFj5QlDhazYh1tJIsZ6uLa25TZBPdaFmOjIqMwqskpsDasDju9SbAiqBZKcz3o7jT9f%2Bf%2BZ8vX0QhRf4NcOEMWErEbsuFKNZuAdVZj608MgC%2BS%2Bq7YRsuRIbiTcRbc9EXjHE%2BI1RMsfvvklDgR1AR6ou6MSTCasdHRME%2BNK0Tm4%2FflwB%2BAiuTABPjsZdxJFNdO7caA8op2NNm7JaoQjs7u0eb%2F1FFnuOeZ1QimjHodrhN8HI%2Bsim08DaHxJTDDbU3DeaOkGhmVjzH6BuAaH3rNkq7OVNOwvR4WNdYPpefse8HRqo4PtV1aefH%2BVGvndof4w%2FW3KLEvbnMImUusEGOqUBMa9yo62aWjVXagZ2ITEMm5ozKp4vp681mD3LEgc3ax3%2F9VEiOdxtGcMC%2F8IK7P4pCJ0zzyWSA%2BxsqNUyUusc5XCbtlO2s0MS1r6sbstmcUDK%2BxknOcmFFUmY3iuXPDhYibPbn%2BliHFRLNrwq%2B%2BcvgELrXDE0xUSCXTdE3FyDHh33uK%2BC0qfGG9o7Qo7o7DxkMvom1lz%2FZ36Gd1WVkHeT8H9XMnn%2F&X-Amz-Signature=3142abdf028c45012f47a03d3078a05dff00ce31643259ea29782076ab51beb1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3LUUI6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCA1aV9%2Bf5z0EttulFEzh3GRO8yP%2BLowlvESofWdxl%2BfQIgK%2B2R918FaenscXfV0Abw8oSy3XmUy0O2CDmTEkncACcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMWk10XDude7CSNIircA335iQ35lMrUttQb99H2wjjIn65gfY3jOvXX7VelropgyVj5mxnOqOwVnLfAIsk2sTcIyEUYYuZKf0nN8cRvS9rmUE88zhu3kk4aXKSG9L1V60ozPMS9FgdI%2Bi6FWsyelqsrIMExawEucRC%2F29nZ1F4fIVfYxByJJ30sGUREVNiqUepinMOqxWh%2BtDAS%2BRIx5JxkuEYt3xCPyyDBQ%2Fs0KECWqp3tqHZkM4w7v%2BJ2IosrdVbVBqkIU1BrtcHaZL090btaozvbA%2Fdf8JRHjnzqjTUFP6%2FKN1FSiHCgUAV6RKiHGL4NSFj5QlDhazYh1tJIsZ6uLa25TZBPdaFmOjIqMwqskpsDasDju9SbAiqBZKcz3o7jT9f%2Bf%2BZ8vX0QhRf4NcOEMWErEbsuFKNZuAdVZj608MgC%2BS%2Bq7YRsuRIbiTcRbc9EXjHE%2BI1RMsfvvklDgR1AR6ou6MSTCasdHRME%2BNK0Tm4%2FflwB%2BAiuTABPjsZdxJFNdO7caA8op2NNm7JaoQjs7u0eb%2F1FFnuOeZ1QimjHodrhN8HI%2Bsim08DaHxJTDDbU3DeaOkGhmVjzH6BuAaH3rNkq7OVNOwvR4WNdYPpefse8HRqo4PtV1aefH%2BVGvndof4w%2FW3KLEvbnMImUusEGOqUBMa9yo62aWjVXagZ2ITEMm5ozKp4vp681mD3LEgc3ax3%2F9VEiOdxtGcMC%2F8IK7P4pCJ0zzyWSA%2BxsqNUyUusc5XCbtlO2s0MS1r6sbstmcUDK%2BxknOcmFFUmY3iuXPDhYibPbn%2BliHFRLNrwq%2B%2BcvgELrXDE0xUSCXTdE3FyDHh33uK%2BC0qfGG9o7Qo7o7DxkMvom1lz%2FZ36Gd1WVkHeT8H9XMnn%2F&X-Amz-Signature=f27a750ff5e2c8a79166609a3ce1591c1184c7db18a97ebd5249e5f45abe67fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
