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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKOIPZC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFTt5nTYoO4IfZ13fmjzs5L93YaoP9K8dFQQN%2F8ucNqAIgWI%2BqH0Y354Zpuz0vGl8nxroBQZ66JgPZ0vYDHFgOQH8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJSBXJa87wgkudP8SrcA7JfML%2Bi5NdvZ2b5LfvO%2FTK%2FNhWoYxa9Dw6Nsa5TBks7DIKYO7cUpvpMLek92Bs%2B8%2FMM5FrkIE1G%2Fl7PJsu6GkCYu1PlkacqRkH4FwLOCWgdpPfFNBQuMWrIhmmIeBgnxlLWtAHKvrpo5uMCx0AUb6iyQzCFzHqAIGgkjMWDVlOYrjQA1uYOU0Tku%2FKIDwBvYboIox1HfVl4XYoRsF8uY7FMbZkDcHjfD5bk2JdIJSrNQfGsL1I%2F%2FNzDaehcDx6WFHp4QOqm2kB5nuMU1Cpzs19Mg%2FgyQds0lkAowSc8vom8o1gSF18LDnPqXhIwxIs%2Ftzvyy3TomVe3%2B3qWSobhDdvIpQ5gZwOZT3MIRxVh%2B4huJJG6ySCJdj0BxurRi4LX%2FHv03jkaYZAb0tvf4dBGPVDy9fH34mG%2F16u3Q%2FDuf%2Bw7xlGo5zaP9CEv%2BwafapgMswYOmaGwWp%2Bq%2Bn4Xc%2Fb3tjron0ARYMQAVGipjTnT9AUrARMWBKQKZYYijQqOnq7TW%2BFhx9%2B%2FjBm9K1bfsCy0tIsZN1xQ7XLBZ9PkRE39xw5J0RLoGjbkGd62RixjDqxrrfCptfacD2249DLFm5BxsJh8m26Nk7rXirvqpJi83qXtoliiUebOE5CUlvbRMNfy5sEGOqUBLyilm2y%2FJqJ35beIIqOd2a6%2FoyjDMB0BuFt0ouxv2wDLjg%2BECMKj5jXnuuKSlDiSjXEOmk%2B%2B8nj%2BEwhWGwIjcavdudVpZbooD1sd7dwb7zBhmeu8Bfd%2BCaW5pWY3gAiCUaUWHYJbnDT%2BJR2x8%2FTiFEz5vTDrkkw8PjbrxSQRRgLOlz74wsg0zen%2FuuFwMhAXDbi6EB6GGrH1zNfd8x4ZbtGH20Ye&X-Amz-Signature=2d2079c50e5a61277156ac0c5f787c60d38f4464273b8ed713c893c00be7426a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKOIPZC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFTt5nTYoO4IfZ13fmjzs5L93YaoP9K8dFQQN%2F8ucNqAIgWI%2BqH0Y354Zpuz0vGl8nxroBQZ66JgPZ0vYDHFgOQH8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJSBXJa87wgkudP8SrcA7JfML%2Bi5NdvZ2b5LfvO%2FTK%2FNhWoYxa9Dw6Nsa5TBks7DIKYO7cUpvpMLek92Bs%2B8%2FMM5FrkIE1G%2Fl7PJsu6GkCYu1PlkacqRkH4FwLOCWgdpPfFNBQuMWrIhmmIeBgnxlLWtAHKvrpo5uMCx0AUb6iyQzCFzHqAIGgkjMWDVlOYrjQA1uYOU0Tku%2FKIDwBvYboIox1HfVl4XYoRsF8uY7FMbZkDcHjfD5bk2JdIJSrNQfGsL1I%2F%2FNzDaehcDx6WFHp4QOqm2kB5nuMU1Cpzs19Mg%2FgyQds0lkAowSc8vom8o1gSF18LDnPqXhIwxIs%2Ftzvyy3TomVe3%2B3qWSobhDdvIpQ5gZwOZT3MIRxVh%2B4huJJG6ySCJdj0BxurRi4LX%2FHv03jkaYZAb0tvf4dBGPVDy9fH34mG%2F16u3Q%2FDuf%2Bw7xlGo5zaP9CEv%2BwafapgMswYOmaGwWp%2Bq%2Bn4Xc%2Fb3tjron0ARYMQAVGipjTnT9AUrARMWBKQKZYYijQqOnq7TW%2BFhx9%2B%2FjBm9K1bfsCy0tIsZN1xQ7XLBZ9PkRE39xw5J0RLoGjbkGd62RixjDqxrrfCptfacD2249DLFm5BxsJh8m26Nk7rXirvqpJi83qXtoliiUebOE5CUlvbRMNfy5sEGOqUBLyilm2y%2FJqJ35beIIqOd2a6%2FoyjDMB0BuFt0ouxv2wDLjg%2BECMKj5jXnuuKSlDiSjXEOmk%2B%2B8nj%2BEwhWGwIjcavdudVpZbooD1sd7dwb7zBhmeu8Bfd%2BCaW5pWY3gAiCUaUWHYJbnDT%2BJR2x8%2FTiFEz5vTDrkkw8PjbrxSQRRgLOlz74wsg0zen%2FuuFwMhAXDbi6EB6GGrH1zNfd8x4ZbtGH20Ye&X-Amz-Signature=1208a7a4bc00f3d44f9f1fea46afd673555233ee2eabe65fe5da59dc84b6d907&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
