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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357HHQJG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHKTRYxQ5jwIVVLISgnCgAdgGZf%2Bk%2FyC1eIWmE7OjjPAIgDtXEfk3hqkh5zJYGRdoUQAbTu8AU%2B%2BrQgbzvt4ZEKvUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMKSbV4EPxAo741S1CrcA%2FpBBxPy4QyMbTsSZNpbReUcqEJyGAihWc0nZvLDhT4m2D5DTD7Zgvem5F8XTnGfEo94665kRBa6HE9COFZBEZPv2%2Fo7cvuSGTQfo%2BEg%2FXvoxbBDwkS9GYjlA4YTAj9bkPHXkiRXHMJV0GTiQ3y%2BpPSeWKCgHg0VLK5PzL2igN4WvGdXkb4W48s4rVsL69zUUJgDycrNZYZPqoNPgRp1BDqdlQiLjr2vqLxmeH8D4c4U8vGEjE850O6c6%2BWjaQcDBgdVSf%2FBuVwMDGwBXVvS58vJXujbbEnWZaD3niQcxkOF21oeCd2gtrj4SUkQMiqCENf8NCxVWvjtV%2FVXwYvUGhmrqil3oCLR9l9n%2BrGD2KyYs0bK9uwu%2FIZ%2BUGnsP97nUvTaUtS54Hudcm6OP10WEycb50KOoySEUoz2q8bzLVRN1eDrfHgzOVXtjCKULLgJiqPHmGUVLHZDrzFeujCSZLR%2F4Z6ig0%2FdKW8yOPgAQdMdneHn8%2FxHJ0P0FK5R2IAVC4bfUJLV6uw%2B1%2BU302xV0GFR5iyYyzbXkBmQZ0QCePZ7ZcmwRRrD6BlKITZM7sNT4ttxJkvfeT8KrKN6O3WRlozjoolOrzVQk0zmPH%2Fzit5gaaOv8mDZ%2B1%2BQ9V8NMLuB1sEGOqUB6rrc5EhAIbk94uag5UpGzss19mwUj9o1%2FJEn03gDhT3x6KdTwbmt8VYIbYWvn1NGEbKqIpUjv8Mvhn6oszZMen%2FWybJ5cDC97TJC0LqyUNgkezwi%2FX3pWfJsSaP9AHBpr%2BM2omQpU14xGKnLVumv%2BA5iMyOKS8fA6ktscKGVpI%2FS5LMhfMHllbrlbuurYM3ioVs8lbpjRzrXuHqRXwNaKXO89SQj&X-Amz-Signature=cdfd07dc148a774a5726b7417ffde6d7bef1510992c0de3e519626c222e47e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357HHQJG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHKTRYxQ5jwIVVLISgnCgAdgGZf%2Bk%2FyC1eIWmE7OjjPAIgDtXEfk3hqkh5zJYGRdoUQAbTu8AU%2B%2BrQgbzvt4ZEKvUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMKSbV4EPxAo741S1CrcA%2FpBBxPy4QyMbTsSZNpbReUcqEJyGAihWc0nZvLDhT4m2D5DTD7Zgvem5F8XTnGfEo94665kRBa6HE9COFZBEZPv2%2Fo7cvuSGTQfo%2BEg%2FXvoxbBDwkS9GYjlA4YTAj9bkPHXkiRXHMJV0GTiQ3y%2BpPSeWKCgHg0VLK5PzL2igN4WvGdXkb4W48s4rVsL69zUUJgDycrNZYZPqoNPgRp1BDqdlQiLjr2vqLxmeH8D4c4U8vGEjE850O6c6%2BWjaQcDBgdVSf%2FBuVwMDGwBXVvS58vJXujbbEnWZaD3niQcxkOF21oeCd2gtrj4SUkQMiqCENf8NCxVWvjtV%2FVXwYvUGhmrqil3oCLR9l9n%2BrGD2KyYs0bK9uwu%2FIZ%2BUGnsP97nUvTaUtS54Hudcm6OP10WEycb50KOoySEUoz2q8bzLVRN1eDrfHgzOVXtjCKULLgJiqPHmGUVLHZDrzFeujCSZLR%2F4Z6ig0%2FdKW8yOPgAQdMdneHn8%2FxHJ0P0FK5R2IAVC4bfUJLV6uw%2B1%2BU302xV0GFR5iyYyzbXkBmQZ0QCePZ7ZcmwRRrD6BlKITZM7sNT4ttxJkvfeT8KrKN6O3WRlozjoolOrzVQk0zmPH%2Fzit5gaaOv8mDZ%2B1%2BQ9V8NMLuB1sEGOqUB6rrc5EhAIbk94uag5UpGzss19mwUj9o1%2FJEn03gDhT3x6KdTwbmt8VYIbYWvn1NGEbKqIpUjv8Mvhn6oszZMen%2FWybJ5cDC97TJC0LqyUNgkezwi%2FX3pWfJsSaP9AHBpr%2BM2omQpU14xGKnLVumv%2BA5iMyOKS8fA6ktscKGVpI%2FS5LMhfMHllbrlbuurYM3ioVs8lbpjRzrXuHqRXwNaKXO89SQj&X-Amz-Signature=3bb4749044e0dfc918278185b3bc8bc83ee79c5a3929f852a51f8605d5b29c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
