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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACW2SFG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICC3WZBtqQ1Ck0KF3kuidcSdXqyeX215Qp4dXJG98XWfAiBncV0xdvBc0YERoSJNmVkr1mUs40G3ztwJYHfvjJOdqSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMT7ygp%2FhJAGjhkQnhKtwDA3Y%2FgDiiNaaYcmw5gWDeZ%2FH%2BCdCQWGfKffrAvbVo%2F%2Fh8JX3iwJLk20kA9JJRIIf4BeGNra%2FZEP0fztT5P7MNVPcF5xXPWkH%2Bas1XmN7N%2FVSMTgoGQPG1RKob2jIwpzSVuEOHrUih0TRGQc7HsMtjqAOL7A2a1d61cB0VExWP1Tt%2FyMvAB1UQaA%2B1o5TJkj3CyZV18nZIb79vod0Vv14Ghae5ZszAKQPqRDT%2FTsCbJBDbQ0LWV4D3PD3F5oz8MpOOjqApPsubddqPgt5h2K9gdzZamI6CcMzbzrjc5FFohYpbxEMhlPnavfZlXVbFM65oRD%2Fv4w8yb%2FVG0SySJC%2B7YQ6zCyBdrnKnjiVj5LghocudQp9Iz0IhEcqYCxipzpWjQXKW4XJyvo%2BQgWls6Hy%2B2zf3qaQnwVNHp12Lw%2BTXB5iPt6UPyQgKfd%2FgF046JhfT34YKFuGf0RIZBePHiuVuILTTDbvLzX7SSEKnRx3xMwqrNsyUEtiuEUcqEQAWOD1PAk8LaODIgLBOrmmzeWrlMcrjmJ5yHMu35Bemi5f606ESaFljcWctq2yopvFZillvFdA5Yn6VpKsCCdt%2FruTUOzppHURhF69LEZBs5jSjIkhhYpSBav6YE3Vpf14wjIO%2BwAY6pgE25H5xyBc1fQ%2FBwRaJ0gUJqknW4hn2drAKh37lVe6mgdrKwlKi1qTDIvcAKHuV0EgVocmjNGKuOjIWR7hzkWk7aIDqPSOz5NnpwfsFCpYj3ocexj3HuOHGJ1J2Du9uClar7C2mO8%2FJFNhcNZMNIqfVQwCmKkOYrfeYVHcfsr3zYTmwDLbdxwq%2BpBMPFODdufKQheEYKH68lfZcnEgEMzS5bu%2FzRSax&X-Amz-Signature=9911ffb78e37a521629cc15e578c5b604ad366f1c76b48cfe168c62ab9c5c3c7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACW2SFG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICC3WZBtqQ1Ck0KF3kuidcSdXqyeX215Qp4dXJG98XWfAiBncV0xdvBc0YERoSJNmVkr1mUs40G3ztwJYHfvjJOdqSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMT7ygp%2FhJAGjhkQnhKtwDA3Y%2FgDiiNaaYcmw5gWDeZ%2FH%2BCdCQWGfKffrAvbVo%2F%2Fh8JX3iwJLk20kA9JJRIIf4BeGNra%2FZEP0fztT5P7MNVPcF5xXPWkH%2Bas1XmN7N%2FVSMTgoGQPG1RKob2jIwpzSVuEOHrUih0TRGQc7HsMtjqAOL7A2a1d61cB0VExWP1Tt%2FyMvAB1UQaA%2B1o5TJkj3CyZV18nZIb79vod0Vv14Ghae5ZszAKQPqRDT%2FTsCbJBDbQ0LWV4D3PD3F5oz8MpOOjqApPsubddqPgt5h2K9gdzZamI6CcMzbzrjc5FFohYpbxEMhlPnavfZlXVbFM65oRD%2Fv4w8yb%2FVG0SySJC%2B7YQ6zCyBdrnKnjiVj5LghocudQp9Iz0IhEcqYCxipzpWjQXKW4XJyvo%2BQgWls6Hy%2B2zf3qaQnwVNHp12Lw%2BTXB5iPt6UPyQgKfd%2FgF046JhfT34YKFuGf0RIZBePHiuVuILTTDbvLzX7SSEKnRx3xMwqrNsyUEtiuEUcqEQAWOD1PAk8LaODIgLBOrmmzeWrlMcrjmJ5yHMu35Bemi5f606ESaFljcWctq2yopvFZillvFdA5Yn6VpKsCCdt%2FruTUOzppHURhF69LEZBs5jSjIkhhYpSBav6YE3Vpf14wjIO%2BwAY6pgE25H5xyBc1fQ%2FBwRaJ0gUJqknW4hn2drAKh37lVe6mgdrKwlKi1qTDIvcAKHuV0EgVocmjNGKuOjIWR7hzkWk7aIDqPSOz5NnpwfsFCpYj3ocexj3HuOHGJ1J2Du9uClar7C2mO8%2FJFNhcNZMNIqfVQwCmKkOYrfeYVHcfsr3zYTmwDLbdxwq%2BpBMPFODdufKQheEYKH68lfZcnEgEMzS5bu%2FzRSax&X-Amz-Signature=017fee073f72ee036068c1865dc2b962741d6de8815f94fd771c6eae6e52ff5d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
