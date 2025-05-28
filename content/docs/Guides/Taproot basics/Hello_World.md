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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRL7POBP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXspEbsMUrnjRopw4wfJzAxQY9QXrrGXoh6Y2awhZU0QIhAIEo7njAJoEjzWyiPliE7Kfrsc%2BA9tlSB%2BA7CaWLM6vLKv8DCHEQABoMNjM3NDIzMTgzODA1Igy9K3XzYiac%2FBw5PcUq3AMM4cU0E29KWP%2B2TGdzmsBXIyPBHbdny8eQ3ILm7XMIazzcr8Beblasvnwtc4Dhei%2BGHB4jH7rjNlFgGwFd%2BUJf%2Fdbirthmv84PTI6lqa57ZpfCc51WhVhVlS4LDhClS81RwhMWW15%2Bzufm41AGUZ5wAib9joQe2ez20O3V0rYKLqHNOhIBgL4w3iP0%2BHZ3xM%2BlSggx%2FA3kik9Pe%2BFjYWAGIDaSkxywl7XORGXyNJ7otXLYGxtsFwEW%2BWqDhCiXkPJFlcS%2FeHpOL%2BJ7o2lz2FeAtdriRpqKPV%2FNxbKOAORd3vdqEUGHQDwiHRQEh4BsgB7l0QHxhfg79CKYFp4O7%2Fjc6D5B1A0cjT789iCuoMzLwClhTBinQtyZF8tZigPkSGYmrQcRHJHareXtbwkxr%2BFjBGDc7XtrOsT7COQhyPYkLCnUfrZlXdSQtEKFJ0%2BH5nu6ktGg6tDNTOVLyJYO18jNAk803l%2Fagm6xjA4v8irkDG24pvgKcZT%2Fj9ExJoQAbjWCv3ULJboD7xhhhuOtk0raE6glAhQHEKVOuU3mbFv6b%2BmERLtpSw7knpEplYT2mvi3ed48OvXM6X%2FpZuGUlQiCFJGhdPs9ZO2LU6Det3H%2BJ3amq%2FJ0BrMtMEZ3CDD49NrBBjqkAZpJtY1lJsqnG%2B6rR9c28mZXiTg2J3ykCQPUhNDqjZru3WWkJ2vekt0b9QxiYSYBD32q3OdirlppXp2rcBGZJFYTgjkjrY2517xsug98VW4uylHFW8jwfMfNy1uTcmEmAMSS2aDqN3lek1MkKghYk8G2H%2BZl4uvWWYJEEUYCxJnuLYZJRvbG7cTDQShdVLFDO5Sg5%2BO8mskZr3MkQ9uPATCbgYWU&X-Amz-Signature=7dbb39fbb3b118a5ed3d2c1b78249707bbaaf0813f74b2309e29935e2a912d85&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRL7POBP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXspEbsMUrnjRopw4wfJzAxQY9QXrrGXoh6Y2awhZU0QIhAIEo7njAJoEjzWyiPliE7Kfrsc%2BA9tlSB%2BA7CaWLM6vLKv8DCHEQABoMNjM3NDIzMTgzODA1Igy9K3XzYiac%2FBw5PcUq3AMM4cU0E29KWP%2B2TGdzmsBXIyPBHbdny8eQ3ILm7XMIazzcr8Beblasvnwtc4Dhei%2BGHB4jH7rjNlFgGwFd%2BUJf%2Fdbirthmv84PTI6lqa57ZpfCc51WhVhVlS4LDhClS81RwhMWW15%2Bzufm41AGUZ5wAib9joQe2ez20O3V0rYKLqHNOhIBgL4w3iP0%2BHZ3xM%2BlSggx%2FA3kik9Pe%2BFjYWAGIDaSkxywl7XORGXyNJ7otXLYGxtsFwEW%2BWqDhCiXkPJFlcS%2FeHpOL%2BJ7o2lz2FeAtdriRpqKPV%2FNxbKOAORd3vdqEUGHQDwiHRQEh4BsgB7l0QHxhfg79CKYFp4O7%2Fjc6D5B1A0cjT789iCuoMzLwClhTBinQtyZF8tZigPkSGYmrQcRHJHareXtbwkxr%2BFjBGDc7XtrOsT7COQhyPYkLCnUfrZlXdSQtEKFJ0%2BH5nu6ktGg6tDNTOVLyJYO18jNAk803l%2Fagm6xjA4v8irkDG24pvgKcZT%2Fj9ExJoQAbjWCv3ULJboD7xhhhuOtk0raE6glAhQHEKVOuU3mbFv6b%2BmERLtpSw7knpEplYT2mvi3ed48OvXM6X%2FpZuGUlQiCFJGhdPs9ZO2LU6Det3H%2BJ3amq%2FJ0BrMtMEZ3CDD49NrBBjqkAZpJtY1lJsqnG%2B6rR9c28mZXiTg2J3ykCQPUhNDqjZru3WWkJ2vekt0b9QxiYSYBD32q3OdirlppXp2rcBGZJFYTgjkjrY2517xsug98VW4uylHFW8jwfMfNy1uTcmEmAMSS2aDqN3lek1MkKghYk8G2H%2BZl4uvWWYJEEUYCxJnuLYZJRvbG7cTDQShdVLFDO5Sg5%2BO8mskZr3MkQ9uPATCbgYWU&X-Amz-Signature=7876865cfeaf7cfc9930a5d98f3fce300e4ecf82164e18dd3a2ffdd059e2c2a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
