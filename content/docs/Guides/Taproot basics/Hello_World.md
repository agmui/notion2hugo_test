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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPOZ6QI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCo%2FsWCYMjv41CpMlaeMYIrycCIsylQzAnun0Uwh2%2BBWAIhAN%2FCTuXy2jJkJdWJ1%2FkdEQ8SftGEDmvgADciaLWLr7lhKv8DCBAQABoMNjM3NDIzMTgzODA1IgzCczCw3b1hdQuy6jUq3ANa442UtYJIzwyVb%2FaJ26wfZlhrCot2hCO%2BnyIKIPQOiAFWKPd%2FA%2ByD065HLEQtM%2FZrU0ETdpwoZf9v13UcA6Nevn6GsFMr%2Bg8t8YMuracxTU6YC4uwQAWl8iRlO3qdpDBT5swrTcT%2BCdqV2RTQm8tpL3YvhJ4RRNAVbBZopyMVC8NHlZ2MXdOGGbrJqrCUsUiKyWhKOHHeuwq6VeNpC9kESpSo8kJA97vsgPVI5d%2Be75eztLvt%2BAO0%2FfEWjnbOrYhM9yp%2FlhrJvvuX2BcWxws%2FA32Q1dlTjYglKR1oWOp9Pab5WR%2FStQ8DaPuoUg3xaP68Cyxz%2FvqaaRGe42u1JR9m8d2wP87RXFTsRVZclEwNvNYOyZTXYbjN4tgUCICJksiqalMe4LxFrpc4mBiHcLqYMtPits4nvVV1%2FCt0P4dnv7OnAjvJSES1y4ZT7MGQC25mm3kxiMF%2FvI9G79rCAmMCAXtd%2FydtwGfWpUBTqS9Uu9V9%2FgpGPdoNxlEz37rkXUgSXtXJMnXAH%2BgadFeQ7%2BKddiyhrugjdfJ2gp%2FsVr%2B7BOJHamM5DiE0Skxlo%2BpXRfHF5NLg2dex39TnHY2Zc%2Brn5H%2Fag%2Fudfng48ArJVi3dX%2BjrHaY3wicNsRxjTjCU4MXBBjqkAbLfzBBV0zwsYX55MyqKYFPNjeCo6Pq9nqcCBJSI4%2BrYA4jZSkmamPEp0ZZb8hPtx%2BYSlj%2FQoNlKC2JdvtCWz18oyYNfEP2t61RDaWlW0vwry1unctIO5wS2%2FbL7n4tro7tIWeSGbPk9iJhLXj9Lyv4GzBhpdIEwQNxE3BJdjmxLXx2SiCvDOj%2FzQ1jLw9DzCuBQ8bhOlhPRbpmfxoSu%2Fl%2BVxmOy&X-Amz-Signature=8351f6ce8a87a7c61f9dd15fe38c8b5034c23884b38145234cb9145e6637b7e5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPOZ6QI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCo%2FsWCYMjv41CpMlaeMYIrycCIsylQzAnun0Uwh2%2BBWAIhAN%2FCTuXy2jJkJdWJ1%2FkdEQ8SftGEDmvgADciaLWLr7lhKv8DCBAQABoMNjM3NDIzMTgzODA1IgzCczCw3b1hdQuy6jUq3ANa442UtYJIzwyVb%2FaJ26wfZlhrCot2hCO%2BnyIKIPQOiAFWKPd%2FA%2ByD065HLEQtM%2FZrU0ETdpwoZf9v13UcA6Nevn6GsFMr%2Bg8t8YMuracxTU6YC4uwQAWl8iRlO3qdpDBT5swrTcT%2BCdqV2RTQm8tpL3YvhJ4RRNAVbBZopyMVC8NHlZ2MXdOGGbrJqrCUsUiKyWhKOHHeuwq6VeNpC9kESpSo8kJA97vsgPVI5d%2Be75eztLvt%2BAO0%2FfEWjnbOrYhM9yp%2FlhrJvvuX2BcWxws%2FA32Q1dlTjYglKR1oWOp9Pab5WR%2FStQ8DaPuoUg3xaP68Cyxz%2FvqaaRGe42u1JR9m8d2wP87RXFTsRVZclEwNvNYOyZTXYbjN4tgUCICJksiqalMe4LxFrpc4mBiHcLqYMtPits4nvVV1%2FCt0P4dnv7OnAjvJSES1y4ZT7MGQC25mm3kxiMF%2FvI9G79rCAmMCAXtd%2FydtwGfWpUBTqS9Uu9V9%2FgpGPdoNxlEz37rkXUgSXtXJMnXAH%2BgadFeQ7%2BKddiyhrugjdfJ2gp%2FsVr%2B7BOJHamM5DiE0Skxlo%2BpXRfHF5NLg2dex39TnHY2Zc%2Brn5H%2Fag%2Fudfng48ArJVi3dX%2BjrHaY3wicNsRxjTjCU4MXBBjqkAbLfzBBV0zwsYX55MyqKYFPNjeCo6Pq9nqcCBJSI4%2BrYA4jZSkmamPEp0ZZb8hPtx%2BYSlj%2FQoNlKC2JdvtCWz18oyYNfEP2t61RDaWlW0vwry1unctIO5wS2%2FbL7n4tro7tIWeSGbPk9iJhLXj9Lyv4GzBhpdIEwQNxE3BJdjmxLXx2SiCvDOj%2FzQ1jLw9DzCuBQ8bhOlhPRbpmfxoSu%2Fl%2BVxmOy&X-Amz-Signature=717884fe9ffcaa3935fbcdcd8fec950d2aaa110b99adae768efc54ff2342d38a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
