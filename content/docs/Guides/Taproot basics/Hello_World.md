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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHZYTGV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsRvctYTdjz45B6dG2B4ZmEWzs%2Bq%2BSlcufqPCtAXXmCwIgTNOhIbO%2BKkRn1wL%2Fy54TL3k8VufkKF6oqt9pEbsJpb4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErP4E2Kkg18HxoqaCrcAywA%2Bf02hSrpk0tuxAM0xKqaxbikK6wHWzRp8JivH%2FKwEGDX46aqPBTplS%2BXBr3HT4uQASNJns0cdgY7b93j%2ByX6NAlTMzIPqnhQBnz%2BY81Fj9T5XkPzJnT3uFGsYm4A%2Fo0EzAFlcMxQERfpNoda4T%2FWsJ3UIJ3%2BmJKEHTHkb%2FxlezGjDlOjlIwScw961P9lV4apFjbe54z%2FNZV5IEJrhdwkys7r0%2B1EloMw%2FeCvNgjtgaDR%2FushxpBVUEKmpMW2i4wwbZXipFCaR%2BUExbMLoL5EEU84PsDfSIrra5Sv%2BFU15TmPGhcaea4vQTmd2AbhWYFkLEdkw29gy8QiMxQaUCcuYrgtiFCyHehXeKZ%2BqDij1Ys7vUQ9aqe8K%2B86cO0SqLMpIo5mOv59j5OgrpxXvWVseL%2BqPfN8Q%2Brw5QEBZ6uFuNfMTSHJbhfkKJXZUJWEtU2Bj6mjEaqB%2BtlJHLemqwcXfiLqxiFl2zykwttIEG8jtT0YQiEwjGmwlsJtA7RXBHZ42zHNoYVDSHNXlXK101MdVGc8%2BU8Qu1Rmp9fCpA7OdplZjoPPuX6tHxm3CS%2Bus82acJ2hq4jT3PGxJqxgA02Im52kLQseMubdHsHbzsuz8F%2BG3F2cY94MRhWaMIa03MIGOqUB2nvJyXLOSCfJNFE%2FII33afmrZInVQCk79cMjMEE8n2Gjybm5QyveFlx1I8IsNmMzBduuIfAySzH8gQuTEVOT8jlqZuKsMif2z6t0UWab8EPtM4etHiSa3uBNOnemkiq0WVEuG5h72N%2FCvd5LJbnAKRT82u9B7fEriAJ7W%2BmjQtIHfv9xSMcG2ih%2FrYMzZtjTlIuFbVuXR7KgE%2BoYBED5gchAy2FY&X-Amz-Signature=f2d9337c9ee1feb2bb6bacee2ba379e2768755655c2dbfe6510c30c075445351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHZYTGV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsRvctYTdjz45B6dG2B4ZmEWzs%2Bq%2BSlcufqPCtAXXmCwIgTNOhIbO%2BKkRn1wL%2Fy54TL3k8VufkKF6oqt9pEbsJpb4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErP4E2Kkg18HxoqaCrcAywA%2Bf02hSrpk0tuxAM0xKqaxbikK6wHWzRp8JivH%2FKwEGDX46aqPBTplS%2BXBr3HT4uQASNJns0cdgY7b93j%2ByX6NAlTMzIPqnhQBnz%2BY81Fj9T5XkPzJnT3uFGsYm4A%2Fo0EzAFlcMxQERfpNoda4T%2FWsJ3UIJ3%2BmJKEHTHkb%2FxlezGjDlOjlIwScw961P9lV4apFjbe54z%2FNZV5IEJrhdwkys7r0%2B1EloMw%2FeCvNgjtgaDR%2FushxpBVUEKmpMW2i4wwbZXipFCaR%2BUExbMLoL5EEU84PsDfSIrra5Sv%2BFU15TmPGhcaea4vQTmd2AbhWYFkLEdkw29gy8QiMxQaUCcuYrgtiFCyHehXeKZ%2BqDij1Ys7vUQ9aqe8K%2B86cO0SqLMpIo5mOv59j5OgrpxXvWVseL%2BqPfN8Q%2Brw5QEBZ6uFuNfMTSHJbhfkKJXZUJWEtU2Bj6mjEaqB%2BtlJHLemqwcXfiLqxiFl2zykwttIEG8jtT0YQiEwjGmwlsJtA7RXBHZ42zHNoYVDSHNXlXK101MdVGc8%2BU8Qu1Rmp9fCpA7OdplZjoPPuX6tHxm3CS%2Bus82acJ2hq4jT3PGxJqxgA02Im52kLQseMubdHsHbzsuz8F%2BG3F2cY94MRhWaMIa03MIGOqUB2nvJyXLOSCfJNFE%2FII33afmrZInVQCk79cMjMEE8n2Gjybm5QyveFlx1I8IsNmMzBduuIfAySzH8gQuTEVOT8jlqZuKsMif2z6t0UWab8EPtM4etHiSa3uBNOnemkiq0WVEuG5h72N%2FCvd5LJbnAKRT82u9B7fEriAJ7W%2BmjQtIHfv9xSMcG2ih%2FrYMzZtjTlIuFbVuXR7KgE%2BoYBED5gchAy2FY&X-Amz-Signature=8464b8de12bdd4f6dc330992f2f5f1087d26da4cf1b73311779fd0216a72f1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
