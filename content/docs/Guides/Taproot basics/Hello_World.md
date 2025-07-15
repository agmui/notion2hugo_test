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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOAITXF4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDiU2bq6frm20mjwcPSpF8uuMw2SYptoMUgG1OnfBxW2gIhAIqBQs7s%2FWLsLI6NasgwThFoB5nRlv5%2FBvsj%2B4vJMJI%2FKv8DCEcQABoMNjM3NDIzMTgzODA1IgxQDm6aeezu4YJ%2FYHcq3AOX0LY3xWVeujmQWqz9LvXxJ19enc7sHUQxVkexIkJwOm6NliQPrO65N4xCP7PVovRQVdNzh0ABz%2Bw2iyrjPe3R2FfPJy9jRtwv2ru%2FKKhk05K9DOsnerKFaxiE6SQu0r2FWOsPuRni2EGA%2Bu3bbOH7BYe8Oeda6xb1fb3DwAld4SOwI6beWQ8vqOyRKo0ZfPQEpyNzQ5l5jIs3rk1GEw6WB9G5BQOJxXuZTa8xpTPKuLOXk4y8DhEzUcIErwzwIxuIbRgziX%2FKCqpNOcb0CPFDvNbF53J8YI0MjzC7MCQfkWjPCRwZAJtooKAg3K2VKbu%2FKWaM7%2BF7x1I07VTrjB%2Blfo5Drjfp1J%2FaTKo6GwOgqyptavIYNtk4UJGYJVCHhrIkrq24NFMdFc1%2Ft0F1h2m7uIt594PM3w0%2BzbWny9%2FktwxHJ3D82AoqFywA306iOPObskOMFf5yDjc6x8I0NikO2%2FK9V8xjOlRaNhd456UXV1C5KHrPQiyR5O%2FDOLTSolY2sofB26nTabDSHaOczqps61sCkQdJKhySg%2F79jlSSYu%2FLdq%2B%2FJt64rO8iM%2BhEzRkD%2BqIpqwo%2BMKXK7oPVMRhLdtK0RlDKm%2BzTKuDsNQaKcrbQP2B7eZFDmJR3AzC1r9nDBjqkAWPY6k2mWGxiEGH4kx1%2FA%2BLFVRQN9h%2BitVKOSAKi91gB6cN%2FQBEdP0Ivz%2FfszkmYDFHOJRxphiMLOC1mFVLzWQcryk8Y7jS47iAV3xzqsGJPaCxNtKAoqhOZA5Y7hy455Hh9yKLd1Oj%2B0jvFxCzsXuiggmH4z%2FOphV9X9yKt03zWDLTXqmFl55P%2Bssnxy25hE3zmu2HFcxat09KvxR%2BZDWklS%2FTX&X-Amz-Signature=aa850b9dc637b8cdde5fc5b34ca9909ff618f625c4450a8c8fe332bfb2b9144d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOAITXF4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDiU2bq6frm20mjwcPSpF8uuMw2SYptoMUgG1OnfBxW2gIhAIqBQs7s%2FWLsLI6NasgwThFoB5nRlv5%2FBvsj%2B4vJMJI%2FKv8DCEcQABoMNjM3NDIzMTgzODA1IgxQDm6aeezu4YJ%2FYHcq3AOX0LY3xWVeujmQWqz9LvXxJ19enc7sHUQxVkexIkJwOm6NliQPrO65N4xCP7PVovRQVdNzh0ABz%2Bw2iyrjPe3R2FfPJy9jRtwv2ru%2FKKhk05K9DOsnerKFaxiE6SQu0r2FWOsPuRni2EGA%2Bu3bbOH7BYe8Oeda6xb1fb3DwAld4SOwI6beWQ8vqOyRKo0ZfPQEpyNzQ5l5jIs3rk1GEw6WB9G5BQOJxXuZTa8xpTPKuLOXk4y8DhEzUcIErwzwIxuIbRgziX%2FKCqpNOcb0CPFDvNbF53J8YI0MjzC7MCQfkWjPCRwZAJtooKAg3K2VKbu%2FKWaM7%2BF7x1I07VTrjB%2Blfo5Drjfp1J%2FaTKo6GwOgqyptavIYNtk4UJGYJVCHhrIkrq24NFMdFc1%2Ft0F1h2m7uIt594PM3w0%2BzbWny9%2FktwxHJ3D82AoqFywA306iOPObskOMFf5yDjc6x8I0NikO2%2FK9V8xjOlRaNhd456UXV1C5KHrPQiyR5O%2FDOLTSolY2sofB26nTabDSHaOczqps61sCkQdJKhySg%2F79jlSSYu%2FLdq%2B%2FJt64rO8iM%2BhEzRkD%2BqIpqwo%2BMKXK7oPVMRhLdtK0RlDKm%2BzTKuDsNQaKcrbQP2B7eZFDmJR3AzC1r9nDBjqkAWPY6k2mWGxiEGH4kx1%2FA%2BLFVRQN9h%2BitVKOSAKi91gB6cN%2FQBEdP0Ivz%2FfszkmYDFHOJRxphiMLOC1mFVLzWQcryk8Y7jS47iAV3xzqsGJPaCxNtKAoqhOZA5Y7hy455Hh9yKLd1Oj%2B0jvFxCzsXuiggmH4z%2FOphV9X9yKt03zWDLTXqmFl55P%2Bssnxy25hE3zmu2HFcxat09KvxR%2BZDWklS%2FTX&X-Amz-Signature=bdd985903dd9cdca91a986d04da1de2bded1013ee3bbb4420e56c77b3271e973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
