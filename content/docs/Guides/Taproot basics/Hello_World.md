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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETWCIVQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfiIuRN7IkF2r8Zs1vRRzfSOyRJrO9zTV9aye295p8JAiAHSGNe%2B5ERdYCc939%2FwQb2JAJEZFPVqjcLaKZ4ME0sPiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgYbRAUE9z0T%2B5ZyKtwDpa5kkr4s0i4wngL7TvEyo6HAYjfGOQvSjeyBhE91PJW5%2B1OpgIGRA1N61NVmhnDMoqpT%2BAEn6Fd%2BXsL88Gg38b1XVU8PcG2dlDyIM4HbDwt5kTCWezhwN7pIbglxe3gAhz209CE57pgbQzyARjzlGFO4XYTmzYh982brjiWLqed6eOI8ePWUPRwGa0eWxgHkdQLLp7GAPcOrwclGcHTcpBlKo0huLaSfcHqlnxeRmY%2Bf%2FNUR8V8c2syarIGdhMQOO5svaspX4DJCWV4BUjxgM0huZimA8GMOofb9bQ4Q6sRZXb7etBjUZLxZV3Z6878htsKEe2iD4ZANQWWr8fYjGFnBl6AfoiemQxVOfaPsWEQCYGLDocGzYhnUDlhtXsmHDBmVHoOa1M5NrnZgIyoFYBaUBVglIvUGo64j3tZLQV7QPscYOp2xpb9lxkULTWpuEDqh7aN%2F3VYqJQFaD9MSH4LNeICYq15VfSVf6ZNezB7lxlxIcYLcwZ0ToiLp3SDmLqjcPVFTghoasRuAP%2BNE6CI8MUg8GppuwK3kpsWTlsJs4OG6kXMOqfrzGoZm4VsNsvKlHnYxOnqZsVrc2nAP%2Fk%2FFBNFS4w93K3cL2f8NskoqHnosYferMsDi%2Bq8wrNbqvQY6pgFWMLSyFiXz3taYqZoC54Hy3w7Q1SVeWqDFx7%2FssMcMmDTfyy%2BybpyfaeoacOt%2FZr05A6ZMbHQPQdBKdFl3IJkkLdM38HZmydHMIFVDQiLMHvc%2FOZ1mMuY%2FuJ1TnFUciQM38N3eBYuaUz5KiNWyn9wQwV%2BFbS6un%2F7ss7t2t96VwgluAlMJPo34mY5AiTa6iP8E10poUxJpef7fJHdvb5X7cjz6c%2Fp8&X-Amz-Signature=c53ad99b6ef1862d1e32538448799634b410f0f2c070d0c22ac2d02710706a61&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETWCIVQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfiIuRN7IkF2r8Zs1vRRzfSOyRJrO9zTV9aye295p8JAiAHSGNe%2B5ERdYCc939%2FwQb2JAJEZFPVqjcLaKZ4ME0sPiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgYbRAUE9z0T%2B5ZyKtwDpa5kkr4s0i4wngL7TvEyo6HAYjfGOQvSjeyBhE91PJW5%2B1OpgIGRA1N61NVmhnDMoqpT%2BAEn6Fd%2BXsL88Gg38b1XVU8PcG2dlDyIM4HbDwt5kTCWezhwN7pIbglxe3gAhz209CE57pgbQzyARjzlGFO4XYTmzYh982brjiWLqed6eOI8ePWUPRwGa0eWxgHkdQLLp7GAPcOrwclGcHTcpBlKo0huLaSfcHqlnxeRmY%2Bf%2FNUR8V8c2syarIGdhMQOO5svaspX4DJCWV4BUjxgM0huZimA8GMOofb9bQ4Q6sRZXb7etBjUZLxZV3Z6878htsKEe2iD4ZANQWWr8fYjGFnBl6AfoiemQxVOfaPsWEQCYGLDocGzYhnUDlhtXsmHDBmVHoOa1M5NrnZgIyoFYBaUBVglIvUGo64j3tZLQV7QPscYOp2xpb9lxkULTWpuEDqh7aN%2F3VYqJQFaD9MSH4LNeICYq15VfSVf6ZNezB7lxlxIcYLcwZ0ToiLp3SDmLqjcPVFTghoasRuAP%2BNE6CI8MUg8GppuwK3kpsWTlsJs4OG6kXMOqfrzGoZm4VsNsvKlHnYxOnqZsVrc2nAP%2Fk%2FFBNFS4w93K3cL2f8NskoqHnosYferMsDi%2Bq8wrNbqvQY6pgFWMLSyFiXz3taYqZoC54Hy3w7Q1SVeWqDFx7%2FssMcMmDTfyy%2BybpyfaeoacOt%2FZr05A6ZMbHQPQdBKdFl3IJkkLdM38HZmydHMIFVDQiLMHvc%2FOZ1mMuY%2FuJ1TnFUciQM38N3eBYuaUz5KiNWyn9wQwV%2BFbS6un%2F7ss7t2t96VwgluAlMJPo34mY5AiTa6iP8E10poUxJpef7fJHdvb5X7cjz6c%2Fp8&X-Amz-Signature=84ae4991b456b6021552899a16a70f0ee958800a4e3c53d9a8ae22b9181970a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
