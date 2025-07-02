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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MOBZKN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwFHNn%2FwQqqVVotV%2F8DWIWgjJ1yGi%2FVVEnFzNc0IDztAiEApSRhAfaburREpZ9eXlw5Xaxb3HxUOTk1sPhS3Pu3SlIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWabi3leOfi0xQLQyrcA8L6eVOsyVManY3EHIps9J8Zx2WHH5XwnGvm1S%2BelAYCNUI0Uk5y613uLtZkSSz%2Fthn7esfxZCXQdn6Ly5k2k%2F6G8DTp9edUOt306gsI1FC7wtJFZURKNXeMozT6xetFap2cVlGW2pTEmjKF3uP64sYI%2FR5wzky%2B2pApK4SG6VBG4L%2Fb4oHg7xIIvc17KKhcgzO9VeO5GiebUL%2Bdxuq9w5TKBjrOLiRHy9EKN0JJTSUri%2FHC9adkOsTcGIJHqDM4ticgRivihGs4Kf5wxi9s%2F6aQTFQ4tvB3TZxdXYmjsrMOGzmNgUYHLxz0XSSwFuV8%2BHrZrgTvKjzOy62gNnaS1eAu0r8somqBjICN%2BeFwfM4kI9wZbqkEdHVuaPqD1xaRbR5R1vHyBu%2Bt6V1cyBnV9FsWFNHhscg%2FzTdeYEKKsH1E6KD1kwWQnn8y7OmRK7qL3zov2liHusk16OkybyCea%2BQN4EtB%2BKZFBiMyA9Ik3o1kA30tmcSs%2Fy6siOsiGNlKPgcNhCntHv6IWr41KRQib4LDU%2FU5cO6wEUQjYsa92QvFnpygCa8yqiy3wAPBlYHyGyplhdWybZ4eJBF17uSe5WGLbJ6DQGYJMuEWJ3kv3C0eAWIBwDK6EziXV4y2MJm1k8MGOqUBgNRX9msuUkdhKtof24YkaHia48lkm34%2BAGROEJdnW1iMS19dOlCvMLxtz04hTLXWrNPVV09DW5LrcmI%2FeElTWHTwKzRx1MYQWi5H0xPS52ZZ2B%2FKV1ehuMoRi9ctlq1gQ6ufg0tNrOMfqF79bAhei33hC0XYdOQ85OAMb%2FXuNZE1umk9tEieJ6J0cU2Kl3sXTbLwh2YKuMhtHcZXsE3y7hFARfuE&X-Amz-Signature=613a40555896bf067cf5143b8d848379b5de114c3c050d510947d58b71e4857f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MOBZKN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwFHNn%2FwQqqVVotV%2F8DWIWgjJ1yGi%2FVVEnFzNc0IDztAiEApSRhAfaburREpZ9eXlw5Xaxb3HxUOTk1sPhS3Pu3SlIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWabi3leOfi0xQLQyrcA8L6eVOsyVManY3EHIps9J8Zx2WHH5XwnGvm1S%2BelAYCNUI0Uk5y613uLtZkSSz%2Fthn7esfxZCXQdn6Ly5k2k%2F6G8DTp9edUOt306gsI1FC7wtJFZURKNXeMozT6xetFap2cVlGW2pTEmjKF3uP64sYI%2FR5wzky%2B2pApK4SG6VBG4L%2Fb4oHg7xIIvc17KKhcgzO9VeO5GiebUL%2Bdxuq9w5TKBjrOLiRHy9EKN0JJTSUri%2FHC9adkOsTcGIJHqDM4ticgRivihGs4Kf5wxi9s%2F6aQTFQ4tvB3TZxdXYmjsrMOGzmNgUYHLxz0XSSwFuV8%2BHrZrgTvKjzOy62gNnaS1eAu0r8somqBjICN%2BeFwfM4kI9wZbqkEdHVuaPqD1xaRbR5R1vHyBu%2Bt6V1cyBnV9FsWFNHhscg%2FzTdeYEKKsH1E6KD1kwWQnn8y7OmRK7qL3zov2liHusk16OkybyCea%2BQN4EtB%2BKZFBiMyA9Ik3o1kA30tmcSs%2Fy6siOsiGNlKPgcNhCntHv6IWr41KRQib4LDU%2FU5cO6wEUQjYsa92QvFnpygCa8yqiy3wAPBlYHyGyplhdWybZ4eJBF17uSe5WGLbJ6DQGYJMuEWJ3kv3C0eAWIBwDK6EziXV4y2MJm1k8MGOqUBgNRX9msuUkdhKtof24YkaHia48lkm34%2BAGROEJdnW1iMS19dOlCvMLxtz04hTLXWrNPVV09DW5LrcmI%2FeElTWHTwKzRx1MYQWi5H0xPS52ZZ2B%2FKV1ehuMoRi9ctlq1gQ6ufg0tNrOMfqF79bAhei33hC0XYdOQ85OAMb%2FXuNZE1umk9tEieJ6J0cU2Kl3sXTbLwh2YKuMhtHcZXsE3y7hFARfuE&X-Amz-Signature=d8747999553c441a898b7f5f3235ccee25a64682b2ea66ef247b91a5ea4e9a30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
