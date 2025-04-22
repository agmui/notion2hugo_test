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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSSZGI4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDH99FocRfL1raYzNdE%2FAqG9nrB6cTwy1WDnbpKhz3jSwIhAPQMzipkfY4%2F4ruo5E%2Bv2hzXWMt9a5qSG6SprOVpfI4kKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAWU47bUYIV4Z0%2Fksq3AP0JnIAbK1oFFXLy4lYnVLW0OHZn1BwR17CTnGWwgKe9r125FIE24FSwMEnpEeO4wZku%2FwsSK7eSnIICsa8OtYV%2B6YLo0jLGtl7SX4RqyzxNFHCicwhcJIbBdgQGLgD31Z9yhq7yx9rUQ5E1LMNpSPGf%2FvtkIQpovVXCAVK3iMv8BnmFcXLobdRBfFh%2F9aHOXLILZhlFltPMpgAAn5YfOFivMh5OBCPGdPl5YmgUuRyo%2FNuyBQibneiLJ7BfVcFVyUz84yse87w3LH%2FUAkChSV9ZPi23zvNXdRlFyORviepOWiLqQ8FbU0XOV7%2BncI4xFgrXvNCN6S63wFEdlytGKWb3e0KpLRgE7MGbZU4qEDGdN5k4BjJbI2Ib6r%2FgBbNSh0DZgQN9NbRrU%2BGpLGsiA3qC5iFYQVwqyIfq4oF67ON0NiBK8lQ%2BgDh3Xw14b%2Fe%2Fzy8q7aA%2FiucCHmpFU3wt5jSb7frWiIgS8A06rbtsC4SyZ7ly9kY0b4xk7Sjper1EiQ3Ijg%2BiaE6v2CziJjwM0Y3g1InvjZpnpyHkXajg71RM0CJHGuTXmr2%2F95U6ZzBAEO3b%2FfoHPp3AhWru1eo%2FuKHb%2Br9jwHCKPUFo6Cw1YMt6t5ZFBNphxMX9QWO7jCavqDABjqkAekFakKC0WF%2BMwPth1cbirlGvlOHU3d91UY5Xq1l9zX6IPXZ4MbVn7c90TafcrQHsb0wqGW5VSnIT%2BidU0Mmd6O4F19c4hWp1rzIBm%2BBW%2FHuMoHbcKaVYSrI0eVPxO5C4UX8sjQdIfede7oiSITX8PJaotwxdRFNYqsaKxX2psLqBJZ66JQC27nnJbdlj1p8HrLuuNliYP6fldU7UPnuIrnejgWp&X-Amz-Signature=72a4ffcd3200f21781c24193d5e1142c72ac6e17874e7f46c4fea357e9b1a150&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSSZGI4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDH99FocRfL1raYzNdE%2FAqG9nrB6cTwy1WDnbpKhz3jSwIhAPQMzipkfY4%2F4ruo5E%2Bv2hzXWMt9a5qSG6SprOVpfI4kKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAWU47bUYIV4Z0%2Fksq3AP0JnIAbK1oFFXLy4lYnVLW0OHZn1BwR17CTnGWwgKe9r125FIE24FSwMEnpEeO4wZku%2FwsSK7eSnIICsa8OtYV%2B6YLo0jLGtl7SX4RqyzxNFHCicwhcJIbBdgQGLgD31Z9yhq7yx9rUQ5E1LMNpSPGf%2FvtkIQpovVXCAVK3iMv8BnmFcXLobdRBfFh%2F9aHOXLILZhlFltPMpgAAn5YfOFivMh5OBCPGdPl5YmgUuRyo%2FNuyBQibneiLJ7BfVcFVyUz84yse87w3LH%2FUAkChSV9ZPi23zvNXdRlFyORviepOWiLqQ8FbU0XOV7%2BncI4xFgrXvNCN6S63wFEdlytGKWb3e0KpLRgE7MGbZU4qEDGdN5k4BjJbI2Ib6r%2FgBbNSh0DZgQN9NbRrU%2BGpLGsiA3qC5iFYQVwqyIfq4oF67ON0NiBK8lQ%2BgDh3Xw14b%2Fe%2Fzy8q7aA%2FiucCHmpFU3wt5jSb7frWiIgS8A06rbtsC4SyZ7ly9kY0b4xk7Sjper1EiQ3Ijg%2BiaE6v2CziJjwM0Y3g1InvjZpnpyHkXajg71RM0CJHGuTXmr2%2F95U6ZzBAEO3b%2FfoHPp3AhWru1eo%2FuKHb%2Br9jwHCKPUFo6Cw1YMt6t5ZFBNphxMX9QWO7jCavqDABjqkAekFakKC0WF%2BMwPth1cbirlGvlOHU3d91UY5Xq1l9zX6IPXZ4MbVn7c90TafcrQHsb0wqGW5VSnIT%2BidU0Mmd6O4F19c4hWp1rzIBm%2BBW%2FHuMoHbcKaVYSrI0eVPxO5C4UX8sjQdIfede7oiSITX8PJaotwxdRFNYqsaKxX2psLqBJZ66JQC27nnJbdlj1p8HrLuuNliYP6fldU7UPnuIrnejgWp&X-Amz-Signature=6e2c09e3196678e337dda829a33ea67e3007dfba0d65cb0e30d5138e5c34dc17&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
