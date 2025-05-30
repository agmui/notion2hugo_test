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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MLY3ENS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFX2tBxDJjxZ%2BUxpIXStHGZ1OXxqDjaHtHLh05EA8MCtAiEAvV5qy8ya5pIPI0QQo5NoBF9pKgwYrO9SCJ2ktbHvP2cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPN9hxHHSUyaWePUSSrcA9Weld7fxPmOxOd%2FLbA8IP9%2Bm1V1FhiFGftTIYwAMXn%2BF%2BiTa78KkoolHGtd%2Bk98%2BfX6Y%2FdE4ohcL0SoTCNuz5qNgEV9dallFrB2h%2FUZ2ERsLqY3%2FBeUDnT3rYdZoOoYEKbHFEnJvgEB5hTBMqU%2FEcVpvMPMq%2ByiQjzhbMP%2FaLSnNhBwmIEs87NYmvS%2FgA9VgoKuIrZvoSkICijag6RH6qdcjTQs1rxIuGwJrSy0A6M3pucOt%2B8GibrKP2wjEEe2m5D3fDpnEycklu8y5VxMDgKb8UE%2BiV0hlyb1InZ8%2FuDobUppT1QqqIL%2BwGKgRJ%2FKOZh3tt39duRu7eQ1%2FMiBZgklAQ4yn1qeBPJh8oNZHyOXt7ctxHIUztvmA%2FegqaRYrU5EqEpJ1VKKMupw73omM5mb8LLWbFWBLOp1HJ6MV0AoTzk%2FCjf4vpNcNGPcwotUHfaix1Ss%2BCMv3Wnzvwfw4FQAjjURLGynjryCEnVbiyVm%2Bq0Iq6MJBCEEUmcX3%2BIygbCdJLbYrTVKMIQFeFWsVETMluhjLVygUqaGbuWTWXettpJ%2Fd1u8IbqJJ1NT4Yf731fx4YBga%2BW3HNJpP8uU7m2C8NhRPubYIgsBjhoFatxUNwvLV73X8QpziLE3MLrx5sEGOqUBrQVfrB9MwOBUV0v%2BygSOzClVU3c2MLZ3QmHRN0DG%2BPUsf%2F%2FSJkJUzpR3As4JFMEQ33QKXS0g0Kcq7QAK861N3oDhljYTxSqd5RutCJkWNkonqE9DGRyw8x1fY2c1yYFlGCoVtOfHd0JWr4GORgJAW%2BZ6rUdYZJ90WgWgB1qEnwk%2FGqC2lWpySmhqVThcZR0DNqJ16xp9s7BMEXa4%2BqKdUl0CxXsg&X-Amz-Signature=fba860ea53e8b395b32b402c3c172ec71a428ae31eb08c07198e5fa8e1ad91a6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MLY3ENS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFX2tBxDJjxZ%2BUxpIXStHGZ1OXxqDjaHtHLh05EA8MCtAiEAvV5qy8ya5pIPI0QQo5NoBF9pKgwYrO9SCJ2ktbHvP2cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPN9hxHHSUyaWePUSSrcA9Weld7fxPmOxOd%2FLbA8IP9%2Bm1V1FhiFGftTIYwAMXn%2BF%2BiTa78KkoolHGtd%2Bk98%2BfX6Y%2FdE4ohcL0SoTCNuz5qNgEV9dallFrB2h%2FUZ2ERsLqY3%2FBeUDnT3rYdZoOoYEKbHFEnJvgEB5hTBMqU%2FEcVpvMPMq%2ByiQjzhbMP%2FaLSnNhBwmIEs87NYmvS%2FgA9VgoKuIrZvoSkICijag6RH6qdcjTQs1rxIuGwJrSy0A6M3pucOt%2B8GibrKP2wjEEe2m5D3fDpnEycklu8y5VxMDgKb8UE%2BiV0hlyb1InZ8%2FuDobUppT1QqqIL%2BwGKgRJ%2FKOZh3tt39duRu7eQ1%2FMiBZgklAQ4yn1qeBPJh8oNZHyOXt7ctxHIUztvmA%2FegqaRYrU5EqEpJ1VKKMupw73omM5mb8LLWbFWBLOp1HJ6MV0AoTzk%2FCjf4vpNcNGPcwotUHfaix1Ss%2BCMv3Wnzvwfw4FQAjjURLGynjryCEnVbiyVm%2Bq0Iq6MJBCEEUmcX3%2BIygbCdJLbYrTVKMIQFeFWsVETMluhjLVygUqaGbuWTWXettpJ%2Fd1u8IbqJJ1NT4Yf731fx4YBga%2BW3HNJpP8uU7m2C8NhRPubYIgsBjhoFatxUNwvLV73X8QpziLE3MLrx5sEGOqUBrQVfrB9MwOBUV0v%2BygSOzClVU3c2MLZ3QmHRN0DG%2BPUsf%2F%2FSJkJUzpR3As4JFMEQ33QKXS0g0Kcq7QAK861N3oDhljYTxSqd5RutCJkWNkonqE9DGRyw8x1fY2c1yYFlGCoVtOfHd0JWr4GORgJAW%2BZ6rUdYZJ90WgWgB1qEnwk%2FGqC2lWpySmhqVThcZR0DNqJ16xp9s7BMEXa4%2BqKdUl0CxXsg&X-Amz-Signature=1b484dfb27708d32f09a5a9080db45cba76c4ac1bf4481554954429ccd7bdedd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
