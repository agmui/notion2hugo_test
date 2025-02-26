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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2EL6CCY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BylEvzZXpBmVrxj9yQPSkN13R%2FsxrT5aQUyfE3eLS5AIgKL4Fl8JoFr06exVyvHu1KfDDk6e%2BOZnK30UQYomFE%2Boq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFSoPtSLZNeA0rcPxSrcA0TCw7IBRSrhZfOGw6yUE%2B3jXZ0hjkUbJ0VpBCrd2cXN4ZP%2BzX%2BYSueWKc6Sgfs7T6KJTbHt%2F0qZEiH0U%2B%2FFAoJH%2BLWAKv%2BXYA5pG5BAM0pMS0HsEWpE%2FLRIZ9FgQMOzmU6JQwdBqwiFVdKJHztgnQg%2FCwALHD%2BaZwjOCDZfmrWDWW5pVDL230KKNrPQAv4HiIqosAt5XEU%2FafhcVZsWI5p2CQ1Crujv%2F%2BRMgz61rX4ORYFYlJ3jRfXIWeFkbJ1ISpgkaPa%2B6jpBucPX4JZSpSzOSrj1fI8bdTbWnlqgLpxBJYriehg%2FB969D7xgAZS59P%2FZVA9Ai7CPH14UmAO0Ig%2Brx7LhLl9x2P8UtolqK8i7cikuSXl%2Bi21aaUk%2FTFjV26FrccFLN13Gnzl2Hbpy%2F%2FOOlML7rv8QrOlaEf6Rp%2Bs%2BuI4rgMQFtqsYUwJqMHjQsTFjOJNdwlgFH16041Hb1g9bxndbNAWW%2Fr3Z7EFfKyDBAOS8RmbMaVRycEKjH9TbyYvuO7gk3mgLsdsbWdef0JgmIteMd1lDruy0AmFVyFSI0yzcbo1BU6Ed4y5R1NnGtW%2FB%2Bsmf%2BZyaLp3%2FKZGOpxJ%2FAIGIfDMECX0QV5xrBQYF1o4KGwHKddRruufwMKG9%2Bb0GOqUBzSvIj5pCs4KnTmvxr01THshYD%2BPi2x0lrRjIvnWIxWwXU91bTSCgw8dOI3QRXpAPHOhRorkJ1UPASNlAmbu55dyxgVqzo4j6qXuXqrunvn%2FONLwsBlyPMXlVYJBXumewa7Y0%2BeM130cuHnXssGKrWTNzdjR%2FJB2Jg70NDd5FwEwYOpuH3G7XdAUAjusOkQYb4NT624zsYOm%2FGgWenRbQggLI2uQM&X-Amz-Signature=b28303ed5df7b844c3d8aa268f5b6c18b2c2371876f6ebb47647c6f35a7b2a76&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2EL6CCY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BylEvzZXpBmVrxj9yQPSkN13R%2FsxrT5aQUyfE3eLS5AIgKL4Fl8JoFr06exVyvHu1KfDDk6e%2BOZnK30UQYomFE%2Boq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFSoPtSLZNeA0rcPxSrcA0TCw7IBRSrhZfOGw6yUE%2B3jXZ0hjkUbJ0VpBCrd2cXN4ZP%2BzX%2BYSueWKc6Sgfs7T6KJTbHt%2F0qZEiH0U%2B%2FFAoJH%2BLWAKv%2BXYA5pG5BAM0pMS0HsEWpE%2FLRIZ9FgQMOzmU6JQwdBqwiFVdKJHztgnQg%2FCwALHD%2BaZwjOCDZfmrWDWW5pVDL230KKNrPQAv4HiIqosAt5XEU%2FafhcVZsWI5p2CQ1Crujv%2F%2BRMgz61rX4ORYFYlJ3jRfXIWeFkbJ1ISpgkaPa%2B6jpBucPX4JZSpSzOSrj1fI8bdTbWnlqgLpxBJYriehg%2FB969D7xgAZS59P%2FZVA9Ai7CPH14UmAO0Ig%2Brx7LhLl9x2P8UtolqK8i7cikuSXl%2Bi21aaUk%2FTFjV26FrccFLN13Gnzl2Hbpy%2F%2FOOlML7rv8QrOlaEf6Rp%2Bs%2BuI4rgMQFtqsYUwJqMHjQsTFjOJNdwlgFH16041Hb1g9bxndbNAWW%2Fr3Z7EFfKyDBAOS8RmbMaVRycEKjH9TbyYvuO7gk3mgLsdsbWdef0JgmIteMd1lDruy0AmFVyFSI0yzcbo1BU6Ed4y5R1NnGtW%2FB%2Bsmf%2BZyaLp3%2FKZGOpxJ%2FAIGIfDMECX0QV5xrBQYF1o4KGwHKddRruufwMKG9%2Bb0GOqUBzSvIj5pCs4KnTmvxr01THshYD%2BPi2x0lrRjIvnWIxWwXU91bTSCgw8dOI3QRXpAPHOhRorkJ1UPASNlAmbu55dyxgVqzo4j6qXuXqrunvn%2FONLwsBlyPMXlVYJBXumewa7Y0%2BeM130cuHnXssGKrWTNzdjR%2FJB2Jg70NDd5FwEwYOpuH3G7XdAUAjusOkQYb4NT624zsYOm%2FGgWenRbQggLI2uQM&X-Amz-Signature=729621036ff1c75a429964ae331faacd10b3ffd7768298231ec7f47c04541b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
