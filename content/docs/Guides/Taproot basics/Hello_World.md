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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XACNSEJS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDcwLXPcoigGAcvLiUsNyaqBeizQmaVC09fgk92gsKvBgIhAN%2FD8jeHEfOPNCiadXrva0aCAIZqSeKISyWt7UTeKPAhKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9O2ygpapKlkF0%2FAoq3APvz8v2D4lRvF3Tpv8yJTvYMnZRP6XN2iH%2B4Ya1MZG1%2FIaCNsRgXanbZloALDmd1ebchP1tLhOq%2BnBARMn4kItSMgJXOX1OjGyCUXyiv3UOTmtmXyKtgyjZLM7PUYIB44v5uFMboLIr9UQSmdabMxLXVskD1eE%2FUAIPVW8FiisobxLRTBUeP9iWFZrEpp9PMrCE1i6IdsokvO%2FZCeEvjwAHBFZPw3GgS6s4DTHv8jlc%2FCeCyAqwuCtFheqWKM1e1LNGUCNoXTeejIZe8LhHBBWzVCPixtsbxhZFxUagl6KSfdxlUF%2Fy82v2HcmyfGeOuLXtQOcxKg%2BY8WkSfwjdJrXnh79bdmZPrDvCGcm9gYncNHGbxUuvKXCwAzRi7ehh%2BOGj79NIxatIIMNOgnpvAfTTfRvXwh4XuGZ4SzD%2BttgS4igFOASn8nw%2FZix5fcD06a72izjuGD535VRdjjY%2BsWItoqqVdIS0k56YBg4wZU09WfKuuP2Gaw6LfqbRFyXw0uABqDMHMoMJeT6%2Bp1EgLDGPgD7myyS%2F9AtjDmd1qc%2FE%2FaUWttglZEmP8EGtfE%2ByzwaZ%2FS4QOFDh7YWPxAJQ2l2ZU7cyvtPqSp2H%2FI7aGtKQOYgwAI2ObAC6zd5TXDC3wfjBBjqkAdlQ07Dc81%2BonbX6Cd1dOT%2FAweC6l7YK8m3Ov%2BEd92jEaR1VPRpXcHeSUlm6d%2FEtgeuqFHZ0twpFoUfSddQ1LqQ0e7F%2FPJqi3XE6ZGaDsBKVhsZDGxJMxZMfVXgd05ikshbzwsB3tICl5eHw4JqZSLJEOKp5frWXhwg%2FDw5giZQaT82OIIVa8KQnxf0%2Fvx%2FM710cdIgqJkMmzAFtdpXuFoWWFnwF&X-Amz-Signature=b26be07631ffca4ac890169de96acdc0bc5366b6754530a7dfbb1d201f331adb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XACNSEJS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDcwLXPcoigGAcvLiUsNyaqBeizQmaVC09fgk92gsKvBgIhAN%2FD8jeHEfOPNCiadXrva0aCAIZqSeKISyWt7UTeKPAhKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9O2ygpapKlkF0%2FAoq3APvz8v2D4lRvF3Tpv8yJTvYMnZRP6XN2iH%2B4Ya1MZG1%2FIaCNsRgXanbZloALDmd1ebchP1tLhOq%2BnBARMn4kItSMgJXOX1OjGyCUXyiv3UOTmtmXyKtgyjZLM7PUYIB44v5uFMboLIr9UQSmdabMxLXVskD1eE%2FUAIPVW8FiisobxLRTBUeP9iWFZrEpp9PMrCE1i6IdsokvO%2FZCeEvjwAHBFZPw3GgS6s4DTHv8jlc%2FCeCyAqwuCtFheqWKM1e1LNGUCNoXTeejIZe8LhHBBWzVCPixtsbxhZFxUagl6KSfdxlUF%2Fy82v2HcmyfGeOuLXtQOcxKg%2BY8WkSfwjdJrXnh79bdmZPrDvCGcm9gYncNHGbxUuvKXCwAzRi7ehh%2BOGj79NIxatIIMNOgnpvAfTTfRvXwh4XuGZ4SzD%2BttgS4igFOASn8nw%2FZix5fcD06a72izjuGD535VRdjjY%2BsWItoqqVdIS0k56YBg4wZU09WfKuuP2Gaw6LfqbRFyXw0uABqDMHMoMJeT6%2Bp1EgLDGPgD7myyS%2F9AtjDmd1qc%2FE%2FaUWttglZEmP8EGtfE%2ByzwaZ%2FS4QOFDh7YWPxAJQ2l2ZU7cyvtPqSp2H%2FI7aGtKQOYgwAI2ObAC6zd5TXDC3wfjBBjqkAdlQ07Dc81%2BonbX6Cd1dOT%2FAweC6l7YK8m3Ov%2BEd92jEaR1VPRpXcHeSUlm6d%2FEtgeuqFHZ0twpFoUfSddQ1LqQ0e7F%2FPJqi3XE6ZGaDsBKVhsZDGxJMxZMfVXgd05ikshbzwsB3tICl5eHw4JqZSLJEOKp5frWXhwg%2FDw5giZQaT82OIIVa8KQnxf0%2Fvx%2FM710cdIgqJkMmzAFtdpXuFoWWFnwF&X-Amz-Signature=48dc1d6abcd33d3acde0fc81a9c9ca7864220f9d2550eadbd297cbf070b94e59&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
