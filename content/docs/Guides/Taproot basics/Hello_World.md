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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6P2DZDM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC%2F8hth7zTNF3Az9YhC8MCE7meu5UP68Do3%2BLZX8GnVPAIgNEfgd9HAHuC4ZZH%2BBvn0e0WHFxj7Cj%2F1KNbX4SAiJjIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOMSDSST%2Bvze2kETLSrcA24UubQMkwXqrYWHPeKTT%2BxH968St3Bbl8n3lsSfEJoWikr8v0NXoXRGO3TAhmaUT4pI18jnHtx8e4J2T4KAUA%2Fn6orzDRaYlGHFwXg5ykfilZT%2FKzCO9rypdlUIOe%2FWY7jrYosHjMPX1TrVgqoX2jNxVjw2MjmYmIKvMIL%2FXkKy%2FHqEywXHzqGeYJ%2BmrIdZGszFhXYvhaoPUQEqfXlmqcS32xFesh3hHVjvNV5qnCYG60e%2FYKXkfHtiH7mTEzufdyeGVtG36wkfLDJDaGJNyrujpHB%2BCoL46o6fpw7CEzU5KDDym%2Be7jZRvgHQvyCww6vDpO3FCGv%2Bx1WynBPcD14VEdBbJm3YtxhczpuzmayHeUa9mO0lIUEbUwwMUF9c4bXAahVPe3LeyIQO7rAGFd5lARfZQvI%2B7sQ2VSmCq4CM4ei91daoiF%2BcTCUyYP0Harfteazx0ez6JyDBQ6LBW9xApQsMjfU4D5qL8yGpPIIu83iGuHa94XazIQufe5go4SsNizs%2BQG2vvAy98RJQfvCTjYZ81VDIiYTkZMvE4hJFMUQBECslkmy6di38sjZL4FmLGr2xSW0X5%2Bt7693Wq6e0M3f%2BMiD7hgxh21U%2BugFZ6%2FmyQFHCtrhTUZn3MMOO%2F6r4GOqUBZ50ntmgVyFCnWvLOt0ymZD0n4Zry4eVtoBePckyIfJdhaUx3IVEXJxbS%2FSMCHzpYRTHsdur1b5K86X5k8eB%2B9Vqx0KnmCSR9P4AqtyFmIHqbSOqmAGggVk%2BPLbyvYWI8rOA2F7vc%2Fl0VRZBzAH3txyXv9EJz7IBndCXpIqgOyMZBkSzalkci3ECHP2PaAJEA9Mi5p6dA0iJwB63uicNJjTNV7fJy&X-Amz-Signature=2b2c405f8f673fd4c280ec4fa91678067c4656a868cb1b511734857022277ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6P2DZDM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC%2F8hth7zTNF3Az9YhC8MCE7meu5UP68Do3%2BLZX8GnVPAIgNEfgd9HAHuC4ZZH%2BBvn0e0WHFxj7Cj%2F1KNbX4SAiJjIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOMSDSST%2Bvze2kETLSrcA24UubQMkwXqrYWHPeKTT%2BxH968St3Bbl8n3lsSfEJoWikr8v0NXoXRGO3TAhmaUT4pI18jnHtx8e4J2T4KAUA%2Fn6orzDRaYlGHFwXg5ykfilZT%2FKzCO9rypdlUIOe%2FWY7jrYosHjMPX1TrVgqoX2jNxVjw2MjmYmIKvMIL%2FXkKy%2FHqEywXHzqGeYJ%2BmrIdZGszFhXYvhaoPUQEqfXlmqcS32xFesh3hHVjvNV5qnCYG60e%2FYKXkfHtiH7mTEzufdyeGVtG36wkfLDJDaGJNyrujpHB%2BCoL46o6fpw7CEzU5KDDym%2Be7jZRvgHQvyCww6vDpO3FCGv%2Bx1WynBPcD14VEdBbJm3YtxhczpuzmayHeUa9mO0lIUEbUwwMUF9c4bXAahVPe3LeyIQO7rAGFd5lARfZQvI%2B7sQ2VSmCq4CM4ei91daoiF%2BcTCUyYP0Harfteazx0ez6JyDBQ6LBW9xApQsMjfU4D5qL8yGpPIIu83iGuHa94XazIQufe5go4SsNizs%2BQG2vvAy98RJQfvCTjYZ81VDIiYTkZMvE4hJFMUQBECslkmy6di38sjZL4FmLGr2xSW0X5%2Bt7693Wq6e0M3f%2BMiD7hgxh21U%2BugFZ6%2FmyQFHCtrhTUZn3MMOO%2F6r4GOqUBZ50ntmgVyFCnWvLOt0ymZD0n4Zry4eVtoBePckyIfJdhaUx3IVEXJxbS%2FSMCHzpYRTHsdur1b5K86X5k8eB%2B9Vqx0KnmCSR9P4AqtyFmIHqbSOqmAGggVk%2BPLbyvYWI8rOA2F7vc%2Fl0VRZBzAH3txyXv9EJz7IBndCXpIqgOyMZBkSzalkci3ECHP2PaAJEA9Mi5p6dA0iJwB63uicNJjTNV7fJy&X-Amz-Signature=b2d93dd5841ab2185b2e826fa14c0306170d2798887b522ea95c1e7ecba5e142&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
