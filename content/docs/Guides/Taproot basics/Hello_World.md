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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NYVLR7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC8dxChRtFjKU65DY8wq%2FpsjmK%2BGhtVU1kyg7HYUWfKEwIgB7PXUSliFaTZf9eIhlWuGFJkL1AqxnL7Id0C%2BbacYPIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBYzvrTUhY4XSIhzryrcA974%2BRNmlr5QxgYfip%2FTk1etDLX6TuzTRli0ssEhhBEc576IXQADnVLC7xbdXYh3qMqboIV%2BMiVFi8MXZCHwdQxeBBjZlAqjAI4SPbxQFKcyg%2BKjpJy%2Fd2J76EBQPbAtJ1WaC3i%2BODn%2F8UojDlpLd%2BlUtcX3WQwSacJgBlm0cc4GFkx8niacT6W32dg%2FTnbejs9X5cs9nfQogxcmg1VJL8XuAKax1tg9GvC9QV6JkICP4xN9y5ai90oriJZ%2BvrtMVz43kHjlhBL%2BmdeUY1LLAmLucuB3FjVcV7%2Fw8xATq3ZfLW%2BkTQzVaH0YYD7a7%2BVEc1n7rW9iWsvhrViGo4sQkP8wkuc0D5LP%2BJ45eqe%2F9l60Uxfa%2BFX8V6WKNOfwTlk0vAopzOKOOhMpJytvuizU%2FiJx%2F5oTQFfcV8pRhglA83SxB%2FPOzoIMSKJbKYHJbFHSvQfwpjXikQeRx9%2F%2FzyMk4xJXNPp5DooIzOakEAU1V9qTuuCb2FxjhCST%2BWhPaTus4nZCsn6i1m9oZ%2BO0c%2B2kD3mKxJ%2FXKOSCWxwgIyQAtazXPIKOzjOOGaYKt4z2d%2Bx0uaJsAm5NMkmIHgj7H1rE0ZvDqJvKD%2F83X4WdKnPP0G7iQPv70hJXPuFZNm%2FzMN%2FaiMQGOqUBw4rAKA1TiWQ85qkATHLq6vh4kcj7Y4UHUi81NWOtr18ejSs8%2BhZ7hl4GoSZ6DcvExn2afLizi2NOjo0LDw9w%2FMROY7NwjCiOU3JrvAEajuGZEgH%2BG%2BufoBRKcrk7AyzTqZYFKJsEYzmPCVWQv0BSC1L%2BRjVGUAZd8vdKtlmVZE9E6igQHPUCcwKcSbfVBkWXStkQmJVQLCHqTBm9q8gjgcwBU6x%2F&X-Amz-Signature=f6f03740a60ac0c0a552c87815005af1546ad965b9a3821df4317baaaeb1b37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NYVLR7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC8dxChRtFjKU65DY8wq%2FpsjmK%2BGhtVU1kyg7HYUWfKEwIgB7PXUSliFaTZf9eIhlWuGFJkL1AqxnL7Id0C%2BbacYPIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBYzvrTUhY4XSIhzryrcA974%2BRNmlr5QxgYfip%2FTk1etDLX6TuzTRli0ssEhhBEc576IXQADnVLC7xbdXYh3qMqboIV%2BMiVFi8MXZCHwdQxeBBjZlAqjAI4SPbxQFKcyg%2BKjpJy%2Fd2J76EBQPbAtJ1WaC3i%2BODn%2F8UojDlpLd%2BlUtcX3WQwSacJgBlm0cc4GFkx8niacT6W32dg%2FTnbejs9X5cs9nfQogxcmg1VJL8XuAKax1tg9GvC9QV6JkICP4xN9y5ai90oriJZ%2BvrtMVz43kHjlhBL%2BmdeUY1LLAmLucuB3FjVcV7%2Fw8xATq3ZfLW%2BkTQzVaH0YYD7a7%2BVEc1n7rW9iWsvhrViGo4sQkP8wkuc0D5LP%2BJ45eqe%2F9l60Uxfa%2BFX8V6WKNOfwTlk0vAopzOKOOhMpJytvuizU%2FiJx%2F5oTQFfcV8pRhglA83SxB%2FPOzoIMSKJbKYHJbFHSvQfwpjXikQeRx9%2F%2FzyMk4xJXNPp5DooIzOakEAU1V9qTuuCb2FxjhCST%2BWhPaTus4nZCsn6i1m9oZ%2BO0c%2B2kD3mKxJ%2FXKOSCWxwgIyQAtazXPIKOzjOOGaYKt4z2d%2Bx0uaJsAm5NMkmIHgj7H1rE0ZvDqJvKD%2F83X4WdKnPP0G7iQPv70hJXPuFZNm%2FzMN%2FaiMQGOqUBw4rAKA1TiWQ85qkATHLq6vh4kcj7Y4UHUi81NWOtr18ejSs8%2BhZ7hl4GoSZ6DcvExn2afLizi2NOjo0LDw9w%2FMROY7NwjCiOU3JrvAEajuGZEgH%2BG%2BufoBRKcrk7AyzTqZYFKJsEYzmPCVWQv0BSC1L%2BRjVGUAZd8vdKtlmVZE9E6igQHPUCcwKcSbfVBkWXStkQmJVQLCHqTBm9q8gjgcwBU6x%2F&X-Amz-Signature=a7586aaacbcf2f18772a00a4feb6c5c9dd6e2ff76fd28de541ed000d0ee4e593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
