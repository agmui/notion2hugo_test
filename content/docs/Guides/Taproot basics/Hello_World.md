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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRP2JXX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHUmX3RLwh6PE%2Fs%2Fk1dqgc1JIkirz%2FiQuMw6C5U8YIydAiEAjWuohrGoV0Ng4Y1%2FRj4EpUk8RDl8tis%2BiNPLQ7b85Pwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFA%2FeIJevCWWrs5GByrcA1UTz3kU3hQwxLab1Yv5CUpMhZiOrqVknRgDLq%2B4%2FiU5rQtxCVflhFqqU1ISaiOg7680vJY8IJE8NHoicOEUACiV0ZIEKcMs358mukfBqO2m3kuTrauLd09btDcQjXSbe3RK1xGb%2BFV3vzQCToUMM3tshLkrgYzp6Io2xmbYiHHfHq2fDVSIRSdKb4eW2OXF0U9xnTqnBwrRupDXfuSzXoFP25IsU%2BqE27uHEUF4AbVZjDNH7ngfMR8fu%2FGMvvnbUkjvWn4sFptTwK89BRg6moz5XQvaL9PNCnj3vgQsEWWz45xlL5gMuIqjlj8PAHiEzvu4MnOHDbEJihNg91BsF%2BRX0G4hpwkgNAFLj7ZxRSFGfk9DhuxxuOSxNOkoq6VKd4Mh7%2BWE4%2Bpn9ZJGjmg9Ve7mQZZhy1pcHQ3cHGVdAoRimu4pUJU7UQ2cbUl2mZqqA9xjxreJTRkX5sFGV54KbwDiHd1iEJIiBT9J1DvwJyiMOpEr5teiuuGwVeKS4UqFgjucTiAYnHPZ5YmjvjsU7UDg9cRZ%2FtyELm4aLfQOlp3Ys4fCs9HiE%2BG8OzKfIngHhE6%2BrmF1EMHy9F9Vlozi6gG97ZKIkjSiSgH3OfWVcekx8qByGNBhiNmLG4%2FkMPqYx70GOqUBhk5a8FpSArUQNmzzkB85IR6hD6O36mBFzQd2Amjhs1M8kQNVEEvHOQEz6uHTztbpYdzk%2BgDm3UP5W%2B9gp6GdTYm711VVkftod0Xe50suZtpuZhLisv3vXZwIeRKSFlG2VywIvlQSB3XvhslEX3LCYZdgDeCsDgV31PWF%2F7ibu7ulK%2BBFB%2B5tRv%2FFq2EdaDX1HJ3rZG0HDqOOpbe8idQS1wRvPTzb&X-Amz-Signature=c7279a69dfd76e3e948052d9c5d53e364f79188c425530aeefb72f15fefca78d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRP2JXX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHUmX3RLwh6PE%2Fs%2Fk1dqgc1JIkirz%2FiQuMw6C5U8YIydAiEAjWuohrGoV0Ng4Y1%2FRj4EpUk8RDl8tis%2BiNPLQ7b85Pwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFA%2FeIJevCWWrs5GByrcA1UTz3kU3hQwxLab1Yv5CUpMhZiOrqVknRgDLq%2B4%2FiU5rQtxCVflhFqqU1ISaiOg7680vJY8IJE8NHoicOEUACiV0ZIEKcMs358mukfBqO2m3kuTrauLd09btDcQjXSbe3RK1xGb%2BFV3vzQCToUMM3tshLkrgYzp6Io2xmbYiHHfHq2fDVSIRSdKb4eW2OXF0U9xnTqnBwrRupDXfuSzXoFP25IsU%2BqE27uHEUF4AbVZjDNH7ngfMR8fu%2FGMvvnbUkjvWn4sFptTwK89BRg6moz5XQvaL9PNCnj3vgQsEWWz45xlL5gMuIqjlj8PAHiEzvu4MnOHDbEJihNg91BsF%2BRX0G4hpwkgNAFLj7ZxRSFGfk9DhuxxuOSxNOkoq6VKd4Mh7%2BWE4%2Bpn9ZJGjmg9Ve7mQZZhy1pcHQ3cHGVdAoRimu4pUJU7UQ2cbUl2mZqqA9xjxreJTRkX5sFGV54KbwDiHd1iEJIiBT9J1DvwJyiMOpEr5teiuuGwVeKS4UqFgjucTiAYnHPZ5YmjvjsU7UDg9cRZ%2FtyELm4aLfQOlp3Ys4fCs9HiE%2BG8OzKfIngHhE6%2BrmF1EMHy9F9Vlozi6gG97ZKIkjSiSgH3OfWVcekx8qByGNBhiNmLG4%2FkMPqYx70GOqUBhk5a8FpSArUQNmzzkB85IR6hD6O36mBFzQd2Amjhs1M8kQNVEEvHOQEz6uHTztbpYdzk%2BgDm3UP5W%2B9gp6GdTYm711VVkftod0Xe50suZtpuZhLisv3vXZwIeRKSFlG2VywIvlQSB3XvhslEX3LCYZdgDeCsDgV31PWF%2F7ibu7ulK%2BBFB%2B5tRv%2FFq2EdaDX1HJ3rZG0HDqOOpbe8idQS1wRvPTzb&X-Amz-Signature=1f8d6e5749800ad4042ed2762dbb615b6d23aa0e228172bf8ed1d81e39e12df6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
