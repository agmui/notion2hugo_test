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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFN2RY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC3OFBYsc2NYrMBsTpMxOZByOShDiDDgyJ6degiU8wPlAIgXgJG0KvaYItn32XVrK5tS65wLcCy%2FytPlRm3fXY9yEUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOZnAYBnbxHvXN9S1CrcA%2BajH6CfIkBt6O0IC7%2FAEtBe%2BrmzEqfPlhC3po1nOQwgehhdFtXq1%2Bt24YykJCB9erxkOSBDrYhR4s%2Fwjt5o9vxkK%2FCBn9azhfUifTPO9era7XvQFA2uNWgo1R9d3eOVkS%2FDnwaUYnyPGVN15g9ruHHVI3iCrT3Ky3xB5jTxVzWFBU7neRjCtEmKHQ%2Ff3miarHCqF43nFqoiAGAlD02OS1%2BFeGQspcF6AazfETRmFlFZXVBsNmDguKSBAVBVPk7g1tcXxULsms8PMNsm55gSWWoF1JGa9keKqr%2BzabLngFsaX32YUvBeoFdaEepWxeJXtsl%2BYYenGZez%2BaLSC976GENLhB%2BYEKu8K4lzh56Y2GBWEnpy5N2stW2XZx8FI%2FvyXSDgEjBw%2FR3RSMeGrn7AlINVg9B24s6WJHcwucOvItAraDq6ub8cBvGq%2Fk0VhYXwZJp4FbA4%2Fvpd%2FkMwxcELgt%2FTgAXhPyT3wJXaQpPpBzjOzXp5AIADE18hC7uZbvTRE3FKkOGs%2FzUf5YI6ck5rmo5058W9nfBGIDfmgncIJqFGbQq2kws7o996B3LPDw3kMP%2BxN2742V2lyocSWDiMyGhAmk5w5jT7yPdnwuyjfMEQLXPsaqqFNvdpw%2FnBMIuIyb0GOqUB0udhD4xPQDZx%2FTIc8GvoZ9d0EoaxyJ%2BWKIsSAMqnIqeKpg1l%2Fo2LZg7diHf8JQDL6vaVvum%2FYpeiglfkoaR6CaHI5J0%2F7GzWmPOflrGjaDcvuaob1FpUm2DtdHVcwaUa2k0dYc2eT0XPbBJtX21f0P%2B1X1OSj8RRLa0iy2tp9ItRM7C%2FECe%2FncS2TsiTHf7gPAAfcyMpbug1wFdh%2F2YH%2Fk19BzhN&X-Amz-Signature=a75515140110d42d6f8032485248dc63a004254295e777889bd3552070d2b5db&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWFN2RY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC3OFBYsc2NYrMBsTpMxOZByOShDiDDgyJ6degiU8wPlAIgXgJG0KvaYItn32XVrK5tS65wLcCy%2FytPlRm3fXY9yEUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOZnAYBnbxHvXN9S1CrcA%2BajH6CfIkBt6O0IC7%2FAEtBe%2BrmzEqfPlhC3po1nOQwgehhdFtXq1%2Bt24YykJCB9erxkOSBDrYhR4s%2Fwjt5o9vxkK%2FCBn9azhfUifTPO9era7XvQFA2uNWgo1R9d3eOVkS%2FDnwaUYnyPGVN15g9ruHHVI3iCrT3Ky3xB5jTxVzWFBU7neRjCtEmKHQ%2Ff3miarHCqF43nFqoiAGAlD02OS1%2BFeGQspcF6AazfETRmFlFZXVBsNmDguKSBAVBVPk7g1tcXxULsms8PMNsm55gSWWoF1JGa9keKqr%2BzabLngFsaX32YUvBeoFdaEepWxeJXtsl%2BYYenGZez%2BaLSC976GENLhB%2BYEKu8K4lzh56Y2GBWEnpy5N2stW2XZx8FI%2FvyXSDgEjBw%2FR3RSMeGrn7AlINVg9B24s6WJHcwucOvItAraDq6ub8cBvGq%2Fk0VhYXwZJp4FbA4%2Fvpd%2FkMwxcELgt%2FTgAXhPyT3wJXaQpPpBzjOzXp5AIADE18hC7uZbvTRE3FKkOGs%2FzUf5YI6ck5rmo5058W9nfBGIDfmgncIJqFGbQq2kws7o996B3LPDw3kMP%2BxN2742V2lyocSWDiMyGhAmk5w5jT7yPdnwuyjfMEQLXPsaqqFNvdpw%2FnBMIuIyb0GOqUB0udhD4xPQDZx%2FTIc8GvoZ9d0EoaxyJ%2BWKIsSAMqnIqeKpg1l%2Fo2LZg7diHf8JQDL6vaVvum%2FYpeiglfkoaR6CaHI5J0%2F7GzWmPOflrGjaDcvuaob1FpUm2DtdHVcwaUa2k0dYc2eT0XPbBJtX21f0P%2B1X1OSj8RRLa0iy2tp9ItRM7C%2FECe%2FncS2TsiTHf7gPAAfcyMpbug1wFdh%2F2YH%2Fk19BzhN&X-Amz-Signature=5c13345c927be01c97c9e7209f1a89efcf2dc21fecc9158a33ada0a218336de9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
