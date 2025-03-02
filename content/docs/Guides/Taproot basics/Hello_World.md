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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKONBB5%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEHJs6oVcqG7hRfVPQe2IWrQprxk02oFZOl0ZVfTpEXAIgIeCrNw%2FgtKFnTNB893DPFL6jCOsHnYz2nChNcyVvopUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD12E3wWY7%2B9kntXircA0YyYoRJE%2ByHOfYay7N%2F6F6JkvSv10pLHzXkRrSeRl2X7pzfghfgmizF%2Bjr%2BNNahyIcbCiRRx5Fnyjym56d0grfg0Vk80iQJN6MlTs8HdlWl5dQTYiEI%2BdlZFfSOP6LyiKblYRfsc2OGS%2FHJSQxDwHSZXgKbiJA8UKg3iJke2ZHDCuyNHwZ0waL2wmRlf4rh29T1Uyxj5GIFTB%2B8vGCEQ%2BcM4ZYaTVXzh6oGddfuP17HUwQny1iExktWUatDWVkt6gCxa4tCijrtglAvV85hGXhIiJTNCsfARoyDotll0L8BO0WOexlG6lkhDvDsSm%2BIZtGVyr7Pa9jNruS9f8%2BV32Jmhyk7sqyegqFaDgVOn%2FehQtZsygWUSWPB0Oe1cZvw5BDVwUmO%2F8jdIDNiq4S%2BONjIZUJJEbBFkbyy8%2FHZDy8zvap9ZD%2B2jU9qMCm3Qz3EaV%2FNPWCeCCSycksnAZxf1OXRSzrs47C4RFgzR1QHqAP0e0%2FAmUh6tSZbAkyBFwQR2IeFFKiuqWj%2FIUCe82%2BnrKbTM3DOaYsk73HkY53NR92zbdbRYUJHoytABOZa%2BAriSRLOuDtKEIEqjZpxsZVXbd3UpcnRwdRafN7Rv1rCthdP2vjclp58Y%2BjNIvo2MP6Ykr4GOqUBt%2FRvWQfqgvd%2Be2cTFI6zvXt2YGjfhB9vs2SBD8xuSFA%2Ffa2RkmmIlD%2FGvbXYYXJoIDWhf16wWZIRqaOLSFg7BjKdEBWDVXlUBdsQ5z3oKobUHxc2fOGIO0FYE88LDwUr9pcqFQNxRHAVXXZTTirX9jY4LBN3N0JP3SFa88phLbgnwTpQ1Sumu%2FvDVqkRGU4lGaQ8od%2Flb6OIaIXUGdGgbZM4YOdb&X-Amz-Signature=0076fde188a9202a61c4d8e424973e0fa0f8c31726ef62a881beaf5dd9d8ce22&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKONBB5%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEHJs6oVcqG7hRfVPQe2IWrQprxk02oFZOl0ZVfTpEXAIgIeCrNw%2FgtKFnTNB893DPFL6jCOsHnYz2nChNcyVvopUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD12E3wWY7%2B9kntXircA0YyYoRJE%2ByHOfYay7N%2F6F6JkvSv10pLHzXkRrSeRl2X7pzfghfgmizF%2Bjr%2BNNahyIcbCiRRx5Fnyjym56d0grfg0Vk80iQJN6MlTs8HdlWl5dQTYiEI%2BdlZFfSOP6LyiKblYRfsc2OGS%2FHJSQxDwHSZXgKbiJA8UKg3iJke2ZHDCuyNHwZ0waL2wmRlf4rh29T1Uyxj5GIFTB%2B8vGCEQ%2BcM4ZYaTVXzh6oGddfuP17HUwQny1iExktWUatDWVkt6gCxa4tCijrtglAvV85hGXhIiJTNCsfARoyDotll0L8BO0WOexlG6lkhDvDsSm%2BIZtGVyr7Pa9jNruS9f8%2BV32Jmhyk7sqyegqFaDgVOn%2FehQtZsygWUSWPB0Oe1cZvw5BDVwUmO%2F8jdIDNiq4S%2BONjIZUJJEbBFkbyy8%2FHZDy8zvap9ZD%2B2jU9qMCm3Qz3EaV%2FNPWCeCCSycksnAZxf1OXRSzrs47C4RFgzR1QHqAP0e0%2FAmUh6tSZbAkyBFwQR2IeFFKiuqWj%2FIUCe82%2BnrKbTM3DOaYsk73HkY53NR92zbdbRYUJHoytABOZa%2BAriSRLOuDtKEIEqjZpxsZVXbd3UpcnRwdRafN7Rv1rCthdP2vjclp58Y%2BjNIvo2MP6Ykr4GOqUBt%2FRvWQfqgvd%2Be2cTFI6zvXt2YGjfhB9vs2SBD8xuSFA%2Ffa2RkmmIlD%2FGvbXYYXJoIDWhf16wWZIRqaOLSFg7BjKdEBWDVXlUBdsQ5z3oKobUHxc2fOGIO0FYE88LDwUr9pcqFQNxRHAVXXZTTirX9jY4LBN3N0JP3SFa88phLbgnwTpQ1Sumu%2FvDVqkRGU4lGaQ8od%2Flb6OIaIXUGdGgbZM4YOdb&X-Amz-Signature=1046668b88e6e2e2d5c902a330a67d36bac2d811b40ef741a54c0fe9726cb3f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
