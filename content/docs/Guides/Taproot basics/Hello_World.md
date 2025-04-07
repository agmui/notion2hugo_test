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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R7OUOOI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHei7GUqWIoYz7Lcugt%2FlzjntrazW5GcBtt7eb0HXs1iAiEA2ISsk7CKcx%2F85JTxijv8KnwB9fDfxfarjZ9BANwhDFwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDA4lIdCavUr%2BjY1x7ircAyrYaj17MUnt68Z3qf0LFoFD%2Fl6Vy4PerBSS2s9Prck%2BbyMwQGCLdqCtmqHg5l8bHOSlRYLW%2BsXjqihbGlcCkJhsecgQ5hJ3BfygeKSAhMoEeutA5Ixqmlk2hdPeEQB4zX%2B9WQ8ad0fKu5fnYzwoMALEQAP2z9%2FyUW76hDQm99iZjHnCig8LD%2FdCXeAEYOJns9On%2F0WBOZANjNU1mbJfziEiz8zZsiqlKfT%2BY8oCq9pBIFzj0fdJF%2FDsswOsk0P5Q48YfY3yQk6P9fbzvdox%2FthjEpa7DSdPVWB1DNyxy8WWeBaHllGLcBfdVb1BGki2FuFiWKpUpwOmBpe7FMgX5OqffyDH305%2F5Cn8kJozBKPakxBfsPMobvDUaj2Y7EbPlNYf%2Fk%2B7wbjA9EskrCRBFmUzqNeiX9Vj3qBK5f0%2FqNPR28ylRNHsWTRBbsyfOek%2F2bKqLWseDchZrYyrqHg6g2sOid5v6U1jWCxBLjQk4aJi9WY%2FgwRfqHPR4qY2cUUIHN7GC2nUC6cunV7mLUoq%2BO%2FzMBYCOjYME81BR2wSPNeRAjMF9AReH8cdoW12H396MR%2Fq8ze%2BObr06TdPmDW2UnfqtMpJlMKo%2FHg0LD5zbxDDysVCDX5yw7giSckmMN6f0b8GOqUBBoHEOG8vXwN%2FbxmxcGqrhQrlXTHXu%2FvozTfHBE1XqF2yKoZ6u4wfSRq6Q%2BXcyVwJ%2FJBVv5z%2FJIcJt3gj6qFvEzfqlGGEDY%2F1HfiBYT%2F53NQtWaMzj2CBes79%2BpmdWjAke2iX%2FmOIuX06KFNTbSzKSHkyU8UNH0hW%2FeUntuYNzfTy77Zaesi3R1CW4iOreN%2B4LGjxhgOzwrvvMIQBg04Bj8Gnm%2FFU&X-Amz-Signature=98973c8e4a46da1b920af234e641d7fd909508ff61419f7981a4b5b74133d936&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R7OUOOI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHei7GUqWIoYz7Lcugt%2FlzjntrazW5GcBtt7eb0HXs1iAiEA2ISsk7CKcx%2F85JTxijv8KnwB9fDfxfarjZ9BANwhDFwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDA4lIdCavUr%2BjY1x7ircAyrYaj17MUnt68Z3qf0LFoFD%2Fl6Vy4PerBSS2s9Prck%2BbyMwQGCLdqCtmqHg5l8bHOSlRYLW%2BsXjqihbGlcCkJhsecgQ5hJ3BfygeKSAhMoEeutA5Ixqmlk2hdPeEQB4zX%2B9WQ8ad0fKu5fnYzwoMALEQAP2z9%2FyUW76hDQm99iZjHnCig8LD%2FdCXeAEYOJns9On%2F0WBOZANjNU1mbJfziEiz8zZsiqlKfT%2BY8oCq9pBIFzj0fdJF%2FDsswOsk0P5Q48YfY3yQk6P9fbzvdox%2FthjEpa7DSdPVWB1DNyxy8WWeBaHllGLcBfdVb1BGki2FuFiWKpUpwOmBpe7FMgX5OqffyDH305%2F5Cn8kJozBKPakxBfsPMobvDUaj2Y7EbPlNYf%2Fk%2B7wbjA9EskrCRBFmUzqNeiX9Vj3qBK5f0%2FqNPR28ylRNHsWTRBbsyfOek%2F2bKqLWseDchZrYyrqHg6g2sOid5v6U1jWCxBLjQk4aJi9WY%2FgwRfqHPR4qY2cUUIHN7GC2nUC6cunV7mLUoq%2BO%2FzMBYCOjYME81BR2wSPNeRAjMF9AReH8cdoW12H396MR%2Fq8ze%2BObr06TdPmDW2UnfqtMpJlMKo%2FHg0LD5zbxDDysVCDX5yw7giSckmMN6f0b8GOqUBBoHEOG8vXwN%2FbxmxcGqrhQrlXTHXu%2FvozTfHBE1XqF2yKoZ6u4wfSRq6Q%2BXcyVwJ%2FJBVv5z%2FJIcJt3gj6qFvEzfqlGGEDY%2F1HfiBYT%2F53NQtWaMzj2CBes79%2BpmdWjAke2iX%2FmOIuX06KFNTbSzKSHkyU8UNH0hW%2FeUntuYNzfTy77Zaesi3R1CW4iOreN%2B4LGjxhgOzwrvvMIQBg04Bj8Gnm%2FFU&X-Amz-Signature=a598d68eed57cef6cf9c8f0d9382f0e8fc21e51d25cdeb695d9e8775cdb175c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
