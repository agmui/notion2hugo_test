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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5J23DCD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDBcQrh4Ficj9U7X49CX2ZGTjj7NbqbbBrvuZ0owNtf1wIgReBISqtU26bnxq0%2BwswJ1gPCT2ksQ2C4s5wkxh2ANx4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOnVUst90cTkPaXKYSrcA58EURu3g%2B8wm8pWhIQQkBQzaXTH%2BizUX8ILhBf%2BNPjdb5xEj4O5x2ywDieCICsGkKmu7n2pMIZXEwemQ0WCBUEEq3kcMuVYZW0n3Yq86Trr8e4S2YpImmR5M%2BwLfJ6jp1%2FgsAdju28Yo3mX%2FkzUKw3EhTZbyBiJnETu5xs57f0bA31qYm5J0ChlMhqG%2BNcRrM371XQU5oOS66smFVWKpc3SUuslyTxN8bJIStaV9xNlGXdX4LY7Bzq3F6ezcsRyFn72t6dr326RODc0HTyvxlMh%2Bz8gOA1BNfxstYHF8%2BOg7kuEXwy5d%2FMaB8tUuxTD7rAGfO2PnkrHlAstPtLf%2FdlXAEdHfvmwpp2E0E8USDpP0XAESjN%2BqYSEChdHNKxrEXiSMYDCAkZZmnEnz%2FbubE%2BeAIAVMDgEYsJFG35p4L5Re3ik5Z3jxnsxt57hPg%2FyQvZb4KHvmxBG71tESlDoOF2vBiEa3MLgM%2BskVQKsX2lpRRkRIRBEcnmTFkVekKTWvB0ORwdXuFTDF3iuT2vtqZRP2mO6w707H6q1NV8rKvOP5M6TsANuErC1Xg%2FcT9TSe2SOZQpYnHkYFrmskPA44tD52WmAhO6yIr4prozyZyGqRcmcKGXW8altV0%2BpMN62mb0GOqUBfFYJK9k4rpdbHShPrhtDnB7LpslbW2IOmrb2sDbEnAw81K1z3mL3lVNEFYtN29rwm58F%2FtJXg%2FfyNig3%2F7pEUWfUGgeUTKtGX3zeKRehbOf1AIp2ZuriuaXAt6ASlR1lUGzi%2Flk36h6hXHB%2FN%2B10zC3SAfBjf4vedySVnDyLFfs8fIg7ZA5TNJM0V2jaJF%2B98SrzBGVi1SWAFkz%2BN1y2s3Wr3RVN&X-Amz-Signature=e4a539c62eed815f174563b18daaf3f2b5d1081ef92ebe8844268b0332768a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5J23DCD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDBcQrh4Ficj9U7X49CX2ZGTjj7NbqbbBrvuZ0owNtf1wIgReBISqtU26bnxq0%2BwswJ1gPCT2ksQ2C4s5wkxh2ANx4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOnVUst90cTkPaXKYSrcA58EURu3g%2B8wm8pWhIQQkBQzaXTH%2BizUX8ILhBf%2BNPjdb5xEj4O5x2ywDieCICsGkKmu7n2pMIZXEwemQ0WCBUEEq3kcMuVYZW0n3Yq86Trr8e4S2YpImmR5M%2BwLfJ6jp1%2FgsAdju28Yo3mX%2FkzUKw3EhTZbyBiJnETu5xs57f0bA31qYm5J0ChlMhqG%2BNcRrM371XQU5oOS66smFVWKpc3SUuslyTxN8bJIStaV9xNlGXdX4LY7Bzq3F6ezcsRyFn72t6dr326RODc0HTyvxlMh%2Bz8gOA1BNfxstYHF8%2BOg7kuEXwy5d%2FMaB8tUuxTD7rAGfO2PnkrHlAstPtLf%2FdlXAEdHfvmwpp2E0E8USDpP0XAESjN%2BqYSEChdHNKxrEXiSMYDCAkZZmnEnz%2FbubE%2BeAIAVMDgEYsJFG35p4L5Re3ik5Z3jxnsxt57hPg%2FyQvZb4KHvmxBG71tESlDoOF2vBiEa3MLgM%2BskVQKsX2lpRRkRIRBEcnmTFkVekKTWvB0ORwdXuFTDF3iuT2vtqZRP2mO6w707H6q1NV8rKvOP5M6TsANuErC1Xg%2FcT9TSe2SOZQpYnHkYFrmskPA44tD52WmAhO6yIr4prozyZyGqRcmcKGXW8altV0%2BpMN62mb0GOqUBfFYJK9k4rpdbHShPrhtDnB7LpslbW2IOmrb2sDbEnAw81K1z3mL3lVNEFYtN29rwm58F%2FtJXg%2FfyNig3%2F7pEUWfUGgeUTKtGX3zeKRehbOf1AIp2ZuriuaXAt6ASlR1lUGzi%2Flk36h6hXHB%2FN%2B10zC3SAfBjf4vedySVnDyLFfs8fIg7ZA5TNJM0V2jaJF%2B98SrzBGVi1SWAFkz%2BN1y2s3Wr3RVN&X-Amz-Signature=d58d206b33c5b77f9f7b5b0944c5d879bc7dd98ab6aa84aadc6e4add6664349b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
