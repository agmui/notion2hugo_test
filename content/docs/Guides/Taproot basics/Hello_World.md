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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6CQNXWH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIE1L308FLDlKgkRi2VYZOCJTuz%2BZqqeEeG5iwFxIdgiQAiEA1KWvdwI3M8FD4dOzhmbRsHk7n2ycfZlYTAZpcXAiISsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAaCRvjtQ%2B1g%2Bp6hircA5W8cGeJl0Bwcmay7CauXgaHLYPvzpjUBLykJmBswkGgQBuIhjALlWkF6NFAQflS1V8cA3Oc1gRxVgIg8kMEa0IsBqJKQ%2FjBBQWlawAH2JFtpBFx43LvR7JZ8FLoTy4HyWzAkN0e8yeswOeOGStqxweCKg%2FCEJDQSTQP5TVyOF3TjUmFc5IzxJL5qm%2Fjy3gGEWZ3%2BySLJ8O5ZXwEN%2F33F6Ah9%2F7s9nmmyzC0uhsOqyCDIXlijSMjBEP1UvLX9xWSZbvgTILMvqXjKqGJ3AW0TGbhV8UykgyEjCV8hYoZ77ys16Sc9qPs8ZVQE6ijieYR4tmm5TNcCZMO%2BopzUniyj2KFYCcwEEwAPytbiRoJIx9632Rb8b9dJ09jEFRzbdQk7xNd7tCFqiQ44vEkbhcwCMSl6PbpCg89%2FmPylGXc7%2F7u41I5bRhPms4e5AdNem2OxceysI13pIX1%2FXxhe213lD7RtZSUfDOY8AuBgB%2Ff50IYMe%2B7ZvR1w6aI2G6uv6sQ0m9gUBsHOjYjCpTIGiWqJTbxiX3Ay431RiejFVBpXdUkiXPjVKRKKGExYISo44U%2FoD9nqQcA0%2FqQM%2BR6vOxok%2F%2BLTpeXFt%2B42syPPXapdzz%2BbqDuY4u55DnFNwk0MOnFu8EGOqUBIUWhdGBlreV3mY7S4%2BlNWXzAXW8t5jlVaBYa2zkU%2Bkn6La%2BNxIiS1K4VsWaX8G2BUn21h%2Fb1W0mEEPeUYKhhdDVeEiAgCE%2FVyVNnpyFRFT6bPumc2YZK%2FNh1jOURX%2FqMMAXssHfy7JmZIrcLL4BnC89mopu8azg7f1B1Qet%2FJwjtO6Zk%2F4DC1ETFBSUpSZRTlo2sj0uUXzH0%2BHrPvVkST9Du%2FBN4&X-Amz-Signature=5fd050fd94a7dfd93327af5b6eb7a17700ce2bce8e723d22e5e81942291460a1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6CQNXWH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIE1L308FLDlKgkRi2VYZOCJTuz%2BZqqeEeG5iwFxIdgiQAiEA1KWvdwI3M8FD4dOzhmbRsHk7n2ycfZlYTAZpcXAiISsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAaCRvjtQ%2B1g%2Bp6hircA5W8cGeJl0Bwcmay7CauXgaHLYPvzpjUBLykJmBswkGgQBuIhjALlWkF6NFAQflS1V8cA3Oc1gRxVgIg8kMEa0IsBqJKQ%2FjBBQWlawAH2JFtpBFx43LvR7JZ8FLoTy4HyWzAkN0e8yeswOeOGStqxweCKg%2FCEJDQSTQP5TVyOF3TjUmFc5IzxJL5qm%2Fjy3gGEWZ3%2BySLJ8O5ZXwEN%2F33F6Ah9%2F7s9nmmyzC0uhsOqyCDIXlijSMjBEP1UvLX9xWSZbvgTILMvqXjKqGJ3AW0TGbhV8UykgyEjCV8hYoZ77ys16Sc9qPs8ZVQE6ijieYR4tmm5TNcCZMO%2BopzUniyj2KFYCcwEEwAPytbiRoJIx9632Rb8b9dJ09jEFRzbdQk7xNd7tCFqiQ44vEkbhcwCMSl6PbpCg89%2FmPylGXc7%2F7u41I5bRhPms4e5AdNem2OxceysI13pIX1%2FXxhe213lD7RtZSUfDOY8AuBgB%2Ff50IYMe%2B7ZvR1w6aI2G6uv6sQ0m9gUBsHOjYjCpTIGiWqJTbxiX3Ay431RiejFVBpXdUkiXPjVKRKKGExYISo44U%2FoD9nqQcA0%2FqQM%2BR6vOxok%2F%2BLTpeXFt%2B42syPPXapdzz%2BbqDuY4u55DnFNwk0MOnFu8EGOqUBIUWhdGBlreV3mY7S4%2BlNWXzAXW8t5jlVaBYa2zkU%2Bkn6La%2BNxIiS1K4VsWaX8G2BUn21h%2Fb1W0mEEPeUYKhhdDVeEiAgCE%2FVyVNnpyFRFT6bPumc2YZK%2FNh1jOURX%2FqMMAXssHfy7JmZIrcLL4BnC89mopu8azg7f1B1Qet%2FJwjtO6Zk%2F4DC1ETFBSUpSZRTlo2sj0uUXzH0%2BHrPvVkST9Du%2FBN4&X-Amz-Signature=ca594ba3dbcc2fad13333e861222448831454f75fbfda92e255519d00033d8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
