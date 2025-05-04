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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKVUOI7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDQmEuVtaiMQWQQUt27EyusXrP9ndvFfKblgjUfBRBYWwIgUxBZDVbwZ2lWsJSgRIa0ry7OG%2BQL50K2gXJ%2BSwd%2F0vUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDH%2BF%2Bx23Z9ymvH3TkyrcA03mU6kBC2rR0HVedjrzPKaciOFpsTxr1CHBJzXyIEcTfoREPmvzb79YZxxDcP3ocIexuveXOHDjSys0n8K6Q%2BQHHkyPtKUcFYjD7dFrSZu9EIJoPacyHZEDCtTqaP%2BUT7s6vhd6VWMcqq8j%2FkQwUJ3T8LHqRsP90aWjPJZynC0N%2BSOvQ7yEW8gN%2BKvSCO59Jq0TIC9OocetvyP9Ct7dmT1JiZLPraf%2FVApYmpktVagyo%2BoPW0agD7t0Ttzgf6%2BEJ3VWuAvkWJmgzKw%2FHsSHkERpvT6Z4QbGDih1KUKNMuSxuvoXrkMRPwzDSPJK1Tsg8O%2BNWi09FVgP0wjyCcvb8nu1S5gWsXmpt2cdlmPIWrAWtoCSLpgjCL2wfXMffVI%2B7KQyZqR10oODvGn4DpWqvCJeBzLb3Seqrv3xn3z09a3tQyozcNKXHwHmlo3wZBw8mS5KCVWNXQcRqnWXgW5L%2FCw8LSabrzUBO2ki7Ly%2FhqrfxmCEp%2F%2Fg4vXcX4ohsIR2%2FXJLDvlOKt8N85jABxcCQkDJHnOwZYUfHLiikB9zPr8AZebYyITLZRLFjQmLmx6DDzTJDLU4Mcpw0bZrg2PU%2F7aaJf8ltW1eEi0ZD6WMNnT%2Bd5dGl55X1GtcjfD9MLiJ3cAGOqUBA621WcLyur2C4CYbsYk5%2F8c1b0VXDkmCunGQj4kNaJVUVZtks3d%2FJetra30QO0dz72BqAmTHec7Qs4Zuxdmy5akGmcWcZaBE9PA1okCHNkCWOXn5qs7NyOHoycjVqzop%2FbVN1XaVtl%2B6yxsIfVPrR%2BzzEGV3VIN0PFoYq2xZxB0tcpNzd1attWLZ2UbOlmC0ePsxnO%2B4GCwwIvTsYcmJv4oliUzt&X-Amz-Signature=3d32fdffbbafd3b32389cd717c391368e6983f70304a5d78d660f2d470ec94f7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKVUOI7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDQmEuVtaiMQWQQUt27EyusXrP9ndvFfKblgjUfBRBYWwIgUxBZDVbwZ2lWsJSgRIa0ry7OG%2BQL50K2gXJ%2BSwd%2F0vUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDH%2BF%2Bx23Z9ymvH3TkyrcA03mU6kBC2rR0HVedjrzPKaciOFpsTxr1CHBJzXyIEcTfoREPmvzb79YZxxDcP3ocIexuveXOHDjSys0n8K6Q%2BQHHkyPtKUcFYjD7dFrSZu9EIJoPacyHZEDCtTqaP%2BUT7s6vhd6VWMcqq8j%2FkQwUJ3T8LHqRsP90aWjPJZynC0N%2BSOvQ7yEW8gN%2BKvSCO59Jq0TIC9OocetvyP9Ct7dmT1JiZLPraf%2FVApYmpktVagyo%2BoPW0agD7t0Ttzgf6%2BEJ3VWuAvkWJmgzKw%2FHsSHkERpvT6Z4QbGDih1KUKNMuSxuvoXrkMRPwzDSPJK1Tsg8O%2BNWi09FVgP0wjyCcvb8nu1S5gWsXmpt2cdlmPIWrAWtoCSLpgjCL2wfXMffVI%2B7KQyZqR10oODvGn4DpWqvCJeBzLb3Seqrv3xn3z09a3tQyozcNKXHwHmlo3wZBw8mS5KCVWNXQcRqnWXgW5L%2FCw8LSabrzUBO2ki7Ly%2FhqrfxmCEp%2F%2Fg4vXcX4ohsIR2%2FXJLDvlOKt8N85jABxcCQkDJHnOwZYUfHLiikB9zPr8AZebYyITLZRLFjQmLmx6DDzTJDLU4Mcpw0bZrg2PU%2F7aaJf8ltW1eEi0ZD6WMNnT%2Bd5dGl55X1GtcjfD9MLiJ3cAGOqUBA621WcLyur2C4CYbsYk5%2F8c1b0VXDkmCunGQj4kNaJVUVZtks3d%2FJetra30QO0dz72BqAmTHec7Qs4Zuxdmy5akGmcWcZaBE9PA1okCHNkCWOXn5qs7NyOHoycjVqzop%2FbVN1XaVtl%2B6yxsIfVPrR%2BzzEGV3VIN0PFoYq2xZxB0tcpNzd1attWLZ2UbOlmC0ePsxnO%2B4GCwwIvTsYcmJv4oliUzt&X-Amz-Signature=3fcaecc0784bc88267d1f7645ce8b307ba66569ba660f6ccfe9acfaf15f5014a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
