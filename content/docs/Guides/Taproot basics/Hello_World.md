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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT36QXQO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEn9TLEjPHy0xFhKPd%2BRkSGozPv%2FAcm9KE8GZWahcthmAiBOHz3m6Mo1LzzNAM11Ol2g3AhZ%2FfkdrQaI6cA41ec40iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMATBquLQx4zrT5Z39KtwDxjYsqYwxlsyJABRuSbBHoMLSkRwKubcQkXXJbpSqdfeV6QB8STY2qpdGBGZQz83wh8EVUIqy83%2F8sQwFLgFeV7EQ%2BqpyVRRysrhKF28ChrwfW5h8Sp2yUBJvepMz6H30ehdwq6QDyaaOBe85obkL7OMUt2fFNZSRTt28MrGMIkVBXldwe24c9pY%2BotIM5dQN20Gv0978Ee%2Ffwzxk551Owq83JfFgpKQydymHx3QOexOTTDh%2Bohi85r6v%2B4V3uI0wzKAlfIozi1FmfWTf3Wj%2BYMGcmUpJ5lCkBAe6xWk4DajWJy7qcGVMiOVNYtXY%2FwhV8fpc9fgtOb7e3mqVM7R1L5Tug808%2BluzsQT1WP19RqsB7QjyhwyO6iuAWzWeevpQLBGbzuPoELduy6R7JKFwFFSW8ifH9Ic0cgLjmqpx5gTh9e8PFwWC35fHMd6x%2F0Q4s%2BTUg32al8t5Ug1W%2B2YUVoQsedyjepbpmYhtaLilJQtGQQxmpxbNvVfOIM0eCkuL29lYiQpj3%2BgUtWmpAFciYjGJYImqJ0cPSoS4pFBBeHBQYcjzHlEM%2BTa9oNZLUmAKaVcc2EXjfqBg1g0pA30hUviG3Fu82hEBayzMyOSNcfd7RTyNWC%2BVH23FU0wwv5CFvgY6pgHr5EnVF5T1S%2Fx%2B7RECAiXMhy25s%2FYE5jFO78nSg7GjOVS0TEwMoMkjDGqx1fzWNkLOmQcaxeGqNuDqb94tqHa84rUD2Ipdq%2BuCMksd1u4jerUy4LdkTX1dJWpYTrTl1OpXP9PsdjKi0KGu5EnUrvanXlJjnu7dvyxnrYR69DrVfH5ZsbcndD0McGy4H9%2FS9FLyImJ3uDZfi6nsx9y0hHE0v9umXDXr&X-Amz-Signature=a351f72e971259663a7e0bac5c73ac06015435aa4fdc170681c91a9d61364bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT36QXQO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEn9TLEjPHy0xFhKPd%2BRkSGozPv%2FAcm9KE8GZWahcthmAiBOHz3m6Mo1LzzNAM11Ol2g3AhZ%2FfkdrQaI6cA41ec40iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMATBquLQx4zrT5Z39KtwDxjYsqYwxlsyJABRuSbBHoMLSkRwKubcQkXXJbpSqdfeV6QB8STY2qpdGBGZQz83wh8EVUIqy83%2F8sQwFLgFeV7EQ%2BqpyVRRysrhKF28ChrwfW5h8Sp2yUBJvepMz6H30ehdwq6QDyaaOBe85obkL7OMUt2fFNZSRTt28MrGMIkVBXldwe24c9pY%2BotIM5dQN20Gv0978Ee%2Ffwzxk551Owq83JfFgpKQydymHx3QOexOTTDh%2Bohi85r6v%2B4V3uI0wzKAlfIozi1FmfWTf3Wj%2BYMGcmUpJ5lCkBAe6xWk4DajWJy7qcGVMiOVNYtXY%2FwhV8fpc9fgtOb7e3mqVM7R1L5Tug808%2BluzsQT1WP19RqsB7QjyhwyO6iuAWzWeevpQLBGbzuPoELduy6R7JKFwFFSW8ifH9Ic0cgLjmqpx5gTh9e8PFwWC35fHMd6x%2F0Q4s%2BTUg32al8t5Ug1W%2B2YUVoQsedyjepbpmYhtaLilJQtGQQxmpxbNvVfOIM0eCkuL29lYiQpj3%2BgUtWmpAFciYjGJYImqJ0cPSoS4pFBBeHBQYcjzHlEM%2BTa9oNZLUmAKaVcc2EXjfqBg1g0pA30hUviG3Fu82hEBayzMyOSNcfd7RTyNWC%2BVH23FU0wwv5CFvgY6pgHr5EnVF5T1S%2Fx%2B7RECAiXMhy25s%2FYE5jFO78nSg7GjOVS0TEwMoMkjDGqx1fzWNkLOmQcaxeGqNuDqb94tqHa84rUD2Ipdq%2BuCMksd1u4jerUy4LdkTX1dJWpYTrTl1OpXP9PsdjKi0KGu5EnUrvanXlJjnu7dvyxnrYR69DrVfH5ZsbcndD0McGy4H9%2FS9FLyImJ3uDZfi6nsx9y0hHE0v9umXDXr&X-Amz-Signature=81d950b58870e4ad10278fe844659159d8795945b14de953fa9bfd2455632655&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
