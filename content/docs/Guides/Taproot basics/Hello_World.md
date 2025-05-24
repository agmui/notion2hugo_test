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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466674AVOEO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGk6G4kOJ9ehvzjdarJFojywI4tLZwTXODL9yiCHMuYGAiEAqjQgAuJQJUuoSKNIpS1jMAx5rV2E%2Felx2O%2BqmXCwPacq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDGrh4hyfuPLSHWsZyrcA5cTJIELDICWpQTuA%2Fy3Dis1Q180DRME%2Fg1M7fXphcRWIook7Q5OVf4Jrv2fPboBjw8sQL%2BEhRBtaF7Nr2vT%2Bcg1olUzZgDBEAGlUCE%2BkNbMFXBIVdRLTBNjSsyRH1%2B64RPW08%2Bv6iJs0W71hRg4udtDzSDDj3I4zmRzUE8m9yBm60mSCnTceXrldXqTLjKpQ4HqHVk7eOPzttat1BDtSttiR81hHJZdI%2FiuhITciXl1nwNi5YaRLQHslQ7QOOW1Ido%2BZglj1ynPp0F7BLyAKc14igK%2B3BnsC7cEYmsTMbceBHEfzDdeCPN6bh2Ara%2F141Nnbqvec6Au3zKE17jnh0xF3xt908MAwr3dAUVDPrdXabYU1c%2FieWv7G4CpiPpMzVQZhVtbcGSvwY8CYc7QjTXBzm0rFdV5atvD77qd9MeGLGRiAPlzfk2XRx5Q%2F2Bw4g8NfrxG1ocSXA95TZbDLKgn7WWF17jCA1CoPjskl94elyCym15kC4pP6lgNMFOQ0xypVo2xVdvJ9V9t0UF%2BRZjOCHwjzdFQ4IAq4GpInlvAGJCLiBgeciE7Zci12HxVrM3k%2BvCoSvxqCOotmWvgTmS%2BxgfMboxcW06p3Nga0lfzD5OlsgXosPtP2PSAMJeWyMEGOqUB3spGGq%2FmPEJb2gxXQx0WgsGdqyoJTd1nEptKFXU%2FJCcNj8XPu%2BHihoKLjUE89FyFPHCfhfYt1Xw2MGpOGT2w4XKRKyiFLpfZYrFNZS8VwKIPqP3KMiM2MOuyrTFzQLxlAfBrtfgUPJbTFU9DZw%2Bf0dWJz%2Bd6uWw9T1R2cpgPwKSspNGl2AnouQ4Hh7wf3KgHFlTjmR3v92bXBI0L8XvYRH%2FEoOpH&X-Amz-Signature=13c05687cafd0fa4689e04780a69d707e9dd79df6a1b0667857f33dbeab306ac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466674AVOEO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGk6G4kOJ9ehvzjdarJFojywI4tLZwTXODL9yiCHMuYGAiEAqjQgAuJQJUuoSKNIpS1jMAx5rV2E%2Felx2O%2BqmXCwPacq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDGrh4hyfuPLSHWsZyrcA5cTJIELDICWpQTuA%2Fy3Dis1Q180DRME%2Fg1M7fXphcRWIook7Q5OVf4Jrv2fPboBjw8sQL%2BEhRBtaF7Nr2vT%2Bcg1olUzZgDBEAGlUCE%2BkNbMFXBIVdRLTBNjSsyRH1%2B64RPW08%2Bv6iJs0W71hRg4udtDzSDDj3I4zmRzUE8m9yBm60mSCnTceXrldXqTLjKpQ4HqHVk7eOPzttat1BDtSttiR81hHJZdI%2FiuhITciXl1nwNi5YaRLQHslQ7QOOW1Ido%2BZglj1ynPp0F7BLyAKc14igK%2B3BnsC7cEYmsTMbceBHEfzDdeCPN6bh2Ara%2F141Nnbqvec6Au3zKE17jnh0xF3xt908MAwr3dAUVDPrdXabYU1c%2FieWv7G4CpiPpMzVQZhVtbcGSvwY8CYc7QjTXBzm0rFdV5atvD77qd9MeGLGRiAPlzfk2XRx5Q%2F2Bw4g8NfrxG1ocSXA95TZbDLKgn7WWF17jCA1CoPjskl94elyCym15kC4pP6lgNMFOQ0xypVo2xVdvJ9V9t0UF%2BRZjOCHwjzdFQ4IAq4GpInlvAGJCLiBgeciE7Zci12HxVrM3k%2BvCoSvxqCOotmWvgTmS%2BxgfMboxcW06p3Nga0lfzD5OlsgXosPtP2PSAMJeWyMEGOqUB3spGGq%2FmPEJb2gxXQx0WgsGdqyoJTd1nEptKFXU%2FJCcNj8XPu%2BHihoKLjUE89FyFPHCfhfYt1Xw2MGpOGT2w4XKRKyiFLpfZYrFNZS8VwKIPqP3KMiM2MOuyrTFzQLxlAfBrtfgUPJbTFU9DZw%2Bf0dWJz%2Bd6uWw9T1R2cpgPwKSspNGl2AnouQ4Hh7wf3KgHFlTjmR3v92bXBI0L8XvYRH%2FEoOpH&X-Amz-Signature=5dfb92050e7572286976356613c9a109c6012686a81276d023a054f8fd9280af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
