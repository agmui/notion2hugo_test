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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCC7VKC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ibtiNOcdjr%2BFf5UIcDkqH%2BO%2F4iGonZcbwztSEebUlAiAckQm0p0aZ6sqiKlcr%2FJ4PW3Y%2B215lB%2FRZlrEQFyWgqiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Eiguxv7MypPWBNKtwD9zXE9ZudRZyG%2FfPS9zlYwG4vus4QODeIz%2Bz5UXvClqGccKimSjrjKM7OcC2hSUdNCZTInez4GU7LiXtY34RwMx1E8rpA1fHJuFmeAv1oqc1bRQHQsFGnSg%2BS26uTPvY5%2BqOwCmrzx1%2F0Dr4rqPJ41GkAm8oqr3CDLDpNjK80thThrfa3IgrI4xDKOzVJsRfGEahtenlWpHFtnxyQK3%2FHRZC5LQVU3y6%2BOzEfyWW3Eju0bNVxbiX5LMWf0CfCCbVjar8p4SBKyr%2F2vnE8NFCt%2BxcOi0fAsSZ6bD6l%2FWvQ93bn3toXd31dW7LBpoCPX%2B4jNxy36ah7oCHLht5JlBA3KWGZcfbwGw%2BncaxWeO5whcR98RI%2BI%2FeVAeDyQySBHrO3qUjnwLPIDffWYd5tUn%2Bq5oZsyk3JF7Pelh5eOey5815A4YK%2FtFlVuo%2FnKi2C3uLpspTRPNuZBejaEb2iyKYs3monHXIvQ9Xrn5E6Nt2s0pH29PQXtaAQ4%2F4jsLAA72JiSymVBXp7TkfisMnoIld8d7AdedWq4QXaww8lXO%2BII11wFqqZOqZ%2FsKGf%2F79ja4u3niIi%2BLA1iwNewWlueisCkqqLo%2B9xvH3bboxHyR4Q6HhjHrQ%2BxYvlGMv%2B1dIw0%2F25vwY6pgEEF12TOpwoQZ5YTwLrg2Cj9%2B9XHkLEjbo2cguKRuUbvYOiXlSyUT6yhalWaClWeopdWSsagLxCHk5f4af1%2BxPnYQZaY76BwbTyi0gfpVF4F4wjZVBRMcL8nGb8eyhcfdVmR7lRx1ws97sFVU%2BK5%2BEeGCxzbrlKTEC63o7NHR%2Fm5GZXW6kWfYNb0icAcfnTmu%2FLSP%2F7FmQxYPYZeeCOH7PxB9uKLrkd&X-Amz-Signature=95355993dbecb505eeaf6e17ca3e86342a5bc73c7305b79f43654d18e08c8fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCC7VKC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ibtiNOcdjr%2BFf5UIcDkqH%2BO%2F4iGonZcbwztSEebUlAiAckQm0p0aZ6sqiKlcr%2FJ4PW3Y%2B215lB%2FRZlrEQFyWgqiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Eiguxv7MypPWBNKtwD9zXE9ZudRZyG%2FfPS9zlYwG4vus4QODeIz%2Bz5UXvClqGccKimSjrjKM7OcC2hSUdNCZTInez4GU7LiXtY34RwMx1E8rpA1fHJuFmeAv1oqc1bRQHQsFGnSg%2BS26uTPvY5%2BqOwCmrzx1%2F0Dr4rqPJ41GkAm8oqr3CDLDpNjK80thThrfa3IgrI4xDKOzVJsRfGEahtenlWpHFtnxyQK3%2FHRZC5LQVU3y6%2BOzEfyWW3Eju0bNVxbiX5LMWf0CfCCbVjar8p4SBKyr%2F2vnE8NFCt%2BxcOi0fAsSZ6bD6l%2FWvQ93bn3toXd31dW7LBpoCPX%2B4jNxy36ah7oCHLht5JlBA3KWGZcfbwGw%2BncaxWeO5whcR98RI%2BI%2FeVAeDyQySBHrO3qUjnwLPIDffWYd5tUn%2Bq5oZsyk3JF7Pelh5eOey5815A4YK%2FtFlVuo%2FnKi2C3uLpspTRPNuZBejaEb2iyKYs3monHXIvQ9Xrn5E6Nt2s0pH29PQXtaAQ4%2F4jsLAA72JiSymVBXp7TkfisMnoIld8d7AdedWq4QXaww8lXO%2BII11wFqqZOqZ%2FsKGf%2F79ja4u3niIi%2BLA1iwNewWlueisCkqqLo%2B9xvH3bboxHyR4Q6HhjHrQ%2BxYvlGMv%2B1dIw0%2F25vwY6pgEEF12TOpwoQZ5YTwLrg2Cj9%2B9XHkLEjbo2cguKRuUbvYOiXlSyUT6yhalWaClWeopdWSsagLxCHk5f4af1%2BxPnYQZaY76BwbTyi0gfpVF4F4wjZVBRMcL8nGb8eyhcfdVmR7lRx1ws97sFVU%2BK5%2BEeGCxzbrlKTEC63o7NHR%2Fm5GZXW6kWfYNb0icAcfnTmu%2FLSP%2F7FmQxYPYZeeCOH7PxB9uKLrkd&X-Amz-Signature=a3180be7d3a0553d64183f51ff4cf5ac92c1f6b45484429d097b9cf5221c44fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
