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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ2HRE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSTgpF2rljPhKV3lxTycE%2B%2Fd2vot0mLPIQLAYT9CG5uQIgCaEEv5ONEPhG7RH9r57JDTbDeMdqozn2RdiZ8FTuSfQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDL6UOXFGkm97rKM9UircA6K70dJ5KfATho1UfPl1rl9OivB41UDPlJKYkxS9xwi5sscx3RZICjyGEpuRPVCNs5RdpskAIt5oA9%2FnEwLnepIUbV%2FLA5VzT%2FQ7%2BVuu%2FSdMavHuj%2FjyNKfFkPe4%2B7o2UeOiL%2Bwi%2B5uAZSjTKN71qKpIrNAuEjysoFJWocw6JAmALpbYfj%2BywMob%2FM0TOKTcg1imSF2WH%2FXKv68yOHXD4FTttLLKQ2NxdQlWxfGI2AFpT7Arrs3opz7%2FdkQHSIEuo7WMSDapmZiwlKvC6%2BNzbzdrtZ%2BPZWJlo31sPFS4bDzn8Wcc0XAU4SEW7uDss8dhBeghnbYfEHbn6cidiP6VllOuKoaKvzl6uLT8LUcz0DyEKPawHl5hTOCsUwuZ%2FKw7pyKu1FqURA7BPT%2FzzdpDmm4AjUD1IiS1ZOsbAMa96%2BZ%2B%2BlEaYhb97ieaIHqYaLK844nD7cFpl3gTyeRuyZk1qUIg7DKlkUzMTPNuC%2B%2FMqW2RSao1e%2B7%2BY1ll1%2BEgblJiuV0TxzX2ej3bZJj70U%2F2grerXCdBK7S44QA1BEb9NbMm49GJDGqwV8WGe26YySgmoWvEC1yxqCsd3IyS3joObLGU7HxR7Ijg8UZKNJ2tXzCogartwOKQ9yW9MU7EMNz4nsEGOqUB2aacjsSFDBGuA6Exa7BK5oT%2BahUlFVOQNDSna4A5EYRVs12vk1sfg5VkoaF%2FrGb6W3OW0pyUxRdE1w%2FLCZWysaXX3C3ZLUDmIuGFoSWGiq5XRfEkDOABk7LaD6n0BsE9EgGx2To%2BdQHTiXLYT7S%2FfSX3WGMJxAFowEJ9ILf9kubCqkMFk%2F%2FGu43%2FIG9davqg3gizoOmMKTw4oTsvfWOpuh3Ukrfe&X-Amz-Signature=01eea0544709fa6ec730a0d40d7d46fcfd174971202e3288620f10541eac8f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ2HRE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSTgpF2rljPhKV3lxTycE%2B%2Fd2vot0mLPIQLAYT9CG5uQIgCaEEv5ONEPhG7RH9r57JDTbDeMdqozn2RdiZ8FTuSfQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDL6UOXFGkm97rKM9UircA6K70dJ5KfATho1UfPl1rl9OivB41UDPlJKYkxS9xwi5sscx3RZICjyGEpuRPVCNs5RdpskAIt5oA9%2FnEwLnepIUbV%2FLA5VzT%2FQ7%2BVuu%2FSdMavHuj%2FjyNKfFkPe4%2B7o2UeOiL%2Bwi%2B5uAZSjTKN71qKpIrNAuEjysoFJWocw6JAmALpbYfj%2BywMob%2FM0TOKTcg1imSF2WH%2FXKv68yOHXD4FTttLLKQ2NxdQlWxfGI2AFpT7Arrs3opz7%2FdkQHSIEuo7WMSDapmZiwlKvC6%2BNzbzdrtZ%2BPZWJlo31sPFS4bDzn8Wcc0XAU4SEW7uDss8dhBeghnbYfEHbn6cidiP6VllOuKoaKvzl6uLT8LUcz0DyEKPawHl5hTOCsUwuZ%2FKw7pyKu1FqURA7BPT%2FzzdpDmm4AjUD1IiS1ZOsbAMa96%2BZ%2B%2BlEaYhb97ieaIHqYaLK844nD7cFpl3gTyeRuyZk1qUIg7DKlkUzMTPNuC%2B%2FMqW2RSao1e%2B7%2BY1ll1%2BEgblJiuV0TxzX2ej3bZJj70U%2F2grerXCdBK7S44QA1BEb9NbMm49GJDGqwV8WGe26YySgmoWvEC1yxqCsd3IyS3joObLGU7HxR7Ijg8UZKNJ2tXzCogartwOKQ9yW9MU7EMNz4nsEGOqUB2aacjsSFDBGuA6Exa7BK5oT%2BahUlFVOQNDSna4A5EYRVs12vk1sfg5VkoaF%2FrGb6W3OW0pyUxRdE1w%2FLCZWysaXX3C3ZLUDmIuGFoSWGiq5XRfEkDOABk7LaD6n0BsE9EgGx2To%2BdQHTiXLYT7S%2FfSX3WGMJxAFowEJ9ILf9kubCqkMFk%2F%2FGu43%2FIG9davqg3gizoOmMKTw4oTsvfWOpuh3Ukrfe&X-Amz-Signature=bca0feabf2edd8e0bdc839b3a32718174ea5914d938d30e087cf9c497fa244d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
