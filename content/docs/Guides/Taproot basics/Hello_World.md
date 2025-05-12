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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REAODTL6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDNqftM%2BP6LEp68y6ekohHhRuFqrFQPbLcNVizM%2FJy9aAiEA9QQSDZnunA2PtYWyDUpzZ%2Brurgkx5xgRIYiTi3p0k3cqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELEBKlV%2Bn9ASc1zSSrcA3FSfGaQGKD9vj%2FtOgL4XXY2kZ6b%2BRUlrDdJaNh0iMoaRQsMRUnt1ejJSDyMy5z200h9HV%2BlMZ0Yx34YNAWxs2zLlrjfjnbq1mDoGVl1AWu%2BQtApiuBw5iivk%2Famu1LrvpWv%2BBJwkyPcy5gHDbJ1TEgduaA8cXzkR9DteKYsxR0FQ2updRwHzplqon%2BanPa64gai5ZcCaF%2BtD%2FHHGcl5k99ljFwYVA8vP4TZpiYqkj0ArHGk4RobXr1Q1oyC255NXOV%2BQAPTKnTOgQ%2FQQSDuQhILFu6kaF6YxRM%2FuiMfNSyBhKfKcD7mt6rx5btVGTBcMy7Zi7Fe6X%2B9NFUJqoTdeAYosedOJe2k0KVx%2F68zb0fY9dkjLJ8k82ai0XScy6nSEwLKK6eHJ0GnYlWkQTy8X5x6T4pUaic9Kq8Y4QKWsiceZjKUSmbdjf%2BrYiqms3Op74bk%2BjiEGHsVcW2dW43pZ5Q5Fd4prRhziAceVO0Wu%2B5VknCfXMPB%2Bfhhn40sg7k5guxZY7caKrndOMlawCZaogN%2FZ0nZRPEdcZnZ1nT%2FD29uOhD%2BoOD7llx2wsAmNhkFsUwHSCN0wJed4wdhWkJ34WI2%2BX4C9BEYcd%2BioYOvXVWLA4OBJ05ERkDY1LW7MLGEhsEGOqUB95B5mwOhGfZQaeAKZct%2FJqM5%2FrFyqq0GUw3AEPnuh1J7p%2F4IbA6ur0mDuJReuEIe9e0RaP%2BA%2BMQLpXRIqMrf2w8DQbsLHS5YWwtSKgS2p%2FBtMZcPZatjmjeRJeBxrh%2FT4w13gT78EE0GKCtLy5LqAHjXNaQkNxStp9CIGDqnlp45buOr92cb0ho3NcUTWiWZCMwXs90ERALc4pJ1z2dcJA%2F%2B0Fde&X-Amz-Signature=29bcd6b89d4b2287f020b30a25500519cbe9937c0dc652e21c305aae9ca9ad47&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REAODTL6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDNqftM%2BP6LEp68y6ekohHhRuFqrFQPbLcNVizM%2FJy9aAiEA9QQSDZnunA2PtYWyDUpzZ%2Brurgkx5xgRIYiTi3p0k3cqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELEBKlV%2Bn9ASc1zSSrcA3FSfGaQGKD9vj%2FtOgL4XXY2kZ6b%2BRUlrDdJaNh0iMoaRQsMRUnt1ejJSDyMy5z200h9HV%2BlMZ0Yx34YNAWxs2zLlrjfjnbq1mDoGVl1AWu%2BQtApiuBw5iivk%2Famu1LrvpWv%2BBJwkyPcy5gHDbJ1TEgduaA8cXzkR9DteKYsxR0FQ2updRwHzplqon%2BanPa64gai5ZcCaF%2BtD%2FHHGcl5k99ljFwYVA8vP4TZpiYqkj0ArHGk4RobXr1Q1oyC255NXOV%2BQAPTKnTOgQ%2FQQSDuQhILFu6kaF6YxRM%2FuiMfNSyBhKfKcD7mt6rx5btVGTBcMy7Zi7Fe6X%2B9NFUJqoTdeAYosedOJe2k0KVx%2F68zb0fY9dkjLJ8k82ai0XScy6nSEwLKK6eHJ0GnYlWkQTy8X5x6T4pUaic9Kq8Y4QKWsiceZjKUSmbdjf%2BrYiqms3Op74bk%2BjiEGHsVcW2dW43pZ5Q5Fd4prRhziAceVO0Wu%2B5VknCfXMPB%2Bfhhn40sg7k5guxZY7caKrndOMlawCZaogN%2FZ0nZRPEdcZnZ1nT%2FD29uOhD%2BoOD7llx2wsAmNhkFsUwHSCN0wJed4wdhWkJ34WI2%2BX4C9BEYcd%2BioYOvXVWLA4OBJ05ERkDY1LW7MLGEhsEGOqUB95B5mwOhGfZQaeAKZct%2FJqM5%2FrFyqq0GUw3AEPnuh1J7p%2F4IbA6ur0mDuJReuEIe9e0RaP%2BA%2BMQLpXRIqMrf2w8DQbsLHS5YWwtSKgS2p%2FBtMZcPZatjmjeRJeBxrh%2FT4w13gT78EE0GKCtLy5LqAHjXNaQkNxStp9CIGDqnlp45buOr92cb0ho3NcUTWiWZCMwXs90ERALc4pJ1z2dcJA%2F%2B0Fde&X-Amz-Signature=1272925195a11b29c99e3673e2b95c2acccaf5f115e5723109b6c059c2dd45d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
