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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQUGLSMJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQnWAi4qQeX5ppm1DOdjh8%2F9ZpVQbSLV5jY4MOokVqRAiEA6j8f5g2qCxGbPPM%2FArGM66SYSrnWy9m%2FYfp%2F%2B1ChKi8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCZOXVD3SKfPfsyU0yrcAyhUmUB6ZKy6XBfS8NPQmws8gPNv1fy2k5PtLcaIRKpGllJVhEd0%2F0Kz6FQQ5pbNsHe98BC1dIJin6f22olT1SxrVBH9GEKDYTOovqiYbJwQ4xvpOqWMhNfd%2FHQNANCwlAWNBVyrcyWU4bLmJlQwAGCGqgRjVKBb4dWbd4Npfm%2FkHmDWfowYYgagNcs%2FiC77TsruEO3YmsdXrSAq6woZMm3LrXHR9hRTNwB5tf0u3DUrXqgAp3VtsnXwmv6GpmuIoi%2Fd9rVU9vIC8JD%2BTPcw1EOwcHIa%2Bcz%2FHg6RKOZo8rTntJBnKY%2BOjBiKe9evHcb%2F4eXwwTk2MHqS5r5N%2FsMF2XLw%2FXclYI72QCUdXu9HJSbWNEFcQyRvBHd2Uxd%2Fr6VWrAzsii1e4lsAATxqPvDP6SGfUHiPcNzVlY6hAxVMZ4G7ksqC85gnaq9EMAOaaDTxBwL9uz7dq1EA7TmJdxRZ9YD0tR%2Bqwmen1iVbF9lVA3qb%2FlnZg2qdaDWmHpqsjRdaoD0cl0XdU0UtCshIs1Ntg4O%2FiG4w23mErMH0NRhOlXTuKOl888Ryku8yd%2BaRFSk8HoeMP2muC8e2rDVgEoPqMpju1fwMxpVXU2rf4fWzlnDbEmCPNYUWUO7mUJ9AMKq05MIGOqUBWrMTHRv3xy88F5nLnsrSntTIDAWViyo43OokQQjXtouHUPb9E5c7PR%2Fnx6M3cvMzpsLI92v5n6JsGYj8oXp4%2Fxx0diXmlGvg6TQ6LVPcSNwi02G%2BWZIVaMzNfFTayJHDICNUSl3mHkVC6TUbqHaijFeqhwSw4xs%2BdMQF%2BhgteuBras1EHTrt19Cgjl329AiGKdkXikCf34fbYtbWlD5ijzF6F8aJ&X-Amz-Signature=ff880ec743ecc76e9686f504e28214568cfe71c0162d3ce3ba291a914e8b6ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQUGLSMJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQnWAi4qQeX5ppm1DOdjh8%2F9ZpVQbSLV5jY4MOokVqRAiEA6j8f5g2qCxGbPPM%2FArGM66SYSrnWy9m%2FYfp%2F%2B1ChKi8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCZOXVD3SKfPfsyU0yrcAyhUmUB6ZKy6XBfS8NPQmws8gPNv1fy2k5PtLcaIRKpGllJVhEd0%2F0Kz6FQQ5pbNsHe98BC1dIJin6f22olT1SxrVBH9GEKDYTOovqiYbJwQ4xvpOqWMhNfd%2FHQNANCwlAWNBVyrcyWU4bLmJlQwAGCGqgRjVKBb4dWbd4Npfm%2FkHmDWfowYYgagNcs%2FiC77TsruEO3YmsdXrSAq6woZMm3LrXHR9hRTNwB5tf0u3DUrXqgAp3VtsnXwmv6GpmuIoi%2Fd9rVU9vIC8JD%2BTPcw1EOwcHIa%2Bcz%2FHg6RKOZo8rTntJBnKY%2BOjBiKe9evHcb%2F4eXwwTk2MHqS5r5N%2FsMF2XLw%2FXclYI72QCUdXu9HJSbWNEFcQyRvBHd2Uxd%2Fr6VWrAzsii1e4lsAATxqPvDP6SGfUHiPcNzVlY6hAxVMZ4G7ksqC85gnaq9EMAOaaDTxBwL9uz7dq1EA7TmJdxRZ9YD0tR%2Bqwmen1iVbF9lVA3qb%2FlnZg2qdaDWmHpqsjRdaoD0cl0XdU0UtCshIs1Ntg4O%2FiG4w23mErMH0NRhOlXTuKOl888Ryku8yd%2BaRFSk8HoeMP2muC8e2rDVgEoPqMpju1fwMxpVXU2rf4fWzlnDbEmCPNYUWUO7mUJ9AMKq05MIGOqUBWrMTHRv3xy88F5nLnsrSntTIDAWViyo43OokQQjXtouHUPb9E5c7PR%2Fnx6M3cvMzpsLI92v5n6JsGYj8oXp4%2Fxx0diXmlGvg6TQ6LVPcSNwi02G%2BWZIVaMzNfFTayJHDICNUSl3mHkVC6TUbqHaijFeqhwSw4xs%2BdMQF%2BhgteuBras1EHTrt19Cgjl329AiGKdkXikCf34fbYtbWlD5ijzF6F8aJ&X-Amz-Signature=221a91d34dacf77a4d9b64b63857f2fb1e42ed9e33711f7e27dde4dc7fd3a731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
