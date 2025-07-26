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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPTWV5W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIC5fy87yvYCbQgQstw15MKVDat8%2Fao%2FFQUs652tKESXQAiEA9lvIGkscQIAwjv47CM2YH%2B4uh3nT%2FU4eZYgCqpU%2F1VMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOSdqiTACp1MscTK%2FircA6FUnORMCiSBrnjCcOE2vhdCDM4SsIlgZDtdRv2kovNiT%2BI0fWY3qHu%2F3zztZl8tqyOt3pyk8SEqOfYJRtABb2vrfXmpZtg8D7RhHl43o2m4XdBe42UszlIgSbgWdqNImus4dd%2BjxC0arOYv8WdAJjbn9xzyZbjWvw8lIsG59zgEK1t0RJyUXM2auEX26fd52TOlzP7qPPqzj9wuF%2FWJNQaF6iPPY8JZ%2FkyUUH8TJdcqerr%2BJnSHDqrQ5j8P8bKxiNH%2BluZIEJ9iVjk%2Fc4%2FZdULXeKVE391VH2f915IH7S4x5rUPBY0bL49G2y9PvXVff2qWLT%2FJ3rpIO2WEPFtMtIVjTBbLCaBZIEagQh%2B08Gfw50qMRADlzBVdj2AJhryAlbpqd%2BVHa4oACZV1mpme1Cm0yQoBpDLarfLoNj2DLzT%2FInZWM3%2BteDxUQZZz5IdDL4BrAxSWuSvMcWWQXrmOdSMHaqULaKQXi%2Fr18yRN1cknvWh0xb0hU3tEzdAoZqkAURcUmAvUoXtYcSMQ9ycgP5ZVOXj6kDeQgNHNk7M4kUCPMczuk8NxW4Y78XJhKT7PhsqvXWILM9W%2B5qwGjQFt9B5VkQ4KeCL1nLVfQR1IAiF1YpNdknje%2BJzuXzjPMN3Bk8QGOqUBdcq6DhEzzioHK%2BC6pYZqECwZLRAmV1ibo8W2eAr4L%2BEBSObA9MhHjMmV3vGuOTK3rG6WO3%2BoU5%2BWzEJ6eUFCIaYVPSq%2B%2F0verhFjhi2t4KfuaO7pJVoQCgZDbkh8Q6eHEeURRItBfBXPxJdVE9rVdsZ4Xo%2FynTxzvc9Yvq5rrfPcga1RnKCGj2IXCKkwG7fCYA179BuucuL5luczzj7IPa7Ja3Dj&X-Amz-Signature=230dccf27b733481e01a5a2a5c550faeb8dd77ddbb0118793cba476d2a019df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYPTWV5W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIC5fy87yvYCbQgQstw15MKVDat8%2Fao%2FFQUs652tKESXQAiEA9lvIGkscQIAwjv47CM2YH%2B4uh3nT%2FU4eZYgCqpU%2F1VMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOSdqiTACp1MscTK%2FircA6FUnORMCiSBrnjCcOE2vhdCDM4SsIlgZDtdRv2kovNiT%2BI0fWY3qHu%2F3zztZl8tqyOt3pyk8SEqOfYJRtABb2vrfXmpZtg8D7RhHl43o2m4XdBe42UszlIgSbgWdqNImus4dd%2BjxC0arOYv8WdAJjbn9xzyZbjWvw8lIsG59zgEK1t0RJyUXM2auEX26fd52TOlzP7qPPqzj9wuF%2FWJNQaF6iPPY8JZ%2FkyUUH8TJdcqerr%2BJnSHDqrQ5j8P8bKxiNH%2BluZIEJ9iVjk%2Fc4%2FZdULXeKVE391VH2f915IH7S4x5rUPBY0bL49G2y9PvXVff2qWLT%2FJ3rpIO2WEPFtMtIVjTBbLCaBZIEagQh%2B08Gfw50qMRADlzBVdj2AJhryAlbpqd%2BVHa4oACZV1mpme1Cm0yQoBpDLarfLoNj2DLzT%2FInZWM3%2BteDxUQZZz5IdDL4BrAxSWuSvMcWWQXrmOdSMHaqULaKQXi%2Fr18yRN1cknvWh0xb0hU3tEzdAoZqkAURcUmAvUoXtYcSMQ9ycgP5ZVOXj6kDeQgNHNk7M4kUCPMczuk8NxW4Y78XJhKT7PhsqvXWILM9W%2B5qwGjQFt9B5VkQ4KeCL1nLVfQR1IAiF1YpNdknje%2BJzuXzjPMN3Bk8QGOqUBdcq6DhEzzioHK%2BC6pYZqECwZLRAmV1ibo8W2eAr4L%2BEBSObA9MhHjMmV3vGuOTK3rG6WO3%2BoU5%2BWzEJ6eUFCIaYVPSq%2B%2F0verhFjhi2t4KfuaO7pJVoQCgZDbkh8Q6eHEeURRItBfBXPxJdVE9rVdsZ4Xo%2FynTxzvc9Yvq5rrfPcga1RnKCGj2IXCKkwG7fCYA179BuucuL5luczzj7IPa7Ja3Dj&X-Amz-Signature=351840a2f2a4dd34860aec24298029230c2fec75789084a9cda0411223e53634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
