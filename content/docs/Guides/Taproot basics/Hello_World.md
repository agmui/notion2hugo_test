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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ4XZG6X%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDst%2FL7AM0hv%2FEEqjipCkNnJQtgN7vqEcr8gIwEKxrCfgIhALChRSfb5diLMffl0JEMFBFR77vqTEwUWCXTvl3OP9VWKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZdvIQBoMQMBQjrvQq3ANz24nEGsx7NV%2BCvbbnhzgGqzqAGiwjr1QgqsRXTQ2VGocZmm23nnqsLxtpBFDtOXJCq3KSIx3cdbnzgizdIiTLS39k9Uwt025Rkh3s1HTfzpHjOBL2RQgZ13o76FJOAK2vQHTKwR%2FW9g%2BVZfKJB7nzlkdHmLk6YajzwT%2BCVU21f6cqlG%2BSMDZlyVs%2BDPsnMNkYlK5nHnBv4vNYWkOdUvrYlHCWaQEgLk02OZq9Edj7dhyQVbkGtreptau7rxzBbp3QVsBXM8pILvqO%2FUb%2FwZh7SYFRdg3ZB4qVJP11wf3pSgt5mqxL0c60Xm50gu1Lw4GU%2BY%2FF2JvIVsKgX8sRHqCJwT5Leh0Rv%2BWjniHsFTnY1AkZ4dOhvJStl7wghRUGMP9JDTU1jVWh%2FsfsS1HNzrkVHyTuG8Vb1WY7wMeSmH1l1GkQQFTx%2FdG%2FpqnlhbjYH90OGSFUZ3%2B9FAgOh85%2BFLoK7Q2ATUqqzOorUFasvnXzOLCJtz%2FMvMVnVjEMTnzrA1v6S1MbCcH%2F1AOxd%2FWZ2I2JjgT3HrcBUvlZVuqQL5D1KSxBS53t8Yh0vA5t1FRM0PKzb4aAGusSRgtl79uVgQtn3TuxCnaGbGWQOm31UK6IbbFFF4BWFPM1Dxr1KjDrkoXBBjqkAWv%2FWwxR5FzuauS5jGZ%2Fof4Z99HVHaoAUIaoneMg8d3%2B4Xe0jLN8MrYNZvZlDkt0mWeLCX0wBZG4VN5qWZj2gLxwJwCka9gK7aNmqv2pb9AitMiV1k4fZFUCYIXnvjWoezJfZw5%2BCf7mmwcJWofWa222N6pA36MgcvOqap9QyxfzEeZGtGAYwxd3uvydhYkNRBb7XPylDzcKhxf0J0T9MDKwlqq2&X-Amz-Signature=9581b210e075c2c924cd06ce1db7384daa95c977542d1fdfb3a30cb7d8416f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ4XZG6X%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDst%2FL7AM0hv%2FEEqjipCkNnJQtgN7vqEcr8gIwEKxrCfgIhALChRSfb5diLMffl0JEMFBFR77vqTEwUWCXTvl3OP9VWKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZdvIQBoMQMBQjrvQq3ANz24nEGsx7NV%2BCvbbnhzgGqzqAGiwjr1QgqsRXTQ2VGocZmm23nnqsLxtpBFDtOXJCq3KSIx3cdbnzgizdIiTLS39k9Uwt025Rkh3s1HTfzpHjOBL2RQgZ13o76FJOAK2vQHTKwR%2FW9g%2BVZfKJB7nzlkdHmLk6YajzwT%2BCVU21f6cqlG%2BSMDZlyVs%2BDPsnMNkYlK5nHnBv4vNYWkOdUvrYlHCWaQEgLk02OZq9Edj7dhyQVbkGtreptau7rxzBbp3QVsBXM8pILvqO%2FUb%2FwZh7SYFRdg3ZB4qVJP11wf3pSgt5mqxL0c60Xm50gu1Lw4GU%2BY%2FF2JvIVsKgX8sRHqCJwT5Leh0Rv%2BWjniHsFTnY1AkZ4dOhvJStl7wghRUGMP9JDTU1jVWh%2FsfsS1HNzrkVHyTuG8Vb1WY7wMeSmH1l1GkQQFTx%2FdG%2FpqnlhbjYH90OGSFUZ3%2B9FAgOh85%2BFLoK7Q2ATUqqzOorUFasvnXzOLCJtz%2FMvMVnVjEMTnzrA1v6S1MbCcH%2F1AOxd%2FWZ2I2JjgT3HrcBUvlZVuqQL5D1KSxBS53t8Yh0vA5t1FRM0PKzb4aAGusSRgtl79uVgQtn3TuxCnaGbGWQOm31UK6IbbFFF4BWFPM1Dxr1KjDrkoXBBjqkAWv%2FWwxR5FzuauS5jGZ%2Fof4Z99HVHaoAUIaoneMg8d3%2B4Xe0jLN8MrYNZvZlDkt0mWeLCX0wBZG4VN5qWZj2gLxwJwCka9gK7aNmqv2pb9AitMiV1k4fZFUCYIXnvjWoezJfZw5%2BCf7mmwcJWofWa222N6pA36MgcvOqap9QyxfzEeZGtGAYwxd3uvydhYkNRBb7XPylDzcKhxf0J0T9MDKwlqq2&X-Amz-Signature=f879de47d6cd041afcf28c69e64b5da1a6c8b737674ebc36e398ae18fa9ccb49&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
