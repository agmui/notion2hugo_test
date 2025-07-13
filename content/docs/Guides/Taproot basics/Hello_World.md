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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGMRZUR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIQDuNKMtVbdrHWSUb6EMgbMtCkdnOYBPbPUgC9XOaxfhUgIfHoPknnxtgCTcMegKv%2FKavi%2FvMxK1YHtRY6h%2FPBhVZyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVVWNOE%2FKJXFslKbzKtwDJXPiGmOYiEH%2BocXnWaA61h3akJf5lhrfnpKGzc1ZOqt6Jmqi0EPNQLpczMVDNP58zE4QhcNF0oB%2BynGK%2BTIZKjvCAbT9p%2FVwCMWeZi56R%2BdQ5pVkSZjZdrvUovcYpyLLzhrLViv1OLmvRjjyXBUXdAzVaG4Hc%2Bo2rHA65TXzPaLp1Y%2Fixxa8MnDvYi9L%2BCQXxpWq1DuHCacG5t%2FYjA5wfXfCnMm3B1l65Ta%2BIfsPEZGGWkFkWBa56QT5Z%2FYzfLm9ABcNPPYo0m%2BiPMjeh8hNW63HIddJlUx3MRE3bjinljIEdINOce3QEWJzINC5vWQMLm3r8RjAbafNFWR0tjhaXZfI2tkuU3EFb%2B3mIUti%2BeJuD84VPFMEl4kGYi0taNY%2BXAWYexktKWy%2F046ecjGHN1g1XvF%2FbouJxEGxqMu3D%2BK47kbotO%2FFbWMLk5vZC0R4PN6yzFl6V8kRG2idgCNofXqC05ikr1F11JgyE9RW76UofGnRHr6uQoykOmTuVkTYE2oqdOAbKUdEdavk4b8Dwl4xac4gloGBfp7r%2B8DF914IETnZkIt9AaUWdJm7nxz4JtF%2BFugoJf2t1kQ64G7fMoZSVmCaYSFK18EOg0Awp2WYXRIxihwsdkNkiwQw%2BebPwwY6pgFCXL%2BW34FRxVSYjQO0uq2cdStQnhxkzxdEESH3YNdMnQKf9sedkFZBx%2BXJ8h96DcBNi6q9skPCtb0EL%2BDvlqxeCFTIQgnSbJbe2kp%2FavDDWCnjew%2FjCwWEuOscDNpc4H0E8OWcSPIR8WgFXggfcXa7v4iKOeirWMvOMaZecwJZagq%2BicCvBAS%2FzKL8hsI%2B78bXAxCTitkQ6ik2US51nXnGsp1mMV6t&X-Amz-Signature=c9c0bdcad83f848a067d4ea33908596aa31947a356db6089b9ba77be51fbe522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGMRZUR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIQDuNKMtVbdrHWSUb6EMgbMtCkdnOYBPbPUgC9XOaxfhUgIfHoPknnxtgCTcMegKv%2FKavi%2FvMxK1YHtRY6h%2FPBhVZyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVVWNOE%2FKJXFslKbzKtwDJXPiGmOYiEH%2BocXnWaA61h3akJf5lhrfnpKGzc1ZOqt6Jmqi0EPNQLpczMVDNP58zE4QhcNF0oB%2BynGK%2BTIZKjvCAbT9p%2FVwCMWeZi56R%2BdQ5pVkSZjZdrvUovcYpyLLzhrLViv1OLmvRjjyXBUXdAzVaG4Hc%2Bo2rHA65TXzPaLp1Y%2Fixxa8MnDvYi9L%2BCQXxpWq1DuHCacG5t%2FYjA5wfXfCnMm3B1l65Ta%2BIfsPEZGGWkFkWBa56QT5Z%2FYzfLm9ABcNPPYo0m%2BiPMjeh8hNW63HIddJlUx3MRE3bjinljIEdINOce3QEWJzINC5vWQMLm3r8RjAbafNFWR0tjhaXZfI2tkuU3EFb%2B3mIUti%2BeJuD84VPFMEl4kGYi0taNY%2BXAWYexktKWy%2F046ecjGHN1g1XvF%2FbouJxEGxqMu3D%2BK47kbotO%2FFbWMLk5vZC0R4PN6yzFl6V8kRG2idgCNofXqC05ikr1F11JgyE9RW76UofGnRHr6uQoykOmTuVkTYE2oqdOAbKUdEdavk4b8Dwl4xac4gloGBfp7r%2B8DF914IETnZkIt9AaUWdJm7nxz4JtF%2BFugoJf2t1kQ64G7fMoZSVmCaYSFK18EOg0Awp2WYXRIxihwsdkNkiwQw%2BebPwwY6pgFCXL%2BW34FRxVSYjQO0uq2cdStQnhxkzxdEESH3YNdMnQKf9sedkFZBx%2BXJ8h96DcBNi6q9skPCtb0EL%2BDvlqxeCFTIQgnSbJbe2kp%2FavDDWCnjew%2FjCwWEuOscDNpc4H0E8OWcSPIR8WgFXggfcXa7v4iKOeirWMvOMaZecwJZagq%2BicCvBAS%2FzKL8hsI%2B78bXAxCTitkQ6ik2US51nXnGsp1mMV6t&X-Amz-Signature=9f889580b8720c1dd0c49286e343082cd03043446156f7cf795d54a99a812948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
