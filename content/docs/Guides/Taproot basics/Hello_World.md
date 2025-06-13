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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675WTLXYJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDHSquocEET5wGmiWPdV0SvU6JjzuJBvD2tBrvPRmAVkgIgHTVQRIgbnFsZkeYHkUrJ8kHA5xOoJ3v9wXIbGjlb2yEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoNm9B3t7LEzqLKXCrcA2DEaR2uzy1M0MVvnJzwZuFUfV0s4ebIHyKdL3brov85o8%2FGCwdISYuaanmcqKs58gMkj8DG7ovaEK7HDDP1aoF7uP6l%2FxhQsbzRlrfdflvO%2Bxdvp1Q4MnbH%2FZMvEugrRhhHUb9Gyia4z4H7fbnFXoWE0qfeqxd%2BqWzyLQxECe%2FQbRft%2ByM8BQ307gRrd9B6etWewyyGjnhmwwdfAzRQevcCxQ6sZfdDY1UFPLK%2F1FeG96W8lXyWE8emQ4%2Bl2ajnKa4OYNV2C1rVfdcu7dcDphPRvXdxEM6KyUrDr0OUDluTKfGnsXkIqMlcU4TIMS20BjA0fl3jGwCsfgcTUvjSAH3GYhi4zRJM%2BHunH8urSRzhwoVnYnTiPdxeJO%2F4%2FmNmYwX0oCXsTGJhwvDrp2isiP7AN18jAjes7AbNe86CZwv0OVX6nQSbbtm85P%2BlrTT%2BUBbB5%2FDfs0lPDG0uit8vJTW5UN8nHgmTb1%2FMiGAlehkZuB8CTYTL7Jns1fhjIq%2FoU%2BFBPxtnP0QALJyb6TUdezMABEq6qLaBu2yY8S%2FxBHrKoudqq60VwJjUCx%2FdgMllO8KNSIUm3joa6%2F5uatYv9%2F8zFdajHvhFyw%2Fbuf3vsaqRjCQbnb2Q5AuBo1iBMPi4rcIGOqUBx7tLHdbYegIBglgITHoT6JV07Qhqz4nbCQubvhxbuUTc6MfkSDhXHeEpTK8odwLUT9AQkAYoYhtAWWay9RBMYPEr3wUuBvF3o%2BkAAQNLvwsnbnU989mXVeNPt2LdZOr0DCQe%2BfSEYIKa2%2FR%2FTTBSC6bEXx6ASTUl653qcVxIj2YHWsU9YGiGhd32ii%2F9rADaVQkmsqKa%2BpFH7iSNyQ3iK%2BAZplRg&X-Amz-Signature=b5123ba633c7f367b278c4762e95090cfc0c7540321e37d67c44ed3f821faa49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675WTLXYJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDHSquocEET5wGmiWPdV0SvU6JjzuJBvD2tBrvPRmAVkgIgHTVQRIgbnFsZkeYHkUrJ8kHA5xOoJ3v9wXIbGjlb2yEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoNm9B3t7LEzqLKXCrcA2DEaR2uzy1M0MVvnJzwZuFUfV0s4ebIHyKdL3brov85o8%2FGCwdISYuaanmcqKs58gMkj8DG7ovaEK7HDDP1aoF7uP6l%2FxhQsbzRlrfdflvO%2Bxdvp1Q4MnbH%2FZMvEugrRhhHUb9Gyia4z4H7fbnFXoWE0qfeqxd%2BqWzyLQxECe%2FQbRft%2ByM8BQ307gRrd9B6etWewyyGjnhmwwdfAzRQevcCxQ6sZfdDY1UFPLK%2F1FeG96W8lXyWE8emQ4%2Bl2ajnKa4OYNV2C1rVfdcu7dcDphPRvXdxEM6KyUrDr0OUDluTKfGnsXkIqMlcU4TIMS20BjA0fl3jGwCsfgcTUvjSAH3GYhi4zRJM%2BHunH8urSRzhwoVnYnTiPdxeJO%2F4%2FmNmYwX0oCXsTGJhwvDrp2isiP7AN18jAjes7AbNe86CZwv0OVX6nQSbbtm85P%2BlrTT%2BUBbB5%2FDfs0lPDG0uit8vJTW5UN8nHgmTb1%2FMiGAlehkZuB8CTYTL7Jns1fhjIq%2FoU%2BFBPxtnP0QALJyb6TUdezMABEq6qLaBu2yY8S%2FxBHrKoudqq60VwJjUCx%2FdgMllO8KNSIUm3joa6%2F5uatYv9%2F8zFdajHvhFyw%2Fbuf3vsaqRjCQbnb2Q5AuBo1iBMPi4rcIGOqUBx7tLHdbYegIBglgITHoT6JV07Qhqz4nbCQubvhxbuUTc6MfkSDhXHeEpTK8odwLUT9AQkAYoYhtAWWay9RBMYPEr3wUuBvF3o%2BkAAQNLvwsnbnU989mXVeNPt2LdZOr0DCQe%2BfSEYIKa2%2FR%2FTTBSC6bEXx6ASTUl653qcVxIj2YHWsU9YGiGhd32ii%2F9rADaVQkmsqKa%2BpFH7iSNyQ3iK%2BAZplRg&X-Amz-Signature=c3ab33b0ba10195fa7905996e924c09da9ccc710c79916cd5cb84967f755893c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
