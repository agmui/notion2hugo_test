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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC7LLCDQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICmEcl1ilM9R4sNnG4At0v5z0FpBv9r2uVgLmQMSMouzAiBSk6SFO65tidVjBlkq9jkI3Ns4NVR2%2FMx7qVSPthw4ViqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY4wVow%2BT%2BUx5pJK4KtwDkCYWEsPCV%2FDfdggLoHsF%2FhuLu03PWIgdU9UI3Uk2GD7iBT6WgEBHje5PHNH4zVC7F%2FwDrBIH%2BVpnSvJCaHyDnAyi2ZAsOu8yJGjFKUBJPW9fskaY0HY81a%2FXNSoyXfU3B3OdICH%2FsS0u0XvY8ZzAfJHdusxv5%2BHU9yyue4JOjEQQ0V9kLPPWCYFkrY7vHPvLCPiad9YQU6CNP6jBDTie%2BCAbUko2weaclTUFZUTiia2Tj1%2FLep0P1u5NMMLzgykj6hT6fIBrls%2FoFEZPC3jB3cuHqni0e955%2FLBljxjKgrySzSWLL4fcjPzK73mBeeFNWpEyIXoqHlVV128KODortmA3NCQOAFtZNGD55c%2BoHJdgdmue%2FMCcMTGfhFMIxirQ8X0uJaAqhRr3YuhS56cwmkEZpMC3g0WNK9l44E96Sloppunj%2BGvjbmFRtexzk1SBPBPyEPE4lgMfrhK9yJPOu%2B7fJlpjOj0xKKG6n4CLpEXoZ2NW1tOQRHq8xwaJ%2F9XNw9ZuEO%2Fc5U%2BB0luP80VAtXNvB5yJK0Sjxqn4JJl5S%2FCcHrnskfQPikyxHspv%2FCnERKVtwwP3fGNq0KbqrLYCtjZBJoB6%2ByXPXwJMl6aHKYxsgDuCuG0C%2BL%2FQBEMwsvu3vwY6pgED6uxGDV%2B%2BldpPIQ9LBLtV95n%2F51Ia1t0DfMXycetFFJ4wr%2FyIrgVNdSp9wX7YeABIwfAJL%2BI%2BR8RXhcuAFpe5rW%2FBwyzZvCFQBZJv2BLm2jR3rmYrwPqq1ppxkwyEIEhPBRJP%2BQsM3jg1RL6cNrL9KEmYxGtc09GWHqOhbITywlFOp8yUA73yKJ10FnsEzHOyk3BFr1x66KQEpJVNT6iCweYk3ONP&X-Amz-Signature=1573bce7fbcbe2580543a4aabe53b24c5a5fd4560232c62f15b3dbe5e5847d78&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC7LLCDQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICmEcl1ilM9R4sNnG4At0v5z0FpBv9r2uVgLmQMSMouzAiBSk6SFO65tidVjBlkq9jkI3Ns4NVR2%2FMx7qVSPthw4ViqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY4wVow%2BT%2BUx5pJK4KtwDkCYWEsPCV%2FDfdggLoHsF%2FhuLu03PWIgdU9UI3Uk2GD7iBT6WgEBHje5PHNH4zVC7F%2FwDrBIH%2BVpnSvJCaHyDnAyi2ZAsOu8yJGjFKUBJPW9fskaY0HY81a%2FXNSoyXfU3B3OdICH%2FsS0u0XvY8ZzAfJHdusxv5%2BHU9yyue4JOjEQQ0V9kLPPWCYFkrY7vHPvLCPiad9YQU6CNP6jBDTie%2BCAbUko2weaclTUFZUTiia2Tj1%2FLep0P1u5NMMLzgykj6hT6fIBrls%2FoFEZPC3jB3cuHqni0e955%2FLBljxjKgrySzSWLL4fcjPzK73mBeeFNWpEyIXoqHlVV128KODortmA3NCQOAFtZNGD55c%2BoHJdgdmue%2FMCcMTGfhFMIxirQ8X0uJaAqhRr3YuhS56cwmkEZpMC3g0WNK9l44E96Sloppunj%2BGvjbmFRtexzk1SBPBPyEPE4lgMfrhK9yJPOu%2B7fJlpjOj0xKKG6n4CLpEXoZ2NW1tOQRHq8xwaJ%2F9XNw9ZuEO%2Fc5U%2BB0luP80VAtXNvB5yJK0Sjxqn4JJl5S%2FCcHrnskfQPikyxHspv%2FCnERKVtwwP3fGNq0KbqrLYCtjZBJoB6%2ByXPXwJMl6aHKYxsgDuCuG0C%2BL%2FQBEMwsvu3vwY6pgED6uxGDV%2B%2BldpPIQ9LBLtV95n%2F51Ia1t0DfMXycetFFJ4wr%2FyIrgVNdSp9wX7YeABIwfAJL%2BI%2BR8RXhcuAFpe5rW%2FBwyzZvCFQBZJv2BLm2jR3rmYrwPqq1ppxkwyEIEhPBRJP%2BQsM3jg1RL6cNrL9KEmYxGtc09GWHqOhbITywlFOp8yUA73yKJ10FnsEzHOyk3BFr1x66KQEpJVNT6iCweYk3ONP&X-Amz-Signature=83c51d905e6f25148e746eec8f865a25bbede64d357a7c1ad0ecdc5c22d4b083&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
