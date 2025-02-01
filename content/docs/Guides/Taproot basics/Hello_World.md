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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFONK2RK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1WR%2F%2FV66rMWeP95CPSBcv5f%2BrtKUr9eH7WQxmr34hZAiBXbX2QQFwNEPOEtmTnVTpr2r35dt3uNMFHijwwwkbWYiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtYsqyTDfvNusbc7nKtwDn4dYYbno%2BHKt90GkTzbBgq78hSo78McSjGzXX9JubIhn%2BwJiN40wJQvvKxVMEZoWLvD1CuV60wvBqqtslHfhV8Zi4%2FEi2WTW9Vx%2B36ouamWUKqlo%2BVus1JhtFSL%2Bd58I9GdJjKdwxRWY9gEAp1qN7S82wr%2BUkh7kuqLTEADgoQWTul4sK6gHp%2FC1gBL94wuLTt2imHKJrpDNnk4XO7OWfKSTFAdTbQ%2FR%2BLbGJz7U%2B%2FreIa0qUw61Hh%2Bktz7RTaxYPx31RT83%2Bqa%2B3YyThAPEVDHy5LlxKoQDa7kQYW3HTC9eLDny%2FpFw3YMW3Iw40Xls1ZD0Bzyg%2F5Qio1Qf1mqf6M4RuHtTCYIji1nqUnrNoW2bTD%2FxXGq4QmirPFW96MRHlsJ8hFAS3AUjhQVPNjdeZivfznAq1SHzCvNOPjhrEYqK%2FvYelw3X2RGsuWGvs%2F9Lfg%2F2STmRpeyPrauNIpXPH7BI%2BO4gN%2FHwG8spbxrk3DjJkLH13O9GbTDZhh8QxW6oIRIP42fZ0U%2FJ5pyopoqijAyENZ7wZKGvCMND%2FxmWaRBFoMw4lUVq94Xrz%2BldZtz8fLNMc%2BPjAIXSpB6j%2F%2Bx7atbAa2i78j9h3q2IjmUJ%2Baz8na%2FEjO7ZF9RKXaow2sL2vAY6pgEnvJ5NybjXmSVSTdBl89diAt2U15Ij6cX129QIqmR2KP4Rs15qlG%2FaBe2ZppH8Wzq%2BPgPj%2Fi1815KI3qb4Q%2F1fJ45Nu7pwSXcPCxvYYjFL9G8e9r273p5BFqRCxpWmcM8FO6jEIWdgL%2BnSdK2sSLB6klMWKKCOPPvS%2FeXVMijKR05EKvSqsjZdMS7RCtLAmgf5Kb%2F2U%2F%2FzUzUShLbsmjw%2Fp6zw32iP&X-Amz-Signature=c33028cb833485aafdaee25f196bd4de8f8c291eb70a16031709a0092092d8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFONK2RK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1WR%2F%2FV66rMWeP95CPSBcv5f%2BrtKUr9eH7WQxmr34hZAiBXbX2QQFwNEPOEtmTnVTpr2r35dt3uNMFHijwwwkbWYiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtYsqyTDfvNusbc7nKtwDn4dYYbno%2BHKt90GkTzbBgq78hSo78McSjGzXX9JubIhn%2BwJiN40wJQvvKxVMEZoWLvD1CuV60wvBqqtslHfhV8Zi4%2FEi2WTW9Vx%2B36ouamWUKqlo%2BVus1JhtFSL%2Bd58I9GdJjKdwxRWY9gEAp1qN7S82wr%2BUkh7kuqLTEADgoQWTul4sK6gHp%2FC1gBL94wuLTt2imHKJrpDNnk4XO7OWfKSTFAdTbQ%2FR%2BLbGJz7U%2B%2FreIa0qUw61Hh%2Bktz7RTaxYPx31RT83%2Bqa%2B3YyThAPEVDHy5LlxKoQDa7kQYW3HTC9eLDny%2FpFw3YMW3Iw40Xls1ZD0Bzyg%2F5Qio1Qf1mqf6M4RuHtTCYIji1nqUnrNoW2bTD%2FxXGq4QmirPFW96MRHlsJ8hFAS3AUjhQVPNjdeZivfznAq1SHzCvNOPjhrEYqK%2FvYelw3X2RGsuWGvs%2F9Lfg%2F2STmRpeyPrauNIpXPH7BI%2BO4gN%2FHwG8spbxrk3DjJkLH13O9GbTDZhh8QxW6oIRIP42fZ0U%2FJ5pyopoqijAyENZ7wZKGvCMND%2FxmWaRBFoMw4lUVq94Xrz%2BldZtz8fLNMc%2BPjAIXSpB6j%2F%2Bx7atbAa2i78j9h3q2IjmUJ%2Baz8na%2FEjO7ZF9RKXaow2sL2vAY6pgEnvJ5NybjXmSVSTdBl89diAt2U15Ij6cX129QIqmR2KP4Rs15qlG%2FaBe2ZppH8Wzq%2BPgPj%2Fi1815KI3qb4Q%2F1fJ45Nu7pwSXcPCxvYYjFL9G8e9r273p5BFqRCxpWmcM8FO6jEIWdgL%2BnSdK2sSLB6klMWKKCOPPvS%2FeXVMijKR05EKvSqsjZdMS7RCtLAmgf5Kb%2F2U%2F%2FzUzUShLbsmjw%2Fp6zw32iP&X-Amz-Signature=7f2512377f46715bb136092bf438a425a7f5c8adb07e8c7d9104ef1431735e59&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
