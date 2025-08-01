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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFS4XR25%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FV3uXIHRoNp94LWi7dN%2BRIDQa5bC3aZZMW1G10sCg%2FAIhAP5fuBJkPsF5QO2uH8QZIfYWTr%2FwON6J1daEjrKrYoznKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPFNmqguFHSs311Gsq3AOB54SYtb%2FJuqP77z5D7DKe6MjVyZHaejIXCDT4M8yvuoYCzOL7dt2EIfMdYU4DnCybpvZug81wOSU7XIWV7x1Eci2P1m%2BhSqwj%2FuDDKyMx8oN9XbFp3LC8C%2FySnocRBI55y7PIhrS%2FC%2Fm9FhF5m60tgdBRmQQL%2B4NB6Kl39dufbKj%2Bvcp5PeFELL0mslDXkvVv%2BhSLfVa%2BbrLwu9FtKhE6aAGHIkn%2BRy9rmUsf1GFp4RkiJO2noj9omu%2B%2BVgDZcjWMzekajcnXjAzXJxaHYZnaS%2F%2FRkij3ChgVxy2qsPT7Im%2BzSiLQDPE6Yj5ffRNJ6EPerf5XgfNdiy2z4GZqf6X%2FtADQYJs9OVrxc5novL40DwjnqJxqxxSXNKTpJVr5MPxJ%2BamCWnHk7vYhCdOCLekcV8bhdMYHZ3Hk%2B0GPI%2FhZmZRCxGO1u9QCjPlSZFfGZYNM2MNrfAJt%2FTGk0amKEGGoK00I0mIB1O4flb7DoAgpSo0Y5SwjKbtrLa5tlTb%2FNYS%2B3d9cE7YAX4FES96ZqAbVGota%2BlDtFBd6DJEmMvpxHhuZ6g07Y5uU5ASa5vBNufHqSXsjG4tzQfPsCU8Vlba78%2FTTZqmBgTUUKlz%2FjmjYl1S4BugBakE%2FmuvwsDDQ9LDEBjqkAZdzC7rV92vLbZRtzG8dDSPzDA6aQiTOUK2ivubNQijAiSCzxIKQEJMAPyBa7HZQKYTkTOlB3h7v5%2B6UqQ6VmPYFyh218w4MtT6ua55ED4jYX3Yf87m5EbjmCxZKCFOQoqMDJXKdGS4zTBPakREPVaer5J2dfAUDYGcsGmlDxPo1I0AZDIigRpTlzlcZVgop9xCc0SXTd4vkpXmkFZ8vk8sy2BAN&X-Amz-Signature=368f41e6ba20f8cf51f4fa2d8771c8853bc1d2b8efae894405bc080fee8cd72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFS4XR25%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FV3uXIHRoNp94LWi7dN%2BRIDQa5bC3aZZMW1G10sCg%2FAIhAP5fuBJkPsF5QO2uH8QZIfYWTr%2FwON6J1daEjrKrYoznKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPFNmqguFHSs311Gsq3AOB54SYtb%2FJuqP77z5D7DKe6MjVyZHaejIXCDT4M8yvuoYCzOL7dt2EIfMdYU4DnCybpvZug81wOSU7XIWV7x1Eci2P1m%2BhSqwj%2FuDDKyMx8oN9XbFp3LC8C%2FySnocRBI55y7PIhrS%2FC%2Fm9FhF5m60tgdBRmQQL%2B4NB6Kl39dufbKj%2Bvcp5PeFELL0mslDXkvVv%2BhSLfVa%2BbrLwu9FtKhE6aAGHIkn%2BRy9rmUsf1GFp4RkiJO2noj9omu%2B%2BVgDZcjWMzekajcnXjAzXJxaHYZnaS%2F%2FRkij3ChgVxy2qsPT7Im%2BzSiLQDPE6Yj5ffRNJ6EPerf5XgfNdiy2z4GZqf6X%2FtADQYJs9OVrxc5novL40DwjnqJxqxxSXNKTpJVr5MPxJ%2BamCWnHk7vYhCdOCLekcV8bhdMYHZ3Hk%2B0GPI%2FhZmZRCxGO1u9QCjPlSZFfGZYNM2MNrfAJt%2FTGk0amKEGGoK00I0mIB1O4flb7DoAgpSo0Y5SwjKbtrLa5tlTb%2FNYS%2B3d9cE7YAX4FES96ZqAbVGota%2BlDtFBd6DJEmMvpxHhuZ6g07Y5uU5ASa5vBNufHqSXsjG4tzQfPsCU8Vlba78%2FTTZqmBgTUUKlz%2FjmjYl1S4BugBakE%2FmuvwsDDQ9LDEBjqkAZdzC7rV92vLbZRtzG8dDSPzDA6aQiTOUK2ivubNQijAiSCzxIKQEJMAPyBa7HZQKYTkTOlB3h7v5%2B6UqQ6VmPYFyh218w4MtT6ua55ED4jYX3Yf87m5EbjmCxZKCFOQoqMDJXKdGS4zTBPakREPVaer5J2dfAUDYGcsGmlDxPo1I0AZDIigRpTlzlcZVgop9xCc0SXTd4vkpXmkFZ8vk8sy2BAN&X-Amz-Signature=03c53abbefc83072fd305d8f5fa06028f40b8d278a9c1f61284d924e1ea8220f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
