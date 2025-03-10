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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHKVZPR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDIdmkhCfXMr8Ba1Sju7HB3XcAFyxx5znueY6%2BjBsNUDgIgVXv%2F1hwN7Hf19WIUAYWnbBg3aRptbTOCPb8CYn22VnIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9511KRvBc%2BjhZDmCrcA57lZOKihwJV0wSp3BvJfZYmTpLBDeQvlNQHFKjQGqEcoXxWAogoqXaxAJ1dfFZ3d3KfgPzSDC%2B078K9EH3nOEOH6US2qBL64w6W3OQrQHotkIDDD02F69c3n8IGP0pMSgdeKvJH9cBioJRHaBdKFEkv9W6oAb38xW8TKgQN0JRRs%2FZwYQCXRDfSBODhxM7A58dm1nUKVTu84XbD2b8vFwSiclxmsUUnzHLKy0jh9%2FZKLTiQ6PJw3mEjWyo4J7HPxkKKqDh4QXEXZ%2BsnmA6XEnh8L7AMkGC5PlPukh8UycHYiwHCHDZ6erIcGuDWfF0v7dDtdWvla73ip%2BAf5ZVjHMfjjrVLOMQcKTzKNzK7SU2KUNgtyfTX6GIkUUCQOL9Iia3TrK5IejQTcq6g4wrr7Avmo7jfpy71YnZY8NHmq39B1RXhyHQETQ0DYmCYGpLVEywvOpls3IK77Ke7Un37LwpPHg3Hna6Yic7%2F3fI9GvdEELew4tZw5tvrIFEgVj95leq7xp6F%2Fyq4Jw8ZIbrEyzZlzQpfY5kTl%2BuMe%2BPwHuuj0z2R7RPZEdzFZDjlqH7jXVO%2Bz6q%2FFWklGZr6UAK8SHhx3gmH1w0eTGDP5rk%2FfyWu%2Fugb6wbDKT7QiHJEMMmsvb4GOqUBz8dZpfJKyubY9zAloRuexXcbLypuUfeLinpkxaLH8UGQurzblM3OzrxqVWKvDYcD8jrIfTL%2BxjErbHxAqLs2ahZc3gtf%2BH351E%2B0mkYowxVkpqO5W5V3%2BAI3Gel0pIw0fcWssrDcohubUlaI1gT3ZHnZ0q6lSnBWiXVxycuL0rSB%2FfRHbgJyr8DWuEa6PN6WBS2SjhOsN2EwRj%2BTuDYKYqnnNyuG&X-Amz-Signature=b1d7db83bfb2cd9c05142233d343cd58fe029ee16d6d4fd20fe617d439dae241&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHKVZPR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDIdmkhCfXMr8Ba1Sju7HB3XcAFyxx5znueY6%2BjBsNUDgIgVXv%2F1hwN7Hf19WIUAYWnbBg3aRptbTOCPb8CYn22VnIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9511KRvBc%2BjhZDmCrcA57lZOKihwJV0wSp3BvJfZYmTpLBDeQvlNQHFKjQGqEcoXxWAogoqXaxAJ1dfFZ3d3KfgPzSDC%2B078K9EH3nOEOH6US2qBL64w6W3OQrQHotkIDDD02F69c3n8IGP0pMSgdeKvJH9cBioJRHaBdKFEkv9W6oAb38xW8TKgQN0JRRs%2FZwYQCXRDfSBODhxM7A58dm1nUKVTu84XbD2b8vFwSiclxmsUUnzHLKy0jh9%2FZKLTiQ6PJw3mEjWyo4J7HPxkKKqDh4QXEXZ%2BsnmA6XEnh8L7AMkGC5PlPukh8UycHYiwHCHDZ6erIcGuDWfF0v7dDtdWvla73ip%2BAf5ZVjHMfjjrVLOMQcKTzKNzK7SU2KUNgtyfTX6GIkUUCQOL9Iia3TrK5IejQTcq6g4wrr7Avmo7jfpy71YnZY8NHmq39B1RXhyHQETQ0DYmCYGpLVEywvOpls3IK77Ke7Un37LwpPHg3Hna6Yic7%2F3fI9GvdEELew4tZw5tvrIFEgVj95leq7xp6F%2Fyq4Jw8ZIbrEyzZlzQpfY5kTl%2BuMe%2BPwHuuj0z2R7RPZEdzFZDjlqH7jXVO%2Bz6q%2FFWklGZr6UAK8SHhx3gmH1w0eTGDP5rk%2FfyWu%2Fugb6wbDKT7QiHJEMMmsvb4GOqUBz8dZpfJKyubY9zAloRuexXcbLypuUfeLinpkxaLH8UGQurzblM3OzrxqVWKvDYcD8jrIfTL%2BxjErbHxAqLs2ahZc3gtf%2BH351E%2B0mkYowxVkpqO5W5V3%2BAI3Gel0pIw0fcWssrDcohubUlaI1gT3ZHnZ0q6lSnBWiXVxycuL0rSB%2FfRHbgJyr8DWuEa6PN6WBS2SjhOsN2EwRj%2BTuDYKYqnnNyuG&X-Amz-Signature=0b86a6119cb99180a77429b1742e03a065616a1cf4c0661f8e5333bb19d0f8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
