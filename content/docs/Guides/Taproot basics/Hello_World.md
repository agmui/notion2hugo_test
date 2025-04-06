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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466736PAULB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPfpVmrpwrzXwXlYWcCDcsgV%2BF5nIIYvsjxPEFlKPbfQIhAJs2V84v5%2FXuz1qcp9kwYn0XgK7kDh4wkdb1o5gdBz8YKv8DCEIQABoMNjM3NDIzMTgzODA1Igwknrl8c8h8xSS3DDYq3APKQOBa5Xx%2BaUzQxG5sU8xWfvFNm0VdEZH4FSqzBJSdzf5z3QB7ddrZQW1b1z0OxGnli8JE0SiWUmrYq1RYrzJHABWKdtMxmCIIUyc60HXOm%2Fp8kmAv73hxVV%2B5RXcMcv0nq6Zx0GQtHd36p5zxsr781Yajiq2cd5EphQloElyOMDt9bzmbt2d8cwMPeQ7d%2BJp12J4BxSVQ875QhZbIng6ggeGMAUVn3vtyAviG06kD1WC4jmDBYmbvprPkS2Vn8HJaIn62RDz9qejXslM655wC3KfGz5zOoalQIKC%2BMbIpgKfxhV4CbCYI9kPXcEDOXeeyr76x5AR2J7jPrriICgKGc2E%2Fi3DRaBj0B8XSxvl8zD9hUVVQTIk3CdULRmtKAxYurIfy4HPmXvxIGjLod6%2Fb19m0jZeVhyChOjdL%2FvHKPmDz4%2FIWo6FkuxK08K1HiuRZ5LQrp1lGEsw553jwjflv1EJMerMNMe4%2F0T8ZP0AZi7HDEao4xOY8xAUB3S2r9L978TX0PB4vHz%2BZr7cmPv4oQQYJwt%2Fnkvf9Ji48xyRv3rh%2FnHk%2Bd7lJNqkf%2BySMUEY3vX21t4gNfPk%2F3%2Frhw3ewVW6r7jac8Qh6uYudB3%2BI0T9Ko%2BWkSZywbefaezDm%2F8i%2FBjqkAV%2Bow%2FGIHZR45t4X525hq4bkrRwZ6fR10EbXZNr1SDeg6jFA6YoRyQCj5sDFBYkjzCbghrvooJjgarmeGyfwu4qCFmPJrw1mSyTpTD%2FDmASrV5pA%2B2AR5GCXELsT12ozEDHF0%2F0AXpwyuLUHXYQL1o5cFg0ZNkYUjquvu%2FAyZ8yOLUJfYpZlZ50Mek2CSzK%2Bk%2FLOF9ZWTcdkhkyvrmVpPscnT3I5&X-Amz-Signature=a3c736d229604dbde5e77b09be08e35a2ffe4dca0d4754e163488385abc9f138&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466736PAULB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPfpVmrpwrzXwXlYWcCDcsgV%2BF5nIIYvsjxPEFlKPbfQIhAJs2V84v5%2FXuz1qcp9kwYn0XgK7kDh4wkdb1o5gdBz8YKv8DCEIQABoMNjM3NDIzMTgzODA1Igwknrl8c8h8xSS3DDYq3APKQOBa5Xx%2BaUzQxG5sU8xWfvFNm0VdEZH4FSqzBJSdzf5z3QB7ddrZQW1b1z0OxGnli8JE0SiWUmrYq1RYrzJHABWKdtMxmCIIUyc60HXOm%2Fp8kmAv73hxVV%2B5RXcMcv0nq6Zx0GQtHd36p5zxsr781Yajiq2cd5EphQloElyOMDt9bzmbt2d8cwMPeQ7d%2BJp12J4BxSVQ875QhZbIng6ggeGMAUVn3vtyAviG06kD1WC4jmDBYmbvprPkS2Vn8HJaIn62RDz9qejXslM655wC3KfGz5zOoalQIKC%2BMbIpgKfxhV4CbCYI9kPXcEDOXeeyr76x5AR2J7jPrriICgKGc2E%2Fi3DRaBj0B8XSxvl8zD9hUVVQTIk3CdULRmtKAxYurIfy4HPmXvxIGjLod6%2Fb19m0jZeVhyChOjdL%2FvHKPmDz4%2FIWo6FkuxK08K1HiuRZ5LQrp1lGEsw553jwjflv1EJMerMNMe4%2F0T8ZP0AZi7HDEao4xOY8xAUB3S2r9L978TX0PB4vHz%2BZr7cmPv4oQQYJwt%2Fnkvf9Ji48xyRv3rh%2FnHk%2Bd7lJNqkf%2BySMUEY3vX21t4gNfPk%2F3%2Frhw3ewVW6r7jac8Qh6uYudB3%2BI0T9Ko%2BWkSZywbefaezDm%2F8i%2FBjqkAV%2Bow%2FGIHZR45t4X525hq4bkrRwZ6fR10EbXZNr1SDeg6jFA6YoRyQCj5sDFBYkjzCbghrvooJjgarmeGyfwu4qCFmPJrw1mSyTpTD%2FDmASrV5pA%2B2AR5GCXELsT12ozEDHF0%2F0AXpwyuLUHXYQL1o5cFg0ZNkYUjquvu%2FAyZ8yOLUJfYpZlZ50Mek2CSzK%2Bk%2FLOF9ZWTcdkhkyvrmVpPscnT3I5&X-Amz-Signature=540caac655458f0729671501d33c2e4ea15e1db8c3361a8f5efeb167b5605dee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
