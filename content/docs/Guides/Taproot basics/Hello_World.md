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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDCVYIY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR%2FjNzSfW%2FCa7UlpYrEleP9GqXvVNPUZtYhzZQw7cE%2BAiEAwr8OIJAdI3HPdl8VnT958Hzso7kPrw1gF%2FOjxHKAR8AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXSpdc4nxNlbOljRircA5l7EokanyPGxc1qBHbL2Wl6sopGorrvXyXQ2PYHgTDJZesCW46M9%2F2%2B7Yv0QuuIaXzPndvWI0MU9u66ohOEWdTPNkprpbe91lFwZo1dCkjCHTxP2v2atgQoDyiQxOZVLoEumaTY9Mqz3410OIH5Q0MbyzvLn%2Fsv2no8Ka5cpXi4OQoxdZdA8e77E%2BcAe8aEZjoViOZA4W6bJPBiPrWzgzWWDavs331GEUtEIZ84pczg8Tl%2BIiAU5nnZNsHXwZ9C%2FLFuhEiJPj05LJ6rzOn6ZaQmBfBy045%2B9ZlfA7dNHkNDB6gdEDHd%2FG7VlT%2FFSj%2BcxpX58KbFkvbHsl1vcYinQj0MeLmmOxOPUNLwxHSaiRViVopDd%2Boki0homHXmxumXpk7QboqMSqkkT05XkzienJgk5BXY5aSqMjCr4%2BMWEm3QaHJyMqIKQWX3kVAy%2FnkRfm7egDjHz2mVOCDClwAAEwXa%2FKV5C2aJghL0nXE2IsXc0Rc0oVoLG%2BbLkkn7vTE%2FtFai7GvzUz7%2FOJ%2BS4U32ilXUobB95fm9GihVsxtKQ2QU9vV0asOU2NoIRiPXFQgMldDuzD4u1utLzUJJViG%2F8BTcF5Lj1CzaWGPXgx1q3kzYCiZ1uS5xhaLwt8LqMIWxlMIGOqUBHff4oPA6Q4MvoxdBZREIhuBRDpNp2jzCEPiUCLa8m0HE2EgEcua4sKL%2FrrvuPsE3TDR1nTScFpvegjXF4scin50ZF3kVwU7yOZDnXmHtzmiTg5TdojrSLKMiUeQ572RcCDZNb8c1HhievwVWTMwllrbouvxIgL6dWDwQ1LgGZQ5b9vPFc6BQqVdKUcllo%2BC85lRCydso7mgz8dOKGg2HUhTeYBCa&X-Amz-Signature=bae70c2c012d2d2d6357e213c84091090963033db547c60eb1c631b2f28f2ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDCVYIY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR%2FjNzSfW%2FCa7UlpYrEleP9GqXvVNPUZtYhzZQw7cE%2BAiEAwr8OIJAdI3HPdl8VnT958Hzso7kPrw1gF%2FOjxHKAR8AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXSpdc4nxNlbOljRircA5l7EokanyPGxc1qBHbL2Wl6sopGorrvXyXQ2PYHgTDJZesCW46M9%2F2%2B7Yv0QuuIaXzPndvWI0MU9u66ohOEWdTPNkprpbe91lFwZo1dCkjCHTxP2v2atgQoDyiQxOZVLoEumaTY9Mqz3410OIH5Q0MbyzvLn%2Fsv2no8Ka5cpXi4OQoxdZdA8e77E%2BcAe8aEZjoViOZA4W6bJPBiPrWzgzWWDavs331GEUtEIZ84pczg8Tl%2BIiAU5nnZNsHXwZ9C%2FLFuhEiJPj05LJ6rzOn6ZaQmBfBy045%2B9ZlfA7dNHkNDB6gdEDHd%2FG7VlT%2FFSj%2BcxpX58KbFkvbHsl1vcYinQj0MeLmmOxOPUNLwxHSaiRViVopDd%2Boki0homHXmxumXpk7QboqMSqkkT05XkzienJgk5BXY5aSqMjCr4%2BMWEm3QaHJyMqIKQWX3kVAy%2FnkRfm7egDjHz2mVOCDClwAAEwXa%2FKV5C2aJghL0nXE2IsXc0Rc0oVoLG%2BbLkkn7vTE%2FtFai7GvzUz7%2FOJ%2BS4U32ilXUobB95fm9GihVsxtKQ2QU9vV0asOU2NoIRiPXFQgMldDuzD4u1utLzUJJViG%2F8BTcF5Lj1CzaWGPXgx1q3kzYCiZ1uS5xhaLwt8LqMIWxlMIGOqUBHff4oPA6Q4MvoxdBZREIhuBRDpNp2jzCEPiUCLa8m0HE2EgEcua4sKL%2FrrvuPsE3TDR1nTScFpvegjXF4scin50ZF3kVwU7yOZDnXmHtzmiTg5TdojrSLKMiUeQ572RcCDZNb8c1HhievwVWTMwllrbouvxIgL6dWDwQ1LgGZQ5b9vPFc6BQqVdKUcllo%2BC85lRCydso7mgz8dOKGg2HUhTeYBCa&X-Amz-Signature=3def196d18898922567d88c7bc28ec8b1da7642954d2a1409645931e1619556f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
