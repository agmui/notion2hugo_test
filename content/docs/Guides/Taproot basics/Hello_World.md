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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2IQCZAR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDWcswP08qktCCZz1aaxQh3%2Ft7qlsHSJiAtR5zIu%2FBGRwIgLtdhGLBz72cql9Ps3bbOeyz0GQxpWSwRrBV53x88EW0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNZOcMcOkUCDPjqRwCrcA0o77aWUbdjnC1c1KpxWWtip2520UoT%2BlWgs5FF%2B5t1hMUNmbV%2FLHxTHx20a82k4e2i%2F89LoCGW239zkSoRFfO6jFMhk7Ao8mvxpWMuTCg%2FWtAaACtYrQ0G6dW0AKklRc6RBw4KwZYkPzoTSsEUiJd4rmJXaSrii6NxiG1vY%2Fb1QJydBKxkkTwwnK31li%2FgNFDB90vfO%2FSXUc%2BNZ9GFdmr%2F8eQX9p2BGA1KxY%2FuujUiNWfasCK2UmpwzsHEdE00wygrAcKTluCRZTm8a%2BV3mhk1XITQHcM2ESoaGohkxuS7ihLtj6whSy8KlJ%2BkMHQPAAb1IVHuOdvDGtwhhZ3Efz1E4cmhuG8UbQByYxTRj%2FI7c3Drm%2Bgo6GZWD2CHGFToNpRcoFgwpO3fII3HeFwTLbT%2BqbjDIehU%2BFOvvrwozPMD5kYj6mM84W84%2Bzvgc9yKBjK5279kn5ybanBrgLoXB0fohGhjhfyBu3WECt8NYsdXgfnCrna0uRpSx4i7hVTQkBltNcPNg9q8Gcd2gNSkgrVewLHsdSXtXkKYm0OeXJSoamej0fTJftO4WIcLXMn6wcxzwNymFhYEArkVr8rVZBMwqxCxeP%2BYyJXmNbHGXP5XiU3EONRLiLmHpvuyRMKSdk70GOqUBkdlpYriDx9nkexO%2BIHodN4rf6HudvluQSGYNce84Iznda22RPynn%2FIzms5TQ3XGsC2pi9QllRySCgaCymBAKyDcHx%2Bt0vnOYfpO9MFpAIgZiARoNEKCIJ7HJtGEf3Hzku4y4H8W7DKDQd9%2FmaL6E7YHXgl9DSeQs7mkXSKKTA1D308UX5juYhANfd3l8gyYRnYBjv7PRJlYxw8KpEBtDPCbIxR3L&X-Amz-Signature=1e866b5f35003064eb44b75db69c8855642867dfe3b554a57b8b14b014532313&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2IQCZAR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDWcswP08qktCCZz1aaxQh3%2Ft7qlsHSJiAtR5zIu%2FBGRwIgLtdhGLBz72cql9Ps3bbOeyz0GQxpWSwRrBV53x88EW0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNZOcMcOkUCDPjqRwCrcA0o77aWUbdjnC1c1KpxWWtip2520UoT%2BlWgs5FF%2B5t1hMUNmbV%2FLHxTHx20a82k4e2i%2F89LoCGW239zkSoRFfO6jFMhk7Ao8mvxpWMuTCg%2FWtAaACtYrQ0G6dW0AKklRc6RBw4KwZYkPzoTSsEUiJd4rmJXaSrii6NxiG1vY%2Fb1QJydBKxkkTwwnK31li%2FgNFDB90vfO%2FSXUc%2BNZ9GFdmr%2F8eQX9p2BGA1KxY%2FuujUiNWfasCK2UmpwzsHEdE00wygrAcKTluCRZTm8a%2BV3mhk1XITQHcM2ESoaGohkxuS7ihLtj6whSy8KlJ%2BkMHQPAAb1IVHuOdvDGtwhhZ3Efz1E4cmhuG8UbQByYxTRj%2FI7c3Drm%2Bgo6GZWD2CHGFToNpRcoFgwpO3fII3HeFwTLbT%2BqbjDIehU%2BFOvvrwozPMD5kYj6mM84W84%2Bzvgc9yKBjK5279kn5ybanBrgLoXB0fohGhjhfyBu3WECt8NYsdXgfnCrna0uRpSx4i7hVTQkBltNcPNg9q8Gcd2gNSkgrVewLHsdSXtXkKYm0OeXJSoamej0fTJftO4WIcLXMn6wcxzwNymFhYEArkVr8rVZBMwqxCxeP%2BYyJXmNbHGXP5XiU3EONRLiLmHpvuyRMKSdk70GOqUBkdlpYriDx9nkexO%2BIHodN4rf6HudvluQSGYNce84Iznda22RPynn%2FIzms5TQ3XGsC2pi9QllRySCgaCymBAKyDcHx%2Bt0vnOYfpO9MFpAIgZiARoNEKCIJ7HJtGEf3Hzku4y4H8W7DKDQd9%2FmaL6E7YHXgl9DSeQs7mkXSKKTA1D308UX5juYhANfd3l8gyYRnYBjv7PRJlYxw8KpEBtDPCbIxR3L&X-Amz-Signature=863e0a9455acfc649697d22279bdca5306631ff566eeafe89ae828003fc62d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
