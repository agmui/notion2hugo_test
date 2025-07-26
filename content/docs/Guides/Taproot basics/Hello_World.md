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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AFMYR3G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCSU7DrTRtEqxqLInkjL%2BRndZRWklPSqaHBsTuMQfyNKAIhAO%2FMY7io0cPoMCDFnC25bedmigBx87xKWgc5pc1Kgg2hKv8DCFMQABoMNjM3NDIzMTgzODA1IgzBlYe%2BcjhDqnLugscq3AMXawJi0X9aChgGLtwi3wcRjZ8q6x0tkxe8136Z9%2FjJcT1%2BmfFDc3H068yjGsuah3Lejlgqm0B6OUdA5XG84rNWHW2ewhAVuq2FxqmaGHdi0qtIMh5tJFPdzEF2MadltEJ6wTPs%2BBAz6cJrhruw%2FIx3WIzhnwMGSjgPZ99MZcbiyUGxy%2BCcXwenfXLF2ksLgrxPo4dqEtxeR%2FZikP1fcJ2VnAS8US9%2FkF2bWWViZoY1fd8a%2F60aSoUibNNCn2cjnNaw6fnOck1G9l1M13LQAD9KwXuxfsFIqClT4v19wOly7K0Zb43eCV8txnlFzddn1qRTrwQekfxe2iYbovO4wKgY33ajtYGgmXFl%2FIyyCKh0QpWyhe2SQzGty9iEUrJ3cVdgaWzZP94GtGkksicg00xLXEg3XnhUICLsffEqqjSSpeFN%2BfM%2Br13E21xF%2BVdy00cR9yaGb2ZSRJ6Ka81r2cR%2B9pq8PrUDD0EvGTUclHbYxe5tvpGVNHcteZJ%2FwsSYiejIRzjAeW%2BJTEtW7t%2FbtEfKY%2BchFhQ3uNekmW3F7yCdSkxAbseMksPNeQRHaPUfPuktI9ej%2FTp5hhGTck%2BGTLLi5THJH41aLd8jt3DMgzQGNLqUMIiX11XgbLwNlzCd95DEBjqkAUmP4INwTaD8J5rLjdg4Ugqik8u0bB5y4xEbH2RlJ%2FDBGJGdMm5%2BJp43vWFIZpYkHoxzH61cSW3kUVHq7K8AqkLLvzHLuKoYYSeJIq98U65sF45csxrrofOWHOYHyi4iTCLxYi02J6CFn4EYnRSdzU1i1T8FDW5IMacjZ80%2FBxShiOB22mp9u4rY3K1aGKgBpsXgQWLvrAe4WhYv3Ghl8gG3wT%2F9&X-Amz-Signature=87285e29a9f845d841a393d1ae8bcf0ac8623b3860f7096beede2c8553270384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AFMYR3G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCSU7DrTRtEqxqLInkjL%2BRndZRWklPSqaHBsTuMQfyNKAIhAO%2FMY7io0cPoMCDFnC25bedmigBx87xKWgc5pc1Kgg2hKv8DCFMQABoMNjM3NDIzMTgzODA1IgzBlYe%2BcjhDqnLugscq3AMXawJi0X9aChgGLtwi3wcRjZ8q6x0tkxe8136Z9%2FjJcT1%2BmfFDc3H068yjGsuah3Lejlgqm0B6OUdA5XG84rNWHW2ewhAVuq2FxqmaGHdi0qtIMh5tJFPdzEF2MadltEJ6wTPs%2BBAz6cJrhruw%2FIx3WIzhnwMGSjgPZ99MZcbiyUGxy%2BCcXwenfXLF2ksLgrxPo4dqEtxeR%2FZikP1fcJ2VnAS8US9%2FkF2bWWViZoY1fd8a%2F60aSoUibNNCn2cjnNaw6fnOck1G9l1M13LQAD9KwXuxfsFIqClT4v19wOly7K0Zb43eCV8txnlFzddn1qRTrwQekfxe2iYbovO4wKgY33ajtYGgmXFl%2FIyyCKh0QpWyhe2SQzGty9iEUrJ3cVdgaWzZP94GtGkksicg00xLXEg3XnhUICLsffEqqjSSpeFN%2BfM%2Br13E21xF%2BVdy00cR9yaGb2ZSRJ6Ka81r2cR%2B9pq8PrUDD0EvGTUclHbYxe5tvpGVNHcteZJ%2FwsSYiejIRzjAeW%2BJTEtW7t%2FbtEfKY%2BchFhQ3uNekmW3F7yCdSkxAbseMksPNeQRHaPUfPuktI9ej%2FTp5hhGTck%2BGTLLi5THJH41aLd8jt3DMgzQGNLqUMIiX11XgbLwNlzCd95DEBjqkAUmP4INwTaD8J5rLjdg4Ugqik8u0bB5y4xEbH2RlJ%2FDBGJGdMm5%2BJp43vWFIZpYkHoxzH61cSW3kUVHq7K8AqkLLvzHLuKoYYSeJIq98U65sF45csxrrofOWHOYHyi4iTCLxYi02J6CFn4EYnRSdzU1i1T8FDW5IMacjZ80%2FBxShiOB22mp9u4rY3K1aGKgBpsXgQWLvrAe4WhYv3Ghl8gG3wT%2F9&X-Amz-Signature=66128246d363c0c3755a43f222721f19e81426a9cbc755fd7265530d3ee6f0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
