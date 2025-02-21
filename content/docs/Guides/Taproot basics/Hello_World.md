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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFXHPS52%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG9dLDtQk7eWBsoEvD9nqjhBeK9bUeOKDCgX27q7nsoAiEA1Qi8vMUwJn0uqiGQ1fAyhf%2BwD2DbwcoQoTAMx8Q%2Bu4gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf3EwIa0svA6ClHsSrcAwFxGApSMiUvvy6WF6AIviXDrKmAvkoAP1yQxuVXSvErEcS2F3kZ6C2pnBb8XMqtmkPADzV82EtZh45UgvxvddG2fpib1lNZQJJOr1sdUeXpUvi67fZBBphQNPb8l52DXPMkH0nb7XDse0Yf3G%2BdZB2xZsA546Ag5refvjMFBcj0W%2FK85qqg%2Flu5YJOSIRtwrsE99MXSgzHm%2FlNt6UvTxP44bjFGj11dM9BtWzJzG72X%2Fh6vEIvWS%2BxYHYevQrL3jF4XxdqTlq4bN0bAyKc3y7uMKSHluyz0fLXlypYhJUZzfWjwxJaXnEUdl%2FtJRTsCAYbJS4JDw8eFyfIg9Y7hI4wkaZjFkbkEx%2B5A4A7Vc93Rc5luemNLQfxjatOQ%2FTUg0PyKgD%2FtZbTugaZeLDlBiF%2Be%2BJqIbIVVEMNQi%2BgrvtV2d43xRtM41UzcpYoEHVEQCu0WUuqOhbU5tP0RyWJyRHRkMrpkyEpTJVpPoOn5Tk8z8x5cZRV%2FMpU5xcP645JD6%2BL2S%2BZsZ%2BRhm0VcuJMPQPT2nffI10v2osRWcYbnpnmPVFxs8vShpoBc3SRud%2B93kFVE5UTBpicpBszXsU7knNUpLoO63WFz35ZWRcUYhyPwODeS0ngjGed%2F2h7cMMOH4L0GOqUBn%2F%2FVdGGdoNwC6unfFaDoQlORJac0IhODukmK2YE7nAvzk%2BgnvV%2BcImSwtiTRgTuFRUxUKzuuzMrMw1Q1i%2B0JCDqbG9SBlaqVcknltuELWxqFVCusZEU3y9SC9shzHFnpSnaO2ei5%2BebUAXWO4SIrVuDj5XhMF3D132tuJQ%2Fucb4vYcldCtgfbMikFLsCcHK3wREqiVLnuozSs70jRqXwOBIVFG9E&X-Amz-Signature=74133c2668e193d453ead1c3c34d4c03740c4c4f033ba5c3dd1f1f93b1855af7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFXHPS52%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG9dLDtQk7eWBsoEvD9nqjhBeK9bUeOKDCgX27q7nsoAiEA1Qi8vMUwJn0uqiGQ1fAyhf%2BwD2DbwcoQoTAMx8Q%2Bu4gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf3EwIa0svA6ClHsSrcAwFxGApSMiUvvy6WF6AIviXDrKmAvkoAP1yQxuVXSvErEcS2F3kZ6C2pnBb8XMqtmkPADzV82EtZh45UgvxvddG2fpib1lNZQJJOr1sdUeXpUvi67fZBBphQNPb8l52DXPMkH0nb7XDse0Yf3G%2BdZB2xZsA546Ag5refvjMFBcj0W%2FK85qqg%2Flu5YJOSIRtwrsE99MXSgzHm%2FlNt6UvTxP44bjFGj11dM9BtWzJzG72X%2Fh6vEIvWS%2BxYHYevQrL3jF4XxdqTlq4bN0bAyKc3y7uMKSHluyz0fLXlypYhJUZzfWjwxJaXnEUdl%2FtJRTsCAYbJS4JDw8eFyfIg9Y7hI4wkaZjFkbkEx%2B5A4A7Vc93Rc5luemNLQfxjatOQ%2FTUg0PyKgD%2FtZbTugaZeLDlBiF%2Be%2BJqIbIVVEMNQi%2BgrvtV2d43xRtM41UzcpYoEHVEQCu0WUuqOhbU5tP0RyWJyRHRkMrpkyEpTJVpPoOn5Tk8z8x5cZRV%2FMpU5xcP645JD6%2BL2S%2BZsZ%2BRhm0VcuJMPQPT2nffI10v2osRWcYbnpnmPVFxs8vShpoBc3SRud%2B93kFVE5UTBpicpBszXsU7knNUpLoO63WFz35ZWRcUYhyPwODeS0ngjGed%2F2h7cMMOH4L0GOqUBn%2F%2FVdGGdoNwC6unfFaDoQlORJac0IhODukmK2YE7nAvzk%2BgnvV%2BcImSwtiTRgTuFRUxUKzuuzMrMw1Q1i%2B0JCDqbG9SBlaqVcknltuELWxqFVCusZEU3y9SC9shzHFnpSnaO2ei5%2BebUAXWO4SIrVuDj5XhMF3D132tuJQ%2Fucb4vYcldCtgfbMikFLsCcHK3wREqiVLnuozSs70jRqXwOBIVFG9E&X-Amz-Signature=14d6d3392b1eb48f14f347d1fe5eed1aa58f44faac2468a6e9e1ed31d0a63c67&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
