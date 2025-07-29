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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ULBETK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICsCCVpdo9vj7ZxQdcOpccxbIGSp5i7An3VCcG0uff5IAiBokEJaH%2BjLKdMVlBbnc0CRudFoxfHrmD5p8PNvG0OscCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8G5EDo1%2BMALG5YMXKtwDcKsjEzZCWRxSKVCaWbMjeOv4m1Oekj6oFjGTs9ySjZIF5NfEGbBNceaHSU4E5t%2FmaP0KD0sI5vrpeyolxbig7pU%2FNDss%2FTqxLUvZjno%2B%2Bzu7U4DP1wsPj1wdmGhf1upwbgkJ4LNrjiM5v%2FhCHXrFwXQ3O3MXPg1bUck72Cne41nMymNow4BFuCxyvGH0yot3bJgeODIOp67Jz2y0OwXPA2Mke%2BMWifwZWbqRfvZplgfNC3ZmOTZJm6i%2FqmJQuycQmcsgz8oGWhLgwu5%2BbygtwZhfPivO9Kte9V5tR6UP0g%2Foe5J5h6L3HQAKloKVLvVXPPH7wF3WQJMb7VcpkesOQm8F94Gzn6K42PA6%2B7FHYzaiqaZP7BN7Y7Lho8PtZcKO0G%2BpGxDomHoYkjsWR%2FsF0WYZBcHp3pzXaVOfLM3%2Bvt%2BeBgHQQogued1cTgxj9uEGTKXD%2BVG6qMPnEVCWtsxXldoz9Y1i3FWyT57JMCtQna2iUGz9LnF2xf0%2BlNl%2FXMkeIZbuxifNqWh2fjILl9XQfHbPti8whgM%2FyEhkO0g05pbYBKtLZFAiPUJbJ16FIRG14id%2BzdE4T%2FL4X8ThgPdATEPEyosqTdmWl2%2FyUpEawa9I48LbEpCxPcA3ouwwo8ujxAY6pgGpLANO4PyNs97fgOXpK%2BFk4o%2F5Jkp4ZOvqhpVEu47xe84eDh6%2FDbp5BWlvX8CsMnaqvhJkQighuwzriJP6fSHZBRqOKta5ut2SXGAI6QsrdfDxQplyCRnxXL7rzfBxIhJZSzIDpy2uj0aIL3ERjR23sXFyCs42CAYBONCqQvOeH%2FWNsHgSPSXd8vGrqWBzRL0q%2BGrwelLW81MC32OpU%2BYVCr8MvMjj&X-Amz-Signature=a523d1affd15d3b1a86e0026277245ba042f1e9ba0fa90a9dcadc28d5952f2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ULBETK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICsCCVpdo9vj7ZxQdcOpccxbIGSp5i7An3VCcG0uff5IAiBokEJaH%2BjLKdMVlBbnc0CRudFoxfHrmD5p8PNvG0OscCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8G5EDo1%2BMALG5YMXKtwDcKsjEzZCWRxSKVCaWbMjeOv4m1Oekj6oFjGTs9ySjZIF5NfEGbBNceaHSU4E5t%2FmaP0KD0sI5vrpeyolxbig7pU%2FNDss%2FTqxLUvZjno%2B%2Bzu7U4DP1wsPj1wdmGhf1upwbgkJ4LNrjiM5v%2FhCHXrFwXQ3O3MXPg1bUck72Cne41nMymNow4BFuCxyvGH0yot3bJgeODIOp67Jz2y0OwXPA2Mke%2BMWifwZWbqRfvZplgfNC3ZmOTZJm6i%2FqmJQuycQmcsgz8oGWhLgwu5%2BbygtwZhfPivO9Kte9V5tR6UP0g%2Foe5J5h6L3HQAKloKVLvVXPPH7wF3WQJMb7VcpkesOQm8F94Gzn6K42PA6%2B7FHYzaiqaZP7BN7Y7Lho8PtZcKO0G%2BpGxDomHoYkjsWR%2FsF0WYZBcHp3pzXaVOfLM3%2Bvt%2BeBgHQQogued1cTgxj9uEGTKXD%2BVG6qMPnEVCWtsxXldoz9Y1i3FWyT57JMCtQna2iUGz9LnF2xf0%2BlNl%2FXMkeIZbuxifNqWh2fjILl9XQfHbPti8whgM%2FyEhkO0g05pbYBKtLZFAiPUJbJ16FIRG14id%2BzdE4T%2FL4X8ThgPdATEPEyosqTdmWl2%2FyUpEawa9I48LbEpCxPcA3ouwwo8ujxAY6pgGpLANO4PyNs97fgOXpK%2BFk4o%2F5Jkp4ZOvqhpVEu47xe84eDh6%2FDbp5BWlvX8CsMnaqvhJkQighuwzriJP6fSHZBRqOKta5ut2SXGAI6QsrdfDxQplyCRnxXL7rzfBxIhJZSzIDpy2uj0aIL3ERjR23sXFyCs42CAYBONCqQvOeH%2FWNsHgSPSXd8vGrqWBzRL0q%2BGrwelLW81MC32OpU%2BYVCr8MvMjj&X-Amz-Signature=7af2cd1150baa9e01b1b7818d3f147905e1e6d370944e9d239f1ed657405d7fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
