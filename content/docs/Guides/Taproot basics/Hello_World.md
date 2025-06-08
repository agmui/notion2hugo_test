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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633S3SYRK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6ks6%2BPWk36x9XB01yuiYPuTHg3YZ3yHwetPgpMxvr7AiEA099qh%2FnNOJsfHtDFo35QtVV9IsIFVHybArBH7l9wC%2B4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF82jqYG85X%2FK5%2Bn4SrcA%2F0%2Fhq132XAVkBD7MS%2BDKEj2Kr0u6WP1WcPD254QVIs0gnBNB8YfI0sRv4L1VlbxDqlIqmvumYas9igLLr0IUP1%2B5ZMx%2B4wcIveFV9So29cT6CMa1q%2FW0gngpIwmfsgzOL3foBsx5%2B1rgiqjSCi98Z0plttcP0%2FxRqzQ2GUnR2N59sQa8B9do5OLbUYw3gtJ%2BVCMLxDm7YZrGBwBTfIYlJZpMlJq2yUFpMsOCZsXCKzX4f9lppopE5VDrftRXi%2FRSf%2Bp1yY4tnWW4biEO0bG5unjGJb69xs2joeaFpXbcvjO7syTTzO%2BwymMJPUx%2BcDCI%2F%2FxIgezHBLWETfVIvkxcAYlrDdDZfxv10AwIzPoW08vx%2FEydpeMvXw0PPTWyKKP4UuQKxpbmtxfK3Hm2vmbEcpY%2BvEwLpbwE0WNX%2BCeCRT7Ym0Hohil%2BcaPFEijLc3Hv6RP3nPLywSK8ooKRh92R2%2BrFYQWCw0RV%2FX5LnIX%2FBLfPHXZoPCqIYFy5hD8bDDN%2BtDUNP1Ac2nsCzLgPN3GyZkssp2NYcnBqm%2FnHEDBjkkyx2b6PZ3xdS%2BqIVFoU7SHjOEWD47Vl9k4GBAoBqatd3K6ZEWfd4h6oShzOPGscgOTtG5LZuGKjF26V8NiMOWck8IGOqUBhc7UqQ6fPMX2Lbx4XLL9xOYYe0MG%2FJJF1e65UcDowIlN8eGH91RQZFL3Jyiqf4l0zJLdQXsN%2BMRTPhwxX7Lh5DOniCaf3n%2FdhLpflQBCJqf8bcnsw2ar%2FxyHQc4PqahCG6wciSRnn%2B%2BXE7ZFv28nIjCA3MJmUOq3fquLR5XG0yLvuuL5Zg1VhW7Baupn9BjWxHhUTV7vantFfVgoyPGijVW9vlIP&X-Amz-Signature=eedc9fe9771e8db1bbd18e17ef43ee80c220b8599e6d6f9a8ebe2811e61f15a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633S3SYRK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6ks6%2BPWk36x9XB01yuiYPuTHg3YZ3yHwetPgpMxvr7AiEA099qh%2FnNOJsfHtDFo35QtVV9IsIFVHybArBH7l9wC%2B4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF82jqYG85X%2FK5%2Bn4SrcA%2F0%2Fhq132XAVkBD7MS%2BDKEj2Kr0u6WP1WcPD254QVIs0gnBNB8YfI0sRv4L1VlbxDqlIqmvumYas9igLLr0IUP1%2B5ZMx%2B4wcIveFV9So29cT6CMa1q%2FW0gngpIwmfsgzOL3foBsx5%2B1rgiqjSCi98Z0plttcP0%2FxRqzQ2GUnR2N59sQa8B9do5OLbUYw3gtJ%2BVCMLxDm7YZrGBwBTfIYlJZpMlJq2yUFpMsOCZsXCKzX4f9lppopE5VDrftRXi%2FRSf%2Bp1yY4tnWW4biEO0bG5unjGJb69xs2joeaFpXbcvjO7syTTzO%2BwymMJPUx%2BcDCI%2F%2FxIgezHBLWETfVIvkxcAYlrDdDZfxv10AwIzPoW08vx%2FEydpeMvXw0PPTWyKKP4UuQKxpbmtxfK3Hm2vmbEcpY%2BvEwLpbwE0WNX%2BCeCRT7Ym0Hohil%2BcaPFEijLc3Hv6RP3nPLywSK8ooKRh92R2%2BrFYQWCw0RV%2FX5LnIX%2FBLfPHXZoPCqIYFy5hD8bDDN%2BtDUNP1Ac2nsCzLgPN3GyZkssp2NYcnBqm%2FnHEDBjkkyx2b6PZ3xdS%2BqIVFoU7SHjOEWD47Vl9k4GBAoBqatd3K6ZEWfd4h6oShzOPGscgOTtG5LZuGKjF26V8NiMOWck8IGOqUBhc7UqQ6fPMX2Lbx4XLL9xOYYe0MG%2FJJF1e65UcDowIlN8eGH91RQZFL3Jyiqf4l0zJLdQXsN%2BMRTPhwxX7Lh5DOniCaf3n%2FdhLpflQBCJqf8bcnsw2ar%2FxyHQc4PqahCG6wciSRnn%2B%2BXE7ZFv28nIjCA3MJmUOq3fquLR5XG0yLvuuL5Zg1VhW7Baupn9BjWxHhUTV7vantFfVgoyPGijVW9vlIP&X-Amz-Signature=f1d632c48a68c60ee10095a24788b3435aeb73669bab1310e211830c4ed96310&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
