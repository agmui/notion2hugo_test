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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FG6BGG3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICHxeGMG8IR3H1G597K5djFpqskBDPrBwVHZ5RMswnfiAiAufusu54vTISPJLMyHdwnQ53QclW8M%2Bo%2B2P%2F2NooV3eir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMTd4rQjreMQEuNDyJKtwDgmrnoMzJ3UD8d8wpdvfPradfJOGj93%2BcwtChOTqdBuP9Yt3viZ%2BGv2OoB25QYHfi%2BKbe1W%2BOYw%2Bqd8X%2BCGTqx3wolopkyfQs4%2F8wB5%2FM%2Bnc2DH3qtWKa06aAURjsupZBHBoiY6f%2BLSPc9iLiYgWN4qIunbMrtSPZX83VT%2FKSVrqGyu4dWkxEmTyMIdGhmiyDNJUD6jcTzPU%2FcySJavcvhKS57An7jt9fmrUlfn22gBtJZlZ9%2FNAL3Om1vtJt2M2Ch5vt24xs6oxDxoxQCTw5ftDz96mM2uNWHtuQLOZHDCidXzD%2F6QltjxvY6jFq9DHAHlhLCSNE2AOnCkeIhweJs5YEgFplWWkSpUvaX%2FP3aN9K2zg%2BJaFhr93rSZO7kviapS3shio%2FtZ5RgBwbxeYaEOZq271QX4%2BFt409DTcWXCTjxz2Qi8YxGidzl3DoIi%2BNC9OszHpq2CiUss8YL9FIKPSYkj32XeuZw8wlyzX8dFp7MvV3wTFX8NFTEyh8ZkS5kGii2UAVzHNfbWT6jZNmaBVkI%2FVn5aG2Z0OBtqURqQH96Qmvi3oyrJCU8%2BvkVWri4yM%2FAnBwBLkCX5JgfDDsWNFYLXgxWuHZhaCUwA0%2B88Hl6ynR%2B87iRlVvrdMw4KaEwgY6pgE1JQdwstIklJQWVW0y0%2FVXkfZs7TafE2oxbxHh1C%2B%2F6sA9X9G9CaLPjWkeKHsgnJ7LiwGl7WQTQ1glCTFZ3gtZ9I0c3xiLd0ap0QYSUUTMeJZSqujo10R%2BB9Sfj9LCtV5ccs7V0oNNJKe3KCuW4CCXt8%2F0ZjQdf%2FS9s%2F%2BuPF6YZBHZogBGdlCb1AiC%2BOQZaE4lK%2BdUbG9z3Jbd7Fqu2H0Bqp9mG74x&X-Amz-Signature=a5188e10208a570739f26a93f79ecb18d104a87d19aa9e183fc29cef36b0650e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FG6BGG3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICHxeGMG8IR3H1G597K5djFpqskBDPrBwVHZ5RMswnfiAiAufusu54vTISPJLMyHdwnQ53QclW8M%2Bo%2B2P%2F2NooV3eir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMTd4rQjreMQEuNDyJKtwDgmrnoMzJ3UD8d8wpdvfPradfJOGj93%2BcwtChOTqdBuP9Yt3viZ%2BGv2OoB25QYHfi%2BKbe1W%2BOYw%2Bqd8X%2BCGTqx3wolopkyfQs4%2F8wB5%2FM%2Bnc2DH3qtWKa06aAURjsupZBHBoiY6f%2BLSPc9iLiYgWN4qIunbMrtSPZX83VT%2FKSVrqGyu4dWkxEmTyMIdGhmiyDNJUD6jcTzPU%2FcySJavcvhKS57An7jt9fmrUlfn22gBtJZlZ9%2FNAL3Om1vtJt2M2Ch5vt24xs6oxDxoxQCTw5ftDz96mM2uNWHtuQLOZHDCidXzD%2F6QltjxvY6jFq9DHAHlhLCSNE2AOnCkeIhweJs5YEgFplWWkSpUvaX%2FP3aN9K2zg%2BJaFhr93rSZO7kviapS3shio%2FtZ5RgBwbxeYaEOZq271QX4%2BFt409DTcWXCTjxz2Qi8YxGidzl3DoIi%2BNC9OszHpq2CiUss8YL9FIKPSYkj32XeuZw8wlyzX8dFp7MvV3wTFX8NFTEyh8ZkS5kGii2UAVzHNfbWT6jZNmaBVkI%2FVn5aG2Z0OBtqURqQH96Qmvi3oyrJCU8%2BvkVWri4yM%2FAnBwBLkCX5JgfDDsWNFYLXgxWuHZhaCUwA0%2B88Hl6ynR%2B87iRlVvrdMw4KaEwgY6pgE1JQdwstIklJQWVW0y0%2FVXkfZs7TafE2oxbxHh1C%2B%2F6sA9X9G9CaLPjWkeKHsgnJ7LiwGl7WQTQ1glCTFZ3gtZ9I0c3xiLd0ap0QYSUUTMeJZSqujo10R%2BB9Sfj9LCtV5ccs7V0oNNJKe3KCuW4CCXt8%2F0ZjQdf%2FS9s%2F%2BuPF6YZBHZogBGdlCb1AiC%2BOQZaE4lK%2BdUbG9z3Jbd7Fqu2H0Bqp9mG74x&X-Amz-Signature=d4308c3fe54c13f201e78295a3c71f1c3624acc1d26db18efd874e68800e45e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
