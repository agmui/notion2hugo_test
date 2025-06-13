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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S522Q3KI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICM%2FcYLbblP22JT%2F0%2BIb0gRtgFMHvvh1vMInuc%2Bjq%2BjsAiB6KBqqg5IngJB%2FtD6NZ5p8b9AL7T3yK3eURunCeTAQ8Cr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMORKegQyv%2BraXCFm2KtwDP4UfB2m2jOTRecv6bbuJCrYJYJJkq%2B%2FLep2t9DBOfKQ1SUkGVmeDReaBxFGb41JZriBgkLZHR4DnV6Mek4C2UeVnpkz%2FmHYx5fiop%2BxrLhbXrryrpNDM%2BBUA6VoY9DBETLZGZi8kW1KwhTQYgmpcOIjdzBSAL5cr2bA2Qh3adH3W%2B%2BBG6Ei2Ur0Rze%2BP4of8prSuqL7p%2BAR%2Fgp6CedMWwSCjk8b985kBSBEf7Fs76%2Fd70pxNRF6l8d3zB9s%2B6zFwWDAZBzOmYQ%2BAZMXZmJYKPdAbdgoLq90cZusCAxEjG9rapXjqBiBtHHEo%2BrkT0aR%2FEhqrZ%2Fhrq63WBXKD5E0meV8Shf5mn9q%2BzYPqg4plXfAFFw%2BKMzvfangHGqOInmKYbbi%2Ff8jC%2B50%2BlIYqQ9HsME%2B5exoINr7IqTK07ebr%2FxwGpn8aoyIF635RvGmntBHItzEW5alNGV3s2D7oe12KPTZx8PYKLEbM3AsIni6ESZ4fUnXf1bkhd%2F7%2FJQsKsc%2FZ7n%2BxRTJ83d3f6tKRRJrkuq5j1thgZZFvYNj4gYoCl791HyHHAsNM3EsQKfOZIYk8BhGvfaOwYOSzJ4VxglnLosAgHX5%2FzxRBJOUfjLkeiXB9ZPksz9QlnLpm2wEwwPiwwgY6pgH%2FjzJPTVYyvSTPUpiGYVHhoHY76YdCUTL9Tk2IzVqsLMbx%2Fdek7cLjEZJ05wgR5C1ay1q1qS7C8ngDssh77lw%2BllVDG8EWTTdqL%2BX4HjuRotUFao0ZQUhWoOdlvoQM9txr1%2BGB87Ihyioxc177reWX9humARkO1KRUXW%2F9%2F%2BpCGeU4bTUE5AzjsmGNgGo0rYgZOT8LAFaMBrljXLwy9X5FVq9xuG89&X-Amz-Signature=7d9f6504efcdfd80a61c4ca30e60f025cab53ea75120da27a9b37942ba94b0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S522Q3KI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICM%2FcYLbblP22JT%2F0%2BIb0gRtgFMHvvh1vMInuc%2Bjq%2BjsAiB6KBqqg5IngJB%2FtD6NZ5p8b9AL7T3yK3eURunCeTAQ8Cr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMORKegQyv%2BraXCFm2KtwDP4UfB2m2jOTRecv6bbuJCrYJYJJkq%2B%2FLep2t9DBOfKQ1SUkGVmeDReaBxFGb41JZriBgkLZHR4DnV6Mek4C2UeVnpkz%2FmHYx5fiop%2BxrLhbXrryrpNDM%2BBUA6VoY9DBETLZGZi8kW1KwhTQYgmpcOIjdzBSAL5cr2bA2Qh3adH3W%2B%2BBG6Ei2Ur0Rze%2BP4of8prSuqL7p%2BAR%2Fgp6CedMWwSCjk8b985kBSBEf7Fs76%2Fd70pxNRF6l8d3zB9s%2B6zFwWDAZBzOmYQ%2BAZMXZmJYKPdAbdgoLq90cZusCAxEjG9rapXjqBiBtHHEo%2BrkT0aR%2FEhqrZ%2Fhrq63WBXKD5E0meV8Shf5mn9q%2BzYPqg4plXfAFFw%2BKMzvfangHGqOInmKYbbi%2Ff8jC%2B50%2BlIYqQ9HsME%2B5exoINr7IqTK07ebr%2FxwGpn8aoyIF635RvGmntBHItzEW5alNGV3s2D7oe12KPTZx8PYKLEbM3AsIni6ESZ4fUnXf1bkhd%2F7%2FJQsKsc%2FZ7n%2BxRTJ83d3f6tKRRJrkuq5j1thgZZFvYNj4gYoCl791HyHHAsNM3EsQKfOZIYk8BhGvfaOwYOSzJ4VxglnLosAgHX5%2FzxRBJOUfjLkeiXB9ZPksz9QlnLpm2wEwwPiwwgY6pgH%2FjzJPTVYyvSTPUpiGYVHhoHY76YdCUTL9Tk2IzVqsLMbx%2Fdek7cLjEZJ05wgR5C1ay1q1qS7C8ngDssh77lw%2BllVDG8EWTTdqL%2BX4HjuRotUFao0ZQUhWoOdlvoQM9txr1%2BGB87Ihyioxc177reWX9humARkO1KRUXW%2F9%2F%2BpCGeU4bTUE5AzjsmGNgGo0rYgZOT8LAFaMBrljXLwy9X5FVq9xuG89&X-Amz-Signature=abf50baa38ddc77b8c9802916df4501d8dd83ecaf422767ce12ac3ca3cdca060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
