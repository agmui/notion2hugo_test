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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSGWUQU%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHrzxum3trwcJ7t8xa9DASuRWb4X5tvHg4uFh1el0qFtAiB8h2JoLq9An%2FYWutoxMvLYQpm4rrU%2BhKUN7LgEtUefECr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMrnIYCPjbBUDeRoiPKtwDUPnCTeQkyr2flaOa0Nq%2BetccOFLReirGTpZ79yeyjYvDo3z%2B3hvZzUJY1AgD8sByKAjRbdhrrzUsXHEqbLN0szr%2B0lx651JJLB2hYoLzedM%2Bw9mrwEDajhqo%2Bs3dUWcZ%2BEIAKT2bf%2FyFedMwZDWZ1pVTcEclmnRgmDxFGR4SGeYdCv5blo%2FpqtmWTiVu%2BpYyvVGFWJS8qRIOBhR%2BVAsTZ2SJ%2FmBZVrCm4X3JXvI7Yrt5WJgCYMCCX4FIQ0JZeX7za7ri6FzAhsoAqvLVS7OnRE6Ox7CCctcF%2FsfLmlXPAXQJ4NP7DP7gkBjokKiU%2BkSxp54sHOZqN%2BQakitTpJic7xUS82PV7MRTSJG9Jnpg0hsiczI9CvUBrG4VMn%2BG9tgXRAb7tCzX9XsvPlQzPQcIZrvUPJ2X8ukFdJQE9V0MHu5DAZM4f4BCWBQR39tgKawozNXWIwF8fBuSBjKQbQ1al%2BH63yb2PTMOmRZ3TnnbYV66WbTg7t0uPaZD37qJhSHHv5m8AyXIqJGk9Wmgqpgunkcd3aKIMGvDfFBiOjcOJniiUHMEz3ySqV79ts3oPMa9l2DQ3pG%2FIlIRdnRRev9rSgOFyc%2B2Q0TO7UGDlxXPDKE7eMGSZ2dWD1jMAVQwpLrxwgY6pgFqvSyrM7INk2K9BSZB2DuVvccN3D%2BixFYqcmWaPfay8czWdKtUKJGIGoU7YmndgIofHa3atGkMMHvB2ij2Pj9psDpyKM5XSnWcMgbCqEjUPoGIVD5dRb0PTgN8ZGhQhyDqXKzzL%2Fy8dMccJnJtCDX2Biilt%2FRqClCq1A%2FepJqI2r6X0bElCw79YZB51CjwoOkIXJ7QTtvKraD1SVtv7iuI8Qgat9Cl&X-Amz-Signature=c37896fb7b2f3de20a213a96815b3ebe7d73fdf02c1f2389b8621141f7be9324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSGWUQU%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHrzxum3trwcJ7t8xa9DASuRWb4X5tvHg4uFh1el0qFtAiB8h2JoLq9An%2FYWutoxMvLYQpm4rrU%2BhKUN7LgEtUefECr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMrnIYCPjbBUDeRoiPKtwDUPnCTeQkyr2flaOa0Nq%2BetccOFLReirGTpZ79yeyjYvDo3z%2B3hvZzUJY1AgD8sByKAjRbdhrrzUsXHEqbLN0szr%2B0lx651JJLB2hYoLzedM%2Bw9mrwEDajhqo%2Bs3dUWcZ%2BEIAKT2bf%2FyFedMwZDWZ1pVTcEclmnRgmDxFGR4SGeYdCv5blo%2FpqtmWTiVu%2BpYyvVGFWJS8qRIOBhR%2BVAsTZ2SJ%2FmBZVrCm4X3JXvI7Yrt5WJgCYMCCX4FIQ0JZeX7za7ri6FzAhsoAqvLVS7OnRE6Ox7CCctcF%2FsfLmlXPAXQJ4NP7DP7gkBjokKiU%2BkSxp54sHOZqN%2BQakitTpJic7xUS82PV7MRTSJG9Jnpg0hsiczI9CvUBrG4VMn%2BG9tgXRAb7tCzX9XsvPlQzPQcIZrvUPJ2X8ukFdJQE9V0MHu5DAZM4f4BCWBQR39tgKawozNXWIwF8fBuSBjKQbQ1al%2BH63yb2PTMOmRZ3TnnbYV66WbTg7t0uPaZD37qJhSHHv5m8AyXIqJGk9Wmgqpgunkcd3aKIMGvDfFBiOjcOJniiUHMEz3ySqV79ts3oPMa9l2DQ3pG%2FIlIRdnRRev9rSgOFyc%2B2Q0TO7UGDlxXPDKE7eMGSZ2dWD1jMAVQwpLrxwgY6pgFqvSyrM7INk2K9BSZB2DuVvccN3D%2BixFYqcmWaPfay8czWdKtUKJGIGoU7YmndgIofHa3atGkMMHvB2ij2Pj9psDpyKM5XSnWcMgbCqEjUPoGIVD5dRb0PTgN8ZGhQhyDqXKzzL%2Fy8dMccJnJtCDX2Biilt%2FRqClCq1A%2FepJqI2r6X0bElCw79YZB51CjwoOkIXJ7QTtvKraD1SVtv7iuI8Qgat9Cl&X-Amz-Signature=6b9c65f049df82af1bb65fe3bc0ae7e39ed58733e86acdb54b88504db0693ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
