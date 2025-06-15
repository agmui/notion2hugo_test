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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQNZ2P%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDsZv%2B%2FAPQkbUswH7ueXimw2%2F6bgRA7s48TZDLPmPWLSwIgJ7SrxqfxrE64ZgcfKHqXt0eaO69%2FLeQ9Eht9oLXoqpYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEHkbLoxGA2%2F2jmOYCrcA39dA2BpVfI8%2BZ9QDI2mAQCjD1KfwY50aisutEvDsd4FiS5I1tFPCCIErvtJ9qKe0Ll3pNrqSLO0Zi0Z36lTpORZ2b0DB977zDQ2DfxojjCNyl4%2BVVmDuJ79N6pxwrCJMGF9n2X%2Bvy59iwlpTLklIyknakaRlsE%2BYc7LTXkzhAbb4C5YtU3bPUA9FLvH7joLM%2FSDUNqclaiHzJ0uhzOQSePgxv7RaDzCf72DEDB69TzZ8jnm4z8FawVHRBgW0KbaL1EyeZIyEha%2F%2FpI38IRNlPOJzXRUHQlg1JBOlbNxIPkgJhypzkNHNOy77vvWKBYBIoMxYTTsfwjm6YweRRoMcCJ1JUM%2B07nWhVSHxYxaaY6frjwhQpdWVvr2zyS0lxSKRMcHaWxXrQMHO%2BQqYgjemAaCxbO7D7pB69lZiTjtSsnBlh4uWI7HTO%2FLSvAW5h4g0UfY%2Fu6Bg%2BOgdcbLKE70QxUDDFiTltSNvap8OoTijXrFgTUHoG4Uf7Ls5flgi1Vuftx1CeGnefvMXjtf3FwAEZiKLINrFnYppoQ5Vh5RnjthRW%2BCClIwTMc%2BsQX0JR3HeGvgraPwNcxavzUpGKHWovc0WY1lp5IvlmwxwrBEjL%2BuOsnC9BuIo7owmRZTMKnOvMIGOqUB2F%2BQ93WST2THsKBlzGkmaRlrZMuwIcEpnL%2BGdROB5QKJ8fIr3nEFM8l9KELLXxCs0nWPLoz9PfKRgVoJmMo0B6hU6QUoAOTT7JDxHmJpbhMJX8Y%2FNIAFlYvGCmrxRqzarpo%2FgBG1WjeFVHBv0PBFV1bkXzzf7l%2FgcI9TyyHhqr9tOGwr732EhYJab2POJ8fFoBCgP1%2FxuZMmJgK%2FgXptzdBlvvt4&X-Amz-Signature=c1a8f50dcc6fd04cb4ed6b017c0da83af69e56014f191ca544df9a41b2e36d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQNZ2P%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDsZv%2B%2FAPQkbUswH7ueXimw2%2F6bgRA7s48TZDLPmPWLSwIgJ7SrxqfxrE64ZgcfKHqXt0eaO69%2FLeQ9Eht9oLXoqpYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEHkbLoxGA2%2F2jmOYCrcA39dA2BpVfI8%2BZ9QDI2mAQCjD1KfwY50aisutEvDsd4FiS5I1tFPCCIErvtJ9qKe0Ll3pNrqSLO0Zi0Z36lTpORZ2b0DB977zDQ2DfxojjCNyl4%2BVVmDuJ79N6pxwrCJMGF9n2X%2Bvy59iwlpTLklIyknakaRlsE%2BYc7LTXkzhAbb4C5YtU3bPUA9FLvH7joLM%2FSDUNqclaiHzJ0uhzOQSePgxv7RaDzCf72DEDB69TzZ8jnm4z8FawVHRBgW0KbaL1EyeZIyEha%2F%2FpI38IRNlPOJzXRUHQlg1JBOlbNxIPkgJhypzkNHNOy77vvWKBYBIoMxYTTsfwjm6YweRRoMcCJ1JUM%2B07nWhVSHxYxaaY6frjwhQpdWVvr2zyS0lxSKRMcHaWxXrQMHO%2BQqYgjemAaCxbO7D7pB69lZiTjtSsnBlh4uWI7HTO%2FLSvAW5h4g0UfY%2Fu6Bg%2BOgdcbLKE70QxUDDFiTltSNvap8OoTijXrFgTUHoG4Uf7Ls5flgi1Vuftx1CeGnefvMXjtf3FwAEZiKLINrFnYppoQ5Vh5RnjthRW%2BCClIwTMc%2BsQX0JR3HeGvgraPwNcxavzUpGKHWovc0WY1lp5IvlmwxwrBEjL%2BuOsnC9BuIo7owmRZTMKnOvMIGOqUB2F%2BQ93WST2THsKBlzGkmaRlrZMuwIcEpnL%2BGdROB5QKJ8fIr3nEFM8l9KELLXxCs0nWPLoz9PfKRgVoJmMo0B6hU6QUoAOTT7JDxHmJpbhMJX8Y%2FNIAFlYvGCmrxRqzarpo%2FgBG1WjeFVHBv0PBFV1bkXzzf7l%2FgcI9TyyHhqr9tOGwr732EhYJab2POJ8fFoBCgP1%2FxuZMmJgK%2FgXptzdBlvvt4&X-Amz-Signature=3779c0b5e9fde1c81d95756c72c37a129b9c4de0c38ad8cea62a87728b8aa1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
