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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCNGIVK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGiogx85tWiGR5tOomPnH7qLiIM5Ktem6FM3Lr%2FC76gpAiEA1PEWMoXOQX%2BL%2F2frjL5kKkYSsAC6Dkqaf5sQmpDNKfEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0JVPg%2Fajlh9re7TircA%2BCwn2O4kjhJPEcI5pyvAICWSQb6exzBoYQx%2BjC7%2FGXKlKmEpOBOzXCy5fAjVx2rkXitJlZ0dHZonx%2FFNIMlU4k95t5gOGpGEivyiruLlioOSJU%2FAgXNYFPL5mOo5eLbLzvCJR1gJdg3mFuVB7IVbz1fphoFD6rSM3jdZvs%2FATAswu6psX7Ihk20feV%2Fknu5vv8Y77ZMVfKFMFsd%2BF7NlVGNi1QgQ9Zr3%2B4rwzXNlbpxwlevt5nnt2I2tydcpJ5qQG%2BvPNDxfB41USSuAVbLtiR1bf%2FxEzXn7NO4AdvLlfzgF1R7KouzTtd%2Bvy9MpcQg3KJdHcSIN4CH6OqNxQ1FEOHzczEJrpeZppVwP7gjxKINmYY866nqiw97PFZh3W83HKvZDLcLd0XmcYot28ApI6aJhOOW4Rs42oD0lDmxdXiMYv3NVjH1COoS7we7PfTQKrV3TBnwG1lfEE87o2B2oyvfc1N0TMEtAUEepSrEWIGz04iOjf7aMclGlksgCjNtQ6B%2FUc4CIo6pyko%2BPTvUlamEdeE4%2F1JYFQJ7RcsbvdjiGqpHEiDv9kMXKibNoThi4R5sXYyHCvVOzL3QZrUDMcXiO9jyZlimMIYOQtar7mWVYWP9tH2IlF%2BTj5vBMJHu08QGOqUB0RL%2BVmh9TxYSlyPvZFoeAWawxZY0nTgLecEFG3fKHFOcUQ%2FhjNQD4Uggsb12zj2owmKLwcKKsXUQsvtWy6pvMw4%2BVVa9JZnbWxmohTQHCTbOLAPh2rBrlgVq2OqUSZ6%2BycB%2BNQkdzy8gTnx%2FQ24f3TxjzVSEt7wPs7cvG6dYQuOuNKc%2Bks1lH6GdrQwlFgBMI%2F92BFUvlU4FvN2xA8FZkrh9eboO&X-Amz-Signature=b0092d2f08312f19c6edcb98701396beb2ee5bb76f60c8d68f35a35660b6c439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCNGIVK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGiogx85tWiGR5tOomPnH7qLiIM5Ktem6FM3Lr%2FC76gpAiEA1PEWMoXOQX%2BL%2F2frjL5kKkYSsAC6Dkqaf5sQmpDNKfEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0JVPg%2Fajlh9re7TircA%2BCwn2O4kjhJPEcI5pyvAICWSQb6exzBoYQx%2BjC7%2FGXKlKmEpOBOzXCy5fAjVx2rkXitJlZ0dHZonx%2FFNIMlU4k95t5gOGpGEivyiruLlioOSJU%2FAgXNYFPL5mOo5eLbLzvCJR1gJdg3mFuVB7IVbz1fphoFD6rSM3jdZvs%2FATAswu6psX7Ihk20feV%2Fknu5vv8Y77ZMVfKFMFsd%2BF7NlVGNi1QgQ9Zr3%2B4rwzXNlbpxwlevt5nnt2I2tydcpJ5qQG%2BvPNDxfB41USSuAVbLtiR1bf%2FxEzXn7NO4AdvLlfzgF1R7KouzTtd%2Bvy9MpcQg3KJdHcSIN4CH6OqNxQ1FEOHzczEJrpeZppVwP7gjxKINmYY866nqiw97PFZh3W83HKvZDLcLd0XmcYot28ApI6aJhOOW4Rs42oD0lDmxdXiMYv3NVjH1COoS7we7PfTQKrV3TBnwG1lfEE87o2B2oyvfc1N0TMEtAUEepSrEWIGz04iOjf7aMclGlksgCjNtQ6B%2FUc4CIo6pyko%2BPTvUlamEdeE4%2F1JYFQJ7RcsbvdjiGqpHEiDv9kMXKibNoThi4R5sXYyHCvVOzL3QZrUDMcXiO9jyZlimMIYOQtar7mWVYWP9tH2IlF%2BTj5vBMJHu08QGOqUB0RL%2BVmh9TxYSlyPvZFoeAWawxZY0nTgLecEFG3fKHFOcUQ%2FhjNQD4Uggsb12zj2owmKLwcKKsXUQsvtWy6pvMw4%2BVVa9JZnbWxmohTQHCTbOLAPh2rBrlgVq2OqUSZ6%2BycB%2BNQkdzy8gTnx%2FQ24f3TxjzVSEt7wPs7cvG6dYQuOuNKc%2Bks1lH6GdrQwlFgBMI%2F92BFUvlU4FvN2xA8FZkrh9eboO&X-Amz-Signature=d597f502082123190966d18180fde8740e77ec9dabbb709c796b67be2fc4ead8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
