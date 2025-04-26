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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MNMOVQJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZD2WxQhDCfY7%2BTTSkxE8kKmxF6qjQWBC4wt%2F7H1gJkAIgBh0Skl3pBEI6zCV7NYaiTLpSfg3TFOroWSg%2FmFeq1o8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJd6H%2FCLUOhhMN3ktCrcA6JkJP0iZ%2FHxuKEwrLdV0hYCWFk83mYGOENU7gNkHgYc0ARlbFZ5SnJG7WDK2Ex6vnxvcnls8IdjRgB4WmDjL7L4BRZ%2BPt2O92oSk03PzxkgsXn6yGso3u1Nn5Q7v7F96iO4VtqqPgj29Kclb2EhFFWD9XeDr1%2Bh9TIT0D%2FV7byMscva7jZg%2F78Jx5I5f8S9fiB%2Fw8ZvmHda1KfOcXdNbXv8q8ZudN7oXXhCE3zjvihyQtnCWcwegWnTc%2BVVR%2BxRE9FaITpepTBkrsYey1V9u%2BpfJf83aTzWqTxy5dm7YdiQgVAWTnQpUXe4jNq%2FPa%2BKzfxhGxSfrr13Y6xsGaGIItR%2F77hZUtiixjtwCfcxj6%2BnpteqtF3Yn%2BK0HwWGIhjtCZ%2B%2F%2FpkaWHav9JQQWQpW47pTdTAJ6HrpL2A1AnxjbFSdWMgXM%2B7Xgv94XvgY2NBtWwZdt8c%2FMeciNRGvYkQ%2B5v5E1rRDl1a8nAsBzbuLq8Pz2Ks4i0%2FVUqULOok2lgRYJ1VX5yzNr9bjJqy4J70lapChxfqkjvHBqGjuPDf%2F7FzTRMITeaeZl%2FPyugEBegBNt9Gq84dnRrhHEvzHGzn7Rww04uJXDvqsZoCL2eA9w3Lw%2BONQYTsbqcl3JqA%2BMKe8sMAGOqUBqRKc7lRyjMoVTbqNhBPqOTB%2BdNm%2FCn1C8EjVCmUAAvLF1ekEYhbHpvJt09Bhtogb4uoqGW%2FDCftFbX6NGPJ1reHNjwaz314pg5AQrLiQneauYsLSVwKBd%2B7FQpYTxail4uLBvnnaVvqlgwmuQg9kREfM9SN0KjaS6hlURAuNQxaTYGEaHEkxJMNoIBzDtpMh%2BD9ObwmIqwiniFkAa6Q2HGr3iqhZ&X-Amz-Signature=68c607d057d0374ddbbd8d6cdbdd10b233477ebf5d226e0f1821513b78ffbb62&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MNMOVQJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZD2WxQhDCfY7%2BTTSkxE8kKmxF6qjQWBC4wt%2F7H1gJkAIgBh0Skl3pBEI6zCV7NYaiTLpSfg3TFOroWSg%2FmFeq1o8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJd6H%2FCLUOhhMN3ktCrcA6JkJP0iZ%2FHxuKEwrLdV0hYCWFk83mYGOENU7gNkHgYc0ARlbFZ5SnJG7WDK2Ex6vnxvcnls8IdjRgB4WmDjL7L4BRZ%2BPt2O92oSk03PzxkgsXn6yGso3u1Nn5Q7v7F96iO4VtqqPgj29Kclb2EhFFWD9XeDr1%2Bh9TIT0D%2FV7byMscva7jZg%2F78Jx5I5f8S9fiB%2Fw8ZvmHda1KfOcXdNbXv8q8ZudN7oXXhCE3zjvihyQtnCWcwegWnTc%2BVVR%2BxRE9FaITpepTBkrsYey1V9u%2BpfJf83aTzWqTxy5dm7YdiQgVAWTnQpUXe4jNq%2FPa%2BKzfxhGxSfrr13Y6xsGaGIItR%2F77hZUtiixjtwCfcxj6%2BnpteqtF3Yn%2BK0HwWGIhjtCZ%2B%2F%2FpkaWHav9JQQWQpW47pTdTAJ6HrpL2A1AnxjbFSdWMgXM%2B7Xgv94XvgY2NBtWwZdt8c%2FMeciNRGvYkQ%2B5v5E1rRDl1a8nAsBzbuLq8Pz2Ks4i0%2FVUqULOok2lgRYJ1VX5yzNr9bjJqy4J70lapChxfqkjvHBqGjuPDf%2F7FzTRMITeaeZl%2FPyugEBegBNt9Gq84dnRrhHEvzHGzn7Rww04uJXDvqsZoCL2eA9w3Lw%2BONQYTsbqcl3JqA%2BMKe8sMAGOqUBqRKc7lRyjMoVTbqNhBPqOTB%2BdNm%2FCn1C8EjVCmUAAvLF1ekEYhbHpvJt09Bhtogb4uoqGW%2FDCftFbX6NGPJ1reHNjwaz314pg5AQrLiQneauYsLSVwKBd%2B7FQpYTxail4uLBvnnaVvqlgwmuQg9kREfM9SN0KjaS6hlURAuNQxaTYGEaHEkxJMNoIBzDtpMh%2BD9ObwmIqwiniFkAa6Q2HGr3iqhZ&X-Amz-Signature=fc3e9cbe56029d3562639fbd2d6514b4bea70f9783318657d08bb066c18acc5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
