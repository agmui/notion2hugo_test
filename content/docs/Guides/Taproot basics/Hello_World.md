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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7VJ5NS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIE3pQfuX9bWfDs8pWqm3LOcqBW6INsWmqX3fXDVWEB6kAiEAqYwkHyFjap6Jqe2SVpkcsXUcnnXEWNyt1JWI4Ub8rRsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC29O9ObbT6%2BuPLQpyrcA0cVKOPXFgbLavmaqMbfTYR15rZ06KgUTbV1MQB2BfkfzHeEjBRdJ6zsIP1GC2NUhCi0LHx3x7xOmX6Z6ibXDFSRWPsuj8AQ6dzed7tY1yb1St4zqCV%2B1N7gqV2qREG2peic%2FvfEquUIZmUWY4KLQW5Cv%2BgFnDaKmzpsbi38QluZD1cmLfIzMARhQfDfX4i29ApnDeFUmWpss6Ua8PujGQB4YzWRNGrGx8BQYn%2BeDy%2BpyL8m8K2LMnBeyFpeysR3qJ5NBkseoUUdNrEhisGBKThAB4QTSENWydyHepb2rlzuK%2Be8pqF9btfmYJSDhpryTbofSqxhKkJfeAQe46Ojz66WsiiceqzITqXXQreq4okpBiex4KLMuuS%2FJ5BmNaXbG71i7pSOazqxnJbZlk8%2BKvdCptN4mPVSpMSBxZRJDB95AmBEnrjhlGkNOhsMEPy7gHKNDoeKAifYLWtcJIkpht1orDHcOryBLK3OVRigxB06laVjF5ZOXasy0HazsFldJycFBsoeLmKKVlaXh6%2BM4sevpWbgxEZPQgKY3l%2Fo%2F3tTW5jTTlszJ9kkUOCjkkgWax9qU%2BSAI8%2FV%2Fs2cFiFJ5cTZXGmHGT6JltbEubkguAw%2F8jIfLKZVG1v25mOPMN756r8GOqUBjehAw2loKaD%2FO9WEFjQxc6iblvB8h6m7GIGU2vVcILTXrSGTjE7UvuIQdMlGb%2FtvkjO8%2F6iSkuGqIg5lNgA7yl1NluzBQFMpeomYl5nLay%2B609EFpljF9NJPha2tjghvDEaJhFMF4%2FHKTwnA2X3W7pkezjBrioI3hwLrc%2FCsWjGic79MaIEVNxCh0IszjH2MWSw2tjUprgMoDp8axFJvxPtMa%2BDB&X-Amz-Signature=2b83f34b7c0c4f5b802e3780292a318e524c3034157e83cd87953c6f13c30f78&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7VJ5NS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIE3pQfuX9bWfDs8pWqm3LOcqBW6INsWmqX3fXDVWEB6kAiEAqYwkHyFjap6Jqe2SVpkcsXUcnnXEWNyt1JWI4Ub8rRsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC29O9ObbT6%2BuPLQpyrcA0cVKOPXFgbLavmaqMbfTYR15rZ06KgUTbV1MQB2BfkfzHeEjBRdJ6zsIP1GC2NUhCi0LHx3x7xOmX6Z6ibXDFSRWPsuj8AQ6dzed7tY1yb1St4zqCV%2B1N7gqV2qREG2peic%2FvfEquUIZmUWY4KLQW5Cv%2BgFnDaKmzpsbi38QluZD1cmLfIzMARhQfDfX4i29ApnDeFUmWpss6Ua8PujGQB4YzWRNGrGx8BQYn%2BeDy%2BpyL8m8K2LMnBeyFpeysR3qJ5NBkseoUUdNrEhisGBKThAB4QTSENWydyHepb2rlzuK%2Be8pqF9btfmYJSDhpryTbofSqxhKkJfeAQe46Ojz66WsiiceqzITqXXQreq4okpBiex4KLMuuS%2FJ5BmNaXbG71i7pSOazqxnJbZlk8%2BKvdCptN4mPVSpMSBxZRJDB95AmBEnrjhlGkNOhsMEPy7gHKNDoeKAifYLWtcJIkpht1orDHcOryBLK3OVRigxB06laVjF5ZOXasy0HazsFldJycFBsoeLmKKVlaXh6%2BM4sevpWbgxEZPQgKY3l%2Fo%2F3tTW5jTTlszJ9kkUOCjkkgWax9qU%2BSAI8%2FV%2Fs2cFiFJ5cTZXGmHGT6JltbEubkguAw%2F8jIfLKZVG1v25mOPMN756r8GOqUBjehAw2loKaD%2FO9WEFjQxc6iblvB8h6m7GIGU2vVcILTXrSGTjE7UvuIQdMlGb%2FtvkjO8%2F6iSkuGqIg5lNgA7yl1NluzBQFMpeomYl5nLay%2B609EFpljF9NJPha2tjghvDEaJhFMF4%2FHKTwnA2X3W7pkezjBrioI3hwLrc%2FCsWjGic79MaIEVNxCh0IszjH2MWSw2tjUprgMoDp8axFJvxPtMa%2BDB&X-Amz-Signature=f31c15b3147b293ef1b5cbf26bcb602c88f8b963f73be81f878faebdc99d5250&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
