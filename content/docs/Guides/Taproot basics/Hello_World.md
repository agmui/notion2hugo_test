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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMQV7IJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD5vth8LiavBU4XRtjs6az%2FAXs5kvsGcdG7wzl9nm7vYwIgan9LRMvYreL%2BsSkS6l58fUpzHZbb0IbI5PGZP4GGXiYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGRTeh4gIarZjN6NMCrcA07my9bgW6qzwxj1osKS8v%2BamH9lQN1T9Ywvs53NITKSJ7cSrntp827Ex60qM6c1Pc2u6AqmjxB1%2BOeSO1y8BWOzTphSLNn2aYgF0HxirrGQUGWvCrh7b492VgWxMwAA9zSIUAAytw2T17dr0XczI0tmrOGvK7J6fJ1tYSUvu3z3y%2B11Q%2FNtWS5%2BOzoL4DS8k4QthsySGkbs1Xk5cUW%2BvOmV2gU8rJi8aAe3mdj6MH83oNH8YOLo1LMzCSdQ01KXLL6uQ32aWF8o6J0V8n6zv1mkdnx6X92dWWUT%2Fp6YfhnxUv%2B5kac0Qfsn9VP4Iej%2FehE3TOcvCRvSd2HtZtZyY%2BXml2QF52krrwIx8WiopJRi8VeZAdXa6M0KGNrVpJh0beer5egIlZwZAeBUWuK1AAv8W9ul8hP14Cu7gMEHTjgWzDyHmpHQim9zEce3wEpocYVwURYYjN%2Fd%2F3SsNCU4b9%2BTTl%2BZdzYaPKFNGshw%2BIAysKoyKTl0eb99D20ZuaC%2BdEwdpTFA6Yx1WDfdBpSlDFrUCmr2HT3EEYUpL%2FEAwBzohKu75n8%2Fgtd0sM4wkebzalsiX%2BoEubjhU1FgvKlfcUB%2BAl5jkPIyqB5LYmQnE0373pWgMR6b2NPuEbncMNuHysQGOqUBGuFYNMY0gz5vAha%2B67MpR9cwile699u5PQnYy1FJkNIMzzyTumzKZg%2FcpYsRw3ojImVqqoSc909r3ZxG%2FwD%2BBxhJAjM32Mvn1kjLjxiFt3wJa4RG5PURRt7tTJdbYPo8y%2Bjris4WAwlM4%2FNjqAzvjzn06ifvXzutgiyEd346Z157bysrt9OYafWmiS01HwZZpEe4yINqrDZNfmDXBkPrYe7EhftP&X-Amz-Signature=6a6f32c3bbcabbaaab9ac2690a54d28d3e0eee91123461b32003acb6fe20bdbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMQV7IJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD5vth8LiavBU4XRtjs6az%2FAXs5kvsGcdG7wzl9nm7vYwIgan9LRMvYreL%2BsSkS6l58fUpzHZbb0IbI5PGZP4GGXiYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGRTeh4gIarZjN6NMCrcA07my9bgW6qzwxj1osKS8v%2BamH9lQN1T9Ywvs53NITKSJ7cSrntp827Ex60qM6c1Pc2u6AqmjxB1%2BOeSO1y8BWOzTphSLNn2aYgF0HxirrGQUGWvCrh7b492VgWxMwAA9zSIUAAytw2T17dr0XczI0tmrOGvK7J6fJ1tYSUvu3z3y%2B11Q%2FNtWS5%2BOzoL4DS8k4QthsySGkbs1Xk5cUW%2BvOmV2gU8rJi8aAe3mdj6MH83oNH8YOLo1LMzCSdQ01KXLL6uQ32aWF8o6J0V8n6zv1mkdnx6X92dWWUT%2Fp6YfhnxUv%2B5kac0Qfsn9VP4Iej%2FehE3TOcvCRvSd2HtZtZyY%2BXml2QF52krrwIx8WiopJRi8VeZAdXa6M0KGNrVpJh0beer5egIlZwZAeBUWuK1AAv8W9ul8hP14Cu7gMEHTjgWzDyHmpHQim9zEce3wEpocYVwURYYjN%2Fd%2F3SsNCU4b9%2BTTl%2BZdzYaPKFNGshw%2BIAysKoyKTl0eb99D20ZuaC%2BdEwdpTFA6Yx1WDfdBpSlDFrUCmr2HT3EEYUpL%2FEAwBzohKu75n8%2Fgtd0sM4wkebzalsiX%2BoEubjhU1FgvKlfcUB%2BAl5jkPIyqB5LYmQnE0373pWgMR6b2NPuEbncMNuHysQGOqUBGuFYNMY0gz5vAha%2B67MpR9cwile699u5PQnYy1FJkNIMzzyTumzKZg%2FcpYsRw3ojImVqqoSc909r3ZxG%2FwD%2BBxhJAjM32Mvn1kjLjxiFt3wJa4RG5PURRt7tTJdbYPo8y%2Bjris4WAwlM4%2FNjqAzvjzn06ifvXzutgiyEd346Z157bysrt9OYafWmiS01HwZZpEe4yINqrDZNfmDXBkPrYe7EhftP&X-Amz-Signature=4db47e77a15915c2a08275df78149f7a09e466b181d40b3548360afba3e8b75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
