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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VY2FGK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDEd6nlUPhV1oUKRqSgS3u9I7QQwro0YMXAv0GQ23Dc2AiAKls6hKharrOdMwI%2BU9v%2BFt7BsTjraJPFLdtfJWPvNWiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj29argxw8lSjBcLSKtwDzH7gSjQrtyZn6CEOM3qbDHbQPOJQxHLELN9b2YZfw%2F5w0SxcNdQbYDNZ8UnkCrFEpwKd%2FJzTzafqxgGcx0Hubk8Bp9Ae0Yn02KUZ390q4lM6zv6DR3bMhD25w1odv1A0wYObUI0MEMJwrIt3TBBNssLS%2BxJSKgV0KhY6yMnMab5EiUWJ%2BHodhrni7s1fzpdcaUwj9k93g3Cm3dqJoNqzlOlQqk0AcOwiHkIhNXtQk7%2FMnLKSUiOwpPPFB0kXOfVNRLJt0XT1%2Fm3dG5Y59C8E4f8NSXOJaYMnfeTGc4KvT%2F5MuKzsq4syBghhiDzABok%2Bc%2BS0ICQv5UaOcQPUN4rF2g86LntsMwSVelMWpxENBv1N4JQoqMkyybQx6sEsSr7EDdolkEgBUqmUtYb8bHxksygag5EcOLuZg%2FxMf03RYmuKvYtjsGmxpwn2MshFGe2pj7MEPwGWbal19ZRfUWn7WHY%2Fna42uVA%2Fn9lskwcTZ5Ti3y2RmxXX6DE0%2F4WymmWnJ9SGiPb%2BhlYmSkESsYsdh3WOHBcGf%2FVlbFxGsQ1whpGwajuCdK41LlfYCD8drQQ4E55OU5PycTIzAhuyA6nd41YciWszbcKComrwQ%2FDIfPAfd2PNsuD%2FSjW9ag0wk7b8vgY6pgGcpMMOIrK1z6weNXJhHzI03eqpC1uo8dvz%2FMf%2BQEROukjfAYig3r80Fc%2FdVbiWS5K67qhsJbxrty1ZuAlT%2FKZCEA8a4%2F5AUuwkhCZlSeEtpSLFPf1t352PAZJO6KAuAJHNbY3Nz5A9n0D2CHocXltQN0t5b2HjJxt2aRdnlhz6tk4xnGSgTB4HsQXHczN9SWmiNnnyw2Mav9ZxNGRg3aHx43WRT8Ya&X-Amz-Signature=6204f73e79228e225d10ca026f46a7890d83e2c3f8821edff84fac30901907ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VY2FGK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDEd6nlUPhV1oUKRqSgS3u9I7QQwro0YMXAv0GQ23Dc2AiAKls6hKharrOdMwI%2BU9v%2BFt7BsTjraJPFLdtfJWPvNWiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj29argxw8lSjBcLSKtwDzH7gSjQrtyZn6CEOM3qbDHbQPOJQxHLELN9b2YZfw%2F5w0SxcNdQbYDNZ8UnkCrFEpwKd%2FJzTzafqxgGcx0Hubk8Bp9Ae0Yn02KUZ390q4lM6zv6DR3bMhD25w1odv1A0wYObUI0MEMJwrIt3TBBNssLS%2BxJSKgV0KhY6yMnMab5EiUWJ%2BHodhrni7s1fzpdcaUwj9k93g3Cm3dqJoNqzlOlQqk0AcOwiHkIhNXtQk7%2FMnLKSUiOwpPPFB0kXOfVNRLJt0XT1%2Fm3dG5Y59C8E4f8NSXOJaYMnfeTGc4KvT%2F5MuKzsq4syBghhiDzABok%2Bc%2BS0ICQv5UaOcQPUN4rF2g86LntsMwSVelMWpxENBv1N4JQoqMkyybQx6sEsSr7EDdolkEgBUqmUtYb8bHxksygag5EcOLuZg%2FxMf03RYmuKvYtjsGmxpwn2MshFGe2pj7MEPwGWbal19ZRfUWn7WHY%2Fna42uVA%2Fn9lskwcTZ5Ti3y2RmxXX6DE0%2F4WymmWnJ9SGiPb%2BhlYmSkESsYsdh3WOHBcGf%2FVlbFxGsQ1whpGwajuCdK41LlfYCD8drQQ4E55OU5PycTIzAhuyA6nd41YciWszbcKComrwQ%2FDIfPAfd2PNsuD%2FSjW9ag0wk7b8vgY6pgGcpMMOIrK1z6weNXJhHzI03eqpC1uo8dvz%2FMf%2BQEROukjfAYig3r80Fc%2FdVbiWS5K67qhsJbxrty1ZuAlT%2FKZCEA8a4%2F5AUuwkhCZlSeEtpSLFPf1t352PAZJO6KAuAJHNbY3Nz5A9n0D2CHocXltQN0t5b2HjJxt2aRdnlhz6tk4xnGSgTB4HsQXHczN9SWmiNnnyw2Mav9ZxNGRg3aHx43WRT8Ya&X-Amz-Signature=55a26138b0db4b57cf6ab35ceb5a34d8e247942a5e621d48e25936bb419e5323&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
