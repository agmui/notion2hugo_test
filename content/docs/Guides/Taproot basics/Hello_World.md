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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KXUEV5D%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fw27skWis%2B5UURPABfB0Eotp1jvxPXl7asI1it3W0RQIgG5q5XZtrd2aD0VDJPb9AuatzUuWT%2Bt0lk1ySl8ruaBsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEZUVzPZaX%2BvGHyF4CrcA9pQvx8WG6TCEqph9E8L3IVsgAcsPoJd7g1QnTtMjBzH%2FaBU9GIeJGycqzMBR864v2mcFEcInR%2FZ%2FEdMjylxhFsUKCQDeo46TNqGwC5hxMT0Lu4lZcjdeCrFXqHWJmiXy3sz9Yzbq%2BAYFX3LdiPZEiI6LqS554GHC7V7ILoHuLrcF2YgFjrZEw2H9mw9cA4czHeeowe5FFNxAZFe5Oi5QQdpVztlSBb7Z1OCy6JrzCHP%2BnIKJe7AkkyTaUmQJ5D%2BZ%2BqKhA8YhTDvR7plRb6KyLvQWWyE6RKnlcCtKmO4R9Ob8q9JAHZk3F90%2BnqDndv6iVgj1mEAWM3D27qUSP1DcMSXhIwOs1nBrrBLDzcKqQW%2BilhPE3gizbydczxrWygrsjVV4BVgqNbOeLzGl00cZ07GfRaT6bfCqyQQozIjF4rqsfzgFOzQA1DQlXgqAO7fy9XDZU4gcNZHT2bVoWL6Wf2A7hzB0gGfpWNBUazTyZ6HFXRYKTXREuKBnyFKte62el%2Fy9eP%2FJI3sCdBfkvV1yKokPzjAbuxfCygzdMWtCZu6yt2U336e6rfZxkune52XEKWFKtBqQiVptvWNo2MipwSbdt3qp8uQ%2BH5YBPbgH6Nr%2BxdktNLJiTW6DvTkMMqM274GOqUBc%2Fie34%2F8jwuU%2BlImMBw4ShW0y1K1%2BLPsTS7J1xIQgzbi1wjWH%2BEdQUmiTqpuwXRucUlufcPllo6XoeSRIbu7bc%2FBfpOIdV%2Fp3RKuW33KszI1pQBLcoqutPL%2BOUYxbMV32hRUGILFq6Lx%2FyrQvx09sQ0fI0xaEV4SoS5YCWde0pq41qIjFanw%2BkkrG%2B%2Bm99afRqJtMnkATQfdiJRLMfKV9nj5fquM&X-Amz-Signature=579d9cf4118159b9c31c3844ffffd655ae4f55854d56bdc2aab83bbfdcb03112&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KXUEV5D%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fw27skWis%2B5UURPABfB0Eotp1jvxPXl7asI1it3W0RQIgG5q5XZtrd2aD0VDJPb9AuatzUuWT%2Bt0lk1ySl8ruaBsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEZUVzPZaX%2BvGHyF4CrcA9pQvx8WG6TCEqph9E8L3IVsgAcsPoJd7g1QnTtMjBzH%2FaBU9GIeJGycqzMBR864v2mcFEcInR%2FZ%2FEdMjylxhFsUKCQDeo46TNqGwC5hxMT0Lu4lZcjdeCrFXqHWJmiXy3sz9Yzbq%2BAYFX3LdiPZEiI6LqS554GHC7V7ILoHuLrcF2YgFjrZEw2H9mw9cA4czHeeowe5FFNxAZFe5Oi5QQdpVztlSBb7Z1OCy6JrzCHP%2BnIKJe7AkkyTaUmQJ5D%2BZ%2BqKhA8YhTDvR7plRb6KyLvQWWyE6RKnlcCtKmO4R9Ob8q9JAHZk3F90%2BnqDndv6iVgj1mEAWM3D27qUSP1DcMSXhIwOs1nBrrBLDzcKqQW%2BilhPE3gizbydczxrWygrsjVV4BVgqNbOeLzGl00cZ07GfRaT6bfCqyQQozIjF4rqsfzgFOzQA1DQlXgqAO7fy9XDZU4gcNZHT2bVoWL6Wf2A7hzB0gGfpWNBUazTyZ6HFXRYKTXREuKBnyFKte62el%2Fy9eP%2FJI3sCdBfkvV1yKokPzjAbuxfCygzdMWtCZu6yt2U336e6rfZxkune52XEKWFKtBqQiVptvWNo2MipwSbdt3qp8uQ%2BH5YBPbgH6Nr%2BxdktNLJiTW6DvTkMMqM274GOqUBc%2Fie34%2F8jwuU%2BlImMBw4ShW0y1K1%2BLPsTS7J1xIQgzbi1wjWH%2BEdQUmiTqpuwXRucUlufcPllo6XoeSRIbu7bc%2FBfpOIdV%2Fp3RKuW33KszI1pQBLcoqutPL%2BOUYxbMV32hRUGILFq6Lx%2FyrQvx09sQ0fI0xaEV4SoS5YCWde0pq41qIjFanw%2BkkrG%2B%2Bm99afRqJtMnkATQfdiJRLMfKV9nj5fquM&X-Amz-Signature=2e204fb5e6118e2cfe7df4335390be9dae24511558b6faf70fbf73ba821e57a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
