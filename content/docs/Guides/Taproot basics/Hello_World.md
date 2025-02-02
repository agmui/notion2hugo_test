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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YQ2QHS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5t7E1xkm%2F0TYeUPHF%2B%2FH5Hv6Mfw%2BlQP3TMppZhH8AgAiAUcZpnb%2F5sub1kChWYT34l86SuEaBZ90UBcVRuLNBBzyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhngO3uR49pX%2FF9bRKtwDvDR15ZhF0W7NMst6oRGQut%2BY7i72fMwGAzoNHoEMXg%2FlrOfHEGhsLRkS%2B65gczIUREMVM7vGb%2BEfZDOzKiVLNhd2AcAjyLe8CbWxXyVXkvfVzF0pcqMprQ96zKLVmzSedOZicGBqZ7D87zax4FAuoeZ92tIZCKT6kYEAuLv4dCaL%2FRMvi7YtfG94zz7KPl53JS7lMFLKGXDtlkw46PDcLHEI8N8Mbhaqu5OTADAyIlGKSLWSu9jSzArUK7duAWGjlfWUfid3vl91euLJ5Ze58DgBUmYJwlUoIkmP9mvkJ6aAH4e4pRDGHa9rrF7eiXHiKf%2BGxgSI8YyzoKn0UXatLpfHzLtUM7rBktqKz2WsghuuX38%2BfQAJxAFbAy7cbBVUZaH%2B4uGNELARfxWG28dli8nHaW42qx%2F4OOD8E%2BePNV5jep8aWHGV4vmqZ02zMUMPzykk35jl1gv%2Fckss95AiqPRqf4XftCfQOICwO3EaanWpW0%2BzwOVUJrRiMsj2ite%2FShj9u3yb%2BkEV%2BQOBIgqrwEt9y2yBALHVhjEfPbMiGw6z8Gps7flbMdoeQ9TmmuYEQSWuFE5N33FekZl5kTEO8MMgRoF7uzV3Wu%2Ft6g1bEhwy7xqkBVCwRutYmYAw4Z38vAY6pgH3yf9h9feG9DC%2F17Vwr4TZ4AQxkqA5dM5HWEtBejl2tvx%2F9Ci7PoON%2F3VHvlIlYWyqvJKN8iktcE%2BZUG72GPM0Q7yvVtaBMM5VKtJxXo3YA6EQCR9DIoBE9pS8yxZAcM6rJ%2FiNLmpNV9hhjMK5yeZtjcNFs2VtBrWy%2FAyxWSWleU5YMFLFmgVKJLG2H%2B80jPoeGJs6K0QHVsYhRYl0IYXylUAXScoY&X-Amz-Signature=7a28f8c0b2597b4316232b7cb6ffd3a713cfee12ed37afe8f1309c3e6dd454f7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YQ2QHS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5t7E1xkm%2F0TYeUPHF%2B%2FH5Hv6Mfw%2BlQP3TMppZhH8AgAiAUcZpnb%2F5sub1kChWYT34l86SuEaBZ90UBcVRuLNBBzyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhngO3uR49pX%2FF9bRKtwDvDR15ZhF0W7NMst6oRGQut%2BY7i72fMwGAzoNHoEMXg%2FlrOfHEGhsLRkS%2B65gczIUREMVM7vGb%2BEfZDOzKiVLNhd2AcAjyLe8CbWxXyVXkvfVzF0pcqMprQ96zKLVmzSedOZicGBqZ7D87zax4FAuoeZ92tIZCKT6kYEAuLv4dCaL%2FRMvi7YtfG94zz7KPl53JS7lMFLKGXDtlkw46PDcLHEI8N8Mbhaqu5OTADAyIlGKSLWSu9jSzArUK7duAWGjlfWUfid3vl91euLJ5Ze58DgBUmYJwlUoIkmP9mvkJ6aAH4e4pRDGHa9rrF7eiXHiKf%2BGxgSI8YyzoKn0UXatLpfHzLtUM7rBktqKz2WsghuuX38%2BfQAJxAFbAy7cbBVUZaH%2B4uGNELARfxWG28dli8nHaW42qx%2F4OOD8E%2BePNV5jep8aWHGV4vmqZ02zMUMPzykk35jl1gv%2Fckss95AiqPRqf4XftCfQOICwO3EaanWpW0%2BzwOVUJrRiMsj2ite%2FShj9u3yb%2BkEV%2BQOBIgqrwEt9y2yBALHVhjEfPbMiGw6z8Gps7flbMdoeQ9TmmuYEQSWuFE5N33FekZl5kTEO8MMgRoF7uzV3Wu%2Ft6g1bEhwy7xqkBVCwRutYmYAw4Z38vAY6pgH3yf9h9feG9DC%2F17Vwr4TZ4AQxkqA5dM5HWEtBejl2tvx%2F9Ci7PoON%2F3VHvlIlYWyqvJKN8iktcE%2BZUG72GPM0Q7yvVtaBMM5VKtJxXo3YA6EQCR9DIoBE9pS8yxZAcM6rJ%2FiNLmpNV9hhjMK5yeZtjcNFs2VtBrWy%2FAyxWSWleU5YMFLFmgVKJLG2H%2B80jPoeGJs6K0QHVsYhRYl0IYXylUAXScoY&X-Amz-Signature=020c5924ff4b08dc709bfdfb4c4485873b83dcacc5d94ef9382696c475b2b94a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
