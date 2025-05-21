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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO354K5Q%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCgVTmcUAD3RNWUESm83cmV2tGi4dFxS%2BnUZhlb63%2BBKAIhAJ%2F5Lv5TBoJL2twWd4jOXd3R5tZcMNjVSyYPrRNY4v%2FYKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1V2x1t9K0bJFIC3Aq3AM09WkDpLexuc5v%2FLXcmiyMz9r4Ps7lNUqvtaewJlkAOvd6Xzwarzy%2FbeMkSQGXIUNbmhwuTKJlPtpJ4uU81hoxHtEb6fVoAVf2F8qnDrPR7965%2BUZNGRc2jQ5aHJupN8kZPy1D%2BK0mK6Y2XJDFOB0r6Fqo08z8SvhgNGjzx%2FaK5l0NCMiUVstEg06kl1LNybjlh2TqfdpkNGqwN%2FUwTjKAYVfXJvCodI9x7gbXoQ142xHo26ttYkg5e7P9oDqUX8gEt18UAFxKZ1bcvzZysskgA2nXJzYoFeCm%2Fvs5ja3ghNAakijVik2LVC1H0DcZbQQdSgmoOtycwnizkU8OSmYkDXxBjf%2F2iFksoK09wXB2Gzibq6CXZBf7G3vI3JkXI27wIf1fk5xWtaVhoTpw3UYZiC1M4KgaOiCyb9VjJYamADTWrJCTZjvn4oIUknbCK8EuKp3mynZJ%2F83KfidvLsR25BCOqYEK%2BoR8thUvf7UiPXLj5ZjEs6Fp6cjMjLhpCIic%2BA8n86N9QdeJKX9%2BbVaAOPfLOP2U%2FnRbMDLIbITq0dEjJyhhjtOW6mUtyD3GIDuqnlR%2B19cGyDZOXOkWwTjPM4PZZbxhAQRewlDUqK9i%2BS%2BPcjZYpUB7j9dBcjDO17jBBjqkAYnghQ3QmouCoBB2Cfc6qA%2F%2Ff7hr9EGlQ8uh9NNEcuiTMPu0W8OlSswEH4ji9bra0xJ%2Fv9POrGYNkgoeOw8uszmNumbmQ5QPlBwexttKwE2YMrg0yH4bTpTOpk1BJ8x5z6lVtYhTyZ3mLcwPnDsJH8BC%2FjFy6oypyQ1Hu6aA3mYjsnw142VjSq9OiG87nxpxCljFvMxbHqR5QY8%2BEfZivmA3HF8a&X-Amz-Signature=3d16ed1b818b875ab14796b08ceeb07caea09efa44e9a93a136f17bd889c5c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO354K5Q%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCgVTmcUAD3RNWUESm83cmV2tGi4dFxS%2BnUZhlb63%2BBKAIhAJ%2F5Lv5TBoJL2twWd4jOXd3R5tZcMNjVSyYPrRNY4v%2FYKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1V2x1t9K0bJFIC3Aq3AM09WkDpLexuc5v%2FLXcmiyMz9r4Ps7lNUqvtaewJlkAOvd6Xzwarzy%2FbeMkSQGXIUNbmhwuTKJlPtpJ4uU81hoxHtEb6fVoAVf2F8qnDrPR7965%2BUZNGRc2jQ5aHJupN8kZPy1D%2BK0mK6Y2XJDFOB0r6Fqo08z8SvhgNGjzx%2FaK5l0NCMiUVstEg06kl1LNybjlh2TqfdpkNGqwN%2FUwTjKAYVfXJvCodI9x7gbXoQ142xHo26ttYkg5e7P9oDqUX8gEt18UAFxKZ1bcvzZysskgA2nXJzYoFeCm%2Fvs5ja3ghNAakijVik2LVC1H0DcZbQQdSgmoOtycwnizkU8OSmYkDXxBjf%2F2iFksoK09wXB2Gzibq6CXZBf7G3vI3JkXI27wIf1fk5xWtaVhoTpw3UYZiC1M4KgaOiCyb9VjJYamADTWrJCTZjvn4oIUknbCK8EuKp3mynZJ%2F83KfidvLsR25BCOqYEK%2BoR8thUvf7UiPXLj5ZjEs6Fp6cjMjLhpCIic%2BA8n86N9QdeJKX9%2BbVaAOPfLOP2U%2FnRbMDLIbITq0dEjJyhhjtOW6mUtyD3GIDuqnlR%2B19cGyDZOXOkWwTjPM4PZZbxhAQRewlDUqK9i%2BS%2BPcjZYpUB7j9dBcjDO17jBBjqkAYnghQ3QmouCoBB2Cfc6qA%2F%2Ff7hr9EGlQ8uh9NNEcuiTMPu0W8OlSswEH4ji9bra0xJ%2Fv9POrGYNkgoeOw8uszmNumbmQ5QPlBwexttKwE2YMrg0yH4bTpTOpk1BJ8x5z6lVtYhTyZ3mLcwPnDsJH8BC%2FjFy6oypyQ1Hu6aA3mYjsnw142VjSq9OiG87nxpxCljFvMxbHqR5QY8%2BEfZivmA3HF8a&X-Amz-Signature=3e98df807576bbb8dc15bad6d8729af33810b8f494bf26ce3711388b1a4e2b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
