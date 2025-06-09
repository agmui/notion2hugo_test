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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHR5HHDQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FluOt9G1wW%2F1n8uAeZJiwAxTDCZm0GwJqn12XsHTDQIhAMDOgwpN5zRpGC6hlxEIwCToTPbYvmAZg%2BWq17D9C679KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBBmWM49FTCXatePgq3API2knCgoK%2B94T2GYppbgXCzkKpMnadI%2B6znteJajqVr3AXADLFLOJln%2BR4%2BfZ16HLZqp7QFl3M4OQ6gAya8Gql2UGQNvJdccbgue1guHPK8AWgCn7lPrKq1AvBQV2UCICCqbmA00UUO%2BJ4NjHZH%2Fgw5aNPl5h%2BrPeV%2FLxcbhO3ekyrxSw8xPoaD1z9UWDdaVLUd40L8i%2Fe7k1s8cn%2BwmsOUuGchn377yoTcZFLPcWYWIXiYP9NQt1bl1BFD5EzGXl1XkCSqXR3a%2B3VGrVeCXK89PAVRA8JVH69azrQpsDqZ4OngtPFzmSZF2hUVkJRTmd8wPu69lc8wQrHHFVuUHDisqjg%2F6md0cfaT0O9msg01zxf7ixurICyDQFowo4AGi4VQkQnm8PlO4P%2BwIL%2BZhCyLH06kXQU8uWbjjBIr8wCwUmMxhR9j3vXrVbamnQZ%2BHX%2BZo5eof9QU8VVzKzH7lYGbl3lNPK9jUmV6Ef1r4Jh5kqs%2BBhYTELlg0BMZCoCgQjjGEcfXyMPTXCzTQSBVrLhReEGqX6maudiXq9fJCad56aDDJPWhD961waCtVipNYbyQMOBUWcntN1BTVvLWHJ%2BloAggX2d5o%2BRdye5n3EziZ20DnBtR1SnRhJSSjCD%2BZzCBjqkAYUu2xiTvmKhTmmNSXPY5ftW4CTBOHX7XLBp0kWqkrvjeCqUd3AvMlLdz7QRFLjL36q4wrMfMh86qWMtDTBvIa0DeqkNCcYGOSPW7dugM1s%2F9ka7I2oblq8QK7xakegXpKFq8bPWUOE%2B0UH9VNGdSiy4sp7AEAs6S5eX7DKHcyZSgUYdHxPfWej7ibxO%2BlsSi33tt5Yzd1t8vHhU4%2B%2FyGTsuzkth&X-Amz-Signature=f8af981f3788432dceb6dc68becfb6b17d31d3a7efd7360480b5e4b43f5bf3d2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHR5HHDQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FluOt9G1wW%2F1n8uAeZJiwAxTDCZm0GwJqn12XsHTDQIhAMDOgwpN5zRpGC6hlxEIwCToTPbYvmAZg%2BWq17D9C679KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBBmWM49FTCXatePgq3API2knCgoK%2B94T2GYppbgXCzkKpMnadI%2B6znteJajqVr3AXADLFLOJln%2BR4%2BfZ16HLZqp7QFl3M4OQ6gAya8Gql2UGQNvJdccbgue1guHPK8AWgCn7lPrKq1AvBQV2UCICCqbmA00UUO%2BJ4NjHZH%2Fgw5aNPl5h%2BrPeV%2FLxcbhO3ekyrxSw8xPoaD1z9UWDdaVLUd40L8i%2Fe7k1s8cn%2BwmsOUuGchn377yoTcZFLPcWYWIXiYP9NQt1bl1BFD5EzGXl1XkCSqXR3a%2B3VGrVeCXK89PAVRA8JVH69azrQpsDqZ4OngtPFzmSZF2hUVkJRTmd8wPu69lc8wQrHHFVuUHDisqjg%2F6md0cfaT0O9msg01zxf7ixurICyDQFowo4AGi4VQkQnm8PlO4P%2BwIL%2BZhCyLH06kXQU8uWbjjBIr8wCwUmMxhR9j3vXrVbamnQZ%2BHX%2BZo5eof9QU8VVzKzH7lYGbl3lNPK9jUmV6Ef1r4Jh5kqs%2BBhYTELlg0BMZCoCgQjjGEcfXyMPTXCzTQSBVrLhReEGqX6maudiXq9fJCad56aDDJPWhD961waCtVipNYbyQMOBUWcntN1BTVvLWHJ%2BloAggX2d5o%2BRdye5n3EziZ20DnBtR1SnRhJSSjCD%2BZzCBjqkAYUu2xiTvmKhTmmNSXPY5ftW4CTBOHX7XLBp0kWqkrvjeCqUd3AvMlLdz7QRFLjL36q4wrMfMh86qWMtDTBvIa0DeqkNCcYGOSPW7dugM1s%2F9ka7I2oblq8QK7xakegXpKFq8bPWUOE%2B0UH9VNGdSiy4sp7AEAs6S5eX7DKHcyZSgUYdHxPfWej7ibxO%2BlsSi33tt5Yzd1t8vHhU4%2B%2FyGTsuzkth&X-Amz-Signature=16c5f09aebda48cf62336bd2f16502bd76394a3e92f5f1294c01f9fc029c8da9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
