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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3RMPI4M%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb9MVvGZqoUktupTE67K%2BwZyP0G94VmSN%2B2SziK1JpiAiEAtAoffFLN9EANgVtcqmBD1v5m7lYJ26tClre2WhFkBOMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzQXCEBKF0ioeMqsircA0g%2BBcpfmrFALVawXl4B%2FUi4%2FU%2BqVsK5SkxnzIIB6uRb9rO3sgBFP4Y5r%2BDJ%2Fp%2BSDGPL%2BgXmvAD0KQkP9oHVYaZ9EoUifvf8UXsNv6falG0BedTc9YI8opRLcuNj6ExReWYPQmcvQ0e63eLMw3sVd2UM8%2F9hxMFp1UrRuQfBHrLVZfSG8v9X%2B6mTp2o5RIvNw%2F0WZlswSMGolkPZkLuIxZAo8tIZYvTkmp9yrQHCUhpDUjuevM84ONXSBXnZ1JiIS3mivp65PStkRJGy2HYkg%2BAOsYmHTZwUu%2BL%2FJMlysZpHb%2BpaxVIO%2BmUg%2F46LIjHtRrq78Y3DadR6r9dDoKSGMKxAg%2Bdy1MAT9uP5c4525jTv7bZf4013xsk8CSyoczsMFfTJw5kMmMgprnqYfZuCPXFBKh%2BdYlFRWq7o5gXibylluHqdhlq5FlV5cvMV9auyRcOOWPraeUQggxZ381DH5mqJpIDihBKp2pSnaWMgapRO%2FSls2IfYWgzVfPuJMMYn%2FwGIdZ5I5jGj69p5MF1HDKU54sDZwS04IkpAqDT4utPbrEtKaTwtBT2LfmGqYd%2F6hd7ypwFwZUHMkWv%2F6ah9x3sCp3ZcHU7ufeFPmE3j%2B3QZAQyR%2FYtDGRFCLrtDMPKtp70GOqUBQ3aluKsTYU2E2X%2BZoNQybDGgznSuUhAzegIaItMfcrCAB%2BhilEfP5WCibG8qM9lXw17Vs5heIhfAKAcyn3Qgx9yiPqf4NQxbEwxKWMdpIWJWnyC2KjMb9wz%2F9AUBR2qXhesAF8uZOcM4EulEfsX%2BvkHX1eDaeXECVYQ80ZLI2N6BYYh5kmBh0LBQvFz3fxeAvl2e445FYUrl0a3H5baCDTO0u9yp&X-Amz-Signature=29e14a27919561ac90defe111263db057e1534b57dac97c3f3a955ab28f14a59&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3RMPI4M%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb9MVvGZqoUktupTE67K%2BwZyP0G94VmSN%2B2SziK1JpiAiEAtAoffFLN9EANgVtcqmBD1v5m7lYJ26tClre2WhFkBOMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzQXCEBKF0ioeMqsircA0g%2BBcpfmrFALVawXl4B%2FUi4%2FU%2BqVsK5SkxnzIIB6uRb9rO3sgBFP4Y5r%2BDJ%2Fp%2BSDGPL%2BgXmvAD0KQkP9oHVYaZ9EoUifvf8UXsNv6falG0BedTc9YI8opRLcuNj6ExReWYPQmcvQ0e63eLMw3sVd2UM8%2F9hxMFp1UrRuQfBHrLVZfSG8v9X%2B6mTp2o5RIvNw%2F0WZlswSMGolkPZkLuIxZAo8tIZYvTkmp9yrQHCUhpDUjuevM84ONXSBXnZ1JiIS3mivp65PStkRJGy2HYkg%2BAOsYmHTZwUu%2BL%2FJMlysZpHb%2BpaxVIO%2BmUg%2F46LIjHtRrq78Y3DadR6r9dDoKSGMKxAg%2Bdy1MAT9uP5c4525jTv7bZf4013xsk8CSyoczsMFfTJw5kMmMgprnqYfZuCPXFBKh%2BdYlFRWq7o5gXibylluHqdhlq5FlV5cvMV9auyRcOOWPraeUQggxZ381DH5mqJpIDihBKp2pSnaWMgapRO%2FSls2IfYWgzVfPuJMMYn%2FwGIdZ5I5jGj69p5MF1HDKU54sDZwS04IkpAqDT4utPbrEtKaTwtBT2LfmGqYd%2F6hd7ypwFwZUHMkWv%2F6ah9x3sCp3ZcHU7ufeFPmE3j%2B3QZAQyR%2FYtDGRFCLrtDMPKtp70GOqUBQ3aluKsTYU2E2X%2BZoNQybDGgznSuUhAzegIaItMfcrCAB%2BhilEfP5WCibG8qM9lXw17Vs5heIhfAKAcyn3Qgx9yiPqf4NQxbEwxKWMdpIWJWnyC2KjMb9wz%2F9AUBR2qXhesAF8uZOcM4EulEfsX%2BvkHX1eDaeXECVYQ80ZLI2N6BYYh5kmBh0LBQvFz3fxeAvl2e445FYUrl0a3H5baCDTO0u9yp&X-Amz-Signature=04a2209309c3ffe7d5daea48b5eb76986c3b4961bffa6c406bbad7bd9efd5b64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
