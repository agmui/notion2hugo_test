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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JELSFUH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC9bmqW0RxbR1QohwnXWliuVNtu9SheUJh%2F%2FoOCTExqjwIge9VjKoy6XPrifA3AuSWu%2F1jZ2IBnd8ccfNyt4p5NEW0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNz9cZ7S6ZZDS2BK6SrcA9z%2FFx2sSGrGpE7WK%2F%2Fy0FisS7gXq29B7h7EisFWedFn9FzJyju%2B3T4WBfkuHDaRnDo2Tn%2FuFvdxXArDEhXHYmJELzlOTtC1QjPVakxvv6oWT7iQWdXCCx8qGoHmL602UG3ef2BJZ55ZfHz89PWBOdfs3wCHn%2Fl1uVdFT%2BLE6R0NajLY3TQJnZI%2BfI%2BfCbhyN4kJSrIW6Inej%2Fim95dP6rpi%2Bc9jzVwuQD9IjkUG2oXGqvWxPsIfVylkE9gKj3xLGy%2F0yN63zB2e6iCXV5WNDo39wiYoiKmiRubfMpDfOc7ReHgQ%2Bj%2Fy86DN2EQif4YLtxlETA0UlzyU%2FARKvcptC7pUnkZqnKgVa02Z99nzY9JfL09ZxhqaNjczhBV%2BnxQYo5MKCiq5lDbTnkLdNLlgvyzrfRIs2yry%2F%2F8bIzZ9V4ZJXdmTLVu5Z67WYcvA9pYQHcUhRmLUwXtwagWNHu84Z5SoL9TIf2%2Fo9zNrifjUOv5SQwyiP7wLLBwzfOXpMdeVv49xQZoq465vsKHujri%2BQwLX%2FFOInNvz%2BPV33JbjHIyRplgJ28RWo1rtjAJOPp0kBpObHo9XXM9u0ONiric1yGGmCsS%2FynRiqbFcotWZjQqT%2BIEZyl6YHkbYzc22MIrFzcEGOqUBO7NypQgFYi3stGs1tq1mwmBMWoHRn3ycDYMVGZbi4XhByiqithMIFwLKwtQAUqPGZDc%2FK%2BSTJwaiGW7Cm9V1m6MOYjKWodRnJ8W0UvYnTyT3%2BUOqEZbtyr5s1SKGIH6YRvRThJgPa%2FRFL8mT1Ox8O6DOZRw7K7muN2sDe1n1BgbSe%2FcqqAUfjDjp%2FOyG4tH1BC6FWO1Y0cN2JliGo0WSre4qt093&X-Amz-Signature=3aae3b87c4fec324b34463b3f00faf0978112d83ebdf96f312586c7d265a48fa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JELSFUH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC9bmqW0RxbR1QohwnXWliuVNtu9SheUJh%2F%2FoOCTExqjwIge9VjKoy6XPrifA3AuSWu%2F1jZ2IBnd8ccfNyt4p5NEW0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNz9cZ7S6ZZDS2BK6SrcA9z%2FFx2sSGrGpE7WK%2F%2Fy0FisS7gXq29B7h7EisFWedFn9FzJyju%2B3T4WBfkuHDaRnDo2Tn%2FuFvdxXArDEhXHYmJELzlOTtC1QjPVakxvv6oWT7iQWdXCCx8qGoHmL602UG3ef2BJZ55ZfHz89PWBOdfs3wCHn%2Fl1uVdFT%2BLE6R0NajLY3TQJnZI%2BfI%2BfCbhyN4kJSrIW6Inej%2Fim95dP6rpi%2Bc9jzVwuQD9IjkUG2oXGqvWxPsIfVylkE9gKj3xLGy%2F0yN63zB2e6iCXV5WNDo39wiYoiKmiRubfMpDfOc7ReHgQ%2Bj%2Fy86DN2EQif4YLtxlETA0UlzyU%2FARKvcptC7pUnkZqnKgVa02Z99nzY9JfL09ZxhqaNjczhBV%2BnxQYo5MKCiq5lDbTnkLdNLlgvyzrfRIs2yry%2F%2F8bIzZ9V4ZJXdmTLVu5Z67WYcvA9pYQHcUhRmLUwXtwagWNHu84Z5SoL9TIf2%2Fo9zNrifjUOv5SQwyiP7wLLBwzfOXpMdeVv49xQZoq465vsKHujri%2BQwLX%2FFOInNvz%2BPV33JbjHIyRplgJ28RWo1rtjAJOPp0kBpObHo9XXM9u0ONiric1yGGmCsS%2FynRiqbFcotWZjQqT%2BIEZyl6YHkbYzc22MIrFzcEGOqUBO7NypQgFYi3stGs1tq1mwmBMWoHRn3ycDYMVGZbi4XhByiqithMIFwLKwtQAUqPGZDc%2FK%2BSTJwaiGW7Cm9V1m6MOYjKWodRnJ8W0UvYnTyT3%2BUOqEZbtyr5s1SKGIH6YRvRThJgPa%2FRFL8mT1Ox8O6DOZRw7K7muN2sDe1n1BgbSe%2FcqqAUfjDjp%2FOyG4tH1BC6FWO1Y0cN2JliGo0WSre4qt093&X-Amz-Signature=cf1cbacd4538f26ad58014f1869efbf098a5364310d8601d73df48954e7d178b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
