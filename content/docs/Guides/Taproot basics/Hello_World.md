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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUHDW4A%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEJYzq3GVoJFSY2lCTYxNORxPlkakRoSLM9YUDNxX2QbAiBRtSa85dRG%2Fczave3%2B%2BfzDwMG3Iwv04ddWZamne0tHICr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMkR14lJ9YP3hQUdwpKtwDhR1Xf4N8n1UmjOouXpIb1XTzKAIrWiEdZN77gup9JBj%2FcI4VW1SHYD7Na%2BwT5WlWsvnXPVCVQZXDP48eslsoYgeUnBWkw7L4%2BG3Ha3BWsWA6986hVYa8Xf20yOgsxC%2F8mINymFqF4ByWXVloG0iq7il%2BDRjIDGNDTXMZX4A6ueSxVV8Q9RHCBjsxUhm8qaGauOMtFNDXthTCY8GVCCNEOvwFDuKKJLgT%2F%2Bk%2Fn1vje4EBwtwWeyHJhzTozdbzhZbRHsCfMcFqraHP4hmHH77TRztLPx9e33MkYr5BJxdZmztgbfYBFwnG72n%2B91CicHKD4XXWYdPnPKBoyplS064pXmqGB8%2FIqP7hH7Rhfc6ldXQHOg72F%2B%2BzqcABBuIC9auGEDZv%2FQOfZNeWsMveVugQmsEtJjtbOKa%2Fx9flnLZJbHx1JNU33UeMkPM%2BN7PSlh4atAEsyWbBCcH6E2Vxb0e3aS9D7Jz3R%2BUVsh4crZ3E5dBcQEKXxJPInU7cxj2WqpNVuZrSpdu08NpzF8YUexA0UK%2BL62YAGovXY3OZmvUdiFGFe6HGu%2FTFzHl7hb7GBhcsXGvk2U4VINtIG4x4JwVJ6SmQf96t6u6DMVFntyGMJQuSdAxXGRMDy2aO7t8wh63fwAY6pgH70nl6Qle5y6I2GTl%2FoTfIFymbMNYiqEPh8zO0sBff1Jn6544f%2FNczhfbQY7sfKRxXkococwINobV%2Bq2VI%2FlAodF5faXMbOp1kiNBP6RzTHn%2Fu1VV8JcJg8iVNroH6HlwqDfS0h4mr3dBd1jDlolIwvB5yD3AFWdIUgcSrRwemqHhn%2BqgxAH1I%2BQz%2Bbx7cxLiGxc1Dwol9ziqINMZXV7S%2FHBr2XGTa&X-Amz-Signature=9b40e2b65dbeae9227b8b714ed2e6734e1e911af11a1dc8eb2121cbcceadb1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUHDW4A%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEJYzq3GVoJFSY2lCTYxNORxPlkakRoSLM9YUDNxX2QbAiBRtSa85dRG%2Fczave3%2B%2BfzDwMG3Iwv04ddWZamne0tHICr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMkR14lJ9YP3hQUdwpKtwDhR1Xf4N8n1UmjOouXpIb1XTzKAIrWiEdZN77gup9JBj%2FcI4VW1SHYD7Na%2BwT5WlWsvnXPVCVQZXDP48eslsoYgeUnBWkw7L4%2BG3Ha3BWsWA6986hVYa8Xf20yOgsxC%2F8mINymFqF4ByWXVloG0iq7il%2BDRjIDGNDTXMZX4A6ueSxVV8Q9RHCBjsxUhm8qaGauOMtFNDXthTCY8GVCCNEOvwFDuKKJLgT%2F%2Bk%2Fn1vje4EBwtwWeyHJhzTozdbzhZbRHsCfMcFqraHP4hmHH77TRztLPx9e33MkYr5BJxdZmztgbfYBFwnG72n%2B91CicHKD4XXWYdPnPKBoyplS064pXmqGB8%2FIqP7hH7Rhfc6ldXQHOg72F%2B%2BzqcABBuIC9auGEDZv%2FQOfZNeWsMveVugQmsEtJjtbOKa%2Fx9flnLZJbHx1JNU33UeMkPM%2BN7PSlh4atAEsyWbBCcH6E2Vxb0e3aS9D7Jz3R%2BUVsh4crZ3E5dBcQEKXxJPInU7cxj2WqpNVuZrSpdu08NpzF8YUexA0UK%2BL62YAGovXY3OZmvUdiFGFe6HGu%2FTFzHl7hb7GBhcsXGvk2U4VINtIG4x4JwVJ6SmQf96t6u6DMVFntyGMJQuSdAxXGRMDy2aO7t8wh63fwAY6pgH70nl6Qle5y6I2GTl%2FoTfIFymbMNYiqEPh8zO0sBff1Jn6544f%2FNczhfbQY7sfKRxXkococwINobV%2Bq2VI%2FlAodF5faXMbOp1kiNBP6RzTHn%2Fu1VV8JcJg8iVNroH6HlwqDfS0h4mr3dBd1jDlolIwvB5yD3AFWdIUgcSrRwemqHhn%2BqgxAH1I%2BQz%2Bbx7cxLiGxc1Dwol9ziqINMZXV7S%2FHBr2XGTa&X-Amz-Signature=77e83b80a99363f0428a07b296c845beb62a86bd2ab7bb20d335d4b980151394&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
