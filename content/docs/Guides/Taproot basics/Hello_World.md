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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPC6JWQB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHWIIxos8SIJuIkxsUZT42k8BinvI50%2BiT6f8NRPoLmAiB6x8p%2Ft94sijotA8iKQY7YtwlMxvSxTiYexHmcmolumir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMFE4nDQs5nmEI6LdSKtwDIFHmBzBAgIZS%2F9ZBv04LLT91yUfWs%2Fr%2FqpOpOLzfQItpdMCbhWG0tOJP6YDSbFUTn%2B8TghigNLZfz71Ks5BdbLLP2cuhKHwGQhWccuG9GRnYc4BYsNVpFFaAjWSXHpBDMwnhYCvfyzYF0ADc6X%2Fon42B1YTqHJkOTI7D5IbJp6JxA0ZElqgVuu2njzDxZ1jjpWY35OP%2B%2B3VHu6k8k6a6Th1jl3aZPaoEnqtdhnmQrfQs4b9WC%2FVUw2lz%2FDxs8CCVjKvDREkTl7H7wB8zK6Oq2aemkMezLYPBRKEWIJpQxPOUZo1ynGnzeMjzS%2BYXySBxdPFayeTNRnJ0T9M7%2FIq%2BXSI7bd1z%2FVrXc59GPvh%2BNUVyf23q%2F2YJ4q9z2pjI9JVNRflXQg1n0bAx0qfGz6Rq7mxe2CMxIsBXrfx0S3l3sjvqvkvTQX%2BCwQT8pkCD1djUXnm%2FAN9yjlJnriDj2fKNGJwwRkgfcZZhUoQQ9pFBhUOQiv%2F%2FIViQOSMj4qXMegrY66Bb5ud2v1xEMgD6%2FQOrI0vYn1xLNBmlYxbd%2FoXh4Yj1FwwJPvXVeLlm9dNhMJ4b0VbDAL9xgtGFbqai3vHER6Mx65Hi9Gh4QNCKMFNJkVIGdnp1GrskmDqjHaUw1cGowQY6pgH8LGCtUgpXqBjY2Nq1m8K3FLyh%2FP46hwZEH4W6DPAqSZRdP%2FqbC36A301jCxp7DhSLbyRlikSiKRs8O%2F3I5wrnBrSQHK9MzSvNAUTOuA3KKmJbqJBnW93dNKEyk0TPbI3N805O3BseoGVZN%2F1WRuItU4ZoC%2BT1mZ7dmglJPlq%2FWs%2BFu4PzsgaynAkED3iQIbwESpxc56t05GftEaeZM33WrEc89%2Fa3&X-Amz-Signature=fe87cb9f338baf16f77f30f74fd02083df7131005696ca70a7a23417fdda3afc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPC6JWQB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHWIIxos8SIJuIkxsUZT42k8BinvI50%2BiT6f8NRPoLmAiB6x8p%2Ft94sijotA8iKQY7YtwlMxvSxTiYexHmcmolumir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMFE4nDQs5nmEI6LdSKtwDIFHmBzBAgIZS%2F9ZBv04LLT91yUfWs%2Fr%2FqpOpOLzfQItpdMCbhWG0tOJP6YDSbFUTn%2B8TghigNLZfz71Ks5BdbLLP2cuhKHwGQhWccuG9GRnYc4BYsNVpFFaAjWSXHpBDMwnhYCvfyzYF0ADc6X%2Fon42B1YTqHJkOTI7D5IbJp6JxA0ZElqgVuu2njzDxZ1jjpWY35OP%2B%2B3VHu6k8k6a6Th1jl3aZPaoEnqtdhnmQrfQs4b9WC%2FVUw2lz%2FDxs8CCVjKvDREkTl7H7wB8zK6Oq2aemkMezLYPBRKEWIJpQxPOUZo1ynGnzeMjzS%2BYXySBxdPFayeTNRnJ0T9M7%2FIq%2BXSI7bd1z%2FVrXc59GPvh%2BNUVyf23q%2F2YJ4q9z2pjI9JVNRflXQg1n0bAx0qfGz6Rq7mxe2CMxIsBXrfx0S3l3sjvqvkvTQX%2BCwQT8pkCD1djUXnm%2FAN9yjlJnriDj2fKNGJwwRkgfcZZhUoQQ9pFBhUOQiv%2F%2FIViQOSMj4qXMegrY66Bb5ud2v1xEMgD6%2FQOrI0vYn1xLNBmlYxbd%2FoXh4Yj1FwwJPvXVeLlm9dNhMJ4b0VbDAL9xgtGFbqai3vHER6Mx65Hi9Gh4QNCKMFNJkVIGdnp1GrskmDqjHaUw1cGowQY6pgH8LGCtUgpXqBjY2Nq1m8K3FLyh%2FP46hwZEH4W6DPAqSZRdP%2FqbC36A301jCxp7DhSLbyRlikSiKRs8O%2F3I5wrnBrSQHK9MzSvNAUTOuA3KKmJbqJBnW93dNKEyk0TPbI3N805O3BseoGVZN%2F1WRuItU4ZoC%2BT1mZ7dmglJPlq%2FWs%2BFu4PzsgaynAkED3iQIbwESpxc56t05GftEaeZM33WrEc89%2Fa3&X-Amz-Signature=f4d620800fd395107141689dc63898334974282aa713a86a5d7acc6dd1a7500c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
