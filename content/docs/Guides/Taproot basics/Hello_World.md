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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H56XSIE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FInsUgcIGGyex4P4qXLAtSh2fYusuWlbNLhHhi%2F6iQIhAJm4KQp8VAxo6yxFzf6qTugGcFkSmgvdIKS4l6%2FnR9dQKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU2ql5OWXVBSW6R1sq3ANNtxYFnT1MNvntUOHAZpp6%2FqOKdrPVlMyhx3dPrWdN3jdfs4mIpvYp1VXbGahWVPIepjQNc9bGqISL2HDMynrXXnbiIp9CLI60hqf1s1JzySvvRugYTl9l8kqKZ0chX8fkdyJ%2FHagwqgXaJ%2BRZazIDEv8nAIBJCcEFD8xQxO%2Fp%2FV1Te4oQGp1J46znOx2G1qJIjH7idodJvhTiJe3EZBzZFABAITyQWv%2FeywGKH7SsBL3YcCEk%2BdSYvubwSypX4y1gFIlCk8UHkYUIjEooQoxHEVAyVX59%2BXQbA8v4dVm3Lq0MyccXoFG0Pj3AdXZ0bVJsI%2FyQqamoCVOfP7GtChluoherJqQHbg%2BD3LqdDcf39U41%2BGM4ZL1Midusjh4VIvYPOQx1J7YTopoeqw2LKHt%2FJ33x2qhX4UfXLdulEBYS0QJjOlH%2FTJV9EvArafsp8ErYhTzuXpug2QHEy7Oco7ieOIUtTVeNf%2FcvrWOIU%2FtmgOM9RWiPSkgWcmgtb3%2BcH17qcWKveqPaS5MkOFbSL%2BCKQHirfm9QYvPqlOS6yjgxSp72MN3%2BJpV7inK5rr8RVA%2Fbpb3%2FwbLxi1vCSplceifyHloI0lqtZBUQMOejTfL3irmYCvyj8DD%2FHoz2%2FjCKr7XBBjqkAdBteoFP6aMExlMOfSli9T3dc4aUdwHfcgQ39F9h%2F5QWL3qYPQP9snzESncxtyjqekcjaeqomLIT3rjWzJLkfAH7cS%2BCJi%2BeSLBZWIxXqQLa7emYtkIJ9o6Dg2selNnj%2FW70BxUExey1fOEMastpSVubL43HguJjiiMPdO1GlTKqhqcwNnvAwSFCLg7uXdXqem%2FeE3VBaBn4gK4UPgM9USxE%2Fwfy&X-Amz-Signature=fe00e514ac90e403f2d5330a8bb6424f208bb3007d6308064dddf0ab8621fdf5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H56XSIE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FInsUgcIGGyex4P4qXLAtSh2fYusuWlbNLhHhi%2F6iQIhAJm4KQp8VAxo6yxFzf6qTugGcFkSmgvdIKS4l6%2FnR9dQKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU2ql5OWXVBSW6R1sq3ANNtxYFnT1MNvntUOHAZpp6%2FqOKdrPVlMyhx3dPrWdN3jdfs4mIpvYp1VXbGahWVPIepjQNc9bGqISL2HDMynrXXnbiIp9CLI60hqf1s1JzySvvRugYTl9l8kqKZ0chX8fkdyJ%2FHagwqgXaJ%2BRZazIDEv8nAIBJCcEFD8xQxO%2Fp%2FV1Te4oQGp1J46znOx2G1qJIjH7idodJvhTiJe3EZBzZFABAITyQWv%2FeywGKH7SsBL3YcCEk%2BdSYvubwSypX4y1gFIlCk8UHkYUIjEooQoxHEVAyVX59%2BXQbA8v4dVm3Lq0MyccXoFG0Pj3AdXZ0bVJsI%2FyQqamoCVOfP7GtChluoherJqQHbg%2BD3LqdDcf39U41%2BGM4ZL1Midusjh4VIvYPOQx1J7YTopoeqw2LKHt%2FJ33x2qhX4UfXLdulEBYS0QJjOlH%2FTJV9EvArafsp8ErYhTzuXpug2QHEy7Oco7ieOIUtTVeNf%2FcvrWOIU%2FtmgOM9RWiPSkgWcmgtb3%2BcH17qcWKveqPaS5MkOFbSL%2BCKQHirfm9QYvPqlOS6yjgxSp72MN3%2BJpV7inK5rr8RVA%2Fbpb3%2FwbLxi1vCSplceifyHloI0lqtZBUQMOejTfL3irmYCvyj8DD%2FHoz2%2FjCKr7XBBjqkAdBteoFP6aMExlMOfSli9T3dc4aUdwHfcgQ39F9h%2F5QWL3qYPQP9snzESncxtyjqekcjaeqomLIT3rjWzJLkfAH7cS%2BCJi%2BeSLBZWIxXqQLa7emYtkIJ9o6Dg2selNnj%2FW70BxUExey1fOEMastpSVubL43HguJjiiMPdO1GlTKqhqcwNnvAwSFCLg7uXdXqem%2FeE3VBaBn4gK4UPgM9USxE%2Fwfy&X-Amz-Signature=8eb2a2c44b002914abbab643b53d1eab4c82cd3c2cdb696fc9554750bb9d9f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
