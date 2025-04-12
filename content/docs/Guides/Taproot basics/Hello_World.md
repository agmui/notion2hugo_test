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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DQ6XVA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCysx57hQGhpwUBNA32xPuDrXnUwsM20cMU8lB6roeKdgIgMLEtSGB9dHFAwO38YapzvcIEiVhUYvltKgz4p9wss%2BoqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt7LF5tOPiqG%2B0YySrcA5G8TI8ppS%2FpWH3dRPfVTAnQ6T4FrpWWw8QNHQcTmm%2BfHUXhJ%2Fn6u%2BuWN8%2FCB6GZb0s89MMlmzGGc6mceYEzu7UoKVEGk%2Bm5F9Rbn%2BJCCUi9X5IOlPZfIKt%2BE8NVijDDXv81OGv4B%2BaG3rAWuz2KCUcWEs%2FyFkYI6gLzv0s9MJH%2BhudW4x2TuY18EmIkPen3riT3l8RHZY2s5hQ1OLf9lwEAFlu0NaVgBeAP%2F6%2BGheVd0JLQ1bIYdwvh1iKZGfgEBDnbDA4ZpE%2FtONEF7c53iHplX6oXtKiboO5XdPi9A5tra1fjgj%2FZs9Ah1SpApvUKkuIUN0eOuqkBAb1vOLm%2B55W9RLbCvU8fBTWM0dRT%2BI7xQu1it9Tn0nHqyOgWWAHzcJzLTiN%2BXlWP9lAR%2FPvW9KP0s3sZthHQH9qGQ8sAqd9th8i8oCyXB4Dl3Zney47wV0qzYG4HnZaDqC2nnEN4%2BZjc9rLy82OnxWqNZBwmOEKLxxniTRIl7X5pU%2BuY9utUD9Rix%2FCXwQKq9IL4Q2JMx%2BhcCAMvMjTwOFsazXVcuLXOOzPiLYsqsx%2FlwdnseCfK9%2BaslXHPAv%2FUB0FniQ%2FY4R%2FiCaoC5WR9wNplRSq%2FqUuvShVuo5CxiMQlrgEHMJyn6L8GOqUBTdDUr7KK%2FoA7NRAsgXnl%2Bqy%2B92Y3QHw4lnRGps9NTgwP%2BK9nsOWoz%2FJWMaABV00VtziMrFJZ2Gpr8gyw9OUJ51zmqI%2BHKaoex71WgYziJSnShkxTdC%2BWGsuV7ZQCwuq2oGHLAXQ%2FbGD7bwhVmemDO70Qwow7HmKkkoMLyQGSGt04TNsaq1UPNRdJoquAQM5mPmmqT%2FojR573MqcLsMZSKZ2WbvZz&X-Amz-Signature=ea116907aa400bcbd9f577e0c710c19a30783a49f0e79e7e4e0752df7862b650&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DQ6XVA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCysx57hQGhpwUBNA32xPuDrXnUwsM20cMU8lB6roeKdgIgMLEtSGB9dHFAwO38YapzvcIEiVhUYvltKgz4p9wss%2BoqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt7LF5tOPiqG%2B0YySrcA5G8TI8ppS%2FpWH3dRPfVTAnQ6T4FrpWWw8QNHQcTmm%2BfHUXhJ%2Fn6u%2BuWN8%2FCB6GZb0s89MMlmzGGc6mceYEzu7UoKVEGk%2Bm5F9Rbn%2BJCCUi9X5IOlPZfIKt%2BE8NVijDDXv81OGv4B%2BaG3rAWuz2KCUcWEs%2FyFkYI6gLzv0s9MJH%2BhudW4x2TuY18EmIkPen3riT3l8RHZY2s5hQ1OLf9lwEAFlu0NaVgBeAP%2F6%2BGheVd0JLQ1bIYdwvh1iKZGfgEBDnbDA4ZpE%2FtONEF7c53iHplX6oXtKiboO5XdPi9A5tra1fjgj%2FZs9Ah1SpApvUKkuIUN0eOuqkBAb1vOLm%2B55W9RLbCvU8fBTWM0dRT%2BI7xQu1it9Tn0nHqyOgWWAHzcJzLTiN%2BXlWP9lAR%2FPvW9KP0s3sZthHQH9qGQ8sAqd9th8i8oCyXB4Dl3Zney47wV0qzYG4HnZaDqC2nnEN4%2BZjc9rLy82OnxWqNZBwmOEKLxxniTRIl7X5pU%2BuY9utUD9Rix%2FCXwQKq9IL4Q2JMx%2BhcCAMvMjTwOFsazXVcuLXOOzPiLYsqsx%2FlwdnseCfK9%2BaslXHPAv%2FUB0FniQ%2FY4R%2FiCaoC5WR9wNplRSq%2FqUuvShVuo5CxiMQlrgEHMJyn6L8GOqUBTdDUr7KK%2FoA7NRAsgXnl%2Bqy%2B92Y3QHw4lnRGps9NTgwP%2BK9nsOWoz%2FJWMaABV00VtziMrFJZ2Gpr8gyw9OUJ51zmqI%2BHKaoex71WgYziJSnShkxTdC%2BWGsuV7ZQCwuq2oGHLAXQ%2FbGD7bwhVmemDO70Qwow7HmKkkoMLyQGSGt04TNsaq1UPNRdJoquAQM5mPmmqT%2FojR573MqcLsMZSKZ2WbvZz&X-Amz-Signature=9eebf5aa023a21018027824980d7adaa483dee48da7627f1cb9a4446afbe051a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
