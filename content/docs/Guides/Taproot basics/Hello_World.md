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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWOHAW32%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXpLlW%2BZEVD7FD1KQ%2BOXQr3qcpJzO%2BU6%2B8Be9Mz%2BvbaAiEAzMvuWuR38qpwKz%2BtlnYx6XvnErI4TcAFvRP9zpFbAg0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB9S%2Fj%2F7xPKt9hCpAyrcA6fs2vWeKYNAmWig0gYTuI9VYWqKFGJbfXt1piMmM%2FSBSNsyblU0wWnwrQmMKJk8onhEM0AXzgedi3Jr3t3wvE7Zm7BpEGqRnaCl%2B%2FC6vYfP4yocQ8OKHy6wWZ5Ix%2F%2Ba6D2D71j6T8v4FudTk6JIHPWLI5HPxkKQXNTWzsewCVcDeAdlvfVYixgRvEfnGdq8c2nrEuzJT9oa0StzsG2Fi9cWJk3jzT9OMhcPUjSs0CAJ1HisWlqyQPvD0wI0SBckloUZf5SUy4%2BR2JGSbWQ5Qq9jMWT9uTUIjlwwcSFknLaq2uO%2BOE%2BEhWFB4a7FqTglNiMHf9iR1a%2FYW7QciX3oLOZ1VBuQhHJ8Y4P5PZvTmy57FaB2lhsCQ5xRBWuOEJEMWEJ63d3UQoVGuU1CrD%2B6lPC2spNMB4aY2ijZohygqv0oU7yEiQXiwOd1EH8N%2FvfmpfInZq50QAW21iYvrqo3p4OuDQcuNnz%2BDDXLnEu6UaTLQxn%2Fn70O8B%2FSKnxAC60QtbFAeTTd4NVNjqr8%2FN1fr10Hzuk3ocVQWsPag37RtRi1oS2DagX%2Bkfg8qRkOGFdDM9DShHefUYXKF3OWQ4fcdb857oKL0eLlYWsridPXTUkQsUfJMJJ%2F8QXnkPwjMMGF%2Br8GOqUBVhT2r8A7G6nSqgtR4OpbRYft%2FCOWVgGI0o69DCd7qym9MOY8yUguElknZ%2FdTNKxazicU4lfDWpFn8Rkb1swMFA9iTpW46rvHNqYFZMypZFzGmr5xSMnn%2BxM8%2Bhx%2BPzQg7uoov2bIhONNj24OdyPHk%2F%2FJoqz2wybrhiDhScTMEs2Z2olDQeFBpI%2FAHlnN4QCKgEbOQ5m6wtw0dbKltBTubsUADao%2B&X-Amz-Signature=1ff86e3972e1f7e71b77ef1d915c896f57aa376131e48a7081c8292aa1737f90&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWOHAW32%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXpLlW%2BZEVD7FD1KQ%2BOXQr3qcpJzO%2BU6%2B8Be9Mz%2BvbaAiEAzMvuWuR38qpwKz%2BtlnYx6XvnErI4TcAFvRP9zpFbAg0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB9S%2Fj%2F7xPKt9hCpAyrcA6fs2vWeKYNAmWig0gYTuI9VYWqKFGJbfXt1piMmM%2FSBSNsyblU0wWnwrQmMKJk8onhEM0AXzgedi3Jr3t3wvE7Zm7BpEGqRnaCl%2B%2FC6vYfP4yocQ8OKHy6wWZ5Ix%2F%2Ba6D2D71j6T8v4FudTk6JIHPWLI5HPxkKQXNTWzsewCVcDeAdlvfVYixgRvEfnGdq8c2nrEuzJT9oa0StzsG2Fi9cWJk3jzT9OMhcPUjSs0CAJ1HisWlqyQPvD0wI0SBckloUZf5SUy4%2BR2JGSbWQ5Qq9jMWT9uTUIjlwwcSFknLaq2uO%2BOE%2BEhWFB4a7FqTglNiMHf9iR1a%2FYW7QciX3oLOZ1VBuQhHJ8Y4P5PZvTmy57FaB2lhsCQ5xRBWuOEJEMWEJ63d3UQoVGuU1CrD%2B6lPC2spNMB4aY2ijZohygqv0oU7yEiQXiwOd1EH8N%2FvfmpfInZq50QAW21iYvrqo3p4OuDQcuNnz%2BDDXLnEu6UaTLQxn%2Fn70O8B%2FSKnxAC60QtbFAeTTd4NVNjqr8%2FN1fr10Hzuk3ocVQWsPag37RtRi1oS2DagX%2Bkfg8qRkOGFdDM9DShHefUYXKF3OWQ4fcdb857oKL0eLlYWsridPXTUkQsUfJMJJ%2F8QXnkPwjMMGF%2Br8GOqUBVhT2r8A7G6nSqgtR4OpbRYft%2FCOWVgGI0o69DCd7qym9MOY8yUguElknZ%2FdTNKxazicU4lfDWpFn8Rkb1swMFA9iTpW46rvHNqYFZMypZFzGmr5xSMnn%2BxM8%2Bhx%2BPzQg7uoov2bIhONNj24OdyPHk%2F%2FJoqz2wybrhiDhScTMEs2Z2olDQeFBpI%2FAHlnN4QCKgEbOQ5m6wtw0dbKltBTubsUADao%2B&X-Amz-Signature=654c6f0ed096216ee1fa52a11db8d745db7229e0499be0f19caf383376ba757f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
