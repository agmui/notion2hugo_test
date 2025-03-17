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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX25LFJT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGrUQlgsO6IMyUbitNdRmCXD3L8XvwJU97rmzZxSnJnwIhAOJ7vfxJd8ikxNHdsMTbnX%2FwkgcsYU9urYEQIz4Gtq0QKv8DCEIQABoMNjM3NDIzMTgzODA1IgzSW4f9dgxu1q0oV24q3AMCN2guHBxdSIgUlvtnVzkCRt4kbB37Kx2WPjwzJ7nx8a7wHMBZB9Sl2d63KOLjZmg2awlDhYfgVt%2BCHYeepxB04Air01tpHgBB3SCTuCnIBkq9SUv8HGbOK3m7xcRekOpjVUONEL0gYqyJAgsozAt8%2FlUYycVsnvyBSdxx9jtxvlYFkmka88zv8THze7g0fKrvRllkf2atK9ATCqzc4zwj8B9ojb%2FQEB%2Bq7pceE6j73F49IpEBGg1SRSUxmEAfXSDjVqsTS8padGzC8Tbdzmjoseym2VpXUlGS6ETWH2ohkPK5UUAKEaXjvooGNUIGmpqaqpDJVqqiewOMQ8dG6gPnIQDOZFZDijHGfg5K2WNIDbnvqYtYC42mE5vQVkQVNrGPIY2nZfJ7VlaAzafX32RD2NVHyGV3lbqlJeKT33nJGQVnnvZUHcANpZK%2BlFbyBqhQNSg9PoaEbYMrfNZnRMqKWV%2BLyAeOZpWDrR8XJ3b1Ag7d17RnenunUu5e1MXHNReXc4JTE5xSwHL%2BCbCF0M44rogyB1wIwk%2FA7h3YrovZpOJsbEyC6TvgCIs540K%2BiPlVYyyYuEbOgPvuQIGFQvsGF0k%2BkrN53yC%2B9Bnio7kYuOYmU7REMYfjOgMq8jCYzt%2B%2BBjqkAY6fVMJzOkYgw9%2FjZAr%2Fgxlw1Oh145nNVoccqzZ6JeZ1zrwxTSqvsis5WYagQ49dNU5mUas3APHIvuZ9SSn87KRkmjKfiXbRjNyxao1x3FldRmjHAWczIdPiCyV9tvm5EDeS0P2fSTij3OJRtq%2B09X6EUxmWhHNaewBOqfLLm4oV9pecqnWB7InKbY6Eaez%2FLP9WhAu5B0iqzR%2F6vjp1QdYe4Lcc&X-Amz-Signature=11ac9700da5ccf4fc32b7ecc9305db0aa586c3512eff1998b189a2a393116a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX25LFJT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGrUQlgsO6IMyUbitNdRmCXD3L8XvwJU97rmzZxSnJnwIhAOJ7vfxJd8ikxNHdsMTbnX%2FwkgcsYU9urYEQIz4Gtq0QKv8DCEIQABoMNjM3NDIzMTgzODA1IgzSW4f9dgxu1q0oV24q3AMCN2guHBxdSIgUlvtnVzkCRt4kbB37Kx2WPjwzJ7nx8a7wHMBZB9Sl2d63KOLjZmg2awlDhYfgVt%2BCHYeepxB04Air01tpHgBB3SCTuCnIBkq9SUv8HGbOK3m7xcRekOpjVUONEL0gYqyJAgsozAt8%2FlUYycVsnvyBSdxx9jtxvlYFkmka88zv8THze7g0fKrvRllkf2atK9ATCqzc4zwj8B9ojb%2FQEB%2Bq7pceE6j73F49IpEBGg1SRSUxmEAfXSDjVqsTS8padGzC8Tbdzmjoseym2VpXUlGS6ETWH2ohkPK5UUAKEaXjvooGNUIGmpqaqpDJVqqiewOMQ8dG6gPnIQDOZFZDijHGfg5K2WNIDbnvqYtYC42mE5vQVkQVNrGPIY2nZfJ7VlaAzafX32RD2NVHyGV3lbqlJeKT33nJGQVnnvZUHcANpZK%2BlFbyBqhQNSg9PoaEbYMrfNZnRMqKWV%2BLyAeOZpWDrR8XJ3b1Ag7d17RnenunUu5e1MXHNReXc4JTE5xSwHL%2BCbCF0M44rogyB1wIwk%2FA7h3YrovZpOJsbEyC6TvgCIs540K%2BiPlVYyyYuEbOgPvuQIGFQvsGF0k%2BkrN53yC%2B9Bnio7kYuOYmU7REMYfjOgMq8jCYzt%2B%2BBjqkAY6fVMJzOkYgw9%2FjZAr%2Fgxlw1Oh145nNVoccqzZ6JeZ1zrwxTSqvsis5WYagQ49dNU5mUas3APHIvuZ9SSn87KRkmjKfiXbRjNyxao1x3FldRmjHAWczIdPiCyV9tvm5EDeS0P2fSTij3OJRtq%2B09X6EUxmWhHNaewBOqfLLm4oV9pecqnWB7InKbY6Eaez%2FLP9WhAu5B0iqzR%2F6vjp1QdYe4Lcc&X-Amz-Signature=f92d7daa75569ebd01e194305e7b5b1d82e6157d9f167c266729e2463c862a49&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
