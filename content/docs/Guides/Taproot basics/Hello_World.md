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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ZCHYKP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAZV%2Fi0nJXlyIhMCvZBqxO791yU5cwv6rkvSJ1cRtOn8AiA2xXu6L60gfi%2B%2BuM6LjuSyby2fMvstEBSj2gn5Kgy5TCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMvUVnf31oejvhjoIOKtwDH5mdeO3coRWzO8fIzMW9zjJs1iM7SKHU4ROKer6WDfDQmo5Xzpxm0YcWo3XawROsYUQnM4Kz1QFom8myFBwb17LrK43o4lVDr1ze%2FMvKzZ%2F%2FMM%2FwWdD%2Fs5rPUjp8KdvTlrU5j6ADm5LovyftxjN%2FiWor%2FBkw4nJaKxLjVA2DD%2F2%2FUFA1vJ5DtpwHB6Yrs9l%2F5P1QmKDf7P%2BWRtD6K%2F8Lfgo6%2F9KPV6ZXnEnkQ7OM%2BrWIG8P163x4ukeYff%2FJ2kg8QGW5inC%2Bm8WyURsDJ2O%2FQdsIh%2FRxJ2zeRvbIdQXjJAw0OJ%2FTRuXU%2BLSb8iWAmPEacQa9UgPshlLuv67U8sVhl470GUx2CcqO%2FBrH8qpJmXOij%2B3zuUFAkKsKndd0RLvTvpSGa7qkld0nWjlH8nL9MUeyS%2FjYLo%2B2v94lk0HHYC%2FQEAP68j762YIUMzac0E440ursFpKVaWS6UfYYWaqSUiZJtC2GMgZ18cJBAJkIUXom663CPsFsqklBh7sEiBoXc9mcyHErcql3csEFSlyGcktvWSO5Gh%2BSkaO7P7q5hKEzpNkV2o96gbA09cHFZY0O6N8Ilt2cFAz7CbkjsIygqfPQ7%2FCxcr5E4hZ%2BQlArB%2FSuNwEYKeSJkPI06nkwibjlwwY6pgEtqwa2CGjgX%2Bs3rb%2FoA8vyLtAzF3x8gqSoXSoGCrLoXYBOKgdBDDkpcX%2BzbeYfGaaqvrSEmlAH%2FHdD3YACzvKbwgK%2FZcFYClqJAjfeuhWO9NQamnRck8TkkjS22DyQmR%2FtiCalvr5X20lH%2BhKduo1Rljh15PSoHzAHMbGMYRpvMO8Ra2DWWm6ODgs8bGppLEOe7%2BQg8Xl%2BzGLSZXEFsueJeuT9M0GC&X-Amz-Signature=5365c89bf4d324ab0944b62e35fc1543194576d3060b6406521e1011c0ba1644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ZCHYKP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAZV%2Fi0nJXlyIhMCvZBqxO791yU5cwv6rkvSJ1cRtOn8AiA2xXu6L60gfi%2B%2BuM6LjuSyby2fMvstEBSj2gn5Kgy5TCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMvUVnf31oejvhjoIOKtwDH5mdeO3coRWzO8fIzMW9zjJs1iM7SKHU4ROKer6WDfDQmo5Xzpxm0YcWo3XawROsYUQnM4Kz1QFom8myFBwb17LrK43o4lVDr1ze%2FMvKzZ%2F%2FMM%2FwWdD%2Fs5rPUjp8KdvTlrU5j6ADm5LovyftxjN%2FiWor%2FBkw4nJaKxLjVA2DD%2F2%2FUFA1vJ5DtpwHB6Yrs9l%2F5P1QmKDf7P%2BWRtD6K%2F8Lfgo6%2F9KPV6ZXnEnkQ7OM%2BrWIG8P163x4ukeYff%2FJ2kg8QGW5inC%2Bm8WyURsDJ2O%2FQdsIh%2FRxJ2zeRvbIdQXjJAw0OJ%2FTRuXU%2BLSb8iWAmPEacQa9UgPshlLuv67U8sVhl470GUx2CcqO%2FBrH8qpJmXOij%2B3zuUFAkKsKndd0RLvTvpSGa7qkld0nWjlH8nL9MUeyS%2FjYLo%2B2v94lk0HHYC%2FQEAP68j762YIUMzac0E440ursFpKVaWS6UfYYWaqSUiZJtC2GMgZ18cJBAJkIUXom663CPsFsqklBh7sEiBoXc9mcyHErcql3csEFSlyGcktvWSO5Gh%2BSkaO7P7q5hKEzpNkV2o96gbA09cHFZY0O6N8Ilt2cFAz7CbkjsIygqfPQ7%2FCxcr5E4hZ%2BQlArB%2FSuNwEYKeSJkPI06nkwibjlwwY6pgEtqwa2CGjgX%2Bs3rb%2FoA8vyLtAzF3x8gqSoXSoGCrLoXYBOKgdBDDkpcX%2BzbeYfGaaqvrSEmlAH%2FHdD3YACzvKbwgK%2FZcFYClqJAjfeuhWO9NQamnRck8TkkjS22DyQmR%2FtiCalvr5X20lH%2BhKduo1Rljh15PSoHzAHMbGMYRpvMO8Ra2DWWm6ODgs8bGppLEOe7%2BQg8Xl%2BzGLSZXEFsueJeuT9M0GC&X-Amz-Signature=cf80cfa78eb2723505c7e1c613ea86d3119ff9cc0d088add2d5376f630fc41b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
