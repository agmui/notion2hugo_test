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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABB73HY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCS8fsZxawKwiscVcvzaVp9AuXCjQehb7ySTf9uYQROhgIgBYs2uoXwsIi9eEKLLyBnjPLqVpzfhq1MJVgiA9H4XAYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyMVTXVp9ERCKsU7ircA1477pvTKWUp4VhXumur6C5amtGd8wfTenPSKcIuSoqRn54827t4vqfpefVFrrfmigdKt9wgkDulmL4dGj%2B0L1hHYGR0KsJ5oK5Lyxf1W69xh76%2BXcMyoxj3Urj7xlku71O9uLme95GZ5VtYdiU05RZLkuUecl8dzAX2zajA70A05YfPLKXIdKGmWUFr34ddt2B73K2OqAxw5C%2Fke%2BGO8jbM0jUU6geCpiRmswvb09ZPyHYGL1Fj5C%2BmrWBhgVIKDUpxjSx8ZiiQRTuBLQ%2BlTftBBJM%2FfZ7Aoko8Gu04l%2F%2FO5OBVJ7o41WeY2v2Ec6zUXquOS0EZQtf4N7ZpiwjTj%2B0dndyKm3MOnEKvXM0ExPa2Edpy1rD4C%2F6mSa9IhQoDcWoo33%2FRkjPY4c4p6IZIkbWnLz6j%2FsDkhuNa3v1xGzX44ocfxxoBpEUUNCqgmjH8WHqRxhPcT53DFQOiS5BEkpym%2FCdHIox7m5hZTskBSuNHy9TI%2Bm6RZLrKFa0b8UaA2dNWnHTAOAfFPFYSjcye%2BwrflC3ICd05clYGxvHvxbEx9D8cz9MmFoIbm8fd2VYd0aCH0%2BBvpeAcrDZdj9aeH6dPLIY4PtKt6CQEEd1oevbjFmPKvOY6ryv8oELSMOraw74GOqUBIeGnCNedn04KSdtrkix6daywy93zcbpoqB5lnv1bbK3%2Bacshm5N67MmeHayLUOT%2FK9cS%2BnGx0PfayUbEnhytxNDNxG0NAOq6T5E%2BPniMEZaheg%2BfQRcwh7PNLScCNMXV8cwDqMimhQ0x4lLJS728zV8e8eAH1bkgSnEIPpfTtryOKJfIy0TA6XtCEX4VibhtrmTS7h5yIZ9y0koBwHBAb3LcXCNp&X-Amz-Signature=99c6ed4c1f8fb4d968665cd4870dad78ca97da08add6f9483a435722b6b6f569&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABB73HY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCS8fsZxawKwiscVcvzaVp9AuXCjQehb7ySTf9uYQROhgIgBYs2uoXwsIi9eEKLLyBnjPLqVpzfhq1MJVgiA9H4XAYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyMVTXVp9ERCKsU7ircA1477pvTKWUp4VhXumur6C5amtGd8wfTenPSKcIuSoqRn54827t4vqfpefVFrrfmigdKt9wgkDulmL4dGj%2B0L1hHYGR0KsJ5oK5Lyxf1W69xh76%2BXcMyoxj3Urj7xlku71O9uLme95GZ5VtYdiU05RZLkuUecl8dzAX2zajA70A05YfPLKXIdKGmWUFr34ddt2B73K2OqAxw5C%2Fke%2BGO8jbM0jUU6geCpiRmswvb09ZPyHYGL1Fj5C%2BmrWBhgVIKDUpxjSx8ZiiQRTuBLQ%2BlTftBBJM%2FfZ7Aoko8Gu04l%2F%2FO5OBVJ7o41WeY2v2Ec6zUXquOS0EZQtf4N7ZpiwjTj%2B0dndyKm3MOnEKvXM0ExPa2Edpy1rD4C%2F6mSa9IhQoDcWoo33%2FRkjPY4c4p6IZIkbWnLz6j%2FsDkhuNa3v1xGzX44ocfxxoBpEUUNCqgmjH8WHqRxhPcT53DFQOiS5BEkpym%2FCdHIox7m5hZTskBSuNHy9TI%2Bm6RZLrKFa0b8UaA2dNWnHTAOAfFPFYSjcye%2BwrflC3ICd05clYGxvHvxbEx9D8cz9MmFoIbm8fd2VYd0aCH0%2BBvpeAcrDZdj9aeH6dPLIY4PtKt6CQEEd1oevbjFmPKvOY6ryv8oELSMOraw74GOqUBIeGnCNedn04KSdtrkix6daywy93zcbpoqB5lnv1bbK3%2Bacshm5N67MmeHayLUOT%2FK9cS%2BnGx0PfayUbEnhytxNDNxG0NAOq6T5E%2BPniMEZaheg%2BfQRcwh7PNLScCNMXV8cwDqMimhQ0x4lLJS728zV8e8eAH1bkgSnEIPpfTtryOKJfIy0TA6XtCEX4VibhtrmTS7h5yIZ9y0koBwHBAb3LcXCNp&X-Amz-Signature=4fb250f9a7300b20a77db32132950d02334b1a6298f47b74afd0ef1041b2cfd8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
