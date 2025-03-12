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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKXUPAG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAbYJxD9UAxlAtIQCKLadjmqMRbi%2FG7EQf%2FCX241JmD5AiEA054Rj8KsnItKY9teteiSrFR16dRSlku4nw2iIrcyO%2BMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDUFonIo1rmaduAMCrcAwPM84mHjWjg%2B1x65p6%2Brfvj28MBBJDFmeJJ2gdHo%2BP6i0EuzFw3yi3S4ukur5rOUQGK5Br%2BsZ7z8qrWdtIu4D2on9l2oKf%2FAOZtxuUWXStClkvWyV%2FKQ5W1BJQXwA%2BD1SBsnReIwc%2FAtXKPgUALl3b59c%2BcTjtPRKsH9179MLCS4IeMWmuw67ybpIU9bjqTucI1avp658bql6vsWww8WRX6ybLefXCu44pglajOJDYMDTka8YjFEa2HuL5dh4Bd6%2FPCmevWzjsAt4b4miVQtNyL9i294aHHM%2BzwmpqOqVIXnlmY75djiGyKGslkIIErHcfCcM9eIsqUtNYZ2UFjH00hlVj0V0tHu%2BfP4X%2FIYkjLUhy6seOt91wAqUwaPDv4p%2FcwuT%2F2Kax7cx1cN1BRm2R%2BC0L5QQTUlrmP4VtQ5TlLnld%2BRRUKOYHCIuSv0M6TPJ7%2FwwATdrxi%2BkXo1oFgJ8TRCi0tgP7IQPWulgr1MLgV576fRPcVK0Ekqkt46SreyChCrIX79Z6yd56TrvT9fu3QO142N1Igt8u%2BiX8piMhme5WbHdJzs8ifyxNUJzVH%2FwCAIW2OKYCC9q6mKMm1ITXVQpwzF1HHzoJ4BOJvqLLLHCe1Hz1m6sLtkIUnMP7gxr4GOqUB7MpXXnZDfzanRxQkfEQTL4JcE0eIsMjStQd%2BZL3wC3m69prOR7BgxyuOG9Q2zBW4AaCN2ufeKGf08Erg1ymnwKelBowud5BGHR9wOMBdcu9obMzGGFGizyp4tFiqDEgfIGCmGDZNjyKEsFTsvnF8YMA%2BkHYlQkjbIJ0B6MuK5gxQbOQBfCeda3wGt2BaSK7JGE28bvUrAjNB8yPwC1FINzZdw1RG&X-Amz-Signature=99d0385f886c38f397d091eda4e7776866b295d5e14620677224a2dc6057e5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKXUPAG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAbYJxD9UAxlAtIQCKLadjmqMRbi%2FG7EQf%2FCX241JmD5AiEA054Rj8KsnItKY9teteiSrFR16dRSlku4nw2iIrcyO%2BMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDUFonIo1rmaduAMCrcAwPM84mHjWjg%2B1x65p6%2Brfvj28MBBJDFmeJJ2gdHo%2BP6i0EuzFw3yi3S4ukur5rOUQGK5Br%2BsZ7z8qrWdtIu4D2on9l2oKf%2FAOZtxuUWXStClkvWyV%2FKQ5W1BJQXwA%2BD1SBsnReIwc%2FAtXKPgUALl3b59c%2BcTjtPRKsH9179MLCS4IeMWmuw67ybpIU9bjqTucI1avp658bql6vsWww8WRX6ybLefXCu44pglajOJDYMDTka8YjFEa2HuL5dh4Bd6%2FPCmevWzjsAt4b4miVQtNyL9i294aHHM%2BzwmpqOqVIXnlmY75djiGyKGslkIIErHcfCcM9eIsqUtNYZ2UFjH00hlVj0V0tHu%2BfP4X%2FIYkjLUhy6seOt91wAqUwaPDv4p%2FcwuT%2F2Kax7cx1cN1BRm2R%2BC0L5QQTUlrmP4VtQ5TlLnld%2BRRUKOYHCIuSv0M6TPJ7%2FwwATdrxi%2BkXo1oFgJ8TRCi0tgP7IQPWulgr1MLgV576fRPcVK0Ekqkt46SreyChCrIX79Z6yd56TrvT9fu3QO142N1Igt8u%2BiX8piMhme5WbHdJzs8ifyxNUJzVH%2FwCAIW2OKYCC9q6mKMm1ITXVQpwzF1HHzoJ4BOJvqLLLHCe1Hz1m6sLtkIUnMP7gxr4GOqUB7MpXXnZDfzanRxQkfEQTL4JcE0eIsMjStQd%2BZL3wC3m69prOR7BgxyuOG9Q2zBW4AaCN2ufeKGf08Erg1ymnwKelBowud5BGHR9wOMBdcu9obMzGGFGizyp4tFiqDEgfIGCmGDZNjyKEsFTsvnF8YMA%2BkHYlQkjbIJ0B6MuK5gxQbOQBfCeda3wGt2BaSK7JGE28bvUrAjNB8yPwC1FINzZdw1RG&X-Amz-Signature=8310894e4606051d8471e130990fd7d3114bf45ebe079cef9ab4376eb809eead&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
