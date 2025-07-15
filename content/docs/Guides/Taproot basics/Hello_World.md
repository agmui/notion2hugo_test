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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQDF5FW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCyRM3q8YHbuiZkjH9cylxheh4nmwmywpcW1BQy8YXwwgIgJMy0v0rOL43ExUW1s054acxRg%2BVpQZ2ALRHvq%2Brz93sq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAoIpCrr8K9tdKQTISrcA8YS0WJuSwd%2BC5OT3ALXkZxyQ5NftgLeHTH76APX%2B7Nc4rHiYNgSfp0n592scf0uH54D3XE4byvjKXoaRSjwKCtl%2BCeM%2FakwsmAYZ0dxRQ5pef9zixLMKYAzSE9uOVhPn0iSPetkszn6ajxv%2B%2BTU%2FN49KX2HfuSLQx7Ucyu1eHEzlTWnBzSARLXMkyZoNGui0dSlPhAm0DPYZrjyaq9FaYSWiylxfTRGx%2B3pwVYvtTrip9Nc%2FyciJ2pnpIJybbtcmh8jSuqeq6jGZBUGAziGTuhwADhwLtmGWLf2wXS8mG11QCwiGXPsGhtly%2FDO8G6SK5q%2FUz4zZxxkqzH%2F1t%2Few%2FhVE39EIZ3uK%2BM5Sshh9XFVNpueXG1XpDXn0cqpxew2RnaMP1Ah7uJ9P1gpSl%2Fs4UW%2B0FC76OE6z%2FF%2F0FES6CiUkJbLd6oHIZNGKStArtGJHv7%2F7b4iwaWvGNkyjxmg0SxfO1mmg2wUHHAO633VgCNjaQqnNmQ1nH5sTIqHQcANXRnhjoF%2BhkEgNU3fQ0GzLcsF1TVFzPP2ab72ErMjtbm2yk3TBVci3QUP6yAPZInlyAGEXKyZEl09aneCiQRIb1SSSB5z3VjboEOC5ScHfCyEgEFa1gbFwj12vnvrMNyD2cMGOqUBiY581udTFzTdpAySbIWjB1ajB9RQmvWG%2BqnH0YTbAxjowrr9AqYsM0GT%2B1%2B386CORHsxZpWv38rH271zqM7E67ao7ekUKiXFc4eXk32heGcN53Y9SJDweAOZaNjec4vfpJP1viHx7cG1jRm6twpj9CANJXHViFNl9HJjTiPaLRW5s75ed8XNdnRO8wpsOo1F1qE53bqpNY4rhv2oOej2CfrG%2B1cH&X-Amz-Signature=bc8975243014ef54f31a1e90a0c8c3e390a0c3c3f804d74898e89871363102c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQDF5FW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCyRM3q8YHbuiZkjH9cylxheh4nmwmywpcW1BQy8YXwwgIgJMy0v0rOL43ExUW1s054acxRg%2BVpQZ2ALRHvq%2Brz93sq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAoIpCrr8K9tdKQTISrcA8YS0WJuSwd%2BC5OT3ALXkZxyQ5NftgLeHTH76APX%2B7Nc4rHiYNgSfp0n592scf0uH54D3XE4byvjKXoaRSjwKCtl%2BCeM%2FakwsmAYZ0dxRQ5pef9zixLMKYAzSE9uOVhPn0iSPetkszn6ajxv%2B%2BTU%2FN49KX2HfuSLQx7Ucyu1eHEzlTWnBzSARLXMkyZoNGui0dSlPhAm0DPYZrjyaq9FaYSWiylxfTRGx%2B3pwVYvtTrip9Nc%2FyciJ2pnpIJybbtcmh8jSuqeq6jGZBUGAziGTuhwADhwLtmGWLf2wXS8mG11QCwiGXPsGhtly%2FDO8G6SK5q%2FUz4zZxxkqzH%2F1t%2Few%2FhVE39EIZ3uK%2BM5Sshh9XFVNpueXG1XpDXn0cqpxew2RnaMP1Ah7uJ9P1gpSl%2Fs4UW%2B0FC76OE6z%2FF%2F0FES6CiUkJbLd6oHIZNGKStArtGJHv7%2F7b4iwaWvGNkyjxmg0SxfO1mmg2wUHHAO633VgCNjaQqnNmQ1nH5sTIqHQcANXRnhjoF%2BhkEgNU3fQ0GzLcsF1TVFzPP2ab72ErMjtbm2yk3TBVci3QUP6yAPZInlyAGEXKyZEl09aneCiQRIb1SSSB5z3VjboEOC5ScHfCyEgEFa1gbFwj12vnvrMNyD2cMGOqUBiY581udTFzTdpAySbIWjB1ajB9RQmvWG%2BqnH0YTbAxjowrr9AqYsM0GT%2B1%2B386CORHsxZpWv38rH271zqM7E67ao7ekUKiXFc4eXk32heGcN53Y9SJDweAOZaNjec4vfpJP1viHx7cG1jRm6twpj9CANJXHViFNl9HJjTiPaLRW5s75ed8XNdnRO8wpsOo1F1qE53bqpNY4rhv2oOej2CfrG%2B1cH&X-Amz-Signature=bb18a9c23bb24e70027c8aebecd03c0b8d5849a4593e6a5e7f13553d34c08057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
