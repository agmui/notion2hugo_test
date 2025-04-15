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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOXMLXJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2H%2FGq1lKxnktneC%2Fa9CfKd5sv3di03JwHjbbGF9c0fAIgNUk%2F%2Fkjl0CxXMUKVxVNNoK9GPp904PF%2BGRx5sJToO08q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHHNMKzvCl%2FuUqA1aCrcAz%2Bv3bgZ4qQkLv26u%2F1mZyQ6AlL%2BHdh7E7Ldgkl4cmXcEqm4Z3uuXnw1zKk%2Bm4yPl%2FV3p1CyHYjOmV32MTJFw9ps94uuMLaHnB1ZETXbfYB9k5wgv4Pwr7UIzyybp5CuJfxMdLwtraOUbf%2BcH9lU4XpWHG3L9a97uZnEEHEDUHmbZSCGsYtxb%2BwclfWuDoXmwTydLVwwrD6anz9oBJTRWcfOOs0%2FfDsmhfFfEEqCYb%2BCr7u%2Fbe8ZOgujpaXVrvP%2B72TNinu3XSj162izjkUm9wxg4XkjsrFftyyEuORcfS9yPTiTD55pPjav%2F5aKnpa4m2bvimOlj%2B4R6zckkxuNjUUpCmIsJRMr%2FhvXqA3W7Pb1cfQMd8j0LMTPbwr2cG7n3hk%2BufQRwax070u0PdfJpzAo6%2FRlzBqQwFMZre4xxfrCoSuqppIljoVj2mXJ48HnNegq4uEX%2FEjGWDDD1dIvnXeZPNnUWOmUIDJ%2BqT45%2BJnwrkNUezkxxmdTng2K%2FuhOU3BYGshcjLrYRZeXTuxun0B8dbP4EL7x50uF84CUmrK7eqF%2B3ioDgdPlrFkr3MEXwkit9JpamC%2FNtePULAlr9KdkWwuFJfY9UCZFRV4dem2OY6Ud1CCNbnrYVO9%2BMObO%2BL8GOqUB%2FM3VX6JeQxFMnUtvY0VnkupgI6C3%2Bj6ijfX6C7HNNR8HiCAEtIQZGs8UeyPnb6UM8l0%2FG6rxbsju2io9nBqHKWdyut0FCT0vuMBUahDom6rHycV4DN6Ri%2FN6AetU%2BIxsgG98bkulhniVAn3YOvjZxQUCossdGUA3qzYGHEbaqUViYUFaceCZMPW2EgMPm4FKY4TYK5IJoTaRCoqmcS8yf7nYBjeI&X-Amz-Signature=6c52f4d8fd2cef470c2cfab6f2e36478732a301a0e9cc779fd40b2c14b1a2a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOXMLXJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2H%2FGq1lKxnktneC%2Fa9CfKd5sv3di03JwHjbbGF9c0fAIgNUk%2F%2Fkjl0CxXMUKVxVNNoK9GPp904PF%2BGRx5sJToO08q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHHNMKzvCl%2FuUqA1aCrcAz%2Bv3bgZ4qQkLv26u%2F1mZyQ6AlL%2BHdh7E7Ldgkl4cmXcEqm4Z3uuXnw1zKk%2Bm4yPl%2FV3p1CyHYjOmV32MTJFw9ps94uuMLaHnB1ZETXbfYB9k5wgv4Pwr7UIzyybp5CuJfxMdLwtraOUbf%2BcH9lU4XpWHG3L9a97uZnEEHEDUHmbZSCGsYtxb%2BwclfWuDoXmwTydLVwwrD6anz9oBJTRWcfOOs0%2FfDsmhfFfEEqCYb%2BCr7u%2Fbe8ZOgujpaXVrvP%2B72TNinu3XSj162izjkUm9wxg4XkjsrFftyyEuORcfS9yPTiTD55pPjav%2F5aKnpa4m2bvimOlj%2B4R6zckkxuNjUUpCmIsJRMr%2FhvXqA3W7Pb1cfQMd8j0LMTPbwr2cG7n3hk%2BufQRwax070u0PdfJpzAo6%2FRlzBqQwFMZre4xxfrCoSuqppIljoVj2mXJ48HnNegq4uEX%2FEjGWDDD1dIvnXeZPNnUWOmUIDJ%2BqT45%2BJnwrkNUezkxxmdTng2K%2FuhOU3BYGshcjLrYRZeXTuxun0B8dbP4EL7x50uF84CUmrK7eqF%2B3ioDgdPlrFkr3MEXwkit9JpamC%2FNtePULAlr9KdkWwuFJfY9UCZFRV4dem2OY6Ud1CCNbnrYVO9%2BMObO%2BL8GOqUB%2FM3VX6JeQxFMnUtvY0VnkupgI6C3%2Bj6ijfX6C7HNNR8HiCAEtIQZGs8UeyPnb6UM8l0%2FG6rxbsju2io9nBqHKWdyut0FCT0vuMBUahDom6rHycV4DN6Ri%2FN6AetU%2BIxsgG98bkulhniVAn3YOvjZxQUCossdGUA3qzYGHEbaqUViYUFaceCZMPW2EgMPm4FKY4TYK5IJoTaRCoqmcS8yf7nYBjeI&X-Amz-Signature=d090b79fcc5c5f04abf2e684bd925fee3eb4a81d923c02774308ddd0bc806038&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
