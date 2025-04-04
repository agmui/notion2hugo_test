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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHCIOGZQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq5xre67GdZxCMd%2BS4NilngfOrmH%2BV1G8twBMEiYXsYAiBpsGOZwnjWTfj%2BvKuj30A9KsQaUDBU%2Bag6McatcEYfeSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMWYA8Olh9Jd7f7HkYKtwD6GEavICL2qk%2FladKZVdHNsR0FZcT2sKdXkzONVrAFLVChKWVmCwuYJ7Bthjs9fX8VMz%2BOcNf4Vy3yzwns5VKWiendykU%2F0%2FAapg6KTlJOw23ZzgYdDRjzL5t3gStu3TiGPOV2PMaugM5hGUKrMbBrY7LseGw26nFwMcosNm%2Fr9KIKdy3SJtQoFog6hstvjVtZjz4voKQsH6KjqPerI5ARSfdshbKWP1ON1U82Qtki9Ox8xh9ZvMq92bLFyFHkgtE7c2T8KQ%2Fx80l1AdUg%2BSZsyUq7xL%2BJqWx1z%2BPi4Iof5Yl1UqJfrw%2Fh7hlrDLmlbTDVMLk6y0w1PpCsEEfQ%2Furw2hILE3pa4FrsSGHVNtQSi1VI%2BGK3XgqrOcvaKBRdVUI4ZqZGV8IZImZ0Zjv7aZTaQ8LYV6foHIm9Y3kdcgGvo6IbxEyAnbFw8qSZsxvjI%2Br6M8oMC9utLKV92mRj8v6PyKjOTNMHBVG9mt2grhCzqXXCcM5rMd2qA0yJAxMfOUSiydz4gwQ%2B9jjHtHtsmHAlFfE%2Fie2Es9IGJ6OeP07BbGXsZ%2F0sPKWQmv8ui5qxjWiqQvNdrt0b4NW7yY8km75WbALAp2dFKexqgwKalpKLe5%2FBpp39Bn0vCL8YrwwhoLAvwY6pgFnvARMvvbrQO0WF4Td0caKBbGf%2FXIG%2Bob%2B4yuzXGJdcJP9HLDzXO3WOX9qju1PvGGWYA6KwE7QKLw9mCOZBrBULcscV6C3sNblmaxtKEeqCYszBD3YszkPPQ9qp%2BPBEcpwYwINq%2BAPKRBh48O3%2BzNHg1eG9BDSUpZchGQAuNObZ7i0buadLiN08wD%2Bbh8LFxKNaQrdWrewsr%2FYvoyKGfy8yl%2FhXleG&X-Amz-Signature=0e31a5350e214cc1edf94f0952b64e72106bc2bddac7e887748fee9b658e26cc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHCIOGZQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq5xre67GdZxCMd%2BS4NilngfOrmH%2BV1G8twBMEiYXsYAiBpsGOZwnjWTfj%2BvKuj30A9KsQaUDBU%2Bag6McatcEYfeSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMWYA8Olh9Jd7f7HkYKtwD6GEavICL2qk%2FladKZVdHNsR0FZcT2sKdXkzONVrAFLVChKWVmCwuYJ7Bthjs9fX8VMz%2BOcNf4Vy3yzwns5VKWiendykU%2F0%2FAapg6KTlJOw23ZzgYdDRjzL5t3gStu3TiGPOV2PMaugM5hGUKrMbBrY7LseGw26nFwMcosNm%2Fr9KIKdy3SJtQoFog6hstvjVtZjz4voKQsH6KjqPerI5ARSfdshbKWP1ON1U82Qtki9Ox8xh9ZvMq92bLFyFHkgtE7c2T8KQ%2Fx80l1AdUg%2BSZsyUq7xL%2BJqWx1z%2BPi4Iof5Yl1UqJfrw%2Fh7hlrDLmlbTDVMLk6y0w1PpCsEEfQ%2Furw2hILE3pa4FrsSGHVNtQSi1VI%2BGK3XgqrOcvaKBRdVUI4ZqZGV8IZImZ0Zjv7aZTaQ8LYV6foHIm9Y3kdcgGvo6IbxEyAnbFw8qSZsxvjI%2Br6M8oMC9utLKV92mRj8v6PyKjOTNMHBVG9mt2grhCzqXXCcM5rMd2qA0yJAxMfOUSiydz4gwQ%2B9jjHtHtsmHAlFfE%2Fie2Es9IGJ6OeP07BbGXsZ%2F0sPKWQmv8ui5qxjWiqQvNdrt0b4NW7yY8km75WbALAp2dFKexqgwKalpKLe5%2FBpp39Bn0vCL8YrwwhoLAvwY6pgFnvARMvvbrQO0WF4Td0caKBbGf%2FXIG%2Bob%2B4yuzXGJdcJP9HLDzXO3WOX9qju1PvGGWYA6KwE7QKLw9mCOZBrBULcscV6C3sNblmaxtKEeqCYszBD3YszkPPQ9qp%2BPBEcpwYwINq%2BAPKRBh48O3%2BzNHg1eG9BDSUpZchGQAuNObZ7i0buadLiN08wD%2Bbh8LFxKNaQrdWrewsr%2FYvoyKGfy8yl%2FhXleG&X-Amz-Signature=ae0dc042270fcdda1cdcffcb5c05a41f7fefd8275b2b78097ebbd5625d146462&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
