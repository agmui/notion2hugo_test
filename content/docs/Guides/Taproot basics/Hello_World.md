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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GA432PT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCgqAxJqyjeEjwP8TeCLxAKHB7p5ewPM7CfKylyhaPvmgIgA0Cf5DAHzbnjgPAVcUll7By4Mz0fIZzEAxkLpiHglvYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDn9D8nXVm%2BlAHcYBircA0lQZ1vfK4R7944kJMHVJGc0%2BXtwmD9T7o0tNgx0Xd%2FE9ruDEbuCNvhyvoAgQF9kNI0sxJSEKrt4YhCfzOEVA2pDzIHfBpCy%2Bsf0ofCctjLZvooxNW2zZzX6YJ%2BFYUt6QY4ckNJgZ%2Fo4BDGvCvhRk%2B4IM%2FqNk%2FiWwsOgE5Sjdw7tavwRQjljaiEmNaoF9anyGA4iD%2FI9h76zhtOOTF6L5DN9ryy6xPLid1gXgqEnCmWCJtL%2B4GMT7j%2FwDUDyazUytLvA6%2BIbOs2yz%2F%2BkrQ6vo%2BAdAp%2FMs7ZF1F9TVScRmuQ08GAx08vUmWRPARL7B%2FLOIUHZ2lRCt8wCdUnJVzt2grbTiQrZFrmTwzMk629OBTdCu2jxEvEQIvqhjXnKbdH94K3dq7PDdlqCLYNVILnBWGJDa7AORXDEM5V01X5BX0LuKflOq3TuwdhU0p9Us7AnI%2BCHUw6wMBwUDx3fD0JJlMvEQIq27pIKEqjA2NSK8Md9hebibWeGlqoNYeLeRUcfRaKItVk4t0xrgDoS5%2BGE9KMQ6K631peRAIB7XwSgss34IvDC1rBXQgpOWzcFCDqMy%2B57konylTQuUDuM%2Fb8RBYs6Bxwz2NbZy%2BBgqgy7wAkB8i96xTcGk%2Bzp8Dy3MPTztr8GOqUBPZzCiBgcGo%2Btitbi9Jcr59B%2FG1UlbCzZLjMiHWkbdl0hIJoH1TLzuzCa61g4sxUlgOcF%2Fjc67sf0HLMXmk66NBeGrWClwQ%2FyFgcmyKltAqsFnzFMmBzPPlB1cOFLn2JsMkOmqsFSaQpSeNIPB5hq5YM73U06rKkVxPbUoIkGqQPTeC51R%2F6Hn8Z3YRsiLCoWoeGAoH6XtmoCzwI8xNoiDxP1prrg&X-Amz-Signature=5129f791fd7c66c70b7d63412aa7fdce183212d31e9d1c1f978b763e98f0b9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GA432PT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCgqAxJqyjeEjwP8TeCLxAKHB7p5ewPM7CfKylyhaPvmgIgA0Cf5DAHzbnjgPAVcUll7By4Mz0fIZzEAxkLpiHglvYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDn9D8nXVm%2BlAHcYBircA0lQZ1vfK4R7944kJMHVJGc0%2BXtwmD9T7o0tNgx0Xd%2FE9ruDEbuCNvhyvoAgQF9kNI0sxJSEKrt4YhCfzOEVA2pDzIHfBpCy%2Bsf0ofCctjLZvooxNW2zZzX6YJ%2BFYUt6QY4ckNJgZ%2Fo4BDGvCvhRk%2B4IM%2FqNk%2FiWwsOgE5Sjdw7tavwRQjljaiEmNaoF9anyGA4iD%2FI9h76zhtOOTF6L5DN9ryy6xPLid1gXgqEnCmWCJtL%2B4GMT7j%2FwDUDyazUytLvA6%2BIbOs2yz%2F%2BkrQ6vo%2BAdAp%2FMs7ZF1F9TVScRmuQ08GAx08vUmWRPARL7B%2FLOIUHZ2lRCt8wCdUnJVzt2grbTiQrZFrmTwzMk629OBTdCu2jxEvEQIvqhjXnKbdH94K3dq7PDdlqCLYNVILnBWGJDa7AORXDEM5V01X5BX0LuKflOq3TuwdhU0p9Us7AnI%2BCHUw6wMBwUDx3fD0JJlMvEQIq27pIKEqjA2NSK8Md9hebibWeGlqoNYeLeRUcfRaKItVk4t0xrgDoS5%2BGE9KMQ6K631peRAIB7XwSgss34IvDC1rBXQgpOWzcFCDqMy%2B57konylTQuUDuM%2Fb8RBYs6Bxwz2NbZy%2BBgqgy7wAkB8i96xTcGk%2Bzp8Dy3MPTztr8GOqUBPZzCiBgcGo%2Btitbi9Jcr59B%2FG1UlbCzZLjMiHWkbdl0hIJoH1TLzuzCa61g4sxUlgOcF%2Fjc67sf0HLMXmk66NBeGrWClwQ%2FyFgcmyKltAqsFnzFMmBzPPlB1cOFLn2JsMkOmqsFSaQpSeNIPB5hq5YM73U06rKkVxPbUoIkGqQPTeC51R%2F6Hn8Z3YRsiLCoWoeGAoH6XtmoCzwI8xNoiDxP1prrg&X-Amz-Signature=4555b0a88e4d62c6ada9b19e71564ee4b8844ff05c9e243ce941d36d950fec01&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
