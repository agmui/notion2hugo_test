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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UGY26I%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgkWbZrJ3IDWMW8emtNcMNGzBTgm7rKCY1BQKth1Y0TwIgYK5dm0PZHQ4PHFMSSZpiI1GLwOAxUIplv5QG265d5AkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB7m3kKKTGDGH1VYyrcA2KFISkoliFbF3l%2F6VyTEMk7Dk6huDRvuUV3faqOqa3U%2BGpZog%2FflzQWXBuH9kLlnes0gxQApvpez8Cjr9Zk2a9ogpvvBAf%2FToKqclxadbDxyDSfz3gFw1Z8eb6xIJObnPT03jgzTFH6sbc9oQZ5%2F0VpqRO%2Fk03chSo%2FuhK7s5k2i%2B2%2BCyMgh8O%2FPhuMAcVL6uVomLZ30rcgO173%2FSuiyqRD73AegoNqpyTZNhBcg6XyQuvk39L6V9ZYv6xGybu1UNT3vIqQV1xqSh0CBlLlaLeu6zSebQPPgCC4nsUhV8lwgQIoK%2Fx1sHknCmfSSQnVVPINU385jX5xXta91JcfBb0uEJ8cOunZ4a%2BShAhK6FY1JCjOyEsvoPb8eeSZiTyPOWk8TEmoTHnC%2BBqRuGLlYm5WF0r%2B%2F5yJBYgqIC1Q%2FuwBNuytWwoBBHl2ttr4fCP2T8JlKAk6j32WFJ8Fxv9o3A9BcGCnvJxTuzD8akIHHeMLAoi72EyAYUhX7IxEIfYbIFZL9bOcoExd8%2FvCihShkPszBq5SBFpHHLtjmqVHhHOiRz%2FpT8nEA4%2FMy1GgVi3uC%2B0N5XMw8oqogDoQeH8c4xrLQQV1tlMu%2BpFfiY8h%2FW05CXpffe94ia%2BdukxrMOzIrr0GOqUB0N%2FQg7Oy%2BXMr7kEbDTq8ddA7jZM3b2gMzn9LxvNHVi%2B6pnOmf4he3mSJXH9qqnXtZ4B7uprHbbJElE1mTSGtOq30bDeoOB8W5Wi4Z4hpWIwXCKG5YZkmndRmM6tgAd9SYLhy9wbGczHsH51PIZnGf3yuIn6TNyFo69gdROU%2F9iCJCBSIdJNosK%2FalsYHS3COiN4ySZ9WRJ3MMWnaohE7dpXFasCY&X-Amz-Signature=b588e03decee0197ee6da0eeff281b64d85324718a5b69e400c41233265ee28f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UGY26I%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgkWbZrJ3IDWMW8emtNcMNGzBTgm7rKCY1BQKth1Y0TwIgYK5dm0PZHQ4PHFMSSZpiI1GLwOAxUIplv5QG265d5AkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB7m3kKKTGDGH1VYyrcA2KFISkoliFbF3l%2F6VyTEMk7Dk6huDRvuUV3faqOqa3U%2BGpZog%2FflzQWXBuH9kLlnes0gxQApvpez8Cjr9Zk2a9ogpvvBAf%2FToKqclxadbDxyDSfz3gFw1Z8eb6xIJObnPT03jgzTFH6sbc9oQZ5%2F0VpqRO%2Fk03chSo%2FuhK7s5k2i%2B2%2BCyMgh8O%2FPhuMAcVL6uVomLZ30rcgO173%2FSuiyqRD73AegoNqpyTZNhBcg6XyQuvk39L6V9ZYv6xGybu1UNT3vIqQV1xqSh0CBlLlaLeu6zSebQPPgCC4nsUhV8lwgQIoK%2Fx1sHknCmfSSQnVVPINU385jX5xXta91JcfBb0uEJ8cOunZ4a%2BShAhK6FY1JCjOyEsvoPb8eeSZiTyPOWk8TEmoTHnC%2BBqRuGLlYm5WF0r%2B%2F5yJBYgqIC1Q%2FuwBNuytWwoBBHl2ttr4fCP2T8JlKAk6j32WFJ8Fxv9o3A9BcGCnvJxTuzD8akIHHeMLAoi72EyAYUhX7IxEIfYbIFZL9bOcoExd8%2FvCihShkPszBq5SBFpHHLtjmqVHhHOiRz%2FpT8nEA4%2FMy1GgVi3uC%2B0N5XMw8oqogDoQeH8c4xrLQQV1tlMu%2BpFfiY8h%2FW05CXpffe94ia%2BdukxrMOzIrr0GOqUB0N%2FQg7Oy%2BXMr7kEbDTq8ddA7jZM3b2gMzn9LxvNHVi%2B6pnOmf4he3mSJXH9qqnXtZ4B7uprHbbJElE1mTSGtOq30bDeoOB8W5Wi4Z4hpWIwXCKG5YZkmndRmM6tgAd9SYLhy9wbGczHsH51PIZnGf3yuIn6TNyFo69gdROU%2F9iCJCBSIdJNosK%2FalsYHS3COiN4ySZ9WRJ3MMWnaohE7dpXFasCY&X-Amz-Signature=cbd7bed4b96fedbc030309bfe10c0144f93e26b296467056e721957e07f40b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
