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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOJQ3Y5X%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeKx0P8w2fZ5ZMxYn3BJwVjM%2FLaNYLh8rmg5vpN%2F0X0QIhAIubwWPZJ8y03fi8pNV%2BdrmvrVKDj2ByBN0K9qH0STXwKv8DCAMQABoMNjM3NDIzMTgzODA1IgyOHxXWQOXSAx%2FFVy0q3APiBT%2F5ykiL4iik0yqDSLCjqU%2BakElStTRCofWn9cWXOoWOZmeM7Drbm8IcJfpuMYMxeFGpLNhe86Q8qmLTYSoBvbEXYIAKgLcQDwblS31rlHQ92fydi7WEEUV28K1mXnujA63QrOCCQuHHXGPHIy4aooaDxq58g8lmuiZSuYzW%2F7PTY1952vVAOwB4ISxPD92xdabDNod2uOMMBMwohAFMhBJ9jaPlGacZeb%2F%2BuII%2B5ZmZaCpzxc5m6P7Ei0FE1zVdEgzlB69rCbC0vaS%2FUWwOTczO4qUECBuQ9Z8tNxG0PZhmUHkle3LIh1fPnABU4jGqaxt0xc1f%2Fqm2%2BmrE1xUgi6jSHNcisvl7OHTL4rfZTFUq4A0sChtB1cFBrLTwz7LOPw9Ksr1pPP0J4JidLRPTjfURnAvVa6CjRFAf%2FnT4NW3T%2FkSGt4e7%2BpyRcx38ukj2JvkOYdQvshml6BuDj8ZFhqGnI0QrxkTRJWupqpUJbf3knMq3aMsFRN5odokbG8J9mhWHs77UVh4bqd%2B4GW0c7XYOIb7Qdt3llMiuV0n8GVi710ch64VzBzL8jyC%2BMYde1J05b7p%2FNQ5%2Bn7HsjDQzKP9KJdzBUBUX%2FAaA%2FKtuXs4pgdtQydLfTnFTyTC2upzSBjqkAR%2FN0y12ZmWz0vPKhOwy8a9n0ORZ2ozqK7UP%2FnPXYbSR%2B0%2BSrYX%2FLSGP7YlUl4RAcawNm9oQwDv4a1IXWYio18r%2B2Ea3EECTgqAHeE7emdcaFuODONSc0gGJe0HZ5%2BK1c5GKh4cCzeIujmvzPsrhorCwLUu%2FFkv5JZrmbO0cCY8AXCDnT%2BqFSfF1wFpQJnMrRf%2FpPIV4YE%2FYppBXUL0Z%2Bx4oQSng&X-Amz-Signature=b831724236ca0b77d43518ca708c32030c45a980d034b0c188433d0267f7f0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOJQ3Y5X%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeKx0P8w2fZ5ZMxYn3BJwVjM%2FLaNYLh8rmg5vpN%2F0X0QIhAIubwWPZJ8y03fi8pNV%2BdrmvrVKDj2ByBN0K9qH0STXwKv8DCAMQABoMNjM3NDIzMTgzODA1IgyOHxXWQOXSAx%2FFVy0q3APiBT%2F5ykiL4iik0yqDSLCjqU%2BakElStTRCofWn9cWXOoWOZmeM7Drbm8IcJfpuMYMxeFGpLNhe86Q8qmLTYSoBvbEXYIAKgLcQDwblS31rlHQ92fydi7WEEUV28K1mXnujA63QrOCCQuHHXGPHIy4aooaDxq58g8lmuiZSuYzW%2F7PTY1952vVAOwB4ISxPD92xdabDNod2uOMMBMwohAFMhBJ9jaPlGacZeb%2F%2BuII%2B5ZmZaCpzxc5m6P7Ei0FE1zVdEgzlB69rCbC0vaS%2FUWwOTczO4qUECBuQ9Z8tNxG0PZhmUHkle3LIh1fPnABU4jGqaxt0xc1f%2Fqm2%2BmrE1xUgi6jSHNcisvl7OHTL4rfZTFUq4A0sChtB1cFBrLTwz7LOPw9Ksr1pPP0J4JidLRPTjfURnAvVa6CjRFAf%2FnT4NW3T%2FkSGt4e7%2BpyRcx38ukj2JvkOYdQvshml6BuDj8ZFhqGnI0QrxkTRJWupqpUJbf3knMq3aMsFRN5odokbG8J9mhWHs77UVh4bqd%2B4GW0c7XYOIb7Qdt3llMiuV0n8GVi710ch64VzBzL8jyC%2BMYde1J05b7p%2FNQ5%2Bn7HsjDQzKP9KJdzBUBUX%2FAaA%2FKtuXs4pgdtQydLfTnFTyTC2upzSBjqkAR%2FN0y12ZmWz0vPKhOwy8a9n0ORZ2ozqK7UP%2FnPXYbSR%2B0%2BSrYX%2FLSGP7YlUl4RAcawNm9oQwDv4a1IXWYio18r%2B2Ea3EECTgqAHeE7emdcaFuODONSc0gGJe0HZ5%2BK1c5GKh4cCzeIujmvzPsrhorCwLUu%2FFkv5JZrmbO0cCY8AXCDnT%2BqFSfF1wFpQJnMrRf%2FpPIV4YE%2FYppBXUL0Z%2Bx4oQSng&X-Amz-Signature=c7fe29c00141d4d45608fc3a32418ff43af06f95e04e9d23c57f3d4f39e9b115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
