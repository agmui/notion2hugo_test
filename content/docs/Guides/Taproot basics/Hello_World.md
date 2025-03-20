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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WADC3F6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAj85UtJx%2BLm0e39XQSvB36LljX2rKuakx12s5If66gDAiEAsGF2S1dNU1kOyBobRjcu5ENY8tqoRlaGIiPuNkdQTgEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFbXLLwTXDQy0wtRpSrcA1Z5Dp6E9mTC2Wriyu5oKTnbqnokeRY9ZQq1%2B78YXmwNWqFRJ2yTyIW5QB2V%2FD%2BkTlNAvk%2F80i3Ne1lkR9ndUw4tSkqGsRUq38QdBpAHXMx1LuhbqUK5PIJOP%2FZIsDrkCs3KkNjkh06qAnAO0S7Q88XOoZIECZFZe5vAj4vh7aT3mRvQYFvaFS%2FuUTbsQbok%2B00lmIO9v2a7%2FUr07yNi5t%2BnndohkNRTVrAg3xYqsQ0y%2FP6YmU8tR50m1iD3VRZsRRm8vILKoUCeZqz7nuS7BGBG%2FN2qMr8ZmA8Vyy48sELZq3XfY0Bel0qw0vFuhWLx2OzmmpPc8Ytm%2BEZ2trYEG93iOwOd9io63K87R%2FqjlZT3qMpa6tdAyfPmTra4oK%2BxGBZ7EFw9h9%2BqUe2C3gh4yMd0jaqKZAh86iJtn7vI48VjUjaKrFEONXjdlYu1ZoIi9r0AyOngszi6wXtcFTCcFbLSAe5pMRwfKTSMCTpDho2rWidsJmf4vePPiYDWYyO7Z4l0ePsLvmhPF9liEJiichpHL7mb6pXpEYi479mWKIgQGX3RBK5NUAuWAWu%2B18WH1w2FpFEerQWGzzrnQ6dwcCzmJMZa83jKYdI0Cyh1%2FuiEk0JgaAEes%2BGfOw5pMLfZ7L4GOqUBvMq2DFZk76UcedP0xTmRUdGx3g3W5jFw5NsuHmbs%2F95SrmXG6S6CB7NUoJH3fUBf9tKKAbh3hDJgcalvwEvjqJHlblDhrne7m0yYSSoPozzZSZdKl17wKBDjFiIPLr6TuU1rufphBcobRBcBsU39kIgiu0duCi3ljWEwCaxCeuQHef9ukPSAL0Dejdgv63CBExwmkUbfObeQsR64yF4kqCGerl1h&X-Amz-Signature=e5df74961ad61addd3afcd8a664a2bb0ef54f6e215fb4748bd73845fc036040a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WADC3F6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAj85UtJx%2BLm0e39XQSvB36LljX2rKuakx12s5If66gDAiEAsGF2S1dNU1kOyBobRjcu5ENY8tqoRlaGIiPuNkdQTgEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFbXLLwTXDQy0wtRpSrcA1Z5Dp6E9mTC2Wriyu5oKTnbqnokeRY9ZQq1%2B78YXmwNWqFRJ2yTyIW5QB2V%2FD%2BkTlNAvk%2F80i3Ne1lkR9ndUw4tSkqGsRUq38QdBpAHXMx1LuhbqUK5PIJOP%2FZIsDrkCs3KkNjkh06qAnAO0S7Q88XOoZIECZFZe5vAj4vh7aT3mRvQYFvaFS%2FuUTbsQbok%2B00lmIO9v2a7%2FUr07yNi5t%2BnndohkNRTVrAg3xYqsQ0y%2FP6YmU8tR50m1iD3VRZsRRm8vILKoUCeZqz7nuS7BGBG%2FN2qMr8ZmA8Vyy48sELZq3XfY0Bel0qw0vFuhWLx2OzmmpPc8Ytm%2BEZ2trYEG93iOwOd9io63K87R%2FqjlZT3qMpa6tdAyfPmTra4oK%2BxGBZ7EFw9h9%2BqUe2C3gh4yMd0jaqKZAh86iJtn7vI48VjUjaKrFEONXjdlYu1ZoIi9r0AyOngszi6wXtcFTCcFbLSAe5pMRwfKTSMCTpDho2rWidsJmf4vePPiYDWYyO7Z4l0ePsLvmhPF9liEJiichpHL7mb6pXpEYi479mWKIgQGX3RBK5NUAuWAWu%2B18WH1w2FpFEerQWGzzrnQ6dwcCzmJMZa83jKYdI0Cyh1%2FuiEk0JgaAEes%2BGfOw5pMLfZ7L4GOqUBvMq2DFZk76UcedP0xTmRUdGx3g3W5jFw5NsuHmbs%2F95SrmXG6S6CB7NUoJH3fUBf9tKKAbh3hDJgcalvwEvjqJHlblDhrne7m0yYSSoPozzZSZdKl17wKBDjFiIPLr6TuU1rufphBcobRBcBsU39kIgiu0duCi3ljWEwCaxCeuQHef9ukPSAL0Dejdgv63CBExwmkUbfObeQsR64yF4kqCGerl1h&X-Amz-Signature=32fd0ea2aef3207aeebaa9ad4147af4452868a47ea78ba976b40ab9cd6094435&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
