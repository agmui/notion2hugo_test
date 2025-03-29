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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFBTMDI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCGVBY1cweMSW%2BBScsGNol2gHdbFpOAzflTUy8cmy6qgQIhAOKyNxJikKrszwuyh1cpgtAnocy73hqtEauG6qwJ09NEKv8DCHEQABoMNjM3NDIzMTgzODA1Igx9xBImDtuN0ya81fIq3ANPJCS9IhRDDfMVBg%2BURY1IlQIzx098Zs5YKo4g0MnUljopsB7uxcah%2B8Va%2FSF1OqtZ%2FXBAxpBAtCJ72Hc1b7oiFlVGNTeiADmYjoV8ov0fnURn9GtkovCIe9KhRwrIQimI4QraGpWFtcN31PcJIbqtPRZE6Mc%2FsgMQ9hp6iolPga15qsPhPgtd8GJesQEc54aFZa0UN%2FdtWvxxRWmHotbVPZgYwYbJgOs1NktHyuzRUQELdFexbELkmqgRI3DDI5NAWFwWfUeSDVKbGAnJfc5ddKgHbWp%2BsK3d9w%2BxSSuOuJ8yDob1N10TKdebehlcT4ZHnemsR4vn2wFRcG1tP7oCYky4QytpxddWXUqpsZgxRJMDQKicYqLS2Vtfw5hQaCgrDnzSMB3OcmUisg8mdB55yU2aWk21GgUvuVDDWi4Xgrzdzi3LB%2FcdKCkYiGpUF507CGWFwgEvr09hu3%2Bsc05fGWIESVe0JG%2FQt%2FjC%2F%2BZB%2Bva3UjkcqcoaORl9YbknY5uSnZJ6SYdCE2uOmWnw%2BfOE8UnxOHXxCHh0N%2F5ahf2NW1BV%2FWGVeNGkW20sTe5eq6l7C1lfs5kbN762SIN%2FbhnLwjhXBWGB8yz%2F7jTGyWPi39nYhNbnBSe7NHFIATC%2FxZ6%2FBjqkAXXBIvUE%2BzJvz6Ra2nb4mTHyt2QLEgofl6osou8eDA5rDAlfwpADCaVwRGMD54eMTnnGuCD99nS6qyzVW43vXgG%2FBBr5XnjpZsRmOuJKSabWI8rt6uqz0uiy6PleRgSHc5wjsfu74vzdGrCbM0tzV5hXRGF7qADeri21gCjgMWV05d9h3UeYylJxsxkDJ5d1tmLX7JxqyXFMs9Iqe%2BqREfOd3JgM&X-Amz-Signature=4240b0aff6a411326c526b4c4ae513599b480cb133a9a88e1f9ccf1a916a35ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFBTMDI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCGVBY1cweMSW%2BBScsGNol2gHdbFpOAzflTUy8cmy6qgQIhAOKyNxJikKrszwuyh1cpgtAnocy73hqtEauG6qwJ09NEKv8DCHEQABoMNjM3NDIzMTgzODA1Igx9xBImDtuN0ya81fIq3ANPJCS9IhRDDfMVBg%2BURY1IlQIzx098Zs5YKo4g0MnUljopsB7uxcah%2B8Va%2FSF1OqtZ%2FXBAxpBAtCJ72Hc1b7oiFlVGNTeiADmYjoV8ov0fnURn9GtkovCIe9KhRwrIQimI4QraGpWFtcN31PcJIbqtPRZE6Mc%2FsgMQ9hp6iolPga15qsPhPgtd8GJesQEc54aFZa0UN%2FdtWvxxRWmHotbVPZgYwYbJgOs1NktHyuzRUQELdFexbELkmqgRI3DDI5NAWFwWfUeSDVKbGAnJfc5ddKgHbWp%2BsK3d9w%2BxSSuOuJ8yDob1N10TKdebehlcT4ZHnemsR4vn2wFRcG1tP7oCYky4QytpxddWXUqpsZgxRJMDQKicYqLS2Vtfw5hQaCgrDnzSMB3OcmUisg8mdB55yU2aWk21GgUvuVDDWi4Xgrzdzi3LB%2FcdKCkYiGpUF507CGWFwgEvr09hu3%2Bsc05fGWIESVe0JG%2FQt%2FjC%2F%2BZB%2Bva3UjkcqcoaORl9YbknY5uSnZJ6SYdCE2uOmWnw%2BfOE8UnxOHXxCHh0N%2F5ahf2NW1BV%2FWGVeNGkW20sTe5eq6l7C1lfs5kbN762SIN%2FbhnLwjhXBWGB8yz%2F7jTGyWPi39nYhNbnBSe7NHFIATC%2FxZ6%2FBjqkAXXBIvUE%2BzJvz6Ra2nb4mTHyt2QLEgofl6osou8eDA5rDAlfwpADCaVwRGMD54eMTnnGuCD99nS6qyzVW43vXgG%2FBBr5XnjpZsRmOuJKSabWI8rt6uqz0uiy6PleRgSHc5wjsfu74vzdGrCbM0tzV5hXRGF7qADeri21gCjgMWV05d9h3UeYylJxsxkDJ5d1tmLX7JxqyXFMs9Iqe%2BqREfOd3JgM&X-Amz-Signature=568701a832eaf74c720e6758ef580421efba14f3d561ea194c6cce571336da88&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
