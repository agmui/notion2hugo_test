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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDNGHHU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwhs39CsDDJxn2LNzyl4rTOAnEEt3sJMf2uKfUqmUD9AiBljxvEH12BPxCgWS6u7XG%2BomDJ%2FKnpzJwxAbbkpLrilSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMb1eS5gBAN%2FZgAMZFKtwDLyptPrBP2bMljXYfQW%2BKFZbhRveszV5YgAbq4Otpn3NDwJEHyyh%2BZgp07Jgk7QPsmkCtKpc2pETx1GMV8ZkoPkRU4CX6iciFWC%2FxiEp%2FTYoISZcT1u3Tpth9c9GSsIr%2FhOBRmX4eqOLxNWxf1i9Ank9DUqZbcie%2B8XztrZaW67mcRXA8UqrwlweoiU7lK1IKp3wGKEIHr3THQV%2FZJuEdu%2Bg7DOxeaFnKjklcBaOW%2FTWCe7VHTwWmN9kZUT%2BjNqq2pXTeYEL0%2BqJvqTcMD%2BezuxMmbl5VDLKnJCdTpZ3n1OSGm%2BSDt%2F%2B7KzupRhBdTVVbD%2BlAYECgQU7BehdaI1LQKbQP8%2F5DUVKqi%2FLA2zyDjOVN6L7TNKXLH3AtCFxtkN5q8%2F0NJtWUxYr4nZ8HOOYUeICcbElXY0c1lH8efNcL8lRlR3kuEpa3BMSX2ddwH0ZaIH3lKp0o7uOOBFtMhm7aC6dGGTkbZed%2FFbPSqI9sOdwn2ToSicm1EWg3HLLsJ7Wd3MkJjB2Dj3COmUQVOLTM9aaKyJ9l5wwLr0EdoRtCu2ceg%2FMSXkp87h%2BL4Qhw0GwAleS0rNrUMb%2F4KRKcik59PCVwk9Z5QcXiGl977qTc0%2FMs4yNU6ZrMwks%2FV84wjqKXvwY6pgEKnf2YZnnXqjLQg0ZcCTyYX3mQ0lgfSZN9O9DQUMntCzZjtnAjLHUFVt7Zv%2Bt8xPXzn5mLIOLyWQirswH1tPXlxFQpqDp9cXEBatIXbCWNvyVe6x6fs6tpoldjGBQ%2FouyHHcuEJEEjQCAnHPxgxULDIZ5jCfFKmZtU4hQoOP2vYTMRR0F3MGdJiQWhhrLtYHACmk7JzXEdMB2Wu5vfRwgXRgUQiuPQ&X-Amz-Signature=63bf622ea215902f060d60be7fd1dab08775af2b992eb78c5ba77ffec16621fa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDNGHHU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwhs39CsDDJxn2LNzyl4rTOAnEEt3sJMf2uKfUqmUD9AiBljxvEH12BPxCgWS6u7XG%2BomDJ%2FKnpzJwxAbbkpLrilSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMb1eS5gBAN%2FZgAMZFKtwDLyptPrBP2bMljXYfQW%2BKFZbhRveszV5YgAbq4Otpn3NDwJEHyyh%2BZgp07Jgk7QPsmkCtKpc2pETx1GMV8ZkoPkRU4CX6iciFWC%2FxiEp%2FTYoISZcT1u3Tpth9c9GSsIr%2FhOBRmX4eqOLxNWxf1i9Ank9DUqZbcie%2B8XztrZaW67mcRXA8UqrwlweoiU7lK1IKp3wGKEIHr3THQV%2FZJuEdu%2Bg7DOxeaFnKjklcBaOW%2FTWCe7VHTwWmN9kZUT%2BjNqq2pXTeYEL0%2BqJvqTcMD%2BezuxMmbl5VDLKnJCdTpZ3n1OSGm%2BSDt%2F%2B7KzupRhBdTVVbD%2BlAYECgQU7BehdaI1LQKbQP8%2F5DUVKqi%2FLA2zyDjOVN6L7TNKXLH3AtCFxtkN5q8%2F0NJtWUxYr4nZ8HOOYUeICcbElXY0c1lH8efNcL8lRlR3kuEpa3BMSX2ddwH0ZaIH3lKp0o7uOOBFtMhm7aC6dGGTkbZed%2FFbPSqI9sOdwn2ToSicm1EWg3HLLsJ7Wd3MkJjB2Dj3COmUQVOLTM9aaKyJ9l5wwLr0EdoRtCu2ceg%2FMSXkp87h%2BL4Qhw0GwAleS0rNrUMb%2F4KRKcik59PCVwk9Z5QcXiGl977qTc0%2FMs4yNU6ZrMwks%2FV84wjqKXvwY6pgEKnf2YZnnXqjLQg0ZcCTyYX3mQ0lgfSZN9O9DQUMntCzZjtnAjLHUFVt7Zv%2Bt8xPXzn5mLIOLyWQirswH1tPXlxFQpqDp9cXEBatIXbCWNvyVe6x6fs6tpoldjGBQ%2FouyHHcuEJEEjQCAnHPxgxULDIZ5jCfFKmZtU4hQoOP2vYTMRR0F3MGdJiQWhhrLtYHACmk7JzXEdMB2Wu5vfRwgXRgUQiuPQ&X-Amz-Signature=8a92181d64ec718c3ecb63119e614376f757305451385faf7eb7eba381083108&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
