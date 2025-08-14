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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMRB457Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDohwcj%2F7XupO79XsN7D375x%2FFWIOTdbACY2ly1iv5aYwIhANAbDzSissgKY%2FIGO0QOg%2FCACwuRP8Rk0b1xqMUNiYJgKv8DCEQQABoMNjM3NDIzMTgzODA1IgxaqQmONsF%2FNiqPbcsq3AMLjkRvsaFL2SswbfeDoZBPb7ENCO%2Fk%2FBHtzcrmq5cayBXaHp6i8sY8%2FtJFov1v4JNV3F6LWq5RR%2FSp3HATiy3MaojQkEx1gg5XnGPN9aEODX81s5NhEy8HJokYnykAYZ8K04rG0uhM8uvreRNpL0eskaurtswzy12QK7U%2BchiF%2BpXhHtGMgPaCywOzyDEq3MsT8iWxzKezjJwyoqWyNs%2Bspuuo9d6a73NY%2FS3bIcnpbleBFkZBRnNHNvKLAtB0myrYDSSkmudustb%2Bc2IcGfEdYQywoVLk2pyPbzC7%2BPwMIGYzOxlR2j3ZXFrKhw4tsATmF46cgMtEpKyOSVFKTF06vlwsOw425u3sTGCSG0YQDIykXGdbdx6K1n6EvPpmD529gnjElAXWk8Roqkj3kujCbJMCAIA1wC9Maqd%2BPROJa2LeWd9MK0ZKYTUHV6osWwM9dZU6PmLc37anFUQTxZnwO2UOATkoAe5iJ8ssU3sujbhgY7p3tH%2F%2BDfDRCwMz05NFjdRKBKE5eodL5V8caC8ORwzfhu6ZHfKotZkKTXd8OUkbfOM2U02xZHbD9UOeHA8%2BBe7dG8qKeDOKX86o114%2FWYk1FoQKfXGg7JAOf61RTGxsFSuJPB6ERTSJojCNhffEBjqkAai0YemBSH%2FuggVoJ6xKBkxZj4HpcyMTzJsT8wb7%2F%2FLrBxtaXrunmYLoOkKD%2FkigXfnP7oR05s7YI4ggmH03o9YvMUoq2i1o72CXK%2B%2BzG5FR2y0WpnXyHeBmJbqPwxBlcg5%2B2ZIfmjwNd8XtZkUhjOKyEfuYSBic3pyiP1oMpK2pBMrZQo1lspmNqE1yAax7SSAvaoCDh2HBChHxTRnEOoUnsLFS&X-Amz-Signature=f19015e871d8bd8e3373f19d0a07bce727d4251758928534cc1f93dcbbb4eada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMRB457Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDohwcj%2F7XupO79XsN7D375x%2FFWIOTdbACY2ly1iv5aYwIhANAbDzSissgKY%2FIGO0QOg%2FCACwuRP8Rk0b1xqMUNiYJgKv8DCEQQABoMNjM3NDIzMTgzODA1IgxaqQmONsF%2FNiqPbcsq3AMLjkRvsaFL2SswbfeDoZBPb7ENCO%2Fk%2FBHtzcrmq5cayBXaHp6i8sY8%2FtJFov1v4JNV3F6LWq5RR%2FSp3HATiy3MaojQkEx1gg5XnGPN9aEODX81s5NhEy8HJokYnykAYZ8K04rG0uhM8uvreRNpL0eskaurtswzy12QK7U%2BchiF%2BpXhHtGMgPaCywOzyDEq3MsT8iWxzKezjJwyoqWyNs%2Bspuuo9d6a73NY%2FS3bIcnpbleBFkZBRnNHNvKLAtB0myrYDSSkmudustb%2Bc2IcGfEdYQywoVLk2pyPbzC7%2BPwMIGYzOxlR2j3ZXFrKhw4tsATmF46cgMtEpKyOSVFKTF06vlwsOw425u3sTGCSG0YQDIykXGdbdx6K1n6EvPpmD529gnjElAXWk8Roqkj3kujCbJMCAIA1wC9Maqd%2BPROJa2LeWd9MK0ZKYTUHV6osWwM9dZU6PmLc37anFUQTxZnwO2UOATkoAe5iJ8ssU3sujbhgY7p3tH%2F%2BDfDRCwMz05NFjdRKBKE5eodL5V8caC8ORwzfhu6ZHfKotZkKTXd8OUkbfOM2U02xZHbD9UOeHA8%2BBe7dG8qKeDOKX86o114%2FWYk1FoQKfXGg7JAOf61RTGxsFSuJPB6ERTSJojCNhffEBjqkAai0YemBSH%2FuggVoJ6xKBkxZj4HpcyMTzJsT8wb7%2F%2FLrBxtaXrunmYLoOkKD%2FkigXfnP7oR05s7YI4ggmH03o9YvMUoq2i1o72CXK%2B%2BzG5FR2y0WpnXyHeBmJbqPwxBlcg5%2B2ZIfmjwNd8XtZkUhjOKyEfuYSBic3pyiP1oMpK2pBMrZQo1lspmNqE1yAax7SSAvaoCDh2HBChHxTRnEOoUnsLFS&X-Amz-Signature=c1ab02f87cc6f3839d0942832cdd7f78741624550f4ff26754fd18d19f1f4c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
