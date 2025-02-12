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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VT77AEN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkdXXt2I2sQleYN7n%2FUd2RwCDjAX8KFfXqmC%2FUdgCiXwIhAJTBvYFxgl%2FjxWj2Dw4l%2BpK6BjVOEW6A2yPO0dY7AK3iKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyk4Z7BOqjDuV1LI4oq3AOPLOANznEus2r5b5%2FXSfpqOnuUh9jmpna%2FBLsNspCCJxTZu%2BqLfvR3isISrEu6bAx9B5dZ1eJSgTRVgaI28Leuozm0LAH06K46OVyBfbx07fi9DOZRhF4%2Fe5Z6%2BP69KPSKVVTY4uJlUnF1mxm2QTTcLyrLCXbta%2BzVPp9kAOZuevzA4ZtyEABHytsweSLNvBFgp7GtuxrdGe9HVJSbhQZwRlEhzMeLeKcZvB%2FO5r6aYCj23AMoptpJVPduUpNA9nkhqznxB5tU5l4aJEb5%2FOaKNx2LY58uWUQAhq5ocSrRnTXRvrxPGuINw88%2Fq2VsZMhEil0ar%2BXzetqRpD51sqRwBzOSRa93pQmRJVzov2EH7c2asQUumI9lE8bUZPjmLdHJS06hmhoQynx5fF7Af3FAbnkPg6SueIziHMxjKu5ySHCe568VkVt0mv2jT4vj5U8ctz7ua5Gj0MiRBwM93foSBwVsLYz71vdYuTDslBgBHL7pHUVwGC7w1bmTzVXXExndaPAC%2FJos7ggmGg1%2Bnb845DY2IWz5glS17sF2kYVwRyqhQdGOjn00JcUFEYOWzwEh2DJOLoR8suJSqDqgft6R0dLQaUlHZmDCIPKIFffvfH%2B8t5UUvKJy7i7%2BmTD8xLS9BjqkAeLXP%2BUc%2BH1GyOR8q0Y9a6iVO6phYAynQrcRPxuFuWPRzqA%2F%2FT%2FQRBCmuRb0Sngfwqx%2BYdBr5tLjHbXvF2AJnFv2oCRFD5S%2FamW7YDJN%2FjliWxIeW%2FxGBz226JOUm%2F8WBr4Uz6lSJ8u%2FOfibUJmk%2BAWlzLcaduce8Fir5ifVQXE7yDd04%2BPIcrQBPnxLNuWCx4rlH2rXhE%2F%2BuU6b6Bh5H7kewj41&X-Amz-Signature=06b7996b97472753382f51e2796648007b74e0d5957afec8c74ea164444e1847&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VT77AEN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkdXXt2I2sQleYN7n%2FUd2RwCDjAX8KFfXqmC%2FUdgCiXwIhAJTBvYFxgl%2FjxWj2Dw4l%2BpK6BjVOEW6A2yPO0dY7AK3iKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyk4Z7BOqjDuV1LI4oq3AOPLOANznEus2r5b5%2FXSfpqOnuUh9jmpna%2FBLsNspCCJxTZu%2BqLfvR3isISrEu6bAx9B5dZ1eJSgTRVgaI28Leuozm0LAH06K46OVyBfbx07fi9DOZRhF4%2Fe5Z6%2BP69KPSKVVTY4uJlUnF1mxm2QTTcLyrLCXbta%2BzVPp9kAOZuevzA4ZtyEABHytsweSLNvBFgp7GtuxrdGe9HVJSbhQZwRlEhzMeLeKcZvB%2FO5r6aYCj23AMoptpJVPduUpNA9nkhqznxB5tU5l4aJEb5%2FOaKNx2LY58uWUQAhq5ocSrRnTXRvrxPGuINw88%2Fq2VsZMhEil0ar%2BXzetqRpD51sqRwBzOSRa93pQmRJVzov2EH7c2asQUumI9lE8bUZPjmLdHJS06hmhoQynx5fF7Af3FAbnkPg6SueIziHMxjKu5ySHCe568VkVt0mv2jT4vj5U8ctz7ua5Gj0MiRBwM93foSBwVsLYz71vdYuTDslBgBHL7pHUVwGC7w1bmTzVXXExndaPAC%2FJos7ggmGg1%2Bnb845DY2IWz5glS17sF2kYVwRyqhQdGOjn00JcUFEYOWzwEh2DJOLoR8suJSqDqgft6R0dLQaUlHZmDCIPKIFffvfH%2B8t5UUvKJy7i7%2BmTD8xLS9BjqkAeLXP%2BUc%2BH1GyOR8q0Y9a6iVO6phYAynQrcRPxuFuWPRzqA%2F%2FT%2FQRBCmuRb0Sngfwqx%2BYdBr5tLjHbXvF2AJnFv2oCRFD5S%2FamW7YDJN%2FjliWxIeW%2FxGBz226JOUm%2F8WBr4Uz6lSJ8u%2FOfibUJmk%2BAWlzLcaduce8Fir5ifVQXE7yDd04%2BPIcrQBPnxLNuWCx4rlH2rXhE%2F%2BuU6b6Bh5H7kewj41&X-Amz-Signature=81b3be3fa43fafb2a11f13833dbb766b1e8e7aec14c377a11993f79e28a9e155&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
