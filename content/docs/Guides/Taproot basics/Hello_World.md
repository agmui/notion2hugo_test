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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODY3UYS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoR8oeNDb6CqYGd1EruIgG%2Fb3FZl38dh8eXYSFv9Qy9gIgHNS3yEGEpEZnfVpwJEyAgpSuV%2BNpS6kdJbLnNnMipPcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCdkFYBIyPPdLOwu8CrcA47MfOcCb%2BGJIHwjdOe%2BYN5XBeLa4NpxWjrpEQZq5tVn%2F7UV%2FHEPtIS9cxgG3vXgJBUVAof2IJZ599VakZFOu9of7t78OMWfEi4I2AQZR1w5tToh3PmLvMQLjGCsEcAhL3L0tBeV23iYX4WoeK61vescQAY54uAUQ7ig%2BKQzo5bv8%2F6Pe2U5kQyxvMzspKBC1veiqi%2FUFyn3T1z9dgiDAFDtnadVsZikMIIZyQBOpD2x6j3vvTxXV89Q7yqtwLEUGm2Je02A9E0BLXfdScBwZAuuLsXDIdm%2BgwSglzwc4gaVyolkp3Nd5MvZKHqQ61m6Rwq2tnKUSvE6yMLkoT29Vke6iIF235RDCjItjwVAO%2BQQr0Y0UME2v9Fb22N6sGyRBHXEKv485XkLufflW1iZtGKuge6S1jcNvLwr5eZovwQ9VSo4QeizSJToKYT%2FROo4lVDWj8At5D%2FApAXvAwgAktUnwmFRfVH2Q9L2cc5YqNAm8YYGhmBvD1ZEFayomftcAuU2XL6xX6O30lMyfe6fLmmcbq8UIm1eZOZvhRJkOTG9DdufXBzfCuABi9J4FReQ3YezSDkUaOiWTdQXnVshGt19fVo%2FJWVnZxU5I%2FREwK16ik8PMqt0U1kawDjhMM%2BptMAGOqUBitv%2Fj9u4flgNK01O1MHmO6qcLAmEX%2BD%2FmJc18axukGcUQGGrCa3oni5hQwqb6vm9%2BszkizUhiXx2eHDm9Vm9vJfjnusWl3OhhmHZKyA3Yww2QiL2RJshmNr1HOkpIFIcrejlF2851YjeaWE07UOOUcnWO9CXm2BEO6Iezk7jN6BabiDVjV4hJBLg2QkvQ7n1qI3GFtzBOEnlF%2FtftCUS6ki4XY8W&X-Amz-Signature=67bb9b60363c0a4e0f2287a44309d0a5759e3fa510873d82372cfaf39a349428&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODY3UYS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoR8oeNDb6CqYGd1EruIgG%2Fb3FZl38dh8eXYSFv9Qy9gIgHNS3yEGEpEZnfVpwJEyAgpSuV%2BNpS6kdJbLnNnMipPcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCdkFYBIyPPdLOwu8CrcA47MfOcCb%2BGJIHwjdOe%2BYN5XBeLa4NpxWjrpEQZq5tVn%2F7UV%2FHEPtIS9cxgG3vXgJBUVAof2IJZ599VakZFOu9of7t78OMWfEi4I2AQZR1w5tToh3PmLvMQLjGCsEcAhL3L0tBeV23iYX4WoeK61vescQAY54uAUQ7ig%2BKQzo5bv8%2F6Pe2U5kQyxvMzspKBC1veiqi%2FUFyn3T1z9dgiDAFDtnadVsZikMIIZyQBOpD2x6j3vvTxXV89Q7yqtwLEUGm2Je02A9E0BLXfdScBwZAuuLsXDIdm%2BgwSglzwc4gaVyolkp3Nd5MvZKHqQ61m6Rwq2tnKUSvE6yMLkoT29Vke6iIF235RDCjItjwVAO%2BQQr0Y0UME2v9Fb22N6sGyRBHXEKv485XkLufflW1iZtGKuge6S1jcNvLwr5eZovwQ9VSo4QeizSJToKYT%2FROo4lVDWj8At5D%2FApAXvAwgAktUnwmFRfVH2Q9L2cc5YqNAm8YYGhmBvD1ZEFayomftcAuU2XL6xX6O30lMyfe6fLmmcbq8UIm1eZOZvhRJkOTG9DdufXBzfCuABi9J4FReQ3YezSDkUaOiWTdQXnVshGt19fVo%2FJWVnZxU5I%2FREwK16ik8PMqt0U1kawDjhMM%2BptMAGOqUBitv%2Fj9u4flgNK01O1MHmO6qcLAmEX%2BD%2FmJc18axukGcUQGGrCa3oni5hQwqb6vm9%2BszkizUhiXx2eHDm9Vm9vJfjnusWl3OhhmHZKyA3Yww2QiL2RJshmNr1HOkpIFIcrejlF2851YjeaWE07UOOUcnWO9CXm2BEO6Iezk7jN6BabiDVjV4hJBLg2QkvQ7n1qI3GFtzBOEnlF%2FtftCUS6ki4XY8W&X-Amz-Signature=52492bbd7755fdc0df402f3c199e0b1fb25d89602dd90739b2e7d95be1d3d045&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
