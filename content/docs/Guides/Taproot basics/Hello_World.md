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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZTI2V7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfzvdRPZVJ84ihYSRnw7lXf5EbvhE4kNs07JGIjBtCJAiAPwelHbiCu6LpuLri8EWRa8NUK7NnZ82%2FEexh5uMKnkCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ4jNAYjPF1sJ%2FwPUKtwDRfjlEzRfEAWhmMZXC6apStDGWkE2kDxpGrrAJKE6LI0JLdwx5IE5Mu2LktlvHxfXcYXXoloUYP6SVtfm1F2wbjDmXXcoUWHQJXAmwBcj0gRabOcpl3ip%2Fije8EBOhi3M%2FkTD15kMvqlnleOeOND8HMMUBa%2FgP81F1kMmWzgAocTR%2BIlinWYsSzVD5eoML4mCCA9ZZTKcFL5L%2B7CWxeK4oj00BIoyrJ5jcC4THZRGySFoYmpqR%2FmvgaRhHHBN18e3%2BFDt3q0Xe%2FslisqXKl2y87OmyXdsfk%2BY%2FSjA%2FllyDU0%2B%2BP5Qs3wAoBe%2BVwSK6NBspSTyWDpknfPG5V5OHFWkJr6titEQlE1RpTeDjunLOhIJAksUGWrnRT9AkH7gpVO71C9btW3JdyRfm8TJStjzZnGCqPB6lA8hA7IBdrMqSL3J35nn1GuvPuSV%2F%2F2JI3Abt6HLCYwA02zQYTzP8QXwF0MFkOvmGQnjEaqH98mokZdlkiuTupA%2BfEckNbs0aitQqbjWJLqeiIj7jiCyujQxoz%2B6K1Pi1ivdTOCGhkzoJsp3214rcVzxtmcGgNIVojjgm%2B5H4imUwCLYsaLOTe%2BXqYyXO5rHqd0taBKwwdMASPjsf0wUGlMXP%2B6utlQwoOTcxAY6pgEN601tE61pAR6AyMmjMXUU8rJcNZfrdcib2vjbIpjMjDQvDnOxrnaChSypfWg61cWCeQy%2FQLkFLz4Jomkt6PPNT1vuS%2Bvx%2Fr0Kwt1JZiKH9nTYCOND2i49t8%2FYMpYtqcLEZU62Ggr5ezRM%2BSm4KsXhG3KK6E%2BwJ52y6ihvaYihQ2sElLptb%2BU8BeXUAXU1WsxUUyCD40uZs2jXYgKNPGOmyc%2BgbZNK&X-Amz-Signature=ed429649e8e901fb34812851359bcf4228da8965a4afc7069142ce185249040d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZTI2V7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfzvdRPZVJ84ihYSRnw7lXf5EbvhE4kNs07JGIjBtCJAiAPwelHbiCu6LpuLri8EWRa8NUK7NnZ82%2FEexh5uMKnkCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ4jNAYjPF1sJ%2FwPUKtwDRfjlEzRfEAWhmMZXC6apStDGWkE2kDxpGrrAJKE6LI0JLdwx5IE5Mu2LktlvHxfXcYXXoloUYP6SVtfm1F2wbjDmXXcoUWHQJXAmwBcj0gRabOcpl3ip%2Fije8EBOhi3M%2FkTD15kMvqlnleOeOND8HMMUBa%2FgP81F1kMmWzgAocTR%2BIlinWYsSzVD5eoML4mCCA9ZZTKcFL5L%2B7CWxeK4oj00BIoyrJ5jcC4THZRGySFoYmpqR%2FmvgaRhHHBN18e3%2BFDt3q0Xe%2FslisqXKl2y87OmyXdsfk%2BY%2FSjA%2FllyDU0%2B%2BP5Qs3wAoBe%2BVwSK6NBspSTyWDpknfPG5V5OHFWkJr6titEQlE1RpTeDjunLOhIJAksUGWrnRT9AkH7gpVO71C9btW3JdyRfm8TJStjzZnGCqPB6lA8hA7IBdrMqSL3J35nn1GuvPuSV%2F%2F2JI3Abt6HLCYwA02zQYTzP8QXwF0MFkOvmGQnjEaqH98mokZdlkiuTupA%2BfEckNbs0aitQqbjWJLqeiIj7jiCyujQxoz%2B6K1Pi1ivdTOCGhkzoJsp3214rcVzxtmcGgNIVojjgm%2B5H4imUwCLYsaLOTe%2BXqYyXO5rHqd0taBKwwdMASPjsf0wUGlMXP%2B6utlQwoOTcxAY6pgEN601tE61pAR6AyMmjMXUU8rJcNZfrdcib2vjbIpjMjDQvDnOxrnaChSypfWg61cWCeQy%2FQLkFLz4Jomkt6PPNT1vuS%2Bvx%2Fr0Kwt1JZiKH9nTYCOND2i49t8%2FYMpYtqcLEZU62Ggr5ezRM%2BSm4KsXhG3KK6E%2BwJ52y6ihvaYihQ2sElLptb%2BU8BeXUAXU1WsxUUyCD40uZs2jXYgKNPGOmyc%2BgbZNK&X-Amz-Signature=662776e30ad5fe5c9afdd0b5f2502645db1e8886f879e753623d2a045918131c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
