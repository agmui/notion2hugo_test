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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILWPWGF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCP9427wGWYIMwd2fUWNZAslsd0EKZ1GPTcvBHlW945EwIgd%2BGNRpbjhIkGAZwbsLtKKZqpDYw%2F9%2FjLcf1iMuxmY4QqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZpznILvbDucnGNEircA1IydHiY9hiZEb9vcMdgLYoAzaukgm8wF3cLDeDpe5j0YBPJVnoFDbVcCWPC%2FoganMhkBV%2Bl%2BYzCkBNVPUfK4aL%2FwozXAaWMVoDZm%2F1G85m4zsWHSIqY3NTBaBkrHkaCLQjn58nYy4r7BzlMEB1BQSVetdE7aerYTT%2BPxy1wQ8BkQM7M%2FNAuuyldp8Cg9DnhMDd%2B%2FPOm4zcFThrYerdBm2qCtCrj9%2B35J%2Fxb4Rp8mxMIVL9ngrf0x6hTHecmIm3LtXS9%2FxJY%2B7U1NOHgmtRDSItDAV2WU584o4TJ69x6RBrvR8zTdvpiJtqtsijZyE8Tr7MwP2WCGwQTb8t%2B0imispn74%2FPgZQL8RN5usl4uDRMLXSyyR3cjhB8u5cMxwGRGJeDar7zLUZJq%2BvZQtz%2BzOwaM%2BqXh0p7E9%2BbuXKzQ%2BbKFFNHw2zo6YJzkVuGJFJGeqQPvSk9QRbukwFRF%2F9LeMnF3%2BZ0wvP0WwTAlRezl0Jfdq1zceW730Lxgv8hQ0c9i5HDQiLQulOMYfPIYQbQ%2Fdz4m97fyJqgxkuUlkRtVQ8x3qtrNSX%2Fn6pKToEyPUuxsZoEb4sWf4fT28aMPdrE3zZzoZvpYHIAh%2BoSkXYmCY8QiYyKoXH7blbZMdXX%2FMJab9r4GOqUBEoA1zX1LCJejrNnbZafie23of4%2Bto0qyFhLTyp0EYZInIRGJxk8W4gIAyN3wULm%2ByRxTB5S%2BKBg4hdEuRh9MQKVMhBxrZ08hwk94GfvlsjY7RhweaU9OveDLaxQL0ljZ1lnx8BvuweEflJ0kfAkiWiUDKr3F5ZymvNCvsVyTbPnIVBL9heBOnf%2B51b5%2BZKxNSgPc1R6nOfzzXvUIipQq51%2B9Tyle&X-Amz-Signature=f779944258bd18503e68ad07b75c3df60124c2cea0d44da9c41f6fbe7666170a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RILWPWGF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCP9427wGWYIMwd2fUWNZAslsd0EKZ1GPTcvBHlW945EwIgd%2BGNRpbjhIkGAZwbsLtKKZqpDYw%2F9%2FjLcf1iMuxmY4QqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZpznILvbDucnGNEircA1IydHiY9hiZEb9vcMdgLYoAzaukgm8wF3cLDeDpe5j0YBPJVnoFDbVcCWPC%2FoganMhkBV%2Bl%2BYzCkBNVPUfK4aL%2FwozXAaWMVoDZm%2F1G85m4zsWHSIqY3NTBaBkrHkaCLQjn58nYy4r7BzlMEB1BQSVetdE7aerYTT%2BPxy1wQ8BkQM7M%2FNAuuyldp8Cg9DnhMDd%2B%2FPOm4zcFThrYerdBm2qCtCrj9%2B35J%2Fxb4Rp8mxMIVL9ngrf0x6hTHecmIm3LtXS9%2FxJY%2B7U1NOHgmtRDSItDAV2WU584o4TJ69x6RBrvR8zTdvpiJtqtsijZyE8Tr7MwP2WCGwQTb8t%2B0imispn74%2FPgZQL8RN5usl4uDRMLXSyyR3cjhB8u5cMxwGRGJeDar7zLUZJq%2BvZQtz%2BzOwaM%2BqXh0p7E9%2BbuXKzQ%2BbKFFNHw2zo6YJzkVuGJFJGeqQPvSk9QRbukwFRF%2F9LeMnF3%2BZ0wvP0WwTAlRezl0Jfdq1zceW730Lxgv8hQ0c9i5HDQiLQulOMYfPIYQbQ%2Fdz4m97fyJqgxkuUlkRtVQ8x3qtrNSX%2Fn6pKToEyPUuxsZoEb4sWf4fT28aMPdrE3zZzoZvpYHIAh%2BoSkXYmCY8QiYyKoXH7blbZMdXX%2FMJab9r4GOqUBEoA1zX1LCJejrNnbZafie23of4%2Bto0qyFhLTyp0EYZInIRGJxk8W4gIAyN3wULm%2ByRxTB5S%2BKBg4hdEuRh9MQKVMhBxrZ08hwk94GfvlsjY7RhweaU9OveDLaxQL0ljZ1lnx8BvuweEflJ0kfAkiWiUDKr3F5ZymvNCvsVyTbPnIVBL9heBOnf%2B51b5%2BZKxNSgPc1R6nOfzzXvUIipQq51%2B9Tyle&X-Amz-Signature=30f784429fbdeb88f9987f04b00c1b3293671aa4debf0e1cbde784abdadb6080&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
