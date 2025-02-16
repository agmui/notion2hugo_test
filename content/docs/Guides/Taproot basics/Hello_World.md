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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX2B44I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCBZZVdAH3nOZ%2FINR5j8GFEXdzIWgjm5NbeiPyEhR4DiAIgP1y1i2WHOaEHDSjsXbUBEf5EkM8uTEgrXmrk6aQc0ZIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJKOtQaycIRWm0HNuyrcAy4UfwgIcVz2KjfLvKPRyGB0ri1yhTVwMd%2FVSXE9CCT9UcFQ7zWF6qXHdf0fniRtpcCCSpw4OadI0dzfb2vCE9MXZa5TEZI34ZbUPeEeW22FP%2FkTt9EPGaZp6%2BIoUFYQwlivZzU99VgaiYrhOyNk9LnXEISeeTkHQ8QueJf4176qs1S%2B8x3%2Fc6zRKIp6S%2BpzKFdOgQAyIGAkGuz6IRp71drV0ys0dCGEsvPMHzuVD2PFWVsVPJydSWNJJYKLTqEcF%2FFrZIkkNNlY7UhB71PYTRPhsnbA7IyHG46APT9uxRh435WqW7J5oRpPgpfUnZ7VZdk1vec4CD6gQF3la46lm%2Fv0x11vjntdXKLh5T0%2F7rO5LRPj00L9LnP0Zj1hXU6hzXqxvu3AO5vtA%2B9k41d40zcrgKS3q14SHxJPlD3zHsfd%2BSupSz%2F4U6trtvmd6cKQl%2BVtu5zNtn%2BjwXebAOjdjMGOTi7gifYSm0PneUCRVExmjopXq7HDDmFxRgyoUg3mixj5cZhkaIQfLYKs%2FCFbMDwuxMi5k1D6K%2Fp3EV5kFoVU6BN7%2Fw6mmfpP8A6hWYq5fdeCE%2BqsEwjiebnuGWu187PTGoBNPymEyqrVl4lL0Mqd72U2NP%2FEYvnnkIzcMLmkx70GOqUBm4qawTahSIJrv4lL96bQBUUEZCW8OsRbLRI%2Bem6BYEWU2dkYJZR%2BJIbBhMr0i%2Fr4peW3x%2FA8l7LNk3kpi2kHTJ1dOBqnEp%2FeNx%2FaLlJtsABFAN4clm1gJ6lAlxcQWyDajPppRv7HyLQZHsxk4Lw10F9Z%2B1jpLl9XHxcP%2Fz7ZRtUVFcjYgmdFgDy4lz3HycXacjvt7YQyYjvT9Al2dMF824zlRZHZ&X-Amz-Signature=a319f25bd23642da3e92563eb43788dc0d8a7172bc529b82de8125813afe947f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX2B44I%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCBZZVdAH3nOZ%2FINR5j8GFEXdzIWgjm5NbeiPyEhR4DiAIgP1y1i2WHOaEHDSjsXbUBEf5EkM8uTEgrXmrk6aQc0ZIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJKOtQaycIRWm0HNuyrcAy4UfwgIcVz2KjfLvKPRyGB0ri1yhTVwMd%2FVSXE9CCT9UcFQ7zWF6qXHdf0fniRtpcCCSpw4OadI0dzfb2vCE9MXZa5TEZI34ZbUPeEeW22FP%2FkTt9EPGaZp6%2BIoUFYQwlivZzU99VgaiYrhOyNk9LnXEISeeTkHQ8QueJf4176qs1S%2B8x3%2Fc6zRKIp6S%2BpzKFdOgQAyIGAkGuz6IRp71drV0ys0dCGEsvPMHzuVD2PFWVsVPJydSWNJJYKLTqEcF%2FFrZIkkNNlY7UhB71PYTRPhsnbA7IyHG46APT9uxRh435WqW7J5oRpPgpfUnZ7VZdk1vec4CD6gQF3la46lm%2Fv0x11vjntdXKLh5T0%2F7rO5LRPj00L9LnP0Zj1hXU6hzXqxvu3AO5vtA%2B9k41d40zcrgKS3q14SHxJPlD3zHsfd%2BSupSz%2F4U6trtvmd6cKQl%2BVtu5zNtn%2BjwXebAOjdjMGOTi7gifYSm0PneUCRVExmjopXq7HDDmFxRgyoUg3mixj5cZhkaIQfLYKs%2FCFbMDwuxMi5k1D6K%2Fp3EV5kFoVU6BN7%2Fw6mmfpP8A6hWYq5fdeCE%2BqsEwjiebnuGWu187PTGoBNPymEyqrVl4lL0Mqd72U2NP%2FEYvnnkIzcMLmkx70GOqUBm4qawTahSIJrv4lL96bQBUUEZCW8OsRbLRI%2Bem6BYEWU2dkYJZR%2BJIbBhMr0i%2Fr4peW3x%2FA8l7LNk3kpi2kHTJ1dOBqnEp%2FeNx%2FaLlJtsABFAN4clm1gJ6lAlxcQWyDajPppRv7HyLQZHsxk4Lw10F9Z%2B1jpLl9XHxcP%2Fz7ZRtUVFcjYgmdFgDy4lz3HycXacjvt7YQyYjvT9Al2dMF824zlRZHZ&X-Amz-Signature=ac231c10d70c9c853ad1a8aa6ca9456c9ad06193946ae528b21f07a89d750afc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
