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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNRYO3E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDqXRIvAg42KN5%2BagpRN%2B7gpAjBh8K5aL0p1EOI%2BdGm3AiAYvoxN8xzfUCiOYyrUhuua1wGh4sR2c8Tnl%2Bzw58SdPCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwvepOpz85jIB5WWSKtwDOY4clW6SGCa1qKfsT90LaXSM3qETdKbj6gQDCyKpsK6mE5Ype%2FdlNwbz7XAqMPOlHMzWs4%2Brnz57%2BbR7UAU6Gv%2FgjvbMi5EPZXIMH1pI6mS66V1Mz%2BHVPau3vy7fuO94kNn1uWwYaeBlkKwZHzYsXyUU1fY6wwmSksKv5Kc%2F%2Ba%2FTvkzuK7QAU66OoqFX7uCEz%2BvQ8wpfLlU9itAllz%2FB%2BmLOGRwzYc5IVo0RtmBhg5NgoGiVTiKPxGJh%2FFc9lPljLzT%2Fn2D%2B6PJ6duKh%2BUX87EMFPVgLY5r7KeyY%2F4yXt3CUd3DEhOxZIpgDkZJmGGTUxkB%2BOkg9v9xi8JeZZEBeel1fmgV6RolOAJfXWAfoMLThDsMvZymIi0ILGfZ1Pt4Of4ARTxha%2FnblubYQaWhuPLUQ6wBcoymok8S1QIShlSaH1fiFF9KM%2F0cQWv%2B6G0lhJ50OqYqzuQjsRFPLSGWHcmGVaBRu4%2B4pfQVS4iRzxSm4fotRIMlENNtXNKjsv8Qv3SWc%2BUKhQdkoQSlitqkXDtwehO7jXdzOqMb7Ti2De7jAC5KpRxOXDMP%2FgLrmfb8v%2BHi6KmBakJIujkcvomyeKyCIlU37W6zaS%2BmInwZuoOL5bDtGI3BvIJOVHXQwxLWhxAY6pgHnb8GQ8b6DkMCNlHQeS%2BYkKUjq6ttme1iRhn8dvPZCxnyAm4jtxLL9BrT4%2BI2luVhcT6flK3zALDVPyoSrTpsGHM3d4keWKK9ZHuNFd19vvUIGe6%2Bo5OThBXcrmm68wA4QUy57VtcQ1SiJK5LV5GL16M0tfOWl1hxhsmNiDWy2wEaQY%2B63NY51ih5w0SiKa16p91R4WvUmwvGIzHcKxoeaYpEXcj94&X-Amz-Signature=608d435f4c59e9fc13e3a9d252adf06be8cd26014dcdf074d54be2a2f91c4492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNRYO3E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDqXRIvAg42KN5%2BagpRN%2B7gpAjBh8K5aL0p1EOI%2BdGm3AiAYvoxN8xzfUCiOYyrUhuua1wGh4sR2c8Tnl%2Bzw58SdPCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwvepOpz85jIB5WWSKtwDOY4clW6SGCa1qKfsT90LaXSM3qETdKbj6gQDCyKpsK6mE5Ype%2FdlNwbz7XAqMPOlHMzWs4%2Brnz57%2BbR7UAU6Gv%2FgjvbMi5EPZXIMH1pI6mS66V1Mz%2BHVPau3vy7fuO94kNn1uWwYaeBlkKwZHzYsXyUU1fY6wwmSksKv5Kc%2F%2Ba%2FTvkzuK7QAU66OoqFX7uCEz%2BvQ8wpfLlU9itAllz%2FB%2BmLOGRwzYc5IVo0RtmBhg5NgoGiVTiKPxGJh%2FFc9lPljLzT%2Fn2D%2B6PJ6duKh%2BUX87EMFPVgLY5r7KeyY%2F4yXt3CUd3DEhOxZIpgDkZJmGGTUxkB%2BOkg9v9xi8JeZZEBeel1fmgV6RolOAJfXWAfoMLThDsMvZymIi0ILGfZ1Pt4Of4ARTxha%2FnblubYQaWhuPLUQ6wBcoymok8S1QIShlSaH1fiFF9KM%2F0cQWv%2B6G0lhJ50OqYqzuQjsRFPLSGWHcmGVaBRu4%2B4pfQVS4iRzxSm4fotRIMlENNtXNKjsv8Qv3SWc%2BUKhQdkoQSlitqkXDtwehO7jXdzOqMb7Ti2De7jAC5KpRxOXDMP%2FgLrmfb8v%2BHi6KmBakJIujkcvomyeKyCIlU37W6zaS%2BmInwZuoOL5bDtGI3BvIJOVHXQwxLWhxAY6pgHnb8GQ8b6DkMCNlHQeS%2BYkKUjq6ttme1iRhn8dvPZCxnyAm4jtxLL9BrT4%2BI2luVhcT6flK3zALDVPyoSrTpsGHM3d4keWKK9ZHuNFd19vvUIGe6%2Bo5OThBXcrmm68wA4QUy57VtcQ1SiJK5LV5GL16M0tfOWl1hxhsmNiDWy2wEaQY%2B63NY51ih5w0SiKa16p91R4WvUmwvGIzHcKxoeaYpEXcj94&X-Amz-Signature=6eac9e6faaba3c770d59e99ee9cdb819f4f8858b528f2ddd84105e9d4249c43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
