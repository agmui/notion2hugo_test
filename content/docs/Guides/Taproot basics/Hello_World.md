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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z2CS2RT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbpvl%2FlF5tXNPpRXxP7cCMjQrNXHHWnCOlNyzQoHFTPAiEAk90%2FcuwICyJ06ooYU5ArgKsYGMgfiJP5bIsqKf5t1i4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDETrh4TSHLz15SzwySrcA2lAy5nMQimMspRGqHweDcT%2BLFTX43vQJR%2F2UIE30WtF9l5TIJtI0XUH2yFClrC4BlBFFk9FzD0vk2Om4EaC4HGJ4bPU4izfXaISU19V9JEJ1RRbcyz6LJvYu5w9NaamQSmYOD%2Fe5dkuBj4S0L44Oe3QlTHnwQtEge%2BW4P9O1CunOg7hMiGpkxctNdeMcn34CjY7nVrDlcUL5cLx28mrotBl5ZW7s8Cu7KM06pCviUkC5IGSStCVN%2F5moFIfrO4VKqJkm6liykkuM7cYuf9D1UlSgxC76%2BTGiM67NotVJ1UmVrvI8iEY8Wm5%2BBssKIIrkR86%2BThCt%2Ff%2Faaaeye%2FerPjVijm1u4nfHkRAn1hLT%2F5VqREb4ALCke%2FSlYXWWtyKTtBZDCH8ZAGkyZmZyn2NBRGzeLPt2SD86r%2FJ1YYrc3lD0b7y5azNdnjwz87r8qiK3nS3PLsZBEJAplvxVh%2Flms0fTBV3Mag9rpqxxOXco7rJOu1Mxsj3ngguesJx9UrtwCHhYq9W0Ky%2Bj5fXPKlBQIcs8MKgCSM3Y7srSk3lhTKz9h3rqaPks0LfGk8piFvdHoCy0DkI5TXFyZ5uTHse5zJi8tDrEPJmkLdsLAkFm4w4PhjeyGhuCwIA0pTCMM%2BRjcIGOqUBkrMmKwgOQCT%2BAg02F7XktUY3Tv48dw1eJM6Iq3RZBtxxo1wf2y4Alck0MjhwTg%2FucBjy7fyKcwR8UZfK9RT%2FKb3yLSYNEszkGNDJ1HJ67U7rMb95nQEtFvple%2B2FW6HxmfO6jCirQR8NygkS4n0cpq52ZHlGneuEK%2BTstbPmJXxNNdVhyg%2BqLRCk6yGKa%2BfYZgHnrqi9FzHZkRsKOGXzTJibCUli&X-Amz-Signature=c58c98d15fc1b589dda23f4ea934f97c903f0185f498535211dde5fdbc6394a7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z2CS2RT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbpvl%2FlF5tXNPpRXxP7cCMjQrNXHHWnCOlNyzQoHFTPAiEAk90%2FcuwICyJ06ooYU5ArgKsYGMgfiJP5bIsqKf5t1i4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDETrh4TSHLz15SzwySrcA2lAy5nMQimMspRGqHweDcT%2BLFTX43vQJR%2F2UIE30WtF9l5TIJtI0XUH2yFClrC4BlBFFk9FzD0vk2Om4EaC4HGJ4bPU4izfXaISU19V9JEJ1RRbcyz6LJvYu5w9NaamQSmYOD%2Fe5dkuBj4S0L44Oe3QlTHnwQtEge%2BW4P9O1CunOg7hMiGpkxctNdeMcn34CjY7nVrDlcUL5cLx28mrotBl5ZW7s8Cu7KM06pCviUkC5IGSStCVN%2F5moFIfrO4VKqJkm6liykkuM7cYuf9D1UlSgxC76%2BTGiM67NotVJ1UmVrvI8iEY8Wm5%2BBssKIIrkR86%2BThCt%2Ff%2Faaaeye%2FerPjVijm1u4nfHkRAn1hLT%2F5VqREb4ALCke%2FSlYXWWtyKTtBZDCH8ZAGkyZmZyn2NBRGzeLPt2SD86r%2FJ1YYrc3lD0b7y5azNdnjwz87r8qiK3nS3PLsZBEJAplvxVh%2Flms0fTBV3Mag9rpqxxOXco7rJOu1Mxsj3ngguesJx9UrtwCHhYq9W0Ky%2Bj5fXPKlBQIcs8MKgCSM3Y7srSk3lhTKz9h3rqaPks0LfGk8piFvdHoCy0DkI5TXFyZ5uTHse5zJi8tDrEPJmkLdsLAkFm4w4PhjeyGhuCwIA0pTCMM%2BRjcIGOqUBkrMmKwgOQCT%2BAg02F7XktUY3Tv48dw1eJM6Iq3RZBtxxo1wf2y4Alck0MjhwTg%2FucBjy7fyKcwR8UZfK9RT%2FKb3yLSYNEszkGNDJ1HJ67U7rMb95nQEtFvple%2B2FW6HxmfO6jCirQR8NygkS4n0cpq52ZHlGneuEK%2BTstbPmJXxNNdVhyg%2BqLRCk6yGKa%2BfYZgHnrqi9FzHZkRsKOGXzTJibCUli&X-Amz-Signature=0856378f870a125aecb635cd05ce5173368379a3a070ec062ce7bbd1330efe62&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
