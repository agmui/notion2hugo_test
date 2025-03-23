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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MZAE2U%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD9z%2BWTxq09Kh8e%2FmKwshjLhHYs9pTGcvbKHnOWubTpAAIgNhAqCWuxLvWPRxhbC3L6UYJTwJL0WGve2MqvRo1IZQkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzOlvKeysBN2a9XSircAw%2Bn5%2F0TpQu2sNNLpkJS1iAbm91YqBYSRduzfl7cKhHRVHY0OTzhKjCNvRHQ2UGQlW0BntATqB9WMK51BQYxeKXJCLzai8HYeNNtNNMIX%2BARKAjiVwLuEHR19kfuN1kCEttB9ChfQPKCfjbHNGGrmaptTsfl%2FjcwL2C38o3jDwzVGKflWMacj1b%2B6hkutdiZ2vGUK4wwBLmgGYGVhkTDOSdJrzDX9EnC8SxXH%2FMrouA6vEChd4lX1t%2Bx6MQU6fzNQXyKc3NS%2FWYqs5LLwwDS0T65g9vSrxuQaGBxYvOYz4SmXsEiBVWalx7VrQBVs2vbhohS%2F9GaTgFdoOXQW8jdUubyH%2BLcqC%2BFvB6h5WvGUXzaCuWiw1L4dnjDfBP7N%2FfDchg51%2F3gCG%2BUlwz6OLE0mFAn0vmv7aHANS7ySpuMHlWZ38%2B%2FtZtIZFV69shG9rpm7wn6NcjpJ3Z0ctWA1SGvrgdt9SjmSG9OA2jR%2FFMJ9fC%2Fwgjf5IoHHuQzgN8mG4C1VIlTqmeMHVYAJ0IbKGfsQCr6RtRKWVIohgRdLpDk1CTrWLkBWQ04ag7ZMJnET7si21Id%2FWuFw%2FdlWux45PEHB9Rl%2FiBhyplgYuLL%2FLV28C3g%2B35k4C7hxhXjA2A9MI70%2Fr4GOqUBRxL0wltMdMuS19Xhzqn15EpqlRCCaFKpxG0C0xRedTFPQGhEeEeLoupr594erp1f2QyQcBXunBjKFhHQ6KfT8fHf63wayzFlFrJz7Bc%2FH1FnRlbw%2BA5T0aUskuKOzeYVJberwdpnbcEzfqKd4lnFZkML5afydJl6P1sV%2FZJTdACcgDrk%2BRPbyt4%2Bl%2BflT43%2BR3o9LrmUBu5J4tgFiIdSVfTInQ8u&X-Amz-Signature=4dadd4e0edf501d0c4b3e89d01112ab4b98e983f3ffd290bea3f0c3c8aca1c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MZAE2U%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD9z%2BWTxq09Kh8e%2FmKwshjLhHYs9pTGcvbKHnOWubTpAAIgNhAqCWuxLvWPRxhbC3L6UYJTwJL0WGve2MqvRo1IZQkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzOlvKeysBN2a9XSircAw%2Bn5%2F0TpQu2sNNLpkJS1iAbm91YqBYSRduzfl7cKhHRVHY0OTzhKjCNvRHQ2UGQlW0BntATqB9WMK51BQYxeKXJCLzai8HYeNNtNNMIX%2BARKAjiVwLuEHR19kfuN1kCEttB9ChfQPKCfjbHNGGrmaptTsfl%2FjcwL2C38o3jDwzVGKflWMacj1b%2B6hkutdiZ2vGUK4wwBLmgGYGVhkTDOSdJrzDX9EnC8SxXH%2FMrouA6vEChd4lX1t%2Bx6MQU6fzNQXyKc3NS%2FWYqs5LLwwDS0T65g9vSrxuQaGBxYvOYz4SmXsEiBVWalx7VrQBVs2vbhohS%2F9GaTgFdoOXQW8jdUubyH%2BLcqC%2BFvB6h5WvGUXzaCuWiw1L4dnjDfBP7N%2FfDchg51%2F3gCG%2BUlwz6OLE0mFAn0vmv7aHANS7ySpuMHlWZ38%2B%2FtZtIZFV69shG9rpm7wn6NcjpJ3Z0ctWA1SGvrgdt9SjmSG9OA2jR%2FFMJ9fC%2Fwgjf5IoHHuQzgN8mG4C1VIlTqmeMHVYAJ0IbKGfsQCr6RtRKWVIohgRdLpDk1CTrWLkBWQ04ag7ZMJnET7si21Id%2FWuFw%2FdlWux45PEHB9Rl%2FiBhyplgYuLL%2FLV28C3g%2B35k4C7hxhXjA2A9MI70%2Fr4GOqUBRxL0wltMdMuS19Xhzqn15EpqlRCCaFKpxG0C0xRedTFPQGhEeEeLoupr594erp1f2QyQcBXunBjKFhHQ6KfT8fHf63wayzFlFrJz7Bc%2FH1FnRlbw%2BA5T0aUskuKOzeYVJberwdpnbcEzfqKd4lnFZkML5afydJl6P1sV%2FZJTdACcgDrk%2BRPbyt4%2Bl%2BflT43%2BR3o9LrmUBu5J4tgFiIdSVfTInQ8u&X-Amz-Signature=5aeb4253ff2b56938799dc32501b4eb5667f6a71d456263cdb1cfb43a985d175&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
