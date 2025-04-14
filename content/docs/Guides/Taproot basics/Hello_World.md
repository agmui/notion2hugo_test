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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EAQKYY6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCANiMtDbdmZkCPg4GPxyDg2IN3Xt4nIxwLxkxyXFpKRwIhAPub6jFTp%2FXQbhWzhoCNvJVzvZ3GF4yqWE0Qq5DKCv7XKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNuaXfTS3JqZfelZQq3AN6lNs0XE0jkISkqQbtu08Lpim0FJGxNiLc5ElitIWbgj2Xzued8TuCNeFJQx84kJGTtYmFoF7MWlvFdk0nfMy9iaYnrkYyFeznd6c7EkTYawdb0cZl7OdYJjA5Pr3WQ0lFHGU%2BNYtLbpQhX7IBN6%2ByV6dKbWWVGaVIw9Azpx6mix0D7wVLmFnUG3s6OVTbLkP0dUmyE13t0sMz588anChX9J%2Ff2tIIKdHgv2nbJoynbM%2F%2Blz%2FyJ5fUe7R%2BQxJGn06hY6AorSpsTpsH4CKEuLdquvLMjFRXBgSSZCvniGH0uMMNP%2Bja2flankq4ebuypPFSPyf2JTzGdGhnK3YPeclb1%2F7NoA4etCWxLaU3PZm59MC7i8f7eK3NFy2cTLmOD9qvdJ7YM73F8HYbETaziw8fWcJdzuwmT9roBvIVtiVH1DV1iJRrcfm2SeEfEDO2%2BUQfkHO407dXMWUhsVprdysqSzPnx2f0UJaI38SP7mqUSk4yL8SS0FmyBiXLx7twYNdZPRsAl2dGQWvMcCtM6ugXcvMf1hUMaYr%2Fk0xWXZyIjogSMY7wpqGGsmVV8jDO6%2FovyZ8pXlrhs2q%2FTdpUfpgpbjVJe4kRi1XOeg6bQ1Rf2qOqEnNouQ7QbUG40TCSyfK%2FBjqkAaaeKjDdE%2FKkpKoNIoLXGNCqae6HCtNBfoA3m1FR3zFaxkL0bp5ZHR2GbMkJZr3a5eC8v40an5HLXTG3m6TQHzv8R5PMWIIU7%2FdPm7rWCpdhwpggRA2Ko3F9pxASsbLEaNC2kUGSOGG4Boyfdyv1eUFUmM0ZFdXO6%2BID9%2BaO2TdvpM6RfQYHeTxLj1VymT%2BqbT%2BtuL5vXYo941Bg80bXW%2FusaQTk&X-Amz-Signature=3aeb8e2dbbd20191c8b4375db5dddd4fa2cf4ede58941f65251b2ed5a3f91b18&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EAQKYY6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCANiMtDbdmZkCPg4GPxyDg2IN3Xt4nIxwLxkxyXFpKRwIhAPub6jFTp%2FXQbhWzhoCNvJVzvZ3GF4yqWE0Qq5DKCv7XKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNuaXfTS3JqZfelZQq3AN6lNs0XE0jkISkqQbtu08Lpim0FJGxNiLc5ElitIWbgj2Xzued8TuCNeFJQx84kJGTtYmFoF7MWlvFdk0nfMy9iaYnrkYyFeznd6c7EkTYawdb0cZl7OdYJjA5Pr3WQ0lFHGU%2BNYtLbpQhX7IBN6%2ByV6dKbWWVGaVIw9Azpx6mix0D7wVLmFnUG3s6OVTbLkP0dUmyE13t0sMz588anChX9J%2Ff2tIIKdHgv2nbJoynbM%2F%2Blz%2FyJ5fUe7R%2BQxJGn06hY6AorSpsTpsH4CKEuLdquvLMjFRXBgSSZCvniGH0uMMNP%2Bja2flankq4ebuypPFSPyf2JTzGdGhnK3YPeclb1%2F7NoA4etCWxLaU3PZm59MC7i8f7eK3NFy2cTLmOD9qvdJ7YM73F8HYbETaziw8fWcJdzuwmT9roBvIVtiVH1DV1iJRrcfm2SeEfEDO2%2BUQfkHO407dXMWUhsVprdysqSzPnx2f0UJaI38SP7mqUSk4yL8SS0FmyBiXLx7twYNdZPRsAl2dGQWvMcCtM6ugXcvMf1hUMaYr%2Fk0xWXZyIjogSMY7wpqGGsmVV8jDO6%2FovyZ8pXlrhs2q%2FTdpUfpgpbjVJe4kRi1XOeg6bQ1Rf2qOqEnNouQ7QbUG40TCSyfK%2FBjqkAaaeKjDdE%2FKkpKoNIoLXGNCqae6HCtNBfoA3m1FR3zFaxkL0bp5ZHR2GbMkJZr3a5eC8v40an5HLXTG3m6TQHzv8R5PMWIIU7%2FdPm7rWCpdhwpggRA2Ko3F9pxASsbLEaNC2kUGSOGG4Boyfdyv1eUFUmM0ZFdXO6%2BID9%2BaO2TdvpM6RfQYHeTxLj1VymT%2BqbT%2BtuL5vXYo941Bg80bXW%2FusaQTk&X-Amz-Signature=20b992741333056bb09aa14a642ab6df4b5f391a16de1fead6392122d4d7cb3d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
