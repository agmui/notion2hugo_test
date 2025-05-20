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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNLMXTW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTnL70rCm1kR5ocB5hTjuvhG%2BanfNHSc%2F1gS5UMg9QLwIgIOchRZ1amn7ZpAGoNG2wby7fEWHFxwEFgifRqyFY2PsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDULqEt8Gcu5a1Gq3ircAwNmK54fs3vWUNBcjFteZRlybmS7yx5CDmkd%2FHdaDHmh%2BDDq8loJ2qT7npoiiSga5eNz70nSzu2SXj9Cr6sREt4pmKozjQB0YH34FTnepXL8E4on%2FMNme9ab3il6dz6%2B9%2BGnABYD%2F6S1sZPKuvDJm6ssalp1%2FCnVycEv4jk4HFyh4ad5xS6YLR5kcVUBu1Fo%2FaLEQi1gEyW55qB8Av6%2BGIIVllPNU5C9MxL3cGzAR533ZvebAMYlyvF%2FHCkUbVGgyOWbluM4wtGl%2FVbDSzHFEWEMZcynjpQAmfYoa%2FAR32N23RpOnxL6RK%2FKooKVN1YPcm1xNRN6cLgqT9n8Vyo1Z8Y1B7%2FZ7EdTcm2QsfrQ8qd%2BBDKY%2B3PaUVUUrj9UrAwk72z7xoENtI9QLuhVXKc2T1ap6F1zezSLniCZGTQJh%2B8loBAvvwMp2vwNoyJT1LHBf%2BK7fGSXGd7O4KWLTY1wJ3sRljPMRRX1JcyYYhnFXCy1oIDUPKy2VDFF%2FAjZMjEzTjlDmfZYTnEE%2BiMywCBD%2FlLEW5ARHwBq2sf37LWpNUeKMwb2mLGKwqbJx9OeZy2RaDgkK%2F%2FR5yDAYgpqSagerq7ZT8eq%2BY%2FGqChpm6gEzFq%2FjdzJGugjaULYrtBsMOrGsMEGOqUBezGfeVMcCF27S3%2BbuMkMT9QyvgxtGqFE7Ay5i5U5m7S0pRTqjCiMC7GwKiZks1gAHMivA8AjdEN98vA3inlh%2BiuqjAToELgpz8YijE6gtaKNmg6SYcc4T5H8CNjXrDbv4%2BXtPEId0SYoiuWr8DiwiD21usZL1OS6PN5qmAo29ZRqNP3k%2FF1tmASiwJ9wqSIfCjGzaX8kdybJ3VxO727lup4FrkoR&X-Amz-Signature=33aeaf6d6d6092becad7986db8d7c853d181e35cbf0fa25c374404eb6374b50f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNLMXTW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTnL70rCm1kR5ocB5hTjuvhG%2BanfNHSc%2F1gS5UMg9QLwIgIOchRZ1amn7ZpAGoNG2wby7fEWHFxwEFgifRqyFY2PsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDULqEt8Gcu5a1Gq3ircAwNmK54fs3vWUNBcjFteZRlybmS7yx5CDmkd%2FHdaDHmh%2BDDq8loJ2qT7npoiiSga5eNz70nSzu2SXj9Cr6sREt4pmKozjQB0YH34FTnepXL8E4on%2FMNme9ab3il6dz6%2B9%2BGnABYD%2F6S1sZPKuvDJm6ssalp1%2FCnVycEv4jk4HFyh4ad5xS6YLR5kcVUBu1Fo%2FaLEQi1gEyW55qB8Av6%2BGIIVllPNU5C9MxL3cGzAR533ZvebAMYlyvF%2FHCkUbVGgyOWbluM4wtGl%2FVbDSzHFEWEMZcynjpQAmfYoa%2FAR32N23RpOnxL6RK%2FKooKVN1YPcm1xNRN6cLgqT9n8Vyo1Z8Y1B7%2FZ7EdTcm2QsfrQ8qd%2BBDKY%2B3PaUVUUrj9UrAwk72z7xoENtI9QLuhVXKc2T1ap6F1zezSLniCZGTQJh%2B8loBAvvwMp2vwNoyJT1LHBf%2BK7fGSXGd7O4KWLTY1wJ3sRljPMRRX1JcyYYhnFXCy1oIDUPKy2VDFF%2FAjZMjEzTjlDmfZYTnEE%2BiMywCBD%2FlLEW5ARHwBq2sf37LWpNUeKMwb2mLGKwqbJx9OeZy2RaDgkK%2F%2FR5yDAYgpqSagerq7ZT8eq%2BY%2FGqChpm6gEzFq%2FjdzJGugjaULYrtBsMOrGsMEGOqUBezGfeVMcCF27S3%2BbuMkMT9QyvgxtGqFE7Ay5i5U5m7S0pRTqjCiMC7GwKiZks1gAHMivA8AjdEN98vA3inlh%2BiuqjAToELgpz8YijE6gtaKNmg6SYcc4T5H8CNjXrDbv4%2BXtPEId0SYoiuWr8DiwiD21usZL1OS6PN5qmAo29ZRqNP3k%2FF1tmASiwJ9wqSIfCjGzaX8kdybJ3VxO727lup4FrkoR&X-Amz-Signature=5e147564c2df1881e28b09d0f1792b52961fa0f2bb24a341d68d0cedd7741929&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
