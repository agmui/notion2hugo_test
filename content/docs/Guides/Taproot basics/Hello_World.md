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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZOM7T7K%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDjqMo0iLpTOAnUU24RJwse6w%2FUzZ6eCTuK721P78DGpQIgOlt11tAy1EpbfoLqFugsAUhB%2BmeYmsWoCXZzH%2BGnPL4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMHbGTrQBLug2D74rSrcA4FKcRo65CpaBk2qxv5Yan7E7em9%2FF%2Faa4a4hwZZXNUEcMKh9M0R%2Beolt3%2FfBa%2BdLKw%2FnbfoGXy0j60WEu8Phk576a2PjG6cogzOkfRQkommCwhl6DEwe1yUnXdbYUQjq21vqlcsKmMZLPt6X%2BY%2Bgk%2F%2FhzzJylz8f5JkVJ8YntZXimgPZozBr0PIwS82BJAdcFunswRCxO26InbQmUNcOm6EHJ%2BVONw78NsR6tQAUMT1df66fwBhuFLWJt9WEu%2BYCFfud4eciLCaCm%2FOIGrx3BkN%2BX%2FgV%2B1Ieh29O4BJhIcT7bt4BEVLLbCEzEkEfK5DkBKMd%2F5vouVLNSr6FysP8IRUlNKS%2FbWNW%2Bv90bxcZ%2BcaV3hBsozZzLOyDfSsJoL0RhviVyf4VCyuyT2mkf8R54GN%2F16i7K19PpIHxNBSwanxHwMibvIzDHhYnYa4jJENChlLAgEqWWMA9FgRs1I8I4ngcNi45Ti6BmyUFbHalm%2FE%2FORyWkSH%2FYaEXQbzSW%2F0S7QThqHxhn8t8990%2BwAQ%2Bam8%2F01tb71WJ7PL6V0LCql5F2LYLYaVn6Vyy7N0f%2BvadT8Cy6UUawAjdwcJKVJg%2Bl9%2BuMCYz38G%2FHclLeV46AgrWogx42%2FgkLJy9CG1MJm7lsQGOqUBjxTgtBhlEDGXdCvLI21vdIcDwyVPNeDBwA%2BuU%2B2ZeytJYs1chgzD9J3UeojS9z1bbENrMLzJKoMCwGaWeruWhygofLDslnt6mFVaHwKFtBvuhAv5xyzN6aKOvor4PbZshnkI9bRo%2BZd6tSrCqgOnBgS68xlxH9t0%2FcMC90B34Z%2FkISis%2BiMIkSX%2B%2BGCZilzVLf4NS8Fcs%2F5zx3Jg2p84ENT%2BSosw&X-Amz-Signature=989b5d5ff16ad3933db5aa071d22d4a25a5c4c8e1f9828cbe3e2947eeabcc687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZOM7T7K%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDjqMo0iLpTOAnUU24RJwse6w%2FUzZ6eCTuK721P78DGpQIgOlt11tAy1EpbfoLqFugsAUhB%2BmeYmsWoCXZzH%2BGnPL4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMHbGTrQBLug2D74rSrcA4FKcRo65CpaBk2qxv5Yan7E7em9%2FF%2Faa4a4hwZZXNUEcMKh9M0R%2Beolt3%2FfBa%2BdLKw%2FnbfoGXy0j60WEu8Phk576a2PjG6cogzOkfRQkommCwhl6DEwe1yUnXdbYUQjq21vqlcsKmMZLPt6X%2BY%2Bgk%2F%2FhzzJylz8f5JkVJ8YntZXimgPZozBr0PIwS82BJAdcFunswRCxO26InbQmUNcOm6EHJ%2BVONw78NsR6tQAUMT1df66fwBhuFLWJt9WEu%2BYCFfud4eciLCaCm%2FOIGrx3BkN%2BX%2FgV%2B1Ieh29O4BJhIcT7bt4BEVLLbCEzEkEfK5DkBKMd%2F5vouVLNSr6FysP8IRUlNKS%2FbWNW%2Bv90bxcZ%2BcaV3hBsozZzLOyDfSsJoL0RhviVyf4VCyuyT2mkf8R54GN%2F16i7K19PpIHxNBSwanxHwMibvIzDHhYnYa4jJENChlLAgEqWWMA9FgRs1I8I4ngcNi45Ti6BmyUFbHalm%2FE%2FORyWkSH%2FYaEXQbzSW%2F0S7QThqHxhn8t8990%2BwAQ%2Bam8%2F01tb71WJ7PL6V0LCql5F2LYLYaVn6Vyy7N0f%2BvadT8Cy6UUawAjdwcJKVJg%2Bl9%2BuMCYz38G%2FHclLeV46AgrWogx42%2FgkLJy9CG1MJm7lsQGOqUBjxTgtBhlEDGXdCvLI21vdIcDwyVPNeDBwA%2BuU%2B2ZeytJYs1chgzD9J3UeojS9z1bbENrMLzJKoMCwGaWeruWhygofLDslnt6mFVaHwKFtBvuhAv5xyzN6aKOvor4PbZshnkI9bRo%2BZd6tSrCqgOnBgS68xlxH9t0%2FcMC90B34Z%2FkISis%2BiMIkSX%2B%2BGCZilzVLf4NS8Fcs%2F5zx3Jg2p84ENT%2BSosw&X-Amz-Signature=36f7b9fef508592fcadb9ffd560aa94c047b46ffaec85c8bf7207255f4b30abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
