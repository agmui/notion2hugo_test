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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQLGNQJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpxgOYMQlCrgzwSMYrrl7aUsrT5NdLHBsNsuL%2FIAHdYgIhALUyc5m0%2FX7eOWfNVDRELZQk15ePrD0m2gy0KwN5uGRwKv8DCBUQABoMNjM3NDIzMTgzODA1Igz2lG%2Bt%2Bw4AihnZjC0q3APb5MzlhCc%2BiPG0xoAA5YkYPkb3DeFVSoviNC6DBnE6TnpNPaARttxjzlju4sjfHBuPJA51Glp9NWnkMi75GedD62UA3bXSimMp5JztgnAuXOdCRBo9i8nlZR91FIDH4UJ2q9%2BUMkvTmAL7PkJxy431uiYmzMb7DBsUKA37iG5%2FEM5w663dlcj9LOY7GzxxRuFOFQeamGwOLHQ0RhLLo%2FBR9PVTl4QIbASC9qxxuYOAOdNz8ChuuvHmnTt5QvLtwtJ73U9tLyIMEP6nSRDQ7ahKcqCSFH9JgRvHO0SFZerSvXNtQXsLcLbxp8qjLB%2FwOeEX2Nd7MwJnIuYepOrflL8ld5oZTC%2FwyiacYVMQsBbdtWxLqXI752nlsvJm0asbMAytuAD3bayk8ykfrFEyunEqimP2UasnEmroWGQrv8VqrfDlKw2WBRUwO2xYIor%2BEsDHT%2FrSN8YGk9I5iTzPXLk0Y66patzeH6FLQa31and1n8AN9kZeGBYgD731N0XihFPLNWNo6YLTuyLH%2FMCpQ6lVczd5Y2iIkjIVF1VVUr619EpJKc7oIvn4uUkmNs47GD7rn8YTLXVb5x8uH4Oyv%2F%2BfBN4z6p7eGD8wKMQSqsTDqMw%2BlcQo%2FypBdnbiCTD99KC%2BBjqkAUxygOpBCRkL2JvawrPqu41%2F5BEJFMBEg85xbHKjdIlss6jYCILXVKMfwNKwA%2Fz6sM%2FTp6VDIAAXq1I0EygfKzOMLW0mlpa58MyowT8UJqfYfjOmLaEleUGub3RKKHY698L8GITunh8nNixt9Kz12%2FnLVkC9ekuwbF4em6ZPmy5MgubAKBaXiG8A4PR%2Fb1WnTQFvbRLaTw%2FsXBsuNNJKVYxqaxyI&X-Amz-Signature=cc4f630492ad87dd94eeb3df4b30a6ca752cfa439a305234b45b02d9e2e3cb30&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQLGNQJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpxgOYMQlCrgzwSMYrrl7aUsrT5NdLHBsNsuL%2FIAHdYgIhALUyc5m0%2FX7eOWfNVDRELZQk15ePrD0m2gy0KwN5uGRwKv8DCBUQABoMNjM3NDIzMTgzODA1Igz2lG%2Bt%2Bw4AihnZjC0q3APb5MzlhCc%2BiPG0xoAA5YkYPkb3DeFVSoviNC6DBnE6TnpNPaARttxjzlju4sjfHBuPJA51Glp9NWnkMi75GedD62UA3bXSimMp5JztgnAuXOdCRBo9i8nlZR91FIDH4UJ2q9%2BUMkvTmAL7PkJxy431uiYmzMb7DBsUKA37iG5%2FEM5w663dlcj9LOY7GzxxRuFOFQeamGwOLHQ0RhLLo%2FBR9PVTl4QIbASC9qxxuYOAOdNz8ChuuvHmnTt5QvLtwtJ73U9tLyIMEP6nSRDQ7ahKcqCSFH9JgRvHO0SFZerSvXNtQXsLcLbxp8qjLB%2FwOeEX2Nd7MwJnIuYepOrflL8ld5oZTC%2FwyiacYVMQsBbdtWxLqXI752nlsvJm0asbMAytuAD3bayk8ykfrFEyunEqimP2UasnEmroWGQrv8VqrfDlKw2WBRUwO2xYIor%2BEsDHT%2FrSN8YGk9I5iTzPXLk0Y66patzeH6FLQa31and1n8AN9kZeGBYgD731N0XihFPLNWNo6YLTuyLH%2FMCpQ6lVczd5Y2iIkjIVF1VVUr619EpJKc7oIvn4uUkmNs47GD7rn8YTLXVb5x8uH4Oyv%2F%2BfBN4z6p7eGD8wKMQSqsTDqMw%2BlcQo%2FypBdnbiCTD99KC%2BBjqkAUxygOpBCRkL2JvawrPqu41%2F5BEJFMBEg85xbHKjdIlss6jYCILXVKMfwNKwA%2Fz6sM%2FTp6VDIAAXq1I0EygfKzOMLW0mlpa58MyowT8UJqfYfjOmLaEleUGub3RKKHY698L8GITunh8nNixt9Kz12%2FnLVkC9ekuwbF4em6ZPmy5MgubAKBaXiG8A4PR%2Fb1WnTQFvbRLaTw%2FsXBsuNNJKVYxqaxyI&X-Amz-Signature=983e8a7f57248390fc5ddbac8c4a52049302646d478b4c60393b92790926a266&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
