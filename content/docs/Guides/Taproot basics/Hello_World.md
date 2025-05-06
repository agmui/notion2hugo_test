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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4KM5NN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOHWq4SFSBydcaeKnxIO1enccWBRBSoPxBS3ElNPhuWQIgPQqxc1tTrJ60cUZZLRnfoBbbWfzX3rAKS7kcXazMtaMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIWiLv5j%2FyNmdL%2BHxircA7n%2BQPGDr7%2F21CdewoVxGssapuaFoJgoduCBdMKr8aQGI65RTKSY2Yr0D2PVdVqPaosh0pydr6mUfURlGnwp%2FWceHkU0GS5pmCFx8AB8TEgcZKWMafPFEiUAcABywDO1g7u5bYMB%2Fo9JuhAOMNzS5Fc%2BBlUhOHo4209j3tPJtruodOdtEAOO3otqCy%2Fo4CG8NE6hV8qj2iSigJ%2BWuzxDoRjzzlAQ65lNiBXJY1MFLlvY10srp%2FJ%2FnThPta3oKLp0REpZdDKKy2AcWjwBKaMGN94K%2BwLFGapwnS16mqJWeEiykkP4WSfok%2BhsiRskIjggTwblsSPJUVUlFz18jACkpWRQlwgeMzRe5e3mQRcJjPGYJYBP0Qw2%2BqW6IfvMK2P3HptPEKf%2By9TzIWsE2oDmz6LXSottqjZ7iD29rBLG5xncl9bKGz01fOWo%2FBE4lU9SNcFpexYr53MUATVDnkRhUKAR5NK8a7I24MSNpOgV%2B4gZTBmvYSuSIBbwCPupUf4dAKTM8IG0vPCMyEX4mmkInxL%2FYY902NxRUmQPovlFCqqYN9rl6YPdMQslurgfN3XYNtS%2BjOh1Ft6%2FBV9XQmI8ME9Z%2Fyb%2FpSrDPlmptBV0t1VoEJBCJK%2B8OUloq%2BnnMO7K5cAGOqUBasCxG8QFoHm3lhvjPu%2BrqauRn7SGq6Fbfn6KbRBi4GUxpLBov6eaMgvByzUEMmDJLdnqllEFTPQxce0Yh%2BJAHVyL%2BoXIAbazBZs2FPLEnVDC3ZwudR11rtq5YzUEucZLn0SUE5WTsdUYvzWS7ox8wwZK5tPOxMKTGekg8pHFXOvu4BHFQbi3qSO3mnlSlq7nIhW%2BXVBv%2FG3qN4%2BvSGeP3wOdSWVY&X-Amz-Signature=acaacbe68c102be5cbaf44beac01bf2791e2b757108670af3057b804381bc7e6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T4KM5NN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOHWq4SFSBydcaeKnxIO1enccWBRBSoPxBS3ElNPhuWQIgPQqxc1tTrJ60cUZZLRnfoBbbWfzX3rAKS7kcXazMtaMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIWiLv5j%2FyNmdL%2BHxircA7n%2BQPGDr7%2F21CdewoVxGssapuaFoJgoduCBdMKr8aQGI65RTKSY2Yr0D2PVdVqPaosh0pydr6mUfURlGnwp%2FWceHkU0GS5pmCFx8AB8TEgcZKWMafPFEiUAcABywDO1g7u5bYMB%2Fo9JuhAOMNzS5Fc%2BBlUhOHo4209j3tPJtruodOdtEAOO3otqCy%2Fo4CG8NE6hV8qj2iSigJ%2BWuzxDoRjzzlAQ65lNiBXJY1MFLlvY10srp%2FJ%2FnThPta3oKLp0REpZdDKKy2AcWjwBKaMGN94K%2BwLFGapwnS16mqJWeEiykkP4WSfok%2BhsiRskIjggTwblsSPJUVUlFz18jACkpWRQlwgeMzRe5e3mQRcJjPGYJYBP0Qw2%2BqW6IfvMK2P3HptPEKf%2By9TzIWsE2oDmz6LXSottqjZ7iD29rBLG5xncl9bKGz01fOWo%2FBE4lU9SNcFpexYr53MUATVDnkRhUKAR5NK8a7I24MSNpOgV%2B4gZTBmvYSuSIBbwCPupUf4dAKTM8IG0vPCMyEX4mmkInxL%2FYY902NxRUmQPovlFCqqYN9rl6YPdMQslurgfN3XYNtS%2BjOh1Ft6%2FBV9XQmI8ME9Z%2Fyb%2FpSrDPlmptBV0t1VoEJBCJK%2B8OUloq%2BnnMO7K5cAGOqUBasCxG8QFoHm3lhvjPu%2BrqauRn7SGq6Fbfn6KbRBi4GUxpLBov6eaMgvByzUEMmDJLdnqllEFTPQxce0Yh%2BJAHVyL%2BoXIAbazBZs2FPLEnVDC3ZwudR11rtq5YzUEucZLn0SUE5WTsdUYvzWS7ox8wwZK5tPOxMKTGekg8pHFXOvu4BHFQbi3qSO3mnlSlq7nIhW%2BXVBv%2FG3qN4%2BvSGeP3wOdSWVY&X-Amz-Signature=09be5f62a61c0fcb3b96fdae8c48574b9f38121a1f63d4bc66bfeeb25f768f72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
