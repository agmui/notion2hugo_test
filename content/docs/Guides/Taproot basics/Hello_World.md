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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSVKX65D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD%2BUWpGjnuhSvnURWhWulE4PMek9tKR2ytTa6%2B7eXnCQIhAJhnTlBOwfJhjLYTJQ8l2OdauTDv1465M%2Fd1a6nXyUrNKv8DCEkQABoMNjM3NDIzMTgzODA1IgwbSIqZoNEVzRaITvEq3AOtnIDhYvuk3Hp3FFequBWVa2075HbjwbbI5s0Z1F9TU5foBC71LJdvDkAldzJ%2BUQa25nUjYD7b8%2FNrD2Fv20N7aP0jXwXiqA6e5xZnZO7YiwI%2Fzea%2FGULNmQpz8FKlQOZRzaTrA00zM43rbT2%2FDFAIFJZzCiWC3SwVUddUDNU4JrWbFyKDRDE%2BX4kfuBIokdf2VCBUGQWNqeQI0F1jtaT%2BKPAFZfJm1GQHauq6zD8XrBYIOJL16AQa7wTIkTbh%2BWSMQQsiU7XewztMhLcSbwsDmAUsidLRlBD%2FLj8fCIX5sMPHoEr1TOu6y21juDmKtnsEUI60vYqwYmYEGn0ODsdi6rABKHXIPHaJu1DIi%2FqKm%2FikukdGoiN%2Fahdq1q27E7atEIGE3QKcpZOmmqycymHIa0QViWN8UcnvgnAjlB17oZ9dlPhLRB%2FEbkMkwGOSVT41ckWj1%2BWrmH8W5K5GyFUoNy%2FtDKuphLUGs2aptKi6KBBug9AhS%2B2nuoPUm7QKwLNRlwIlrDi4esXwp7TlFwCuDwSXxQDbPSpsP43RWldo4XdOeSdAL0rxnDOkS3MfM%2Fi0%2BbGyvfJgHlVDu%2FDSbRvHqnP27gm1X5aAAyug%2BPTQFk0u%2FvvxWZ003O1FrDCmtJ3BBjqkAX09B9uXAhJw1SaTHW%2FRe1CtVUJN9IHvMvtrc%2BfIcOVGlQmuwauf%2BBmd7Gk0Jb1z87oPOX1GECEuZfc3gMLUIF%2FEVKugA5i8ircsybspx4Ij0m2o4uEI%2BU98yER6iQy%2FKomZpKboH2UKRVYWDRgbNU8A0oC3wZtkZbfKzh%2BHOPVc8%2FB%2Ff9lTtq75Sv6SkI7TCDLXHhMuRxO6yzGjh1ApNA0uPalu&X-Amz-Signature=6e7deeef635d4d3914360c1be1a0dc5ee7b9042299ecf863e7741143ecb079ba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSVKX65D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD%2BUWpGjnuhSvnURWhWulE4PMek9tKR2ytTa6%2B7eXnCQIhAJhnTlBOwfJhjLYTJQ8l2OdauTDv1465M%2Fd1a6nXyUrNKv8DCEkQABoMNjM3NDIzMTgzODA1IgwbSIqZoNEVzRaITvEq3AOtnIDhYvuk3Hp3FFequBWVa2075HbjwbbI5s0Z1F9TU5foBC71LJdvDkAldzJ%2BUQa25nUjYD7b8%2FNrD2Fv20N7aP0jXwXiqA6e5xZnZO7YiwI%2Fzea%2FGULNmQpz8FKlQOZRzaTrA00zM43rbT2%2FDFAIFJZzCiWC3SwVUddUDNU4JrWbFyKDRDE%2BX4kfuBIokdf2VCBUGQWNqeQI0F1jtaT%2BKPAFZfJm1GQHauq6zD8XrBYIOJL16AQa7wTIkTbh%2BWSMQQsiU7XewztMhLcSbwsDmAUsidLRlBD%2FLj8fCIX5sMPHoEr1TOu6y21juDmKtnsEUI60vYqwYmYEGn0ODsdi6rABKHXIPHaJu1DIi%2FqKm%2FikukdGoiN%2Fahdq1q27E7atEIGE3QKcpZOmmqycymHIa0QViWN8UcnvgnAjlB17oZ9dlPhLRB%2FEbkMkwGOSVT41ckWj1%2BWrmH8W5K5GyFUoNy%2FtDKuphLUGs2aptKi6KBBug9AhS%2B2nuoPUm7QKwLNRlwIlrDi4esXwp7TlFwCuDwSXxQDbPSpsP43RWldo4XdOeSdAL0rxnDOkS3MfM%2Fi0%2BbGyvfJgHlVDu%2FDSbRvHqnP27gm1X5aAAyug%2BPTQFk0u%2FvvxWZ003O1FrDCmtJ3BBjqkAX09B9uXAhJw1SaTHW%2FRe1CtVUJN9IHvMvtrc%2BfIcOVGlQmuwauf%2BBmd7Gk0Jb1z87oPOX1GECEuZfc3gMLUIF%2FEVKugA5i8ircsybspx4Ij0m2o4uEI%2BU98yER6iQy%2FKomZpKboH2UKRVYWDRgbNU8A0oC3wZtkZbfKzh%2BHOPVc8%2FB%2Ff9lTtq75Sv6SkI7TCDLXHhMuRxO6yzGjh1ApNA0uPalu&X-Amz-Signature=5b05b6f2908c519a6d9db78f3987aa23d46018916701ea38761995c2d89066aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
