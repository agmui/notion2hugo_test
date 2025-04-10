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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAVIEU4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCHpiX8410o6y3pTTkjAwwlrhXENutm%2BFHqqOwfJvey1gIgUUet%2B%2BGgeEpZ9rVOgc6KRd5T1ew2pLOuTDIntZVV%2B2kqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwJVKc9bGyASjIzSCrcAxxerlgIJL91DEYhYCpuY7OvXlal17DVJusPgorKJu8N%2B4oujp3Ny8p75i%2BrEWaYplpLdzNocds4MiqRcV%2ByGnE93U9Xm0U9wR8ZqtYRRYurwm5kdvw1btVHFuLY6pZsYG6wgchruIpUatu3Ds6U6iPhTdbXzfMwHJhleZJ7xjAzvM3GsP7%2FiexFfjHrcxbAe%2BA%2FJk2ZwzJC%2FbkKuHdAV6u7l2aPsz0Nfw0Ws49MfsmffbdGVKZcXfV8pT6ARjywWR77EpM8FdqTgTotIifxpl2p3xyAGXefj3jtlUsPQ6SoyXUo4XOKgM5CIxaaWWcif7%2Fqc8xR3a0JcDnwZQP0PW4y0gDyWCaPkCted7NnxPZmbwGNDrr8VmoMkXYG27GHl7jAXkHVGp9IKZor5VK75aU4R%2FT6j1UAR7hjBvJklFRJMRWBJ1QXhAzEh3shYaP8D8HpMAZO5hPwmMB5jZahW2ln8PQbnlBmpa8cNu%2FzKY9GyyqVA7a6q3htcWWGHJeYyhSX4bK7FkIYiZtgHdYs1AqkjdokqvuJv17CQToaK4XgHZKB5VNlVd4DTv5M3NmcqrNCQq%2B5ubs2ei6hvwMKLeTbE70ZQ8t2%2B%2BaMOQa5uxUwx42mX9JEjXU%2F1VDlMOzT378GOqUBz02i2Qf4aLx9W%2FX83RvG3OT58QvXc8wBmnzCn9djVupgzjHRe%2FX23%2B6Xymq28O6dhbD13zuOp9SGBKrVkflE%2Bgp4%2BDdUaSqowaSqCGzZoR3eyX4ptLajpttILUe54sDe%2B%2FtytOJld2apakqes0nXH9jI4c7wDf7Vdp%2BBnI2sCfMGDQn7y%2Btd%2FVy6TcLLrEeUoGCeAA4qOUzsg%2B5gsMuqynlkYesB&X-Amz-Signature=9b646b82f3b8f2ab8b0ba4620ab292d2dc4a8d907450b901b8dabedb95b27bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAVIEU4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCHpiX8410o6y3pTTkjAwwlrhXENutm%2BFHqqOwfJvey1gIgUUet%2B%2BGgeEpZ9rVOgc6KRd5T1ew2pLOuTDIntZVV%2B2kqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwJVKc9bGyASjIzSCrcAxxerlgIJL91DEYhYCpuY7OvXlal17DVJusPgorKJu8N%2B4oujp3Ny8p75i%2BrEWaYplpLdzNocds4MiqRcV%2ByGnE93U9Xm0U9wR8ZqtYRRYurwm5kdvw1btVHFuLY6pZsYG6wgchruIpUatu3Ds6U6iPhTdbXzfMwHJhleZJ7xjAzvM3GsP7%2FiexFfjHrcxbAe%2BA%2FJk2ZwzJC%2FbkKuHdAV6u7l2aPsz0Nfw0Ws49MfsmffbdGVKZcXfV8pT6ARjywWR77EpM8FdqTgTotIifxpl2p3xyAGXefj3jtlUsPQ6SoyXUo4XOKgM5CIxaaWWcif7%2Fqc8xR3a0JcDnwZQP0PW4y0gDyWCaPkCted7NnxPZmbwGNDrr8VmoMkXYG27GHl7jAXkHVGp9IKZor5VK75aU4R%2FT6j1UAR7hjBvJklFRJMRWBJ1QXhAzEh3shYaP8D8HpMAZO5hPwmMB5jZahW2ln8PQbnlBmpa8cNu%2FzKY9GyyqVA7a6q3htcWWGHJeYyhSX4bK7FkIYiZtgHdYs1AqkjdokqvuJv17CQToaK4XgHZKB5VNlVd4DTv5M3NmcqrNCQq%2B5ubs2ei6hvwMKLeTbE70ZQ8t2%2B%2BaMOQa5uxUwx42mX9JEjXU%2F1VDlMOzT378GOqUBz02i2Qf4aLx9W%2FX83RvG3OT58QvXc8wBmnzCn9djVupgzjHRe%2FX23%2B6Xymq28O6dhbD13zuOp9SGBKrVkflE%2Bgp4%2BDdUaSqowaSqCGzZoR3eyX4ptLajpttILUe54sDe%2B%2FtytOJld2apakqes0nXH9jI4c7wDf7Vdp%2BBnI2sCfMGDQn7y%2Btd%2FVy6TcLLrEeUoGCeAA4qOUzsg%2B5gsMuqynlkYesB&X-Amz-Signature=aae942a1d2bd7c4e4130d1ab3fa53ad53bb7aaa8753eb20175cdfd70230ec8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
