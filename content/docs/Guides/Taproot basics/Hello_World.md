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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJN24EP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTq4hsupXbZYmtD3hM5bf%2FCe47BtVTwrHGo91vbIim9AIhALsXLCtyVwXaDXkeCY%2F1CegdlMhGyliNAdaiFIZfyiEmKv8DCCcQABoMNjM3NDIzMTgzODA1Igx97R8Wo7HYCp8Go1kq3APjakpEhlENiSqSLDEbwFk076FWVGxhY4bHGMMjhjwSZqclpKluXcLqoDK8owYLD9yn9ClzsK3D8lOT8wT8UmW4aA%2BMuEVHRgw%2Bb0hAVcXok6ecrxagGHt5mnXDs6Yhk5XIOBQ5xJLu8Ef4yVtTwyVjBfZGGjIugYvBqmwl0DWKbnA7WlY3kBhhPZzVOx41x98N%2FHdDBg9UeNZsFdbApt92g1LihY3eo9WWum6fGBCW2IiIkUknJa1G138BjsBT1B64BOl8KWQ9fO5nOG9z3W0iAkNcD8duD%2BP0qCCGvIIABUllVvJFv7QtZv0%2BmQ7WUmszviqzYK8ooHD%2FxV7rIDQMB4B62bTtLhHfooz5u9cEgK8%2FkL%2FRNwbUafi9V5Q1Pz8rSsAENwb0%2BscolOV3xrIUYk09TByMLPAeGJX1R8qTp9FQ0Ps8nSPHoj5dUsd0zHzpdlCUGoBJoiCXdLoIbqQqNItdlFzsB4iBpJua6NzCBcRii3uMvRVVMiNO1tKetjpnoNtHuv7fD9M9YgUA1E8TRe8sxdtSddY8WC7ifr6sswL4Gm935j%2FRf4tmly%2B9p1azjZzVyEJmNGTs39s579CHJgUEmO1IZnzPSGkDudsyjDZUb%2FztIIKP22NV5TDMrI6%2FBjqkActZPHCl%2FQMTx%2FjSAFJvYWvJBtq9y6KLJz71hNdo%2BOlbIoyBHtsF4q5PM9ERJoDTpoBKKElFiwqsXr86SwPP%2BMPrZBH%2FYP0%2BdVpDqgiIFb38FLbNTGPF1cgNu8EeVKv4iMK5u1KxAQG0N3nr1Ba0t9DINQMqkB3mBFS5PQFJQrd5wP1kNeYNR15Rx5lMjuIl2lVGxeQTfRBRwW80gqoexKtfnx1f&X-Amz-Signature=60ca2b1b9462f35f4ea88178906fe30bd80c203216cf580456362c3eb2411193&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJN24EP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTq4hsupXbZYmtD3hM5bf%2FCe47BtVTwrHGo91vbIim9AIhALsXLCtyVwXaDXkeCY%2F1CegdlMhGyliNAdaiFIZfyiEmKv8DCCcQABoMNjM3NDIzMTgzODA1Igx97R8Wo7HYCp8Go1kq3APjakpEhlENiSqSLDEbwFk076FWVGxhY4bHGMMjhjwSZqclpKluXcLqoDK8owYLD9yn9ClzsK3D8lOT8wT8UmW4aA%2BMuEVHRgw%2Bb0hAVcXok6ecrxagGHt5mnXDs6Yhk5XIOBQ5xJLu8Ef4yVtTwyVjBfZGGjIugYvBqmwl0DWKbnA7WlY3kBhhPZzVOx41x98N%2FHdDBg9UeNZsFdbApt92g1LihY3eo9WWum6fGBCW2IiIkUknJa1G138BjsBT1B64BOl8KWQ9fO5nOG9z3W0iAkNcD8duD%2BP0qCCGvIIABUllVvJFv7QtZv0%2BmQ7WUmszviqzYK8ooHD%2FxV7rIDQMB4B62bTtLhHfooz5u9cEgK8%2FkL%2FRNwbUafi9V5Q1Pz8rSsAENwb0%2BscolOV3xrIUYk09TByMLPAeGJX1R8qTp9FQ0Ps8nSPHoj5dUsd0zHzpdlCUGoBJoiCXdLoIbqQqNItdlFzsB4iBpJua6NzCBcRii3uMvRVVMiNO1tKetjpnoNtHuv7fD9M9YgUA1E8TRe8sxdtSddY8WC7ifr6sswL4Gm935j%2FRf4tmly%2B9p1azjZzVyEJmNGTs39s579CHJgUEmO1IZnzPSGkDudsyjDZUb%2FztIIKP22NV5TDMrI6%2FBjqkActZPHCl%2FQMTx%2FjSAFJvYWvJBtq9y6KLJz71hNdo%2BOlbIoyBHtsF4q5PM9ERJoDTpoBKKElFiwqsXr86SwPP%2BMPrZBH%2FYP0%2BdVpDqgiIFb38FLbNTGPF1cgNu8EeVKv4iMK5u1KxAQG0N3nr1Ba0t9DINQMqkB3mBFS5PQFJQrd5wP1kNeYNR15Rx5lMjuIl2lVGxeQTfRBRwW80gqoexKtfnx1f&X-Amz-Signature=ac696bc96be7c1a08dd28a25aa4a5bc33673c9e5707822e2dcd0f9e75ceb3713&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
