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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZOLRPQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsp3hdb9v3XAJHVVKmYYx8VMJsU5nuqdBMr88RNsv1QIgWIzsxXkBQZJfsy2BPxSwCuXbllxaN7%2FVd92Z9ATowjEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BXC6cHpPy%2F%2F9av9ircAweZKviDUTeMokfdyHtjzJCZv7y0pQ%2F%2FH%2BHX7lfbl8DK4hU2FCjCrLIvCqaEmzPlm%2FwJbBkyme9ttSJANwAPQnJImItNMWiNa1f8leBmitOUs26gee7MK0x4a1OnMHP0SwS6xWt9lSpJ4GcaMDkZX0AjmEfPCP8XsHRRA1rEEEXKj3WJFJhyYQs9LoJMjsp%2BNIUbfhD3MN1RH5y0UlKvSZ%2FQONJrG%2FhRJZ%2F%2FAzx4iadUAQRcgkNFshWnh%2BSANPdt2zA04eW4W4C3%2FE8KBiF7qDwkJ%2Fvhks6pezyI%2BENESRVUMttDxYs8vdM4oC15TCrpl4wzTQiCndAED38dvAKBGL5mrBxf2reB9rG0tTErKqybEEuKs6%2Fv6S4zGVRQ9tCtrc3qQoyipHLQwI9co0fMI%2Bz0YsfAZmReBSXt4Xx8RIz%2Fk8A2T0m7O%2F2jaXkqKYvxzhAi8pRS8aWpuwxTraPkOAOs7KHmaAT3ncoiBvbowzFfFhPo4oB6sRxcpuj57C1%2Fs9G%2BZ9ZEKwTpe2DGevwZO2tSRcbL%2FlXGtUgjRthIWtXeYNvh2bqnB1DN%2BEsdRqGyOoNoo2vlyiWtvHoshnHPcT727NN4app4EXPyCMK%2B2IZia2ec3MIqvKmA7pCaMInBlcMGOqUBwYEK%2FKx%2FYhpiHo3IDDnZDSLBnyjwkDK1wjD224icxZdgRc8AptX1xURz1jjsq8ITpjLSl31qbFBhabYD0RNa9186fLyYSPAR5dYHI31SHQ12%2Fwh9H2ExFHjmenw6fDszZQDK8LeDELtRyudIa0qInhHnmjrS181xgJvY%2BHLxT%2B6j3b6BjnRYSyoekjEa3VG5%2BogBeBcndbE04Th18BSwWgq4X7f2&X-Amz-Signature=b8b86b6cda24d31551f9a54d15a56b9f290541c7c86b0dda099da5e3b085a462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZOLRPQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHsp3hdb9v3XAJHVVKmYYx8VMJsU5nuqdBMr88RNsv1QIgWIzsxXkBQZJfsy2BPxSwCuXbllxaN7%2FVd92Z9ATowjEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BXC6cHpPy%2F%2F9av9ircAweZKviDUTeMokfdyHtjzJCZv7y0pQ%2F%2FH%2BHX7lfbl8DK4hU2FCjCrLIvCqaEmzPlm%2FwJbBkyme9ttSJANwAPQnJImItNMWiNa1f8leBmitOUs26gee7MK0x4a1OnMHP0SwS6xWt9lSpJ4GcaMDkZX0AjmEfPCP8XsHRRA1rEEEXKj3WJFJhyYQs9LoJMjsp%2BNIUbfhD3MN1RH5y0UlKvSZ%2FQONJrG%2FhRJZ%2F%2FAzx4iadUAQRcgkNFshWnh%2BSANPdt2zA04eW4W4C3%2FE8KBiF7qDwkJ%2Fvhks6pezyI%2BENESRVUMttDxYs8vdM4oC15TCrpl4wzTQiCndAED38dvAKBGL5mrBxf2reB9rG0tTErKqybEEuKs6%2Fv6S4zGVRQ9tCtrc3qQoyipHLQwI9co0fMI%2Bz0YsfAZmReBSXt4Xx8RIz%2Fk8A2T0m7O%2F2jaXkqKYvxzhAi8pRS8aWpuwxTraPkOAOs7KHmaAT3ncoiBvbowzFfFhPo4oB6sRxcpuj57C1%2Fs9G%2BZ9ZEKwTpe2DGevwZO2tSRcbL%2FlXGtUgjRthIWtXeYNvh2bqnB1DN%2BEsdRqGyOoNoo2vlyiWtvHoshnHPcT727NN4app4EXPyCMK%2B2IZia2ec3MIqvKmA7pCaMInBlcMGOqUBwYEK%2FKx%2FYhpiHo3IDDnZDSLBnyjwkDK1wjD224icxZdgRc8AptX1xURz1jjsq8ITpjLSl31qbFBhabYD0RNa9186fLyYSPAR5dYHI31SHQ12%2Fwh9H2ExFHjmenw6fDszZQDK8LeDELtRyudIa0qInhHnmjrS181xgJvY%2BHLxT%2B6j3b6BjnRYSyoekjEa3VG5%2BogBeBcndbE04Th18BSwWgq4X7f2&X-Amz-Signature=9457c28887b1dedf03e3ab4fddb4f60d747b5e9eb9b926a0581d6fd02fceee36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
