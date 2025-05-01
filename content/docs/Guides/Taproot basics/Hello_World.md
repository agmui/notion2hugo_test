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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLASEUN%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEAFSbKKaZadgu6nHOm5tEb1r9VMIz4IrSScLPKt3Qw9AiEAyVxpQ5SxVyNVW2%2BlQAXTn4cC3S2BZqYztO%2BWGDrb7ucqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnr9S9UL2YKQ4BCeCrcA%2Fdsr79z7s6yP9%2FU1m2OLUXKYv2qZChwW6dZY8ffTlOD4JBKC1oe3nRNt4o0f8xD9mHMk7CDTEUHou%2Be7HWkoQGbOxglyVn7S9TVDheg%2BB%2Fyoye9NRqd%2FqJawMzBxigYyb0NXFowRgtWJ5E1bxTkqqdThIB3UoCIyoxAvXmNLJJaRXY6U4tWO1kTZ06Jes9btOzD64yFUP%2B25Sz7Rl6dY6Y2ac%2BKV6wSesSsPVTUJlabVEE5wDuAw2FV2HAa5mH9XtpNINRZZupz%2BXB9AbtoRsl7%2FuLZCmck0HetVhY%2FLv8JyueqwfcXUpfsi3pN6Eme%2FLhk6A8f3jV8URnN%2BVqbe8YkKwDmqjryvTfeyoEOljFCVYuibw4vLj9Phzksq%2FivsxQ6Pe6I7tXS141rzzxmAg8zoX5RsrXTSVJw4AxDiGuypZPCky7YYk0JlAjRROs%2B%2BArilxe4Ozy6l46ZrzFtwr8ouUykqpuCcSLvob3sxGPkvTFR3kulV0dVv3uJb%2FEeiaqHCS4VUGt7OqhdnoCYRI658%2FkWMyacv7UvQNuHg13CMJQXajMrAE9lgYHvayxMD%2FsY2gJ2kgZ3HNLyQ9nTk69yhe%2Bx6FdTKWLaV2SiwD8RenvHRA5VK%2FIg9CsKMJvJzcAGOqUBK29zxsyZtG3KaWiibivP7qq11w8%2B4frN5xxpC5OO43Jd%2F%2FZGg8PlAGlE0Z5tdrqh68MBaQ1Jm6xqCW2r%2BEernyP1LwS0W9RQqB6iEEAXn1CGb41NyyBpfFezpyDQ8%2FOBXAPPvmx2ENDCd0MAFxe7BAy9g7RmZ8QiHCXk5H3lP6%2FBUU8FsJp5jkBJhaphhjhqWNNEcMptXNuO6SCc8eYvK4uEpE2t&X-Amz-Signature=3102d8872341ef6815e1b9661202a84a49cff390dfa6174d74346fd7ded96e06&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLASEUN%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEAFSbKKaZadgu6nHOm5tEb1r9VMIz4IrSScLPKt3Qw9AiEAyVxpQ5SxVyNVW2%2BlQAXTn4cC3S2BZqYztO%2BWGDrb7ucqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnr9S9UL2YKQ4BCeCrcA%2Fdsr79z7s6yP9%2FU1m2OLUXKYv2qZChwW6dZY8ffTlOD4JBKC1oe3nRNt4o0f8xD9mHMk7CDTEUHou%2Be7HWkoQGbOxglyVn7S9TVDheg%2BB%2Fyoye9NRqd%2FqJawMzBxigYyb0NXFowRgtWJ5E1bxTkqqdThIB3UoCIyoxAvXmNLJJaRXY6U4tWO1kTZ06Jes9btOzD64yFUP%2B25Sz7Rl6dY6Y2ac%2BKV6wSesSsPVTUJlabVEE5wDuAw2FV2HAa5mH9XtpNINRZZupz%2BXB9AbtoRsl7%2FuLZCmck0HetVhY%2FLv8JyueqwfcXUpfsi3pN6Eme%2FLhk6A8f3jV8URnN%2BVqbe8YkKwDmqjryvTfeyoEOljFCVYuibw4vLj9Phzksq%2FivsxQ6Pe6I7tXS141rzzxmAg8zoX5RsrXTSVJw4AxDiGuypZPCky7YYk0JlAjRROs%2B%2BArilxe4Ozy6l46ZrzFtwr8ouUykqpuCcSLvob3sxGPkvTFR3kulV0dVv3uJb%2FEeiaqHCS4VUGt7OqhdnoCYRI658%2FkWMyacv7UvQNuHg13CMJQXajMrAE9lgYHvayxMD%2FsY2gJ2kgZ3HNLyQ9nTk69yhe%2Bx6FdTKWLaV2SiwD8RenvHRA5VK%2FIg9CsKMJvJzcAGOqUBK29zxsyZtG3KaWiibivP7qq11w8%2B4frN5xxpC5OO43Jd%2F%2FZGg8PlAGlE0Z5tdrqh68MBaQ1Jm6xqCW2r%2BEernyP1LwS0W9RQqB6iEEAXn1CGb41NyyBpfFezpyDQ8%2FOBXAPPvmx2ENDCd0MAFxe7BAy9g7RmZ8QiHCXk5H3lP6%2FBUU8FsJp5jkBJhaphhjhqWNNEcMptXNuO6SCc8eYvK4uEpE2t&X-Amz-Signature=7155ef058b21d731290aa381c2b3e2a8c67528fc75064afbcc25233c0579f5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
