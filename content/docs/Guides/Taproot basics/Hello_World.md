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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PT7X3EC%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEZgBFI%2Ff8iFhX8Fl3IQ8mDFA4iID%2BjtTp7SajehAXPmAiEA9%2BqFpUW2r2Sw77uM6yoIy3sdfoeKKk8LYe7gp0xhD8kq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHZz14UxHvR%2F8i%2FxkircA8NcgBNJlHNlAuTHY9rUPPP5pNp2oVpWr0W2a6m34ehRMgYfyVM%2FEB8KsnZejOA9mIpJfHzX4yCZfb4B4%2FW3m09uyg62Ry2Bd7TtSRj2F1Q7xZapNYbE5qSNfYevE%2FXxTfYYTqir7l0%2BTk4ndy%2FhUhNA8f5nZctu787BkiRnZCWt88aUsRscsp4zhOP0tfHTLop8SLn1GoXmoW06BBHGN9%2FUoBY%2B7UzvKIiXnO0ZV9q%2BEzQtVe8JggIT6TsHefFzy1TkO%2FU%2FsCnaT66P5cBJ7PhPJfDPRBtoZpFnrEvx%2Bd93g6ses1xlbz1raMHM31k%2F%2BOP2vjSu2T6cez4Lk2KAdYmCWgtZrgD%2BXR5IzwGLtCeaHiTZyjVoqY8rkAy6%2F1pG8eebw3U9p6hRG6%2BL7x%2BdIMyE53baLsin3Rb55ivlQ3GhsIAIaodAIz4UWv%2BqXtRFoDgwYBye4E7kk1h%2F%2BOaHoeSYvMR32m8zZUNAUCJog2FqmFz0X%2BkL9FxwzRTcMx%2BrHBTuVetveKib1dah0XpOhlZPNPP1HAGUHKYlTPI5GJA7g9vAwoGi30JM%2FC8%2FxtznSvarlClM98rJAD6rb%2BL5TL0JtnCdIrXih9Qg09o7eCTzfhe7cPTK5H9%2FftzOMKGvy70GOqUBNfvF7S7zNmL3ciDeMBT9wlLIfA2U5EOvxtZMQo9rErHTi5J3z3An9IEWL8vjddzIhk9AD7KeLaDARnHF0YiGDLhUYZojorj6cziJTHj3O1ImdGe0KZB1V6Z3HdTJlrtYpuvTd6hFJlJWqKwdhdrlxnscgWvupI6BA%2BXxf9ZdbOSWQja0BSQtscK9NFog0Iexpr7RhyFzsbgOBCOVJQhy0897C%2BTl&X-Amz-Signature=ca1206ac8f4bb1df175a11fad1e7d63c6092768cc9b9c5537698afafcb677585&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PT7X3EC%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEZgBFI%2Ff8iFhX8Fl3IQ8mDFA4iID%2BjtTp7SajehAXPmAiEA9%2BqFpUW2r2Sw77uM6yoIy3sdfoeKKk8LYe7gp0xhD8kq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHZz14UxHvR%2F8i%2FxkircA8NcgBNJlHNlAuTHY9rUPPP5pNp2oVpWr0W2a6m34ehRMgYfyVM%2FEB8KsnZejOA9mIpJfHzX4yCZfb4B4%2FW3m09uyg62Ry2Bd7TtSRj2F1Q7xZapNYbE5qSNfYevE%2FXxTfYYTqir7l0%2BTk4ndy%2FhUhNA8f5nZctu787BkiRnZCWt88aUsRscsp4zhOP0tfHTLop8SLn1GoXmoW06BBHGN9%2FUoBY%2B7UzvKIiXnO0ZV9q%2BEzQtVe8JggIT6TsHefFzy1TkO%2FU%2FsCnaT66P5cBJ7PhPJfDPRBtoZpFnrEvx%2Bd93g6ses1xlbz1raMHM31k%2F%2BOP2vjSu2T6cez4Lk2KAdYmCWgtZrgD%2BXR5IzwGLtCeaHiTZyjVoqY8rkAy6%2F1pG8eebw3U9p6hRG6%2BL7x%2BdIMyE53baLsin3Rb55ivlQ3GhsIAIaodAIz4UWv%2BqXtRFoDgwYBye4E7kk1h%2F%2BOaHoeSYvMR32m8zZUNAUCJog2FqmFz0X%2BkL9FxwzRTcMx%2BrHBTuVetveKib1dah0XpOhlZPNPP1HAGUHKYlTPI5GJA7g9vAwoGi30JM%2FC8%2FxtznSvarlClM98rJAD6rb%2BL5TL0JtnCdIrXih9Qg09o7eCTzfhe7cPTK5H9%2FftzOMKGvy70GOqUBNfvF7S7zNmL3ciDeMBT9wlLIfA2U5EOvxtZMQo9rErHTi5J3z3An9IEWL8vjddzIhk9AD7KeLaDARnHF0YiGDLhUYZojorj6cziJTHj3O1ImdGe0KZB1V6Z3HdTJlrtYpuvTd6hFJlJWqKwdhdrlxnscgWvupI6BA%2BXxf9ZdbOSWQja0BSQtscK9NFog0Iexpr7RhyFzsbgOBCOVJQhy0897C%2BTl&X-Amz-Signature=9fc3b4c1ad807484cb50f63e6b3dbc63c09320cfb37418ed1b07caa287cda54d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
