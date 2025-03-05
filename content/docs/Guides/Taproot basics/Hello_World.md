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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJEMZE6F%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6tgJP6zi35VNGYh6vZzIRWE3OE%2BnCsozjTWV21%2BDOsAiEAzd%2B4IoUuiO0CSaPX9SyW6SDnxjik84yfa9Bi2qO%2BY%2F4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMWD%2FpRmo2bqae1BzyrcAwyuFf9yYv0VyVDiiUK3DQgyUg7Y%2F%2Fx85YS2ewrVl9iqybD6RoAu36HwcMan6YKocTPfptFHhl4PVyQeBI21br%2Ft4gMjnb5VVdW6o3NIhwNV0fTnp9TlPwJ2vcHW57vCxXO7I8kIIH6bqkYIG4Mam1Z4BTXxDZzusjsEB01kZHg7tAz0nH5b1CGXXGH0Ym2btVMHKWQEEUM0l3lIHAV%2BPQllu2Q0iLKDjOn0WyZjIsKC1OPYfHGwOfMmwMqpupG6T9P9CY1uYFmyb0rfJXy89s8qxFPA6XI8KBmAhO%2BCQYDByjELV2CrbyMkoY9Bw9HptjQy0rAr8odn6%2BWs0f1cblA60TDsa61TWG%2F8TRBmFU5FUOelIhwXmNzRXp0CrhUP%2BtuBzb1LsCdX1uU%2F4adyP4ezY%2BIv%2BLIq1HQXCOXAi7FTOR14dNGqS8NnFdyIZZge5MDM4x02T9c8UfQzJRH2sVttlSEiZ8%2B4wTWvvTY114Syc5su3APyWOLMrqcX6VPrQdsnTQvEbOw%2FpolIU7%2BEx6gves%2BIu%2BWNv2RkJvFIOdVQSMV4qB7XKFf5bDO4I3XmghOm6ilOnSUgNVTWnZhpcv5TDh51sZfNTPw5QaFoIwxgPuia%2B%2FP%2Be%2FZuCea9MNiWob4GOqUBYLJb0Qr8J%2BQQfkX1C1U5%2BkMRoSnrCjrWE8Mf9zLi0kr1eCcSNRaGKRUc9vDq2B74mqarBz38wtWxjj7NI3HjkBZAoGqgn1oxMulByeeYB0lkxiFu2nBNV60%2FBotvJRTUHoyyQgtdG4HhAFucPRHWuMFsznkWpS7xJOFURWNJdeY4MAgD%2BFnJ36Cj0PMcanPgHX1CN6r12qylVqu4uen%2BLh7bCVvN&X-Amz-Signature=b8b352a0e059bc3779417080fffcccabbd65d181f667cf68c650f86155cc73a5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJEMZE6F%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6tgJP6zi35VNGYh6vZzIRWE3OE%2BnCsozjTWV21%2BDOsAiEAzd%2B4IoUuiO0CSaPX9SyW6SDnxjik84yfa9Bi2qO%2BY%2F4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMWD%2FpRmo2bqae1BzyrcAwyuFf9yYv0VyVDiiUK3DQgyUg7Y%2F%2Fx85YS2ewrVl9iqybD6RoAu36HwcMan6YKocTPfptFHhl4PVyQeBI21br%2Ft4gMjnb5VVdW6o3NIhwNV0fTnp9TlPwJ2vcHW57vCxXO7I8kIIH6bqkYIG4Mam1Z4BTXxDZzusjsEB01kZHg7tAz0nH5b1CGXXGH0Ym2btVMHKWQEEUM0l3lIHAV%2BPQllu2Q0iLKDjOn0WyZjIsKC1OPYfHGwOfMmwMqpupG6T9P9CY1uYFmyb0rfJXy89s8qxFPA6XI8KBmAhO%2BCQYDByjELV2CrbyMkoY9Bw9HptjQy0rAr8odn6%2BWs0f1cblA60TDsa61TWG%2F8TRBmFU5FUOelIhwXmNzRXp0CrhUP%2BtuBzb1LsCdX1uU%2F4adyP4ezY%2BIv%2BLIq1HQXCOXAi7FTOR14dNGqS8NnFdyIZZge5MDM4x02T9c8UfQzJRH2sVttlSEiZ8%2B4wTWvvTY114Syc5su3APyWOLMrqcX6VPrQdsnTQvEbOw%2FpolIU7%2BEx6gves%2BIu%2BWNv2RkJvFIOdVQSMV4qB7XKFf5bDO4I3XmghOm6ilOnSUgNVTWnZhpcv5TDh51sZfNTPw5QaFoIwxgPuia%2B%2FP%2Be%2FZuCea9MNiWob4GOqUBYLJb0Qr8J%2BQQfkX1C1U5%2BkMRoSnrCjrWE8Mf9zLi0kr1eCcSNRaGKRUc9vDq2B74mqarBz38wtWxjj7NI3HjkBZAoGqgn1oxMulByeeYB0lkxiFu2nBNV60%2FBotvJRTUHoyyQgtdG4HhAFucPRHWuMFsznkWpS7xJOFURWNJdeY4MAgD%2BFnJ36Cj0PMcanPgHX1CN6r12qylVqu4uen%2BLh7bCVvN&X-Amz-Signature=385c712d92d69a8232c83082be4d89d2a8f920e61fce37d1141ef0ad78c8ef5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
