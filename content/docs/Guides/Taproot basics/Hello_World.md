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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6VMUM7L%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1NnOkN%2BaHKp59JfJQIIeMXkULwAX9ghy2qbw86J4PaAiEA%2BrFerwdMyyG45d0etywFOBrvzBolSGGzJaURStByhpEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqJbyhv93uHSwBC%2FCrcA5k09CvID0jradxDE%2F6dCpWll5%2BatD9%2BgmfpqIxKp%2BS1G5dRMtXgCX8eNpHS4T6l39M21PaMJ2x7T5EWGnMgu5%2BqxGT7VtF%2BZN%2B13xXmF4AFUb6hzBiZJLzCPXiew5v4Vwb3ldM%2BFwvmiyUW8lIXGqYbsf1VA%2By7RHBwUkQy7aWOEt2BBpGxzvk82zOKZCXtRts2nIEKhfIXBrUk6vL%2FB5WIBfU%2BpByZo%2F%2BOSOS%2B%2FPijf9O13Gmm%2BFIew%2BmH4yXmfgTbq2jVjgFgF8qnmB4MTRcB9AE6EbWxLY2O17nH%2Fo6Gtwy0hTpYTEJe%2F%2F1nw7%2FiqRpwAoR%2F%2Fr8bTHbJGx%2BHdGuTMupSNcLi2NdnGKVWcgcE%2BdFDkZ6TscEM%2FU%2B9oKU2aaaXgWIaIhtMz%2B8w%2BF3u7E4Qk63g5%2BbngYqSGPZsGIC77UQ4jWDed5%2B7sgFIjSIBAFx3Umh05xOuE%2BiMU4EAWT%2FHQPsgKnbCGHGkAZDWyDS6Woc3hTLCRvbC2gsQf2ai8gKwcPKZNT%2Bom1Oc8CLxahIrGS1JuSVJHU9e4M%2BTyqclUeeVRCKFGkAXsu9FZeJCPHwD2ktSbELldixNZYn902x6iIDGQbnOqMtCu7jlhiELkr1pJG75wyiuQOsNMNXLpMIGOqUBzIrCmIvM89EN%2BtinVbKzB5iRk2LmZ8xO1VWkWJEZ3x79XfatWyly6N40t7Eeu5I987ps8jVL6hJgN8%2B5QSDkIaXR0y%2BjF3rHpleL6I8nycArNvzetNGaDf4bhdEGrhBD3bzIS6kIhsih5b99PMR%2Bu9GK8rSh1RA6LvMvm2oA7zUrlHH9ugO%2BKRAt2o0%2BxR%2BJXVJP5quYR8tfwIuFitAoUILHYCWe&X-Amz-Signature=b72aae59b32f9e44735436ac5b319b0d8023bbfb24483eff03a2c4d7eefc0100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6VMUM7L%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1NnOkN%2BaHKp59JfJQIIeMXkULwAX9ghy2qbw86J4PaAiEA%2BrFerwdMyyG45d0etywFOBrvzBolSGGzJaURStByhpEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqJbyhv93uHSwBC%2FCrcA5k09CvID0jradxDE%2F6dCpWll5%2BatD9%2BgmfpqIxKp%2BS1G5dRMtXgCX8eNpHS4T6l39M21PaMJ2x7T5EWGnMgu5%2BqxGT7VtF%2BZN%2B13xXmF4AFUb6hzBiZJLzCPXiew5v4Vwb3ldM%2BFwvmiyUW8lIXGqYbsf1VA%2By7RHBwUkQy7aWOEt2BBpGxzvk82zOKZCXtRts2nIEKhfIXBrUk6vL%2FB5WIBfU%2BpByZo%2F%2BOSOS%2B%2FPijf9O13Gmm%2BFIew%2BmH4yXmfgTbq2jVjgFgF8qnmB4MTRcB9AE6EbWxLY2O17nH%2Fo6Gtwy0hTpYTEJe%2F%2F1nw7%2FiqRpwAoR%2F%2Fr8bTHbJGx%2BHdGuTMupSNcLi2NdnGKVWcgcE%2BdFDkZ6TscEM%2FU%2B9oKU2aaaXgWIaIhtMz%2B8w%2BF3u7E4Qk63g5%2BbngYqSGPZsGIC77UQ4jWDed5%2B7sgFIjSIBAFx3Umh05xOuE%2BiMU4EAWT%2FHQPsgKnbCGHGkAZDWyDS6Woc3hTLCRvbC2gsQf2ai8gKwcPKZNT%2Bom1Oc8CLxahIrGS1JuSVJHU9e4M%2BTyqclUeeVRCKFGkAXsu9FZeJCPHwD2ktSbELldixNZYn902x6iIDGQbnOqMtCu7jlhiELkr1pJG75wyiuQOsNMNXLpMIGOqUBzIrCmIvM89EN%2BtinVbKzB5iRk2LmZ8xO1VWkWJEZ3x79XfatWyly6N40t7Eeu5I987ps8jVL6hJgN8%2B5QSDkIaXR0y%2BjF3rHpleL6I8nycArNvzetNGaDf4bhdEGrhBD3bzIS6kIhsih5b99PMR%2Bu9GK8rSh1RA6LvMvm2oA7zUrlHH9ugO%2BKRAt2o0%2BxR%2BJXVJP5quYR8tfwIuFitAoUILHYCWe&X-Amz-Signature=8f8678799b7537b51b362e1eae397da61a70b0e8de2ee6c2089c825092f590aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
