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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WQIVTM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV933FZlxn7JpTvMw7JsLQ6trivFvxZbEm22AGM%2B%2BvbwIgMzCnz82jb7MOwYcss3aoris0DVx0B6zTjLfv5EBH9mcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMzVUbQNSTBvH4wfwSrcA2uyOA29vEBocaYYcHSKYswRbqtfUjZIwpA2qfMIUU9VBvQ2qls2RegHmBQVER9ivY2w4BDa9om4eN599SCnEYHZxUNuks%2FuZp1TvE9UjF7gsbCVvX0niJqLkDUOn6l%2BJ%2B1ywk9GaQHmgfO2GEC2YOlhbgoDgSxscijieIjzRZwsWS7IBMSYVJBfXhaSB%2B%2BiTJ2REt3Oiwb1nPTnEiUlpxASz7yWNRY%2FXq6id%2BNHC8C31NY1efBPZxpP6qPaiG6hySYSQ9TQT3%2BbGG9WE3%2FS8PjX7v3rMhcVKfDaZCFgZxr%2FXGfNudB9IdsmR1u3%2BdpW5JCvwHTh5ncx1i61b%2BhgkyrtNY4nQZQUmoFXlnZWHNaZjXRy%2B%2FmAJD5G7HDTrEAbkrRlNEbkfytDec%2BAuGJsv%2FbxWU7074M6SGlzkN7quw0%2Fhm%2BqCsM718QzsfnUvW21BiR7leVM1QmIWCapZZ3TMWYk%2FAVbclrNJHmp21WlQwrtNJz1ZyC8jVZJAYbin7ikRTAx1gkT2YtsSLRmCn2oMxvL6GtAxPSpRFBpr6i0QiZTmgTS0M1jWt%2Fp0OUEVJLL4W7rMaDOTfOQ1nWaqGPfLDaZW3qfzZVowe9z%2F6%2FfJjqlnwP4o3J8%2FlTfFL%2F3MMb1lsEGOqUBaxV%2B1VPIAtXdXjReGgBuR2GxJ1J4bEFvGp7Xe2eMEB8usJCOdexkimsZlcLnawDNpdZt5J4JrsohvATlAG1hMaf9NUI1W3MZwHTz1WHxYLlRbDEs07VAftFXmJWq5Ajl8hGzU0rTZLMSpJctU46yXwKkMb9C4%2BskBs2sSknM%2BE8WtQ4PhH5FFcxijfz6enucf53V7kNoihDwscmVy%2FhIwam1CTIi&X-Amz-Signature=ae56aadaaa432a4feea44b3da4ba1d7f22bafe70eb34d3d14471b47d89e0b81b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WQIVTM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDV933FZlxn7JpTvMw7JsLQ6trivFvxZbEm22AGM%2B%2BvbwIgMzCnz82jb7MOwYcss3aoris0DVx0B6zTjLfv5EBH9mcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMzVUbQNSTBvH4wfwSrcA2uyOA29vEBocaYYcHSKYswRbqtfUjZIwpA2qfMIUU9VBvQ2qls2RegHmBQVER9ivY2w4BDa9om4eN599SCnEYHZxUNuks%2FuZp1TvE9UjF7gsbCVvX0niJqLkDUOn6l%2BJ%2B1ywk9GaQHmgfO2GEC2YOlhbgoDgSxscijieIjzRZwsWS7IBMSYVJBfXhaSB%2B%2BiTJ2REt3Oiwb1nPTnEiUlpxASz7yWNRY%2FXq6id%2BNHC8C31NY1efBPZxpP6qPaiG6hySYSQ9TQT3%2BbGG9WE3%2FS8PjX7v3rMhcVKfDaZCFgZxr%2FXGfNudB9IdsmR1u3%2BdpW5JCvwHTh5ncx1i61b%2BhgkyrtNY4nQZQUmoFXlnZWHNaZjXRy%2B%2FmAJD5G7HDTrEAbkrRlNEbkfytDec%2BAuGJsv%2FbxWU7074M6SGlzkN7quw0%2Fhm%2BqCsM718QzsfnUvW21BiR7leVM1QmIWCapZZ3TMWYk%2FAVbclrNJHmp21WlQwrtNJz1ZyC8jVZJAYbin7ikRTAx1gkT2YtsSLRmCn2oMxvL6GtAxPSpRFBpr6i0QiZTmgTS0M1jWt%2Fp0OUEVJLL4W7rMaDOTfOQ1nWaqGPfLDaZW3qfzZVowe9z%2F6%2FfJjqlnwP4o3J8%2FlTfFL%2F3MMb1lsEGOqUBaxV%2B1VPIAtXdXjReGgBuR2GxJ1J4bEFvGp7Xe2eMEB8usJCOdexkimsZlcLnawDNpdZt5J4JrsohvATlAG1hMaf9NUI1W3MZwHTz1WHxYLlRbDEs07VAftFXmJWq5Ajl8hGzU0rTZLMSpJctU46yXwKkMb9C4%2BskBs2sSknM%2BE8WtQ4PhH5FFcxijfz6enucf53V7kNoihDwscmVy%2FhIwam1CTIi&X-Amz-Signature=02579e3fd2256239af4239960e0f87621e7a3d972843fb5a6c178030c36292d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
