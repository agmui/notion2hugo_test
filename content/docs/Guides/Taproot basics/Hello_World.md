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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47O6JLG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCID1hoBhws6IhevnTqYJjtdao3wt3uNnvNeRjNaxTPwCAAiBNGEgM4u7wBLVdftd%2BaBrw%2BPYisOXTQrjVTHZK9TgDDCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMJZhsJT7out0i%2B0NUKtwDxDe7szTzjiwZ%2B7szYjhpJPYcjMtdOtEXWBxbyD969nu9Oj2BmRAw%2Brt0INYbPnRWAqoLI%2B1PCCth8ZF90jbKyH8qUdEcTF8WjLWF%2BE7Aje8k%2Bexc58gtjvssXxj2B50Qbqtvnq7mwx2MGQ6TqZeiXzY94CJL0e8LSqRWCGXI7R%2BdOEsAXWEE6%2FkO8PDNNb74weyN6vP%2BNjpJ6di9J8BwXmoqkWTljFXBW8ibQpexm4YQ%2BbvXGblS9gxpnCreOG5eRLqVXGoz%2F8%2ByYEXZxd%2F0L%2BUL81NCeYohOIo%2Bu5G0fJ9SI2dyhND6RfUMNaFyRmzxyC7F1YzGv6K4ULAu8DfrzTTmTJidUX427aB9L%2F0P%2Fe%2BzQSEgR7PVSZnXYThRl%2BvWrlhoJMrXAiP4sGZJKS2lt6JDkdg6osK18AQsWEh7bh1VGE8Xr5rTGSN6fc4Xdai0ub5tF7cW0yI0SNFNuQfvKbsZk5RIpNhKs2pQSuoOUt4R86rVvv2gpIT0ed3MaReRGlS8uwk3eGA5QDb2QgrK7K9E7mWfvwheA%2FfkEUy6MkDkSYx5aJDPsowUj6tYyfEaT1BY58KoPfhKUdphpoxG%2BijYokUwTUeBmQUxPTOqREMMm8fgtE%2F6s1Rajw8w4rGJxAY6pgHyhMwtSe%2B6zXv9ai4yICxXPS3D8NsmxkltaShY6%2FokDgxV%2FzHm0Oec6CWz3EJoLxP%2FFrZJExi9wgbjCyj5x8MvvKPOYdDOQWUMqgrlbwXMRsqSYpRjRUyqODhiZnzxYVPpOJ3vHfdGCT9%2B9GeGIWzK%2BsoHKyaNSjk%2F%2FlI%2B4nSAlbskccJrUI1zPY8we%2FgUcvK3eY4VRhxyRPIt7T0cA5mHcGLUIES6&X-Amz-Signature=191691c5fc116554950fa37bcf995f1864f12a0384ebd7692c9eea853b5a9ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47O6JLG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCID1hoBhws6IhevnTqYJjtdao3wt3uNnvNeRjNaxTPwCAAiBNGEgM4u7wBLVdftd%2BaBrw%2BPYisOXTQrjVTHZK9TgDDCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMJZhsJT7out0i%2B0NUKtwDxDe7szTzjiwZ%2B7szYjhpJPYcjMtdOtEXWBxbyD969nu9Oj2BmRAw%2Brt0INYbPnRWAqoLI%2B1PCCth8ZF90jbKyH8qUdEcTF8WjLWF%2BE7Aje8k%2Bexc58gtjvssXxj2B50Qbqtvnq7mwx2MGQ6TqZeiXzY94CJL0e8LSqRWCGXI7R%2BdOEsAXWEE6%2FkO8PDNNb74weyN6vP%2BNjpJ6di9J8BwXmoqkWTljFXBW8ibQpexm4YQ%2BbvXGblS9gxpnCreOG5eRLqVXGoz%2F8%2ByYEXZxd%2F0L%2BUL81NCeYohOIo%2Bu5G0fJ9SI2dyhND6RfUMNaFyRmzxyC7F1YzGv6K4ULAu8DfrzTTmTJidUX427aB9L%2F0P%2Fe%2BzQSEgR7PVSZnXYThRl%2BvWrlhoJMrXAiP4sGZJKS2lt6JDkdg6osK18AQsWEh7bh1VGE8Xr5rTGSN6fc4Xdai0ub5tF7cW0yI0SNFNuQfvKbsZk5RIpNhKs2pQSuoOUt4R86rVvv2gpIT0ed3MaReRGlS8uwk3eGA5QDb2QgrK7K9E7mWfvwheA%2FfkEUy6MkDkSYx5aJDPsowUj6tYyfEaT1BY58KoPfhKUdphpoxG%2BijYokUwTUeBmQUxPTOqREMMm8fgtE%2F6s1Rajw8w4rGJxAY6pgHyhMwtSe%2B6zXv9ai4yICxXPS3D8NsmxkltaShY6%2FokDgxV%2FzHm0Oec6CWz3EJoLxP%2FFrZJExi9wgbjCyj5x8MvvKPOYdDOQWUMqgrlbwXMRsqSYpRjRUyqODhiZnzxYVPpOJ3vHfdGCT9%2B9GeGIWzK%2BsoHKyaNSjk%2F%2FlI%2B4nSAlbskccJrUI1zPY8we%2FgUcvK3eY4VRhxyRPIt7T0cA5mHcGLUIES6&X-Amz-Signature=692d353e9d50f04a9b74f55145dd8ebbef06c02c122962ecfda0adb41f50223f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
