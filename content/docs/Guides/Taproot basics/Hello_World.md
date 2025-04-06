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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSGQZMZ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN1sOA4A2VAKc1jaeHUODo1h4CfSoi0%2Flz3vAPyKM%2FuAiA05ao6QlSzYkWLNoftcvdCqjIlH5y1Lsz7nz6R7BFHFir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOokiOwcBDcBIa%2BWdKtwDF%2BfGvUSr4ft2cTtLpXUoXEoFRa9ovIY1z2wuW3XzTSepf%2FlynXg642nTLgFEzmFciTB%2Fz5wqRhrMWHEteUNFsfZdgwKivYRGj7UhIzp6xKDeK9ixk2iEoDK4frBsTnfjEIAy5g0pBw2qTVNYKHpS0pCbZPu0Q1dGD0zUFpZSzlfMN2xfUMs4VSA0BTh6cjbq2fHA4nS0KcFW62hLqUdaT7xf3jp4rqbMe4jB1zI%2BJYDINOpdjgFc57jHaJdy9lJzr9LejrXuzIHbG91N%2BwuIJM86uAqrFgVSxkK2%2BteqRqpF5SG%2F1fKKQUR1iCZAoND3dEewn%2FTOY120CtOJE9T%2BtYHKFDrEc2JfDHjJv8Adhb2xiVXCRycL8x2OAHGEjSWhkDOqBg4TXDFzrWmpakTSi1g6bIYLcgFqWdpDq708l5AYroaln6TT%2BvT3Qh04%2B1bIIn1nekjE6lLOYWgbaFaKgvbYkRRlKCnPJVCqGIpUOv%2BtJ%2BKsBdaoo%2BeHSqYlML4LXKuGVPwD%2BWdTq3Mjz1CGsSoQtdVGh%2BrV7%2Bf9smWt%2FPSegYhBxjbr7vBkdAvi42GwGqUnpol50Ro%2Fp8Re57DcQ7eqAdTKfxhH0FdyLAm8FOC2sXVS2FgblUOj0bEwgp7LvwY6pgFH3Tt33RTRl42D5KPhFxFYY39HPxfQYC6DfheAXbGtMD%2FJ1bdRsrVqv%2FCBvT%2BApCLpDmT4zJiLjjHy6Uba85Zo9P5ptIa%2BgESFyFJxL1AHJusOLY4EgH2pmRfTZku4y8inNtQV32%2Bopb7E%2BdgHOa0KF7t13yL2A1xwelutFMdzxPXZCqiCj3LWVFtvUQZ3sHBGzU2u90d0ND61kOyS5rGSb5S8YEET&X-Amz-Signature=158e7dbe43f82c2c06d0178e6806c6722f5df1d02172be6e0692b2a2cf6c7dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSGQZMZ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN1sOA4A2VAKc1jaeHUODo1h4CfSoi0%2Flz3vAPyKM%2FuAiA05ao6QlSzYkWLNoftcvdCqjIlH5y1Lsz7nz6R7BFHFir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOokiOwcBDcBIa%2BWdKtwDF%2BfGvUSr4ft2cTtLpXUoXEoFRa9ovIY1z2wuW3XzTSepf%2FlynXg642nTLgFEzmFciTB%2Fz5wqRhrMWHEteUNFsfZdgwKivYRGj7UhIzp6xKDeK9ixk2iEoDK4frBsTnfjEIAy5g0pBw2qTVNYKHpS0pCbZPu0Q1dGD0zUFpZSzlfMN2xfUMs4VSA0BTh6cjbq2fHA4nS0KcFW62hLqUdaT7xf3jp4rqbMe4jB1zI%2BJYDINOpdjgFc57jHaJdy9lJzr9LejrXuzIHbG91N%2BwuIJM86uAqrFgVSxkK2%2BteqRqpF5SG%2F1fKKQUR1iCZAoND3dEewn%2FTOY120CtOJE9T%2BtYHKFDrEc2JfDHjJv8Adhb2xiVXCRycL8x2OAHGEjSWhkDOqBg4TXDFzrWmpakTSi1g6bIYLcgFqWdpDq708l5AYroaln6TT%2BvT3Qh04%2B1bIIn1nekjE6lLOYWgbaFaKgvbYkRRlKCnPJVCqGIpUOv%2BtJ%2BKsBdaoo%2BeHSqYlML4LXKuGVPwD%2BWdTq3Mjz1CGsSoQtdVGh%2BrV7%2Bf9smWt%2FPSegYhBxjbr7vBkdAvi42GwGqUnpol50Ro%2Fp8Re57DcQ7eqAdTKfxhH0FdyLAm8FOC2sXVS2FgblUOj0bEwgp7LvwY6pgFH3Tt33RTRl42D5KPhFxFYY39HPxfQYC6DfheAXbGtMD%2FJ1bdRsrVqv%2FCBvT%2BApCLpDmT4zJiLjjHy6Uba85Zo9P5ptIa%2BgESFyFJxL1AHJusOLY4EgH2pmRfTZku4y8inNtQV32%2Bopb7E%2BdgHOa0KF7t13yL2A1xwelutFMdzxPXZCqiCj3LWVFtvUQZ3sHBGzU2u90d0ND61kOyS5rGSb5S8YEET&X-Amz-Signature=d585e4e6073da4a318a8e974b482f4ad70073bc46de22fab2c932d47d79cfaba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
