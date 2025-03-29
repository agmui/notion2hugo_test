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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7LANT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCHbqCYc1R4knzka%2BuGXo%2FJsp7Pgo7rlXAZLrHqyaFZMAIhALJOsxcmmxw2OkRTANnlztWUHuFVGbHgQZSMnRLdLDvgKv8DCHUQABoMNjM3NDIzMTgzODA1IgxCDjpc1WAHllnw5kQq3AMtrHIBfOtaTw2p9zMZSsEzvsU3%2FM6XWY9JsWRnwmPBjJrUdkUgfzLJbyUNZSnbRhjP2R28I6KudGQAtVgXj1CukwvCKTGxSm7f44fQKE4lIg3lfcBRLlndH8ulrxQZSWOzXyaOFFd5JZ5w3E3yANOFZpUPZE20fjHIXi0jGVZ1ZeJ%2FXzmmfHmVIM7dxj%2Fsu8PN3SA2%2BLm0sFhDbUBeyLGUpsroLPxnM6a3%2BXZhPBcZGZ80ZrqHm%2FFS5jgxHo5eBcEL4XsoA4bxbGeBbRBiBJMqRTu7dbMP4D0lPinTM9ZKs5Gs0mh71qoyK6%2F9TCzjHyHn%2F2kVVLLP94aH2p2SGjx40t%2FlAvw6S6JiQBa3WQbSGu2U5KdI8w5fM4gx%2F%2FVn3UUwkylnFSUJK36P6AyKA28DgSrOxt7mv4ZoHGht0y%2F9O00Y3wA65nQfE4BSrkiIySGVILvlLgHBrqCPHN3i5qOLzEhB8zOCNLxt%2FwAY7LGc1lb1VQ1pm9634lVHP8Fdtej7PwZNiU5lMMqxbr%2F%2Bnmfz01bxSvQgh2DoNEfNt5lcaAvYR3oOk968Yx0Huf7wSyYFR2hWi5a6izsnfEAJz1jpcld385D33bOij0xZLt3BOhmu%2F%2B%2F4lcJ984KYDjDYtZ%2B%2FBjqkAQs5FhjA5PPcTuJWcZ1%2FvtH0rdaoisgxnKyUXS28ZdmP8%2FbehprbJnBBgjtfWWuNLQfEehCXpf73574Fp1Ceju6O2w2FgP5b9t4Yh9RzsjgElj2mezLHteCNZPpdPsT5m%2BqmabCVQ4pjDwANRV3LsuUI6KyGmwySfjmZ0ub%2FxTiqZtwjlIQ%2FTOFt38A9NnjS3hGyEIqJCwR%2FXUz%2F2ma6adOaMiQS&X-Amz-Signature=9d6700cb1ca473e77bf01ab4294c6c6bcf6e4d1142ebc161787addddd0b26b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7LANT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCHbqCYc1R4knzka%2BuGXo%2FJsp7Pgo7rlXAZLrHqyaFZMAIhALJOsxcmmxw2OkRTANnlztWUHuFVGbHgQZSMnRLdLDvgKv8DCHUQABoMNjM3NDIzMTgzODA1IgxCDjpc1WAHllnw5kQq3AMtrHIBfOtaTw2p9zMZSsEzvsU3%2FM6XWY9JsWRnwmPBjJrUdkUgfzLJbyUNZSnbRhjP2R28I6KudGQAtVgXj1CukwvCKTGxSm7f44fQKE4lIg3lfcBRLlndH8ulrxQZSWOzXyaOFFd5JZ5w3E3yANOFZpUPZE20fjHIXi0jGVZ1ZeJ%2FXzmmfHmVIM7dxj%2Fsu8PN3SA2%2BLm0sFhDbUBeyLGUpsroLPxnM6a3%2BXZhPBcZGZ80ZrqHm%2FFS5jgxHo5eBcEL4XsoA4bxbGeBbRBiBJMqRTu7dbMP4D0lPinTM9ZKs5Gs0mh71qoyK6%2F9TCzjHyHn%2F2kVVLLP94aH2p2SGjx40t%2FlAvw6S6JiQBa3WQbSGu2U5KdI8w5fM4gx%2F%2FVn3UUwkylnFSUJK36P6AyKA28DgSrOxt7mv4ZoHGht0y%2F9O00Y3wA65nQfE4BSrkiIySGVILvlLgHBrqCPHN3i5qOLzEhB8zOCNLxt%2FwAY7LGc1lb1VQ1pm9634lVHP8Fdtej7PwZNiU5lMMqxbr%2F%2Bnmfz01bxSvQgh2DoNEfNt5lcaAvYR3oOk968Yx0Huf7wSyYFR2hWi5a6izsnfEAJz1jpcld385D33bOij0xZLt3BOhmu%2F%2B%2F4lcJ984KYDjDYtZ%2B%2FBjqkAQs5FhjA5PPcTuJWcZ1%2FvtH0rdaoisgxnKyUXS28ZdmP8%2FbehprbJnBBgjtfWWuNLQfEehCXpf73574Fp1Ceju6O2w2FgP5b9t4Yh9RzsjgElj2mezLHteCNZPpdPsT5m%2BqmabCVQ4pjDwANRV3LsuUI6KyGmwySfjmZ0ub%2FxTiqZtwjlIQ%2FTOFt38A9NnjS3hGyEIqJCwR%2FXUz%2F2ma6adOaMiQS&X-Amz-Signature=a611d5b80354462096816d6d392a6c45cf7093c2f2ddaddd8dc4eeea3435b69f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
