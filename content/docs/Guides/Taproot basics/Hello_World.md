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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWQ2AE5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQConRtiF18VEh3IKIAhDHHFOsjz0N4s%2F1y1PzNLMSQurQIgHDZ2ZEcUHEHnml7AuwnqPNPyYh24p1%2FQRvIxxYc7c7cqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3C%2B9HmNEDd47fLQyrcA6OumgxtnfJ2RMldChL0a6CcTudPn5nZJC1c7riLFh8wN%2Bi22b2VcYtPv4%2B%2FsnOWcvhGdYb%2BbYgJtxQOUPRk2Dp%2BPOXwY02OBCWe8mbPaSG%2BJav%2FcVUcJMdtl8I8CggQxgi33KYM3JGKmYc5F91o9ZsIWA1BF3M1JMCKQgXzyAeN5H%2Fj25auzzcOdPevn1poRgbkr0HMy5a4fSl6VwS2jigONt0XG87zmd3QtP5XVv1iwsW7raC4La46KYOUoaDS6JCLzs9jAnmTHSzRVEKtvA1EekXCvlNFo16kLH9z85AWz9l%2BeWyhXQ07QISLxA9FGM6aSKuBHF3UAvAHWLo7S2WU5MbGdLIts9Z0eGS%2F8cvsIdHzxj9skRlrdz3fml3aCdxfnjik3phiC8BV0VpzfTxCqOovYgSPJ7gtjcPCyfH5hzuzvJDdX4kgnnD0WqDyl6g5PdKm2Qpb4%2BcdGbhDtGaf9dwWTjCN79mu%2FLdvNZwp6ZQeBfjiWM9JBVboQBKjFmu0a4ik8Bs%2B0QCIrHaseFOQm%2B%2B%2FEeoJAGwMU4jtx22Xf6Gj53tVYDCaPIxNYiphMk8FlIY2P%2FNNhHU5%2Fj923qn4Qlw4h%2F6vfoJdDJMZfCLKDbIZohMN2GbYlDMBMPqWm70GOqUBl28dP6HbtIXhpjh6WwMDIGiZzGL04aKK1bDc4InsD%2BlkMs2NaMBKQs4VwHUADxCasF4Su1ReZ2QnkLEYMSHnlLJNEgr94bgyERk4Q7uH%2F143jekA8dk9XCFYWZEaPP6uSvfwSYqpqos7SNE65ZBWv1t8hJ2Rqt%2BJQkOlfmkSU9R91h1V3DfTNMGLHWH2fgT8HsjPWIuJi%2BWWXvl7iG2Uy59tgDB%2F&X-Amz-Signature=8665cc2378f99e59af974116252781a626b462e8bd888d842288629af4e4a39d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWQ2AE5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQConRtiF18VEh3IKIAhDHHFOsjz0N4s%2F1y1PzNLMSQurQIgHDZ2ZEcUHEHnml7AuwnqPNPyYh24p1%2FQRvIxxYc7c7cqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3C%2B9HmNEDd47fLQyrcA6OumgxtnfJ2RMldChL0a6CcTudPn5nZJC1c7riLFh8wN%2Bi22b2VcYtPv4%2B%2FsnOWcvhGdYb%2BbYgJtxQOUPRk2Dp%2BPOXwY02OBCWe8mbPaSG%2BJav%2FcVUcJMdtl8I8CggQxgi33KYM3JGKmYc5F91o9ZsIWA1BF3M1JMCKQgXzyAeN5H%2Fj25auzzcOdPevn1poRgbkr0HMy5a4fSl6VwS2jigONt0XG87zmd3QtP5XVv1iwsW7raC4La46KYOUoaDS6JCLzs9jAnmTHSzRVEKtvA1EekXCvlNFo16kLH9z85AWz9l%2BeWyhXQ07QISLxA9FGM6aSKuBHF3UAvAHWLo7S2WU5MbGdLIts9Z0eGS%2F8cvsIdHzxj9skRlrdz3fml3aCdxfnjik3phiC8BV0VpzfTxCqOovYgSPJ7gtjcPCyfH5hzuzvJDdX4kgnnD0WqDyl6g5PdKm2Qpb4%2BcdGbhDtGaf9dwWTjCN79mu%2FLdvNZwp6ZQeBfjiWM9JBVboQBKjFmu0a4ik8Bs%2B0QCIrHaseFOQm%2B%2B%2FEeoJAGwMU4jtx22Xf6Gj53tVYDCaPIxNYiphMk8FlIY2P%2FNNhHU5%2Fj923qn4Qlw4h%2F6vfoJdDJMZfCLKDbIZohMN2GbYlDMBMPqWm70GOqUBl28dP6HbtIXhpjh6WwMDIGiZzGL04aKK1bDc4InsD%2BlkMs2NaMBKQs4VwHUADxCasF4Su1ReZ2QnkLEYMSHnlLJNEgr94bgyERk4Q7uH%2F143jekA8dk9XCFYWZEaPP6uSvfwSYqpqos7SNE65ZBWv1t8hJ2Rqt%2BJQkOlfmkSU9R91h1V3DfTNMGLHWH2fgT8HsjPWIuJi%2BWWXvl7iG2Uy59tgDB%2F&X-Amz-Signature=a84698ea5f40c073a29ebfd6bec34f7370436daae57d8c5fb9244c3706de5133&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
