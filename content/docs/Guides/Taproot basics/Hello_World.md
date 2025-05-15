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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VERWOFDL%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCr1IOl92prBpoO1fwqEqpoBCpqwLOvw7B5xdlvZGDRDgIhAJZIG1acJcaw49arE%2FllhknZEWygXGoWGr%2FH8pR76gJrKv8DCCwQABoMNjM3NDIzMTgzODA1Igxasxl%2BiI3hwEiVafUq3AOMkZuNZbOT%2FLmehoMcwiE9QDCu6N94dO0Bip4qEYbQIWBT7AhzwGhVvw15IFyKwSX%2BZBp3JYAwxeWWmAPHs7TOytvMiI3XG6neXT7mfhmAHo8BKEkIwimQxa0kwC5agClabcwFrFfMLtZ4tglXNmSfduemi6RIvtVIu2uFQzwzLZcWXpORKLa4p8YoWqJ1jTRzlO0nGKlAIBPdjelgVpD2dbL%2Ba4LZ%2B64Mi9t6pcT2visrsfns0FkMDYxFhDtQ7d8IwzNlg%2BAUnMcXqtHl53LpyXHCYVp6V2EgG%2Fsa673CEmcrTztpvo0E1TU7W0v7FmxYAAc6%2BHz7w5xyWBaLXjByL6SgTIsd%2BKj3RVO5ZOWwficnHDKpaZtpySKbfLnfEDkRbgmhu0y1fkR73NZzU%2FTWafht1gmMLICKBvkok5CBbee4OBgXeD90iNfAD2sUIHVd1gMqaBfwwGCX8KG76r4OyDKUofhiGO6Nj56LNDLk%2FUfwRnjkReFUMVmG0QS3KrDa4d8j2c%2BK9slTW2AavG8SMlGYvlPdjOSUCOhbEwzu5LX%2FbydM3%2FD2mDzYIalvv7ha6UWFQIjHG12R7xR9DQH0T8t3gZw4zyv7i2jNWDcRPonUpTDjaizqHkKqJTCHhZfBBjqkAVvBkKMYlQjeS%2Be4OaQCuZvpxTGqphxzT7fllcmiPKTk0ISRkWselDiWAegUnDnCqf0RhgbZPZBkAxG0XZHv8dikamTgdVu7xVqp0KES6jcRIB10JVjcGXBobCxMRF%2FM9yCoMpUOZVhJB4LLWtcEjfvh7rVZ16rjPtJeUAEne5kkBrJ1rzn1LqasLjDbI2rfTqSqMrCzxKQpzh0Zoysj0UvUkUn4&X-Amz-Signature=6e9b8bb3b76c6e16c9e443cf77795c2f59c4a3ed9bbf6fccf15590890fec8116&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VERWOFDL%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCr1IOl92prBpoO1fwqEqpoBCpqwLOvw7B5xdlvZGDRDgIhAJZIG1acJcaw49arE%2FllhknZEWygXGoWGr%2FH8pR76gJrKv8DCCwQABoMNjM3NDIzMTgzODA1Igxasxl%2BiI3hwEiVafUq3AOMkZuNZbOT%2FLmehoMcwiE9QDCu6N94dO0Bip4qEYbQIWBT7AhzwGhVvw15IFyKwSX%2BZBp3JYAwxeWWmAPHs7TOytvMiI3XG6neXT7mfhmAHo8BKEkIwimQxa0kwC5agClabcwFrFfMLtZ4tglXNmSfduemi6RIvtVIu2uFQzwzLZcWXpORKLa4p8YoWqJ1jTRzlO0nGKlAIBPdjelgVpD2dbL%2Ba4LZ%2B64Mi9t6pcT2visrsfns0FkMDYxFhDtQ7d8IwzNlg%2BAUnMcXqtHl53LpyXHCYVp6V2EgG%2Fsa673CEmcrTztpvo0E1TU7W0v7FmxYAAc6%2BHz7w5xyWBaLXjByL6SgTIsd%2BKj3RVO5ZOWwficnHDKpaZtpySKbfLnfEDkRbgmhu0y1fkR73NZzU%2FTWafht1gmMLICKBvkok5CBbee4OBgXeD90iNfAD2sUIHVd1gMqaBfwwGCX8KG76r4OyDKUofhiGO6Nj56LNDLk%2FUfwRnjkReFUMVmG0QS3KrDa4d8j2c%2BK9slTW2AavG8SMlGYvlPdjOSUCOhbEwzu5LX%2FbydM3%2FD2mDzYIalvv7ha6UWFQIjHG12R7xR9DQH0T8t3gZw4zyv7i2jNWDcRPonUpTDjaizqHkKqJTCHhZfBBjqkAVvBkKMYlQjeS%2Be4OaQCuZvpxTGqphxzT7fllcmiPKTk0ISRkWselDiWAegUnDnCqf0RhgbZPZBkAxG0XZHv8dikamTgdVu7xVqp0KES6jcRIB10JVjcGXBobCxMRF%2FM9yCoMpUOZVhJB4LLWtcEjfvh7rVZ16rjPtJeUAEne5kkBrJ1rzn1LqasLjDbI2rfTqSqMrCzxKQpzh0Zoysj0UvUkUn4&X-Amz-Signature=d9f0c10de726fe0becb8c4ba04d4a5652e8e487c519f8ead86eba5628e1220d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
