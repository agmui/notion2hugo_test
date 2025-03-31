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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HLNOQG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDT6L4W8bmX52FzPZCnOTUiXVeKhTUm6xnBHlBZFGOZQwIhAIFVNVsfX%2BjmTFbB9DnGad%2B%2BzYGcFn%2BFRcQd6VosPFd9KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMqUF5k2QYS0iA5G4q3AMKZNbKx35Kpb0EbiBUxryCCgg91WrFaPLdd7hgKqaog75EtppSnteVKVNx5P2lw4B%2B01d6ZYKqoMSiYPr2jBLFMInxnBQTypZLEV3Tf74aZ6ptPR08n6iJjX5cMaywNnCehcjKXtdC02aCahxWTv8D8KM%2BzROUZJAkvqHTMfIEW6I91MJx0SAQwP0PDN1MH3S%2FFePwHsfndLchHae3N%2BsxPMjU43QRp2AxqtHcx%2FTQjvBoJe1yYImNDT600Jo9BLaoqLYD4%2FcaF0rWnoO2Sodc7t4PGdWTsBIr7E1AkNWVrSgF31kZZOC8CvPMG6pRp9CsVh1La4EugQpSoJEOJhKe2OoGTWFVeoMG4%2FLk1%2Fl8OQ%2FahYXOX5ddC9%2BFdwtmdiqf1jpO96%2BVDTYVBf9uDU1E1cq97WsJruYccMrmxBzSHkcupdZGYBnf0luHzQlrvfHG7YGDZaqA8E3A%2B%2FF8x58PPcvvwZCNldY%2Br8uLIuyc3hx6rjSN32mW8dfpZAnCNvXSubf72%2FEFwPhz76Q9Uph9biaApuH7Qs62yimGSFQ0Qhp4Vs7B64Oy3VLM0pM9QSVS8z8nvRwAKdQDwjG2RQkKPgmgiSs581nb%2F1RgbA4MBxyc04tRfh%2FMpAb0JDCi5ai%2FBjqkAaOWcgDFhBsuLq2JXe2wOAgquwxHiz1%2B0%2FyIN2oQyp99JAbdPZtX2UQQLrMcMmKCZtSv0fpcsYo1bMpY%2BgLQPA1HQIR7qi3WDHY7HqyXY8YQ9ULfTZrFnIpSJa0vxW%2F6HBjpNxXrKGhavF9OsIi1SDrwzfpIxQThLrJoO0zxABVcWzieQAr3wIiNe%2Fo%2BILyGN2j1ppZJwle0ZV8r0niiW1y%2FawTH&X-Amz-Signature=29c8c92f4e3d83356a4002cb159867c99ef3db4849b60d6db74f64f0dcdc98b8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HLNOQG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDT6L4W8bmX52FzPZCnOTUiXVeKhTUm6xnBHlBZFGOZQwIhAIFVNVsfX%2BjmTFbB9DnGad%2B%2BzYGcFn%2BFRcQd6VosPFd9KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMqUF5k2QYS0iA5G4q3AMKZNbKx35Kpb0EbiBUxryCCgg91WrFaPLdd7hgKqaog75EtppSnteVKVNx5P2lw4B%2B01d6ZYKqoMSiYPr2jBLFMInxnBQTypZLEV3Tf74aZ6ptPR08n6iJjX5cMaywNnCehcjKXtdC02aCahxWTv8D8KM%2BzROUZJAkvqHTMfIEW6I91MJx0SAQwP0PDN1MH3S%2FFePwHsfndLchHae3N%2BsxPMjU43QRp2AxqtHcx%2FTQjvBoJe1yYImNDT600Jo9BLaoqLYD4%2FcaF0rWnoO2Sodc7t4PGdWTsBIr7E1AkNWVrSgF31kZZOC8CvPMG6pRp9CsVh1La4EugQpSoJEOJhKe2OoGTWFVeoMG4%2FLk1%2Fl8OQ%2FahYXOX5ddC9%2BFdwtmdiqf1jpO96%2BVDTYVBf9uDU1E1cq97WsJruYccMrmxBzSHkcupdZGYBnf0luHzQlrvfHG7YGDZaqA8E3A%2B%2FF8x58PPcvvwZCNldY%2Br8uLIuyc3hx6rjSN32mW8dfpZAnCNvXSubf72%2FEFwPhz76Q9Uph9biaApuH7Qs62yimGSFQ0Qhp4Vs7B64Oy3VLM0pM9QSVS8z8nvRwAKdQDwjG2RQkKPgmgiSs581nb%2F1RgbA4MBxyc04tRfh%2FMpAb0JDCi5ai%2FBjqkAaOWcgDFhBsuLq2JXe2wOAgquwxHiz1%2B0%2FyIN2oQyp99JAbdPZtX2UQQLrMcMmKCZtSv0fpcsYo1bMpY%2BgLQPA1HQIR7qi3WDHY7HqyXY8YQ9ULfTZrFnIpSJa0vxW%2F6HBjpNxXrKGhavF9OsIi1SDrwzfpIxQThLrJoO0zxABVcWzieQAr3wIiNe%2Fo%2BILyGN2j1ppZJwle0ZV8r0niiW1y%2FawTH&X-Amz-Signature=cdef8ae22494b981ce1918aa226128ba0b379f264b719f67f50f0d11bf4a6c81&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
