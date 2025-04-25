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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CI4KSJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDICzpEQ4t8nhSm9BuEi5c%2BBe%2Bh4TWTksCn0rvQDFOrFwIhAK3OWHVmo47Vly5YR0gTdBcKRFpU%2BDWr8RHy7VXlQwhfKv8DCC8QABoMNjM3NDIzMTgzODA1IgwkD0AYF81oUw2mnR8q3ANMyeqW%2BBoiSCa6cRoDunzSd7CIONpOmjtKec394AIQXrjCDvO0W38WvTmkAR%2F0vKcNOBm8MBpqRgKZrqfe%2BTaqr01LR0t60oIT6Gj26DrHpP20NPNg0Q78hsqZxpwISSeDbGIAtR85SyznbmFDfMCX%2FdHfnkWD6Yp%2F8MiBzGfLrlK32hRbLpHL0VgYGnQQ0gbIVjv%2BN9KG%2FyOUhmoLxKT3rHnQDK3tszO5iO7OYhWE5o0Cak%2F4Boc2cXaGWvLY7%2BZBIX7HhIOLbqWX19rsxxOJX88QGc%2Fy6jxZJpwmlmD2p91eI%2Bw5xMsqWyptxQQErZkfXfLRlZhiaXRowWGoJ6ZLDLGzqN3xLv4zrA2KfWJWVO%2FNjR3NLUdszq34WySIne7Fo84vPOLV8%2FwDMewsQFtZFIywJiAXUEbqT6inv2wUzPrEx8DMQDS15%2FRURK1tpaAxaoDOIYOsB7L9L0c%2FEjOKIPeaIOWjF55XXJIInqtQhVXkpkxEDh3S%2FqpZQT%2BENvDh7k0yi4N%2B3dKrnHuOkNhjG2TSai1KCMVdMZzL8V6d6Y8hsYQYeBsYsE7UsGilGIkUVItYGvvCTE%2FqWpJZXKG%2BQvElpfVlt9DIqpwvB1omxt2LZ6EM8I6CnZMtMTDmtK7ABjqkAeIDVx5ZIXcMZ%2FAGM7GKBa8piz%2By3uXtjhGrs3Yt%2F79FH03ci%2Fd6kKgiCW4BGx3k%2FacU1Mi9%2FQpf51KjHfu5pKYPom1dvrYzlSJMl7U4wPAYik2xF0DJeDJMcmxKdRiI83FJeXIj49ztKXYOJaz4vmkVhh59dOjy2a2sgP0df54wpi0v7Y7JMu2Q0N2mS%2Fzof3MLoG3ofpXkG8qzl6xwW0tLneYr&X-Amz-Signature=92e6a0b7071fcc02768bc0f7ca108f02752933c3384c7cb5671c1c43f34090bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CI4KSJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDICzpEQ4t8nhSm9BuEi5c%2BBe%2Bh4TWTksCn0rvQDFOrFwIhAK3OWHVmo47Vly5YR0gTdBcKRFpU%2BDWr8RHy7VXlQwhfKv8DCC8QABoMNjM3NDIzMTgzODA1IgwkD0AYF81oUw2mnR8q3ANMyeqW%2BBoiSCa6cRoDunzSd7CIONpOmjtKec394AIQXrjCDvO0W38WvTmkAR%2F0vKcNOBm8MBpqRgKZrqfe%2BTaqr01LR0t60oIT6Gj26DrHpP20NPNg0Q78hsqZxpwISSeDbGIAtR85SyznbmFDfMCX%2FdHfnkWD6Yp%2F8MiBzGfLrlK32hRbLpHL0VgYGnQQ0gbIVjv%2BN9KG%2FyOUhmoLxKT3rHnQDK3tszO5iO7OYhWE5o0Cak%2F4Boc2cXaGWvLY7%2BZBIX7HhIOLbqWX19rsxxOJX88QGc%2Fy6jxZJpwmlmD2p91eI%2Bw5xMsqWyptxQQErZkfXfLRlZhiaXRowWGoJ6ZLDLGzqN3xLv4zrA2KfWJWVO%2FNjR3NLUdszq34WySIne7Fo84vPOLV8%2FwDMewsQFtZFIywJiAXUEbqT6inv2wUzPrEx8DMQDS15%2FRURK1tpaAxaoDOIYOsB7L9L0c%2FEjOKIPeaIOWjF55XXJIInqtQhVXkpkxEDh3S%2FqpZQT%2BENvDh7k0yi4N%2B3dKrnHuOkNhjG2TSai1KCMVdMZzL8V6d6Y8hsYQYeBsYsE7UsGilGIkUVItYGvvCTE%2FqWpJZXKG%2BQvElpfVlt9DIqpwvB1omxt2LZ6EM8I6CnZMtMTDmtK7ABjqkAeIDVx5ZIXcMZ%2FAGM7GKBa8piz%2By3uXtjhGrs3Yt%2F79FH03ci%2Fd6kKgiCW4BGx3k%2FacU1Mi9%2FQpf51KjHfu5pKYPom1dvrYzlSJMl7U4wPAYik2xF0DJeDJMcmxKdRiI83FJeXIj49ztKXYOJaz4vmkVhh59dOjy2a2sgP0df54wpi0v7Y7JMu2Q0N2mS%2Fzof3MLoG3ofpXkG8qzl6xwW0tLneYr&X-Amz-Signature=00bcfc2ce2bed9e30055cd1900dd6c9fe535f21587e44069f24cb468fd64c54a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
