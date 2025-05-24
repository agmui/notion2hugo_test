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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAZKW4B4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDDRF3C1p5dZeJAr7ZfuAT5eAYC9bw9vIca%2FFxfSXcD0AiEAvHZuNEuNh9IHVz%2B5z1sIDTIFvrfy1pF%2B4DTYkHKVK3Eq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMhdOH8CT13g%2FPIQZircA%2FYKmah0Y0c%2B3Mkj5ZXp2GO5MKCIg%2Bkhu4ajVvlBv6rcEOyG1rqjNhZhw1F%2Bu%2BJ259cW0dmCC90WXfTyk1V5fiWOSuHmICKbpnhnnAIKxkNEheTKMCOldV9hhHhGIJ7YuEfjGZ0xZFqru2gDWs%2FJnWLtNgu0UCKSQlLCu4w4Gy3qkdS5F5n6DnY4khSG15DyBBvSuE46pMSHd20mBi84uXRgu2Xony7llLrTy6VPWMCR7ys5D31OzNyXQQ32nVgiNz5oZnxjB%2BakxZRP2qYfnLoEK7WERjOi5ci0FaoYF78VLf%2FszDmE3ilxT%2BymwRJfWwXVJmuQ6um%2FsjmnNzThuTgXQdlF48iV0pwKJL0tT5cOU%2FI6FzKtyUK0DSnMI6n3YmBPXvbG%2BHVdUWpXBsOe0kCecn0Im1vTzLVTp0zixsseEl22nZFxCKGYvx6mfEPyUJNclFYx8gE4HtRoC1NFGTUOyF%2F%2BnwPAu9CEIpsYpBZDNWS5ePalfC2WMKljUVU%2FVfhampf7kCI4y4vaqeT1HNXF28Ashw%2FCh8ny1xB6STcrnb4532zRZmmmKqkoAJYBRKbzMrE8q6LSLctcSaCFPThAPSXF5gFsu5VyUZ7bHZPpfMT9QqWHwAwmXVNuMI6BxsEGOqUBQskxJmJJ%2B5HQfraxc8Jd0zgeUuIxbLMvuEK0%2BOFGb97DeHoeSEv%2BGyxX0UYSe3tolYkJ%2BIvxr6poK6WwNyBfMQMFLGIA6OIe9Yn%2F6A2D9HizMZf6FHNTuRu4dXV%2FdqveGxXm8WIGIrmm9vEFgRWfWc1I4zqrSpeGdDDOxhnc2fcWpwF%2FL6WyKu7AHTFW9NKVH9me7HLZckn9f%2FLUUJMCR0DTu2Dh&X-Amz-Signature=15a5863220e3bd21328eaa428fcb9548b0f007080ecae00b910d880850fb40f6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAZKW4B4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDDRF3C1p5dZeJAr7ZfuAT5eAYC9bw9vIca%2FFxfSXcD0AiEAvHZuNEuNh9IHVz%2B5z1sIDTIFvrfy1pF%2B4DTYkHKVK3Eq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMhdOH8CT13g%2FPIQZircA%2FYKmah0Y0c%2B3Mkj5ZXp2GO5MKCIg%2Bkhu4ajVvlBv6rcEOyG1rqjNhZhw1F%2Bu%2BJ259cW0dmCC90WXfTyk1V5fiWOSuHmICKbpnhnnAIKxkNEheTKMCOldV9hhHhGIJ7YuEfjGZ0xZFqru2gDWs%2FJnWLtNgu0UCKSQlLCu4w4Gy3qkdS5F5n6DnY4khSG15DyBBvSuE46pMSHd20mBi84uXRgu2Xony7llLrTy6VPWMCR7ys5D31OzNyXQQ32nVgiNz5oZnxjB%2BakxZRP2qYfnLoEK7WERjOi5ci0FaoYF78VLf%2FszDmE3ilxT%2BymwRJfWwXVJmuQ6um%2FsjmnNzThuTgXQdlF48iV0pwKJL0tT5cOU%2FI6FzKtyUK0DSnMI6n3YmBPXvbG%2BHVdUWpXBsOe0kCecn0Im1vTzLVTp0zixsseEl22nZFxCKGYvx6mfEPyUJNclFYx8gE4HtRoC1NFGTUOyF%2F%2BnwPAu9CEIpsYpBZDNWS5ePalfC2WMKljUVU%2FVfhampf7kCI4y4vaqeT1HNXF28Ashw%2FCh8ny1xB6STcrnb4532zRZmmmKqkoAJYBRKbzMrE8q6LSLctcSaCFPThAPSXF5gFsu5VyUZ7bHZPpfMT9QqWHwAwmXVNuMI6BxsEGOqUBQskxJmJJ%2B5HQfraxc8Jd0zgeUuIxbLMvuEK0%2BOFGb97DeHoeSEv%2BGyxX0UYSe3tolYkJ%2BIvxr6poK6WwNyBfMQMFLGIA6OIe9Yn%2F6A2D9HizMZf6FHNTuRu4dXV%2FdqveGxXm8WIGIrmm9vEFgRWfWc1I4zqrSpeGdDDOxhnc2fcWpwF%2FL6WyKu7AHTFW9NKVH9me7HLZckn9f%2FLUUJMCR0DTu2Dh&X-Amz-Signature=561c7e749bee0253b169628cbd4e2493723fe3375186aa3d4fc8453fcdbea0cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
