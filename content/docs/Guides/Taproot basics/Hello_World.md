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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G6JFBKL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICa9fPGq%2F2W0fXiD09rr%2BABVZhuNyb0UFmD9Ww%2B3aSSuAiEA%2BGlj6K2sErN2Hsw%2BLH9pkLcgZGhkPSxAh0UI9wt0IuIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYG2hxlhQuU2SRr1SrcA3PyGVLKxzNjPEjle51I2ysIpqkzavNB%2BloouGYehMQStYboNeIKFDOrxU0tAFY%2BTKw9j5rBkmF%2BERIR4P1CfEACbDGjj7XTZXOz4c%2FkximwN3rRCQz8v7XfNNEDOE4mlH%2F%2F1dbLhy2OzmMQXSt3Zw%2Bbl1ZnqJjnZoTLXK8GdkPcNcyHl%2FQfN%2FAiq%2BOh5LsWEzHTcMw7hv9xtEOIokjWoOklKqwEY85GDOcZpUvhjWw8Cj%2FftXvL7wPtcvgaiqCc8OgI1ixdvcRWQmI8dGGlSt2t7pyv%2FHpZdvsne0ShBBdrmu%2FdL%2BbEKCWeVcC3KLCVl7zowamkcv%2B8%2BrSlmwpq7zZd1DXpuij%2FoPlEZBsyBzpPN%2F1Orpc5tZp%2FyEqorOA3A0iSBj2YWwgzjOrfABgQlalaAO8ReWhUzdrj4dAsfPql8LtkT09%2Fhblzp15G53dwWpfUk8Msc9sipZQsY8BGJTqgaxIancUUA9v%2B%2FgNKz9r%2F8aZeS7%2FdCojYJihAq5Hjqfd1D8l77lRmkcjvkObouaxohbAKH0yVB82HxCF%2FmP%2BP0HHrvw%2FcGDt1A56quqcVQ6oNzVYNj9w7O1DEA1AYL1Zh8cXPaPE9GTyX8pE7JcFTjrOJXeHZFCihJIZTMNjPvr4GOqUBwA84Mu8PBGsfTcoQLAUWEVCuRRjVKH9KJay%2BjhMFpKQxyTxS8lEQ%2F4YTq0l1HukSky7TA1qKk5DbjFq9qSb7dqMOkr5tXLtmgdYVk5ERmjpf1nEfPVLTwW5gJX6QMRloUHQtw4H8p28T2dHmdZ4b9duiM4ZXi1VsZaJ2vBF4glHLFYXRrsT71Su1mzbXjLZSv9fLtzm0w%2Bdt5OkT55BlijRs40gw&X-Amz-Signature=e6fbd32078b2fdbceb09b3456185aca9eaabd733d3e890eaf15e2b99a94d69e9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G6JFBKL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICa9fPGq%2F2W0fXiD09rr%2BABVZhuNyb0UFmD9Ww%2B3aSSuAiEA%2BGlj6K2sErN2Hsw%2BLH9pkLcgZGhkPSxAh0UI9wt0IuIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYG2hxlhQuU2SRr1SrcA3PyGVLKxzNjPEjle51I2ysIpqkzavNB%2BloouGYehMQStYboNeIKFDOrxU0tAFY%2BTKw9j5rBkmF%2BERIR4P1CfEACbDGjj7XTZXOz4c%2FkximwN3rRCQz8v7XfNNEDOE4mlH%2F%2F1dbLhy2OzmMQXSt3Zw%2Bbl1ZnqJjnZoTLXK8GdkPcNcyHl%2FQfN%2FAiq%2BOh5LsWEzHTcMw7hv9xtEOIokjWoOklKqwEY85GDOcZpUvhjWw8Cj%2FftXvL7wPtcvgaiqCc8OgI1ixdvcRWQmI8dGGlSt2t7pyv%2FHpZdvsne0ShBBdrmu%2FdL%2BbEKCWeVcC3KLCVl7zowamkcv%2B8%2BrSlmwpq7zZd1DXpuij%2FoPlEZBsyBzpPN%2F1Orpc5tZp%2FyEqorOA3A0iSBj2YWwgzjOrfABgQlalaAO8ReWhUzdrj4dAsfPql8LtkT09%2Fhblzp15G53dwWpfUk8Msc9sipZQsY8BGJTqgaxIancUUA9v%2B%2FgNKz9r%2F8aZeS7%2FdCojYJihAq5Hjqfd1D8l77lRmkcjvkObouaxohbAKH0yVB82HxCF%2FmP%2BP0HHrvw%2FcGDt1A56quqcVQ6oNzVYNj9w7O1DEA1AYL1Zh8cXPaPE9GTyX8pE7JcFTjrOJXeHZFCihJIZTMNjPvr4GOqUBwA84Mu8PBGsfTcoQLAUWEVCuRRjVKH9KJay%2BjhMFpKQxyTxS8lEQ%2F4YTq0l1HukSky7TA1qKk5DbjFq9qSb7dqMOkr5tXLtmgdYVk5ERmjpf1nEfPVLTwW5gJX6QMRloUHQtw4H8p28T2dHmdZ4b9duiM4ZXi1VsZaJ2vBF4glHLFYXRrsT71Su1mzbXjLZSv9fLtzm0w%2Bdt5OkT55BlijRs40gw&X-Amz-Signature=4b8de9ba8ae3d2c0979c9dd71021f29904510ca0eae0b64a720b06772f98974a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
