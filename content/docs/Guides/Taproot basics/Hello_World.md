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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAUMYL72%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF5QP9Kd2DvhF%2BaHhbSP0%2BudnM2PVKPqIls0KydAgKC8AiBaMslWkuNPMz0Y%2BKr38pD4i%2FwjMQdOCIaZZOhamWjHKir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMSxa3XEWHWFGU9yfwKtwDow%2BYBtVKLVWL7ro79aN4OewL5hSOWJbHFJpI1t76qk0z%2BMyxEu%2BmtNh6GV7b1Rdb6JJpY3UXko9JYxsilYLJAj5GilbYIk1zU188Cs%2F69FyLY2SO5rOEfvwWmwMA9TgZ3dgAV3Y0SWhdqQOkL8CxY60m%2BByDOkGRSMMV4mQv0R63MnOFq3ol7zMGrlM9Redm7b2A2Chth5DOCBF6uucTjut3tW8dxD6SS0sCxVy5%2Fi4ObIZz4xN6HBsq03lBF%2B1l1TJIzXxOhlqpTcuiVvi7aUI06Fe%2BjzD4OsNiTCG3gwLGZKYV9TOZUkMTsO6UK51V9yTGMGcbKhBamB1%2Bg7Dv18rwJj2fZmv%2FBrS%2FvBH0AtB9FGYHLQPr7YpZTHA7ggovH7V8mneyrm3TBmu%2BuaTag1A6ReCvNdQofbQ05IK9FoOV%2FPOk7j8QIE8VM5YIiTaUlDEq2VyT3%2BUsVcaCPu2kHQIBK6Em8Ya9LQYppEQeNYEZf3nCR2KUBspRe4sm6Tp8ACGEhhBzbA809Lbt4GSH%2BLM4LtHLlOIcY7MFgzxp4DwBccb7gSZmKEGIxuk3sSDH952jY4w5076LGCivFWFNwevegPbVUJonnQnI%2F%2Fw1DEWulP9UtwqIp2tz19QwgrzJxAY6pgGdPhO5GRhXhoVC1sZIsjDX2bTtql1pX2oANNXojHev%2F4VmFGsuayh4uXVVKwaTR5QNv%2FPGNokA%2FImzLDLq58%2BPaJt%2F3g32DE93%2Fub2tydm2DJgR0QcJZ2MQ4NqwxwwpZwlT4sQJdqvUXCdhk1h9eCQLIt9rppQ10TFJrtBNxe4I1kEkkpM1F72cvulyAiJAq5KnlFb8epe6iqK4CRCYGlffRDGjmNb&X-Amz-Signature=da29e58e4b017cd58895ee3f3dae8c3b12266966e91c234b6bea69b8d1c9bc49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAUMYL72%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF5QP9Kd2DvhF%2BaHhbSP0%2BudnM2PVKPqIls0KydAgKC8AiBaMslWkuNPMz0Y%2BKr38pD4i%2FwjMQdOCIaZZOhamWjHKir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMSxa3XEWHWFGU9yfwKtwDow%2BYBtVKLVWL7ro79aN4OewL5hSOWJbHFJpI1t76qk0z%2BMyxEu%2BmtNh6GV7b1Rdb6JJpY3UXko9JYxsilYLJAj5GilbYIk1zU188Cs%2F69FyLY2SO5rOEfvwWmwMA9TgZ3dgAV3Y0SWhdqQOkL8CxY60m%2BByDOkGRSMMV4mQv0R63MnOFq3ol7zMGrlM9Redm7b2A2Chth5DOCBF6uucTjut3tW8dxD6SS0sCxVy5%2Fi4ObIZz4xN6HBsq03lBF%2B1l1TJIzXxOhlqpTcuiVvi7aUI06Fe%2BjzD4OsNiTCG3gwLGZKYV9TOZUkMTsO6UK51V9yTGMGcbKhBamB1%2Bg7Dv18rwJj2fZmv%2FBrS%2FvBH0AtB9FGYHLQPr7YpZTHA7ggovH7V8mneyrm3TBmu%2BuaTag1A6ReCvNdQofbQ05IK9FoOV%2FPOk7j8QIE8VM5YIiTaUlDEq2VyT3%2BUsVcaCPu2kHQIBK6Em8Ya9LQYppEQeNYEZf3nCR2KUBspRe4sm6Tp8ACGEhhBzbA809Lbt4GSH%2BLM4LtHLlOIcY7MFgzxp4DwBccb7gSZmKEGIxuk3sSDH952jY4w5076LGCivFWFNwevegPbVUJonnQnI%2F%2Fw1DEWulP9UtwqIp2tz19QwgrzJxAY6pgGdPhO5GRhXhoVC1sZIsjDX2bTtql1pX2oANNXojHev%2F4VmFGsuayh4uXVVKwaTR5QNv%2FPGNokA%2FImzLDLq58%2BPaJt%2F3g32DE93%2Fub2tydm2DJgR0QcJZ2MQ4NqwxwwpZwlT4sQJdqvUXCdhk1h9eCQLIt9rppQ10TFJrtBNxe4I1kEkkpM1F72cvulyAiJAq5KnlFb8epe6iqK4CRCYGlffRDGjmNb&X-Amz-Signature=a9eb5a3783b1f7f3fa4b4b07ca2fc992a1ab6367ba14bbf6af004cf6a3361d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
