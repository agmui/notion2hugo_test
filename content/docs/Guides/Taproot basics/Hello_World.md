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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657B556Y3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMD%2BGpDW7pPtP8fT4jfuNdNGSrtlc2hJfn76E4W9OwnAiAa%2Bfu%2FlrzyjvwqomUHehQqWd2BLdiRF0vT1NRBuiMXICqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyj8zGfvJMRC3R69vKtwDfjkO81LOTCgVvPdVS7eUVi3zaudINEmkbQxQxnI218gXa1FgGcLC%2BlzBeVETU577YsxeaVSJBRPyIwuyz1NZ%2FHbC1F5g0fSCvob4mXsSYfBso5yHWbAT2An0mfQ%2FYSMAZwzraRoQeLY30wzLYBKMz6taXomiie50B8DN0bFaQ3qV%2Bax4bT44unZVu0Z6XvROEbVyYfJTfXA0VopZgXXHuUbYem2s7hCCgNaFOHFJ%2FSczg2vAnKUqjNMLykFCXL71F1KrqnRmfbCK9Wj44woZIBvvAxFzLyT3E1CIm03QV1oF1x9yCihKibe44cMK6qGpLns3kVfRTna1sMqFqAoGWCVkZr%2FOXxFnyzuZjrp2jWr4diKhoQmMfzWDPlSGoOtwnY719aZu0ut7qS2uPXWEiIldJwGgqCtDBFFqVbWjO8cDhMn%2BTDd0zfvkIR%2BFKeOXUC8BrIOCL18lS8NItp6agwZ4ztCO8SeLj6CRWXQl1%2BO%2BqiMGYk4Vt77kmEWs%2BjJ9sRkeufEN1Eq26mpREMpUs9n5twSKAntGlRnc%2Fd%2BvlRjUlu4C1z%2FB5FzMHpYBG8Ykd2o%2F1Xz%2F4qN14cRw5mSK4dLrZDpJ172nAKrhk0Ft5s8o0WBk6Quf0W5Gse4wlv6jxAY6pgFwEfYDmcFyYZ1enU166ztXELVOmHLou0q6kLu3ZYpdtEIZKItFqxhaScow7Rn3T1xKQhSwkUNqS0zxhEMJjA1fpP6BNDzXrHoNM5NSQFyPETPlO5smwO2pkvaMB5BD2YpyX8u4DIWqLXviqOQaRGSi2QU8p3FSFb8ZIH4ErHw50YPwLyx9Nzc4WfNif4Yqz2OdlIOUfK470v5VyxqzgWqMrerB8CS7&X-Amz-Signature=5e6a88c49b857a126f887d9a6fddbc8973fbf09010a28ceeb75e89227a119847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657B556Y3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMD%2BGpDW7pPtP8fT4jfuNdNGSrtlc2hJfn76E4W9OwnAiAa%2Bfu%2FlrzyjvwqomUHehQqWd2BLdiRF0vT1NRBuiMXICqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyj8zGfvJMRC3R69vKtwDfjkO81LOTCgVvPdVS7eUVi3zaudINEmkbQxQxnI218gXa1FgGcLC%2BlzBeVETU577YsxeaVSJBRPyIwuyz1NZ%2FHbC1F5g0fSCvob4mXsSYfBso5yHWbAT2An0mfQ%2FYSMAZwzraRoQeLY30wzLYBKMz6taXomiie50B8DN0bFaQ3qV%2Bax4bT44unZVu0Z6XvROEbVyYfJTfXA0VopZgXXHuUbYem2s7hCCgNaFOHFJ%2FSczg2vAnKUqjNMLykFCXL71F1KrqnRmfbCK9Wj44woZIBvvAxFzLyT3E1CIm03QV1oF1x9yCihKibe44cMK6qGpLns3kVfRTna1sMqFqAoGWCVkZr%2FOXxFnyzuZjrp2jWr4diKhoQmMfzWDPlSGoOtwnY719aZu0ut7qS2uPXWEiIldJwGgqCtDBFFqVbWjO8cDhMn%2BTDd0zfvkIR%2BFKeOXUC8BrIOCL18lS8NItp6agwZ4ztCO8SeLj6CRWXQl1%2BO%2BqiMGYk4Vt77kmEWs%2BjJ9sRkeufEN1Eq26mpREMpUs9n5twSKAntGlRnc%2Fd%2BvlRjUlu4C1z%2FB5FzMHpYBG8Ykd2o%2F1Xz%2F4qN14cRw5mSK4dLrZDpJ172nAKrhk0Ft5s8o0WBk6Quf0W5Gse4wlv6jxAY6pgFwEfYDmcFyYZ1enU166ztXELVOmHLou0q6kLu3ZYpdtEIZKItFqxhaScow7Rn3T1xKQhSwkUNqS0zxhEMJjA1fpP6BNDzXrHoNM5NSQFyPETPlO5smwO2pkvaMB5BD2YpyX8u4DIWqLXviqOQaRGSi2QU8p3FSFb8ZIH4ErHw50YPwLyx9Nzc4WfNif4Yqz2OdlIOUfK470v5VyxqzgWqMrerB8CS7&X-Amz-Signature=6d001547a7719e4057473e469fecbe48fde8295c79be469366b90c6525379ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
