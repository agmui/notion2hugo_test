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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV5QCWE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2BQun7CViEJOyo5ppxjM1tQVnUKaHmCkD%2F9WAG2hCAwIgLdoXRnkKKbVYfq%2Fni3kNatDlC2OFpBLFJN0PHK1TDO0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYmVoK841yUVXW5SrcA8qViyYIfvuiaHbReTaDK3DIOTDCv18jIr%2FEft5Y6jqkupbUlXOq6TufjZKUDHhtiuqpZQs2tjQAeI9EaWBqpndRuMXKsR7y2nedq%2FMEYsku1p9Jmph1YKPnMyFQ%2Bne5cMbikq159iKSgmO05Dqow9JvP8BnFOMB91lM5YsowSGH2PbH0LqJgjK1TwjSutMhMV23mN5Iksc2XbDfLSm044eOnzoOTpT0vH8QQjXyOdoLceRc4uk8KSgf15HkaflpbXhcMNi4f0%2FL62Lxm7pQdIoS9FTdDgEsdxFkr3lLzRehb8mxr9rGGBW%2F8rBtbqJf%2BzhFTW1DGy0UwLPg1f5%2FjwR1VCDm6k5zUu0E0LcvwOTTD3VcfpjT6aFYIcISQuyAWY3wUUDHwoX9l50BSZci2fqFLvS4jF0R5YaBkQbWyfxu5vsR3OcsxpT9SHgZupNJXXwmqt6oNqlgdcZi2icfCQ1iGrfJOIALzu3yiY5LREt95rrgDUczkatcqOqjUnNy0dAtWaHxj6GwONdQfi6nDBP03U8o0FG0Pt9raZ5kQo%2FhQCB4xA47gYyCZuaWTRMnfD72gExf08xTarDUa%2F%2BUwcAFzmqMD%2BCgwfFXuQCjdrnlp1U4gLMwLJypsX%2FPMOOVgsMGOqUB%2BbXhgLBOmZ021WJHexqJ9OSuqAPa4Lx2aLbyv%2FdVhklOsO06D0%2BmEWP9I9Zap7HU%2F6JZiD%2FH%2BpMHY9geNLLMF3vHwVfXBhke0wq%2FMbn1doYX2mVg6bKYnBXQ8fpRcHqKEj2SaqjJhYe9QLmKfC5Rr1wvBmkch7OStw%2BviQCsWlWw7Bn7WXESor%2BBtP2biSxLTSpAP%2F6Nl%2F4UcNvE1medp12HRcax&X-Amz-Signature=87587b62db4fab669cce0c428a9425a55010c82ff61afe7d68dbac4d430d05b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV5QCWE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2BQun7CViEJOyo5ppxjM1tQVnUKaHmCkD%2F9WAG2hCAwIgLdoXRnkKKbVYfq%2Fni3kNatDlC2OFpBLFJN0PHK1TDO0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYmVoK841yUVXW5SrcA8qViyYIfvuiaHbReTaDK3DIOTDCv18jIr%2FEft5Y6jqkupbUlXOq6TufjZKUDHhtiuqpZQs2tjQAeI9EaWBqpndRuMXKsR7y2nedq%2FMEYsku1p9Jmph1YKPnMyFQ%2Bne5cMbikq159iKSgmO05Dqow9JvP8BnFOMB91lM5YsowSGH2PbH0LqJgjK1TwjSutMhMV23mN5Iksc2XbDfLSm044eOnzoOTpT0vH8QQjXyOdoLceRc4uk8KSgf15HkaflpbXhcMNi4f0%2FL62Lxm7pQdIoS9FTdDgEsdxFkr3lLzRehb8mxr9rGGBW%2F8rBtbqJf%2BzhFTW1DGy0UwLPg1f5%2FjwR1VCDm6k5zUu0E0LcvwOTTD3VcfpjT6aFYIcISQuyAWY3wUUDHwoX9l50BSZci2fqFLvS4jF0R5YaBkQbWyfxu5vsR3OcsxpT9SHgZupNJXXwmqt6oNqlgdcZi2icfCQ1iGrfJOIALzu3yiY5LREt95rrgDUczkatcqOqjUnNy0dAtWaHxj6GwONdQfi6nDBP03U8o0FG0Pt9raZ5kQo%2FhQCB4xA47gYyCZuaWTRMnfD72gExf08xTarDUa%2F%2BUwcAFzmqMD%2BCgwfFXuQCjdrnlp1U4gLMwLJypsX%2FPMOOVgsMGOqUB%2BbXhgLBOmZ021WJHexqJ9OSuqAPa4Lx2aLbyv%2FdVhklOsO06D0%2BmEWP9I9Zap7HU%2F6JZiD%2FH%2BpMHY9geNLLMF3vHwVfXBhke0wq%2FMbn1doYX2mVg6bKYnBXQ8fpRcHqKEj2SaqjJhYe9QLmKfC5Rr1wvBmkch7OStw%2BviQCsWlWw7Bn7WXESor%2BBtP2biSxLTSpAP%2F6Nl%2F4UcNvE1medp12HRcax&X-Amz-Signature=2470399d65b07c19109032b9cc05f79eb4f9fd5effc1314968c94b5ca46011bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
