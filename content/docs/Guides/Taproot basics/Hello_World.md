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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQTH2U3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDKwnmzizKQ5E0IXvO9jg4Wq6%2F6ntC1DYVCb1gwEGglVgIgfV8PMDE00RFAUywvMWPwlSrUS%2FUyC6gURB2MeuFAE1IqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJdvXHQWuQsUBBbJyrcA0hFUfGBY0LSD0Q2A9k%2FFRIMUoeQTkEkLGC9OXAq1yMzpBjjeOX9YqopJ8TuYtKD4EG87q4p1WYK%2BXonoVDna7bKKcKCI7bwje1DdUlH7S6qcYfL%2F%2BuIGjKLjkon3oi39Ywtp49e%2BhD1yKx06Y44hgFI9xn4vtuUFH%2BJ%2FtFwetf1%2Bq6%2Fo24dFINVSYez5a8FaY0zgw%2BMYmhdm6zKDoZZj4zhARwAQOWegiPy9kEun1lL5nZmq5rgZMGtWxdm0hbiSC3o0O6CsbXL7sMP3hPEWuRcuaE76avRY6%2FGiNnyCJ7AASXXsrj%2BsG7Xs%2F9vG7bVgT3n03oZds5rfriAj7A5KO%2BT36i0L0hIoNPPccx2yGQLXgnKsw3MpQbiM2eHUD5z701PhdrVsBYQSUqGbLsCY2gY8U%2FR9SxFjWMym8gfzSlniUcKoCGRy5ZeaoYK6SB2rphOuEUB8wn83rN1NxudBnRn%2BZSeGDf1xcSvwdzvAVsnMkWnL2SxUzTa4jaIofM8%2Fd2CvhKrTKvQM88Eyt%2B7n8V8JB1qAnGvoDrozm6ITz12YTiDMqLrsHsXykjQp9LAZlnquNc%2BnkBmSWIHhSPqcumdfm65k2Zy1IqATUAn2Dxjix41f4pdNKAB%2BSJwMO%2Bi0b0GOqUBFYtXIw2uwI25ikltZcBfscBB0NeW3vkAH2hMpi9hTUa6uFb1Apmk%2BDapE7GMtiWKPNl%2FmlCnEmCwXbOBmkEkUQhON0E8mS87oq2sS3ID8PqC8F7CIbaIkhJWcyjUsxWRQzJ81wF%2Fi0qMiRvak%2BSZRacJtzTsvq34kjEvGFGGM%2Fjt4cIUE6ZdLHYUq%2B%2BKRGaaX%2B6fdC70FFXJhltY%2Ba0A87UjiKGM&X-Amz-Signature=d21862b8d003c1e1ae25f05b3d2d872296421889037b64a644d06134b48ee46f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQTH2U3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDKwnmzizKQ5E0IXvO9jg4Wq6%2F6ntC1DYVCb1gwEGglVgIgfV8PMDE00RFAUywvMWPwlSrUS%2FUyC6gURB2MeuFAE1IqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJdvXHQWuQsUBBbJyrcA0hFUfGBY0LSD0Q2A9k%2FFRIMUoeQTkEkLGC9OXAq1yMzpBjjeOX9YqopJ8TuYtKD4EG87q4p1WYK%2BXonoVDna7bKKcKCI7bwje1DdUlH7S6qcYfL%2F%2BuIGjKLjkon3oi39Ywtp49e%2BhD1yKx06Y44hgFI9xn4vtuUFH%2BJ%2FtFwetf1%2Bq6%2Fo24dFINVSYez5a8FaY0zgw%2BMYmhdm6zKDoZZj4zhARwAQOWegiPy9kEun1lL5nZmq5rgZMGtWxdm0hbiSC3o0O6CsbXL7sMP3hPEWuRcuaE76avRY6%2FGiNnyCJ7AASXXsrj%2BsG7Xs%2F9vG7bVgT3n03oZds5rfriAj7A5KO%2BT36i0L0hIoNPPccx2yGQLXgnKsw3MpQbiM2eHUD5z701PhdrVsBYQSUqGbLsCY2gY8U%2FR9SxFjWMym8gfzSlniUcKoCGRy5ZeaoYK6SB2rphOuEUB8wn83rN1NxudBnRn%2BZSeGDf1xcSvwdzvAVsnMkWnL2SxUzTa4jaIofM8%2Fd2CvhKrTKvQM88Eyt%2B7n8V8JB1qAnGvoDrozm6ITz12YTiDMqLrsHsXykjQp9LAZlnquNc%2BnkBmSWIHhSPqcumdfm65k2Zy1IqATUAn2Dxjix41f4pdNKAB%2BSJwMO%2Bi0b0GOqUBFYtXIw2uwI25ikltZcBfscBB0NeW3vkAH2hMpi9hTUa6uFb1Apmk%2BDapE7GMtiWKPNl%2FmlCnEmCwXbOBmkEkUQhON0E8mS87oq2sS3ID8PqC8F7CIbaIkhJWcyjUsxWRQzJ81wF%2Fi0qMiRvak%2BSZRacJtzTsvq34kjEvGFGGM%2Fjt4cIUE6ZdLHYUq%2B%2BKRGaaX%2B6fdC70FFXJhltY%2Ba0A87UjiKGM&X-Amz-Signature=d1ade34ca619ec497824119c6dcb571ddca64527aaf3e7730a3b783e3e38a02f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
