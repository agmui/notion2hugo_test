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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVA34BOJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLqaLiohmfaJ23VpI0j436uoaWtIBs0oKmETfQtR4ymwIgUGo50NmnWrtF1WqgyVx9C8S4zfLIgcBISfwURMPNlEoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKx7sLtj8OSQxn0ypircA1kXdIXlXw8JkWUuEcXt3xwtivXQ1j%2FPqX90BvFvEN9vgHbDqbsAj3I8SqxbsXyLP9dpNUzbIx26YiSTnf9WoBYKcjyivizDXdRQAhxZI23tSYGueGW2iPLRaeHeHawFmM%2FQ1RkEcAEL0EW%2BYyYv0hILhw493G5gxw9wY7JFUud7x4c4HmK45Qigyp5LbiiDnEAFc28Yty5tHL6AMLB%2B5xTlKqVksN6Kpg3gLfDLmUPX3tOMfcU3deqnBaKPkcbRg49DF5PM6LseZqt%2F9sVsDVMR%2F%2B2oYjLv04jWhuaCLBd0STYant%2FeGvkOcIEPz5I7%2B7RsWOYyMII%2BYXbIOT1XJhma3jHbSAUe0gUhg2Gbrv%2BhbmEMcSQifAzZOBihA2%2F2o%2Fd1TLhdDOSizkvqi%2FKFnsci6gZQvFs75EJ6OFnLL8moIaOC50HEwLCgXhFlI9tWFvZyzcxiIs9JMY2iOWY2GCpqIjHw9hLwxGQuYrQ6jCEOMSkPhrFoJUyFVJZnrFXK8QDzMCIWhdVM9DvYgG%2BMwTpjJYjpxD8KDgxnCX7QZBjDIYinS5rv2cXxz9b56I7X%2BRnOnwhxJ3Ho04eacRmhfUXa8VljfUqlH%2B%2FtjlYlMjHcC1cES2QPNPtvg%2Bg6MOz07rwGOqUB72QL3%2Bg3Rerf3YqxBpru%2BuqimCu8%2FXvBo7m7GI7ZJQx9r49olBu6GVxhKllcoroLWAbLUgTfK%2FkT0W3JL3DbhyyYC%2BsHZmwIARSRzGuM9%2BK3zVP0qTJW6tiTfoCECPcipCk7ej0GpFdepfYbfzdEMV4n7OfNUU8WKOKM2Lr9W4DHXaOKeW%2Fi2%2BQvcX1zA6XuQ1Qw6A5czBpf7sd0pX%2FxqYohWM34&X-Amz-Signature=2f3eb56cb716e50dd0632a24af68970df6ae1d451c371fd8f070aed55d2e1c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVA34BOJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLqaLiohmfaJ23VpI0j436uoaWtIBs0oKmETfQtR4ymwIgUGo50NmnWrtF1WqgyVx9C8S4zfLIgcBISfwURMPNlEoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKx7sLtj8OSQxn0ypircA1kXdIXlXw8JkWUuEcXt3xwtivXQ1j%2FPqX90BvFvEN9vgHbDqbsAj3I8SqxbsXyLP9dpNUzbIx26YiSTnf9WoBYKcjyivizDXdRQAhxZI23tSYGueGW2iPLRaeHeHawFmM%2FQ1RkEcAEL0EW%2BYyYv0hILhw493G5gxw9wY7JFUud7x4c4HmK45Qigyp5LbiiDnEAFc28Yty5tHL6AMLB%2B5xTlKqVksN6Kpg3gLfDLmUPX3tOMfcU3deqnBaKPkcbRg49DF5PM6LseZqt%2F9sVsDVMR%2F%2B2oYjLv04jWhuaCLBd0STYant%2FeGvkOcIEPz5I7%2B7RsWOYyMII%2BYXbIOT1XJhma3jHbSAUe0gUhg2Gbrv%2BhbmEMcSQifAzZOBihA2%2F2o%2Fd1TLhdDOSizkvqi%2FKFnsci6gZQvFs75EJ6OFnLL8moIaOC50HEwLCgXhFlI9tWFvZyzcxiIs9JMY2iOWY2GCpqIjHw9hLwxGQuYrQ6jCEOMSkPhrFoJUyFVJZnrFXK8QDzMCIWhdVM9DvYgG%2BMwTpjJYjpxD8KDgxnCX7QZBjDIYinS5rv2cXxz9b56I7X%2BRnOnwhxJ3Ho04eacRmhfUXa8VljfUqlH%2B%2FtjlYlMjHcC1cES2QPNPtvg%2Bg6MOz07rwGOqUB72QL3%2Bg3Rerf3YqxBpru%2BuqimCu8%2FXvBo7m7GI7ZJQx9r49olBu6GVxhKllcoroLWAbLUgTfK%2FkT0W3JL3DbhyyYC%2BsHZmwIARSRzGuM9%2BK3zVP0qTJW6tiTfoCECPcipCk7ej0GpFdepfYbfzdEMV4n7OfNUU8WKOKM2Lr9W4DHXaOKeW%2Fi2%2BQvcX1zA6XuQ1Qw6A5czBpf7sd0pX%2FxqYohWM34&X-Amz-Signature=2fc06892bbd42435ecfc9e57dd0c04c51070f3ecf7dd195ca63b569a0826f988&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
