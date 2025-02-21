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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VJLIOJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ9es6YojugmesjOd%2BCdNfSZ8OPAHTl7lVXg5egMvFUgIhAPH6B43yp0I%2FwxKtsHTA0EoWprn6ORjGiNoiKMv21xfnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FldrsWdq6hOlPeQ8q3AO%2BrrVRlFVcMvuaA0tBD7YEidZadIRmEY7hjGdCveQfzfR%2BGoBUJlAFkgAZrvnCRAZaYsrRWG29Rh5MSQeRkbmoUgYaDiOsT8Ma0%2FrGFj%2FF5RrYgWbXMOkUkCRV1oS%2Bov6N3hRJRE7TVilX8%2FkSYksiKPW5WuGPssITwSHmh2zUWwj2%2FC9VXJRnWMfaqP0UVscxAquUmq2ES8tywQOjTmA4QeA8JcCYZaKKo6anIu6hnzhF77l9XgffCcfR1wx2YWcwUsF58OdIT4jfeb5oPTEl0Tg7f%2F2lDN3HOtVrdpEJV1qCCrwgwH1RJ%2FjDMM2FV54RGBOyGvnUelANk4Qb0vtgxbkvSUIhbDGUr7JMPeJ6Eq8kLohEmRqpEEeq74OBlkz7gIn1P7uSNPpAYdiuCpeYHbl3kSWBCeQuJ19t2IcOXFYsQ84UDDNc1hASpg2jSdM6x4JS61BDipOWEyFk766ZSm80EhmzY%2Bf%2FKAzSeEvb0ngcoE%2BuE45vOR7dILWx%2BhicnNS2LiJ%2FPq0kVUxp2RgbC788Yk5RRNQZ6Ha3LGNNPKS0g6AVYxIu4MQCV8%2FdSQwxW9kF%2F58b2MStgYWz1lwncSJl4F0ePF6RlL2yC4jFn2NBS%2FXMaG0rvW6IrTCygOO9BjqkAWHDxepm%2Fd3rMHKI9MI51gpL1epJdwSVzSP49tVF1WXWAh64KBigmmAwQoI9S1uIhTv3I0zfEJhCPgu8rCzpFECjbSndjv7%2F6lbUZwOk4BuR9LQWvMRbt3OyRKO3qXhDPZGJ8joyXmjreecDl10X20eV58S%2BY6H%2B%2BpYVrkyVoCv8ryb739C6ORZ6%2FLwkUB7J58csnqvAnFfyMApgXswFp5XsW7GP&X-Amz-Signature=8d68aa0ab2d60be5866843910d9d2ac04a295afe02f43e0f49ff341e784ff1f3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VJLIOJ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ9es6YojugmesjOd%2BCdNfSZ8OPAHTl7lVXg5egMvFUgIhAPH6B43yp0I%2FwxKtsHTA0EoWprn6ORjGiNoiKMv21xfnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FldrsWdq6hOlPeQ8q3AO%2BrrVRlFVcMvuaA0tBD7YEidZadIRmEY7hjGdCveQfzfR%2BGoBUJlAFkgAZrvnCRAZaYsrRWG29Rh5MSQeRkbmoUgYaDiOsT8Ma0%2FrGFj%2FF5RrYgWbXMOkUkCRV1oS%2Bov6N3hRJRE7TVilX8%2FkSYksiKPW5WuGPssITwSHmh2zUWwj2%2FC9VXJRnWMfaqP0UVscxAquUmq2ES8tywQOjTmA4QeA8JcCYZaKKo6anIu6hnzhF77l9XgffCcfR1wx2YWcwUsF58OdIT4jfeb5oPTEl0Tg7f%2F2lDN3HOtVrdpEJV1qCCrwgwH1RJ%2FjDMM2FV54RGBOyGvnUelANk4Qb0vtgxbkvSUIhbDGUr7JMPeJ6Eq8kLohEmRqpEEeq74OBlkz7gIn1P7uSNPpAYdiuCpeYHbl3kSWBCeQuJ19t2IcOXFYsQ84UDDNc1hASpg2jSdM6x4JS61BDipOWEyFk766ZSm80EhmzY%2Bf%2FKAzSeEvb0ngcoE%2BuE45vOR7dILWx%2BhicnNS2LiJ%2FPq0kVUxp2RgbC788Yk5RRNQZ6Ha3LGNNPKS0g6AVYxIu4MQCV8%2FdSQwxW9kF%2F58b2MStgYWz1lwncSJl4F0ePF6RlL2yC4jFn2NBS%2FXMaG0rvW6IrTCygOO9BjqkAWHDxepm%2Fd3rMHKI9MI51gpL1epJdwSVzSP49tVF1WXWAh64KBigmmAwQoI9S1uIhTv3I0zfEJhCPgu8rCzpFECjbSndjv7%2F6lbUZwOk4BuR9LQWvMRbt3OyRKO3qXhDPZGJ8joyXmjreecDl10X20eV58S%2BY6H%2B%2BpYVrkyVoCv8ryb739C6ORZ6%2FLwkUB7J58csnqvAnFfyMApgXswFp5XsW7GP&X-Amz-Signature=fcaaaef245e408c130a32bca0dec5ddeb984a2568192842c6a32dd26a0abf386&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
