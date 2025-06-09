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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGUXAEV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYoxRLL%2BMslCZVRWTNjtZhOI8KQt7WTTK%2FkcGJJW1J3wIgb%2BZVeaKYGtwxDe%2B9ZuNEJt%2Fa1QgQ1tlFo24UXbqPgFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMu1TmkWuA3PExAUircA32XJXY10igFFMEuv5G8dO9dyCPdqOcv2MJC%2B87wdgeBOKOGWJON0PyhankqvDE7pueJoNbwHGwRfcTZSbTf9LVIGmQOYwahTjekZVFGuYU%2B4%2FWjIbR7QLw8qHsuytZV5e7T31Di88%2FUULpOOu%2BdaUWJxWa46E8jVI6T6ltLiY6iVYwWnCviekcXwVEXZYVx38z43SfvFWkTC%2BwVmptwXUY3TG0wJam5l5ld14YjvC6RADc6il%2BKsM%2Fo8Xjlk6b2DD%2FuIC6nIl5PMHkPGfxrKYwfPuY6RXwApucPTs38grgS88Fk2ExfPmqOwEv5HxRee1yFfE59qgXyk%2BodOhQXBo9oF%2FOfKGXPckdKUrzKAVgt82FRoV4%2FSU%2FCf5LO100wg5p1LYiz6r4U7PgZRRwq%2BZZKwMG9x%2Bh5kRVhAPNmCcqbyw1Q0YWFNbqOikhvcfqkzSbsG4QhFpeI3cofExw7nu5xTwvxogNrOY9yWnflxcNG1qr5LmK3gFSgaYjSl%2FuEr0im0V89qr9kLt5Z7f7Xz1i2WyACzJH8sd9MH%2B3VrJHBvNyDXaGkiTYDBpVI%2FtGFL%2BYMcnvu0SvpRjuFJTOkDMBFqh0RYaPjI2wNObxtF710BRw%2BproQMOVLAgNPMJ%2FumMIGOqUBbLCe3DoHn1UeVcuZWdFzksQmoii2IhclxXR4SrDheMd3k3Yg9kwUCuLV1vmdt%2FKV52ahslZSk5SZfR%2F%2FjVBRaUgEkhMLZyjZYWGX1ww4sCm2cbWr63z3%2Bq%2F2mtkciGTAPNPchFSYimxLF58PNWLtgBUOWukOQ8Gygr%2BZKXQWVjKlfHAbI0NLnZ2LwhUbypyB26umd0MsBpWqj8SFl%2FoM5lBEZEhh&X-Amz-Signature=05e04db6c6f913429515ea46b8cc2612f3844e3cda976c86c00d38c2bedbaeef&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGUXAEV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYoxRLL%2BMslCZVRWTNjtZhOI8KQt7WTTK%2FkcGJJW1J3wIgb%2BZVeaKYGtwxDe%2B9ZuNEJt%2Fa1QgQ1tlFo24UXbqPgFUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMu1TmkWuA3PExAUircA32XJXY10igFFMEuv5G8dO9dyCPdqOcv2MJC%2B87wdgeBOKOGWJON0PyhankqvDE7pueJoNbwHGwRfcTZSbTf9LVIGmQOYwahTjekZVFGuYU%2B4%2FWjIbR7QLw8qHsuytZV5e7T31Di88%2FUULpOOu%2BdaUWJxWa46E8jVI6T6ltLiY6iVYwWnCviekcXwVEXZYVx38z43SfvFWkTC%2BwVmptwXUY3TG0wJam5l5ld14YjvC6RADc6il%2BKsM%2Fo8Xjlk6b2DD%2FuIC6nIl5PMHkPGfxrKYwfPuY6RXwApucPTs38grgS88Fk2ExfPmqOwEv5HxRee1yFfE59qgXyk%2BodOhQXBo9oF%2FOfKGXPckdKUrzKAVgt82FRoV4%2FSU%2FCf5LO100wg5p1LYiz6r4U7PgZRRwq%2BZZKwMG9x%2Bh5kRVhAPNmCcqbyw1Q0YWFNbqOikhvcfqkzSbsG4QhFpeI3cofExw7nu5xTwvxogNrOY9yWnflxcNG1qr5LmK3gFSgaYjSl%2FuEr0im0V89qr9kLt5Z7f7Xz1i2WyACzJH8sd9MH%2B3VrJHBvNyDXaGkiTYDBpVI%2FtGFL%2BYMcnvu0SvpRjuFJTOkDMBFqh0RYaPjI2wNObxtF710BRw%2BproQMOVLAgNPMJ%2FumMIGOqUBbLCe3DoHn1UeVcuZWdFzksQmoii2IhclxXR4SrDheMd3k3Yg9kwUCuLV1vmdt%2FKV52ahslZSk5SZfR%2F%2FjVBRaUgEkhMLZyjZYWGX1ww4sCm2cbWr63z3%2Bq%2F2mtkciGTAPNPchFSYimxLF58PNWLtgBUOWukOQ8Gygr%2BZKXQWVjKlfHAbI0NLnZ2LwhUbypyB26umd0MsBpWqj8SFl%2FoM5lBEZEhh&X-Amz-Signature=ee84c481372b6dcac0df212042368dc80229e843534f96be5d2a298dead16659&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
