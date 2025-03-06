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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPCYOPQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfgkFdmvS4bdFnHVv6FeeI5NQDENYVzFWy9%2FG39j4yKgIgBtbcQXNQXN2kwmZeZFujOB%2FMEa4GUkiZ1J4aa%2Bww%2Fk4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuv0Dlig%2Bsy5%2FmZyyrcA%2Bnf5bBD3oS8Kk8uSYsJYIxjXg1IHvbTRVcuKxXM9vSF7IVPklolmnFJ2Vvc%2Fa9Y5Ek723uTmudB0ejFNwq6EGb%2BspUuKgJ%2Bp%2F4eQVn34GSaw%2Bd3VEnAIDeZJsJoFBbAU087QpRxnGUe0%2BR9UBCM%2BaImP%2BBiskbEAWZxTUMiItzvcnfh%2FMfv1opLBhVpz1zQ3ikJUKmqU69aTJddeU6o53JJxb2ZeKgZhv99JBfOHl27VDg%2Fdyqq0ZCFIxTok9kOcBy97An4ABVmDR7uR4idiJ0Wc66TtdfJM6T6QW72xA94B3Y%2ByKVwgv8NR2%2BhyWzzDcBWeWel%2FH157qQPRbFVGyIQ3FzMGseq5Fg7H7%2Bx3rGY4FbztbK6hStRJPF2oKtZgPku76eLh3z9oVjoxCb44%2B4fZ1L9BjpkYm0H02CZFJi0mg4t2o2riFxUh0iwNhpz5ayuRmGMj47CBeF9pbctPbD6J1axk9wTWG1ISHWTXQ%2BNUrFl3j1kRbeCHB%2BYokY4u082FL7W%2BLK7QVBkLLEpjqJov7VYMfA5PAMJUk%2Fj78WzLf%2BRD10I1IzvxEMHGquk1DEg2BhCcw%2B3RKpktuqucpIpAJk3k%2BPigJBuIwJIMl0KrN3XccX8QNHXsYKLMOKtp74GOqUB3rV1TV%2FtANR%2F9PZ587sC8LdEUaWDxy3FfLzGQESaQ06dw9icYCEaqpQJMfLviCC9ckf7EKIeUEPanYB3oAR%2FUqoWPSlcKOJ%2BG4JBn6xsGTa%2BAZ5FhXpuZ9B6JVKIMupBZGn28B0piApYCZ8Xk1w906cKqbZrEmRSGBx0CWD%2B1fIWGet3uxcyo0vMqmTT2%2B6R8HmfR9twyFcqTRnoOgBseiA088cy&X-Amz-Signature=0d71f95b2e22272b1037c90fcc8979da0e6469a9c78be757d57eab048b818d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPCYOPQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfgkFdmvS4bdFnHVv6FeeI5NQDENYVzFWy9%2FG39j4yKgIgBtbcQXNQXN2kwmZeZFujOB%2FMEa4GUkiZ1J4aa%2Bww%2Fk4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuv0Dlig%2Bsy5%2FmZyyrcA%2Bnf5bBD3oS8Kk8uSYsJYIxjXg1IHvbTRVcuKxXM9vSF7IVPklolmnFJ2Vvc%2Fa9Y5Ek723uTmudB0ejFNwq6EGb%2BspUuKgJ%2Bp%2F4eQVn34GSaw%2Bd3VEnAIDeZJsJoFBbAU087QpRxnGUe0%2BR9UBCM%2BaImP%2BBiskbEAWZxTUMiItzvcnfh%2FMfv1opLBhVpz1zQ3ikJUKmqU69aTJddeU6o53JJxb2ZeKgZhv99JBfOHl27VDg%2Fdyqq0ZCFIxTok9kOcBy97An4ABVmDR7uR4idiJ0Wc66TtdfJM6T6QW72xA94B3Y%2ByKVwgv8NR2%2BhyWzzDcBWeWel%2FH157qQPRbFVGyIQ3FzMGseq5Fg7H7%2Bx3rGY4FbztbK6hStRJPF2oKtZgPku76eLh3z9oVjoxCb44%2B4fZ1L9BjpkYm0H02CZFJi0mg4t2o2riFxUh0iwNhpz5ayuRmGMj47CBeF9pbctPbD6J1axk9wTWG1ISHWTXQ%2BNUrFl3j1kRbeCHB%2BYokY4u082FL7W%2BLK7QVBkLLEpjqJov7VYMfA5PAMJUk%2Fj78WzLf%2BRD10I1IzvxEMHGquk1DEg2BhCcw%2B3RKpktuqucpIpAJk3k%2BPigJBuIwJIMl0KrN3XccX8QNHXsYKLMOKtp74GOqUB3rV1TV%2FtANR%2F9PZ587sC8LdEUaWDxy3FfLzGQESaQ06dw9icYCEaqpQJMfLviCC9ckf7EKIeUEPanYB3oAR%2FUqoWPSlcKOJ%2BG4JBn6xsGTa%2BAZ5FhXpuZ9B6JVKIMupBZGn28B0piApYCZ8Xk1w906cKqbZrEmRSGBx0CWD%2B1fIWGet3uxcyo0vMqmTT2%2B6R8HmfR9twyFcqTRnoOgBseiA088cy&X-Amz-Signature=2523a9eb0921d8acfbf1d1558fe0d786f8f9ccc7ad270a34b10d7107de0e65d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
