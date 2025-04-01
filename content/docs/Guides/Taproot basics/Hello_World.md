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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTJ23FJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFzE77aFoEf8h4GRZ1mmdu1yYIc3BFbFom0vGE8usIYCAiEAxvRnjK7NveZeNyMXjFsHbfz45iXJ%2F0vN0nNp4qXKlTkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0bP0fKgjNN46y1ayrcA0jJmGkc%2B2ScaiaFD7Kq9d1ibtkdz%2B2MFNlF%2BjEDy7cmYN9LvfDB3eIWR6Vzf2C3mfdiYhI5MtrU3OKlnX3rSPK6svdhbFj6qJ6oo6eFkgFwCT2%2FjtnOJU6yIVUAClAKxwhBxJ8JqYgH5DEcJ0WnchkgOawzze7dloQn7gcJ2EsPf1hL0a5Xz%2FD37yYte690a7yEZj%2BcWjDC2RyTM%2B5Yvm0MiQsZAHawByQiUmHbYLxvPeVOW1UUsIpVdbmdfWehwydCM4K7tZo0Z1SGnL9wASKeYEuaIZR7owEsNAqmwoVgw9p8NDB4yTNwQ5l88QqXXLDoKSK7o7QYyji8%2BLqnJZjyfgV7tx%2F%2FvRjSlaiL0VgKlGlma%2FkOAPZgbyvszmbxZRhn%2Bda2hU%2Bg%2FZ4MtSdG71byk4F4mFf81QuBDoK%2B8JeaoCw7ctXGG%2F3Wr7%2FQjqPkIkJNLN3uCE3EMnkwguF3ArV3bp9rMpq6Q8C1CIfnsghHmmH4GagUN9CpgSJY7EesHtW8A3gkKQEzxFZvVfQokOyNjP88LsYULzDldAZN4T%2FBl%2FhD9Vwvb%2BKdERpGyJob74szl219fY3m%2FseE%2BYfnwfJsGgaWUo1KMZZMpCvGrNqMki0P9y6nOpnprEm2MO2Dr78GOqUB%2BdH1auG9wKhch6DlChxiyaMMHGtJrtO%2ByxJpygVgnLnNmPudPQ%2FlmIbFtO5Ux%2F0U6HcLYc9oBwWJ%2Bi096xYutz2%2FZPuHBcWGhkFtjI4b%2FThxQ4Iaa76to8UTNnJ0LqzGeeYJCZuQJxKXSvL0CZqkVJSJKrkQHcbLMLNTv5inKkoc08ybsizwTFtvVFFrWtiZ%2BDjo2Sq3Ksg3ELtizL1V3RnQ2zzd&X-Amz-Signature=b3a9c5307b29624061f003f5836720622b8adf8e6569d19d71cbb6cc0446242e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTJ23FJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFzE77aFoEf8h4GRZ1mmdu1yYIc3BFbFom0vGE8usIYCAiEAxvRnjK7NveZeNyMXjFsHbfz45iXJ%2F0vN0nNp4qXKlTkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0bP0fKgjNN46y1ayrcA0jJmGkc%2B2ScaiaFD7Kq9d1ibtkdz%2B2MFNlF%2BjEDy7cmYN9LvfDB3eIWR6Vzf2C3mfdiYhI5MtrU3OKlnX3rSPK6svdhbFj6qJ6oo6eFkgFwCT2%2FjtnOJU6yIVUAClAKxwhBxJ8JqYgH5DEcJ0WnchkgOawzze7dloQn7gcJ2EsPf1hL0a5Xz%2FD37yYte690a7yEZj%2BcWjDC2RyTM%2B5Yvm0MiQsZAHawByQiUmHbYLxvPeVOW1UUsIpVdbmdfWehwydCM4K7tZo0Z1SGnL9wASKeYEuaIZR7owEsNAqmwoVgw9p8NDB4yTNwQ5l88QqXXLDoKSK7o7QYyji8%2BLqnJZjyfgV7tx%2F%2FvRjSlaiL0VgKlGlma%2FkOAPZgbyvszmbxZRhn%2Bda2hU%2Bg%2FZ4MtSdG71byk4F4mFf81QuBDoK%2B8JeaoCw7ctXGG%2F3Wr7%2FQjqPkIkJNLN3uCE3EMnkwguF3ArV3bp9rMpq6Q8C1CIfnsghHmmH4GagUN9CpgSJY7EesHtW8A3gkKQEzxFZvVfQokOyNjP88LsYULzDldAZN4T%2FBl%2FhD9Vwvb%2BKdERpGyJob74szl219fY3m%2FseE%2BYfnwfJsGgaWUo1KMZZMpCvGrNqMki0P9y6nOpnprEm2MO2Dr78GOqUB%2BdH1auG9wKhch6DlChxiyaMMHGtJrtO%2ByxJpygVgnLnNmPudPQ%2FlmIbFtO5Ux%2F0U6HcLYc9oBwWJ%2Bi096xYutz2%2FZPuHBcWGhkFtjI4b%2FThxQ4Iaa76to8UTNnJ0LqzGeeYJCZuQJxKXSvL0CZqkVJSJKrkQHcbLMLNTv5inKkoc08ybsizwTFtvVFFrWtiZ%2BDjo2Sq3Ksg3ELtizL1V3RnQ2zzd&X-Amz-Signature=ec85089fb03ea2c3c90c42e84a23aae34f24eb25b85edb112ef8729a3df36924&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
