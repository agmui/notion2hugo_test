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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U74RTEP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICTbqYE4WJBVBOriLgaypwvpsni5HHbFzA0BtiT2EYJTAiEAng7sxxgLufxVPDs6r2hpnoGrMUc11GGuxVl3%2BbImfW8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHEQpbhB2Bs98UiVQCrcA7gimnl3oQU4dbQ8D0CY8YkBL3lemj8q9tQFaj%2BSD%2BumkNNPb6C4uHTcnpjf3%2BY0nzZTcgl9hcwlp0GXyhC7kIPy0oukxxd%2BCsCQq3%2BOTCQWgMSVC0Bmymu7QYNn%2B62lGwe502gUWQRU6WYdN8uCVhJb4Dda%2FWcqFDuht41mD6dMQpFocHr8bjCu%2BSj5Pnr7rVMGSO9NJ%2FkyEhHNMTog45frbhuRV6cQjN6ICM%2FxJxdpCWINRlk2KmLxOsyuxHvL%2FZa1ID2xjHQ%2FmpOIjAkCXDIQp5xK7s2G65F6Tw7eVOurirb5L1GycTfov0%2BRwYzlVAJtrZKn94Z%2FOdY2Ya1NlqmK%2FgH4wlEUMnZ8HR0WUQ4toSeG3BcgiI%2F1svr1xMGjhU5Tr8exbA3JsjW79SwNd9yuC8rkjdNSLX5eDGmnlE4mKIbPb7pLyWuSrBAUq1dIE50qWpvpIhJNVBeUi%2BLMY6uVvoKc0CGlJHPTRNg8lbU2BE1QeFLPfFImoWOD251DiuxkYMKSUZZ9KDtjA7lrNeAKV3oOfkAAAX0whR%2BdN9giV%2FES80uiheBi3ZO27RAmnMXMcMQEKq3N2c%2FCkXaRs1VYjkYGU6x9XFWf6FDEK5xp63Rp8jm5O6mFm2NxMNyVyMEGOqUBIKccRxVXQLogqh3l0vHsDXwi7hhFnXlm1SIUHid7x3Kw14pqIrnoIdyZZDMv8feckNGzVRvuxzM%2BUw9Bdvx3gyt9jtPuEJfhuprC4Oow2ePKW2lZKuvR7OxUlqrnsHdfM28qjrqSG2KVueEZ4uuzPLxkShsEn1ePjiZhTBdcC5Ov%2BEmSIBdaUtK8E0iRQpkpzWznz3McPqQvjKaltaqSN00v1hcN&X-Amz-Signature=41aefa2fca073d5e956f1e71e5640784bcf5fd3fa5470a955eb41d1cd0bd0248&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U74RTEP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICTbqYE4WJBVBOriLgaypwvpsni5HHbFzA0BtiT2EYJTAiEAng7sxxgLufxVPDs6r2hpnoGrMUc11GGuxVl3%2BbImfW8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHEQpbhB2Bs98UiVQCrcA7gimnl3oQU4dbQ8D0CY8YkBL3lemj8q9tQFaj%2BSD%2BumkNNPb6C4uHTcnpjf3%2BY0nzZTcgl9hcwlp0GXyhC7kIPy0oukxxd%2BCsCQq3%2BOTCQWgMSVC0Bmymu7QYNn%2B62lGwe502gUWQRU6WYdN8uCVhJb4Dda%2FWcqFDuht41mD6dMQpFocHr8bjCu%2BSj5Pnr7rVMGSO9NJ%2FkyEhHNMTog45frbhuRV6cQjN6ICM%2FxJxdpCWINRlk2KmLxOsyuxHvL%2FZa1ID2xjHQ%2FmpOIjAkCXDIQp5xK7s2G65F6Tw7eVOurirb5L1GycTfov0%2BRwYzlVAJtrZKn94Z%2FOdY2Ya1NlqmK%2FgH4wlEUMnZ8HR0WUQ4toSeG3BcgiI%2F1svr1xMGjhU5Tr8exbA3JsjW79SwNd9yuC8rkjdNSLX5eDGmnlE4mKIbPb7pLyWuSrBAUq1dIE50qWpvpIhJNVBeUi%2BLMY6uVvoKc0CGlJHPTRNg8lbU2BE1QeFLPfFImoWOD251DiuxkYMKSUZZ9KDtjA7lrNeAKV3oOfkAAAX0whR%2BdN9giV%2FES80uiheBi3ZO27RAmnMXMcMQEKq3N2c%2FCkXaRs1VYjkYGU6x9XFWf6FDEK5xp63Rp8jm5O6mFm2NxMNyVyMEGOqUBIKccRxVXQLogqh3l0vHsDXwi7hhFnXlm1SIUHid7x3Kw14pqIrnoIdyZZDMv8feckNGzVRvuxzM%2BUw9Bdvx3gyt9jtPuEJfhuprC4Oow2ePKW2lZKuvR7OxUlqrnsHdfM28qjrqSG2KVueEZ4uuzPLxkShsEn1ePjiZhTBdcC5Ov%2BEmSIBdaUtK8E0iRQpkpzWznz3McPqQvjKaltaqSN00v1hcN&X-Amz-Signature=a30101bf6eb2ed2d4d0d039d8a4261b3d2d01dac2b7ff56afce06a4168ca7883&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
