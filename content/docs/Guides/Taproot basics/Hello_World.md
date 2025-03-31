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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627DOY64G%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEOH8MUsCd%2FT33sDv%2BNT1tFv%2BWgadHaJ15yAdxNdb%2BUHAiBpPf0jgnl8FFokRBM2eWocsbfXMMr9hWxPBSxWNHIPsiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxo2iHMOtS0wWTUzSKtwDeM3%2FYM%2FKD4WUZZuO36%2F1wroZJdt%2BwzF8MMySRQFY1cMImRJG2%2B8ClpYcZd0NuZIVsDsyK0JOLMRh3cWsP51AwJj8rjoAlZvVI7Y1g1TKC5cAPaeutJoa3XVkGYpqfBglBoFP1Mn9ujd8Fwy2mPA58yc8WzwWsVFBPnZd8%2FXV1qmygMr%2FjjQpRw55FXvuiuIbLNgT6eR2XG%2F9lXfN1ze12SYqExieWyhr9PlDdDbTqCoOu91DKDXn%2Fv3uZtNgh%2BB8kHCj1rPO3A8EwY4kuPI6Eu4T6lubrQg99saIUnWMkyRtwRwQ%2BxZb1BqJzoaiYBpv049xSJsZrrcB3zrzfr80kgelp2d2bgkfB7oY%2FmgFHbRbpK8ipt5ERUQPW0WjF%2Bc%2BWyYw0HmVDcF4UJF465M%2FY2OFvwqc0JKBAlbnA3xAJNurMZeza6za8j%2BQk6CjJpOZrgvbUtzep17o15%2FJa%2FY2is7aPVCfcvY6hZcdMuXRJ85tIrWOo0XYeZzNbafPazbqGwevpYkYt8fKMsisTFvnRmAwKA5%2FeIf%2BliC%2Bo2sZYcW4sxxeWqa3lLILMFo%2BOIZnAFGLY%2F6l%2BneEB%2BrjRe7cZJ53miaIIUnlf1WkggLD%2FFOPyODs2MDKpY4fWZUwvMyqvwY6pgGR8v3i0mVnL1C3l%2BRbBThIMJtFlPws7QvW9SSbDRocep2lFc%2BVnXjxs08nB9ZApcddwvY1%2F0QtiCLXVFjpFfhv1OcvNQmUb1j%2BFcWJ57VupMvR%2FX%2Bna2BjKOfjucjeXFaohO5hXPeMLzhAa6%2Fj55rusJ%2Fag2Kj6lIRP%2BGj9mAV0n2VBOLSQk7h1bGc0NXLhWJJqkleRjkBs2uS6p5W6gp8ovzm3%2FNx&X-Amz-Signature=721baf0247efb6602db4a0e2294d6652d44c1814380b8c8398a10af775f73e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627DOY64G%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEOH8MUsCd%2FT33sDv%2BNT1tFv%2BWgadHaJ15yAdxNdb%2BUHAiBpPf0jgnl8FFokRBM2eWocsbfXMMr9hWxPBSxWNHIPsiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxo2iHMOtS0wWTUzSKtwDeM3%2FYM%2FKD4WUZZuO36%2F1wroZJdt%2BwzF8MMySRQFY1cMImRJG2%2B8ClpYcZd0NuZIVsDsyK0JOLMRh3cWsP51AwJj8rjoAlZvVI7Y1g1TKC5cAPaeutJoa3XVkGYpqfBglBoFP1Mn9ujd8Fwy2mPA58yc8WzwWsVFBPnZd8%2FXV1qmygMr%2FjjQpRw55FXvuiuIbLNgT6eR2XG%2F9lXfN1ze12SYqExieWyhr9PlDdDbTqCoOu91DKDXn%2Fv3uZtNgh%2BB8kHCj1rPO3A8EwY4kuPI6Eu4T6lubrQg99saIUnWMkyRtwRwQ%2BxZb1BqJzoaiYBpv049xSJsZrrcB3zrzfr80kgelp2d2bgkfB7oY%2FmgFHbRbpK8ipt5ERUQPW0WjF%2Bc%2BWyYw0HmVDcF4UJF465M%2FY2OFvwqc0JKBAlbnA3xAJNurMZeza6za8j%2BQk6CjJpOZrgvbUtzep17o15%2FJa%2FY2is7aPVCfcvY6hZcdMuXRJ85tIrWOo0XYeZzNbafPazbqGwevpYkYt8fKMsisTFvnRmAwKA5%2FeIf%2BliC%2Bo2sZYcW4sxxeWqa3lLILMFo%2BOIZnAFGLY%2F6l%2BneEB%2BrjRe7cZJ53miaIIUnlf1WkggLD%2FFOPyODs2MDKpY4fWZUwvMyqvwY6pgGR8v3i0mVnL1C3l%2BRbBThIMJtFlPws7QvW9SSbDRocep2lFc%2BVnXjxs08nB9ZApcddwvY1%2F0QtiCLXVFjpFfhv1OcvNQmUb1j%2BFcWJ57VupMvR%2FX%2Bna2BjKOfjucjeXFaohO5hXPeMLzhAa6%2Fj55rusJ%2Fag2Kj6lIRP%2BGj9mAV0n2VBOLSQk7h1bGc0NXLhWJJqkleRjkBs2uS6p5W6gp8ovzm3%2FNx&X-Amz-Signature=291c7a9bdd4b8edd762159d613741bd46a6ba1b5c800c1319a1f2e865a3e6816&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
