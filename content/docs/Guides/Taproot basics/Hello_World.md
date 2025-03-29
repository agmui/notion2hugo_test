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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOJ2BS3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEWtMin5qSz%2B6PJO4oaXv2KKNCoKL35AhagPhY57gd6%2FAiAQZlRsVV%2FNnEB9qyV8Exac%2FENl3qI4LVmQcTP94pie1ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWa7pXLvHW6Sfto8HKtwDtVQG1PDGw56UOZrto00L6pJjAx1J%2Fp9BbBNht8vvXJDj36vM3DAgZa3%2FqVknMTRbShmnszbTcooYa5VW1qR2mw2OKt7WBAP7xiZrB7rj0mZcE30CrW2XZl%2BVqpu3TzO6U%2FRCy2iJYlxde9mGSSEsTx6hstnA4OZD871s%2Bk0RyegjDzF5o683M%2FhdUMcBVCYrnqVg%2B6NnHXSYm2p5aABDGH8RJhuyzp9UPGE0Q1r%2BdmS0nPk9WKsWmyQ7PXNx3pvxvXhARwYwJ8jKIgKB6nXIkvtZtFsWg3uSaVDFT8SlZKP%2BcIEnVd07joxyeTmA6hEDdzsRq%2BkBZzG7cv%2Ffx860W%2BpvsH0pGrnGgOiLkLJewpdJG1tEnYP59dVI%2B5Od%2FuEAtJzhAA0JBU9ik05Fo7TM7nrZ0PxYI8%2FKeqoSngiqIYz8KWp9JGKCB4ivKraLtPwaOHOtF%2BOueyU3DyKN%2FTiDylbzMWIIqG1W9Z2NzSAPCP1lNpPewEJuAWsRk5v%2FJjEIp36ICACiMZ%2FzO1slnkH8U0Wv0iRwR%2Fbn8A%2FsI5F%2FUs7TS66dyNcnUzeA9RvppXduTDjuYu3E6j2HF0mkN8T%2B9PSVnBdKZeHhL0wyjOm3U4HovLTdOleK3StCwYQwiauevwY6pgEHwkcnfjLXwpFZ%2BweUQI8XBUXL%2BtnG9tx0yWJD1XW9R%2FpoCIgIhmmXy11M7u63wTtirGke9hyJIGTtO8BmdH%2B8zla7bDKyCAVs8OVLb0Y0m9FyHNRU5UuyOshAWgI4K0QMetzohJV%2BKdu6lkxlpPoIfbvvFWzpRWClhBx1VfS0vQR1W%2B9raPk%2FCzkyQQUBSaGVb%2BNufYIsbhd6XeEY6d99X6uq8AE9&X-Amz-Signature=053964dd5a29bd890b0e36937c7a1d8c1faa27df5282d26475f36c0515b5528a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOJ2BS3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEWtMin5qSz%2B6PJO4oaXv2KKNCoKL35AhagPhY57gd6%2FAiAQZlRsVV%2FNnEB9qyV8Exac%2FENl3qI4LVmQcTP94pie1ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWa7pXLvHW6Sfto8HKtwDtVQG1PDGw56UOZrto00L6pJjAx1J%2Fp9BbBNht8vvXJDj36vM3DAgZa3%2FqVknMTRbShmnszbTcooYa5VW1qR2mw2OKt7WBAP7xiZrB7rj0mZcE30CrW2XZl%2BVqpu3TzO6U%2FRCy2iJYlxde9mGSSEsTx6hstnA4OZD871s%2Bk0RyegjDzF5o683M%2FhdUMcBVCYrnqVg%2B6NnHXSYm2p5aABDGH8RJhuyzp9UPGE0Q1r%2BdmS0nPk9WKsWmyQ7PXNx3pvxvXhARwYwJ8jKIgKB6nXIkvtZtFsWg3uSaVDFT8SlZKP%2BcIEnVd07joxyeTmA6hEDdzsRq%2BkBZzG7cv%2Ffx860W%2BpvsH0pGrnGgOiLkLJewpdJG1tEnYP59dVI%2B5Od%2FuEAtJzhAA0JBU9ik05Fo7TM7nrZ0PxYI8%2FKeqoSngiqIYz8KWp9JGKCB4ivKraLtPwaOHOtF%2BOueyU3DyKN%2FTiDylbzMWIIqG1W9Z2NzSAPCP1lNpPewEJuAWsRk5v%2FJjEIp36ICACiMZ%2FzO1slnkH8U0Wv0iRwR%2Fbn8A%2FsI5F%2FUs7TS66dyNcnUzeA9RvppXduTDjuYu3E6j2HF0mkN8T%2B9PSVnBdKZeHhL0wyjOm3U4HovLTdOleK3StCwYQwiauevwY6pgEHwkcnfjLXwpFZ%2BweUQI8XBUXL%2BtnG9tx0yWJD1XW9R%2FpoCIgIhmmXy11M7u63wTtirGke9hyJIGTtO8BmdH%2B8zla7bDKyCAVs8OVLb0Y0m9FyHNRU5UuyOshAWgI4K0QMetzohJV%2BKdu6lkxlpPoIfbvvFWzpRWClhBx1VfS0vQR1W%2B9raPk%2FCzkyQQUBSaGVb%2BNufYIsbhd6XeEY6d99X6uq8AE9&X-Amz-Signature=fe0a9e29a904e0c5440caaf5f59ca6bff97241ba2bd035a9e88bc46716e18ead&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
