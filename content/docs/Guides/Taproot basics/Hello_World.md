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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6ZPEGO%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQChvTxEoDHO6Ux9Go0qMdlFIkHKJIJT2zcpqp0bD2J3hAIhAIgaQ29vkA3dYWm8PEtZoQcHRPyKAck5RlJQCGjt497CKv8DCDEQABoMNjM3NDIzMTgzODA1IgxvjZvswriI77eaXrwq3ANAARIcBasePg0V%2Fc0yh9%2B38IFzJD8KxEwoByX6OkxLk3nYxPIvMxxlz8DdtLNrKzQmf5fq2DyDdReXbixleSEAmyskyZOgmcUQmuOzBYrvPHI%2FXGDs%2B7xXY7Gneym7CWRo0a8V7dr4uLShuprjjj4gfO3urG491F40RBZsyh7b%2FuoOzAZFt595aiRA7vKdhTINI2n4dIALoW%2Fa3M7HhkjW43HQ0uWvY71BhKggF21RCAVnfoH3M4ShoXGiNUm5o7FzZlT6HFIP206dwFQiNkhvBiNMaU8072su%2FPHaXsmU9%2FhMY0ailKb1V7x%2FFfkmXLnC5hXmrshbxi545%2Bg%2BefQqXcbKTAvtl8xUY3R7JIl%2BN2%2Bh8tD6qSLd6K1yGTbNxKAmHhstLOTjQaIkn5oZUfvsFGHDU8r3aQHuoprnaShqdjB5kdwpHZDzRr2sH0TWR5nXWGUale2W3Ssc%2FzKIztOssMjGGNVfepL1hpjCixtrtBXWNM0UnyEpVs3alELKoqmWMuyHXTDYtECTDIHTOorrCJ7voLOo%2FwCgVep%2BhJhhDb1Ya3buBLH0keoT7YYJZjiubJs5dh8quRRv8eSD8nTdhILj0XPgs0SRi%2Fsdlma3ErabGxATzXA5WiKQUjD93YHCBjqkAQS8BFO8mRLQtth9bDGxMCnP%2BoZXx7eLMeTHLq2Sow2j%2FMP3KOdS2jOCwWnHXdW0dtug%2B0V5ZURJDB3R9jr8eWAUJNWnp19U5t7lkB%2B617YQytSNe64K7Vs8aSC%2BoeCzY%2BhNy03eia9WI%2Byn3WqGpzF6d5yjfwJXRDtCK9ZqLeGfHGUBBS%2FH9fsfagSR1E0FH9VJHV%2F%2BJSOkC7%2FtmeVlqYydDd2b&X-Amz-Signature=69035441cf34b6995900e11b3141e82dbcdd4d8c497f8c5fb130d436d126170d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6ZPEGO%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQChvTxEoDHO6Ux9Go0qMdlFIkHKJIJT2zcpqp0bD2J3hAIhAIgaQ29vkA3dYWm8PEtZoQcHRPyKAck5RlJQCGjt497CKv8DCDEQABoMNjM3NDIzMTgzODA1IgxvjZvswriI77eaXrwq3ANAARIcBasePg0V%2Fc0yh9%2B38IFzJD8KxEwoByX6OkxLk3nYxPIvMxxlz8DdtLNrKzQmf5fq2DyDdReXbixleSEAmyskyZOgmcUQmuOzBYrvPHI%2FXGDs%2B7xXY7Gneym7CWRo0a8V7dr4uLShuprjjj4gfO3urG491F40RBZsyh7b%2FuoOzAZFt595aiRA7vKdhTINI2n4dIALoW%2Fa3M7HhkjW43HQ0uWvY71BhKggF21RCAVnfoH3M4ShoXGiNUm5o7FzZlT6HFIP206dwFQiNkhvBiNMaU8072su%2FPHaXsmU9%2FhMY0ailKb1V7x%2FFfkmXLnC5hXmrshbxi545%2Bg%2BefQqXcbKTAvtl8xUY3R7JIl%2BN2%2Bh8tD6qSLd6K1yGTbNxKAmHhstLOTjQaIkn5oZUfvsFGHDU8r3aQHuoprnaShqdjB5kdwpHZDzRr2sH0TWR5nXWGUale2W3Ssc%2FzKIztOssMjGGNVfepL1hpjCixtrtBXWNM0UnyEpVs3alELKoqmWMuyHXTDYtECTDIHTOorrCJ7voLOo%2FwCgVep%2BhJhhDb1Ya3buBLH0keoT7YYJZjiubJs5dh8quRRv8eSD8nTdhILj0XPgs0SRi%2Fsdlma3ErabGxATzXA5WiKQUjD93YHCBjqkAQS8BFO8mRLQtth9bDGxMCnP%2BoZXx7eLMeTHLq2Sow2j%2FMP3KOdS2jOCwWnHXdW0dtug%2B0V5ZURJDB3R9jr8eWAUJNWnp19U5t7lkB%2B617YQytSNe64K7Vs8aSC%2BoeCzY%2BhNy03eia9WI%2Byn3WqGpzF6d5yjfwJXRDtCK9ZqLeGfHGUBBS%2FH9fsfagSR1E0FH9VJHV%2F%2BJSOkC7%2FtmeVlqYydDd2b&X-Amz-Signature=fe1f85636d74c603be0b65aab7174a04a0f5f8559b5bf76694ec96692259b153&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
