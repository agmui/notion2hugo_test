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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F637FTQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCZ87u9qb2hGqtHLRWIrSVzEa2g8vzliNnq3bUz7bswBQIhALN0Z4RoeG2Ly7WTy8kh9a4hxPU8yYzn6HqW59pRwMnkKv8DCCoQABoMNjM3NDIzMTgzODA1Igxzgd7T0CNJALmT6dIq3APp2GS87oepFyRFMJVIvtVWB5Q%2F4DI3aHs9cQsRmQjaSLTUB1jBhPlNA8QI%2B3P4meyyinzz40qyYC3iJnWN%2FTnXd7voRr4VnDcvfg%2FOQPPFCxn9QhjVQyLtsoefhGbjKhSlEdPTzGVoacWQ0W%2BOOYG7TRGY64eZvyuqkuCM2voSvRHcHpiyPpbHKM3%2B%2FvXzor5mXRxh3mgdNvnL4Y2gqzz%2Ft2X7AjclgtVTBKmlEECUc7fz0rwQ5eaFDjXcpd2BZF5b0bIcn0hkaJPa83WfhXMZ0EmRmVLz%2Ffh2DHWkEvnNBBXajiHs9Pe2j0Zr4v9jBnguz%2FtCU1SyxeuK%2B9D1yrHKRnCwCHVQXuBZMJMwHbendEmNp6iO9i6TqHnMS3JFcO9L5WVOxURvigkmMZ2P73YXCT25ODmAtQVLgmiKxa%2Fsv2aEfaZfhwbihJnpv50ZRhOAAyX30jSWXbjYz42rBP8cYouTf1HEq9xpOmP72uQ1YYw3u29AapXPUaW1scfNKALq8kbyye2lZ4gSJ73fU1ksCiyanR0%2FTDOrsQOEgEzW0aPFIjQQAFM1%2FnH1BQZtTyZiHJOOazapo7UgEk8f0MwC3ETb%2Fx0%2FC6hraYVXMHqR3rqL8hCXfo%2FsD%2BPGHTDwkby9BjqkAXmXu7WfG3gUx4apVcu5PN9BmUzGB2h4I92T16aovMcQRhGUxx5QucDue3r9FDZY%2FwTUPE001u%2B58TGdH4l9NjtmfwuHTUvBDpzF%2Bana5W2EL4xlDLnPA4L4Iu6cd5FXqcL39ek5ypRrprwYunnjNpqB6ORmFyrbDc8lqODMXQzoz4pQBWQi3hTOy61%2BtTBXkbfkreTaRAiFcTZc4X6uJn9p%2FCyZ&X-Amz-Signature=98554aef34eb2585224bf84e0abfc66b94190d79b1fe2bff8cd3ebaa12c7160d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F637FTQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCZ87u9qb2hGqtHLRWIrSVzEa2g8vzliNnq3bUz7bswBQIhALN0Z4RoeG2Ly7WTy8kh9a4hxPU8yYzn6HqW59pRwMnkKv8DCCoQABoMNjM3NDIzMTgzODA1Igxzgd7T0CNJALmT6dIq3APp2GS87oepFyRFMJVIvtVWB5Q%2F4DI3aHs9cQsRmQjaSLTUB1jBhPlNA8QI%2B3P4meyyinzz40qyYC3iJnWN%2FTnXd7voRr4VnDcvfg%2FOQPPFCxn9QhjVQyLtsoefhGbjKhSlEdPTzGVoacWQ0W%2BOOYG7TRGY64eZvyuqkuCM2voSvRHcHpiyPpbHKM3%2B%2FvXzor5mXRxh3mgdNvnL4Y2gqzz%2Ft2X7AjclgtVTBKmlEECUc7fz0rwQ5eaFDjXcpd2BZF5b0bIcn0hkaJPa83WfhXMZ0EmRmVLz%2Ffh2DHWkEvnNBBXajiHs9Pe2j0Zr4v9jBnguz%2FtCU1SyxeuK%2B9D1yrHKRnCwCHVQXuBZMJMwHbendEmNp6iO9i6TqHnMS3JFcO9L5WVOxURvigkmMZ2P73YXCT25ODmAtQVLgmiKxa%2Fsv2aEfaZfhwbihJnpv50ZRhOAAyX30jSWXbjYz42rBP8cYouTf1HEq9xpOmP72uQ1YYw3u29AapXPUaW1scfNKALq8kbyye2lZ4gSJ73fU1ksCiyanR0%2FTDOrsQOEgEzW0aPFIjQQAFM1%2FnH1BQZtTyZiHJOOazapo7UgEk8f0MwC3ETb%2Fx0%2FC6hraYVXMHqR3rqL8hCXfo%2FsD%2BPGHTDwkby9BjqkAXmXu7WfG3gUx4apVcu5PN9BmUzGB2h4I92T16aovMcQRhGUxx5QucDue3r9FDZY%2FwTUPE001u%2B58TGdH4l9NjtmfwuHTUvBDpzF%2Bana5W2EL4xlDLnPA4L4Iu6cd5FXqcL39ek5ypRrprwYunnjNpqB6ORmFyrbDc8lqODMXQzoz4pQBWQi3hTOy61%2BtTBXkbfkreTaRAiFcTZc4X6uJn9p%2FCyZ&X-Amz-Signature=d8a79afd81a3d40b539f5635271a6a195e6bd25588041f2bbc3c37b5ecd7ab5f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
