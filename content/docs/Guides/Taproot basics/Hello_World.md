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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WVRO5J4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK%2F5DPqs8VldhbgqBbYj7oIUdCblL2rvS%2BehYtz%2FEl%2BAiBv6R%2FB%2B9rVR7GnzE6RDSGnZlmJl2A7SCUOwkO50z0krSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMbcGdLOMOaIBLtNIAKtwDY16S8XKdSULcNGSQaPBWlIYLgnNm2YQZYhFHY3rVmlaK7vg9uYA8jF00QZ6V0xQIlkhMBFOI%2FJ%2BUAtkieQY1gGbvwsc8lyPTRm%2FZkxYMEwkUqq8kZAaHRzSDYWUIi6H7S56BsIzDibp7wFY2l5FuyV0psxKCc2oCsJ1ds1J7VWoPCFUjakEy0skC%2FCHnWNfZdhnVovoJ0Ya%2BXlG%2FyIjpD5D8KDNcP4yWcc244OaveECCpaqsWG6Wj5ZIFXsfexvsNMOWuhiW3CylaQZ4LTY%2BztESmJleU82Z5wqP0L%2Fn0q9mIgA8wOMX6uAkXQvdfWqsOu8nJ1PHYoCZPf52vN4XHbnVR%2BNY1NVJpSu9MXlD3jm7iloG%2B3SDnAPi5C0c9ABbNc8YxxoVcfp2hwMlP3SMNVYNLTgzcM2BxyiihH5pFq3Yn899VtieEfJeXSNLnGPXwlV%2BkEt92x55ogPcSskSr%2FALbYE49yuSYN%2FEg5GnNs%2BuHKxt4Y6UXQ%2B93CmH7MnHQW3qwUYp7%2B8Dg9%2Fg%2BMkX8BEmdNm1R4jqtO6jPn2%2BNkSqM4kMd4XyNa4zN0S%2FmKqPjBQ3oPm5jr2WyKp68xtce3Q5KdQs0YRRZwYMUvN84e0ZU%2Fu0gAe8DPnIxP8wy5HrwAY6pgHj8%2Bq6pkXLZYooJNibHGinjHTD7XeZ7OuzXYHwjcxOJ2NPeGyk2vEhJWFnLJIxlNPpvByxvLLq3f1u0o3S5aFsYZt%2BBN53Mu%2BTFGHnAgCXVvblc1NT1pWzN05RIPBDGlxecoBhezbZ9nq1iMQnJVyUzh90av8tT3efmgU%2B2IxmoGkj2K7%2BvMEvCtzHnGttvIOPjCAerAQiWFTjfjHc7%2F9WTpu%2Fjbhb&X-Amz-Signature=d5bf21c690f69d5ab49b958b2bf7f940e458e9bd793846b3cf833c8d39829d01&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WVRO5J4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK%2F5DPqs8VldhbgqBbYj7oIUdCblL2rvS%2BehYtz%2FEl%2BAiBv6R%2FB%2B9rVR7GnzE6RDSGnZlmJl2A7SCUOwkO50z0krSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMbcGdLOMOaIBLtNIAKtwDY16S8XKdSULcNGSQaPBWlIYLgnNm2YQZYhFHY3rVmlaK7vg9uYA8jF00QZ6V0xQIlkhMBFOI%2FJ%2BUAtkieQY1gGbvwsc8lyPTRm%2FZkxYMEwkUqq8kZAaHRzSDYWUIi6H7S56BsIzDibp7wFY2l5FuyV0psxKCc2oCsJ1ds1J7VWoPCFUjakEy0skC%2FCHnWNfZdhnVovoJ0Ya%2BXlG%2FyIjpD5D8KDNcP4yWcc244OaveECCpaqsWG6Wj5ZIFXsfexvsNMOWuhiW3CylaQZ4LTY%2BztESmJleU82Z5wqP0L%2Fn0q9mIgA8wOMX6uAkXQvdfWqsOu8nJ1PHYoCZPf52vN4XHbnVR%2BNY1NVJpSu9MXlD3jm7iloG%2B3SDnAPi5C0c9ABbNc8YxxoVcfp2hwMlP3SMNVYNLTgzcM2BxyiihH5pFq3Yn899VtieEfJeXSNLnGPXwlV%2BkEt92x55ogPcSskSr%2FALbYE49yuSYN%2FEg5GnNs%2BuHKxt4Y6UXQ%2B93CmH7MnHQW3qwUYp7%2B8Dg9%2Fg%2BMkX8BEmdNm1R4jqtO6jPn2%2BNkSqM4kMd4XyNa4zN0S%2FmKqPjBQ3oPm5jr2WyKp68xtce3Q5KdQs0YRRZwYMUvN84e0ZU%2Fu0gAe8DPnIxP8wy5HrwAY6pgHj8%2Bq6pkXLZYooJNibHGinjHTD7XeZ7OuzXYHwjcxOJ2NPeGyk2vEhJWFnLJIxlNPpvByxvLLq3f1u0o3S5aFsYZt%2BBN53Mu%2BTFGHnAgCXVvblc1NT1pWzN05RIPBDGlxecoBhezbZ9nq1iMQnJVyUzh90av8tT3efmgU%2B2IxmoGkj2K7%2BvMEvCtzHnGttvIOPjCAerAQiWFTjfjHc7%2F9WTpu%2Fjbhb&X-Amz-Signature=01c8b2b4895d71a9097d21bb17b495736af018e4ae7e58797d09118de861992c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
