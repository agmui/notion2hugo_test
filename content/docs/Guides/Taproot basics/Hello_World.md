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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5GLJHMG%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFgrU9NZog7OZZBBqpNTgZfo4uqEPlmz5XWz2mKlC3kgIhAIG5Gb6ntxwiAnnwVvkn6NZp7EuEL67dWXKRKJq%2FvqvNKv8DCDMQABoMNjM3NDIzMTgzODA1IgzfyLgUWh%2FCtDTJ2nIq3APVqToaSkMyMoIlN0sTvp%2ByLAoVHk7bmnLRM8IrPhatTJrHUPWr%2Be5vg1TqEYMub1ss6H8bkhYGWdt1lnI1kJJaU4tp5VbmlVmHD2f0yg0n%2F9NJtExbrqiV1Ar7twAx5IRFQgtQDOz6wgS2dMp0DoyUXNDj%2Bai6ckRoxMf%2F2UIW1t7i0McWs%2BzEUBW%2BFDtSjw7tiXwZfR1hn%2FVNwsZjUX3wN7UV5Ya2HAEE8BNWY3FqrlcmqvcQ0TzvfKzTlj36KRlQCfYuPkHKBgvnBOQocL0ocCJYsCge0q4HSSmbpnQGBmRcNRvjaTKEt2wCOU9yYtwK%2BN01K%2F1UI6qCr22IX0wzPMJMyq9D0nkKyrfhtfDoXkQwuT74sO8%2BdrcAxkexB3O5kWtwCrJtvmkvV0ehZcR6HswDbg4hJkM9mTfNWxDNIDq0YXER%2BP0vJOA6BiC5s0Wm796c1TzjQf%2B9E9GVXYT0ZmsCggV88LUEwGD0uVlvuBYsxs%2Bw8zcPFct20TmlqEx%2FHceTLkA52xASqwBc7ibv0Sz7ZRVoEEouFosPgwyxMHu3nCUEp1rTTmnjAlz8pyLCoE82B65BuNyvd%2BLxaZFa%2BL55D6AzIpZsU3dVpNAl9iWvibxa59UXTKMN%2BTCpna%2FABjqkAZ9Nu634XEATGJbSk%2B2bd3er8s4QYNPlIUKAHONQaqV58iaUA%2FEIyOPcblyv4%2Be9quoC9w2QUbSpnup7lWXIK97IArJgKBH9pM1L%2BOKhbF3NmEO%2FhEdKGlbfiCA5S%2FXd261jckRsOadKAN67WGXAmrNF7O2D2xdIKYYKdqLEJ4Ocm2X%2B0jNDfTs5SmE6psr3oeqOPCIg%2BH7ge79TxQIApdghFVAv&X-Amz-Signature=66e9455db8efd93972b8c7d39c1e1fe0f836251c0b14ebdde7ae3bb3c46021c5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5GLJHMG%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFgrU9NZog7OZZBBqpNTgZfo4uqEPlmz5XWz2mKlC3kgIhAIG5Gb6ntxwiAnnwVvkn6NZp7EuEL67dWXKRKJq%2FvqvNKv8DCDMQABoMNjM3NDIzMTgzODA1IgzfyLgUWh%2FCtDTJ2nIq3APVqToaSkMyMoIlN0sTvp%2ByLAoVHk7bmnLRM8IrPhatTJrHUPWr%2Be5vg1TqEYMub1ss6H8bkhYGWdt1lnI1kJJaU4tp5VbmlVmHD2f0yg0n%2F9NJtExbrqiV1Ar7twAx5IRFQgtQDOz6wgS2dMp0DoyUXNDj%2Bai6ckRoxMf%2F2UIW1t7i0McWs%2BzEUBW%2BFDtSjw7tiXwZfR1hn%2FVNwsZjUX3wN7UV5Ya2HAEE8BNWY3FqrlcmqvcQ0TzvfKzTlj36KRlQCfYuPkHKBgvnBOQocL0ocCJYsCge0q4HSSmbpnQGBmRcNRvjaTKEt2wCOU9yYtwK%2BN01K%2F1UI6qCr22IX0wzPMJMyq9D0nkKyrfhtfDoXkQwuT74sO8%2BdrcAxkexB3O5kWtwCrJtvmkvV0ehZcR6HswDbg4hJkM9mTfNWxDNIDq0YXER%2BP0vJOA6BiC5s0Wm796c1TzjQf%2B9E9GVXYT0ZmsCggV88LUEwGD0uVlvuBYsxs%2Bw8zcPFct20TmlqEx%2FHceTLkA52xASqwBc7ibv0Sz7ZRVoEEouFosPgwyxMHu3nCUEp1rTTmnjAlz8pyLCoE82B65BuNyvd%2BLxaZFa%2BL55D6AzIpZsU3dVpNAl9iWvibxa59UXTKMN%2BTCpna%2FABjqkAZ9Nu634XEATGJbSk%2B2bd3er8s4QYNPlIUKAHONQaqV58iaUA%2FEIyOPcblyv4%2Be9quoC9w2QUbSpnup7lWXIK97IArJgKBH9pM1L%2BOKhbF3NmEO%2FhEdKGlbfiCA5S%2FXd261jckRsOadKAN67WGXAmrNF7O2D2xdIKYYKdqLEJ4Ocm2X%2B0jNDfTs5SmE6psr3oeqOPCIg%2BH7ge79TxQIApdghFVAv&X-Amz-Signature=d9227219edb526bbd5cea5f8bf2aafb4fb6b37d44980506037af6899ceb04289&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
