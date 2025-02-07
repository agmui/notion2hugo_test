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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYVFO53%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCagQ6H%2BV8ssHSo3HTqihXR05zACFoPN6HrRxVQPJknfAIgE8jBm%2BvLRco8vcMPZWgFnfkyLWINp9HYEex9uuH3hyIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFsSdgrrQU%2BlWO%2BloircA11fleYmTa2kToHG7nEi%2FyuNRVmvdurJ9dD4hjL7ymSWP69yoKn3LQ7GIX1aty2Qj52VFgonQU6Wo0w1nF%2BJGgieNIzteGvXSIrotJZvhTW7gf9qv5nK118V9kpcdfO2PGjSdDHuW8QRZCwoxb62kk8EP9x6CrIxnp5jQ6j1PmkIZVggYdHnsUkgnKD5xJOqVapAcc1%2B031%2Fbf8iM704eAxyEzCEYK9y2Y0lxaAvFi3vVWMItWpn89ksMhjwVqy6P0J%2B2fR6MTGrrMlpUuPP9A55DH3DxBrYMt%2FTRuk45Vyn85CamJ81YSHP%2F8%2BjonH%2FEgCSZ5MNyAYvm6mgVhMou726cP1YP0X1Kvj5q%2FktcxaRwOIeFaVPnktcZPh4qLFeGVUkUl53mGOPFNR6CPzVExZPJkuk7KlNnTOZ5V6MEjoem1WuAWupY75lsj4Ba2FxJcLtBrE62RpT7wbcOz4YrHsbM7FQT%2FsNk7qcY8%2FyOv1KzKlUETQ2PdTLRSzLcc09M9QIo6mtfMqbML%2FiBb7pAhm7Q1xiTtT2hGAZYlkyWljqIVa3MnIm%2BYUG%2F4s9RfUGxhSTPe8kmPA2ra5neLKCKnlVsorO0LEVvc93j%2FsLuk7M83VB8chr3aqrUmSyMPv%2Fmb0GOqUBapNlFTXCotogacy%2BhqWBj8R7YK5FjkM1nbOp9fjlUSjoJGHnCATn%2FOthcMO4SlaaBIXGqmKJGgapJb60R5%2BskwG0U4l7%2FvhHmba8yol7Pj7ffI7BTGBaZp9B4sR4fvQ%2B6EVn25XP3aHcvxVbvq%2BgWqkb0vyiX2aoJELQKO5OL9B4sz%2BDRkt5YKFJy5NJqWWFGEx2VvRE4R38knfwa4J1c%2BP09Td9&X-Amz-Signature=eb5b5c808f0997b6da1d807219459bda1452c4ff25b1531c49fef08eb6efe4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYVFO53%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCagQ6H%2BV8ssHSo3HTqihXR05zACFoPN6HrRxVQPJknfAIgE8jBm%2BvLRco8vcMPZWgFnfkyLWINp9HYEex9uuH3hyIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFsSdgrrQU%2BlWO%2BloircA11fleYmTa2kToHG7nEi%2FyuNRVmvdurJ9dD4hjL7ymSWP69yoKn3LQ7GIX1aty2Qj52VFgonQU6Wo0w1nF%2BJGgieNIzteGvXSIrotJZvhTW7gf9qv5nK118V9kpcdfO2PGjSdDHuW8QRZCwoxb62kk8EP9x6CrIxnp5jQ6j1PmkIZVggYdHnsUkgnKD5xJOqVapAcc1%2B031%2Fbf8iM704eAxyEzCEYK9y2Y0lxaAvFi3vVWMItWpn89ksMhjwVqy6P0J%2B2fR6MTGrrMlpUuPP9A55DH3DxBrYMt%2FTRuk45Vyn85CamJ81YSHP%2F8%2BjonH%2FEgCSZ5MNyAYvm6mgVhMou726cP1YP0X1Kvj5q%2FktcxaRwOIeFaVPnktcZPh4qLFeGVUkUl53mGOPFNR6CPzVExZPJkuk7KlNnTOZ5V6MEjoem1WuAWupY75lsj4Ba2FxJcLtBrE62RpT7wbcOz4YrHsbM7FQT%2FsNk7qcY8%2FyOv1KzKlUETQ2PdTLRSzLcc09M9QIo6mtfMqbML%2FiBb7pAhm7Q1xiTtT2hGAZYlkyWljqIVa3MnIm%2BYUG%2F4s9RfUGxhSTPe8kmPA2ra5neLKCKnlVsorO0LEVvc93j%2FsLuk7M83VB8chr3aqrUmSyMPv%2Fmb0GOqUBapNlFTXCotogacy%2BhqWBj8R7YK5FjkM1nbOp9fjlUSjoJGHnCATn%2FOthcMO4SlaaBIXGqmKJGgapJb60R5%2BskwG0U4l7%2FvhHmba8yol7Pj7ffI7BTGBaZp9B4sR4fvQ%2B6EVn25XP3aHcvxVbvq%2BgWqkb0vyiX2aoJELQKO5OL9B4sz%2BDRkt5YKFJy5NJqWWFGEx2VvRE4R38knfwa4J1c%2BP09Td9&X-Amz-Signature=b0a38716479201f0833d8ddf03d0656211eb35de0042253516c969dd23a1dae6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
