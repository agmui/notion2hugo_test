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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZUU7IER%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHjUAl%2BLUx0IlOF%2B%2BKgVqcXfS%2By7Cpsgbs8Iyh55kLgIgabSRR%2FQiUBwmDIwBvNdEr%2B%2For3pBtv2kqYamlzTgl2MqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGR2REQku3TQ%2F%2Fg%2F9yrcA1gIiiTvcaE94l7zYhXpVumQktMQyONUwmVes3kzuSRAdKPP2NskuJfeX9qmT5HeN%2FHTv6XAdfhFa8xVkfsK0ps8Kk3pw%2BotJzErXaFB64%2FiZcKm58WfuyasGmPNfFLcd2e5ioDMUIiPQoR%2FuIRc%2FS0WvjxbyZqj7f8%2B%2BFCk0YMqN7pmkLkYxGkIZ8CDT6FR%2BHSsLm9oYHDoXXpAO8ZMSNShMDHc4%2BtukR7Th5hUOMbDHTkknFcWOo6rPoblNfRK2aMmhOrl%2B55Rme2Ka4rTT8opTrzFsiiP%2FCUjNGNKygdvnUOO6Woc55BH13xsMNKBFjejg4U%2BCgWBtYPqvBAOxE7CQdfo3diCt13paGgFxFA%2Bxws8BJUYJTzNEXlFahb4lV6mZheJdKH2aPpfPwoBH2a0I9TwDMUP6oaiRpa41jR0TlGuUy4E1Izuk7UZYVNhSr788S7AtpSvY44FVUwoJAPLGViEfzBWv3UuPjYtA%2FNbhG%2B7xGmC13qDXb7gOF3gKkmEyzxvoyXPEnf5g2m29SZLR%2Fbo07O8GEnuw5qa5b7NFv4jeUWRGfozRZUqVzeAdu2ATkBOp5R%2F1ILC3LhqJsmVUTHqQTYQVSMphanV6VfnR5%2BjJ8WiYCFJZmSmMP6PtcEGOqUBBpFpJMy%2B1UCLQko23Jeapqwlp6v%2FYfhdrF6tt97eGlZRn9fdUUqL9XQvVd84SfzA2%2FWqZTA9bu1dC%2Bzaqp%2FT1iUrj1ZyjXLZ%2F%2BZKYVTb8D5dIrEJTM7zudfMm2KWFWHmw%2FC1t7D98huU0K5lP1z8oTN5CDskYOSzX8fwv5%2B6vEl7ozfimfR15yja03BNLHwwC6O8AbD9WjPaTFOuYcRFx2EJLvf%2F&X-Amz-Signature=c51383272063bb3cd58f766d331566e929a398b2081015bb3855257bd24465a3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZUU7IER%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAHjUAl%2BLUx0IlOF%2B%2BKgVqcXfS%2By7Cpsgbs8Iyh55kLgIgabSRR%2FQiUBwmDIwBvNdEr%2B%2For3pBtv2kqYamlzTgl2MqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGR2REQku3TQ%2F%2Fg%2F9yrcA1gIiiTvcaE94l7zYhXpVumQktMQyONUwmVes3kzuSRAdKPP2NskuJfeX9qmT5HeN%2FHTv6XAdfhFa8xVkfsK0ps8Kk3pw%2BotJzErXaFB64%2FiZcKm58WfuyasGmPNfFLcd2e5ioDMUIiPQoR%2FuIRc%2FS0WvjxbyZqj7f8%2B%2BFCk0YMqN7pmkLkYxGkIZ8CDT6FR%2BHSsLm9oYHDoXXpAO8ZMSNShMDHc4%2BtukR7Th5hUOMbDHTkknFcWOo6rPoblNfRK2aMmhOrl%2B55Rme2Ka4rTT8opTrzFsiiP%2FCUjNGNKygdvnUOO6Woc55BH13xsMNKBFjejg4U%2BCgWBtYPqvBAOxE7CQdfo3diCt13paGgFxFA%2Bxws8BJUYJTzNEXlFahb4lV6mZheJdKH2aPpfPwoBH2a0I9TwDMUP6oaiRpa41jR0TlGuUy4E1Izuk7UZYVNhSr788S7AtpSvY44FVUwoJAPLGViEfzBWv3UuPjYtA%2FNbhG%2B7xGmC13qDXb7gOF3gKkmEyzxvoyXPEnf5g2m29SZLR%2Fbo07O8GEnuw5qa5b7NFv4jeUWRGfozRZUqVzeAdu2ATkBOp5R%2F1ILC3LhqJsmVUTHqQTYQVSMphanV6VfnR5%2BjJ8WiYCFJZmSmMP6PtcEGOqUBBpFpJMy%2B1UCLQko23Jeapqwlp6v%2FYfhdrF6tt97eGlZRn9fdUUqL9XQvVd84SfzA2%2FWqZTA9bu1dC%2Bzaqp%2FT1iUrj1ZyjXLZ%2F%2BZKYVTb8D5dIrEJTM7zudfMm2KWFWHmw%2FC1t7D98huU0K5lP1z8oTN5CDskYOSzX8fwv5%2B6vEl7ozfimfR15yja03BNLHwwC6O8AbD9WjPaTFOuYcRFx2EJLvf%2F&X-Amz-Signature=a79b713086a754471d1f26a602167731696684d4307a7042075c1d8dd2c06e33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
