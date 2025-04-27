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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO4IPX7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDngnHd%2FwXHU%2Bux4t2s14xxSHDt5lezpDMuVDKN7KLX3AIhAI5j4P6OoQ7UTCW8%2FNCUj%2BlFzWJPo5a9PD5lL%2BBEoawaKv8DCFwQABoMNjM3NDIzMTgzODA1IgwdpYoDNx%2FX%2BFhWAa0q3AOHD9FJgmWWF45plz0uGrKzIr8FCfQC6mCKfzZHwuskyWznoqrJcNLR04ogel2Z3DjWAL412SkNuuOeHvzY4Aiz6Q7swWbb30fDVqedEy7no%2B3QrsmoMgSP6vGIaWWz7qAKF4945d8eVPrt9oWdmRX9FlezDs1SSGMBEu5r5enMmSMweGTUe0nXDdQoZL3dYCDnQFdBOFKonZl1G98b4VAN63lY6sqUIvS4qwXfXQomptDAA1LGjI5L%2BMEUMxhX5IvXZnA1f%2BJ%2Fo0pJl6YBj16vf%2B3z6Ty6XxOZtHtN3A2phAXoAT%2BNRe6k45Q8dN0lcu8nsd6UB4%2FNutvL5WnJ8ds8mQBP3z5f5dY3yHdln5gz0nT%2FPtFu7fLpVwm2qm8Lx7yduOX1SrqOzHDh2AYrTs68v88NhGxIMt3ND3odvrO9XGqDb0fdKzTXrEtP4FrsK1GsN7mhdSpnDZX%2FbH6GieHbAm9%2FztttYuF9JIoVfRh%2BxtFwHiPMQjWWfsojCcGrFwDmI6eIYWGhqQjEjo%2Ft2CY1dywMrdhaUF2%2FICklzHn%2BB1GAlctocrSEeq12JHoupLidUS0jt0Bv%2F2n7cmW7gENcKS2RBjGyxoRrP367Oo%2FWmHACHJQPflgcDnciGjCIjLjABjqkASVfcj0%2BxtBHrmvmXfyrQyoVdUdNsCkFn2xCWaYndBSEJ6EGE%2BHiOed8yJ7Fd7XwqR5wojnorFOxF5EYfh2LnhdvB312U8q24fzEd41H3r7wPTt%2FnSn1CHExdiKN2GKGJCG3jf112D91NxBuaRttA1fqaqR%2FUbhAP100HEefLhrjPCldlGtr%2Bzevk3%2F1Q%2ByzClllNUjz75LD04Ve6GkYLVO5s9Ef&X-Amz-Signature=b81c67e581bbc19cd5d1f1b1bfef487e85404c766c1da71a74f48bc1bd8ea98c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO4IPX7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDngnHd%2FwXHU%2Bux4t2s14xxSHDt5lezpDMuVDKN7KLX3AIhAI5j4P6OoQ7UTCW8%2FNCUj%2BlFzWJPo5a9PD5lL%2BBEoawaKv8DCFwQABoMNjM3NDIzMTgzODA1IgwdpYoDNx%2FX%2BFhWAa0q3AOHD9FJgmWWF45plz0uGrKzIr8FCfQC6mCKfzZHwuskyWznoqrJcNLR04ogel2Z3DjWAL412SkNuuOeHvzY4Aiz6Q7swWbb30fDVqedEy7no%2B3QrsmoMgSP6vGIaWWz7qAKF4945d8eVPrt9oWdmRX9FlezDs1SSGMBEu5r5enMmSMweGTUe0nXDdQoZL3dYCDnQFdBOFKonZl1G98b4VAN63lY6sqUIvS4qwXfXQomptDAA1LGjI5L%2BMEUMxhX5IvXZnA1f%2BJ%2Fo0pJl6YBj16vf%2B3z6Ty6XxOZtHtN3A2phAXoAT%2BNRe6k45Q8dN0lcu8nsd6UB4%2FNutvL5WnJ8ds8mQBP3z5f5dY3yHdln5gz0nT%2FPtFu7fLpVwm2qm8Lx7yduOX1SrqOzHDh2AYrTs68v88NhGxIMt3ND3odvrO9XGqDb0fdKzTXrEtP4FrsK1GsN7mhdSpnDZX%2FbH6GieHbAm9%2FztttYuF9JIoVfRh%2BxtFwHiPMQjWWfsojCcGrFwDmI6eIYWGhqQjEjo%2Ft2CY1dywMrdhaUF2%2FICklzHn%2BB1GAlctocrSEeq12JHoupLidUS0jt0Bv%2F2n7cmW7gENcKS2RBjGyxoRrP367Oo%2FWmHACHJQPflgcDnciGjCIjLjABjqkASVfcj0%2BxtBHrmvmXfyrQyoVdUdNsCkFn2xCWaYndBSEJ6EGE%2BHiOed8yJ7Fd7XwqR5wojnorFOxF5EYfh2LnhdvB312U8q24fzEd41H3r7wPTt%2FnSn1CHExdiKN2GKGJCG3jf112D91NxBuaRttA1fqaqR%2FUbhAP100HEefLhrjPCldlGtr%2Bzevk3%2F1Q%2ByzClllNUjz75LD04Ve6GkYLVO5s9Ef&X-Amz-Signature=7df62ec184caa287dcef6f7bc3effead322d8bb3cbd68ada7aa1635a7dd75ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
