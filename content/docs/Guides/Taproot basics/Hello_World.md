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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3ZMCL4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIAjfOr1DO0vj%2FKjKLKoic0OaJBati7PPf1qCniYxZF1jAiB%2BnAxiAeDw%2Fs57QvTg0oXpF1AY%2Bz6wrIVirsNqR8slCiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCwDUVzd6buFhHy4ZKtwDL07fe8lXV2E7ILRaXXu4BfI0AEzCHnYjO4LIyCT0tXtUa2Jge0fS26trj7pTkDxyGZFf0djGqA0OXjbSy6q7F97%2Fg5PBvf%2BoKBinswFvFdE0VPZGoLWXG636%2Fm9lPuveIMFXphkC6wmghXNck3f0JYjoEgFBurIxmFvv9b356ToR%2FnYjULDS%2FYKgQlT9gQbsbQZS0c97wosVXvov%2FsUcqFPtK99N3Ia7LsmUBSKyMvTyqOt6RRAspmxSfc3B3bsbYk%2FGA%2F3P%2FPYjlzYdtneSjoleAP%2F5QZezJ3ZSTfk9e8XiW8xBfpMH3BeVXOkpfLzHAwbEvLNH%2BNT1WX2ojJ88eGftPk88kzkCh2%2Fec%2FzwYsN9hMUkHR4rPCnD%2BRK81HuNC%2BviutqD5oUO%2BNu9g2W6xnORVmeYApmRaqlCjncSP29gDiGvDzv0AQclbKEPbWRs5tRhSSgSaHdK4RcxRObmoPkFhzCEQSWp6Gn2XB96boLnpy4uMnakAjzqfW0SEvyIdX%2B%2FZelG0jWzvnWLpKku%2B4zgZmfKviW8RM4qaFHQk1VkmYFoi8%2FEwszzrz8xTvfuSSqJKfjTEvBgMPdIeglu2qQ%2FjPyOfg6%2FePCOS%2B4zcBPivtZVlcmc74QfOTEw%2BoyNwQY6pgFO9QlpNvS0MKF0yifrJwaAPOT1CvWe42t6Oln%2FmwGMA56AZcho1qXVWWNXpvoD22UKCZq83HKIqrYzgmIXsK%2BQLt7NaM0OR2TJZbydDlm2sWp47Cu9Wg9JuDNNfRE4FwNDYVH0kXK7sSDPGNmaHss5pseJQ7fy2JBrlcGJ1h0NDr1LM75SQKEDQUyCuW7xyLmnacBKdNxsX%2FldMeol2NQjpq5QDs9k&X-Amz-Signature=2a40707665ce6b3ad0eb5eec38d703f8d03a7aeeffead414e93047662e699879&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3ZMCL4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIAjfOr1DO0vj%2FKjKLKoic0OaJBati7PPf1qCniYxZF1jAiB%2BnAxiAeDw%2Fs57QvTg0oXpF1AY%2Bz6wrIVirsNqR8slCiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCwDUVzd6buFhHy4ZKtwDL07fe8lXV2E7ILRaXXu4BfI0AEzCHnYjO4LIyCT0tXtUa2Jge0fS26trj7pTkDxyGZFf0djGqA0OXjbSy6q7F97%2Fg5PBvf%2BoKBinswFvFdE0VPZGoLWXG636%2Fm9lPuveIMFXphkC6wmghXNck3f0JYjoEgFBurIxmFvv9b356ToR%2FnYjULDS%2FYKgQlT9gQbsbQZS0c97wosVXvov%2FsUcqFPtK99N3Ia7LsmUBSKyMvTyqOt6RRAspmxSfc3B3bsbYk%2FGA%2F3P%2FPYjlzYdtneSjoleAP%2F5QZezJ3ZSTfk9e8XiW8xBfpMH3BeVXOkpfLzHAwbEvLNH%2BNT1WX2ojJ88eGftPk88kzkCh2%2Fec%2FzwYsN9hMUkHR4rPCnD%2BRK81HuNC%2BviutqD5oUO%2BNu9g2W6xnORVmeYApmRaqlCjncSP29gDiGvDzv0AQclbKEPbWRs5tRhSSgSaHdK4RcxRObmoPkFhzCEQSWp6Gn2XB96boLnpy4uMnakAjzqfW0SEvyIdX%2B%2FZelG0jWzvnWLpKku%2B4zgZmfKviW8RM4qaFHQk1VkmYFoi8%2FEwszzrz8xTvfuSSqJKfjTEvBgMPdIeglu2qQ%2FjPyOfg6%2FePCOS%2B4zcBPivtZVlcmc74QfOTEw%2BoyNwQY6pgFO9QlpNvS0MKF0yifrJwaAPOT1CvWe42t6Oln%2FmwGMA56AZcho1qXVWWNXpvoD22UKCZq83HKIqrYzgmIXsK%2BQLt7NaM0OR2TJZbydDlm2sWp47Cu9Wg9JuDNNfRE4FwNDYVH0kXK7sSDPGNmaHss5pseJQ7fy2JBrlcGJ1h0NDr1LM75SQKEDQUyCuW7xyLmnacBKdNxsX%2FldMeol2NQjpq5QDs9k&X-Amz-Signature=b82d6cd8470b105fb8d1e714459bbb2279384d07c5672189010b5a46904c49a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
