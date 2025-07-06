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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623U6NKWD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIA52mPmVMJPykj52v5kQK3k2NmyW%2BM2mC0PP9vsHhz1mAiEAzCvZDEhCtb6BmqFDveHKZQ19dtQT5oUaSTP0jW76HwEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPne6rQtE%2FfqJ1K2oSrcA%2FlDalpEldl%2B0WmxHIZedAYAnYQkY7XHcBjJDp8gyx4hpvcDuzA7eJLGjaoxKFmAFUHKnVJv288CyAZaqmm6WzTpHeuULyl91neg9j%2BbtsvzW2%2B%2F8JJxUTG9mhPHUaJlFGS7sdTT5NaIRpQGMtJ0l9a201ICZR%2FZ3kFLrcxMeyyDqYJn8el379y9445gH%2FD2ShzQc5KEkOusUS%2F4O31ncUCjVYLOxZSAN4kQrOFj3aSYpNDsgclsYQsU3noWAVz6AMvGbkbjndK18RW6vWxh5llNSqxFl1qCfqQvIPiSgKDxAk4gzNlfVy4iD9fMH%2B%2Fa9f6vfuyQ2WKPMP2ceLlXqUoP70lF7jOlLKpDAVItgTdEo%2FvctbWHxo7PJdxff2C19UwDHNdNvZzMtkeEFyLUYSgorO2nbfViJJKCods0k4kJmidhugMaFiwkBTB5mkwOcQcVDPrW1m8Fw53M7qsTyUkObEAdDyXJUqdJv4oMUsIOtndgK7UbFRq6ELGp%2FddJ1o63UdhOuAh06%2FTBDPM9hed9v4NawfvDL2fXMFtJujagQESrsZPY7RTforjMoxY9x63m3cBZk7jWItW0qUGY6aCj%2BYB13YopkernR5nI4tJZnA3m2PuTUvOw2R85MKTRqcMGOqUBaKIQ%2BUfy7HoFUbgSr53oUn5BX9xWNGeYwjzuLIOfCFq%2FeySVjALhqb4HYgzsS31yP8rX%2F06x9Y6AQboKmx2NQK93T0tM68WzHjpEZvwfOMXleOmYBwpEY6HPypXmkpULq%2BGtzMFL4xHgrjNUNBy7LDsTvSngw0aw6WV2i8eE9J7XhhRz6Ye5JGloWpaqVR6uMCHei38m2szNoXJRwit8yOpLuYbW&X-Amz-Signature=2c09a5da4578c5e9f0c779f53b83cabe18d4a986836bed2f21b92c9c5364912d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623U6NKWD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIA52mPmVMJPykj52v5kQK3k2NmyW%2BM2mC0PP9vsHhz1mAiEAzCvZDEhCtb6BmqFDveHKZQ19dtQT5oUaSTP0jW76HwEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPne6rQtE%2FfqJ1K2oSrcA%2FlDalpEldl%2B0WmxHIZedAYAnYQkY7XHcBjJDp8gyx4hpvcDuzA7eJLGjaoxKFmAFUHKnVJv288CyAZaqmm6WzTpHeuULyl91neg9j%2BbtsvzW2%2B%2F8JJxUTG9mhPHUaJlFGS7sdTT5NaIRpQGMtJ0l9a201ICZR%2FZ3kFLrcxMeyyDqYJn8el379y9445gH%2FD2ShzQc5KEkOusUS%2F4O31ncUCjVYLOxZSAN4kQrOFj3aSYpNDsgclsYQsU3noWAVz6AMvGbkbjndK18RW6vWxh5llNSqxFl1qCfqQvIPiSgKDxAk4gzNlfVy4iD9fMH%2B%2Fa9f6vfuyQ2WKPMP2ceLlXqUoP70lF7jOlLKpDAVItgTdEo%2FvctbWHxo7PJdxff2C19UwDHNdNvZzMtkeEFyLUYSgorO2nbfViJJKCods0k4kJmidhugMaFiwkBTB5mkwOcQcVDPrW1m8Fw53M7qsTyUkObEAdDyXJUqdJv4oMUsIOtndgK7UbFRq6ELGp%2FddJ1o63UdhOuAh06%2FTBDPM9hed9v4NawfvDL2fXMFtJujagQESrsZPY7RTforjMoxY9x63m3cBZk7jWItW0qUGY6aCj%2BYB13YopkernR5nI4tJZnA3m2PuTUvOw2R85MKTRqcMGOqUBaKIQ%2BUfy7HoFUbgSr53oUn5BX9xWNGeYwjzuLIOfCFq%2FeySVjALhqb4HYgzsS31yP8rX%2F06x9Y6AQboKmx2NQK93T0tM68WzHjpEZvwfOMXleOmYBwpEY6HPypXmkpULq%2BGtzMFL4xHgrjNUNBy7LDsTvSngw0aw6WV2i8eE9J7XhhRz6Ye5JGloWpaqVR6uMCHei38m2szNoXJRwit8yOpLuYbW&X-Amz-Signature=ccfd55860399244919e07e0681b3422dd9e59aafed0f3c1904f2015e78da5dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
