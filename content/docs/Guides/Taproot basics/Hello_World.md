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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3J2WPNT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTLiiJDiDM%2Bi1ExLEv9LPxcpW3PTMImOHydRJeVZ1T%2BAIhAJI607MUGeqib0BEJ8EdrKXpEsjUHCHv4VtOmIyoRpImKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztiNuTPUTLyWU4Arcq3APUqAro%2FHeqbhB9KGrgL8nmjB051i6hilwgciHJTZbsuX%2BA035Y07%2B6fYdiyGynujmMPvzm1kkN5hwYU7bMjJV%2Bz35RNgmJKyCdykOgKSulP%2BIRze9A8BsuHLki8kE3nIEqZokxIPPWcxlzZOxvaeD%2F4gXyDhxk9cBfmW6NAarvq0ieuL7MD3QfXdADKUmnG4KD2UwS%2FZ0IUTgRfJaoACIx5M0WHjjPHP%2BlqBlhigKvTF1JJ8thXBcX15N3RCczpfXjLVG78F4JlbgdwBupNrj3tj0yLI0FY5xKXeVW16wuYzbwf2sXZJpR%2BJvqOeXgEyvfxGDyxFXbx4nKMO8LrGvaQn42txtI6ifhgsVzqb1AnwGZ8oYurTmcCUdE7%2B6Ddb4f0vxoA8d3pkvMzDjF1lmdpy47Uq7kQ0tmv4ZGqqj1fMRuKh5PJjH5wgw5IRHpiR4fg5R49aLqnDOb%2ByKdbGYRh6dfon9a%2BPzBlO8A%2FrTvCRyfm3%2BFGhJFwI3L8aOFKEwhOZgr%2FT9y25k9Qoqxw1L20Umj6TkNf6NS3%2FVXifZ0PS6FaE8%2Fca67o62nmfaBYSoMaXsczSVu%2Fecn86XpjUIXw%2FHULkfUAYMyKPhTbw8YFWtrN0aXSuDHpjjrtDDPsuHBBjqkAb1jjecEcQxQieUjZjUlSklqxzIT8EpXd3BrbmFkLGtwulTkRSylqEAPcfSZWbPGlryFdWnAqckhCb5rW%2B2Ie5j34s6bZ0%2BvmCPA%2FuAhqQp4b2lsQOjrrZMx0N5%2FurWL%2BPAIBo4yZzXntKXPkPk1a18VTxaiD%2FPj010YpC2z8RyS14MuY0lFAOeJNjWgloJgY7bCfklTejT%2BCv3N4IDtmzVXgXeJ&X-Amz-Signature=94ab859d98b1fbb28d95e56789c38833f7a46be6c79bd16e8b7d28826914283a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3J2WPNT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTLiiJDiDM%2Bi1ExLEv9LPxcpW3PTMImOHydRJeVZ1T%2BAIhAJI607MUGeqib0BEJ8EdrKXpEsjUHCHv4VtOmIyoRpImKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztiNuTPUTLyWU4Arcq3APUqAro%2FHeqbhB9KGrgL8nmjB051i6hilwgciHJTZbsuX%2BA035Y07%2B6fYdiyGynujmMPvzm1kkN5hwYU7bMjJV%2Bz35RNgmJKyCdykOgKSulP%2BIRze9A8BsuHLki8kE3nIEqZokxIPPWcxlzZOxvaeD%2F4gXyDhxk9cBfmW6NAarvq0ieuL7MD3QfXdADKUmnG4KD2UwS%2FZ0IUTgRfJaoACIx5M0WHjjPHP%2BlqBlhigKvTF1JJ8thXBcX15N3RCczpfXjLVG78F4JlbgdwBupNrj3tj0yLI0FY5xKXeVW16wuYzbwf2sXZJpR%2BJvqOeXgEyvfxGDyxFXbx4nKMO8LrGvaQn42txtI6ifhgsVzqb1AnwGZ8oYurTmcCUdE7%2B6Ddb4f0vxoA8d3pkvMzDjF1lmdpy47Uq7kQ0tmv4ZGqqj1fMRuKh5PJjH5wgw5IRHpiR4fg5R49aLqnDOb%2ByKdbGYRh6dfon9a%2BPzBlO8A%2FrTvCRyfm3%2BFGhJFwI3L8aOFKEwhOZgr%2FT9y25k9Qoqxw1L20Umj6TkNf6NS3%2FVXifZ0PS6FaE8%2Fca67o62nmfaBYSoMaXsczSVu%2Fecn86XpjUIXw%2FHULkfUAYMyKPhTbw8YFWtrN0aXSuDHpjjrtDDPsuHBBjqkAb1jjecEcQxQieUjZjUlSklqxzIT8EpXd3BrbmFkLGtwulTkRSylqEAPcfSZWbPGlryFdWnAqckhCb5rW%2B2Ie5j34s6bZ0%2BvmCPA%2FuAhqQp4b2lsQOjrrZMx0N5%2FurWL%2BPAIBo4yZzXntKXPkPk1a18VTxaiD%2FPj010YpC2z8RyS14MuY0lFAOeJNjWgloJgY7bCfklTejT%2BCv3N4IDtmzVXgXeJ&X-Amz-Signature=c01a1f09f2b586c4bbc347ac5bb97231f930a26a84f03f704ac16ac194f46705&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
