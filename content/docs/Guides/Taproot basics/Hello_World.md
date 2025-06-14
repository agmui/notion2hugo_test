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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELOBB7A%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBXGn1PZHyY32oeceTb%2BRGE%2BUu4PkMJHgWunIqImKBzHAiEAl%2B%2FpNB8IRBigGmXPkxpZF%2FM3NhRg5v6cckbSMHhUZd8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMNNE%2Fa%2Bjmr%2BKqCwmCrcA%2BLGrbSD2aOOkkDB7zPBjf43bVX3tuW2a22iIj5HBzNF7ci7tCeAqoSyFvVuhhiDYwgcw32epYkWrfHzCdaV7Gml1mYpE73BCzTjA7Ka9pGexycjQPtXKEfLYvWiQaxbQR4GrHtrTqz2PZnv4n9uUgla%2FmFtD0l3XR589uCzKdqpE2aBIldOPjaBkWE8HBwtPfGfdpXgPg0egAKrqpjy8xNGNVbBo89ybfo5htrwx95slRUsywVdJEGbyILXnobXRZaN61n76vXRH%2F8MXgCCbRAxtftU5OFZb7iLDxvQtPoaN0D93iW2tLdJ3H8QbyIwcJjUqSFDQ2LVPBM1VJds%2FcLNhgiAX4i%2FABSuWziUdG6njM6adRIqA3%2BH9ffDmZu9mze5OfoWsc%2FP8LveBsbi19Gwgf1NB5u85WXcKjwfXWOWBJLybfOqaud76zNOj36NQe4n2ZB96eF4hpj3zjmDVgKNlHM0xaEfzUdo8dN433BDTN3YTf09q5gmxINtX8OmhZIi3iypjgcxXzAsherh1qCw5qTcgkDIdOjIHPYfELPg6vfwzr4%2F%2BkCOyef1BfyegZPC5spVatmJ4QGvVrH7oAeBfkiCEiNKMlK2%2FisjKiLap77mRFnIRySkg9lXMJXss8IGOqUBDmBmR297AxGlmKZZDv7K6O5mZqZd8T3Eg3p4SGqvMV0xmlo4c4jJ%2BEReFuFGd%2BANc8oyvQTLy6UkY%2BTVw%2Fr2AuOgK4tJSuhSpfWiQg2LXdgsccQhIicIJBhwmUts7%2FgGqHYKEu7kgl%2BMXAwWZ%2FNveJddo14QtYuSS8RRxIgEwTeevBD5ECE%2B%2BbL2mLQKYB1h0If%2FEvXl1BGeT2kmPlZ9ECu1MxbC&X-Amz-Signature=dbac7c4a2f5968deeb8f3f4621b09aea0efedb33f9fa69973925dbf6823fe381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELOBB7A%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBXGn1PZHyY32oeceTb%2BRGE%2BUu4PkMJHgWunIqImKBzHAiEAl%2B%2FpNB8IRBigGmXPkxpZF%2FM3NhRg5v6cckbSMHhUZd8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMNNE%2Fa%2Bjmr%2BKqCwmCrcA%2BLGrbSD2aOOkkDB7zPBjf43bVX3tuW2a22iIj5HBzNF7ci7tCeAqoSyFvVuhhiDYwgcw32epYkWrfHzCdaV7Gml1mYpE73BCzTjA7Ka9pGexycjQPtXKEfLYvWiQaxbQR4GrHtrTqz2PZnv4n9uUgla%2FmFtD0l3XR589uCzKdqpE2aBIldOPjaBkWE8HBwtPfGfdpXgPg0egAKrqpjy8xNGNVbBo89ybfo5htrwx95slRUsywVdJEGbyILXnobXRZaN61n76vXRH%2F8MXgCCbRAxtftU5OFZb7iLDxvQtPoaN0D93iW2tLdJ3H8QbyIwcJjUqSFDQ2LVPBM1VJds%2FcLNhgiAX4i%2FABSuWziUdG6njM6adRIqA3%2BH9ffDmZu9mze5OfoWsc%2FP8LveBsbi19Gwgf1NB5u85WXcKjwfXWOWBJLybfOqaud76zNOj36NQe4n2ZB96eF4hpj3zjmDVgKNlHM0xaEfzUdo8dN433BDTN3YTf09q5gmxINtX8OmhZIi3iypjgcxXzAsherh1qCw5qTcgkDIdOjIHPYfELPg6vfwzr4%2F%2BkCOyef1BfyegZPC5spVatmJ4QGvVrH7oAeBfkiCEiNKMlK2%2FisjKiLap77mRFnIRySkg9lXMJXss8IGOqUBDmBmR297AxGlmKZZDv7K6O5mZqZd8T3Eg3p4SGqvMV0xmlo4c4jJ%2BEReFuFGd%2BANc8oyvQTLy6UkY%2BTVw%2Fr2AuOgK4tJSuhSpfWiQg2LXdgsccQhIicIJBhwmUts7%2FgGqHYKEu7kgl%2BMXAwWZ%2FNveJddo14QtYuSS8RRxIgEwTeevBD5ECE%2B%2BbL2mLQKYB1h0If%2FEvXl1BGeT2kmPlZ9ECu1MxbC&X-Amz-Signature=76c8c7a023d021b7ecd53d61a512bd967806d29ff5ed070b345fa8f5ed6e089f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
