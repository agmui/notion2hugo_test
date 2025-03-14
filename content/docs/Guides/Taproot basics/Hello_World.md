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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZW2Q33X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVAIqMunKSUnpFZ%2BVWNNsZq6ge5NUQXhxw5V8qLMR83gIhAOUhRqp43coC0dkONwbONDjeJtTz7zMTFCDEJwjwQRPUKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQgNduI49E9oOgmr8q3AOeEk9afol4DXGlA4%2FAwWVddbKzr1bWlUlauYs%2FdWyrrijU3J6VzpDEaLvpVHQAaDj%2B256YLXBeGlxBkOfA%2FGD8Sv%2BmdLBeXw25vIWEzIXoZ%2BGmf67u7EEErUBMTXVzggsYASBy54%2BBlzbHH6pZ1J%2FCS%2BKFRdrOSZDcAQTYE0Fw%2Fw9irXKk0O8%2BJ4Mcat97uqTPiKQlciQmtUoOdAMoLLfzRphWJppOVessvfJh3vTUCmgGifnSxaEBdLu6sQprPZFVSk2%2F4aMb9pYWLe9sh14uYM7oG%2FBKxGKaHzk%2FrGTCZ3J64xQDzQR%2FUOjvDBu5q33CnK2GlUfPzBXf1OTc%2FJsw0aBC1hXFcv1IE%2BWFX0Bh9NAE3i7nrzSRncRTX1XJFW7bPJIxrvpZozuQ%2Bpnrs2hyvlfTq9ph5ab5xMrhNtOO1dcmysZKvxgnImbKod8vkpfX8NbN8d2Bvy9yy%2BjY%2BqiF93PIbevTDmd%2B9l3kaj2DCsFF%2FH5EpIFuOG6oOJG0ON58Y49xQwda%2BCvaDFc7bRsa4lzKJxDZxfaXLxO38yo1zu3xs1vylbTn9NF6SJqokbvHRcG0%2Beq7Ww2B6jjKhAmiFv2ablvpTfQgJ7NVi2jap7V%2BOgRNUxIZlPGpwjD7otG%2BBjqkAaJcQuAmdW4sTgXq%2B%2FSGoMUvNm2GPzZ6jGJHk4al8KxnuNLlyvsNbOj7EGr34VyPOjilOx79aHYqQpb3p%2B4eM3T37kCu3IX%2Fz%2FMmt0eeJDWCH0JZ3UAt9nCDUV2DBRwEyoWlDZDEguL%2BoiRVQpVeYLCN7QIgAnSwSz2UAZQDci5lsB55ZtWvgFUUwJchYMjpW5%2FR9svpkhs2AHcf3e51g2OVe7Mw&X-Amz-Signature=1518c307256973fadb56132387909d4387b6c62367da2e9e019f0628c1a90c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZW2Q33X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVAIqMunKSUnpFZ%2BVWNNsZq6ge5NUQXhxw5V8qLMR83gIhAOUhRqp43coC0dkONwbONDjeJtTz7zMTFCDEJwjwQRPUKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQgNduI49E9oOgmr8q3AOeEk9afol4DXGlA4%2FAwWVddbKzr1bWlUlauYs%2FdWyrrijU3J6VzpDEaLvpVHQAaDj%2B256YLXBeGlxBkOfA%2FGD8Sv%2BmdLBeXw25vIWEzIXoZ%2BGmf67u7EEErUBMTXVzggsYASBy54%2BBlzbHH6pZ1J%2FCS%2BKFRdrOSZDcAQTYE0Fw%2Fw9irXKk0O8%2BJ4Mcat97uqTPiKQlciQmtUoOdAMoLLfzRphWJppOVessvfJh3vTUCmgGifnSxaEBdLu6sQprPZFVSk2%2F4aMb9pYWLe9sh14uYM7oG%2FBKxGKaHzk%2FrGTCZ3J64xQDzQR%2FUOjvDBu5q33CnK2GlUfPzBXf1OTc%2FJsw0aBC1hXFcv1IE%2BWFX0Bh9NAE3i7nrzSRncRTX1XJFW7bPJIxrvpZozuQ%2Bpnrs2hyvlfTq9ph5ab5xMrhNtOO1dcmysZKvxgnImbKod8vkpfX8NbN8d2Bvy9yy%2BjY%2BqiF93PIbevTDmd%2B9l3kaj2DCsFF%2FH5EpIFuOG6oOJG0ON58Y49xQwda%2BCvaDFc7bRsa4lzKJxDZxfaXLxO38yo1zu3xs1vylbTn9NF6SJqokbvHRcG0%2Beq7Ww2B6jjKhAmiFv2ablvpTfQgJ7NVi2jap7V%2BOgRNUxIZlPGpwjD7otG%2BBjqkAaJcQuAmdW4sTgXq%2B%2FSGoMUvNm2GPzZ6jGJHk4al8KxnuNLlyvsNbOj7EGr34VyPOjilOx79aHYqQpb3p%2B4eM3T37kCu3IX%2Fz%2FMmt0eeJDWCH0JZ3UAt9nCDUV2DBRwEyoWlDZDEguL%2BoiRVQpVeYLCN7QIgAnSwSz2UAZQDci5lsB55ZtWvgFUUwJchYMjpW5%2FR9svpkhs2AHcf3e51g2OVe7Mw&X-Amz-Signature=4f133dc97b7bb234403e1187d56f1ae6d6c0628b0718d682e5b3549e440f96ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
