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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CVOWJA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvEkgb56o%2B%2B7kq259xIzxQKD8XdU4nBkpDCOOAn4HZeAiBgdFks6PD6WoSvPRTgo%2BWUKbrppliK2PAprtw2jrjCvSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM1iQwozRApAZl3p89KtwDqHc4LNhqyARxzd8Srq4rye2rTz6xppudkEgzBp24SwISj0VdtGb61D2b8A9HjPrziaoXarEEvFAiknm981TQ21ypb4iGNraml4H9YoXALlHH4I25myK4FKd8TlO1m%2BxrNpqd15O7pBhJ3O32rmZr2JgSp%2FCH5iR2htwdQ%2BLOZ8aUi7Sh2dfCXeFtCeJdFTMYIqRAvdb5K8tM1UNm63RXb96sfJsWIBdOFN8XYdRess873GI0OrP7v%2BDTOAEbSu2aK8NLpWkHlixITnYMYK1fZnFxjDsn7b5KqtytrAq0mMH%2BkJlgsxNi70MIxuPo95YWr11b0O87gyoptmhSRWteOLiQgZrpwOAxhhV2TTFl05RNWgGuv7ewK%2FBIJGJFPWBKut3uRW%2FWWe%2Fmb%2BKfpuRR8eAjT7w89L3UbY2mLGnIu%2BG0HGXF1hBN%2BE744QCdxeA%2FBy3LN7rDVi9OyBtxz0IaUh6CgutRQgYyJHaYUyqV%2F9BVsjAEYiecVXauA60vdxCZOHnWAvnc%2FTmV%2Bse5BuXGd5ewlKWnc9to7%2FT208lR0zSLsQjI7MpaEKJ2jTE5KAAs4DVU9YzUUX1HIMn49qX56CXWm75LNbQLwJDjivUmk5%2F353sriCopADmsD1kwouCAwAY6pgGS09waoM8ihByviN44xiImODJ4t2JHeT1OWCTUOaQRwtHI8if8VUe2O4ZQR9De%2FnREpqSyWNsldszLlkHvCsEie7jgHZPArQ2hynJAK8hVTk9Kr3T%2BqD9gpBWEpGyX9Xmk5BebnB3KqpApdyx298oosX3Qabg8myT%2FwhVAXnTkHQeA01%2Fjr0P9Cz%2B4z%2Be%2BOxbOCiIap4V9irqEDG7MBZznzfYPtK7p&X-Amz-Signature=dadb38dbf9691c4403458d69bcfc9399501f98f47d7a641643ec0e4e333bfd2d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CVOWJA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvEkgb56o%2B%2B7kq259xIzxQKD8XdU4nBkpDCOOAn4HZeAiBgdFks6PD6WoSvPRTgo%2BWUKbrppliK2PAprtw2jrjCvSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM1iQwozRApAZl3p89KtwDqHc4LNhqyARxzd8Srq4rye2rTz6xppudkEgzBp24SwISj0VdtGb61D2b8A9HjPrziaoXarEEvFAiknm981TQ21ypb4iGNraml4H9YoXALlHH4I25myK4FKd8TlO1m%2BxrNpqd15O7pBhJ3O32rmZr2JgSp%2FCH5iR2htwdQ%2BLOZ8aUi7Sh2dfCXeFtCeJdFTMYIqRAvdb5K8tM1UNm63RXb96sfJsWIBdOFN8XYdRess873GI0OrP7v%2BDTOAEbSu2aK8NLpWkHlixITnYMYK1fZnFxjDsn7b5KqtytrAq0mMH%2BkJlgsxNi70MIxuPo95YWr11b0O87gyoptmhSRWteOLiQgZrpwOAxhhV2TTFl05RNWgGuv7ewK%2FBIJGJFPWBKut3uRW%2FWWe%2Fmb%2BKfpuRR8eAjT7w89L3UbY2mLGnIu%2BG0HGXF1hBN%2BE744QCdxeA%2FBy3LN7rDVi9OyBtxz0IaUh6CgutRQgYyJHaYUyqV%2F9BVsjAEYiecVXauA60vdxCZOHnWAvnc%2FTmV%2Bse5BuXGd5ewlKWnc9to7%2FT208lR0zSLsQjI7MpaEKJ2jTE5KAAs4DVU9YzUUX1HIMn49qX56CXWm75LNbQLwJDjivUmk5%2F353sriCopADmsD1kwouCAwAY6pgGS09waoM8ihByviN44xiImODJ4t2JHeT1OWCTUOaQRwtHI8if8VUe2O4ZQR9De%2FnREpqSyWNsldszLlkHvCsEie7jgHZPArQ2hynJAK8hVTk9Kr3T%2BqD9gpBWEpGyX9Xmk5BebnB3KqpApdyx298oosX3Qabg8myT%2FwhVAXnTkHQeA01%2Fjr0P9Cz%2B4z%2Be%2BOxbOCiIap4V9irqEDG7MBZznzfYPtK7p&X-Amz-Signature=ec6cba7516116dd48615dd84a2547ed7b4b08b67330ad85c8f61ae3c8460f7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
