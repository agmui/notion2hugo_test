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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTWV7GA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnw4xfLAy6f%2FpyvjRDmB8O6CFK1V5GSm2I%2FV8tmub05AIgR7R7tZrz1PKD8iHrTWSR0TSasoyVVmvCI83aFWC3PFMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEUv%2ByPKVGle4XzkFircA95Ifm0Put%2FCGTvaUq82sX03nswiFu9MFBCbk%2Bshyk43njUSH3tN2bumXAvxj%2B8zKwbww0eK1WM31YRttLY5Zx%2FaAg%2Bjy0bWNel5kPeEEe48oPJbw%2F2dRed8gmbCHjFgBVWc%2FNTrxyNaWedlYn9z5H1QJ%2FUw02i6CJASBUp%2F3aKQss38fev39s%2BiK3jdcPS4WlV4Mh%2F4nIKguJUroyWOzJJfNzMMopRaBXBozAWCChJpYDee%2Bgs2Yqea0%2Fkl8KnuFCMwLtQeYzdaJMyKyggZzSceZl9KNC9B3zDwR5UG1FhNXF00epWbI7voMhqunguERQ5CNoMVsFoOzCHCWymJFGNcaajeUfLaLX13%2FFXYgF12ukk8%2Fa75Dwd2%2BupPup%2BiN6EK%2BQzMq0hvT08ljmjKvMAORGOaRdEHUfqTjPxEtqxwvMvtAu5l8KBPIM4K%2BvuLNxNMg1LRBWnkIbarmfhjbufF%2FEKSKBRcxMBgAIUn5n3q14i6C4kpDf0h77%2FYkDNCGO44OlC0AII%2B%2BgCxVfjaqsvTKmib2jFRCAEGVkTNPcuukvBHHIZddtns%2FZVTexLizp0ac6UHY5UbuiSLVOuuDA82SQ5SQ9k4qCoPgG8qFg1G9GPT8hyXSK0G7%2FKIMNnZvsQGOqUBkvoL%2FnP3ODnopIkX9wRk8UhX%2BkCj7nxZGp2N%2BVTbXoT8ZQQm49J7%2FvQ7GB0eQoGIMUfAQKY01wvnFPuLs7qjSUREWGpv5yGNI3SJXUvEgGyC2wqAVTDrl2yMwzG1FtSKFeoqC7l%2FFRcujOpvlYySCGglEFDHLlhYdU%2BqMqzSuBdbM2E2AZecjMhvgQ5%2FXlw6nraNBbqj%2FIVAFwnb3ZRM7VfMBZbn&X-Amz-Signature=b3394ccf10063b481e784fefa5ac52a4190212d97bd0a69ba60a9781c974974d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTWV7GA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnw4xfLAy6f%2FpyvjRDmB8O6CFK1V5GSm2I%2FV8tmub05AIgR7R7tZrz1PKD8iHrTWSR0TSasoyVVmvCI83aFWC3PFMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEUv%2ByPKVGle4XzkFircA95Ifm0Put%2FCGTvaUq82sX03nswiFu9MFBCbk%2Bshyk43njUSH3tN2bumXAvxj%2B8zKwbww0eK1WM31YRttLY5Zx%2FaAg%2Bjy0bWNel5kPeEEe48oPJbw%2F2dRed8gmbCHjFgBVWc%2FNTrxyNaWedlYn9z5H1QJ%2FUw02i6CJASBUp%2F3aKQss38fev39s%2BiK3jdcPS4WlV4Mh%2F4nIKguJUroyWOzJJfNzMMopRaBXBozAWCChJpYDee%2Bgs2Yqea0%2Fkl8KnuFCMwLtQeYzdaJMyKyggZzSceZl9KNC9B3zDwR5UG1FhNXF00epWbI7voMhqunguERQ5CNoMVsFoOzCHCWymJFGNcaajeUfLaLX13%2FFXYgF12ukk8%2Fa75Dwd2%2BupPup%2BiN6EK%2BQzMq0hvT08ljmjKvMAORGOaRdEHUfqTjPxEtqxwvMvtAu5l8KBPIM4K%2BvuLNxNMg1LRBWnkIbarmfhjbufF%2FEKSKBRcxMBgAIUn5n3q14i6C4kpDf0h77%2FYkDNCGO44OlC0AII%2B%2BgCxVfjaqsvTKmib2jFRCAEGVkTNPcuukvBHHIZddtns%2FZVTexLizp0ac6UHY5UbuiSLVOuuDA82SQ5SQ9k4qCoPgG8qFg1G9GPT8hyXSK0G7%2FKIMNnZvsQGOqUBkvoL%2FnP3ODnopIkX9wRk8UhX%2BkCj7nxZGp2N%2BVTbXoT8ZQQm49J7%2FvQ7GB0eQoGIMUfAQKY01wvnFPuLs7qjSUREWGpv5yGNI3SJXUvEgGyC2wqAVTDrl2yMwzG1FtSKFeoqC7l%2FFRcujOpvlYySCGglEFDHLlhYdU%2BqMqzSuBdbM2E2AZecjMhvgQ5%2FXlw6nraNBbqj%2FIVAFwnb3ZRM7VfMBZbn&X-Amz-Signature=8696cd26b4bf9598bc76151342f2c6a768f97baedc3dc304f5246adcb28a9787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
