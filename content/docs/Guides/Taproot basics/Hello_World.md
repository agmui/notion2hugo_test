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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6C5SV6%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmf4lYm97e9PYxvBR0xVM8yvATGFneL6bjuw%2FT%2FZUJqAiBRB49nXACzfau5XTtVEwEPNtblto%2BV61YeItXK%2FCX8Sir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM9vRA9369jQF3Xk5qKtwDZmp3SzihTpGufmr4sbFuTh6hRBQU0zDpoPSiC1vijZYJlKijQgKTZy0WTYj%2FPQeSo0auxaKm4NOo9cFyIJsSsBLvTLAzaIc%2BdmUBMlNAQ9VflxQTEG1BOjFNklovXaZ7PxbV1emncsPceoSDQ0NcJCpOVeJTtzJ9PMR%2BXi5KKqflsjMgnVGDBMipMWO%2FTOKpo281VcGcSQZcSsJomamg6NjLbccdigQB2eIxL8p36uJuA7BP0yCpHFWf6tsNZslQUZ7pYKWEsONF%2B4kClwfXEgwIYnwSC6Z5gPcxYKNB9HdY%2Bv%2BHT4c0h6mAfdKLjiObHR8d1Yv7gXhkYLbIyu5%2FOzShBG1MmP%2FzU%2Btxyv7BjeuIKbAqs1yMJIg1zPZkXpWnbjSfIvK9X%2FsY9%2FgL94LITzOzkWvFUriGSaPnMtJfwVY8IQaSHzovo1EUQYySVXjwE%2B7ObBZpTW3IodIjMZ0RQes%2Fk0pq0IOQ4TGn9FPToZfblrYKS1ZropbytzxxnzHaWdK9o%2BGL8mny2FrKqxn9cH4reVTK0CTe6sQly%2BJhwPx9rEePamQINDgt9nTLL6WxqFo2bBpps6Sx43xu12KKUlEleHgYcRoStbKthlaSr2L%2Fwb%2BjrFhzk0dzTM8w6YHYvgY6pgHuSJmqkRn6j7PHDeYF7%2FuYW18w2jjojPJdY9fYvSJyQ6y83uIgFnsTJIKLNMGhXbSppiz9qOxxbqpHw%2FKofeHPvVjrWQ%2B74BDHM5TJlhiIZoAAY5GWDGSXAuBk61iUcqXbgrNqKGQF9SCF7pr%2B2Td2A0faIOLxadlIghzGJy7BEqIFZ%2BfEjUHwEDW2xeLTDQeqNfKfxwjFqoB%2B%2FMon1nnddDS96mYh&X-Amz-Signature=c9a5ef66a5726ea330aa9070e7001581052311037982660a18a19c338381275a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6C5SV6%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmf4lYm97e9PYxvBR0xVM8yvATGFneL6bjuw%2FT%2FZUJqAiBRB49nXACzfau5XTtVEwEPNtblto%2BV61YeItXK%2FCX8Sir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM9vRA9369jQF3Xk5qKtwDZmp3SzihTpGufmr4sbFuTh6hRBQU0zDpoPSiC1vijZYJlKijQgKTZy0WTYj%2FPQeSo0auxaKm4NOo9cFyIJsSsBLvTLAzaIc%2BdmUBMlNAQ9VflxQTEG1BOjFNklovXaZ7PxbV1emncsPceoSDQ0NcJCpOVeJTtzJ9PMR%2BXi5KKqflsjMgnVGDBMipMWO%2FTOKpo281VcGcSQZcSsJomamg6NjLbccdigQB2eIxL8p36uJuA7BP0yCpHFWf6tsNZslQUZ7pYKWEsONF%2B4kClwfXEgwIYnwSC6Z5gPcxYKNB9HdY%2Bv%2BHT4c0h6mAfdKLjiObHR8d1Yv7gXhkYLbIyu5%2FOzShBG1MmP%2FzU%2Btxyv7BjeuIKbAqs1yMJIg1zPZkXpWnbjSfIvK9X%2FsY9%2FgL94LITzOzkWvFUriGSaPnMtJfwVY8IQaSHzovo1EUQYySVXjwE%2B7ObBZpTW3IodIjMZ0RQes%2Fk0pq0IOQ4TGn9FPToZfblrYKS1ZropbytzxxnzHaWdK9o%2BGL8mny2FrKqxn9cH4reVTK0CTe6sQly%2BJhwPx9rEePamQINDgt9nTLL6WxqFo2bBpps6Sx43xu12KKUlEleHgYcRoStbKthlaSr2L%2Fwb%2BjrFhzk0dzTM8w6YHYvgY6pgHuSJmqkRn6j7PHDeYF7%2FuYW18w2jjojPJdY9fYvSJyQ6y83uIgFnsTJIKLNMGhXbSppiz9qOxxbqpHw%2FKofeHPvVjrWQ%2B74BDHM5TJlhiIZoAAY5GWDGSXAuBk61iUcqXbgrNqKGQF9SCF7pr%2B2Td2A0faIOLxadlIghzGJy7BEqIFZ%2BfEjUHwEDW2xeLTDQeqNfKfxwjFqoB%2B%2FMon1nnddDS96mYh&X-Amz-Signature=fff273edd6e5c793027a20f0cca27f30b5a40b942a28fbc9702e1ed949691249&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
