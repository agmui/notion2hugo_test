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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466453TO46O%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBZXCB82hjPQwxn7O2hZTkPqj0zUZm9BbMCs%2FUucmDLwAiEAjBkcLMWrfhnFctiBxJRLhNH1OpyeuFD6U%2BMxyMG8c28qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmPKFVOc%2ByBNaG1VircA1OHqkrF33AxQNG8Hrfl4C9O34gMFoK%2FEWOxvYIJICnM%2Fzwutc%2B9x4%2FX%2FzFaAgv0wjdfJtMDd%2Burg9Qd%2FI5CUS2JbFrG66dnj7Fu2VUXvOdZjCTHc6mKEGbDl4H9kd9FHPQ47%2BBJRdAiP5iGfzeFhph%2BQPSR000xnNdkGOYHwN2bVz4HveRBZzNWUFKijZ8GQB17ttBTOrCWjlhv1uSTkri6Wo0RIp8ETqLv%2BIvUfi%2FBkm2SLvYz27%2Bp19tsLnExRWSG5WnwOnt4AmSC10pb5CtEAwFVW9jaOln68sAlWBllQOX4mJC49ELKI73sxCNm0%2BWAF5aCoA%2BaA3mvljJpMwAhnQSGRcYR7ZjxCjvCAHWJbE0ezqUlVFjd0PIFeSmT7A6V59HCa5OHFQ0DIkHgF52b7ln0uiJZmu5oz2cdQVcChANwctBiXvyloc1OpAIU3R2RhRXxHA7kO1JVwJixcOsWCvsByYyUYnimow%2FC%2BCZoPpo7OGjDvJldJp6itBPSNJ0ohI6Jikrr3YbKr3LuQqQoAfJWrz0nRbUCaZHaxd%2Ffr7g%2FE39Cxch4EybuFRK%2BUZEZCfd8ptNAny1XyvpfqH14w8x3pjjP9b4VQxLkJWbGeN7ZoYZA6zy0aXw3MN6ix74GOqUB%2F4Ion04Rvlh2iLaytF8oD%2BVTHV5Gn%2BjT%2BORZO9AOf4try3djebPn14AJbK1raV38OVwWiMjiB2xXniL2sB76xieBiK8ht%2BZnNS0ilaneZ5P0CtFQnxt54k%2FFL6HLqzEWvGr%2F%2Firzj8tf0J5UXKLPOhfv%2B1dMZd%2BlJ8zifg5S7QyDLMYTfbjn4vguElCXvgIvXhHkiTRd%2Fvja5RYbHXJRi%2BtI56lA&X-Amz-Signature=c9634ddd0f30c2a054cf35cf1cef95c1e24ef17cbfe45db9827f1f169ec83704&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466453TO46O%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBZXCB82hjPQwxn7O2hZTkPqj0zUZm9BbMCs%2FUucmDLwAiEAjBkcLMWrfhnFctiBxJRLhNH1OpyeuFD6U%2BMxyMG8c28qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmPKFVOc%2ByBNaG1VircA1OHqkrF33AxQNG8Hrfl4C9O34gMFoK%2FEWOxvYIJICnM%2Fzwutc%2B9x4%2FX%2FzFaAgv0wjdfJtMDd%2Burg9Qd%2FI5CUS2JbFrG66dnj7Fu2VUXvOdZjCTHc6mKEGbDl4H9kd9FHPQ47%2BBJRdAiP5iGfzeFhph%2BQPSR000xnNdkGOYHwN2bVz4HveRBZzNWUFKijZ8GQB17ttBTOrCWjlhv1uSTkri6Wo0RIp8ETqLv%2BIvUfi%2FBkm2SLvYz27%2Bp19tsLnExRWSG5WnwOnt4AmSC10pb5CtEAwFVW9jaOln68sAlWBllQOX4mJC49ELKI73sxCNm0%2BWAF5aCoA%2BaA3mvljJpMwAhnQSGRcYR7ZjxCjvCAHWJbE0ezqUlVFjd0PIFeSmT7A6V59HCa5OHFQ0DIkHgF52b7ln0uiJZmu5oz2cdQVcChANwctBiXvyloc1OpAIU3R2RhRXxHA7kO1JVwJixcOsWCvsByYyUYnimow%2FC%2BCZoPpo7OGjDvJldJp6itBPSNJ0ohI6Jikrr3YbKr3LuQqQoAfJWrz0nRbUCaZHaxd%2Ffr7g%2FE39Cxch4EybuFRK%2BUZEZCfd8ptNAny1XyvpfqH14w8x3pjjP9b4VQxLkJWbGeN7ZoYZA6zy0aXw3MN6ix74GOqUB%2F4Ion04Rvlh2iLaytF8oD%2BVTHV5Gn%2BjT%2BORZO9AOf4try3djebPn14AJbK1raV38OVwWiMjiB2xXniL2sB76xieBiK8ht%2BZnNS0ilaneZ5P0CtFQnxt54k%2FFL6HLqzEWvGr%2F%2Firzj8tf0J5UXKLPOhfv%2B1dMZd%2BlJ8zifg5S7QyDLMYTfbjn4vguElCXvgIvXhHkiTRd%2Fvja5RYbHXJRi%2BtI56lA&X-Amz-Signature=27dad60805273d6d53c878b07d6fcf27d453b2700f6b5ff60b8575c72bde8c37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
