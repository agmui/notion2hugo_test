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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNGQJDY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDNSpTUkxjXJbzQ1C5MK0lQzZAiHwbFJxCOYFuympn5gAiEA70JnoXQs%2FRyguEobhEpJ7VTCaHRWqzHxQkRxIVfExHcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6Ncz5gCm1VUqgiQircA5HLmeWbcHW8fID4WfZ0cNX0bySE723h4DUQaZZ2AlgAvdjCSAF1mSGpsCnt0l6aVxV1JDI9icIFMrP4L2Y%2BsoSgO%2B7auXqcLQGghAnCS4wL81c6uJOKHi7zsP3rEOHMexqWmaefstnXuslcGscGYP%2BO2cDNvKYVMSD6GqNzS2unTW1a4ZbYHg2fNOH8MBonUtQXDybjAJ1zTMXx1o1JyUvNA4Pl5ESOeHpCKSURJ%2FNLk78zMyB6Bby4oZXqP5MlCYuaTIMbNNR%2B3G4njw4azhDEVnAb%2BuySBkVKqQwxEXfjS1I6WGdzmZ1tWO6%2F7vJRgCeG2VSpcYRJJdp28a9McVhbKsLjomEvbkSpHBjnRZ%2BBMKfHn4vygre%2Bj7bOIgU8RsfsuiVbIpHDwvyY2apPtMSB99t%2Br%2BMTnQrTr7GS7N20gfZVQqJoLUssjwy67bWYIyCfRVsFngIt7AuA0d6iX3iwqveYDhhYTj5mOCMFUH%2FvJ3i24pcGbcOiAI8bv8Tm2RG%2BveALK4wPpMBrpkhmK4zE%2Bqwm5FTb2oI77ivlqJXPvVHw6ZO7y0OPt0O7WKY173c5NRoutKAQXIVNgr7ZEhpGKF42Op3%2F9uOQKf3MtlMnYs7QApdjarFr5pAbMKHnosQGOqUBJDYQlwx%2F0FCtX9QiRgmssIRxDzEwmvJ5l9vsEW15oJWE2NlOPi3N1fXSDGX32T414ezwRx7DoO%2FwYvLFrASO0VAjaT0uUPaf16RZS7Wcexzbo9y9yG6BKbA4IL4M6M42A1X9vd5fRXe8qAc9t2wKE1DsFfCGw0SRXp7S4M9TnmNR%2BmRnyolAF7BH%2Bej5QI0C7Bjujx4T22kpjjiD9%2B1lUcy8aou5&X-Amz-Signature=470a20c73675799df6937d9022156a350cf556a545e55da8cf0413f1b9e7fa74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNGQJDY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDNSpTUkxjXJbzQ1C5MK0lQzZAiHwbFJxCOYFuympn5gAiEA70JnoXQs%2FRyguEobhEpJ7VTCaHRWqzHxQkRxIVfExHcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6Ncz5gCm1VUqgiQircA5HLmeWbcHW8fID4WfZ0cNX0bySE723h4DUQaZZ2AlgAvdjCSAF1mSGpsCnt0l6aVxV1JDI9icIFMrP4L2Y%2BsoSgO%2B7auXqcLQGghAnCS4wL81c6uJOKHi7zsP3rEOHMexqWmaefstnXuslcGscGYP%2BO2cDNvKYVMSD6GqNzS2unTW1a4ZbYHg2fNOH8MBonUtQXDybjAJ1zTMXx1o1JyUvNA4Pl5ESOeHpCKSURJ%2FNLk78zMyB6Bby4oZXqP5MlCYuaTIMbNNR%2B3G4njw4azhDEVnAb%2BuySBkVKqQwxEXfjS1I6WGdzmZ1tWO6%2F7vJRgCeG2VSpcYRJJdp28a9McVhbKsLjomEvbkSpHBjnRZ%2BBMKfHn4vygre%2Bj7bOIgU8RsfsuiVbIpHDwvyY2apPtMSB99t%2Br%2BMTnQrTr7GS7N20gfZVQqJoLUssjwy67bWYIyCfRVsFngIt7AuA0d6iX3iwqveYDhhYTj5mOCMFUH%2FvJ3i24pcGbcOiAI8bv8Tm2RG%2BveALK4wPpMBrpkhmK4zE%2Bqwm5FTb2oI77ivlqJXPvVHw6ZO7y0OPt0O7WKY173c5NRoutKAQXIVNgr7ZEhpGKF42Op3%2F9uOQKf3MtlMnYs7QApdjarFr5pAbMKHnosQGOqUBJDYQlwx%2F0FCtX9QiRgmssIRxDzEwmvJ5l9vsEW15oJWE2NlOPi3N1fXSDGX32T414ezwRx7DoO%2FwYvLFrASO0VAjaT0uUPaf16RZS7Wcexzbo9y9yG6BKbA4IL4M6M42A1X9vd5fRXe8qAc9t2wKE1DsFfCGw0SRXp7S4M9TnmNR%2BmRnyolAF7BH%2Bej5QI0C7Bjujx4T22kpjjiD9%2B1lUcy8aou5&X-Amz-Signature=3d319fceebb579a0997a2d23e3dda414399bde79255c30ad8ad8cd70c9ff856b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
