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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLNYI3Q%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtwj%2BxEmTcOMpRm%2FQSTgKDFpbamEdgm601YFR3IWhX8AiEAqGUKgDtPQtUAISWtdaVz8TBOzZo2KxSaoK9fwjNC6%2FgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAT0Zj%2BjZyAv6Ih5PCrcA%2FRD6MaLujqOIf6P40%2BLidSRT1alUl55P7DKmvrLHZ0JsxOo%2FTpPzfVtC8ro96tghOvZRrX5iIngmiac3Ki5elDBxgBD%2B6ETUI323YkqerMFmi7lOnFd%2BouWTQ1v8e5fq%2BQkvT6%2FGeY70I69HoYq4kvlQyi5eo%2F23PjYwtLT18%2BK9ZnyAUHLsLmQFRpENPn3irTzxglyHqhiIT8ymVgR3i2jo9ioitCTOgrSbPSjaiyyRS6Ym%2B2JQRtXOC7NFLo0EnS1oaJwn2LZOfov9MEHqPOkfQR5STJL2ev0bLfkEyzbp%2BXD%2BSmdE2YUZjFG26FlEvDBJ3f0W3UkFmgHtmNgHSZrvpMOmMf6IoNz0fsiuA7nV%2F97UVLOqgMn%2BGq%2BdO6NAhjarYGtVoFnojBzSE1RmiWpubMi5Dp9NIh3nuYKcajFpC2zYc71qX5yU43OAhF3VTjE6h305e5Rh%2Fz4id1eDn7MbV%2Fjo%2Be6BvoEWkH9xUGH%2BdUqzxhKQP7RcyEOb8hFPlFkDVNovtLChTgWve4laqSPvAW5%2FzkqQ7tL9HurmQryz1z9FRG5efa1HcDSkVLIcP3eqMZgdmFG5VIxtUa9V%2FWkg7hteR4weuIafn3z7DwUMuh94%2FyLrYzqJzdzMIeD4r0GOqUBVeQX3K8OoievKvp07h%2FaZ0LLLyZmDe85FHiuFd3toD98FLkGGoPZILeAuuWruR6S%2B%2FNeWDY%2FzJ2gmmqQV1VoEbyPv0vU4X0Y2lFDqnztxea%2FH9Mf27B3fvvI8gQNjoOYWKyxX%2B6XyP8d4qeIBTkFdMMRdEoBWXHJQR8XJRdOKdQxnczfC6NF3avTZMMHFuI6I7KAiU7Qq7CYTW%2BlnU1bWHB7z5SR&X-Amz-Signature=0e9b1a37b5a7f4c09529ac2387b0353fa469124111910c26603727344d52dd88&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLNYI3Q%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtwj%2BxEmTcOMpRm%2FQSTgKDFpbamEdgm601YFR3IWhX8AiEAqGUKgDtPQtUAISWtdaVz8TBOzZo2KxSaoK9fwjNC6%2FgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAT0Zj%2BjZyAv6Ih5PCrcA%2FRD6MaLujqOIf6P40%2BLidSRT1alUl55P7DKmvrLHZ0JsxOo%2FTpPzfVtC8ro96tghOvZRrX5iIngmiac3Ki5elDBxgBD%2B6ETUI323YkqerMFmi7lOnFd%2BouWTQ1v8e5fq%2BQkvT6%2FGeY70I69HoYq4kvlQyi5eo%2F23PjYwtLT18%2BK9ZnyAUHLsLmQFRpENPn3irTzxglyHqhiIT8ymVgR3i2jo9ioitCTOgrSbPSjaiyyRS6Ym%2B2JQRtXOC7NFLo0EnS1oaJwn2LZOfov9MEHqPOkfQR5STJL2ev0bLfkEyzbp%2BXD%2BSmdE2YUZjFG26FlEvDBJ3f0W3UkFmgHtmNgHSZrvpMOmMf6IoNz0fsiuA7nV%2F97UVLOqgMn%2BGq%2BdO6NAhjarYGtVoFnojBzSE1RmiWpubMi5Dp9NIh3nuYKcajFpC2zYc71qX5yU43OAhF3VTjE6h305e5Rh%2Fz4id1eDn7MbV%2Fjo%2Be6BvoEWkH9xUGH%2BdUqzxhKQP7RcyEOb8hFPlFkDVNovtLChTgWve4laqSPvAW5%2FzkqQ7tL9HurmQryz1z9FRG5efa1HcDSkVLIcP3eqMZgdmFG5VIxtUa9V%2FWkg7hteR4weuIafn3z7DwUMuh94%2FyLrYzqJzdzMIeD4r0GOqUBVeQX3K8OoievKvp07h%2FaZ0LLLyZmDe85FHiuFd3toD98FLkGGoPZILeAuuWruR6S%2B%2FNeWDY%2FzJ2gmmqQV1VoEbyPv0vU4X0Y2lFDqnztxea%2FH9Mf27B3fvvI8gQNjoOYWKyxX%2B6XyP8d4qeIBTkFdMMRdEoBWXHJQR8XJRdOKdQxnczfC6NF3avTZMMHFuI6I7KAiU7Qq7CYTW%2BlnU1bWHB7z5SR&X-Amz-Signature=0e49f76d9245d8c521ca6724bbacb9420aa56121c2b398e88d170078a00b8f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
