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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5ISLZK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCv6RXcZccWhSE%2BkEC2y3z%2BxA1mtzdKBaQlx3%2BruOjzYgIhAPQaQoHvsPvv7Yrz%2FpXh%2FWPJ3iUxybpRg6IBke4WP8tAKv8DCD8QABoMNjM3NDIzMTgzODA1Igzm3g14X0%2BCKRsniVIq3APqATu%2BwADdzxuNEghMdl4DXhb67gcOwVKAz9rvDfZ%2FLIYGfIUTEARFrrqGY4W5Ut9RcXdL6L7DSRmvtE2dTY1mDM1OfCuQ72OcdIqBPkDWQbvc1a%2F4QaBA8VjCtUkgo3srPR6eddanhjvf3op3ttaJ6owQtNQxRMpiw%2BLGWYnIg5iLRn5FL4mnohrh8HtHqV3v1ziwaqg4VJ6JUMZnwCAKnd0WN99qU6bxM%2Fgdf8kKcHv%2BJ1Z4ChvIUA%2B71kIa%2FCXQDp3r4r9Eh7n0vct9DaAOUwo89Phvo%2FP%2FGC7T0Uh8GrNOv3h77pjaqwsr2Xs7GmSsgPPZhUA%2B997ZklIqXPC11Dlia4DjAu4tKm1ko58T0zw6exB8FomHv4wIrMdKzYsGdMfDD4IzDGe5P83YqVTmwNbRjE%2BoAAZlfeDe5OFXiTsc0siIngF9Ux63xp%2BmSDfKn7TVUxB07VhtINsZDrdKKM3ORR0FMwGEx20QQd2zZ56qRWYQrfXYAmqx%2FM7VHmmDzTqQ4QGCNu0VldidEpZAB12bm7qUgaJdPF9cvu%2Fj8g9NgeIrf82gV24QKUQ7Z3X5CCr6hV0ZwL%2FSuFxYmc1qYCaLwifhLp4ky19uNAu%2BwWRLIfY%2BqP%2FP364X%2FjDTpe7CBjqkAQH1tyV7xFP52vduFngWlfJiSsdHq%2BqbqgTZCgstvPSZbBgd1LplKeYiPTO2uvZiYJqTLFvgkIq7VtEuQf74IM2DdeP5YHBMhfqCjSiB%2B5e9bw3IABpOudni2nDn4XIb1ddq8miCaJol%2B7bIUnAUbo5PHZlnB3HdpfiSgQw3kMB8uwsuszsnHVOX3HxyGPxaPqS4adKsJsidXpVUmmnH9cmdyM9j&X-Amz-Signature=7b420f9f900c7d58127d524d0e16b0bdbc482901e56f2e08e638d3d4e1a6904e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5ISLZK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCv6RXcZccWhSE%2BkEC2y3z%2BxA1mtzdKBaQlx3%2BruOjzYgIhAPQaQoHvsPvv7Yrz%2FpXh%2FWPJ3iUxybpRg6IBke4WP8tAKv8DCD8QABoMNjM3NDIzMTgzODA1Igzm3g14X0%2BCKRsniVIq3APqATu%2BwADdzxuNEghMdl4DXhb67gcOwVKAz9rvDfZ%2FLIYGfIUTEARFrrqGY4W5Ut9RcXdL6L7DSRmvtE2dTY1mDM1OfCuQ72OcdIqBPkDWQbvc1a%2F4QaBA8VjCtUkgo3srPR6eddanhjvf3op3ttaJ6owQtNQxRMpiw%2BLGWYnIg5iLRn5FL4mnohrh8HtHqV3v1ziwaqg4VJ6JUMZnwCAKnd0WN99qU6bxM%2Fgdf8kKcHv%2BJ1Z4ChvIUA%2B71kIa%2FCXQDp3r4r9Eh7n0vct9DaAOUwo89Phvo%2FP%2FGC7T0Uh8GrNOv3h77pjaqwsr2Xs7GmSsgPPZhUA%2B997ZklIqXPC11Dlia4DjAu4tKm1ko58T0zw6exB8FomHv4wIrMdKzYsGdMfDD4IzDGe5P83YqVTmwNbRjE%2BoAAZlfeDe5OFXiTsc0siIngF9Ux63xp%2BmSDfKn7TVUxB07VhtINsZDrdKKM3ORR0FMwGEx20QQd2zZ56qRWYQrfXYAmqx%2FM7VHmmDzTqQ4QGCNu0VldidEpZAB12bm7qUgaJdPF9cvu%2Fj8g9NgeIrf82gV24QKUQ7Z3X5CCr6hV0ZwL%2FSuFxYmc1qYCaLwifhLp4ky19uNAu%2BwWRLIfY%2BqP%2FP364X%2FjDTpe7CBjqkAQH1tyV7xFP52vduFngWlfJiSsdHq%2BqbqgTZCgstvPSZbBgd1LplKeYiPTO2uvZiYJqTLFvgkIq7VtEuQf74IM2DdeP5YHBMhfqCjSiB%2B5e9bw3IABpOudni2nDn4XIb1ddq8miCaJol%2B7bIUnAUbo5PHZlnB3HdpfiSgQw3kMB8uwsuszsnHVOX3HxyGPxaPqS4adKsJsidXpVUmmnH9cmdyM9j&X-Amz-Signature=fc9bf1f054811fec6f88a4934cfd9f2c46333169170cfe56053e281b9ce9094c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
