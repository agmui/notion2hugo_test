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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAFW7N2J%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4mu7G5P73KuJKw0CdCoG1ip9hB2%2F%2Bj9gVeNyuIocPUAiEA45he91KLLDLsn%2FImQUNeI0Lcs6SBAItEwciV7P5h8Bcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDB%2FwcQosyMhimRJujCrcAxT45XKmDGPKY3uNY8Ep2e169%2Fmll%2BonkuUka4wdIidyaC4G9GGBQy7vOH2RStG0IpJwHCXuQky09cgwYcnvDwOonPq0rOKZsFYM834UtZEjGkl1mTENAwso1iDGZQbR8ubaZW6YsFx50LKXICzgKCpH3BEXObAfo9ZmRjWJL%2BEcOgrAl%2FqSqaBm3tRUaSHFssvfGWifccMjCTIV4VitOxlMYA%2FK8fyJDyD5RAjtthkD%2Fzhqza0eAmUyO2RYBDnBSMWAt5xkR8GnBPQBMiVeQ%2FPUg6tJDHajX96dlR%2FTqt0fOIwCHFH7bSc1eDQRRuM1WMHDa3ZvtElm0Mp0lUBu%2Fc%2B%2BYC2Ix7fhIgomgRIGqI7EVEx1oOv%2BGFlM%2F%2BH6kIi9l8t2EALWiiywXj1w8bZvvNAIJBQDMWRJ8ANjDldt9tPjReRsbnOmzv89ZzU%2FXjBSV7Efjnvv5Qrsf0VnLfbCjFJ4M6X6wV0P%2FouIzq4cOgkAWAvK5w3KTFsSA7Cbl5bpEmx0dtU09N0bS64Ru25uSqh5RvpDK8uemg6X4WnN%2BVQUC2O0O9MCCEoTmbuTtAW9%2BIr8NBn2PSXPxrSOenoGFKz8urOQu9ByrLEjaFpDxM5fK35sC%2F0484xdVkOCMLO%2B58AGOqUB3CSWi6ait5YzYUJYBq5ehLOoaCX8A8YV2PeUhIKZNRWjwMZfUq%2BlwUq5OrJayAtzIvTzMW0mPNqjVviJFw%2Blo1bl5Eljowv59E8Y7AQ1JF4in1r8NPo7oC%2F%2FxLFX1T4Qe5tEM%2BxSGXlzU9ktVMITuX%2B9vB8EC2jwA%2F4zw0gCVNHvkG68KxqYivcYEOvOxWI2Yw1g82ViL798zdtxdE53gTIG%2BKPk&X-Amz-Signature=5411b581e1dcf4ace77c715ff1ec96c1d03ae66687fc1e7dfcf880e7cb2ddda3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAFW7N2J%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4mu7G5P73KuJKw0CdCoG1ip9hB2%2F%2Bj9gVeNyuIocPUAiEA45he91KLLDLsn%2FImQUNeI0Lcs6SBAItEwciV7P5h8Bcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDB%2FwcQosyMhimRJujCrcAxT45XKmDGPKY3uNY8Ep2e169%2Fmll%2BonkuUka4wdIidyaC4G9GGBQy7vOH2RStG0IpJwHCXuQky09cgwYcnvDwOonPq0rOKZsFYM834UtZEjGkl1mTENAwso1iDGZQbR8ubaZW6YsFx50LKXICzgKCpH3BEXObAfo9ZmRjWJL%2BEcOgrAl%2FqSqaBm3tRUaSHFssvfGWifccMjCTIV4VitOxlMYA%2FK8fyJDyD5RAjtthkD%2Fzhqza0eAmUyO2RYBDnBSMWAt5xkR8GnBPQBMiVeQ%2FPUg6tJDHajX96dlR%2FTqt0fOIwCHFH7bSc1eDQRRuM1WMHDa3ZvtElm0Mp0lUBu%2Fc%2B%2BYC2Ix7fhIgomgRIGqI7EVEx1oOv%2BGFlM%2F%2BH6kIi9l8t2EALWiiywXj1w8bZvvNAIJBQDMWRJ8ANjDldt9tPjReRsbnOmzv89ZzU%2FXjBSV7Efjnvv5Qrsf0VnLfbCjFJ4M6X6wV0P%2FouIzq4cOgkAWAvK5w3KTFsSA7Cbl5bpEmx0dtU09N0bS64Ru25uSqh5RvpDK8uemg6X4WnN%2BVQUC2O0O9MCCEoTmbuTtAW9%2BIr8NBn2PSXPxrSOenoGFKz8urOQu9ByrLEjaFpDxM5fK35sC%2F0484xdVkOCMLO%2B58AGOqUB3CSWi6ait5YzYUJYBq5ehLOoaCX8A8YV2PeUhIKZNRWjwMZfUq%2BlwUq5OrJayAtzIvTzMW0mPNqjVviJFw%2Blo1bl5Eljowv59E8Y7AQ1JF4in1r8NPo7oC%2F%2FxLFX1T4Qe5tEM%2BxSGXlzU9ktVMITuX%2B9vB8EC2jwA%2F4zw0gCVNHvkG68KxqYivcYEOvOxWI2Yw1g82ViL798zdtxdE53gTIG%2BKPk&X-Amz-Signature=acb7ada5814af6b0f90f70fb6b2ce7bdd882ab23baa9d25c6fc04d51a2f7cac0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
