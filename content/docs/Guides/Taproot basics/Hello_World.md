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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMJCQSF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhy5N3Vd9guc%2FAH7Jph2KWTa%2Ftsf1XSsI6%2BVpoVnPDgAiEAr4GMIALDSUe88nrSzF4B%2B9ywDu9lFO%2FubhT6R08bFlYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3kEaNi8L%2FTWEQscircA%2FVnUlmkhzQW0QC2mrSODH%2F64XWFV0IM4P8m69OOjHCulmRrC0LKbox%2B7m6FutWtWHFzC1368j7iKOPHWYGBthVJper1C9UcSQcVRAU7wDCyPWyttt2zLA7Lcr78BAFuJfTpdPGLZKYRswR88uoY0jjFf%2BcFKnHLfvllM0ydBBM%2FIOgB%2FAClyLB7sYbuqcXeUJOnX2TvT5p9G87HRrX6N4QnCnyJkUpQjfC6nEBIUM9pSVZCRx4MzQPvC4uL0SHhsSdIw%2FSce0PqBBT%2FQf%2BdLRo3811OinWVtqavrYSn5LOKxK3iT3EAgN75tjiQaETjoRVAO6jP8b2PT5VRUofhITiYLCuHY1jkAfkaPxxgSUm1utyCcBOdChy4hCFsgXvvd3UhiZGMY1oajuC584j2SQS0UEO5SAwBOo8avvyHbcOgo2dj89cj6Qca38Io4%2FC8OvgWtvFWt5ZdGrIa1KqfnKs3nkyZekjbaEcxfLkjtZxl6LBqC2bx8jBwZWpbJwBfVW2r495kcdv16lmyujJ62GJJE0C5pH5IrY8PP3WiwvVIpVnPjMpy%2FM8Tf5uiXrU1%2Fe44VdoLLh3Bh0CAyS%2FtNjcqR91b1aRMYJKv7bxnHdQZpWZGfvjmvtJ%2Fx8pIMKOt4MEGOqUB7GiARm7YBQ5Is0JjCC086qEJIeb0J0ylQ4iQ0hIyEzaVke6t84%2F1WSa8J9KUjWR5hFdkvoqZ64d4ZwQOxTbuss9bhmuGdOBvPAd74Ey9%2FefGhqYypwTHugk7mK13UkUISFNVJGKFiG%2FhbmyMWJk54jYKyoL4vPDClRIJvC2iah2wUq4rZxhAxA5ajftpxqg%2Fmo7p2TBcLw2zl5143kS9tDjWtmd%2F&X-Amz-Signature=2ed8b4f7830c235a561d2df4ad37d921b0afb06fdd258f15fa6ab7779059998c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMJCQSF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhy5N3Vd9guc%2FAH7Jph2KWTa%2Ftsf1XSsI6%2BVpoVnPDgAiEAr4GMIALDSUe88nrSzF4B%2B9ywDu9lFO%2FubhT6R08bFlYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3kEaNi8L%2FTWEQscircA%2FVnUlmkhzQW0QC2mrSODH%2F64XWFV0IM4P8m69OOjHCulmRrC0LKbox%2B7m6FutWtWHFzC1368j7iKOPHWYGBthVJper1C9UcSQcVRAU7wDCyPWyttt2zLA7Lcr78BAFuJfTpdPGLZKYRswR88uoY0jjFf%2BcFKnHLfvllM0ydBBM%2FIOgB%2FAClyLB7sYbuqcXeUJOnX2TvT5p9G87HRrX6N4QnCnyJkUpQjfC6nEBIUM9pSVZCRx4MzQPvC4uL0SHhsSdIw%2FSce0PqBBT%2FQf%2BdLRo3811OinWVtqavrYSn5LOKxK3iT3EAgN75tjiQaETjoRVAO6jP8b2PT5VRUofhITiYLCuHY1jkAfkaPxxgSUm1utyCcBOdChy4hCFsgXvvd3UhiZGMY1oajuC584j2SQS0UEO5SAwBOo8avvyHbcOgo2dj89cj6Qca38Io4%2FC8OvgWtvFWt5ZdGrIa1KqfnKs3nkyZekjbaEcxfLkjtZxl6LBqC2bx8jBwZWpbJwBfVW2r495kcdv16lmyujJ62GJJE0C5pH5IrY8PP3WiwvVIpVnPjMpy%2FM8Tf5uiXrU1%2Fe44VdoLLh3Bh0CAyS%2FtNjcqR91b1aRMYJKv7bxnHdQZpWZGfvjmvtJ%2Fx8pIMKOt4MEGOqUB7GiARm7YBQ5Is0JjCC086qEJIeb0J0ylQ4iQ0hIyEzaVke6t84%2F1WSa8J9KUjWR5hFdkvoqZ64d4ZwQOxTbuss9bhmuGdOBvPAd74Ey9%2FefGhqYypwTHugk7mK13UkUISFNVJGKFiG%2FhbmyMWJk54jYKyoL4vPDClRIJvC2iah2wUq4rZxhAxA5ajftpxqg%2Fmo7p2TBcLw2zl5143kS9tDjWtmd%2F&X-Amz-Signature=329e035af1a89cb2df337df526efe7ab275a25846cf354002e6cd82cdcc4106c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
