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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3ZYUGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDmHcJ5K3Q2wGRn%2B7ljzQFPrE48g%2B1kVwz7oh97VkJ5cQIhAIFFpfwIfUaUiMPtECVnoVPey4UJqSFJH%2FHuTag7eZBaKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxheMnsGb7HgM8fon0q3APOvlf%2BhoKUD4MUzFJ%2FxP1dT0vtxgMmhJRogqPNEeOFELLZBgblFdEPpyb4Jduy6yVQIXRF5ySdrxou6Y3nFmk59imhekO0n2tQ3rgn3we4D0HD5JVzF3m2SA8Moa%2BvC5YzoD9%2F2NLpN9d02USIcOf1truwL3FMr%2By2ict0DTwUds7KaO6EdgtetlL3nrKyXpX5z2v8fb5Btc0w%2BV5IGoOqXMmxljJG%2BTX5L9Aos5fKM3n8cBzJjsOoSk1GRK9CKwqYrzZAEnr%2BOUJr6TQBQ95GTmA6CON%2BWRyRfGjNv5caGOuxwjmJQg4%2FhkezweLmL8Jrrp73Kbui7Z6lL84MPZVPQwAeApgQ%2FOzG8HHuy9HdauK769cpxUrsoy7Sw072OGmkK0TKuMpDdx9h%2Bm%2FckXXJLsKavmRn0goUWyo1nbaSwBeXRrcfXVLBU7wy3nqWZhRTpW6zFDyz8CwW7aXJMTKR%2FApM2JsZYScXOcoLClRMr1SCgL6y5sk3%2BK3IlDqB1SQaBCIYaP5RwogtAa8wBDpeY8HqEXJ21FZ5NnUMOpjE9LCyMbX3AWjpZjZW1UzzttSK5RLC0OyEB5DtSOhJjiDSFht0C66sshuyMmGO%2BHqClxVkjVbB6wNGmdPcrjCnxbzBBjqkAYlpy%2FiiwkF1m5bqasJxvxIka0uv9hmWbVqTQq0FzTWX3f%2B6fwG78ouyQgnk5TytqTks3MCDF7pHEPqoUgnNj%2BAOAeVy%2FzLCFy%2FfC%2BSrfO1MsftkP87xAj%2B1apj905%2BJDon38G4Gq6QueEG6m%2BYernRhToHouqR4cSdCowoMbC622bjckjXCxzIedveE49R0nciNqWntsO7hgXBNBeS1Czt1TDGP&X-Amz-Signature=3a9363876d3e965f853ef889781aaaf509d00adc9c3bfb124cae1505788079de&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3ZYUGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDmHcJ5K3Q2wGRn%2B7ljzQFPrE48g%2B1kVwz7oh97VkJ5cQIhAIFFpfwIfUaUiMPtECVnoVPey4UJqSFJH%2FHuTag7eZBaKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxheMnsGb7HgM8fon0q3APOvlf%2BhoKUD4MUzFJ%2FxP1dT0vtxgMmhJRogqPNEeOFELLZBgblFdEPpyb4Jduy6yVQIXRF5ySdrxou6Y3nFmk59imhekO0n2tQ3rgn3we4D0HD5JVzF3m2SA8Moa%2BvC5YzoD9%2F2NLpN9d02USIcOf1truwL3FMr%2By2ict0DTwUds7KaO6EdgtetlL3nrKyXpX5z2v8fb5Btc0w%2BV5IGoOqXMmxljJG%2BTX5L9Aos5fKM3n8cBzJjsOoSk1GRK9CKwqYrzZAEnr%2BOUJr6TQBQ95GTmA6CON%2BWRyRfGjNv5caGOuxwjmJQg4%2FhkezweLmL8Jrrp73Kbui7Z6lL84MPZVPQwAeApgQ%2FOzG8HHuy9HdauK769cpxUrsoy7Sw072OGmkK0TKuMpDdx9h%2Bm%2FckXXJLsKavmRn0goUWyo1nbaSwBeXRrcfXVLBU7wy3nqWZhRTpW6zFDyz8CwW7aXJMTKR%2FApM2JsZYScXOcoLClRMr1SCgL6y5sk3%2BK3IlDqB1SQaBCIYaP5RwogtAa8wBDpeY8HqEXJ21FZ5NnUMOpjE9LCyMbX3AWjpZjZW1UzzttSK5RLC0OyEB5DtSOhJjiDSFht0C66sshuyMmGO%2BHqClxVkjVbB6wNGmdPcrjCnxbzBBjqkAYlpy%2FiiwkF1m5bqasJxvxIka0uv9hmWbVqTQq0FzTWX3f%2B6fwG78ouyQgnk5TytqTks3MCDF7pHEPqoUgnNj%2BAOAeVy%2FzLCFy%2FfC%2BSrfO1MsftkP87xAj%2B1apj905%2BJDon38G4Gq6QueEG6m%2BYernRhToHouqR4cSdCowoMbC622bjckjXCxzIedveE49R0nciNqWntsO7hgXBNBeS1Czt1TDGP&X-Amz-Signature=321e161f3bde15a00e645c5b159b5290ce2dadcb30d73eeae73af2e384cf80a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
