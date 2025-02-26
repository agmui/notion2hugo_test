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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R24XYES%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEO1iDQH%2FveY8qyrpd7CKVlbMdZ3q9Ro%2B93BkpfgP4%2FgAiEAxTEqRvyPHOBEPieP3%2FG%2F4hy346soxVfpJXgnLi9bun0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAKHwM%2BWoEsP6BHZgircA3rMEF6Mg39JWw4FPZlLiV%2BKBHaGeqoLJ97RF707M%2B4h6dNgI21gQHXdLNhSbjYIFzrOMQvuiG1i8HJ4PUeDYl98Hrt8tNvyHtgp7subcfmFcFjWNZHdrq6nguKK8aJ61IoOHVrwys4RacaI10eJjPRDoBbg9%2BTjtkxlRuqY2djRjhS8VJMnB5Z77WqN9WcfoLSNqL6KCPUAmjcd2HTZeVaYTtTxUQ35u5y01XSVw8m7nSRmRo8BHgRbn9pFH5ZdAu%2BUEdec6WaJnxoqsuPEmGA%2B7bFkI9XuTvfznaJQ2WGEuiJNmvoofoRtL73Qpu7WDXiSSxKRtpaEDserDbXyFNZUMOtZf14cVQeKsI9cUmmUXkjDg%2B3l9XOZ6ZH3QuTj5aONPbj243xy2ZkX0y4vWKnd66kytnowb2ZJqUcNjnpOL%2FN4iTVR9M4BznMogPxZ8uGPQm83ZEs4p0s9MFjHswZKdsIOarsfE%2BKQlhSbj%2FIeA1c%2B8RpI7wwCU5SyKaBTWwTXkDQYdMjZq6BlGXDLGFctti2uUh%2BBcozRdYJ5nl6Cr7VSt1pD2HYe3M4uHNshY1zVhTaK9SThZgdZm6Un5cKiB7E7uttm%2BZrewhc8%2FzMnKK6hPPH7IhuMQoR5MPC8%2Bb0GOqUBAK0pGI005B5QXOeyZmlKE3%2F3%2Bu68iUkZSSqDSwMGJ2bjOqqqZwubXJrxAJiXNuC2i8JWu5JY0blcszO9Yhw%2B2qZ%2BNUKjoihxuLjg%2Ff3%2Fy6wTBRPjVz5Otx9TOqgjX9SZEjBv%2FDCvKUcbRVx2UzDIzBHZRy5ms0h7LS3P9jB1OuELLJ3i4jLG6qHaicYiqTQ9w4AU8TBkhFv2P7dPFa%2F0N7LZ10N8&X-Amz-Signature=f8884132838027531bd3bf55723641bdc804797cac301724633fc592c37be7da&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R24XYES%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEO1iDQH%2FveY8qyrpd7CKVlbMdZ3q9Ro%2B93BkpfgP4%2FgAiEAxTEqRvyPHOBEPieP3%2FG%2F4hy346soxVfpJXgnLi9bun0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAKHwM%2BWoEsP6BHZgircA3rMEF6Mg39JWw4FPZlLiV%2BKBHaGeqoLJ97RF707M%2B4h6dNgI21gQHXdLNhSbjYIFzrOMQvuiG1i8HJ4PUeDYl98Hrt8tNvyHtgp7subcfmFcFjWNZHdrq6nguKK8aJ61IoOHVrwys4RacaI10eJjPRDoBbg9%2BTjtkxlRuqY2djRjhS8VJMnB5Z77WqN9WcfoLSNqL6KCPUAmjcd2HTZeVaYTtTxUQ35u5y01XSVw8m7nSRmRo8BHgRbn9pFH5ZdAu%2BUEdec6WaJnxoqsuPEmGA%2B7bFkI9XuTvfznaJQ2WGEuiJNmvoofoRtL73Qpu7WDXiSSxKRtpaEDserDbXyFNZUMOtZf14cVQeKsI9cUmmUXkjDg%2B3l9XOZ6ZH3QuTj5aONPbj243xy2ZkX0y4vWKnd66kytnowb2ZJqUcNjnpOL%2FN4iTVR9M4BznMogPxZ8uGPQm83ZEs4p0s9MFjHswZKdsIOarsfE%2BKQlhSbj%2FIeA1c%2B8RpI7wwCU5SyKaBTWwTXkDQYdMjZq6BlGXDLGFctti2uUh%2BBcozRdYJ5nl6Cr7VSt1pD2HYe3M4uHNshY1zVhTaK9SThZgdZm6Un5cKiB7E7uttm%2BZrewhc8%2FzMnKK6hPPH7IhuMQoR5MPC8%2Bb0GOqUBAK0pGI005B5QXOeyZmlKE3%2F3%2Bu68iUkZSSqDSwMGJ2bjOqqqZwubXJrxAJiXNuC2i8JWu5JY0blcszO9Yhw%2B2qZ%2BNUKjoihxuLjg%2Ff3%2Fy6wTBRPjVz5Otx9TOqgjX9SZEjBv%2FDCvKUcbRVx2UzDIzBHZRy5ms0h7LS3P9jB1OuELLJ3i4jLG6qHaicYiqTQ9w4AU8TBkhFv2P7dPFa%2F0N7LZ10N8&X-Amz-Signature=321e923c9634ab516cf5c0ad158b0344076a5d24726648eb3b0c54d53f86d4ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
