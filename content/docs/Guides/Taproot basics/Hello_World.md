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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSZVAKS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQ%2BfGzPa1%2FkhW0qqj4K0w4sgzekucEjcCQA3oa2AGq7AIhAKHehPAEnHVx85MwvieWRR1uEPam5bU8LhBe6rl0S9DXKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQN%2BHHyjawk6CcQmgq3AN1351FTFy3RmXJAVXxYM4uk2aVwyND5oHX2t3KpoO9EYzCkk5v%2FdG%2B7KVo9R8kqCMBd2huCFgt7LQ%2FF86TU8X1J12Kz2XuXvM3fH5qA53R3FS3icrF4vyrvgya0Fd2fe1i7H66RnU9T7SwD6nC1hIWqyAjmIeMFjLf4EI%2F2Rnv9hrWkJ%2FfZ0BzgwnFJiroyhq2Vyu%2FK2zOyrt9B4ZeUSzgYcfOziKHP3zlC%2FDGt7nFVtDNuG3f8c1uT43z2ofmJMHYAFh61XOgS5OroNZtl2OTZYcf0oPHKIlKeIcbk3Cwd2%2FlTXvT7BcW95SPyvq2MlTC9UMEV2GwioHY96ODMarSMGny5kr%2FcGODNzvRyXuElHEX2A6c7KawIFIGnXNw4oG77cW97tM95iuyeRSTXSUEhbhespPllljEW1qRSs9DXRlE%2BRvx25OKg1of7y9j4hMFCpye8k2zjW4pUuQUk5HWkfLqaVbE7fqUC3wv249vo3CUNWQJgP5M0FgpdGJT96%2F1dm1FnBQCTl3RuR0O%2FMQrQJbQrEgQV4FgpzwW80KjGGOMtLehthtK3d1%2B9ILgrrz8GDObMc5eRC%2FEFXghutXdUhnqSQqnhtxKR3ykMZcsCC905JBjyzIGwhpBojDItIS%2BBjqkAWOJP9Lr%2BtBvWyC3UVRtazFhvnRxnK7es4WjPqEzj4oVsR7KMJr%2B8v6KakUGUfK69Xns70uFwZm7vKdmCVBdVR7b1LWzSqWVDAy0Nhoz897yCvNwAUi6ozqxlePdCJlkNmrP7hlHHUpzvSUfmzp4R%2BWejcIMtZOy%2F%2F1QvZdI7YRsH43zk6nDX5uOme2%2Few4oquU1hScF1rkHMfpDlwC2OtQ0gcCB&X-Amz-Signature=f609ea8d37e73d6adfe999ff116f6addb9d7d74093ce465f1e2b5244ac311e67&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CSZVAKS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQ%2BfGzPa1%2FkhW0qqj4K0w4sgzekucEjcCQA3oa2AGq7AIhAKHehPAEnHVx85MwvieWRR1uEPam5bU8LhBe6rl0S9DXKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQN%2BHHyjawk6CcQmgq3AN1351FTFy3RmXJAVXxYM4uk2aVwyND5oHX2t3KpoO9EYzCkk5v%2FdG%2B7KVo9R8kqCMBd2huCFgt7LQ%2FF86TU8X1J12Kz2XuXvM3fH5qA53R3FS3icrF4vyrvgya0Fd2fe1i7H66RnU9T7SwD6nC1hIWqyAjmIeMFjLf4EI%2F2Rnv9hrWkJ%2FfZ0BzgwnFJiroyhq2Vyu%2FK2zOyrt9B4ZeUSzgYcfOziKHP3zlC%2FDGt7nFVtDNuG3f8c1uT43z2ofmJMHYAFh61XOgS5OroNZtl2OTZYcf0oPHKIlKeIcbk3Cwd2%2FlTXvT7BcW95SPyvq2MlTC9UMEV2GwioHY96ODMarSMGny5kr%2FcGODNzvRyXuElHEX2A6c7KawIFIGnXNw4oG77cW97tM95iuyeRSTXSUEhbhespPllljEW1qRSs9DXRlE%2BRvx25OKg1of7y9j4hMFCpye8k2zjW4pUuQUk5HWkfLqaVbE7fqUC3wv249vo3CUNWQJgP5M0FgpdGJT96%2F1dm1FnBQCTl3RuR0O%2FMQrQJbQrEgQV4FgpzwW80KjGGOMtLehthtK3d1%2B9ILgrrz8GDObMc5eRC%2FEFXghutXdUhnqSQqnhtxKR3ykMZcsCC905JBjyzIGwhpBojDItIS%2BBjqkAWOJP9Lr%2BtBvWyC3UVRtazFhvnRxnK7es4WjPqEzj4oVsR7KMJr%2B8v6KakUGUfK69Xns70uFwZm7vKdmCVBdVR7b1LWzSqWVDAy0Nhoz897yCvNwAUi6ozqxlePdCJlkNmrP7hlHHUpzvSUfmzp4R%2BWejcIMtZOy%2F%2F1QvZdI7YRsH43zk6nDX5uOme2%2Few4oquU1hScF1rkHMfpDlwC2OtQ0gcCB&X-Amz-Signature=8a288a0b6adb6bfc62f4fc58c1a6cf48ea7319030ea34ae3239cdc703d253b03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
