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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVUP3TA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDvDpNRvcvT65RiScdBRSaJFMPHzsXdSsxgQiv%2BXbUUKAiAdZlGaxrVR2okH6KcQxohilnzRlZZXjg%2FT8xr%2BLFaI%2FyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEmfvYVrBaEgWq5SlKtwDA25zdcJqkfB3VsD1XOg%2F%2BWqlOmSWLD0guIqKk5DY8T4iuNMiiPmL6tpTWFoFjg8%2BLheUiKN3fLxb6gxt8Ri0ORk3UbNUimF%2BI%2BAJKENaqm%2FcEp2Acc3IarL7Cd%2FwiXpk5lQSbekFq8ZLWvt4SAlap1hHgtWI1%2FGw46QlCdaNzKZpDhX4d7v3LNkya0SVxeyzqNysCdt5moGVpg4SiZdzZBkH8eVgljagx%2FMZLEdU3nhkU4griWvvx7ihbMQtuAqjoLsrPTHG6nhSX7rjzJbATj%2BqP9w2vgdx7y%2FmhJVlFajLllIFzPgXRTUsBMrl%2FFMa3%2BRl803vyeJiCvOW8EKRCKjOii5kUci8nTnQBTPzTIsTHi9HQYBcZeddVS0hYEQMy1ES2A%2BjZv%2F4e9%2FwncROth2UtB4aomEArUI05%2FppHSyD7IEm3JUiSObCu6sQWfqnfct86%2B7vbf%2FLIlIHh%2FCC8ok2eiGzj7TC0JT8W09kdv3b6onGRAtEQ0vTRpevwsDu8uCDbvV32%2BI90fa%2BPUTMyB2OVj2lvmrvgksEt0bOqtr9JhEy0Bd9AzuhthSRdUy%2BbtV88JEVJBd7wYFC8ElDG1in4DK2neZBWsI1P72y7LlfMT23hdFv2Um30DQwtsTbxAY6pgF%2BoPYpeoNV74POehW8Zvf%2BH12nPy%2FSQeZ7tMXszP9hV0FSyA9dyIBbyU0%2FANa%2BfqF8iakE2%2FTa9k8y8ZJeZCPIMaDr2sks%2BgRRzi499l0Car5946QGnzLZvBy8iOjPObu3ReLgGvVRqA1l%2FuBSMCRk3TA28Zco09OtNduWO6q63Ljqb471JXrR7xnMYyC2DpYlwaMb9RPTxbBHsQxfmwLU3bGEYCIj&X-Amz-Signature=1ad4e3b1f027c05d8581aaae81dbf77245a3589dd11cf9bdb81e001f79bc57b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVUP3TA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDvDpNRvcvT65RiScdBRSaJFMPHzsXdSsxgQiv%2BXbUUKAiAdZlGaxrVR2okH6KcQxohilnzRlZZXjg%2FT8xr%2BLFaI%2FyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEmfvYVrBaEgWq5SlKtwDA25zdcJqkfB3VsD1XOg%2F%2BWqlOmSWLD0guIqKk5DY8T4iuNMiiPmL6tpTWFoFjg8%2BLheUiKN3fLxb6gxt8Ri0ORk3UbNUimF%2BI%2BAJKENaqm%2FcEp2Acc3IarL7Cd%2FwiXpk5lQSbekFq8ZLWvt4SAlap1hHgtWI1%2FGw46QlCdaNzKZpDhX4d7v3LNkya0SVxeyzqNysCdt5moGVpg4SiZdzZBkH8eVgljagx%2FMZLEdU3nhkU4griWvvx7ihbMQtuAqjoLsrPTHG6nhSX7rjzJbATj%2BqP9w2vgdx7y%2FmhJVlFajLllIFzPgXRTUsBMrl%2FFMa3%2BRl803vyeJiCvOW8EKRCKjOii5kUci8nTnQBTPzTIsTHi9HQYBcZeddVS0hYEQMy1ES2A%2BjZv%2F4e9%2FwncROth2UtB4aomEArUI05%2FppHSyD7IEm3JUiSObCu6sQWfqnfct86%2B7vbf%2FLIlIHh%2FCC8ok2eiGzj7TC0JT8W09kdv3b6onGRAtEQ0vTRpevwsDu8uCDbvV32%2BI90fa%2BPUTMyB2OVj2lvmrvgksEt0bOqtr9JhEy0Bd9AzuhthSRdUy%2BbtV88JEVJBd7wYFC8ElDG1in4DK2neZBWsI1P72y7LlfMT23hdFv2Um30DQwtsTbxAY6pgF%2BoPYpeoNV74POehW8Zvf%2BH12nPy%2FSQeZ7tMXszP9hV0FSyA9dyIBbyU0%2FANa%2BfqF8iakE2%2FTa9k8y8ZJeZCPIMaDr2sks%2BgRRzi499l0Car5946QGnzLZvBy8iOjPObu3ReLgGvVRqA1l%2FuBSMCRk3TA28Zco09OtNduWO6q63Ljqb471JXrR7xnMYyC2DpYlwaMb9RPTxbBHsQxfmwLU3bGEYCIj&X-Amz-Signature=be6215430fd2f1e5d36df382c4cece8e85cbd4c6a5eba449be2a693f1f5230f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
