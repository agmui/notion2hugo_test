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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMJAST7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAlfEbvWbNuKJ788MLQpSmpDA%2FJrdUh2uNlLPhgf3bOAiEAwGjztozr36cnYeEBp4WRDqH0PKIvtHP8knHdTME5MIIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3d2sxG%2FdcRgLca%2FircA6kkb2XmC1hLJIzYzQr1uytDx88OrB%2B1ej89uGxc%2Bi%2Bi1gBclGToDQBpT76bf0eN2IxvDGPyHhk0iH%2FJtY35IQs3ITC7pQXMVuG4ql0ExT57IMfPic4gLxBPAnP%2BLJ9In%2BD6ZP6%2B7OgzsdhH2cYXhihPw0OYN%2BMwi0wfWD5%2BdDVsVcALZxgorSawQqCJ40ZzKvUPyXzO07rPDzDgv3hYMmLyi%2B2%2Ft6gbmvzT%2B8m38AoR1V9vCyUPOzsJZuf88LIGswWbEkQ8BhQ%2BFDnDMCxdYpahnUNsg7Os6Ofget%2B4DRYafrGppcjYqcbdS3kgCHmWCNdDtR3u4vcU2LhvC4DtnI8cjUXjZ%2FdHbP1H59YJX0bW7oSNdhwuA9rYZdXwYw0NArJZA6CvpSmHtnW5JqaC8kKK0XdCyXq642tnDE7AagfCe7FtRuscU8Vt5RvJdZXiW8uzOwLF659zmwEsCfluoFuN0UiGLNG4LOih2qdW2owKEDXzMjcowZWYmUh0nQeuOuIIrlI%2Fw82Kb%2BFEL0MyR08QwRlb7KEGF15Uibvez7dYtV0UUA1cxNRp1i4g1gMKtUgU2YJxJD0mDB40oGfm4QzQgnn0paV0yy7wI1LDj1VmTp3O2oE%2BQ2b99kjwMNbo7MEGOqUBzCrtfDt3nLADIAMTwjnhJqiCO7ZuZly0ZSG3IAT9zzTYZXmoTZ6CpWhpGd2Zm8kb7wSPMaiasUBjyzF1Q9LmyYVGXgBi7Zc%2BvPYo2U%2BKz%2F%2Fgga1ls2uQkDG7TYUNk6KRxB9NFjLGXHMP08I3YwOj6%2Bh9CmWa0CX%2B1r3yjko3lq7xOH3IOQdTaK3VoBUZ5vJA8BauZzxUF5UGQS7KY6l6Xjsqk%2FWV&X-Amz-Signature=0b6092711db5e98dd7e4c4eb43a2d0a957a73e16e73c7e44f859e80dad1d2dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMJAST7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAlfEbvWbNuKJ788MLQpSmpDA%2FJrdUh2uNlLPhgf3bOAiEAwGjztozr36cnYeEBp4WRDqH0PKIvtHP8knHdTME5MIIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3d2sxG%2FdcRgLca%2FircA6kkb2XmC1hLJIzYzQr1uytDx88OrB%2B1ej89uGxc%2Bi%2Bi1gBclGToDQBpT76bf0eN2IxvDGPyHhk0iH%2FJtY35IQs3ITC7pQXMVuG4ql0ExT57IMfPic4gLxBPAnP%2BLJ9In%2BD6ZP6%2B7OgzsdhH2cYXhihPw0OYN%2BMwi0wfWD5%2BdDVsVcALZxgorSawQqCJ40ZzKvUPyXzO07rPDzDgv3hYMmLyi%2B2%2Ft6gbmvzT%2B8m38AoR1V9vCyUPOzsJZuf88LIGswWbEkQ8BhQ%2BFDnDMCxdYpahnUNsg7Os6Ofget%2B4DRYafrGppcjYqcbdS3kgCHmWCNdDtR3u4vcU2LhvC4DtnI8cjUXjZ%2FdHbP1H59YJX0bW7oSNdhwuA9rYZdXwYw0NArJZA6CvpSmHtnW5JqaC8kKK0XdCyXq642tnDE7AagfCe7FtRuscU8Vt5RvJdZXiW8uzOwLF659zmwEsCfluoFuN0UiGLNG4LOih2qdW2owKEDXzMjcowZWYmUh0nQeuOuIIrlI%2Fw82Kb%2BFEL0MyR08QwRlb7KEGF15Uibvez7dYtV0UUA1cxNRp1i4g1gMKtUgU2YJxJD0mDB40oGfm4QzQgnn0paV0yy7wI1LDj1VmTp3O2oE%2BQ2b99kjwMNbo7MEGOqUBzCrtfDt3nLADIAMTwjnhJqiCO7ZuZly0ZSG3IAT9zzTYZXmoTZ6CpWhpGd2Zm8kb7wSPMaiasUBjyzF1Q9LmyYVGXgBi7Zc%2BvPYo2U%2BKz%2F%2Fgga1ls2uQkDG7TYUNk6KRxB9NFjLGXHMP08I3YwOj6%2Bh9CmWa0CX%2B1r3yjko3lq7xOH3IOQdTaK3VoBUZ5vJA8BauZzxUF5UGQS7KY6l6Xjsqk%2FWV&X-Amz-Signature=efe463c6ba33b02932052412178c6ec29bef531e3df624b6d3617fcd7bd58e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
