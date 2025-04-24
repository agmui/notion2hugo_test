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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEQH5SE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0dG0Kn7xbiOqEug%2F%2FP%2BDPQ2isxDit5K2BYB4%2F358vHAiEAkdvCAZYmPSufxfuk6U%2F1PpvXPiQgf%2FXEh4dCYxhhN8sqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeZxpbf1GfsA5IwISrcAyht5yE%2FZj8tHv%2Fdo%2Fy2nSmK66Co3FHK38vK5lI9vdTqGWulWOxd58ziyj0Haj4TMt21J%2FeENvO%2FB0IvoHPxC1paMRt%2BYgGQvuXB3KnNLHEUYtgYOe3btqR4R5QZ4CrCjdJgOjt36DPPk4n%2F2cIhXolZOmXI%2BAzRe44KfDOn2RN7TaKJ4isvyZ3frXD%2FqSLJGh8Hv6JgYPQ411q9IVb1eSc2gt8YgMNAo%2FqGGqSqSn6iPNA0cI6%2Bo%2FBag%2F77Wz1adsJQl6SsvNZhGkA87999L6mzej2tZRD7vVADTvHmBKdCl%2BZLOkfQuL9gWf4reXWOMB7Im9Azcs%2BiMoeGDHnD4hUJHQKvHkDdLmA2HkX8MJIz4eMUyd44U8RJuHhFHUsNpsadJf6e3yedcgIbzuKZ8fHkd6Mz%2Bc0ERjgkQfEGtr1AiddDZnI42638REAZVhkXXe1SiiqKecliEfVPl4YJWa2oLhU%2FQ4BdPG8IQW3rUT%2BcJSvqdfFgstM0ry7r8d%2BXpry7ANey8ooWJe%2BFYOa0rjYEqbFR81BY1wFH91Q6Tn%2ByE6ErZMU59TMQLww0IcZshF%2Bcx1UkUQxC0umk3LufCOONUsQwbmHszvYbkhnj9e7Hca7G4rRmtwCKqlxDMLexpsAGOqUBtmvS91LnPguoYh6NPlXV423arrTuyw9i7lqq6oq6Ng3mqIp69hFgWwj6cRy8RVN%2BIkOmTtBQkOMBQtxqBVsgHkkjdxxwZpkof7cGdgH7%2BlrDXrXAg%2FU0MEfQW5AsvTo91qCZznG%2BiIO4VISf2FyVMg4t%2BFWCJu9ZnCAZjf2NKFKrRBmaUJx2e4oNnidl6BhWOdfxxQD6ieJ9f3WqXouP%2B04lb9SJ&X-Amz-Signature=3ac777c3f1337d5db1f3eafe465819b5eb3ef04b24d8552bc429cc2d27b5361c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEQH5SE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0dG0Kn7xbiOqEug%2F%2FP%2BDPQ2isxDit5K2BYB4%2F358vHAiEAkdvCAZYmPSufxfuk6U%2F1PpvXPiQgf%2FXEh4dCYxhhN8sqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeZxpbf1GfsA5IwISrcAyht5yE%2FZj8tHv%2Fdo%2Fy2nSmK66Co3FHK38vK5lI9vdTqGWulWOxd58ziyj0Haj4TMt21J%2FeENvO%2FB0IvoHPxC1paMRt%2BYgGQvuXB3KnNLHEUYtgYOe3btqR4R5QZ4CrCjdJgOjt36DPPk4n%2F2cIhXolZOmXI%2BAzRe44KfDOn2RN7TaKJ4isvyZ3frXD%2FqSLJGh8Hv6JgYPQ411q9IVb1eSc2gt8YgMNAo%2FqGGqSqSn6iPNA0cI6%2Bo%2FBag%2F77Wz1adsJQl6SsvNZhGkA87999L6mzej2tZRD7vVADTvHmBKdCl%2BZLOkfQuL9gWf4reXWOMB7Im9Azcs%2BiMoeGDHnD4hUJHQKvHkDdLmA2HkX8MJIz4eMUyd44U8RJuHhFHUsNpsadJf6e3yedcgIbzuKZ8fHkd6Mz%2Bc0ERjgkQfEGtr1AiddDZnI42638REAZVhkXXe1SiiqKecliEfVPl4YJWa2oLhU%2FQ4BdPG8IQW3rUT%2BcJSvqdfFgstM0ry7r8d%2BXpry7ANey8ooWJe%2BFYOa0rjYEqbFR81BY1wFH91Q6Tn%2ByE6ErZMU59TMQLww0IcZshF%2Bcx1UkUQxC0umk3LufCOONUsQwbmHszvYbkhnj9e7Hca7G4rRmtwCKqlxDMLexpsAGOqUBtmvS91LnPguoYh6NPlXV423arrTuyw9i7lqq6oq6Ng3mqIp69hFgWwj6cRy8RVN%2BIkOmTtBQkOMBQtxqBVsgHkkjdxxwZpkof7cGdgH7%2BlrDXrXAg%2FU0MEfQW5AsvTo91qCZznG%2BiIO4VISf2FyVMg4t%2BFWCJu9ZnCAZjf2NKFKrRBmaUJx2e4oNnidl6BhWOdfxxQD6ieJ9f3WqXouP%2B04lb9SJ&X-Amz-Signature=9adfb9e52ec17124990d795086e38783cbb09af5bfbcd664cfaaa2b0f6eee1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
