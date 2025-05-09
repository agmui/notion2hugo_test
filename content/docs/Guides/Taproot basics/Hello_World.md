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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5L23K6L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpLS37sMviSS%2FiqjqrbWslcrD7ulFxE7vQ%2BLKqckHTVAIgeu%2BuUnECuNDXKtvTzgCAbZkFaD%2BlnlcQtVq7fJNkKL4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOUHVwCEQ4P7vhnqyrcA3WvENXbra%2FPfi8E6Je1o3g6WZCx3qaAzDh8LWjLAIMLGbNlxbsuYGqQk1LlCBwFvn%2Bnfsg4%2FSbikuKIzLIyn1L%2BGoYHuzk584BlygdGlzRPs5NXul1ll27gMRe5%2BRUzqAQ1tg%2BshDutY9XpXNjyBBwdxRU5xhDNbLqOMxgum02FMAgi1Gm1F2n2LphR3SLE%2FP7bOxaDeYpi8Znj5fZ4L4PwB2Ng7TpK1mJEhr8AD%2BhXPDlFXZq6hymfIRIBy9btA9mluTwuPp0j8qWLlkknvp7j7Zo6ff%2BUDZ4q1D1oywEgGcnTCBcThre2xOMNRUz7FnyPC8p0T7G6R5NUKJdYMkuA5BUdXPpk1TDfM6V7Zw%2FS2CUS9nx1MkUhh0B7ph9YucJejH1mwsmOnnSN7kz5VV85qyEpgfZNn2DFp1r1SPIfJ43SrLhhwg43X5s%2BUwqWFWHY1iIdQp0bk0cmRr4aNxc5Y1iCNiuHxTTaPU2c8wIIJzDPaGX0JtGRViZrwT8TAUTyHGWFDkUKkuZcTzwDgUv3qycqKAAI6LRpbn8BgaGiSTjpPuHG5rNdhTM0%2FC4siqQqAY6%2BBgBek4j1oFWTu7%2FXcHmfZorGtq0hWwMGhb9i2ZO93%2B%2Fi1itz65gAMPLE%2BcAGOqUB7pOb43nZlfjYKqhkrnREWFTMu0VgMQVkKPLRpx%2FkzcW4xX0rtNwebIZ67pV2sFxDasdMf%2BQOekmi6jnUxscbjhX2ZVtH%2BlgcfDUkxPSzTVO94HsA4SDl5hD6miicQbJrYYuwSATagDElAVl70CM3wNWFpSsl8Mh%2BWWuatAXc8V1PEPnVfaXU37UmErvXPC%2FHcvtnPANUpSE3jgKDcWptaFiJq2vk&X-Amz-Signature=558927ad6bfb41bebedb73e9c025e1121f2d8021cd5f28c3edbdf720757b29c9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5L23K6L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpLS37sMviSS%2FiqjqrbWslcrD7ulFxE7vQ%2BLKqckHTVAIgeu%2BuUnECuNDXKtvTzgCAbZkFaD%2BlnlcQtVq7fJNkKL4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOUHVwCEQ4P7vhnqyrcA3WvENXbra%2FPfi8E6Je1o3g6WZCx3qaAzDh8LWjLAIMLGbNlxbsuYGqQk1LlCBwFvn%2Bnfsg4%2FSbikuKIzLIyn1L%2BGoYHuzk584BlygdGlzRPs5NXul1ll27gMRe5%2BRUzqAQ1tg%2BshDutY9XpXNjyBBwdxRU5xhDNbLqOMxgum02FMAgi1Gm1F2n2LphR3SLE%2FP7bOxaDeYpi8Znj5fZ4L4PwB2Ng7TpK1mJEhr8AD%2BhXPDlFXZq6hymfIRIBy9btA9mluTwuPp0j8qWLlkknvp7j7Zo6ff%2BUDZ4q1D1oywEgGcnTCBcThre2xOMNRUz7FnyPC8p0T7G6R5NUKJdYMkuA5BUdXPpk1TDfM6V7Zw%2FS2CUS9nx1MkUhh0B7ph9YucJejH1mwsmOnnSN7kz5VV85qyEpgfZNn2DFp1r1SPIfJ43SrLhhwg43X5s%2BUwqWFWHY1iIdQp0bk0cmRr4aNxc5Y1iCNiuHxTTaPU2c8wIIJzDPaGX0JtGRViZrwT8TAUTyHGWFDkUKkuZcTzwDgUv3qycqKAAI6LRpbn8BgaGiSTjpPuHG5rNdhTM0%2FC4siqQqAY6%2BBgBek4j1oFWTu7%2FXcHmfZorGtq0hWwMGhb9i2ZO93%2B%2Fi1itz65gAMPLE%2BcAGOqUB7pOb43nZlfjYKqhkrnREWFTMu0VgMQVkKPLRpx%2FkzcW4xX0rtNwebIZ67pV2sFxDasdMf%2BQOekmi6jnUxscbjhX2ZVtH%2BlgcfDUkxPSzTVO94HsA4SDl5hD6miicQbJrYYuwSATagDElAVl70CM3wNWFpSsl8Mh%2BWWuatAXc8V1PEPnVfaXU37UmErvXPC%2FHcvtnPANUpSE3jgKDcWptaFiJq2vk&X-Amz-Signature=29094f21947a7a294e973a4a01c8baf4440e4439a361c1eae5dda7179342b64f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
