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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZTGZWM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqAxEVDZmpmRKY8z5UwKR2VIaRir2MHNIr%2BKY1wr5UWwIhAMw1sUYa6IciLTxwS2bPAJrtxZ7vfojUhGSifr1%2BDMgCKv8DCDUQABoMNjM3NDIzMTgzODA1Igx6VKAuWDyFDZp3RbQq3AOxRTznYPZPzOAciEdPVzLSsIrkvGJxkZM0t0PnVmdoPDrQh8Spb%2Fw0Lq1dZiBtXMBCHEtFxBYKrOrsx9TCoqepAJQOJp6QNEtexqRUdjUhrk1K0k8FEm5HvA9pWI8XIAtj4f7SvRV1KnUkEuFAeWYVLSbmFdmc9yS7VItBVGx%2FLvWqkrGtM5mv0f%2F1vuLTvtp8E%2FIBUHsAh%2BRqAvIWwyBWttLRl8Cq%2BS2Eh%2BBIuA76F%2FlgnLKsA2zmjhWB5w5KkbKBda15bL90gb8%2BmdDLp%2BzSGQHIfROC%2Ft8jZgXTGgX9TefMZBg2wF%2FQJGjF%2BLeXLO%2F1l8AZTTZXvJNVS6mJ71drlIldLj%2B2aYNW7ZHDtu7aCsCzUmrhHgFnBal7dauWH%2B%2F%2BCOtI1TM9tL1dHoc4WSrVJLAkibxwvwOArIuoK%2FSs9jvpxmw5OLgcPp264jk5nOQM%2B%2BHcgpysvDEYUp%2F8cbSk9%2FqlFW0%2Bh16oxDIG23mmWlRfBJwghCJPqo4YwStnFTFLJDbViCy%2BbSP26GM2b%2BbAnltaQnbyo5iHvauN%2FWhNLB%2FUHdumOiHP5SQA82wpPpQ98iaecYwSJ3g7CVqffP1mrOMT0eulrJ%2F1NmK%2B5EQaq5qoMOcZbPJX%2BbyuZjDD0q%2FABjqkAXwIIlNF%2Fx0Z1iCN6ZcJ0Wz9LcHZ4bntUuCilhAM2pJu%2B9js3SBnxN%2FhRqSinqHn%2B5%2F7ddJe%2BA6CCkszNG3XApmAeB01%2FenVF0pMldzA4WYNlFFXwpKAbx4rxmVYzndcenaUNp%2FbU%2Bz8PgYlT5%2FeshzVjq%2BopOF2ecqofbW5fSXeaI26gTS%2FsTVHvi%2Fee6%2B8%2BPojYaebkQmvHdF%2Boo1Ot0FHeD2R&X-Amz-Signature=cf98b31ce1339a4d86ab80ec24fb21a87a2c711681fa8b160bbcfcb1968f97b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZTGZWM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqAxEVDZmpmRKY8z5UwKR2VIaRir2MHNIr%2BKY1wr5UWwIhAMw1sUYa6IciLTxwS2bPAJrtxZ7vfojUhGSifr1%2BDMgCKv8DCDUQABoMNjM3NDIzMTgzODA1Igx6VKAuWDyFDZp3RbQq3AOxRTznYPZPzOAciEdPVzLSsIrkvGJxkZM0t0PnVmdoPDrQh8Spb%2Fw0Lq1dZiBtXMBCHEtFxBYKrOrsx9TCoqepAJQOJp6QNEtexqRUdjUhrk1K0k8FEm5HvA9pWI8XIAtj4f7SvRV1KnUkEuFAeWYVLSbmFdmc9yS7VItBVGx%2FLvWqkrGtM5mv0f%2F1vuLTvtp8E%2FIBUHsAh%2BRqAvIWwyBWttLRl8Cq%2BS2Eh%2BBIuA76F%2FlgnLKsA2zmjhWB5w5KkbKBda15bL90gb8%2BmdDLp%2BzSGQHIfROC%2Ft8jZgXTGgX9TefMZBg2wF%2FQJGjF%2BLeXLO%2F1l8AZTTZXvJNVS6mJ71drlIldLj%2B2aYNW7ZHDtu7aCsCzUmrhHgFnBal7dauWH%2B%2F%2BCOtI1TM9tL1dHoc4WSrVJLAkibxwvwOArIuoK%2FSs9jvpxmw5OLgcPp264jk5nOQM%2B%2BHcgpysvDEYUp%2F8cbSk9%2FqlFW0%2Bh16oxDIG23mmWlRfBJwghCJPqo4YwStnFTFLJDbViCy%2BbSP26GM2b%2BbAnltaQnbyo5iHvauN%2FWhNLB%2FUHdumOiHP5SQA82wpPpQ98iaecYwSJ3g7CVqffP1mrOMT0eulrJ%2F1NmK%2B5EQaq5qoMOcZbPJX%2BbyuZjDD0q%2FABjqkAXwIIlNF%2Fx0Z1iCN6ZcJ0Wz9LcHZ4bntUuCilhAM2pJu%2B9js3SBnxN%2FhRqSinqHn%2B5%2F7ddJe%2BA6CCkszNG3XApmAeB01%2FenVF0pMldzA4WYNlFFXwpKAbx4rxmVYzndcenaUNp%2FbU%2Bz8PgYlT5%2FeshzVjq%2BopOF2ecqofbW5fSXeaI26gTS%2FsTVHvi%2Fee6%2B8%2BPojYaebkQmvHdF%2Boo1Ot0FHeD2R&X-Amz-Signature=9d7279b5f533e2be0ced4b87d03311dbfd76eb020a573935adc1f560693d0fab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
