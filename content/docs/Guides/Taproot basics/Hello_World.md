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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEG6MPT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAJMzK3cJavntOjMwd%2Bc9EptYJz8qdNLhj7yUYA2KnlmAiEAnMhWrYArhW%2FLRBl4fJ1Ijy%2F39lJj26PUk7VlI4o9vlkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBzMMwlkojzlSIclkCrcA4g9B7xx5F99uLyZeRSAHbKRiVjJXhps33%2FnXcP8bS2qp5TQQmPr0GIu6g37CXUITJy8LS2Vl%2BnLMboIphpjMZub1EnSB3RlWuI9OTMYwkCzMBsVQ%2Bvkr%2BYAm8addxaR8Ga9SpjRyuZHInRaO3P%2BTM9Si9oLxB%2Fn6lDWERuKW5HNwNvn6nUPmQrdLcbuEnA%2FLumMGssz5rjiAF581okb5NOdVb55OmpIWFplY%2BlcOitRZV%2FUueHGYmfiGr33fLzz3WOqOIVF2optelppK%2FXOuDnr67sNhGfIEA5bX%2Fw85d69X4Cy4D1mzxQnXp1HwADazOmYgcpwN04QnuONUI6caIrikk%2FXDSCYDaMRkSFYXDSZI2vYalt71XF%2FbGhByQsvxTsQHz2GSqwyVEncITHsusl30%2F8sQl%2FlutpsHOiApfJLf5WZLfZDHOUBKnaUcstyYxc%2Fvpfbg4phi%2FwzTPr86WJAnEZ%2FvqmLIza0VNPRmPSPaL%2Bfo3wlLxEgqyPvFajaxuphmUyhK7pXmRMTT7OrmIh6gFMZVASmF2h5W%2Fe43MC%2F8lixi%2FzRChYkEhrp0ZW0wrbTb1iiz7O%2BhDU7WT1EAsFEN%2BF%2BS0oiUX6gqygeXAg0PgZQEvKsykZ%2BfSwJMJjo9b0GOqUBuR5zy%2Br1ZiBoyKUQ8VdAxQWgg%2F9iiwbmGgrlRhKTcPapn3u5iziEJ%2FpLB0e8pcurgLfLZ2bpONhFQHAIdlIEnZWwTyM%2Fj40Tu9p%2BJK%2FGuCplvdkZZTxaLwfVN6RDFUimgFTv%2BlfLmHmr%2FUlEkiZvFWOt6XekDhZUbeILF3SJi%2FQA4j7P9v34MXV7qs%2FPY9AD8ryVlR4ZyZ66Gra1KniCP2nesEzz&X-Amz-Signature=1a3e3025f4daec0a23f21a2d9756a1b67f86b72b0859064c92307a9289777247&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEG6MPT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAJMzK3cJavntOjMwd%2Bc9EptYJz8qdNLhj7yUYA2KnlmAiEAnMhWrYArhW%2FLRBl4fJ1Ijy%2F39lJj26PUk7VlI4o9vlkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBzMMwlkojzlSIclkCrcA4g9B7xx5F99uLyZeRSAHbKRiVjJXhps33%2FnXcP8bS2qp5TQQmPr0GIu6g37CXUITJy8LS2Vl%2BnLMboIphpjMZub1EnSB3RlWuI9OTMYwkCzMBsVQ%2Bvkr%2BYAm8addxaR8Ga9SpjRyuZHInRaO3P%2BTM9Si9oLxB%2Fn6lDWERuKW5HNwNvn6nUPmQrdLcbuEnA%2FLumMGssz5rjiAF581okb5NOdVb55OmpIWFplY%2BlcOitRZV%2FUueHGYmfiGr33fLzz3WOqOIVF2optelppK%2FXOuDnr67sNhGfIEA5bX%2Fw85d69X4Cy4D1mzxQnXp1HwADazOmYgcpwN04QnuONUI6caIrikk%2FXDSCYDaMRkSFYXDSZI2vYalt71XF%2FbGhByQsvxTsQHz2GSqwyVEncITHsusl30%2F8sQl%2FlutpsHOiApfJLf5WZLfZDHOUBKnaUcstyYxc%2Fvpfbg4phi%2FwzTPr86WJAnEZ%2FvqmLIza0VNPRmPSPaL%2Bfo3wlLxEgqyPvFajaxuphmUyhK7pXmRMTT7OrmIh6gFMZVASmF2h5W%2Fe43MC%2F8lixi%2FzRChYkEhrp0ZW0wrbTb1iiz7O%2BhDU7WT1EAsFEN%2BF%2BS0oiUX6gqygeXAg0PgZQEvKsykZ%2BfSwJMJjo9b0GOqUBuR5zy%2Br1ZiBoyKUQ8VdAxQWgg%2F9iiwbmGgrlRhKTcPapn3u5iziEJ%2FpLB0e8pcurgLfLZ2bpONhFQHAIdlIEnZWwTyM%2Fj40Tu9p%2BJK%2FGuCplvdkZZTxaLwfVN6RDFUimgFTv%2BlfLmHmr%2FUlEkiZvFWOt6XekDhZUbeILF3SJi%2FQA4j7P9v34MXV7qs%2FPY9AD8ryVlR4ZyZ66Gra1KniCP2nesEzz&X-Amz-Signature=447f3fe885e79c20ace0e430579762946f7950490cc6eef16666215a4e375472&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
