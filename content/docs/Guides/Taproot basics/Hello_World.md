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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZOJIBL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQTMy9ONsQFFcllQCHbMNZDQXOWpCo41aJJ%2FBrngVWrAiAFOFQpRDFVHwCCP%2F9e4p66SUh%2BxYeGObaSXV18vOzwYyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMqPr%2BfVbY51P96%2FwFKtwDv%2FBzFAArLxxWyXzwPrGyX%2BmCZuGWB9OeyApvqIaztf3o7zRMvre55pt2cRLQFqKRg7Xgx6AP6KY5Lak4tqMQxcmL%2Fgr62TE5xOyXLCWroJboGpRu09uzSqJC83aaJyg3kCnCGc%2BUw7wbf698fWnpfnMazKpir5LUCk7bkOeu3bFYK5e8LvoFEjYVtDkizj6eBgYtfcznG355B74BsOZXHiJSxtWO76UFx42O7fGOE4QhIXKRXrbN3OFY0XZR9jqbv%2B1WM4y729uWrSTmEtz%2Biiv%2F6ab3BtZgIJkMKioCOuyqfsRL0FITFdbN%2BbkXvN6lmwca%2BuL2AV3DptAt7M4DE3SehzQRd8lBLqQVVM%2Fxxy4qQLhc2j40yw5Dl63AGGrMPFN9WCZM1JRSPdrRm9LNT%2FmG6YcYbnh729pjG5tyMy0SaMry0%2FE72cGJv3Fx8KWEV%2F0LCLdmpcBpOL1wdN1gPRKdd6zKgvdrS7LX9ITyBcuhZ%2Fi6iSi61842cLiLw2FkXI5eSuW%2Bm2ABrdkun2fMWI%2FHvOZZ8zN94zwzchXmim3TKU%2Bl7iDb1sJo9dW0bf5Zt%2B6m4lkL65DqB6omBjYxo08aaG%2BGIN0KXFv%2B2COClpfJqD6I26o27FDHzQow0oL2vwY6pgHpFcOaCeqj6lzhyNFqPJ2UNzWnpxkT0c2MxEeNhC8Ack0h%2BN6iqboQK4cbV0lW0QjeO9fs7uzUIN1O9CdrwWi8A4r3BZ%2BTxvyy48080f%2BsM8jvf9M25m%2BvhRm%2BZQhtBR7sDLugofXc2NY9mgBZZPBiwYqh1x7vt2aSK9Rierax0QXxG91LJ2%2BgC0i%2FI03TiLE7lACT2CGoW39Umf2nIGPi7Toa0AFk&X-Amz-Signature=a88b66c81da4c1f1801ecbd6991c6ef47353fe1d417b3dd1f8892a0103f2fe01&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZOJIBL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQTMy9ONsQFFcllQCHbMNZDQXOWpCo41aJJ%2FBrngVWrAiAFOFQpRDFVHwCCP%2F9e4p66SUh%2BxYeGObaSXV18vOzwYyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMqPr%2BfVbY51P96%2FwFKtwDv%2FBzFAArLxxWyXzwPrGyX%2BmCZuGWB9OeyApvqIaztf3o7zRMvre55pt2cRLQFqKRg7Xgx6AP6KY5Lak4tqMQxcmL%2Fgr62TE5xOyXLCWroJboGpRu09uzSqJC83aaJyg3kCnCGc%2BUw7wbf698fWnpfnMazKpir5LUCk7bkOeu3bFYK5e8LvoFEjYVtDkizj6eBgYtfcznG355B74BsOZXHiJSxtWO76UFx42O7fGOE4QhIXKRXrbN3OFY0XZR9jqbv%2B1WM4y729uWrSTmEtz%2Biiv%2F6ab3BtZgIJkMKioCOuyqfsRL0FITFdbN%2BbkXvN6lmwca%2BuL2AV3DptAt7M4DE3SehzQRd8lBLqQVVM%2Fxxy4qQLhc2j40yw5Dl63AGGrMPFN9WCZM1JRSPdrRm9LNT%2FmG6YcYbnh729pjG5tyMy0SaMry0%2FE72cGJv3Fx8KWEV%2F0LCLdmpcBpOL1wdN1gPRKdd6zKgvdrS7LX9ITyBcuhZ%2Fi6iSi61842cLiLw2FkXI5eSuW%2Bm2ABrdkun2fMWI%2FHvOZZ8zN94zwzchXmim3TKU%2Bl7iDb1sJo9dW0bf5Zt%2B6m4lkL65DqB6omBjYxo08aaG%2BGIN0KXFv%2B2COClpfJqD6I26o27FDHzQow0oL2vwY6pgHpFcOaCeqj6lzhyNFqPJ2UNzWnpxkT0c2MxEeNhC8Ack0h%2BN6iqboQK4cbV0lW0QjeO9fs7uzUIN1O9CdrwWi8A4r3BZ%2BTxvyy48080f%2BsM8jvf9M25m%2BvhRm%2BZQhtBR7sDLugofXc2NY9mgBZZPBiwYqh1x7vt2aSK9Rierax0QXxG91LJ2%2BgC0i%2FI03TiLE7lACT2CGoW39Umf2nIGPi7Toa0AFk&X-Amz-Signature=be2d8d1957e263863e6db1aa8c474e85aaf889c86c9e90e6f1ac3251ee157941&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
