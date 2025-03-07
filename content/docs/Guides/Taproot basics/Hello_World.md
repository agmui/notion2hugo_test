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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCZPAAV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC15I7L5VVAr5LTY3oWndYNt8w3nOHOO2z6FwTRGq2GcAIgLP6KHwTqc4ULNbYbjhxUClvB0X2eO%2B4u6EdtN8uGso8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCGSc3h8qiTtJSdiXSrcAwSN0G4XZWKhnOi632Ppr529%2BC5uThw5QD3FLPQcV2XGpgWfpyQppreKOCx3lYihTESVOGpRbep4P%2BZZgVcyxwDiv3UnZVR7Ipmv0oJeptHqiPtd0%2F5IrC5PLvHl%2FJbb56hbeisCBR5D0X04unUJdbcgs6egsYj8C43SxDOGqNrEaZwtBv2HplBWPZ1n0MAd69pfp3YJX8eoH3BStmeS6fA5x%2B5mu5TFOcl%2FKgGvZJ1YUZ5sjt5BLFOlT2A%2Fc2ZBqDBxk7ja8nHfaQkPxBuNYYVDY3q6uvoByFRypjhjSEfeZzyHQnww0geCkYLyEsYN12AmM98%2FKolU%2BOt%2FLFnWv7Yc5CUvXtKdY6Uzg1fVTq9bcI%2FSqKKgyLX6Ipb3zfiI%2BAPjuHnI8gnePhnUIKJBfX2YZ%2FUInKCSoX4kFgeq3Tlabgtavv7I4aWuZAvawVcOiXYDQyYcF9dJx%2BB%2FUJC13WBh03vf9V%2BH8BI2PKIuCwxibMRpEHdAiZBmMfuQCl0%2B34HFvItCdQwy70doago6zt3XYyAblMah%2Bcwh0EngF%2BaGckDW8xlafDqAd8M%2FEGbv0x7bSaQ%2BMobJQpoM%2FnxVL99GUG%2F0AL0hy%2BlFl5dzfvb%2Bk7wLEzQUfEf1uO6cMKepq74GOqUBKz4tsuYpSonCzjQMnktEkr8uVl90x8m9v1RBxMthBPtL9P%2Be95AUFHDQoy1GRNT%2F7N0ExI1wqyBwb9fQWfjHkof1g9CDE370PyamUf%2BKVVdT0jRPPES7pZ94LAh6IRYOxpaS0iqvrsptuxIzK4yYHpH9P1OSn2HZI3IF5n6mXS8a5a9xduTZvk9t7NhWifKwQY3RcVYczsMF5Z0KBx6enzF%2BII%2BP&X-Amz-Signature=7143893e3f808c13345fd2405060dc861e9b418f61db6fda4b03fd3d9eda23eb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCZPAAV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC15I7L5VVAr5LTY3oWndYNt8w3nOHOO2z6FwTRGq2GcAIgLP6KHwTqc4ULNbYbjhxUClvB0X2eO%2B4u6EdtN8uGso8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCGSc3h8qiTtJSdiXSrcAwSN0G4XZWKhnOi632Ppr529%2BC5uThw5QD3FLPQcV2XGpgWfpyQppreKOCx3lYihTESVOGpRbep4P%2BZZgVcyxwDiv3UnZVR7Ipmv0oJeptHqiPtd0%2F5IrC5PLvHl%2FJbb56hbeisCBR5D0X04unUJdbcgs6egsYj8C43SxDOGqNrEaZwtBv2HplBWPZ1n0MAd69pfp3YJX8eoH3BStmeS6fA5x%2B5mu5TFOcl%2FKgGvZJ1YUZ5sjt5BLFOlT2A%2Fc2ZBqDBxk7ja8nHfaQkPxBuNYYVDY3q6uvoByFRypjhjSEfeZzyHQnww0geCkYLyEsYN12AmM98%2FKolU%2BOt%2FLFnWv7Yc5CUvXtKdY6Uzg1fVTq9bcI%2FSqKKgyLX6Ipb3zfiI%2BAPjuHnI8gnePhnUIKJBfX2YZ%2FUInKCSoX4kFgeq3Tlabgtavv7I4aWuZAvawVcOiXYDQyYcF9dJx%2BB%2FUJC13WBh03vf9V%2BH8BI2PKIuCwxibMRpEHdAiZBmMfuQCl0%2B34HFvItCdQwy70doago6zt3XYyAblMah%2Bcwh0EngF%2BaGckDW8xlafDqAd8M%2FEGbv0x7bSaQ%2BMobJQpoM%2FnxVL99GUG%2F0AL0hy%2BlFl5dzfvb%2Bk7wLEzQUfEf1uO6cMKepq74GOqUBKz4tsuYpSonCzjQMnktEkr8uVl90x8m9v1RBxMthBPtL9P%2Be95AUFHDQoy1GRNT%2F7N0ExI1wqyBwb9fQWfjHkof1g9CDE370PyamUf%2BKVVdT0jRPPES7pZ94LAh6IRYOxpaS0iqvrsptuxIzK4yYHpH9P1OSn2HZI3IF5n6mXS8a5a9xduTZvk9t7NhWifKwQY3RcVYczsMF5Z0KBx6enzF%2BII%2BP&X-Amz-Signature=4d33e80e72f26e882de9e3817fe3fd9d638479fda41b0053d0c32909e9e102a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
