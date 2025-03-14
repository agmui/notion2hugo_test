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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HHFP7HZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD65GXQPlqy9Sv4plQdHqSbOo8PfNZpdp1JzG5w0w7vbgIgI72KSfI3deiejgpKkD6eowDbG1qGxbybHvLncKo0KoUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkeoQ5dgZjGZ4dmRCrcA5g%2BbsioHvf9%2BPUgv3KvNsIC1uHB33icxathFHnwJ7z0KtwawKWa1xTSFHm7W1vNo3GnX6bgHd%2Fx67WwE%2FlGoDdk1PI%2B3L8TfjLxV2Jyjb7W7MVLw%2Fvz8%2FRwnlWJs6XZtRjA89KdMBynloNNBIkBvSb9AtQjIVXx%2BfAtEp%2FGR%2BJPakFFl%2BAMJmLVXTv%2FIWlq6ksN98QydDKJgWWuRZour8UGXpwx77jMJyy705iFSPexs2%2ByYRhhsntqiZZbhird%2F6cKC%2FyZ%2BGffdXLCKxykoHHEAv%2FFqmFryDAzkFGOCCNN9pWi1HbIVgO1hRpSs7LgCfUpKLnMVtN5gFVnyVEn0fXaqS3Hi3SVyTEn4wKOlGBmIY2rX55eNjfGgfqMck0qmLpPhL5nD1WQ9ad41kJoIz8s%2BedwrUT1CxSMn2Y%2Bar9IRcxnjfK%2FlfhvkiMNWz2DwWFDhs41Naa%2BBvQ28V6AJEhnh1zGSP7hSzpg2TE7SAFtulO%2B7HqwKQ%2B9rcGmsNg3hqZajFve%2FPi0cxSsRYRqIAmnqg0NOInJo9uF%2BpVxkAPdWv3TF%2BaZKgIEtUGP9fVAAdtZf4IGx4n37%2B0toGMxeOrg3aP4w2hk8BtGJvhq9%2FhnWCYApG4qU2p9X5bFMI7pz74GOqUBmyaeH9ePE52uXnjCINlZ1gP%2B4GTdORS8hfxgcz4uP%2FPVdwI5c1G%2BYURZPPTr3mUERg6lfuyw2FjBfYrKqDb8XxiCTiWBaL6OaHV%2Bwb5bV%2F%2B5D7lTyvQz9Nz0BZwnjZfezKaDCiK1MSnlEtuL4noo32WJez7%2F1Pq5zs2O44FZT6h0vhTyaR8%2FezUWFBBfynFb%2F8iDpoEAwQ9%2FZ%2BVJLs5huRe7qszl&X-Amz-Signature=e5ee69ff2565ce2f89d3d171fcfa27e326cff96fda92f9d73ce083dc10c36369&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HHFP7HZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD65GXQPlqy9Sv4plQdHqSbOo8PfNZpdp1JzG5w0w7vbgIgI72KSfI3deiejgpKkD6eowDbG1qGxbybHvLncKo0KoUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkeoQ5dgZjGZ4dmRCrcA5g%2BbsioHvf9%2BPUgv3KvNsIC1uHB33icxathFHnwJ7z0KtwawKWa1xTSFHm7W1vNo3GnX6bgHd%2Fx67WwE%2FlGoDdk1PI%2B3L8TfjLxV2Jyjb7W7MVLw%2Fvz8%2FRwnlWJs6XZtRjA89KdMBynloNNBIkBvSb9AtQjIVXx%2BfAtEp%2FGR%2BJPakFFl%2BAMJmLVXTv%2FIWlq6ksN98QydDKJgWWuRZour8UGXpwx77jMJyy705iFSPexs2%2ByYRhhsntqiZZbhird%2F6cKC%2FyZ%2BGffdXLCKxykoHHEAv%2FFqmFryDAzkFGOCCNN9pWi1HbIVgO1hRpSs7LgCfUpKLnMVtN5gFVnyVEn0fXaqS3Hi3SVyTEn4wKOlGBmIY2rX55eNjfGgfqMck0qmLpPhL5nD1WQ9ad41kJoIz8s%2BedwrUT1CxSMn2Y%2Bar9IRcxnjfK%2FlfhvkiMNWz2DwWFDhs41Naa%2BBvQ28V6AJEhnh1zGSP7hSzpg2TE7SAFtulO%2B7HqwKQ%2B9rcGmsNg3hqZajFve%2FPi0cxSsRYRqIAmnqg0NOInJo9uF%2BpVxkAPdWv3TF%2BaZKgIEtUGP9fVAAdtZf4IGx4n37%2B0toGMxeOrg3aP4w2hk8BtGJvhq9%2FhnWCYApG4qU2p9X5bFMI7pz74GOqUBmyaeH9ePE52uXnjCINlZ1gP%2B4GTdORS8hfxgcz4uP%2FPVdwI5c1G%2BYURZPPTr3mUERg6lfuyw2FjBfYrKqDb8XxiCTiWBaL6OaHV%2Bwb5bV%2F%2B5D7lTyvQz9Nz0BZwnjZfezKaDCiK1MSnlEtuL4noo32WJez7%2F1Pq5zs2O44FZT6h0vhTyaR8%2FezUWFBBfynFb%2F8iDpoEAwQ9%2FZ%2BVJLs5huRe7qszl&X-Amz-Signature=7c03a52de50046bd86d228f371c9e490b4c8164ca9e11bfce78c6cd8ee665f04&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
