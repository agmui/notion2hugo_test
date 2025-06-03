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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZTT4WR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGDEUOjXUg2%2Fy6EMs7ebFcvi5zOw%2FWc9CT%2BprPljyzg8AiEAs9EaAhJ9ckG5xvEq1cv2eKC0Vo4i9aQlKrNv6TYAPHoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPzirS7cYVorsq8WSrcA5HP9z6jBNy2K6pjENO8GbYWtdlI2IKuxe6UoAHXSGQt6c9OwWRZK9aM5kCFNxyTKhXWVoGJ9aAdjZBAy%2FSCM4otClzUJ8%2BzO2UQQ53yQfYiGVFXPUSyQL%2BpUMfWIpG7%2FrlxxhXfPNzB%2FQKfGYzmGEJlBjU3%2F8WTIDNdMnd3tAVN1F4DMuLa902CrvCoWuDuZVtZtRr7oKiD52jMTJ9WAET3%2BcwCOujMsZG7MHkxluB0n2Ekc9Ij4PloSr8O5gs9c5s8xs2VQh0jMl17Uhk1JgV%2BhFwvaoCKEPQc%2FvTm7xQJK5SuMPL0WlOVfq6wD6bOHhq43nA7KEMlC%2BYRTJBfPymXHTpxWoGLrArV3EoulWzxTvbyWeOaZGpaU8WLIFKOfTb8%2B7NmQ1o0myD%2FRtFZhAyEu%2B139F%2B%2FPqgHFyp02U7EBMf47GPwZwGksS0DptDMDEwYmqbhKk56PPk7KEsXYSZ1Sn6NVjgVMudMRhz27kIPXhs%2FBI0gq1G9luSTO1wpLZ4LDL7aAfPTDP8qTh5WYHey1AUh0Le1iZTZrbl8TiKIeVzaPMfEoXmZQnTbe0CqqFMehC7qABHQgZW7KyQCGjPAOGg3dXCr2z5eeFKy3JbQe%2FPEAMKa%2BTJQb6kEMKqC%2BsEGOqUBWxrdQqMV87INbC031FT30ORlFCCyUmKdL%2BIXkzsL8sEQNRMHMrh0QiGAGoHmPxea%2BJU%2Fz86NPxDfIKaZFnBYDEFigoa21IzyIXhjG00kGvc9I6zAzZW7uW5ZWr%2BO7%2FtyZZBNxER5K8hyeiO40YJqeTpNs7dLinNCTos4KOPrRt0x%2BO3GRyRkPioT491Tm3CZ37rpn5Jr3VgcRwGE08UvCKOhlhiI&X-Amz-Signature=c5749e377c2ffc2fd11b897e162fe13b924d6aa894f27b632cd82d6cc72810b0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZTT4WR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGDEUOjXUg2%2Fy6EMs7ebFcvi5zOw%2FWc9CT%2BprPljyzg8AiEAs9EaAhJ9ckG5xvEq1cv2eKC0Vo4i9aQlKrNv6TYAPHoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPzirS7cYVorsq8WSrcA5HP9z6jBNy2K6pjENO8GbYWtdlI2IKuxe6UoAHXSGQt6c9OwWRZK9aM5kCFNxyTKhXWVoGJ9aAdjZBAy%2FSCM4otClzUJ8%2BzO2UQQ53yQfYiGVFXPUSyQL%2BpUMfWIpG7%2FrlxxhXfPNzB%2FQKfGYzmGEJlBjU3%2F8WTIDNdMnd3tAVN1F4DMuLa902CrvCoWuDuZVtZtRr7oKiD52jMTJ9WAET3%2BcwCOujMsZG7MHkxluB0n2Ekc9Ij4PloSr8O5gs9c5s8xs2VQh0jMl17Uhk1JgV%2BhFwvaoCKEPQc%2FvTm7xQJK5SuMPL0WlOVfq6wD6bOHhq43nA7KEMlC%2BYRTJBfPymXHTpxWoGLrArV3EoulWzxTvbyWeOaZGpaU8WLIFKOfTb8%2B7NmQ1o0myD%2FRtFZhAyEu%2B139F%2B%2FPqgHFyp02U7EBMf47GPwZwGksS0DptDMDEwYmqbhKk56PPk7KEsXYSZ1Sn6NVjgVMudMRhz27kIPXhs%2FBI0gq1G9luSTO1wpLZ4LDL7aAfPTDP8qTh5WYHey1AUh0Le1iZTZrbl8TiKIeVzaPMfEoXmZQnTbe0CqqFMehC7qABHQgZW7KyQCGjPAOGg3dXCr2z5eeFKy3JbQe%2FPEAMKa%2BTJQb6kEMKqC%2BsEGOqUBWxrdQqMV87INbC031FT30ORlFCCyUmKdL%2BIXkzsL8sEQNRMHMrh0QiGAGoHmPxea%2BJU%2Fz86NPxDfIKaZFnBYDEFigoa21IzyIXhjG00kGvc9I6zAzZW7uW5ZWr%2BO7%2FtyZZBNxER5K8hyeiO40YJqeTpNs7dLinNCTos4KOPrRt0x%2BO3GRyRkPioT491Tm3CZ37rpn5Jr3VgcRwGE08UvCKOhlhiI&X-Amz-Signature=3da350ac312b2a664d2bc05354df34e2b5391cdd308fb060495b0dd37d50acc8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
