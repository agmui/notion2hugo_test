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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YCFYBV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVQABNbilNDbov8DJ%2BWwYxw1MNkki7%2FWE76W3llcR2uAIgR7MT4M7klAHLzZjOBNzvy3Vy3Cct%2FMdBRSzPRMXYd80q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI%2BSYGA1Ssyu2caqlCrcA%2FZiZSpv5X8oZoUlMfajHOEkHjivFqw5s9QBjJLXpX9HNa5dcA%2F%2BQ9pz0HN4xSYEIMEEFdwtynNHmgCHk3jBxYHZiZNVNI2P%2Bc3%2BlbaFDj3IaSCGi9XytW74jjFBb7OYSJUxS1LwSVOK6bILhlwYj2E0maopeSKGTIEmTjA6UIexN1z7cCfaeegPa7fjS1QvW2%2BrslvzUFbw96M3Gz0SeXSAKsKsnK0F4qyNZE4yDkJjqtNQXh9EsdK0VRzuLHMyzIYO6hG8q%2B7VGnkHlhP7esezjv0RdLLerGCqtz7zBaxHI%2BV8qBjw3uacjqL1%2FyaBJu75F8JirMWrBrlgTXsHvvV69BYRTffuqQsmJMFNS7H3Ar%2FG8QLzAfSHQ6pMmz2XyhOt9k5O8djpZkK4AQKGIxCBleCvH7EmwrQhKS%2BTKSN3IlP4MC%2BYIgAwi9X0BGFwXFdhZMoSqjFoAVvfTrDLMg7VMLxv5o%2BlYi5M2Zic%2B55ovKrwnKl60T%2F%2F6D%2F9QSgF8u3SOFsEURCaGMoomG4aE3fwiwQlBs4z94qqm9rjwDOOTm4%2FzBxY8kPgvZBxQ4Aw9C4v5izNgvLXPlG6TTLkbd0FZkU15FLhVjPQ0E%2BjvyE%2FkHLeEfxKEaDW1UKeMIj9pcEGOqUB6nMfeFoieWmmX%2FRQ9SJYl7%2FDdtNQvYEhnk6S0hvxWidd0PADmisF8JKBKZGBD%2BjkPDLaybpaB9n0kTv77u9RtldaKa%2Fl7c0Z%2BQXxznpNTDq19UbmiFHGLdwdvpZZd641O52XcIYBYtlYqzrrTjP8Ua76xqBtUduo%2B6uyvcWN1r8DEFOey2By4UxJVqBGdMMS8%2FQg%2B6r4OkVrdc3bTtxsPb%2BT%2FSI6&X-Amz-Signature=7cfe52f51f464d3ec6b32125cd719365877af0b73f3730bcbffe912e7fcf8225&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YCFYBV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVQABNbilNDbov8DJ%2BWwYxw1MNkki7%2FWE76W3llcR2uAIgR7MT4M7klAHLzZjOBNzvy3Vy3Cct%2FMdBRSzPRMXYd80q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI%2BSYGA1Ssyu2caqlCrcA%2FZiZSpv5X8oZoUlMfajHOEkHjivFqw5s9QBjJLXpX9HNa5dcA%2F%2BQ9pz0HN4xSYEIMEEFdwtynNHmgCHk3jBxYHZiZNVNI2P%2Bc3%2BlbaFDj3IaSCGi9XytW74jjFBb7OYSJUxS1LwSVOK6bILhlwYj2E0maopeSKGTIEmTjA6UIexN1z7cCfaeegPa7fjS1QvW2%2BrslvzUFbw96M3Gz0SeXSAKsKsnK0F4qyNZE4yDkJjqtNQXh9EsdK0VRzuLHMyzIYO6hG8q%2B7VGnkHlhP7esezjv0RdLLerGCqtz7zBaxHI%2BV8qBjw3uacjqL1%2FyaBJu75F8JirMWrBrlgTXsHvvV69BYRTffuqQsmJMFNS7H3Ar%2FG8QLzAfSHQ6pMmz2XyhOt9k5O8djpZkK4AQKGIxCBleCvH7EmwrQhKS%2BTKSN3IlP4MC%2BYIgAwi9X0BGFwXFdhZMoSqjFoAVvfTrDLMg7VMLxv5o%2BlYi5M2Zic%2B55ovKrwnKl60T%2F%2F6D%2F9QSgF8u3SOFsEURCaGMoomG4aE3fwiwQlBs4z94qqm9rjwDOOTm4%2FzBxY8kPgvZBxQ4Aw9C4v5izNgvLXPlG6TTLkbd0FZkU15FLhVjPQ0E%2BjvyE%2FkHLeEfxKEaDW1UKeMIj9pcEGOqUB6nMfeFoieWmmX%2FRQ9SJYl7%2FDdtNQvYEhnk6S0hvxWidd0PADmisF8JKBKZGBD%2BjkPDLaybpaB9n0kTv77u9RtldaKa%2Fl7c0Z%2BQXxznpNTDq19UbmiFHGLdwdvpZZd641O52XcIYBYtlYqzrrTjP8Ua76xqBtUduo%2B6uyvcWN1r8DEFOey2By4UxJVqBGdMMS8%2FQg%2B6r4OkVrdc3bTtxsPb%2BT%2FSI6&X-Amz-Signature=9cbbdfea374470dc1d79746073acfb8b564eb18328c41564d81ae2d64594c5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
