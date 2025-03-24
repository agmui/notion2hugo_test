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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJEZFH7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXk8sLsr%2FgpSKqGMS8qZ2kjytO6%2FfAw8oTdLzN%2FXFTtgIgOApMUdxTnv4S2WTMP5Uah89ILBd3S1qWaVMn%2F6x713EqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeXq93YuUXM9xD23ircAypuZ7FCSOlUzFyn8bye36pAEDvXZUVGpp3fsZVmFIjfll3ieny%2F8MaL1ozuHW0GbWlsQ7C62KiK%2B%2FhK5961f4gHs62ER2P7c1oZnAAxvx8SRGp32SY23%2FWdMBFIVwpjREqE4yr%2FBZYh8H3oJ6Y6D06I3VF%2FpDLGYbAi90NYBu4ceFdHOmhy%2B4yc4qcx1wxdLkBeTjD4BSDuKGLd0j%2Bq7oH7jOw4YLYjGipQQ1bnwNaetQ15aITW3rpbZ8na4aftCJ%2BjbrFF4EKTL22UD3QKALsQ%2BcYNQ2KKnzIUQ3Fo8XCGvjpiAby48%2Fg2gQlR42iGIqfDURxaBpYoek1o7z%2Bt8A4%2BZ9zPkk%2FQ0B4LtGgyouxBieGzsNqSoPp3vE2cs%2Bwz16rxtCyNkOC%2BTCaXOhJLkZ6YTTBGZqWZg0vpmwV7GgVoiGae0bmkl3%2FbUJCrJhLc4CxqKFuCA6AduykQn70%2B9J63Xj00tkWz23nAp5EwzU28KXzfp00Wz88zdHTqyRabSqEYOR19Q%2B79KyHvCrhvYSALOcXvWKL%2FTzv19SNF2cPrfvcvgxmOiv7LB4aYSsk5uVCwBGF6xaCtSHb8bCQwn3GyweKWjVVI6HOLByl4sLTQ5kHkC3%2FNKGUxbg87MKSSh78GOqUB0TbXvOuys2aGzcBzNT6wdrDIpwmng8gG%2FwPlQolR2UUCWanBgcPv240eDLJu9KVpxHQKq9gqmZZDByEhg8TFp5CyVUweyy4jGcVg5p3yXH%2BLASb7ZI80qGYDrClb8ZjTFQ4hovGEORatGJAXV6xQmO%2B8H1%2BmsM90l85cpf6bCJl%2B%2Bqd4L7xGXW1kQhvQ8GXAP%2FOTmXp3KeHLNQ6StXLxvCOuFepS&X-Amz-Signature=f3450e3079b9963017f33d1b4f1fa0b2148d0f3cedcbe8844d4d0eac7fdda9a6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJEZFH7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXk8sLsr%2FgpSKqGMS8qZ2kjytO6%2FfAw8oTdLzN%2FXFTtgIgOApMUdxTnv4S2WTMP5Uah89ILBd3S1qWaVMn%2F6x713EqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeXq93YuUXM9xD23ircAypuZ7FCSOlUzFyn8bye36pAEDvXZUVGpp3fsZVmFIjfll3ieny%2F8MaL1ozuHW0GbWlsQ7C62KiK%2B%2FhK5961f4gHs62ER2P7c1oZnAAxvx8SRGp32SY23%2FWdMBFIVwpjREqE4yr%2FBZYh8H3oJ6Y6D06I3VF%2FpDLGYbAi90NYBu4ceFdHOmhy%2B4yc4qcx1wxdLkBeTjD4BSDuKGLd0j%2Bq7oH7jOw4YLYjGipQQ1bnwNaetQ15aITW3rpbZ8na4aftCJ%2BjbrFF4EKTL22UD3QKALsQ%2BcYNQ2KKnzIUQ3Fo8XCGvjpiAby48%2Fg2gQlR42iGIqfDURxaBpYoek1o7z%2Bt8A4%2BZ9zPkk%2FQ0B4LtGgyouxBieGzsNqSoPp3vE2cs%2Bwz16rxtCyNkOC%2BTCaXOhJLkZ6YTTBGZqWZg0vpmwV7GgVoiGae0bmkl3%2FbUJCrJhLc4CxqKFuCA6AduykQn70%2B9J63Xj00tkWz23nAp5EwzU28KXzfp00Wz88zdHTqyRabSqEYOR19Q%2B79KyHvCrhvYSALOcXvWKL%2FTzv19SNF2cPrfvcvgxmOiv7LB4aYSsk5uVCwBGF6xaCtSHb8bCQwn3GyweKWjVVI6HOLByl4sLTQ5kHkC3%2FNKGUxbg87MKSSh78GOqUB0TbXvOuys2aGzcBzNT6wdrDIpwmng8gG%2FwPlQolR2UUCWanBgcPv240eDLJu9KVpxHQKq9gqmZZDByEhg8TFp5CyVUweyy4jGcVg5p3yXH%2BLASb7ZI80qGYDrClb8ZjTFQ4hovGEORatGJAXV6xQmO%2B8H1%2BmsM90l85cpf6bCJl%2B%2Bqd4L7xGXW1kQhvQ8GXAP%2FOTmXp3KeHLNQ6StXLxvCOuFepS&X-Amz-Signature=91aed110215b195b3daaf384805c7e3ec685af01a9542d04b52bb298cfd4c20a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
