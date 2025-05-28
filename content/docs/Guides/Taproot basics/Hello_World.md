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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPECGK2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2qZFZgKxsQAMSqjxt2ij5DRzI%2FNScUtXxrs38oebQAAiEAsZ91ArQ%2BNJTCIqwpQy6aEv7rZe%2BjZpqZiWuQIDV9VOkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEsK8xUP6Qv25rXrtSrcA9BAIPxDbKXqF3fEkUwDkbqp2q%2FEiaHRtFEhqd3pa6R8ak%2FC3HH8kuh1LOQySAYf%2BzUUH5W8pEJ37w6%2FAPk1n%2BVeEWOgitL8R7evpXJfX6iFf6YnYnM3xgc8k58uGT4okoymrUZvMO4vZpJ1S7%2BvTZJmwLJu%2BNS%2FN9QUZLMDbeM1U1zitnycKJJ8Bdd6eBiypt4z5A9apAe5otSgngSFQ6jR4X5khrB9wDOFFrbFRPoRkyNpN9MQpQD%2BKU883uehrmauOXgSzwFQ0opYvJ3QQaGCIzR4ZufQVahGwbklkpCn6it0eoRZp6b9guJSNP82qQyyUAfPN%2BCs49MOh1MvmaHotBHQiNE02dQaohf7D%2FixOgG%2BnieE9wc4%2B0ikRTIpn4GqnEIolabJWQjAxWNFN88S5aXEcWKb30OwXqDceBcGI9K%2FyWlQdxnKhc6i%2BXwZ3Wv49G3fHLmuiFmjUW4a0qVLkqB5bYlFB%2BJReQHXhTb0c8I6qL1vzUfJaaFTPnp79BJjd2X6X%2F6NqsvveivaXZkSLi8XSnrN9%2BURqGMpclClsSCy6FLb0bZEUTU5YplQMo5HObwQPLONSJ8rcXmSHoUcsJJgOLEI5CqhPnxfT6K1LpGOVbKKWq2W%2BFDDMNKX2sEGOqUBRPKfoTozrUEprMVnc%2BGa6FKgGZHxnVkm%2BgBYnBoSjLuUcPMHZJw1LKZkf92uck9sRoov6aiYgnmQp7TNGJ0dATaVxhszAVpV9CBX32%2FfLE7L2sdp0loUd5%2F0hTiln0GfqbYbiF%2FOUOsz%2FoljVZ6VhNV%2BNHiwtAmv5qBn%2FrIYq06Lb0fu4tB%2FMIfTwBXwTWILFtJMYVcgmg0c6UPaM279rWQVu4H%2F&X-Amz-Signature=812daf9b084569e8bb190ea5114e957560005cd9518db81be2c2aea22feee622&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPECGK2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2qZFZgKxsQAMSqjxt2ij5DRzI%2FNScUtXxrs38oebQAAiEAsZ91ArQ%2BNJTCIqwpQy6aEv7rZe%2BjZpqZiWuQIDV9VOkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEsK8xUP6Qv25rXrtSrcA9BAIPxDbKXqF3fEkUwDkbqp2q%2FEiaHRtFEhqd3pa6R8ak%2FC3HH8kuh1LOQySAYf%2BzUUH5W8pEJ37w6%2FAPk1n%2BVeEWOgitL8R7evpXJfX6iFf6YnYnM3xgc8k58uGT4okoymrUZvMO4vZpJ1S7%2BvTZJmwLJu%2BNS%2FN9QUZLMDbeM1U1zitnycKJJ8Bdd6eBiypt4z5A9apAe5otSgngSFQ6jR4X5khrB9wDOFFrbFRPoRkyNpN9MQpQD%2BKU883uehrmauOXgSzwFQ0opYvJ3QQaGCIzR4ZufQVahGwbklkpCn6it0eoRZp6b9guJSNP82qQyyUAfPN%2BCs49MOh1MvmaHotBHQiNE02dQaohf7D%2FixOgG%2BnieE9wc4%2B0ikRTIpn4GqnEIolabJWQjAxWNFN88S5aXEcWKb30OwXqDceBcGI9K%2FyWlQdxnKhc6i%2BXwZ3Wv49G3fHLmuiFmjUW4a0qVLkqB5bYlFB%2BJReQHXhTb0c8I6qL1vzUfJaaFTPnp79BJjd2X6X%2F6NqsvveivaXZkSLi8XSnrN9%2BURqGMpclClsSCy6FLb0bZEUTU5YplQMo5HObwQPLONSJ8rcXmSHoUcsJJgOLEI5CqhPnxfT6K1LpGOVbKKWq2W%2BFDDMNKX2sEGOqUBRPKfoTozrUEprMVnc%2BGa6FKgGZHxnVkm%2BgBYnBoSjLuUcPMHZJw1LKZkf92uck9sRoov6aiYgnmQp7TNGJ0dATaVxhszAVpV9CBX32%2FfLE7L2sdp0loUd5%2F0hTiln0GfqbYbiF%2FOUOsz%2FoljVZ6VhNV%2BNHiwtAmv5qBn%2FrIYq06Lb0fu4tB%2FMIfTwBXwTWILFtJMYVcgmg0c6UPaM279rWQVu4H%2F&X-Amz-Signature=f0f49ee7cb8f5bd049e477d83d1eaac09dfbac39f19c02ed77b92f8f747b03e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
