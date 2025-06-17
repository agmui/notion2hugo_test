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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTT7TN7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGpOrRuDPKMwPIbcoMB2KWl4OgWWt%2B9l6G19DfJd4yXAIgf8vA0XBJQX1Kadv16nNuJ7kgXw8LQzrSBuc93kXtiAUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDM4Mz0hxeI%2Bp%2B6tZfyrcA56X8QiTNun14Hi5Uis6LvRtw6h8%2FkigNwhWqxgbEM0WfVQj%2Fy2I%2Br2Ug%2B4%2FAV%2FLP19f7agvs2AzikERJk7Gv9ZI9rdta7Vw%2B3rD9jTvTYmQGY6zbKEllk4JiIncOZkxOaW4k1MO5DHJrJ7qbdZP5px%2BzJraroRYv5DUv8Gk9YUDrmfp8th%2FLzBPAwirw7j6AshhGgjRz3WcpweP8apxXfysN%2B5BT8vw4DHqL9C%2Bm2n4%2BBjHe3K4n7fBodd70VkKGp9i%2BZi49wwSO3ZUzBX99%2BDF3EIvYhjdzKNCcmQZ8bcb94bTELpDJ3i0N2NGiJTtE4rs2tYe2B0vD6JDt8JdaGbiluVXB5IHK7GWmdiN4ws6G4gH9%2Bkwqu%2BTmKf0aEQEIbClUTKf6hsi8oqm59Yrr5ap8cKQML6Gt2rtI5m9%2BIzdVnR91CTv6%2BJTfQWPS%2FAwSEd9WwnM8f1Lcr1%2BqfV8qgPRdRolTIzuHnFWp9bX1BIkYPkkCmGr62EKOHUWCC%2FRw5szeFF%2F3cY0R1MwR6zhPoo1U1y4jTWMRxLwrFrc0iUWR3ZqRUGpAGgm9jeVUOzxfSG%2B1GF9lGu0tVHPFyVVMhpNMSWAV6sHYoslNYfC9KOwlfdnraV7IcmWIwu2MJ%2F1xMIGOqUBAN4W74EzkSyknzSiTCgJ1Z%2Fx77uNUzt%2F0io1yHOuu6k8hfcUkRoX0SIXiZ8w%2F0KhgBr2c%2F0Pa4fOV9kMKuJhHuzASbo9cj%2B5xZQVTDqgZVDBvIbw8wSL5z7oV5Px1fLN943judQq9akqFDBBhC3hFj0oYyhrqS3r3egEY6%2BT1eiP1cpoFlkpkNQgvN%2BnsCUZwarj6dZ2ZcHkYELwDQlaV%2Be8KgKo&X-Amz-Signature=f8bcfd7f06c9a293186cc958155a9454d26b94dddb1335a0237eec0c5343a4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTT7TN7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGpOrRuDPKMwPIbcoMB2KWl4OgWWt%2B9l6G19DfJd4yXAIgf8vA0XBJQX1Kadv16nNuJ7kgXw8LQzrSBuc93kXtiAUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDM4Mz0hxeI%2Bp%2B6tZfyrcA56X8QiTNun14Hi5Uis6LvRtw6h8%2FkigNwhWqxgbEM0WfVQj%2Fy2I%2Br2Ug%2B4%2FAV%2FLP19f7agvs2AzikERJk7Gv9ZI9rdta7Vw%2B3rD9jTvTYmQGY6zbKEllk4JiIncOZkxOaW4k1MO5DHJrJ7qbdZP5px%2BzJraroRYv5DUv8Gk9YUDrmfp8th%2FLzBPAwirw7j6AshhGgjRz3WcpweP8apxXfysN%2B5BT8vw4DHqL9C%2Bm2n4%2BBjHe3K4n7fBodd70VkKGp9i%2BZi49wwSO3ZUzBX99%2BDF3EIvYhjdzKNCcmQZ8bcb94bTELpDJ3i0N2NGiJTtE4rs2tYe2B0vD6JDt8JdaGbiluVXB5IHK7GWmdiN4ws6G4gH9%2Bkwqu%2BTmKf0aEQEIbClUTKf6hsi8oqm59Yrr5ap8cKQML6Gt2rtI5m9%2BIzdVnR91CTv6%2BJTfQWPS%2FAwSEd9WwnM8f1Lcr1%2BqfV8qgPRdRolTIzuHnFWp9bX1BIkYPkkCmGr62EKOHUWCC%2FRw5szeFF%2F3cY0R1MwR6zhPoo1U1y4jTWMRxLwrFrc0iUWR3ZqRUGpAGgm9jeVUOzxfSG%2B1GF9lGu0tVHPFyVVMhpNMSWAV6sHYoslNYfC9KOwlfdnraV7IcmWIwu2MJ%2F1xMIGOqUBAN4W74EzkSyknzSiTCgJ1Z%2Fx77uNUzt%2F0io1yHOuu6k8hfcUkRoX0SIXiZ8w%2F0KhgBr2c%2F0Pa4fOV9kMKuJhHuzASbo9cj%2B5xZQVTDqgZVDBvIbw8wSL5z7oV5Px1fLN943judQq9akqFDBBhC3hFj0oYyhrqS3r3egEY6%2BT1eiP1cpoFlkpkNQgvN%2BnsCUZwarj6dZ2ZcHkYELwDQlaV%2Be8KgKo&X-Amz-Signature=eb84747bbe520f2cf363feb54353c4568f894fc67db66d02160c68a789730582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
