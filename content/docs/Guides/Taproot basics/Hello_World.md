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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGI2SUE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGCzDouKSvFU%2BoyjlUm6EBr2uo8lXxjnTnIZQeFrHlBgIgHlSaadk8Rk67V3zPU5DEmKns%2FHCf%2BCoqiJtI%2FiWTXYcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOps%2B15BEc%2BbHkIBQircA0Vziw0pPlnGK2Z2Ul%2FJyCJBYprCQV0ePrQsCiDbyFr617h0Q5mEzSY9Kk80ElGQNVFUd%2F5SvehMaXvqQe0j7nTnttrksDkUMXg1VIhD%2Bi9FzN8fmlDdT0jpVfLTHXqmuvNhXRdX6sZG1f4CCg2kbD3xoUrdwVqHvkYVYSLDdLj%2BEur%2Bxo0JqYsUnDtKbNAo8%2BffbXr9kowLbO34RNoQohgy2QOWjrOFHezNK6lu7H9vGpUhxNSAyq6fyek8iyvYeuZRqna8XIGL4fHxW8U1ydRSdPVyBxLGQsrzOcLpShhFqsyKoSh1Bz8DhaSdWmlD5Ew%2Fet6jEHPq8Wq%2BqMrsMlLyl7H0lNFM2WbGyGPdz2J542oEff0QyaDgzsdKpNf3Xp1S6NKI2n1ayaYtKMy5iUCGtUNQQbHqy3CEf9avXpkGlhisExPSlZokEVKzBCJg5lQa8mlk3L%2BdJp35eDu44UN9BHAT7bdVib%2BzQx9JK9Iu2jEU26HLFjfnBeDzEyarFjbqIrNpOs2xcSxPd4igamHOXwsJe29azM%2BMgHn6i%2FUkWfhgas%2BXYM5djx6ATzyJYrsf3UPRlV8ZMSxV1R8jtOpEQ27l0CxGp2CBsPLofAOQIJEgMyivBei2t0yRMPOwlb8GOqUB8Sw4X3YIVFFuooXUyiPeKkajBD2RHNBzHMTpvCmzHCYIs9dEXV9EkjfmgeYurNMASPHTba3CI6Z4wEUs%2BJC1bbwbC9i8cs2SmHo0fqdSMqC6ylrevlJ9U8bmADfaqaWVPEWsZvXr3d0siwN%2Bat6uIfJdnVtc6R2zN8XtoKG4xOi8smAyG6wrhdJJiaWFVeSqg0aSR%2Bs7zLYgLnGz2laTNItQV4N1&X-Amz-Signature=7a486738d413bdb6e653396851e7c88629d1f9ee2f50368077ed9df0ce82147a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGI2SUE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGCzDouKSvFU%2BoyjlUm6EBr2uo8lXxjnTnIZQeFrHlBgIgHlSaadk8Rk67V3zPU5DEmKns%2FHCf%2BCoqiJtI%2FiWTXYcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOps%2B15BEc%2BbHkIBQircA0Vziw0pPlnGK2Z2Ul%2FJyCJBYprCQV0ePrQsCiDbyFr617h0Q5mEzSY9Kk80ElGQNVFUd%2F5SvehMaXvqQe0j7nTnttrksDkUMXg1VIhD%2Bi9FzN8fmlDdT0jpVfLTHXqmuvNhXRdX6sZG1f4CCg2kbD3xoUrdwVqHvkYVYSLDdLj%2BEur%2Bxo0JqYsUnDtKbNAo8%2BffbXr9kowLbO34RNoQohgy2QOWjrOFHezNK6lu7H9vGpUhxNSAyq6fyek8iyvYeuZRqna8XIGL4fHxW8U1ydRSdPVyBxLGQsrzOcLpShhFqsyKoSh1Bz8DhaSdWmlD5Ew%2Fet6jEHPq8Wq%2BqMrsMlLyl7H0lNFM2WbGyGPdz2J542oEff0QyaDgzsdKpNf3Xp1S6NKI2n1ayaYtKMy5iUCGtUNQQbHqy3CEf9avXpkGlhisExPSlZokEVKzBCJg5lQa8mlk3L%2BdJp35eDu44UN9BHAT7bdVib%2BzQx9JK9Iu2jEU26HLFjfnBeDzEyarFjbqIrNpOs2xcSxPd4igamHOXwsJe29azM%2BMgHn6i%2FUkWfhgas%2BXYM5djx6ATzyJYrsf3UPRlV8ZMSxV1R8jtOpEQ27l0CxGp2CBsPLofAOQIJEgMyivBei2t0yRMPOwlb8GOqUB8Sw4X3YIVFFuooXUyiPeKkajBD2RHNBzHMTpvCmzHCYIs9dEXV9EkjfmgeYurNMASPHTba3CI6Z4wEUs%2BJC1bbwbC9i8cs2SmHo0fqdSMqC6ylrevlJ9U8bmADfaqaWVPEWsZvXr3d0siwN%2Bat6uIfJdnVtc6R2zN8XtoKG4xOi8smAyG6wrhdJJiaWFVeSqg0aSR%2Bs7zLYgLnGz2laTNItQV4N1&X-Amz-Signature=ad7e5cddb1c11a3dd5a8c5948a328417c846bb7b0cfa01f1daaaccb3c27f90c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
