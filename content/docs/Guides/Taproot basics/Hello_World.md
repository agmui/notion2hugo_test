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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOJBMMF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD1lljh34dm5cVYJ%2BhtS4vemeBbiE9f3jT%2FZNfZc0DYxgIgBIO5VpShfEMlf6%2FyjgktMaE5wa0pjEpCq99bOqBVEIoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOTv2%2FlVb3eQLeHF0SrcA7KXsQ7TM5u7Lai8iG0shF9f5fl8KzjIXtYLZVeFDSkiDohINKnhUBqWddkk2xk4i83%2BdRUSROBFlv7Y7Rm586qpoZaXmLxL0c%2FV4hzlXnLNabHMcSUCdYcN5nTdu90cpQm6nRR3DojnVg9I%2B%2Fw4bEXNFGV4UQ5icmCH4Q0zqfzxtgq9XyTTIytO0PHl%2F0RwIHVVjbj1iHGa8RVTP1CyJn%2B1ce33qNJJA3YAZ30caEotd%2BCvxbMGwgej8uv95zExvHBazphAxewcEV%2BEx6RLRRTK%2FsaS80%2FAN6PkyDBVLEc7EXIT9bO312ZJnBgOQybYz4wzTm1pw33uIQ4sFCfyYwajIklEpuxNJQWlm9mFYXmGkuS1I%2Fngmc%2Fw%2FAiW205yGpn%2B6JQholoAl4FJ%2BC0GUCuvI%2BHGIXRd8REKIqXE4Po5m8qz52qBeBz74Dnyo6lLposu%2FEhYrHUVPEj1FXT43l2q0r2CSngclLsGCRrmJ71liWlYjUwy5q0sMhB43PvgfWcFmCFW6U7%2BE14ZYU7JfLapBvJfwHnP41M09G0VMGETiJaHP8XxO6S%2BcYhPgYYaKh%2BFVgU07FOd4rrMZesxusy3HMI9j%2FsOCGKN1BVvM1XA8fB8Be5%2F6fnwtUp0MPH96L4GOqUBX0B5CisWLbv5bU62h5bizOnVjKOfNxjsQpYjpzyNEJRmVhGgvFTobPyOyey2Q7shGVp7x7WD8J4XztbhBLhN3FeSmKYg7u4JRfV%2BHp81SDZkeRaXBEMj3olTli5xKWUfgA%2FShCDba9KcsSUgs3iIXL2idyrOUgdnR4zCAypu%2BIsL0H6QDNswHe2LSz31FfhYrqfloRcl3woQ26DrUHrWHLj1Qrjz&X-Amz-Signature=d102d5ef082a9964ea0dd2a11e98f0cabe12f85dadbeac8571e6b448c1a6bf5c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOJBMMF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD1lljh34dm5cVYJ%2BhtS4vemeBbiE9f3jT%2FZNfZc0DYxgIgBIO5VpShfEMlf6%2FyjgktMaE5wa0pjEpCq99bOqBVEIoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOTv2%2FlVb3eQLeHF0SrcA7KXsQ7TM5u7Lai8iG0shF9f5fl8KzjIXtYLZVeFDSkiDohINKnhUBqWddkk2xk4i83%2BdRUSROBFlv7Y7Rm586qpoZaXmLxL0c%2FV4hzlXnLNabHMcSUCdYcN5nTdu90cpQm6nRR3DojnVg9I%2B%2Fw4bEXNFGV4UQ5icmCH4Q0zqfzxtgq9XyTTIytO0PHl%2F0RwIHVVjbj1iHGa8RVTP1CyJn%2B1ce33qNJJA3YAZ30caEotd%2BCvxbMGwgej8uv95zExvHBazphAxewcEV%2BEx6RLRRTK%2FsaS80%2FAN6PkyDBVLEc7EXIT9bO312ZJnBgOQybYz4wzTm1pw33uIQ4sFCfyYwajIklEpuxNJQWlm9mFYXmGkuS1I%2Fngmc%2Fw%2FAiW205yGpn%2B6JQholoAl4FJ%2BC0GUCuvI%2BHGIXRd8REKIqXE4Po5m8qz52qBeBz74Dnyo6lLposu%2FEhYrHUVPEj1FXT43l2q0r2CSngclLsGCRrmJ71liWlYjUwy5q0sMhB43PvgfWcFmCFW6U7%2BE14ZYU7JfLapBvJfwHnP41M09G0VMGETiJaHP8XxO6S%2BcYhPgYYaKh%2BFVgU07FOd4rrMZesxusy3HMI9j%2FsOCGKN1BVvM1XA8fB8Be5%2F6fnwtUp0MPH96L4GOqUBX0B5CisWLbv5bU62h5bizOnVjKOfNxjsQpYjpzyNEJRmVhGgvFTobPyOyey2Q7shGVp7x7WD8J4XztbhBLhN3FeSmKYg7u4JRfV%2BHp81SDZkeRaXBEMj3olTli5xKWUfgA%2FShCDba9KcsSUgs3iIXL2idyrOUgdnR4zCAypu%2BIsL0H6QDNswHe2LSz31FfhYrqfloRcl3woQ26DrUHrWHLj1Qrjz&X-Amz-Signature=4de5983da5f246e18c8b7f5fa33a622793c896a0efde1d5f729cababa0a9766d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
