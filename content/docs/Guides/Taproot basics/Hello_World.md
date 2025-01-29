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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DIGYXU3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyBCbsPIBKjTh9tUKGF1ZVQQEJxJIDMvx6abKO7TxGgAIhAMFW1CSxgtzu4S3IC8nfoobZPmDBX1NveuhvmHj8wE1qKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHApbcvMnO9zXsKDcq3AOlRAhptNQsJIU%2FcMiTBsj%2FzsFqFe4TXWL%2BDY4WZRsP6LYUQXyVWGXeeJXbt%2FdwdUTGiG1arIPbqcOT4PqYCm9%2BjLSHlMqSZrB%2BjBrqO9PazEWt%2Fsxssl3hOa0JYxTKivWw3vaiAUd1KLtlZj9FC%2FnC7T39U0p%2BPvZe5EgAWAkUvXpPDKkkqrQLbpBzW2kPY8xbZVGohfMWGwBJ5IgXLrWDZEa%2FAbPb%2FGfaC%2BPS9PKsB2WFc9qbP5FRoMSa0ILP%2B%2FbmwK%2BNSMumqB8O7jE61pbv7d6Gzvz6neqFx2cUH2wKMnam6gIdMNReOEMMvHjIdaQ8zN2gjVgGMm%2BzGRvafSfL5SuhLkpxq5PS2OUZGrEmnLu%2Fy5VeTphA6xFOvOgTuwynuhzvZmXbV7VVC1GeD2w069qTpSdWlVn8kH3dkwqDYu%2FwlJNFHBQyT6ScRC5%2BV7hCltQVDRwYeU6xKmVkTdia9T7xjeHW73MC5wO1ztHcy57CJ0VrBOSXRxZ%2FvwMCWOuBBhJFk1VgGKpAqbE0kEnk8mcDLB%2F2EWUohTRcE01LpMy0U1mjQL4xn2IayogeXQkUtvTozwhvGwq%2F1j6JO211qHSyqTgLtL4z8voW6i42f%2FGMbnVQZXZ1YCdxMTDt2em8BjqkAUJTWx9ExbIhtOrEicrbzgI0bJDtAm9nzKyC5dO2zml4DlaN1yIv0kr2LPpotd184URtYynukaZlkh0A8Tf0qdOgzjbbyzGum1xGOQXApgpLCYT1T6Cff2lNrPn%2FTiJxg3XPxhMzfepJYTtS7ql7alrOI4Aw2bDPbM4TFJ7%2FLHHA7YIjxau2WMowTlDoi%2FAO7J7KAd6BKKufC48SiRVEHycA8KyU&X-Amz-Signature=f3abf0238f628952b545221d2801ddda47314e206f005cc6e62354af8aded20e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DIGYXU3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyBCbsPIBKjTh9tUKGF1ZVQQEJxJIDMvx6abKO7TxGgAIhAMFW1CSxgtzu4S3IC8nfoobZPmDBX1NveuhvmHj8wE1qKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHApbcvMnO9zXsKDcq3AOlRAhptNQsJIU%2FcMiTBsj%2FzsFqFe4TXWL%2BDY4WZRsP6LYUQXyVWGXeeJXbt%2FdwdUTGiG1arIPbqcOT4PqYCm9%2BjLSHlMqSZrB%2BjBrqO9PazEWt%2Fsxssl3hOa0JYxTKivWw3vaiAUd1KLtlZj9FC%2FnC7T39U0p%2BPvZe5EgAWAkUvXpPDKkkqrQLbpBzW2kPY8xbZVGohfMWGwBJ5IgXLrWDZEa%2FAbPb%2FGfaC%2BPS9PKsB2WFc9qbP5FRoMSa0ILP%2B%2FbmwK%2BNSMumqB8O7jE61pbv7d6Gzvz6neqFx2cUH2wKMnam6gIdMNReOEMMvHjIdaQ8zN2gjVgGMm%2BzGRvafSfL5SuhLkpxq5PS2OUZGrEmnLu%2Fy5VeTphA6xFOvOgTuwynuhzvZmXbV7VVC1GeD2w069qTpSdWlVn8kH3dkwqDYu%2FwlJNFHBQyT6ScRC5%2BV7hCltQVDRwYeU6xKmVkTdia9T7xjeHW73MC5wO1ztHcy57CJ0VrBOSXRxZ%2FvwMCWOuBBhJFk1VgGKpAqbE0kEnk8mcDLB%2F2EWUohTRcE01LpMy0U1mjQL4xn2IayogeXQkUtvTozwhvGwq%2F1j6JO211qHSyqTgLtL4z8voW6i42f%2FGMbnVQZXZ1YCdxMTDt2em8BjqkAUJTWx9ExbIhtOrEicrbzgI0bJDtAm9nzKyC5dO2zml4DlaN1yIv0kr2LPpotd184URtYynukaZlkh0A8Tf0qdOgzjbbyzGum1xGOQXApgpLCYT1T6Cff2lNrPn%2FTiJxg3XPxhMzfepJYTtS7ql7alrOI4Aw2bDPbM4TFJ7%2FLHHA7YIjxau2WMowTlDoi%2FAO7J7KAd6BKKufC48SiRVEHycA8KyU&X-Amz-Signature=7a3fc091f67b98fdf0d292eef33ec02e992e1f95bc8ac8b99744dfe5d049a946&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
