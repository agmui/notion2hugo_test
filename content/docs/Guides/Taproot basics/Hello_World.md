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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIMEEEF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNitJTGVxjAbWbEPyhx77CcqXZ1GWP638%2BjR7j5ILAGAIhAPrpjnUChp0Ip9pvasT1A%2FYEvBGW%2Fb38QIzU32cUT52lKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxWSr6%2FUbmXt5FAQwq3APtrgUM9lR5o%2FgXZTUiBm1tXkKHNaL8UOz3SghIqjJ5Jcixlvj98l%2FCyl8VnX8BHWUYFzLwVqTM43qWBwtF548GEGZ4vUzWt0Wm9NPXBG%2FsS4fLSrl3e7sOD7Xzeq5sTvo5hV6MFGeh3SSznNO2MtZr3Jb0JNNcwq0IL9lqSlmFb9lomw8awWNUFCfLvjWqoE0VbHcafkzXE37O949AXRl9%2B5UEPIfavW%2BwZ2yu2tuFu1m1VFY1Fhgi3laIwGr18rcZRNyhYqlj5gPNLmmyqHQE5uI2mg6%2BhoqjFtXFS9JkQ0ltxbU%2BUhHeZ%2BJFOuRSZTap%2Bu%2BGDYigJqtu9GV4K%2BzND84179qk6C3I01lSYBywWzQgpOKvc5smcTYOUbXCNw27Af1UeCw%2BWiqtFhnUq5SoXGySS7tRxgf2pukUccPA1J7O6zR0TekbQfuGwdidIH5f%2FIwAff3bHtavRPK%2F1s5PziugbS8vcy1QlTHFFks3je7nh6SCi%2FvPGv8NX4NFKiASRek1E40PzyxrZdchY4Z4MIpD%2FDm6CpPetp%2FhAJ%2BL11mM3FPQ57paoePWgXQ92ATiECyr%2FJYw%2BOEPKBZO3rCP%2BhlCZ6i9lAA3GtmB1z6Phgvt0qrXlXYV32NAsDDekNvCBjqkAQQPLcdTkO%2FdOLz1GEel3FTQsiUD%2Foyfnu2vucr8ndGZo8ld4ugHUXYjP9eKrZUWWWq%2BOP1sc44d18v2rY44ooBkWVr%2FFBU1Qib30%2B5HQ7%2FSt2N7B3OgMLIXLxHcv0ANjXrmn7%2BF2eEk%2Fwa4txN2YvDupdl1G2ayopkW0Jcz9aubrD%2BVHKCEomxZl6RRZYoj2CcC0ODXf0C%2FaMtINFw9rOdNnZ1i&X-Amz-Signature=e74e82a88978cca76870ae187e9aa8ccdd8d36c40a3bce5562599a0225428ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIMEEEF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNitJTGVxjAbWbEPyhx77CcqXZ1GWP638%2BjR7j5ILAGAIhAPrpjnUChp0Ip9pvasT1A%2FYEvBGW%2Fb38QIzU32cUT52lKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxWSr6%2FUbmXt5FAQwq3APtrgUM9lR5o%2FgXZTUiBm1tXkKHNaL8UOz3SghIqjJ5Jcixlvj98l%2FCyl8VnX8BHWUYFzLwVqTM43qWBwtF548GEGZ4vUzWt0Wm9NPXBG%2FsS4fLSrl3e7sOD7Xzeq5sTvo5hV6MFGeh3SSznNO2MtZr3Jb0JNNcwq0IL9lqSlmFb9lomw8awWNUFCfLvjWqoE0VbHcafkzXE37O949AXRl9%2B5UEPIfavW%2BwZ2yu2tuFu1m1VFY1Fhgi3laIwGr18rcZRNyhYqlj5gPNLmmyqHQE5uI2mg6%2BhoqjFtXFS9JkQ0ltxbU%2BUhHeZ%2BJFOuRSZTap%2Bu%2BGDYigJqtu9GV4K%2BzND84179qk6C3I01lSYBywWzQgpOKvc5smcTYOUbXCNw27Af1UeCw%2BWiqtFhnUq5SoXGySS7tRxgf2pukUccPA1J7O6zR0TekbQfuGwdidIH5f%2FIwAff3bHtavRPK%2F1s5PziugbS8vcy1QlTHFFks3je7nh6SCi%2FvPGv8NX4NFKiASRek1E40PzyxrZdchY4Z4MIpD%2FDm6CpPetp%2FhAJ%2BL11mM3FPQ57paoePWgXQ92ATiECyr%2FJYw%2BOEPKBZO3rCP%2BhlCZ6i9lAA3GtmB1z6Phgvt0qrXlXYV32NAsDDekNvCBjqkAQQPLcdTkO%2FdOLz1GEel3FTQsiUD%2Foyfnu2vucr8ndGZo8ld4ugHUXYjP9eKrZUWWWq%2BOP1sc44d18v2rY44ooBkWVr%2FFBU1Qib30%2B5HQ7%2FSt2N7B3OgMLIXLxHcv0ANjXrmn7%2BF2eEk%2Fwa4txN2YvDupdl1G2ayopkW0Jcz9aubrD%2BVHKCEomxZl6RRZYoj2CcC0ODXf0C%2FaMtINFw9rOdNnZ1i&X-Amz-Signature=66214eb213b630275486f13f8ec92e66394b1a8e57ee988410ee3588fb12b174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
