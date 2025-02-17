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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2VMQ7C%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCxWAUFQWOzLGMvtwdr2IgpS%2F4%2Bvel82fPEbyB7BuLxwAIhAOJOyGDCDMxsS87Vd5g6OP6twaYiyxEJbHNOKcGjQqfZKv8DCHIQABoMNjM3NDIzMTgzODA1Igyh8akrSa65%2Fn0rA8Uq3APa7R8gyqldcsSvnkzqA7ahr%2FSu56sNoIv5EsvH%2B3FSjxAGUZ9KFlnzvzzPrxxEojn6cbFL%2BylHBtUfThT1Ie%2FMydD9i9M4ceNoGCuOv8vnyZOvLzq578CUNaoZ%2FIxsib2hLE8qY4O%2BefDizwbDLqzBufUMeyR5N5wxxwD6VFo1UR9bqBzpfaM4jX9X7So2GpLteZeq2OVRtU2Xf1cm4ptQ%2FbPZXBtu51Gd7TsZ0338oSi%2F%2Bt%2FDfVtNPIv%2FkGywcgiz8ZNsTAU%2F%2BoulxnEJMUXMsrz0Ew%2FlMLKvbace9sniInHoLOdypCRs%2B8nwv%2F7djMh6ws5qwj4GGQeEDvAG1nAfN%2FGGz6wlQSyykT4mE2W8mOn%2BNVuqqhOQIjsJ788CpYa12S5dcp6IjntF5%2BeueJGtlE9VQfLivHCtGigIJxbwZ5WbW3igaBWtX60Un9%2BWSOVaR%2BVLZdBcCaPmeC%2ByGBHVbNpenfvXIac3TtG1eV6LisXG5KKU%2Fnh3LkQnZALUbHNQq1nBRlBfzJNZwr4wFTgRR8wI4JArmMdvD0V7McaFHWhWY0Exna2FR8CsSQ3%2BejUXFiY4eCB%2FdfXfEnjHalowsHBZl1c9MINJ1IAquYulcLFFmMaP6oVMoWJRrTCP6su9BjqkARYQVRORoFvF%2FP03Mx2612xX0S2%2Bt3xJbQnerTTyOuoAH0wJinXAW75yGlwZeCgTcPOZqKmpRBAiAYCSvaeXWnbP9E%2BAPe7rZmLYmp6wUo780Lq%2FCzdQoG%2FFj2wX0lrb5TNFwOGyDDS%2B%2BTmU41VtLgGStKZuDkuQl73EAmnPd4tLMYkt3Y8dQvLw9DvwrzX89Jd9RwWkfYgj34jQRI8W5Vcq8Auo&X-Amz-Signature=3d3ed6c0ae88b94fdaee8526c2ddd802b645fb290051f981ce303055fb37bbdf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2VMQ7C%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCxWAUFQWOzLGMvtwdr2IgpS%2F4%2Bvel82fPEbyB7BuLxwAIhAOJOyGDCDMxsS87Vd5g6OP6twaYiyxEJbHNOKcGjQqfZKv8DCHIQABoMNjM3NDIzMTgzODA1Igyh8akrSa65%2Fn0rA8Uq3APa7R8gyqldcsSvnkzqA7ahr%2FSu56sNoIv5EsvH%2B3FSjxAGUZ9KFlnzvzzPrxxEojn6cbFL%2BylHBtUfThT1Ie%2FMydD9i9M4ceNoGCuOv8vnyZOvLzq578CUNaoZ%2FIxsib2hLE8qY4O%2BefDizwbDLqzBufUMeyR5N5wxxwD6VFo1UR9bqBzpfaM4jX9X7So2GpLteZeq2OVRtU2Xf1cm4ptQ%2FbPZXBtu51Gd7TsZ0338oSi%2F%2Bt%2FDfVtNPIv%2FkGywcgiz8ZNsTAU%2F%2BoulxnEJMUXMsrz0Ew%2FlMLKvbace9sniInHoLOdypCRs%2B8nwv%2F7djMh6ws5qwj4GGQeEDvAG1nAfN%2FGGz6wlQSyykT4mE2W8mOn%2BNVuqqhOQIjsJ788CpYa12S5dcp6IjntF5%2BeueJGtlE9VQfLivHCtGigIJxbwZ5WbW3igaBWtX60Un9%2BWSOVaR%2BVLZdBcCaPmeC%2ByGBHVbNpenfvXIac3TtG1eV6LisXG5KKU%2Fnh3LkQnZALUbHNQq1nBRlBfzJNZwr4wFTgRR8wI4JArmMdvD0V7McaFHWhWY0Exna2FR8CsSQ3%2BejUXFiY4eCB%2FdfXfEnjHalowsHBZl1c9MINJ1IAquYulcLFFmMaP6oVMoWJRrTCP6su9BjqkARYQVRORoFvF%2FP03Mx2612xX0S2%2Bt3xJbQnerTTyOuoAH0wJinXAW75yGlwZeCgTcPOZqKmpRBAiAYCSvaeXWnbP9E%2BAPe7rZmLYmp6wUo780Lq%2FCzdQoG%2FFj2wX0lrb5TNFwOGyDDS%2B%2BTmU41VtLgGStKZuDkuQl73EAmnPd4tLMYkt3Y8dQvLw9DvwrzX89Jd9RwWkfYgj34jQRI8W5Vcq8Auo&X-Amz-Signature=bf7b2972145cbfb161a00e0227a7eca89c79dec99eface9e4edf3453f6dbe88b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
