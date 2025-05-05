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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5YOAES%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCntpnt0JYeUo4Wznoym1uF2XxsTlaqPOwLsqdJr0kapQIgYvBR86ztK5744sJfQR%2BL3Ec9x26qXJ0%2BXo9DwiIGQmkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXznvfideKQSVv0JircAy8VpVNqQsGT7GvEswPhsSaqKjUEQ0PHXNTCPQW%2BjeCrMGWA6KzcB2R%2BckszO%2BEiS0i57U18gkcUdi4mV1y0EnUQtJW38%2Fsio3VKl7Gec81UyVtNXvAcSxi1KN4xfTsPbDolE66HxKoGfPAoyCXSnNDQ9T6TDi8uVHT7Q42mV9O8x8wHVcMnKKACkQqTZtGeN6sPqFRuEwKEvcSu0wXqwqO%2FTA64%2BFGJjymnpA2qbaJqvZgYkSttC1%2FG0RqbfzxnZEpfNLiSKK6IjF6rYcUBWBxdamvQwSSrgmFnU0gB9PcYOzBo6lmdbWez1oz75xg%2FGmxaXwnv%2BBWgs3JgQEVW%2B8U%2Foe7%2F3eAinoJYnxJU95WGLDZ70EXJFof82B6xk%2F%2B7b48TW4ZiE0Ql382mEusi2ZpnxnGXcd6MI67C%2F%2BLKM7j5gvxtO2W1q8hivVKVqbKr7rLAyWJQXxmpYVwZdOmJOwrWrM0l7h8GUzeAAQCOKY2lwD1yIkoNltmKV9iHkIkXGu20B7BO26bsu0H2gfXiCYmcvIjsEifeaQmpRfzUUhcVaXe7Y9FKfFFDt3gM9XUSh5UPXX%2FIQmSrB5d2FRrcFXOkz3iwRp5KPL5cZrr1O%2FucRVh3PSqVrQawzAjqMO2a4cAGOqUB37aeOC4lfzYCpyUNPFzYi9seUSf3wVJBaXk8fUd7jxFt5fSv%2BRZ7fuvcSxZjhSCSZQX7AgNTW4f7RXA9liLVMpzi5%2FyuWSKGIORNQQbpkQvtlmyO26BvIzu2sR6W1CkuIW6JW%2BLieaQqm7lxekyPW4m%2F0Nion%2F8xgf6cZvYvTuY08YF%2FBQrvAkUco0kFQoqFy5WwNfV7fLomH3owY006sdd9KIo8&X-Amz-Signature=7d7c8e02b66f7ac17a74baa2f05c0b5d51bcc6ec803c8ce8d3c594db64fbf9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5YOAES%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCntpnt0JYeUo4Wznoym1uF2XxsTlaqPOwLsqdJr0kapQIgYvBR86ztK5744sJfQR%2BL3Ec9x26qXJ0%2BXo9DwiIGQmkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXznvfideKQSVv0JircAy8VpVNqQsGT7GvEswPhsSaqKjUEQ0PHXNTCPQW%2BjeCrMGWA6KzcB2R%2BckszO%2BEiS0i57U18gkcUdi4mV1y0EnUQtJW38%2Fsio3VKl7Gec81UyVtNXvAcSxi1KN4xfTsPbDolE66HxKoGfPAoyCXSnNDQ9T6TDi8uVHT7Q42mV9O8x8wHVcMnKKACkQqTZtGeN6sPqFRuEwKEvcSu0wXqwqO%2FTA64%2BFGJjymnpA2qbaJqvZgYkSttC1%2FG0RqbfzxnZEpfNLiSKK6IjF6rYcUBWBxdamvQwSSrgmFnU0gB9PcYOzBo6lmdbWez1oz75xg%2FGmxaXwnv%2BBWgs3JgQEVW%2B8U%2Foe7%2F3eAinoJYnxJU95WGLDZ70EXJFof82B6xk%2F%2B7b48TW4ZiE0Ql382mEusi2ZpnxnGXcd6MI67C%2F%2BLKM7j5gvxtO2W1q8hivVKVqbKr7rLAyWJQXxmpYVwZdOmJOwrWrM0l7h8GUzeAAQCOKY2lwD1yIkoNltmKV9iHkIkXGu20B7BO26bsu0H2gfXiCYmcvIjsEifeaQmpRfzUUhcVaXe7Y9FKfFFDt3gM9XUSh5UPXX%2FIQmSrB5d2FRrcFXOkz3iwRp5KPL5cZrr1O%2FucRVh3PSqVrQawzAjqMO2a4cAGOqUB37aeOC4lfzYCpyUNPFzYi9seUSf3wVJBaXk8fUd7jxFt5fSv%2BRZ7fuvcSxZjhSCSZQX7AgNTW4f7RXA9liLVMpzi5%2FyuWSKGIORNQQbpkQvtlmyO26BvIzu2sR6W1CkuIW6JW%2BLieaQqm7lxekyPW4m%2F0Nion%2F8xgf6cZvYvTuY08YF%2FBQrvAkUco0kFQoqFy5WwNfV7fLomH3owY006sdd9KIo8&X-Amz-Signature=029b15bcdef35c06d5cc4bbbef5f434e9ab71d5cf313557ca9bc6bc121e0cd6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
