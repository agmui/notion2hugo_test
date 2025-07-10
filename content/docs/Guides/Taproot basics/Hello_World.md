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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFP3NEW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLmr9gYJs3oGpfcVAKbbklddJv%2FgoXMuKbBTEq8Kba6AiBL2JG0U7U8ulNdVHg6uhcyPFzjvL2iJf6Td71KAVyp%2FyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWx6Aqu0tLFiJcZZAKtwDE3GNGXCYXyLef5dLTtUeaPbxZDz5A1On0gq2G2TcIXdc3Awrz%2BmmXMX2tojB3gjGnFw9DfCK7lcAVje1oZyxq9CNOOWzbjBPl%2BR%2Bbkb7v3mcefsADZYhQ%2FyU2ep2ShVsIkdlH%2B0J7n7s05qO6OqoknXW6ROLItWZ4qEoNlB7oaVZM1Do97B%2FPgAwO9uNVSlkyoG76KdzTTuS0G%2F2Yvb891HCYstduAIQ49qGUjs%2FTImmP%2Fqt45G%2FT%2FON40QCWPvOeQEa0lMAUxETrxx3CzzF4FXnnFqm1Dp2oQJ1f0nwnRvMePjvOaJsDFHhyUpQvi5zGxqiZHeY8h%2BFFglDJvXoCPtcrVVOtqG9MBPm8%2BEpwV0FNwL84oUJwEm6cNEFoLZ%2FzqxPsxOc9Qq5IQ0BMWdVGhjoWYvFhtG%2FHeBAKiaOf6URPFeUlD%2FZMe%2Bc0mCTw7ZrQglYDNl3e2Ym5yhlF%2FfYJruIvUyF%2FBBEqRb1BtPsDyXiWkjzd93e723piZdiX1qcA11MJp2cCCWgC7qDuX2ioGe8BkND%2Bxygs%2BuzbzZf8vVxqiTzp0X1n8sXj%2BFJZ4M0qtY9ExklDMiIuMu7BKULPDe5Y7%2BgBZDZmYlKQFOnNYuBPjJzo3SAKrYK9How0NW9wwY6pgEjMBWdSl3lq%2B0MBopzfvqyA6l5aewJJWI2umwkpUc%2BB%2BEZKopA7QvyqJg3ir1HqV6noecXafnMPpjQS11c1DdW7g49gyu3m3W8QoUy14mo733YHMggUGNiZsvfxmaiWPhX%2FczmquoACtyTP4O6nNzo6KJ6OPg%2B7iNnTh3CfqErlv4e2WZtPqM%2F1S3m%2FJBOSDDfrJIsjX%2B2Uj14SnXIfeJP5TQrasOh&X-Amz-Signature=04342ba08b22790fd29783d4f864436003ab6d89c4e970e0cd39d062df523925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFP3NEW%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLmr9gYJs3oGpfcVAKbbklddJv%2FgoXMuKbBTEq8Kba6AiBL2JG0U7U8ulNdVHg6uhcyPFzjvL2iJf6Td71KAVyp%2FyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWx6Aqu0tLFiJcZZAKtwDE3GNGXCYXyLef5dLTtUeaPbxZDz5A1On0gq2G2TcIXdc3Awrz%2BmmXMX2tojB3gjGnFw9DfCK7lcAVje1oZyxq9CNOOWzbjBPl%2BR%2Bbkb7v3mcefsADZYhQ%2FyU2ep2ShVsIkdlH%2B0J7n7s05qO6OqoknXW6ROLItWZ4qEoNlB7oaVZM1Do97B%2FPgAwO9uNVSlkyoG76KdzTTuS0G%2F2Yvb891HCYstduAIQ49qGUjs%2FTImmP%2Fqt45G%2FT%2FON40QCWPvOeQEa0lMAUxETrxx3CzzF4FXnnFqm1Dp2oQJ1f0nwnRvMePjvOaJsDFHhyUpQvi5zGxqiZHeY8h%2BFFglDJvXoCPtcrVVOtqG9MBPm8%2BEpwV0FNwL84oUJwEm6cNEFoLZ%2FzqxPsxOc9Qq5IQ0BMWdVGhjoWYvFhtG%2FHeBAKiaOf6URPFeUlD%2FZMe%2Bc0mCTw7ZrQglYDNl3e2Ym5yhlF%2FfYJruIvUyF%2FBBEqRb1BtPsDyXiWkjzd93e723piZdiX1qcA11MJp2cCCWgC7qDuX2ioGe8BkND%2Bxygs%2BuzbzZf8vVxqiTzp0X1n8sXj%2BFJZ4M0qtY9ExklDMiIuMu7BKULPDe5Y7%2BgBZDZmYlKQFOnNYuBPjJzo3SAKrYK9How0NW9wwY6pgEjMBWdSl3lq%2B0MBopzfvqyA6l5aewJJWI2umwkpUc%2BB%2BEZKopA7QvyqJg3ir1HqV6noecXafnMPpjQS11c1DdW7g49gyu3m3W8QoUy14mo733YHMggUGNiZsvfxmaiWPhX%2FczmquoACtyTP4O6nNzo6KJ6OPg%2B7iNnTh3CfqErlv4e2WZtPqM%2F1S3m%2FJBOSDDfrJIsjX%2B2Uj14SnXIfeJP5TQrasOh&X-Amz-Signature=ffb093a6a8663284aa5811461874c5daa00a8cfa89fa666fa06a0736a27a7e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
