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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRL73GE3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe%2F5Z9caMjGvu3j7ciKcQRXGro7yHQXZI2KCpN2ejjiAIhALnG8XBzexDLmP2j19VdMuDMBqzKjeuljHv6c77ITWAZKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY7sdBtVt69p5w0kwq3ANIKddBW2Cf%2FxezMimAAkajehX0sbNGTS9vvRM9EDu%2FUZ6qPcfgx5kDWeRaLGy0mHdf3pc48WY0nNmzoXceAiUJPklF8BiiSngcTRjk28tymQZgzzouCujEutF9IEozZsHRjs6NGv6ZBK21waMX%2F7pjLReGrdcBz7DJaVIzQA52hRll72gC3VA8OUj9x%2B1VA%2FUIBDAlBOJ%2FNEMhYLxDFbyOvNGLw7hst5WZ6t7TktXcPJqLgM1GS7TOjUdwbOYVOXlBhnnQt1wsBw68skxiBqz8OGjCTWyJtDvgZGEBGVH8skhKumhFWBwGtt7sjFbJXVx9djLqBVl70UU1%2FCOCHlGXiRMat8ryyrj%2FB7fvywhi8qCvyTkq%2F5Iubqgs1QHQzKZdR7x9TGKMPL9NpIxvsYtVU%2BfOlPUgYDpJebBpMSqSoyxttpgCXcX0Uipcal8QaPRsxsqCZQy15TPb2xalN%2B1PU3LDoFKXrjL%2BOYwFCSCEgf%2BJAHL3Jz1yzLRgbvTuJmDUzGXyboItgO0AF%2FS0nSLXLY8kwdxt%2BbFi4IEwutWXivMapvVI4E%2FMryXI72g1qCl2pYRH9%2B%2FWRBkM7J1K9JgVQ7QMDzONiOQUWjQrQ8cmqSAzpkF%2Bh%2ByeO8%2F51DCfhOvBBjqkAb4OKcbLMuxWgG2ZxrUukYj1oz%2Fqo8OjbHZAXS1bHZ0Mm4NSZkoABOXpSraCuZl1SrYx73XRQQl93rCbGuTujbr2%2BCE4PlQa6J00qqY67hPkSiH34hbgX5eMz4hyiJlMQvdjW%2FfenBVsxPNUaBf37XWfDznz3PRoqTTiYQ%2FmagsnziIqj%2BYHx7aocBzeyYye8OBHMiu09%2B2lCBM8SEkQxc40toCS&X-Amz-Signature=2410332dc37ef8449ce478124036c0a6cb6e63b3bc2d2f4a76ddb4ac29883ece&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRL73GE3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe%2F5Z9caMjGvu3j7ciKcQRXGro7yHQXZI2KCpN2ejjiAIhALnG8XBzexDLmP2j19VdMuDMBqzKjeuljHv6c77ITWAZKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY7sdBtVt69p5w0kwq3ANIKddBW2Cf%2FxezMimAAkajehX0sbNGTS9vvRM9EDu%2FUZ6qPcfgx5kDWeRaLGy0mHdf3pc48WY0nNmzoXceAiUJPklF8BiiSngcTRjk28tymQZgzzouCujEutF9IEozZsHRjs6NGv6ZBK21waMX%2F7pjLReGrdcBz7DJaVIzQA52hRll72gC3VA8OUj9x%2B1VA%2FUIBDAlBOJ%2FNEMhYLxDFbyOvNGLw7hst5WZ6t7TktXcPJqLgM1GS7TOjUdwbOYVOXlBhnnQt1wsBw68skxiBqz8OGjCTWyJtDvgZGEBGVH8skhKumhFWBwGtt7sjFbJXVx9djLqBVl70UU1%2FCOCHlGXiRMat8ryyrj%2FB7fvywhi8qCvyTkq%2F5Iubqgs1QHQzKZdR7x9TGKMPL9NpIxvsYtVU%2BfOlPUgYDpJebBpMSqSoyxttpgCXcX0Uipcal8QaPRsxsqCZQy15TPb2xalN%2B1PU3LDoFKXrjL%2BOYwFCSCEgf%2BJAHL3Jz1yzLRgbvTuJmDUzGXyboItgO0AF%2FS0nSLXLY8kwdxt%2BbFi4IEwutWXivMapvVI4E%2FMryXI72g1qCl2pYRH9%2B%2FWRBkM7J1K9JgVQ7QMDzONiOQUWjQrQ8cmqSAzpkF%2Bh%2ByeO8%2F51DCfhOvBBjqkAb4OKcbLMuxWgG2ZxrUukYj1oz%2Fqo8OjbHZAXS1bHZ0Mm4NSZkoABOXpSraCuZl1SrYx73XRQQl93rCbGuTujbr2%2BCE4PlQa6J00qqY67hPkSiH34hbgX5eMz4hyiJlMQvdjW%2FfenBVsxPNUaBf37XWfDznz3PRoqTTiYQ%2FmagsnziIqj%2BYHx7aocBzeyYye8OBHMiu09%2B2lCBM8SEkQxc40toCS&X-Amz-Signature=618cc93868c562d0456f37fc41eb5688499ebb131b55b6b8d835a1a26cfb30aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
