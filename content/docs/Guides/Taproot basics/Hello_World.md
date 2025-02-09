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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZTVCS2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcC5W39peRAARTwZqh%2BMV%2BJ5kdZr90YAYQe9imZ3aXhAiEArpZSA2f4cN6ea2972qFpPPIzfF89oUrbBIecXH5ADwUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItliAswifUsE0bMCSrcAye7MJhBu8fP4YzwGQH4FV%2FMEgx%2B%2FzHtkRmdt7Q4kh3CrBtAmVTYZ4HhGdtGAqe0ov1uWMZw0ihxKnp%2Fxn89mHbQhXF5S1vwKR0OHMc27E1Nk%2FLbvY1lVTe1WkwLzTFADJeD7h8yqXJJrhunJjq7QG7LTLYOjrXLEO2Eq%2BFI7HKNzeo7b%2FqR9BBhCmNtR51GnYrDxzUM9A7y8wX4vzsc9r5LFPwUv%2FgQ%2BrCJATj3sgT%2F1fzz1j48%2Bhy1kRmPjk0Yc3CVMPsroNA76V3z3QPjdPmnymCjDc6FAxsMB1uxFFbpa1ksA0k27pcxTIRHvYJAZWU6HMCvtu4U0qx7ThHVj76uVvS3vx%2FL4JYshSAhmDo4eVQFwPVIXEnRvqKMkqbgUBp3rE6%2BmKA4nVlHNX280uBlgFUEKQq3OHekJsUuHtI%2BRSZIvvPscN8%2B3EtVd%2FbKOKb%2BBOksVCM%2BjBrkJnh1t3wKMfqmVRcmQMM0i8Cu38Mwk1zLxdYKscmQyeDSZ3RZOujIm6mn3mPIwzS4IzOVUWFprU3FZVxeUY6XijPqNyW6ygnYpVt3oUOQ2qqsRI9l2EyMVadCxFZ47R7CFudwkfAbWTX97e0%2FoTScr5FPpo%2FilLbDJjS43xFMcF%2BVMI6Eo70GOqUBm2rviZlQzMY4%2B2tshzWvN6LRhpAh5zL2nOXAb2bcMvSAC9dyZ8wBwqdmJXmJ3lT8q0k0QGwKEMqiZyahrWnzgbYR6FkCvWVhrVSjk381QYJJevwK4RWgAITN5tw6S7uiqkmXk%2FgY1%2FUHS7LOUMemOPbeuuC%2B34%2BW6orFkKLMgWsde1fFO6B5MJXr3Q80bHgDXsspEPhwnKNRjlNdTF3R7KU7sm7q&X-Amz-Signature=93055cddef7b7ac609769949ddbc1511d440f241ae9180fd2543178412544ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZTVCS2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcC5W39peRAARTwZqh%2BMV%2BJ5kdZr90YAYQe9imZ3aXhAiEArpZSA2f4cN6ea2972qFpPPIzfF89oUrbBIecXH5ADwUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItliAswifUsE0bMCSrcAye7MJhBu8fP4YzwGQH4FV%2FMEgx%2B%2FzHtkRmdt7Q4kh3CrBtAmVTYZ4HhGdtGAqe0ov1uWMZw0ihxKnp%2Fxn89mHbQhXF5S1vwKR0OHMc27E1Nk%2FLbvY1lVTe1WkwLzTFADJeD7h8yqXJJrhunJjq7QG7LTLYOjrXLEO2Eq%2BFI7HKNzeo7b%2FqR9BBhCmNtR51GnYrDxzUM9A7y8wX4vzsc9r5LFPwUv%2FgQ%2BrCJATj3sgT%2F1fzz1j48%2Bhy1kRmPjk0Yc3CVMPsroNA76V3z3QPjdPmnymCjDc6FAxsMB1uxFFbpa1ksA0k27pcxTIRHvYJAZWU6HMCvtu4U0qx7ThHVj76uVvS3vx%2FL4JYshSAhmDo4eVQFwPVIXEnRvqKMkqbgUBp3rE6%2BmKA4nVlHNX280uBlgFUEKQq3OHekJsUuHtI%2BRSZIvvPscN8%2B3EtVd%2FbKOKb%2BBOksVCM%2BjBrkJnh1t3wKMfqmVRcmQMM0i8Cu38Mwk1zLxdYKscmQyeDSZ3RZOujIm6mn3mPIwzS4IzOVUWFprU3FZVxeUY6XijPqNyW6ygnYpVt3oUOQ2qqsRI9l2EyMVadCxFZ47R7CFudwkfAbWTX97e0%2FoTScr5FPpo%2FilLbDJjS43xFMcF%2BVMI6Eo70GOqUBm2rviZlQzMY4%2B2tshzWvN6LRhpAh5zL2nOXAb2bcMvSAC9dyZ8wBwqdmJXmJ3lT8q0k0QGwKEMqiZyahrWnzgbYR6FkCvWVhrVSjk381QYJJevwK4RWgAITN5tw6S7uiqkmXk%2FgY1%2FUHS7LOUMemOPbeuuC%2B34%2BW6orFkKLMgWsde1fFO6B5MJXr3Q80bHgDXsspEPhwnKNRjlNdTF3R7KU7sm7q&X-Amz-Signature=537c8b4909e8fc67ea71a91df296a930582f44c18c413213ca7978420dad5298&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
