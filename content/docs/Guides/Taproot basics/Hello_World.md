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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JYXV7L%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH30auWmzw3XTrxMQ5XffbT9YBY5XnRvGDxGj8tt1nGECIDPv7gOI2%2F0RbSw%2F2%2FZeIy300Ldk46uPKKJxPLmP73ZiKv8DCF8QABoMNjM3NDIzMTgzODA1Igwvk453bQYSgjivI6Eq3AN6fiCetxbdeOKZ4dkOhTbCNKiiCADSrJSvPhJcEGq1n99BtB83AKkrLHVMtdj0HV7d1eqEk3Jv9guQA3ongDQG1v6ANeTKJSna1QTfYpA61RL5JYKUm1zTQt37uKl9zsV%2BpleLLWOgy8XWJddmTqZyimXsVZe08ADdflCzAzBoljHL%2BTPxd5eByBkh%2Be%2BGvad0dkbn%2BQ2fsGPVW4wLMCbaXkV43ykWlRsAV8jnr0PAhbrFgs78lFneULqdyr%2Bybfr9hk7diibdBozwUXNAA2qD9hb3O9iaolyjE%2Bv8fweE%2B7vRGjKlsGTJSvoHs0WW8UVsQipjCKwmJ%2FjH7OAydU8GKoM5j6LZMQdk346iBkT4QtPyrMh6t7K%2BjMckpZWTN5WaXSn8QnqEtbuWI0nFj4LF9L8MX5IQixe88BLrU5z41vjt1InynLtcHgR7YSw3M7OpMa%2FxADjTXvY1Qceq6f%2FdpsFVwOyrXqNN4%2Fd%2FEmWcPoNplwiLpMK2pHWBeGRk5MxBLQcJN39mUmR3y3swFxJlSDX2Op4dLb9sBd%2BRl78SIsBJWb%2BeXq45e%2FGmOwgJdlRt%2FOKcGPi5UZVIHyb6LjSvkwCMjHO43haN9Yr8cbeLfzmU8Nc7TtEj66dEpTDataLBBjqnAY%2BK%2Fnc8AaW9aeS%2B3UCYSAmdMIzj9llqZC2OIidHA6bCzPumzmstML89KcV8R9P9QkJtfqzQHZlrzVNEVvEevRqkOyD8wZMq%2BNZf%2Fi18ipNGNun1xxslQXC4OIGy1dAoyBpZX71YGbIAs3aQ58dXOnZae3eabZtVNc%2Fgj3LrZ8hUM5VQQohrXR%2BuDZ1lMHPHBl%2Bt%2FiDgySJkGQtD%2FaftOXTGWlp9%2Fpir&X-Amz-Signature=f917c9ab47ec29a09a7b8a69ab41f345c55e25fe3f8089f9fe197204c48bfb3f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JYXV7L%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH30auWmzw3XTrxMQ5XffbT9YBY5XnRvGDxGj8tt1nGECIDPv7gOI2%2F0RbSw%2F2%2FZeIy300Ldk46uPKKJxPLmP73ZiKv8DCF8QABoMNjM3NDIzMTgzODA1Igwvk453bQYSgjivI6Eq3AN6fiCetxbdeOKZ4dkOhTbCNKiiCADSrJSvPhJcEGq1n99BtB83AKkrLHVMtdj0HV7d1eqEk3Jv9guQA3ongDQG1v6ANeTKJSna1QTfYpA61RL5JYKUm1zTQt37uKl9zsV%2BpleLLWOgy8XWJddmTqZyimXsVZe08ADdflCzAzBoljHL%2BTPxd5eByBkh%2Be%2BGvad0dkbn%2BQ2fsGPVW4wLMCbaXkV43ykWlRsAV8jnr0PAhbrFgs78lFneULqdyr%2Bybfr9hk7diibdBozwUXNAA2qD9hb3O9iaolyjE%2Bv8fweE%2B7vRGjKlsGTJSvoHs0WW8UVsQipjCKwmJ%2FjH7OAydU8GKoM5j6LZMQdk346iBkT4QtPyrMh6t7K%2BjMckpZWTN5WaXSn8QnqEtbuWI0nFj4LF9L8MX5IQixe88BLrU5z41vjt1InynLtcHgR7YSw3M7OpMa%2FxADjTXvY1Qceq6f%2FdpsFVwOyrXqNN4%2Fd%2FEmWcPoNplwiLpMK2pHWBeGRk5MxBLQcJN39mUmR3y3swFxJlSDX2Op4dLb9sBd%2BRl78SIsBJWb%2BeXq45e%2FGmOwgJdlRt%2FOKcGPi5UZVIHyb6LjSvkwCMjHO43haN9Yr8cbeLfzmU8Nc7TtEj66dEpTDataLBBjqnAY%2BK%2Fnc8AaW9aeS%2B3UCYSAmdMIzj9llqZC2OIidHA6bCzPumzmstML89KcV8R9P9QkJtfqzQHZlrzVNEVvEevRqkOyD8wZMq%2BNZf%2Fi18ipNGNun1xxslQXC4OIGy1dAoyBpZX71YGbIAs3aQ58dXOnZae3eabZtVNc%2Fgj3LrZ8hUM5VQQohrXR%2BuDZ1lMHPHBl%2Bt%2FiDgySJkGQtD%2FaftOXTGWlp9%2Fpir&X-Amz-Signature=27395168b706fce5876b1875b7a57f00ca30ce3a7ebb0d410fcd39cff87665ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
