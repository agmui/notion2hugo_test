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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUHDIYO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrXPAQv%2F%2B3f78jNmX%2FvFm1X1ibCmSTW3Op26NrGxhpTgIhAKIPaico7WnluO59IEGM7bCW7m7JUTLHS9yC1R%2BS79tSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAOL6NuXuvFj2y7gUq3AOlB4DYnv9rUFqndv177Tbfpfo6q4d93rTRr%2Ff9Ry2yAZfrRe5H3gBeW3NYtKVSTmgLn5pSsb%2BzwERZnpUttEULAf4nYhAra%2FR4Qq838tYKcYfLn5bOS2ABm7pdxebgwrzBBE%2Fzh3cC%2Fz96Q74RohxEI%2B5Aws7D9KBRp90sLmvsbNpdtQ9DMIXQFqO%2FA0CcqzxkzDPDTY2l2wsnSr6gbA23KylDW4%2FFjCxr11ME4TPjthChhT8Qrtu6qhHvoOfStI2gD7NcKQ4EHW%2BYnIomhLtmB2o%2FsfeLeVSSxs2kzatGTiiS%2BWkbGW2CG%2FLPqyDQfYD07qAYvfG2k5PV98OT7lTE7WJDWfdVxpxNpKD7QoDunfPUKa%2BNx5La6%2FY1PGuPncenABrdrdMVK8MPw7Nibd4%2B%2BuKt8%2FPUWeNEtd%2B71DZk6d9tayXdgI%2B%2BB0aA2gts7i87HydQtWeuBcOlfoM9kRPaTB8I21M1GCa%2Bv9RrkAORA1zH%2B16dGsUD6X1xS8rzUFMYszPJanbEdg74Wend6K2tNIvArqnDfZSE914a8TeDx%2Bbv8cqDAnsU2M6j1tKyWt%2Fs7S4b65vRxIXFGOcfGVkNlbBvL6Tl0VbdvjYkfbacVa8ABDW%2FPFqynPpayDD67bTEBjqkAQt8jQ3ajMRwoO4XJGuUty5U4gkWJOqX4Ks6bSfNNsqfvsmeJiEqEC%2BgnnFtXrnF0HaejwLH2FQpFp8DBdkM3Vrbr3wBSMB145QLW8BfhkxXe7ny8itP8EcPVNwRp78CTDOevG6bKQkaN%2FmKzvNHqKEdMXUGGg%2Ft20lzHZ2yWZxXKBdc72QbTtdkmCyeYIlmRFwr82nfgb4a51XBX4UJB01tukzj&X-Amz-Signature=c3be387686abcf35627f55f6b11cc1dc445ae81ed540e7af858633b82fa00e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUHDIYO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrXPAQv%2F%2B3f78jNmX%2FvFm1X1ibCmSTW3Op26NrGxhpTgIhAKIPaico7WnluO59IEGM7bCW7m7JUTLHS9yC1R%2BS79tSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAOL6NuXuvFj2y7gUq3AOlB4DYnv9rUFqndv177Tbfpfo6q4d93rTRr%2Ff9Ry2yAZfrRe5H3gBeW3NYtKVSTmgLn5pSsb%2BzwERZnpUttEULAf4nYhAra%2FR4Qq838tYKcYfLn5bOS2ABm7pdxebgwrzBBE%2Fzh3cC%2Fz96Q74RohxEI%2B5Aws7D9KBRp90sLmvsbNpdtQ9DMIXQFqO%2FA0CcqzxkzDPDTY2l2wsnSr6gbA23KylDW4%2FFjCxr11ME4TPjthChhT8Qrtu6qhHvoOfStI2gD7NcKQ4EHW%2BYnIomhLtmB2o%2FsfeLeVSSxs2kzatGTiiS%2BWkbGW2CG%2FLPqyDQfYD07qAYvfG2k5PV98OT7lTE7WJDWfdVxpxNpKD7QoDunfPUKa%2BNx5La6%2FY1PGuPncenABrdrdMVK8MPw7Nibd4%2B%2BuKt8%2FPUWeNEtd%2B71DZk6d9tayXdgI%2B%2BB0aA2gts7i87HydQtWeuBcOlfoM9kRPaTB8I21M1GCa%2Bv9RrkAORA1zH%2B16dGsUD6X1xS8rzUFMYszPJanbEdg74Wend6K2tNIvArqnDfZSE914a8TeDx%2Bbv8cqDAnsU2M6j1tKyWt%2Fs7S4b65vRxIXFGOcfGVkNlbBvL6Tl0VbdvjYkfbacVa8ABDW%2FPFqynPpayDD67bTEBjqkAQt8jQ3ajMRwoO4XJGuUty5U4gkWJOqX4Ks6bSfNNsqfvsmeJiEqEC%2BgnnFtXrnF0HaejwLH2FQpFp8DBdkM3Vrbr3wBSMB145QLW8BfhkxXe7ny8itP8EcPVNwRp78CTDOevG6bKQkaN%2FmKzvNHqKEdMXUGGg%2Ft20lzHZ2yWZxXKBdc72QbTtdkmCyeYIlmRFwr82nfgb4a51XBX4UJB01tukzj&X-Amz-Signature=c5ab0e8d2fd75dba78f3628eca8bb2ef1bea6bb4d1758886305c96b952377ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
