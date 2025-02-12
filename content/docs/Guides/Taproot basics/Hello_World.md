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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V6RGJJ6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqrIofuMb0NjJq%2Bg%2FsvKLQpZFk3ZQpcvY%2FfzFOykKchAiEAh9L5r%2B6Xaooq%2FjILMt1HN8TlMjeLQEwyXAwEZL7MsRcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdKZhRM5PdIVP9omCrcA488Mo6H3A4%2BAwEKBou6aGkc603q4DF87vGhMJky0XnDw0u85AiFehONNlbq2eFNn5mLNv3aA93FzWNG5BS%2BRojjWu%2Fh8%2BvQcxB%2FgNaEMGiwM%2Bdr61Do%2BSWl4exsnFQWVGCbB4l%2Bbj9vc3txXj%2BuY10ouwgDHuk6M6C16QuLG9pLls47Ct8JBTC56E9k8vTGuRF%2FyoC62JabLTKT2FQIsOa6B7yf4Fl527P2mXrcoKmS4ZlZC3N8nEZvOth4R7zsn6iNDgxESu%2BLcNSRtBB0t838%2B214Uga3K6Y%2FIFkOK1zBqVPrCykjlcg%2BmgN8Ae600Vs1a1mFReQJiM%2FjvpsxBsO7odkkgNkRp2cNqs3iRSn3Pk4OX6Q2y5PjCk7r1%2FPwwUOxKueKg59UqJW2YMpMooGCHG38kSTcHYV3Pzhxtj%2FwGNCTLWXWvkQR8Q1kSXwbAvuQ9EdXz6KlO68f%2BR1UbpB9Vyv1GeuXPH7oG437h1Zs7E1nWOOtWjKzhqpV%2FOwhS%2F%2ByCa2C4CxFrFEzUBKIcr9oeEIsKIRw3iATQxuclsSgc%2FdU7bm1mCbF%2FMN10CEBDHkFk8oq6byuLQ9f2s5cCK4Pw9XFCyCNg6%2FEc0EmpvkOVV95WEb79eXfyVbgMKnrr70GOqUBg5mwRHHo2Jj4TNpfb4Qo6SQq3hkMkwszd5l8aLaL9chCRL3BpHykz9Ph2cs6ph1n26fuOMRZYW7siqdLEfmGWS%2FyopDl%2FYo9GTf0hssOpaos3huBM0YGJ%2B%2Fg0gzkP%2BFSPG9N5VNSS2yFvGk3Jxow6ZnzV8HTMH4Vc9FohH8ywugLJ5IvXzGhLPxef%2BPkqRG4HJe%2F31TpbbpCYq9K7a2dRq1EjKCj&X-Amz-Signature=1d18c29fbaef4350a0c0fd38eb6e9e4171f6e3ca7d266fb3676698ec23545030&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V6RGJJ6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqrIofuMb0NjJq%2Bg%2FsvKLQpZFk3ZQpcvY%2FfzFOykKchAiEAh9L5r%2B6Xaooq%2FjILMt1HN8TlMjeLQEwyXAwEZL7MsRcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdKZhRM5PdIVP9omCrcA488Mo6H3A4%2BAwEKBou6aGkc603q4DF87vGhMJky0XnDw0u85AiFehONNlbq2eFNn5mLNv3aA93FzWNG5BS%2BRojjWu%2Fh8%2BvQcxB%2FgNaEMGiwM%2Bdr61Do%2BSWl4exsnFQWVGCbB4l%2Bbj9vc3txXj%2BuY10ouwgDHuk6M6C16QuLG9pLls47Ct8JBTC56E9k8vTGuRF%2FyoC62JabLTKT2FQIsOa6B7yf4Fl527P2mXrcoKmS4ZlZC3N8nEZvOth4R7zsn6iNDgxESu%2BLcNSRtBB0t838%2B214Uga3K6Y%2FIFkOK1zBqVPrCykjlcg%2BmgN8Ae600Vs1a1mFReQJiM%2FjvpsxBsO7odkkgNkRp2cNqs3iRSn3Pk4OX6Q2y5PjCk7r1%2FPwwUOxKueKg59UqJW2YMpMooGCHG38kSTcHYV3Pzhxtj%2FwGNCTLWXWvkQR8Q1kSXwbAvuQ9EdXz6KlO68f%2BR1UbpB9Vyv1GeuXPH7oG437h1Zs7E1nWOOtWjKzhqpV%2FOwhS%2F%2ByCa2C4CxFrFEzUBKIcr9oeEIsKIRw3iATQxuclsSgc%2FdU7bm1mCbF%2FMN10CEBDHkFk8oq6byuLQ9f2s5cCK4Pw9XFCyCNg6%2FEc0EmpvkOVV95WEb79eXfyVbgMKnrr70GOqUBg5mwRHHo2Jj4TNpfb4Qo6SQq3hkMkwszd5l8aLaL9chCRL3BpHykz9Ph2cs6ph1n26fuOMRZYW7siqdLEfmGWS%2FyopDl%2FYo9GTf0hssOpaos3huBM0YGJ%2B%2Fg0gzkP%2BFSPG9N5VNSS2yFvGk3Jxow6ZnzV8HTMH4Vc9FohH8ywugLJ5IvXzGhLPxef%2BPkqRG4HJe%2F31TpbbpCYq9K7a2dRq1EjKCj&X-Amz-Signature=a4d1bbfa975a0305940a89323b9e725f2fe039072a1e8eb23ab773c1e8511cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
