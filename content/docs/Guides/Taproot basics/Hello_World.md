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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDK26EW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSQC2LRQwmSuqWGm%2Fn%2B8H4DAs%2FgxHf4xAOzaXktCBuVAIgcSo2RSJJxtxNEC%2B8p1DM%2BpQ1Jg3x%2BgKoeWYoTZP7hZkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDPv7p5T3%2FZgxHQKAWSrcAwChwNcWPZFP8IKxSrU3BNAN4gvU2cdvB%2F%2BGcpPRwrzRpjj03pUEQBSl6qbp04pR1EGVsGqqbtTO%2F%2FYePMhO0cgHx%2B2vE3PAhsniz%2FtO19BLaOeoie8G5WLBnpZUwzfAco39G1PSDJBpvD8jaLjkka18V8gvuIS4h2j56SSQ1A8z%2Bmx%2FgH7ugJovSHCwQzhiBG6xqJjDoXVfZCH3w8RheQtef4VVpEu6tgYrdJBzQ%2F%2F2E3EteLxcqdAZD1UbmXCzRQdU%2BfjvRX0GsuxGFj3G64uMie9TAaOKaZtIZZBnvMxe9gGc9le1XUQfqJtW5u2UvRFMQHAMuyoaQzMjZhu3rSJCh4wsjmFcKWVqxW9cZQjIkX16xk1DFMC6RaypH9jQl%2Bt93v4U4vQHViL%2FLF5O%2FNyO8Z%2BNxqRFyZVp1RpnNRW%2BPAXU8snt60JkUte2I5OLREyHnTorOyuFpVl%2FfEg0c9JPNeoN6eTlgSUIAGYLvVMEvaf6vFLGLuwXCAmdgEAtBhi0rYXQdCzPQ9QeXb5JiB%2BmnoIJE1OEal4ZKspyZB4VxWuDRX8xoojGoxNr20JREx3hLjVDBYNMS9LRhGPyWm0k702tuM%2BwNV8EaQwMbbOHK6Y50JFKX%2BMCJv9sMP6Q1cEGOqUBsy37Q%2Bw4wMkSnbAbivRAnq3KCR5NWX6DUfwgEcas6QKmtGSpbBmxwyS%2F81wgx5y3As%2BXJd%2BHBnDxBUd0e1U%2B0IbmXQHy3nWrKz0rHY9u8pxwHk2ZXqrvda%2F%2FTay%2BQl5DZyL2TQhoTtYmyntutE1wL23uWRt7Kc9GjpC9t%2BKaLjOdL2mBvMLS5U%2BAv3N%2B6yCwLRmrt13xVvxcLiH7NDkMQsqscrEx&X-Amz-Signature=9ed0d57a206ed23f754ba08980a860348cd6904862a7997b07312a4668e6d15e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDK26EW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSQC2LRQwmSuqWGm%2Fn%2B8H4DAs%2FgxHf4xAOzaXktCBuVAIgcSo2RSJJxtxNEC%2B8p1DM%2BpQ1Jg3x%2BgKoeWYoTZP7hZkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDPv7p5T3%2FZgxHQKAWSrcAwChwNcWPZFP8IKxSrU3BNAN4gvU2cdvB%2F%2BGcpPRwrzRpjj03pUEQBSl6qbp04pR1EGVsGqqbtTO%2F%2FYePMhO0cgHx%2B2vE3PAhsniz%2FtO19BLaOeoie8G5WLBnpZUwzfAco39G1PSDJBpvD8jaLjkka18V8gvuIS4h2j56SSQ1A8z%2Bmx%2FgH7ugJovSHCwQzhiBG6xqJjDoXVfZCH3w8RheQtef4VVpEu6tgYrdJBzQ%2F%2F2E3EteLxcqdAZD1UbmXCzRQdU%2BfjvRX0GsuxGFj3G64uMie9TAaOKaZtIZZBnvMxe9gGc9le1XUQfqJtW5u2UvRFMQHAMuyoaQzMjZhu3rSJCh4wsjmFcKWVqxW9cZQjIkX16xk1DFMC6RaypH9jQl%2Bt93v4U4vQHViL%2FLF5O%2FNyO8Z%2BNxqRFyZVp1RpnNRW%2BPAXU8snt60JkUte2I5OLREyHnTorOyuFpVl%2FfEg0c9JPNeoN6eTlgSUIAGYLvVMEvaf6vFLGLuwXCAmdgEAtBhi0rYXQdCzPQ9QeXb5JiB%2BmnoIJE1OEal4ZKspyZB4VxWuDRX8xoojGoxNr20JREx3hLjVDBYNMS9LRhGPyWm0k702tuM%2BwNV8EaQwMbbOHK6Y50JFKX%2BMCJv9sMP6Q1cEGOqUBsy37Q%2Bw4wMkSnbAbivRAnq3KCR5NWX6DUfwgEcas6QKmtGSpbBmxwyS%2F81wgx5y3As%2BXJd%2BHBnDxBUd0e1U%2B0IbmXQHy3nWrKz0rHY9u8pxwHk2ZXqrvda%2F%2FTay%2BQl5DZyL2TQhoTtYmyntutE1wL23uWRt7Kc9GjpC9t%2BKaLjOdL2mBvMLS5U%2BAv3N%2B6yCwLRmrt13xVvxcLiH7NDkMQsqscrEx&X-Amz-Signature=213bd4f370a5bba19ec6f6b9ef6115d0ec97bb883e86484a66299224ca777279&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
