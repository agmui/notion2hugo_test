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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJN4YNN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBhGdZpB83Rnk9HNGXztxtxaUklcgcqXKLW73sLIL9a8AiAoaTXql4UtVbn122jXeluyu1fwKF1Jnp21UWyEE%2BrdVyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqeHzzGq5pf2XYRfmKtwDfoXjFPLvgOIjvqfJaVAH4ojlCGKzUCH%2FdAWFKWYuUtwF30OtcLh8lVHhMABOlaA2146mpOmNG95iqQN8QpRe0VG%2BD3RRdO2c8GEDwhu9AzCF61hDuYSMpmhvP5X0FFC03rJwp0W6lNm2ug6tD%2BQjvlX9C8M%2FdGcOpf4AjsTxt%2BY69wbGPxg2rjl2yqa6MIF7D4sq6z%2BoBxhIQWEvcnuBMF6ocbFFMsZiTPvVzbYmlIapJTKvS0yA8EbwwAxvPanckliKmntTFeknWtDjlycWIbUysBnvrdiD4B3q9Opo5GEZ01fuvNIXW3TABA4kAreJA73CPGm22gS%2BsNfzJnzWPW48EtMT7ksUFNe8YOkkVsNR8PQWQjtfIwobkVYXN5WdTrAraIhpVWiw3ZQAMLxz9NM5n3vN%2BZvuayQGVXuLY1cYBH7eVFid96SQEiHc6UimVTMkS59GYtMN97E9DFGY2OApVOVQNTC2XPCbc0Gt%2B1ouZTq6tmHbUPQA%2BaXMcYEildcS90oImiNgHQjk73933XI42tQVpDCUZAzyALD239D8Utxo0F663M%2Fo7gK594t1j165Lwxe%2FUA90fUdgPe9iULwMp%2F1LiQ%2Fz%2FZJ72uASGYsKtTcUeBCQtRvVtswwZjZvwY6pgFfS6HJSi4xjw2ZSjuKaVXwnKjITStt0tTgXTTeIe%2FNs%2FFScC2W5alWy8fHzKW%2F7TavL98blE6eyldGQDUq4hkVra1xqcJoSCX6TMKRGrARanomFTOiVZ6W26Af%2Bkxvbmk%2FEFPM0h%2BxYDlFQM1vEnDvuCy%2BGA56DuPvntlg%2B5hop%2FSTJJT9GWOr4lFdXEHIVvi35F%2FZfXEOEQYSs1AuC7KElkHxf9l%2B&X-Amz-Signature=f4c4f2d3439142ee5cb89b21212519d07c9a606cc6455214f8b44c88cf12c91e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJN4YNN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBhGdZpB83Rnk9HNGXztxtxaUklcgcqXKLW73sLIL9a8AiAoaTXql4UtVbn122jXeluyu1fwKF1Jnp21UWyEE%2BrdVyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqeHzzGq5pf2XYRfmKtwDfoXjFPLvgOIjvqfJaVAH4ojlCGKzUCH%2FdAWFKWYuUtwF30OtcLh8lVHhMABOlaA2146mpOmNG95iqQN8QpRe0VG%2BD3RRdO2c8GEDwhu9AzCF61hDuYSMpmhvP5X0FFC03rJwp0W6lNm2ug6tD%2BQjvlX9C8M%2FdGcOpf4AjsTxt%2BY69wbGPxg2rjl2yqa6MIF7D4sq6z%2BoBxhIQWEvcnuBMF6ocbFFMsZiTPvVzbYmlIapJTKvS0yA8EbwwAxvPanckliKmntTFeknWtDjlycWIbUysBnvrdiD4B3q9Opo5GEZ01fuvNIXW3TABA4kAreJA73CPGm22gS%2BsNfzJnzWPW48EtMT7ksUFNe8YOkkVsNR8PQWQjtfIwobkVYXN5WdTrAraIhpVWiw3ZQAMLxz9NM5n3vN%2BZvuayQGVXuLY1cYBH7eVFid96SQEiHc6UimVTMkS59GYtMN97E9DFGY2OApVOVQNTC2XPCbc0Gt%2B1ouZTq6tmHbUPQA%2BaXMcYEildcS90oImiNgHQjk73933XI42tQVpDCUZAzyALD239D8Utxo0F663M%2Fo7gK594t1j165Lwxe%2FUA90fUdgPe9iULwMp%2F1LiQ%2Fz%2FZJ72uASGYsKtTcUeBCQtRvVtswwZjZvwY6pgFfS6HJSi4xjw2ZSjuKaVXwnKjITStt0tTgXTTeIe%2FNs%2FFScC2W5alWy8fHzKW%2F7TavL98blE6eyldGQDUq4hkVra1xqcJoSCX6TMKRGrARanomFTOiVZ6W26Af%2Bkxvbmk%2FEFPM0h%2BxYDlFQM1vEnDvuCy%2BGA56DuPvntlg%2B5hop%2FSTJJT9GWOr4lFdXEHIVvi35F%2FZfXEOEQYSs1AuC7KElkHxf9l%2B&X-Amz-Signature=6fe601c85f9a59bc78ff0848b8fe30eeaea386b64dc393d6f9a056255e4622c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
