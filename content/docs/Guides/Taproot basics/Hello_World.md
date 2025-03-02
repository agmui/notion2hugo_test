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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSFSWXEE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBCKLHsjeyMJImPCw%2Fb%2Bs11D3YdyI6%2F5XmnFpJQjTRm%2FAiEA0G8XPjP3znXSiv0dNLbf6l511TgLa4WKGZZxwC6%2B8PEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1PS%2BzwomN834h1bSrcA8ja79g0U2OKAcD3wQm4W8Jwled4kOxlUlXE0gvbrMC9ur6LBd%2FQBuT%2BwxZIIbCNtIuqlMgnJXY7kCq8pWPRigJYkj%2FVcSrdIQq6IYmtr8JHKgtLmEBFM6Y2clBU7jz%2FcpewZvijDDh4UzqweYNLjr3g80iVOqexEuvehdp%2BepEYyLaTky5PuSVLWt19mAu%2BM80d11u53V3dPRFMJjZY65ldb8%2FDWEtpzyI3zy5DeEpPbtcQGl%2BVAr1jPAPQBYdyBXfIsQScXTBIcTMcfUP9bqQLUVizrXJ57zr0JTIL8xtahmYSXbWpSiMvVYeJH4KlpwQGbFH9NH8frtamRAD%2FqN8wdBN01AocYsEJ5h5NDo5CWO%2FiWoZN0tq0x4MKbQt%2Bmq75x3tchBvW3vJwJ9ZP9XRzhE77tPN3rKiztQYJs66MImMs7dArDO4%2Bvrpg8topYrPPJztwNBHgIUH%2FKEUhquRsJXGA0j0uf%2FfEEGyroZ4qCYMViSc0%2FI0oIYZPlxMSkCH9F0pCHRfzqjGQySDxuGBAATr4GLo7T2gcj%2F4SMG8V2L1OWFNVMbbArOItP3SFy6a6IHqSaZwycjfzIfxivxhR3s92fedSjBmqKxUISN8m5r4QuInq1UQMyz0MMNbXj74GOqUBMbKo8MYnpV4gWXgdtlaRBr3lbCFhkkBdXoHZMuo3nVqnj7icXE8A7wNiehHSSEwlQl4VicQGGvi%2FH0pn575kVr7WZCbFTe2DcIIFj9%2BqI0Qdnl6NIl%2Frv8YGN4kjUFkN%2F854JJhK6Uk4WV1EqNwsLpTPXVPNvTCn9AcAvA91Dtmm9iJsvOpAeAjUc2PUYcWu6N%2FeT0fD7dq8zK6Dvv4rW6U2Dytg&X-Amz-Signature=d042e010900e4ff30408ac77f6faa25ecbfb8278d2af7f7e49f55630ac2ca47a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSFSWXEE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBCKLHsjeyMJImPCw%2Fb%2Bs11D3YdyI6%2F5XmnFpJQjTRm%2FAiEA0G8XPjP3znXSiv0dNLbf6l511TgLa4WKGZZxwC6%2B8PEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1PS%2BzwomN834h1bSrcA8ja79g0U2OKAcD3wQm4W8Jwled4kOxlUlXE0gvbrMC9ur6LBd%2FQBuT%2BwxZIIbCNtIuqlMgnJXY7kCq8pWPRigJYkj%2FVcSrdIQq6IYmtr8JHKgtLmEBFM6Y2clBU7jz%2FcpewZvijDDh4UzqweYNLjr3g80iVOqexEuvehdp%2BepEYyLaTky5PuSVLWt19mAu%2BM80d11u53V3dPRFMJjZY65ldb8%2FDWEtpzyI3zy5DeEpPbtcQGl%2BVAr1jPAPQBYdyBXfIsQScXTBIcTMcfUP9bqQLUVizrXJ57zr0JTIL8xtahmYSXbWpSiMvVYeJH4KlpwQGbFH9NH8frtamRAD%2FqN8wdBN01AocYsEJ5h5NDo5CWO%2FiWoZN0tq0x4MKbQt%2Bmq75x3tchBvW3vJwJ9ZP9XRzhE77tPN3rKiztQYJs66MImMs7dArDO4%2Bvrpg8topYrPPJztwNBHgIUH%2FKEUhquRsJXGA0j0uf%2FfEEGyroZ4qCYMViSc0%2FI0oIYZPlxMSkCH9F0pCHRfzqjGQySDxuGBAATr4GLo7T2gcj%2F4SMG8V2L1OWFNVMbbArOItP3SFy6a6IHqSaZwycjfzIfxivxhR3s92fedSjBmqKxUISN8m5r4QuInq1UQMyz0MMNbXj74GOqUBMbKo8MYnpV4gWXgdtlaRBr3lbCFhkkBdXoHZMuo3nVqnj7icXE8A7wNiehHSSEwlQl4VicQGGvi%2FH0pn575kVr7WZCbFTe2DcIIFj9%2BqI0Qdnl6NIl%2Frv8YGN4kjUFkN%2F854JJhK6Uk4WV1EqNwsLpTPXVPNvTCn9AcAvA91Dtmm9iJsvOpAeAjUc2PUYcWu6N%2FeT0fD7dq8zK6Dvv4rW6U2Dytg&X-Amz-Signature=bfe132df2e22264b01d3bf646a33a44ed40e4e98f115adb89bea4fd9bbed5186&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
