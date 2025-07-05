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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCGGJMCH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQChY3uSW%2FY4Q1wI3Ljatbv1Omsx0YTqs7n7JaulzfXjDgIhAPqsrxQZFr8n39mQXyBJJYK421Hp%2BJEMrOEoO%2BIWNDSRKv8DCDUQABoMNjM3NDIzMTgzODA1IgxQJ%2F0Wyvg8FajMmSwq3ANkCkti%2Fv60RggC9a4xjnRnbxx9mJM1EFbHiuk8MiPrIRgtvj6ae1xIgwDfpyLsrx68fRVTwbD2%2Fn%2FkOhgLczsppBmNcvPzv0eK%2Bd6RjKqnKCpTvsLac5jZCH3dNgqLzSq%2B0IeKBLzzITZ1UhXASYdtT9E51RhKFjXDkIH3P3UyEaW91QQVs3VSFYUqaCnAsWZJxt75OvgYu8pkeEhF9J0A6y5RhWMA0GZbEM%2BGvrNVa2Q5qtRRttOXGDsalAHuALNa8FjvfYCtlHKD%2Fuvy7YcDh%2BuI3Yo%2FLtDLmXlJ%2BcJ%2FRo6nQ%2B2Dn01nkzDGSAs4xTuRK7m3yh7YlxRyp461BVRp3YCmlH9UCmryw29QnYEuVF7vPGJrG6X8EFuiOFd2GzAh1wKaEZ1%2Fx4cTufP%2FPhFwxn9XyL5ummd%2FiiXu2T1U0TP1WtnrztkXwDeJpPxP%2BSVw2ZwA7tuI4aWEGX1uHORJAsuhHAyWlKQFp6c6Zm1LfjWBJlkYuzS0Nrhc5zuCf0HGottULpuzg9dI7GXdM%2B4Cve%2BzAjnsyeZcOO7Pg0sa%2Fp7vSYaDutBawzN%2FSqKXYfB%2FKGYWl%2BFyU30AsN4BFEYFocm3PesasST4Au2P2G94DVyBZRxHIfQhR79h8TDQ56DDBjqkASCARBBpku%2BF2edhI1AL6CP2C%2FjeHZ7zG995cKHRu7w1LSRkue%2BimyyU70IbeOF9X9P2kWMsHhJEkarWc6OzNXUd%2B8V0z1w%2BLrGohMTl5WxEep8eqUydRN1FmoL%2BeM5c96ZSei4wZJNeCp61f7%2Fd7uM1Lj8RGx%2FIW2f0M8SQ2NGGsUAHMj9ua8np1D8y3HiOxqTaeGlkBWA1nyTn7Yq9mxFZYfn6&X-Amz-Signature=37e7e44d91f695993d050f22719b2ac5a3db99e5623acc1b07009c2bf6d428d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCGGJMCH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQChY3uSW%2FY4Q1wI3Ljatbv1Omsx0YTqs7n7JaulzfXjDgIhAPqsrxQZFr8n39mQXyBJJYK421Hp%2BJEMrOEoO%2BIWNDSRKv8DCDUQABoMNjM3NDIzMTgzODA1IgxQJ%2F0Wyvg8FajMmSwq3ANkCkti%2Fv60RggC9a4xjnRnbxx9mJM1EFbHiuk8MiPrIRgtvj6ae1xIgwDfpyLsrx68fRVTwbD2%2Fn%2FkOhgLczsppBmNcvPzv0eK%2Bd6RjKqnKCpTvsLac5jZCH3dNgqLzSq%2B0IeKBLzzITZ1UhXASYdtT9E51RhKFjXDkIH3P3UyEaW91QQVs3VSFYUqaCnAsWZJxt75OvgYu8pkeEhF9J0A6y5RhWMA0GZbEM%2BGvrNVa2Q5qtRRttOXGDsalAHuALNa8FjvfYCtlHKD%2Fuvy7YcDh%2BuI3Yo%2FLtDLmXlJ%2BcJ%2FRo6nQ%2B2Dn01nkzDGSAs4xTuRK7m3yh7YlxRyp461BVRp3YCmlH9UCmryw29QnYEuVF7vPGJrG6X8EFuiOFd2GzAh1wKaEZ1%2Fx4cTufP%2FPhFwxn9XyL5ummd%2FiiXu2T1U0TP1WtnrztkXwDeJpPxP%2BSVw2ZwA7tuI4aWEGX1uHORJAsuhHAyWlKQFp6c6Zm1LfjWBJlkYuzS0Nrhc5zuCf0HGottULpuzg9dI7GXdM%2B4Cve%2BzAjnsyeZcOO7Pg0sa%2Fp7vSYaDutBawzN%2FSqKXYfB%2FKGYWl%2BFyU30AsN4BFEYFocm3PesasST4Au2P2G94DVyBZRxHIfQhR79h8TDQ56DDBjqkASCARBBpku%2BF2edhI1AL6CP2C%2FjeHZ7zG995cKHRu7w1LSRkue%2BimyyU70IbeOF9X9P2kWMsHhJEkarWc6OzNXUd%2B8V0z1w%2BLrGohMTl5WxEep8eqUydRN1FmoL%2BeM5c96ZSei4wZJNeCp61f7%2Fd7uM1Lj8RGx%2FIW2f0M8SQ2NGGsUAHMj9ua8np1D8y3HiOxqTaeGlkBWA1nyTn7Yq9mxFZYfn6&X-Amz-Signature=3dcd2e2b5161baeacbeec9545eb68a88674c87126e24b05663efbef0bc2ecc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
