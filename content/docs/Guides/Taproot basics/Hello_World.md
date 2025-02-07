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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GZJUFDF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDP8%2B2afR2%2BqKmdXq4aWwNPwjZRrn704P5d%2BbsLK8IZkgIhAPasrZlNJOGczXzFExsq6VPIpDReu6GHxmR073oymZ0lKv8DCHEQABoMNjM3NDIzMTgzODA1IgwVUeX40S%2FqpeVxySEq3APj3zbypqNf%2BGv3kMEFLCW2IO9RIBpJ4tzLcJbuW5rRgpnMURGz657u9n1cpN7x3HDjc9SVxgz56JlNpaEI0ZeM04MiavHRnVs5E61EQ%2BxE088xGrCA1DVrQjiIHV7lM0R6Iu6V2cpwzBxbGx68mThQXoJ5%2FWndogVg9MSMXyp7RWrhgx9goXYI%2FdpFsvdHFIGfTzZUKPZKfQFwj%2FjMb2W3njsR7YLcBjx%2B6zfEkXC000jN5hzAM0zO5dwQ%2B90WAj%2B2DN2iTrpAt%2BCba9VrFZ5oKfVMHrdWPjJ4BJA1ld7ktr1L%2BujIdba2erL5EB8iB1jtJ8B23hJDsPqc2Ta7ZQTQdppXSepZ%2FfCQhpSLQeg%2FXVVfBlR8HfxEeF9%2BIGBhC2A05VUEr1%2FP5L5NXtiZerne5XDawLfl3MWqCkZpUPTAjcbAp2OGo%2ByIxMhNa4JSOUbQUXBhtmahPvXC95%2B684P1b5Qt7nfr%2F5JtiwvhpSMNcB497nLB4VQXlro1QP1PbpaEPmHyOntkJQq1sfQjKRTXscWxNgb726np7xhFGvYrafieHaO7b4Ir2o6y9MRnjmYDiir8DVHj3TN8gwYz6al7Dh6vawYhkmm88zlr9%2BbSA%2BlKaW4G6hOFA61qBTDw%2Bpa9BjqkAflU0ZmRG2wz%2B2FzVjc7zVoLUK4kxCMnRJegNrjZb3e4N5wysBYyB9ymNyTtTTt4vMUxgFLsqtYkT9W1ONM9GtXo%2FNMmF5sfO0YtPbyXuuDiQ2YGzRTHFfVqZRkAhrmsaRxyqWXN%2FTI3I7HyI5oZil5G1x214uQVDM7yC2GIGYZX3UzdFhObtN3a1fNXZ05GvQBr%2FPkvfWRA8lSPd5%2B8ult3iMqy&X-Amz-Signature=da77b75efdbd2884db504b5d26fb8869aaadc3698d43895bb3dd0d1a7ccba8a4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GZJUFDF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDP8%2B2afR2%2BqKmdXq4aWwNPwjZRrn704P5d%2BbsLK8IZkgIhAPasrZlNJOGczXzFExsq6VPIpDReu6GHxmR073oymZ0lKv8DCHEQABoMNjM3NDIzMTgzODA1IgwVUeX40S%2FqpeVxySEq3APj3zbypqNf%2BGv3kMEFLCW2IO9RIBpJ4tzLcJbuW5rRgpnMURGz657u9n1cpN7x3HDjc9SVxgz56JlNpaEI0ZeM04MiavHRnVs5E61EQ%2BxE088xGrCA1DVrQjiIHV7lM0R6Iu6V2cpwzBxbGx68mThQXoJ5%2FWndogVg9MSMXyp7RWrhgx9goXYI%2FdpFsvdHFIGfTzZUKPZKfQFwj%2FjMb2W3njsR7YLcBjx%2B6zfEkXC000jN5hzAM0zO5dwQ%2B90WAj%2B2DN2iTrpAt%2BCba9VrFZ5oKfVMHrdWPjJ4BJA1ld7ktr1L%2BujIdba2erL5EB8iB1jtJ8B23hJDsPqc2Ta7ZQTQdppXSepZ%2FfCQhpSLQeg%2FXVVfBlR8HfxEeF9%2BIGBhC2A05VUEr1%2FP5L5NXtiZerne5XDawLfl3MWqCkZpUPTAjcbAp2OGo%2ByIxMhNa4JSOUbQUXBhtmahPvXC95%2B684P1b5Qt7nfr%2F5JtiwvhpSMNcB497nLB4VQXlro1QP1PbpaEPmHyOntkJQq1sfQjKRTXscWxNgb726np7xhFGvYrafieHaO7b4Ir2o6y9MRnjmYDiir8DVHj3TN8gwYz6al7Dh6vawYhkmm88zlr9%2BbSA%2BlKaW4G6hOFA61qBTDw%2Bpa9BjqkAflU0ZmRG2wz%2B2FzVjc7zVoLUK4kxCMnRJegNrjZb3e4N5wysBYyB9ymNyTtTTt4vMUxgFLsqtYkT9W1ONM9GtXo%2FNMmF5sfO0YtPbyXuuDiQ2YGzRTHFfVqZRkAhrmsaRxyqWXN%2FTI3I7HyI5oZil5G1x214uQVDM7yC2GIGYZX3UzdFhObtN3a1fNXZ05GvQBr%2FPkvfWRA8lSPd5%2B8ult3iMqy&X-Amz-Signature=eca9f4d2215da35ae8dab8c560b219d880b00f5f4c6158f7b8c212aa5c3d2459&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
