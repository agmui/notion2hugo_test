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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQIYWVW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgV1Rw4fC6N5eefQq6UMHU0B50s4EJ0eTk6CUMzOTwywIhAJEB7%2F1p8R7TPUMfWuln6Xo44ppPdkfGEQE8tAuG1rkNKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfV4No1Sv%2FyN10cngq3AMXZCOytUjrZeC%2F0tkJNoWQ4ggcSl1IoOaegJKzVal%2F3wSTQaxwDwd9erOsf2903IhACEI4IzKpHUjoEFawF2Kt79pYTeaULfC%2F6KSxXtCVBJhqLCN65aROmqzqp1eLUSaNmEYye8e4hURDHRE07SA%2Bv%2BgR%2B2uguvWaUXrwRbqxYw5qZB4AxLUW0da8jsqLXRo5mQBuflq0j1%2FTgC%2B8MHuoyr5RzEgaIDchJBcSri20uwSWpLH8COg7B3Ect1r7u4yL3DC4AKBRe2wv77xcD4TNncExGr6CJd2wPNzECdSjxqVq2oRIzV%2BqGpESxoZOZRxi7cCz%2BcECZlcA5%2BgxXEZJKZc6oNUJj2aMyYCcea6zsGdEtoiRv1LHdAOvXzQE96nHJhxcX0gzMjPYmDIDbes0FFLJJGqqq8R0VCrnwGveVLbT%2BFPPxShQgCwLW0wC4Y9u4ba9wDcX7feHX9CTZJJw6homucFR6pfH%2B9PnZ72yLzfJQEwXBJS60yYLBHnm%2B%2Fy8PLLybvEFcA7PRGpkWVBd45zDIeXNNOfHvQPlNj9D2Fbg8%2FW8pFAtY4NnVMZJP%2FNbabfk0ecXWrUNL5RlawKsdLO1JoGLu2R6l5iTXVV8BfxXfazsryYlAwCf%2BjCsr%2Bm9BjqkAZBoULx9918DaPV0L4jY8PvBMQtUnuUx1JjlPKfq%2BkM%2FdMlPrq2z%2FLiCkCdLm%2FHpAeF%2B5014lYsFdixasUx6l8bZmMhQbt5kl0TN6tmaqBM%2FahxOEp5qyCSAyu%2BP0sKfQRr7DwznNPoIw%2BZN9dQdsSEgw7IaUQJc19XKCC2etYuonPr9KAx5xigg25sfbyoeSxbowqFAW5SZvE2219PIyP8c2C4R&X-Amz-Signature=3df73016790640abdcfe81509fd2014aaf5490110f4963f9feec071d4da72609&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQIYWVW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgV1Rw4fC6N5eefQq6UMHU0B50s4EJ0eTk6CUMzOTwywIhAJEB7%2F1p8R7TPUMfWuln6Xo44ppPdkfGEQE8tAuG1rkNKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfV4No1Sv%2FyN10cngq3AMXZCOytUjrZeC%2F0tkJNoWQ4ggcSl1IoOaegJKzVal%2F3wSTQaxwDwd9erOsf2903IhACEI4IzKpHUjoEFawF2Kt79pYTeaULfC%2F6KSxXtCVBJhqLCN65aROmqzqp1eLUSaNmEYye8e4hURDHRE07SA%2Bv%2BgR%2B2uguvWaUXrwRbqxYw5qZB4AxLUW0da8jsqLXRo5mQBuflq0j1%2FTgC%2B8MHuoyr5RzEgaIDchJBcSri20uwSWpLH8COg7B3Ect1r7u4yL3DC4AKBRe2wv77xcD4TNncExGr6CJd2wPNzECdSjxqVq2oRIzV%2BqGpESxoZOZRxi7cCz%2BcECZlcA5%2BgxXEZJKZc6oNUJj2aMyYCcea6zsGdEtoiRv1LHdAOvXzQE96nHJhxcX0gzMjPYmDIDbes0FFLJJGqqq8R0VCrnwGveVLbT%2BFPPxShQgCwLW0wC4Y9u4ba9wDcX7feHX9CTZJJw6homucFR6pfH%2B9PnZ72yLzfJQEwXBJS60yYLBHnm%2B%2Fy8PLLybvEFcA7PRGpkWVBd45zDIeXNNOfHvQPlNj9D2Fbg8%2FW8pFAtY4NnVMZJP%2FNbabfk0ecXWrUNL5RlawKsdLO1JoGLu2R6l5iTXVV8BfxXfazsryYlAwCf%2BjCsr%2Bm9BjqkAZBoULx9918DaPV0L4jY8PvBMQtUnuUx1JjlPKfq%2BkM%2FdMlPrq2z%2FLiCkCdLm%2FHpAeF%2B5014lYsFdixasUx6l8bZmMhQbt5kl0TN6tmaqBM%2FahxOEp5qyCSAyu%2BP0sKfQRr7DwznNPoIw%2BZN9dQdsSEgw7IaUQJc19XKCC2etYuonPr9KAx5xigg25sfbyoeSxbowqFAW5SZvE2219PIyP8c2C4R&X-Amz-Signature=c3e0628ead73c48ca78bd5346f291d804610f8c53cff422a549c7a21392050fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
