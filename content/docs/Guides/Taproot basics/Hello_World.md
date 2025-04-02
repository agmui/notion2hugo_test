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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VA4EAK2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFNWVRBhnP83QQyY8T8rn69aHdNpoIDDsHjDqfxiGwYFAiEAynwx7An9uGlircBG6kxsHQdu7GcLGuXM4BeH6dz3NF4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbRiNYtgAnLYPcTdyrcA%2FnZepWsr2NhnmWDR9KHgxtCEOsPbipbP0mbIXgAqZuaFUqcG6mNt%2BYPJDSjMF3TWA7dF%2B0FPgnxeG1cUMP%2BN1STwaTdy45qBTdxwnKSKyAGE56vk2EDEKV5Ior2t3JS9yf45QEb4J2CmUYo0haox1rnKOcAtJ5CrcKrbbdGEsgXqkAN9cGqNJYMO%2FVp%2FsxnRWv4x9fV%2BGpF8aHAPC3Bi20SuNJ%2BBLvP0h6CYMwujEID6l13fPmjTNxc4oGNZg4Zut38BjiX21pXGOTEXNGUOBZVyn%2F8PSqOvlCfaXZE%2FFaMX4i43s0jsOefZ%2FS5Y8G%2BxJEMRdwYmrqacmDvK9vowiW4xjevDJ2rHfCuRmoWXFg4yEpbptfXJe2PZz%2Bvo%2BJT2aq6DO9gFhRq9nhwbBy%2FS6X1z%2BLr8G8Doke40u9aaU1cPMDR2LWmYcLsd8jyNKHVqYp2WKqU5NG47IDL%2FSi8CZvnAbM2AUI58cBzfwnS4rNnXHwKjlErcxBtZnhnWmN5WCunNW9RKPKbjcsfKd%2Bdmb3YJwbSR2y929sgOJjGFYS4Q6cw%2Bco0XgjlLq9s9jC%2FXvShZB15R7ZKAsvN4BFCDNZIx%2FzxGwBOK7XnS%2F3gi1dzu9x%2FXYouqiYEsrs9MM%2BDtL8GOqUBCvuFKeOmSXzit%2BeX50Kg6B19s4oorjoUh0n3JdkTvsp2LXrnxobvu6l7FS%2FsqtxDmR2jOs8nnNJHM3SFsuI%2Fr0VYulDVE474LPAlo5gJc1tyRqBobrGJi4rSUMVn4nmcsNB%2BQdesJruA04u8BNr2SqS%2BqTtWESeRGxacvukZVPHcGmyC4VJQQIY8m6kOY2w1l8s5kBTm%2F6%2F2epVo0UgPWYghl2PZ&X-Amz-Signature=eb5fd4f391d6374cdf92bb360b20e3926a77433f2403154d8aa468ed83dce5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VA4EAK2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFNWVRBhnP83QQyY8T8rn69aHdNpoIDDsHjDqfxiGwYFAiEAynwx7An9uGlircBG6kxsHQdu7GcLGuXM4BeH6dz3NF4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbRiNYtgAnLYPcTdyrcA%2FnZepWsr2NhnmWDR9KHgxtCEOsPbipbP0mbIXgAqZuaFUqcG6mNt%2BYPJDSjMF3TWA7dF%2B0FPgnxeG1cUMP%2BN1STwaTdy45qBTdxwnKSKyAGE56vk2EDEKV5Ior2t3JS9yf45QEb4J2CmUYo0haox1rnKOcAtJ5CrcKrbbdGEsgXqkAN9cGqNJYMO%2FVp%2FsxnRWv4x9fV%2BGpF8aHAPC3Bi20SuNJ%2BBLvP0h6CYMwujEID6l13fPmjTNxc4oGNZg4Zut38BjiX21pXGOTEXNGUOBZVyn%2F8PSqOvlCfaXZE%2FFaMX4i43s0jsOefZ%2FS5Y8G%2BxJEMRdwYmrqacmDvK9vowiW4xjevDJ2rHfCuRmoWXFg4yEpbptfXJe2PZz%2Bvo%2BJT2aq6DO9gFhRq9nhwbBy%2FS6X1z%2BLr8G8Doke40u9aaU1cPMDR2LWmYcLsd8jyNKHVqYp2WKqU5NG47IDL%2FSi8CZvnAbM2AUI58cBzfwnS4rNnXHwKjlErcxBtZnhnWmN5WCunNW9RKPKbjcsfKd%2Bdmb3YJwbSR2y929sgOJjGFYS4Q6cw%2Bco0XgjlLq9s9jC%2FXvShZB15R7ZKAsvN4BFCDNZIx%2FzxGwBOK7XnS%2F3gi1dzu9x%2FXYouqiYEsrs9MM%2BDtL8GOqUBCvuFKeOmSXzit%2BeX50Kg6B19s4oorjoUh0n3JdkTvsp2LXrnxobvu6l7FS%2FsqtxDmR2jOs8nnNJHM3SFsuI%2Fr0VYulDVE474LPAlo5gJc1tyRqBobrGJi4rSUMVn4nmcsNB%2BQdesJruA04u8BNr2SqS%2BqTtWESeRGxacvukZVPHcGmyC4VJQQIY8m6kOY2w1l8s5kBTm%2F6%2F2epVo0UgPWYghl2PZ&X-Amz-Signature=cfee11aa3f63954887e445a3d8f887e6b3787972c2071021cf383d143f3a5151&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
