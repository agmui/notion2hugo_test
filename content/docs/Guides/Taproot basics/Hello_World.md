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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFBGCVSG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCS4l79AH2OvDauQsTGLy70Wdu0jvg7N9mxt3Ua2IxsOQIhAMJ7Lu89aJVQ3utLtkmCUem4EjXhI%2BUFpDIoOzf9OoY9KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpLxipoEpjvuZEk68q3AO4%2FiqwOxClMXY6MbmhkuEJM%2Fq1qhRFXOqWhqsuf4hqWc3kt3XyuTZLM4%2FbjAowMpbFyfuE7J5NTIRYB5yHTs9Ylh6G45GKowEb5TQZ8ztygxhMhjWH9aqtmHgjQNQkaaTXvsZVJ2WEzO4AgQCxQVpNPHxC0CwYv7al1Ncnfk%2BuRqpUL2QpvPnLjofH91YGWLtyrpBCRmNpGORyjmPQowAmo9158VcNHX%2FSyR1es8HKET3Pl%2B%2B9KcEZHUdMPcrN9T8dtxou8LLf7xmJMD4l%2BCWNo05VamyhNo1OFIszHUH0xxenQCJV0zDZJT3PjANJ1j%2BUltFWRo6hd2KlcK%2BkBkr8H3f3bn%2FuKHvAW7Rq0Vmt6MwSLlyPqjQsVa%2FjvELc62xvSmkW3TXQlkaDzjYqcvljXN7ShnpLDSMzdVPWW%2BJLySO%2FLw2jcjFedDtYfKCXDbWocPNPKeboclqrUDhDPeUzbGLOIB97Aa5hx%2Bo4uSzYTGb5o6p2DLBPZnck7qPygpT1Y9TGzebF8dxH2PNofk%2BEkNCy%2FZzqqrGSPgVs6amNW959XSRzD9H3RTgm%2FiaYIjgnhhfdhAcR2hnLTCosEJV1pqIatxTKsybmfPLhtmyrv7D4FM9UfKCO4cnmzjCzvsLBBjqkAS57r8m8mpzNto%2F6TqBYG7hFdsCUr%2F4m9B2KEHnu0xF8Xok4nKejbNQsAMJEP0sg0y1NCzxwGVxQHLCIS7Ko1yvVgaieCWEXnvQ1aEU2ORtTZMGukgfL3q6fc7xEtVPZvKuNZKv4mQU7OQ2pFdrR69UAIMCz0qunzOm1o0IHba%2BMP4gLn0In11FdiKX2RybwYtIErI8TcfIT5NYVtPr2ZUKZg66B&X-Amz-Signature=081b7baed44368b1f27bbab1b838e234190990e9bf6cbc4cef7fcbfd395e6549&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFBGCVSG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCS4l79AH2OvDauQsTGLy70Wdu0jvg7N9mxt3Ua2IxsOQIhAMJ7Lu89aJVQ3utLtkmCUem4EjXhI%2BUFpDIoOzf9OoY9KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpLxipoEpjvuZEk68q3AO4%2FiqwOxClMXY6MbmhkuEJM%2Fq1qhRFXOqWhqsuf4hqWc3kt3XyuTZLM4%2FbjAowMpbFyfuE7J5NTIRYB5yHTs9Ylh6G45GKowEb5TQZ8ztygxhMhjWH9aqtmHgjQNQkaaTXvsZVJ2WEzO4AgQCxQVpNPHxC0CwYv7al1Ncnfk%2BuRqpUL2QpvPnLjofH91YGWLtyrpBCRmNpGORyjmPQowAmo9158VcNHX%2FSyR1es8HKET3Pl%2B%2B9KcEZHUdMPcrN9T8dtxou8LLf7xmJMD4l%2BCWNo05VamyhNo1OFIszHUH0xxenQCJV0zDZJT3PjANJ1j%2BUltFWRo6hd2KlcK%2BkBkr8H3f3bn%2FuKHvAW7Rq0Vmt6MwSLlyPqjQsVa%2FjvELc62xvSmkW3TXQlkaDzjYqcvljXN7ShnpLDSMzdVPWW%2BJLySO%2FLw2jcjFedDtYfKCXDbWocPNPKeboclqrUDhDPeUzbGLOIB97Aa5hx%2Bo4uSzYTGb5o6p2DLBPZnck7qPygpT1Y9TGzebF8dxH2PNofk%2BEkNCy%2FZzqqrGSPgVs6amNW959XSRzD9H3RTgm%2FiaYIjgnhhfdhAcR2hnLTCosEJV1pqIatxTKsybmfPLhtmyrv7D4FM9UfKCO4cnmzjCzvsLBBjqkAS57r8m8mpzNto%2F6TqBYG7hFdsCUr%2F4m9B2KEHnu0xF8Xok4nKejbNQsAMJEP0sg0y1NCzxwGVxQHLCIS7Ko1yvVgaieCWEXnvQ1aEU2ORtTZMGukgfL3q6fc7xEtVPZvKuNZKv4mQU7OQ2pFdrR69UAIMCz0qunzOm1o0IHba%2BMP4gLn0In11FdiKX2RybwYtIErI8TcfIT5NYVtPr2ZUKZg66B&X-Amz-Signature=9b4f9e711701de8657965f2bdc5c76bd02f581bfd7fdc46b867d42bdfb57ce54&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
