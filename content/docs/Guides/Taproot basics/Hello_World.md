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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HBFTY5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDbsaX1zSpa1H%2F3uizSnWQ36TGj8pVBzTHoN83%2BJ5h2BAIgURvQst9Gtz5bkD7Pse4e58jUGutFLtI1%2BCLfUf%2FHgRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhx0WQsdLSpeeQ5hircA4FX4O51v0enD8XNMP9HdJAb2ozpERERPWQlQEjzreeDpzFBe3W5rRetpfGeKjNvZD0kaLisRg5MKT%2FAW5ue2KJR09%2FZ%2FIaTiaHkqo1X%2B9Ni3Ela9zM7iA3gZNEvmXT9I6lqokjfTOVa1jSD5JF5sV4eQ29TcVo7NaeCc3%2B3Fn34GD3eOOew1R1oReJw%2Fbz5HBjN6pHgtlrRtTK9hFDNBN%2BkjpUzRiU6pBuwpHdX3D65hzy%2BNks9J1DD%2BH7xy%2FP16paXjxDSFqWi%2BzXH63P%2BLNCPTI3wNjnbmjFZdVXG3pVSwc3CwHA63OVt%2Bng4mINTq63%2F%2BBy6IxZajFrcwOol8On2sJtqgfwKmtPsUGFkv2y2CkrbjqCmZPS7vaEzdTY%2FzqTRCMIsNBlFkRYVdWYfTxBN9Njf%2Bs72IGCOr9Yi6uDhDO0mCMiMCGaqZFmhzyPyeU7glYSYjF%2BWFLzCV9kwqOASdify9p%2BWci%2BAzLLyMCpT81O4quTEzB4fsM6ICnYB4nCkECCdemXsZRh%2FIe7gEM0KTDXxuyFNiDDrwPJ1qIYFuiqxYSI69aABpaI4fMThNrpDjBUSoAhNVx03fEbNZOIGZNDdVdtQ84eBaD4nWHl5Lule4Ec6QPeBdZEJMJbt%2BcEGOqUBQpxF8u5NA3o8E9toHG2nUvAvOzoNscinbRVeiItLkfDfL046zl69uZtplIg%2BYWmkGAPXmu7MbjI2Hkxw1urf%2Fst4OsWM6WDmUMjFYNHVVCnVyuPJQJwtCMQoO1Xe895w6bY4%2B0wWGVwhMkYq%2F6zxN0mooFa%2FlfH0QbHeNsxa9bdhsydxjbyBJbmZSyy0xzDvCR2Br98HGwzwIBx9gwkNfmVJ%2BMWe&X-Amz-Signature=082fb883662724ced0835e35df2d129e31a434f0f7548de03adb67582bdb48ff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HBFTY5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDbsaX1zSpa1H%2F3uizSnWQ36TGj8pVBzTHoN83%2BJ5h2BAIgURvQst9Gtz5bkD7Pse4e58jUGutFLtI1%2BCLfUf%2FHgRMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhx0WQsdLSpeeQ5hircA4FX4O51v0enD8XNMP9HdJAb2ozpERERPWQlQEjzreeDpzFBe3W5rRetpfGeKjNvZD0kaLisRg5MKT%2FAW5ue2KJR09%2FZ%2FIaTiaHkqo1X%2B9Ni3Ela9zM7iA3gZNEvmXT9I6lqokjfTOVa1jSD5JF5sV4eQ29TcVo7NaeCc3%2B3Fn34GD3eOOew1R1oReJw%2Fbz5HBjN6pHgtlrRtTK9hFDNBN%2BkjpUzRiU6pBuwpHdX3D65hzy%2BNks9J1DD%2BH7xy%2FP16paXjxDSFqWi%2BzXH63P%2BLNCPTI3wNjnbmjFZdVXG3pVSwc3CwHA63OVt%2Bng4mINTq63%2F%2BBy6IxZajFrcwOol8On2sJtqgfwKmtPsUGFkv2y2CkrbjqCmZPS7vaEzdTY%2FzqTRCMIsNBlFkRYVdWYfTxBN9Njf%2Bs72IGCOr9Yi6uDhDO0mCMiMCGaqZFmhzyPyeU7glYSYjF%2BWFLzCV9kwqOASdify9p%2BWci%2BAzLLyMCpT81O4quTEzB4fsM6ICnYB4nCkECCdemXsZRh%2FIe7gEM0KTDXxuyFNiDDrwPJ1qIYFuiqxYSI69aABpaI4fMThNrpDjBUSoAhNVx03fEbNZOIGZNDdVdtQ84eBaD4nWHl5Lule4Ec6QPeBdZEJMJbt%2BcEGOqUBQpxF8u5NA3o8E9toHG2nUvAvOzoNscinbRVeiItLkfDfL046zl69uZtplIg%2BYWmkGAPXmu7MbjI2Hkxw1urf%2Fst4OsWM6WDmUMjFYNHVVCnVyuPJQJwtCMQoO1Xe895w6bY4%2B0wWGVwhMkYq%2F6zxN0mooFa%2FlfH0QbHeNsxa9bdhsydxjbyBJbmZSyy0xzDvCR2Br98HGwzwIBx9gwkNfmVJ%2BMWe&X-Amz-Signature=9d2756d123b455eae5f3c98634045d8da05123f0ac5b9c0af20580288ee25a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
