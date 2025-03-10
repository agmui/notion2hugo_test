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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657F26ZFT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEojq7ArewNsh2IqmJBUnxnpU2EUrlFsI3bCC2osu46HAiEAhNOlynRM6U4g7y1xp2eAFUAKmfSOAL1HI7Q8hAqQldAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDpFJ%2FE36iszBVjxCrcAxp6BtvMy%2Bd7BC%2BskadJFv3Av34IL6O%2BDgH032Hirpm4aX6diiq%2FXBh%2B5szyWD%2FmEb0lc%2BraLE4sWMUpiALUAh%2FIudxTZW4iTfTZ66m7haTt%2ByQnMxd9kWwpwLBGyZfDvCxEiqaOxBdkMRm28wbvmjJLqqOwNfW8XWwNXcuv6l3UYqrZuc3o2j9ysET4RbAeUVpVsuQYcJX2QwDxaK%2B2%2B6jLF3x4nrs6nDlNFN01Zb%2BNA0P3vi96u58ClILGNdwQaGKpgAjc%2FeZ5M1ckxJiIHi3zXwJ5N3w4NIx89EaQJeg7LYzUW8WA%2FCWbRZJIq1Cab4h8eF4Q82Hc91mJ5vzrff5juHrT2XlJRK6rcjupgdOy2g7dtzkyFvkjmgqd9p0KnVb%2Fmhbyf6U3CFw9dNPW5qwtKE%2FVqZ98pZ8UaiiQ79eBXWjWN%2FxpcErWO%2BqETNTmEUgO8ht8%2B8ILbDCEMjJrw4pYpMy1WKObG7GtMcIl8xeJyb8PQxlSqSVcbTUw%2FcPPO1KBL9hmlrAVART1KOHwzG48L2PndRIcIRw6PXQsocLL4q6i9oxbdE1piMQpvl2sFYi%2FHr4yqYqZGz1gRwsDDb%2BKB6DJNe5dpMqpR%2Bab%2F%2FE1iJEbfkty4rqPBvvEMM2pur4GOqUB35%2Bg3LFIKQK43aLri4zGg%2B3eT%2BL%2Fk%2F54%2Bgas%2F3q%2FIV8vriIwuEyE8xkWwibsUDzGsTlmU9MGNTt%2FAMZK6Zp6AcB0n02I03WtrcvmQB7F1PGxSErIT%2Fn7xNoNi3RSSFgKt9ToIuwJkbVnJlT54aGxMbsTP2J3xN53k5YROD1gDETpy6Jjkh2k%2BvfqsH3zrZoO0TGwiojsZeJMeO01SWZm3PykFp%2F1&X-Amz-Signature=2290d6b60614d4033cc8c8ca91c17de6137242f3271ef189004799e7f4190fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657F26ZFT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEojq7ArewNsh2IqmJBUnxnpU2EUrlFsI3bCC2osu46HAiEAhNOlynRM6U4g7y1xp2eAFUAKmfSOAL1HI7Q8hAqQldAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDpFJ%2FE36iszBVjxCrcAxp6BtvMy%2Bd7BC%2BskadJFv3Av34IL6O%2BDgH032Hirpm4aX6diiq%2FXBh%2B5szyWD%2FmEb0lc%2BraLE4sWMUpiALUAh%2FIudxTZW4iTfTZ66m7haTt%2ByQnMxd9kWwpwLBGyZfDvCxEiqaOxBdkMRm28wbvmjJLqqOwNfW8XWwNXcuv6l3UYqrZuc3o2j9ysET4RbAeUVpVsuQYcJX2QwDxaK%2B2%2B6jLF3x4nrs6nDlNFN01Zb%2BNA0P3vi96u58ClILGNdwQaGKpgAjc%2FeZ5M1ckxJiIHi3zXwJ5N3w4NIx89EaQJeg7LYzUW8WA%2FCWbRZJIq1Cab4h8eF4Q82Hc91mJ5vzrff5juHrT2XlJRK6rcjupgdOy2g7dtzkyFvkjmgqd9p0KnVb%2Fmhbyf6U3CFw9dNPW5qwtKE%2FVqZ98pZ8UaiiQ79eBXWjWN%2FxpcErWO%2BqETNTmEUgO8ht8%2B8ILbDCEMjJrw4pYpMy1WKObG7GtMcIl8xeJyb8PQxlSqSVcbTUw%2FcPPO1KBL9hmlrAVART1KOHwzG48L2PndRIcIRw6PXQsocLL4q6i9oxbdE1piMQpvl2sFYi%2FHr4yqYqZGz1gRwsDDb%2BKB6DJNe5dpMqpR%2Bab%2F%2FE1iJEbfkty4rqPBvvEMM2pur4GOqUB35%2Bg3LFIKQK43aLri4zGg%2B3eT%2BL%2Fk%2F54%2Bgas%2F3q%2FIV8vriIwuEyE8xkWwibsUDzGsTlmU9MGNTt%2FAMZK6Zp6AcB0n02I03WtrcvmQB7F1PGxSErIT%2Fn7xNoNi3RSSFgKt9ToIuwJkbVnJlT54aGxMbsTP2J3xN53k5YROD1gDETpy6Jjkh2k%2BvfqsH3zrZoO0TGwiojsZeJMeO01SWZm3PykFp%2F1&X-Amz-Signature=9df1c9f31b7be3f4dcc500a00893ca9d19346d4606405ad07277cf23a3fb8ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
