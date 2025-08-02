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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=4cf60587ea7624743af064020ea8c1cef57f37632f67dd34409fff2249fa73ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=2135800902d46111306392bf6901dc9f6ae0d1ce19901906da239c90a1a9da0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
