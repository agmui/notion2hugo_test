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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKX6MC5Q%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDLBDa0Vhw3eLkaCGUQDojKbd%2FMEPAXtBOzIAYff3zvqQIhANarShQHQzZf54vHC3GBUea0la5lrNCCZVDVJS9KOBQLKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz26fN1XjbWSfOLp08q3APpbrTceFI6nzdCe59MrHTd0qWrnL1NTXxSoZKudwZQcQfi9IeoYJ5iqUHcoDr6wzXihkwXLrA8uC674WZRra7kuajFIGcDtxpiB8zhI2PVwJPJr6FMW3psFzLgu3xq%2FbCHRgIqqI5bCCRZitkinOSQMNNlBOFw%2FNLJMNuE8BgptCFHEZxL3NwmKOAUoyUbC8%2F6ws%2BRKefNkcF5BsevQeOSOC%2BTd0gFumnnwkwYkxHlJ9zW3UC0S2uwO6nRIVyKQA9zJ6altozuPau4OhNrZLMPKKeYakPesurtSplf33wpepKEBR1tWtia252PX1vKQtzsCbr0XGhtsQqKHF9LMfKLvy4Mf4nYIB1LWlyLJ3cXBU8r0F5wDHgQFqrSddsAXm5X8%2BDbaTwMYOcFMZstEX1EOZyjKYFt4%2FH7q%2BbFHDfDVDC9%2F9Jlc4J7DLNvmUvs6UU5YyqHng6qZlbz0nJUVR9KHyY1ELOKBFscu7kCQaJaSCk%2BX9%2FdtvNzLLR7FcGKG%2FkImLK0LjjcP7nZnAXTgqEK5qjVb7IdREsL8tgcT3MKWKpwlF3GT7ufsUqxOw%2BtlT7mlB6r5rqx%2BMEIbAbWlxiOwrR4VN4%2FYQoA3KjkHtOUwFBpfIr2ZidY96uXpDCNsZfDBjqkAd07lkxR1%2BthTkKoDEPxcMrPEGUwRYnEGhJDE5aniJfMpoCMknm2UWmf%2B%2BTGiGmN0uRWi5mdlKpmHe26G12SvpH9vitu7HfOkC3YuO8kYGm2L06AKFCX1CvpUic2PZILj11cpzaZdIcB76YZNgKauOGb%2FXSVhRvzqGF2lJ%2BdE4eoyot6U39LTYLLEtwNVaqx7eQ3nz8QHeBv0WqS%2FRO8IAIRe2f%2B&X-Amz-Signature=a72ad34b2bc308599b93393027f9dce5e1a154e1d0d4b8ff9b4ec27d9f26970e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKX6MC5Q%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDLBDa0Vhw3eLkaCGUQDojKbd%2FMEPAXtBOzIAYff3zvqQIhANarShQHQzZf54vHC3GBUea0la5lrNCCZVDVJS9KOBQLKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz26fN1XjbWSfOLp08q3APpbrTceFI6nzdCe59MrHTd0qWrnL1NTXxSoZKudwZQcQfi9IeoYJ5iqUHcoDr6wzXihkwXLrA8uC674WZRra7kuajFIGcDtxpiB8zhI2PVwJPJr6FMW3psFzLgu3xq%2FbCHRgIqqI5bCCRZitkinOSQMNNlBOFw%2FNLJMNuE8BgptCFHEZxL3NwmKOAUoyUbC8%2F6ws%2BRKefNkcF5BsevQeOSOC%2BTd0gFumnnwkwYkxHlJ9zW3UC0S2uwO6nRIVyKQA9zJ6altozuPau4OhNrZLMPKKeYakPesurtSplf33wpepKEBR1tWtia252PX1vKQtzsCbr0XGhtsQqKHF9LMfKLvy4Mf4nYIB1LWlyLJ3cXBU8r0F5wDHgQFqrSddsAXm5X8%2BDbaTwMYOcFMZstEX1EOZyjKYFt4%2FH7q%2BbFHDfDVDC9%2F9Jlc4J7DLNvmUvs6UU5YyqHng6qZlbz0nJUVR9KHyY1ELOKBFscu7kCQaJaSCk%2BX9%2FdtvNzLLR7FcGKG%2FkImLK0LjjcP7nZnAXTgqEK5qjVb7IdREsL8tgcT3MKWKpwlF3GT7ufsUqxOw%2BtlT7mlB6r5rqx%2BMEIbAbWlxiOwrR4VN4%2FYQoA3KjkHtOUwFBpfIr2ZidY96uXpDCNsZfDBjqkAd07lkxR1%2BthTkKoDEPxcMrPEGUwRYnEGhJDE5aniJfMpoCMknm2UWmf%2B%2BTGiGmN0uRWi5mdlKpmHe26G12SvpH9vitu7HfOkC3YuO8kYGm2L06AKFCX1CvpUic2PZILj11cpzaZdIcB76YZNgKauOGb%2FXSVhRvzqGF2lJ%2BdE4eoyot6U39LTYLLEtwNVaqx7eQ3nz8QHeBv0WqS%2FRO8IAIRe2f%2B&X-Amz-Signature=f57aa920a05e3011c456416d368a944e82505af6bb6a974c900f1672090fd27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
