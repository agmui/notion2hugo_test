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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGGFC2G%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGMQsFfl%2FFhzKtTIDv4dMxZ2DiOFfmgZlN0wu9pzdI1zAiEAwpWE%2BWyzdWXw877ENWkKArVGg2uy4eI5gikDnNStBe8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbbTCauYF0oBMgP2CrcAzyeUQdI4lx5kVmNWU2ibWirlkpKqpeO3JewKnDYz2dqC88qh%2BydEnQokH9vDMP9JB2YP3TMZSO35Tnmp86AiWnhGMPaAbOtI2B6D99z8e9upD33HR5bWwnHIbk%2FG%2BbGwLs8v6YocC7v7H55e6Zafbs5Uze2btrvWHZoyG%2BNXTC8IBV3uf3wIiU5f14hhXpJjUVRGHhYwuK2RnuRnj%2FuZRwYwQA5bfrKX6iWKpttBLHs0KTV4lfjsfJk96CdmxshSnQ28dYKNzm7rgV7agUy4mKZRHT4P12ERxhJiYxMAyX9v3BojhpmLDRpp9kMqSWhqeQQDgh9EmppI3X4Cd2u2KhkX3bqC7xwFcFBFC25T7FfH%2FV2guildSRPzStzZm6W8EGguym6LHuuM%2BduIQKCb3Fq0RtsvXSteatDxtfh5l8bJvvuiYpP5ksQhimkI9w5JCU4neu8EvXwiSwq4Jk4ctbbfIagpIqDyBjYvuDldB0Mw%2BCBmsSbXimO1xBnC3T3t09z91dEC0NkOnPhSN4VfQevvNBe4Y83X3S7OnSFrDF6oj8L7u9dO%2BhEFafggicQ%2FYf7eplnm0li2kOECnzsbFDAm%2FqX8%2FK2ZREd5WVjDV%2BGoHQ%2BnhqU1zDixkBvMIjps78GOqUBq5qX0G%2BFx43%2BI83KxG0YMhMsCqvnw2wQvB1CqCQDwt0R8u8PDGQaTLNJBJwxnMfv%2FdRS%2Ftk7eFbSCAiEYbvLjzCoOFBN2G4mFr8zHqMztmheH89%2F9nQmzmssWmkdWSGllml5O8WRqcGhbUqTKOzECa1hemDkx5t3sp4AaNQJNM0CS7icfcjNq5qcE6TH0ikILxeB0BqjO9NDzlkG0%2B6WHSf1g3q0&X-Amz-Signature=611ebcd9e640adc2a113699ef6b3dfd7bf56034c25b661f286cfa8fdd8e9efd0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGGFC2G%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGMQsFfl%2FFhzKtTIDv4dMxZ2DiOFfmgZlN0wu9pzdI1zAiEAwpWE%2BWyzdWXw877ENWkKArVGg2uy4eI5gikDnNStBe8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbbTCauYF0oBMgP2CrcAzyeUQdI4lx5kVmNWU2ibWirlkpKqpeO3JewKnDYz2dqC88qh%2BydEnQokH9vDMP9JB2YP3TMZSO35Tnmp86AiWnhGMPaAbOtI2B6D99z8e9upD33HR5bWwnHIbk%2FG%2BbGwLs8v6YocC7v7H55e6Zafbs5Uze2btrvWHZoyG%2BNXTC8IBV3uf3wIiU5f14hhXpJjUVRGHhYwuK2RnuRnj%2FuZRwYwQA5bfrKX6iWKpttBLHs0KTV4lfjsfJk96CdmxshSnQ28dYKNzm7rgV7agUy4mKZRHT4P12ERxhJiYxMAyX9v3BojhpmLDRpp9kMqSWhqeQQDgh9EmppI3X4Cd2u2KhkX3bqC7xwFcFBFC25T7FfH%2FV2guildSRPzStzZm6W8EGguym6LHuuM%2BduIQKCb3Fq0RtsvXSteatDxtfh5l8bJvvuiYpP5ksQhimkI9w5JCU4neu8EvXwiSwq4Jk4ctbbfIagpIqDyBjYvuDldB0Mw%2BCBmsSbXimO1xBnC3T3t09z91dEC0NkOnPhSN4VfQevvNBe4Y83X3S7OnSFrDF6oj8L7u9dO%2BhEFafggicQ%2FYf7eplnm0li2kOECnzsbFDAm%2FqX8%2FK2ZREd5WVjDV%2BGoHQ%2BnhqU1zDixkBvMIjps78GOqUBq5qX0G%2BFx43%2BI83KxG0YMhMsCqvnw2wQvB1CqCQDwt0R8u8PDGQaTLNJBJwxnMfv%2FdRS%2Ftk7eFbSCAiEYbvLjzCoOFBN2G4mFr8zHqMztmheH89%2F9nQmzmssWmkdWSGllml5O8WRqcGhbUqTKOzECa1hemDkx5t3sp4AaNQJNM0CS7icfcjNq5qcE6TH0ikILxeB0BqjO9NDzlkG0%2B6WHSf1g3q0&X-Amz-Signature=99748f95633e61200fa1ef1fe4b42be2d3b8b6ec7b0251606573ae872a09df2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
