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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNG6JYU6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuJhCjX5xqL8wDIwpcTQovYTr3i%2BXxLFxSE46qsj5jQAiEA%2FFOeRuE6dVeJAnS2U82aZPCeiXOdBHp60olFlTW0CAgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDL98xsRsHpCkAOS2zircA3j8zBHrSmzH5FRU%2F9SBQR%2F1X%2FbN%2B60BIyQE%2F5RYQCq9Tw%2FqHQlM8T5j7ZIcLkftotPFj7zC7YiFpkmNCzWX8AuLt2%2BP%2FKImqPuqd%2FW8EoJ4QXN2jb68Rt85QOCRJKxDzh%2FkIiB0S2Nng0xiHMv3XhdsxBnkOLswuXk%2FPGlXN2wnAZmmDJymDOi7BR3CYNvIu3msHUdEizLR7zWC63SEwhxpm1vmmpaUCvUMNjVWIcFxVC%2FMUoibiDlaN3SkQlOoiDJQb0awa8i2oMAAhBeoNu5UgI89HDr%2BUCPKdx6oTRSIeUCRHkoX3iX7rwawC8DUyMEC349YJeljzIbyiznfXuUAefzjBmxNVO%2B5qepZOOc2pyX%2B4mdjwh2RNeevewHNI5jnFERPHHJc2xnSeNvMPXaaLxW7Ruj0BoAIHDA5wL2LM%2BVpcHAVjDjhmGbO5U0c%2BThBC0N9bWl5bMY11q73Yv2%2FJzHrfwhUUdaAxfzMgpPKWS%2FfLkrJxZAGK5gvv62B59bcQlBeGta3BRG0cwfzACwFR1N8ELkKWZN7e3ytWx3b78%2FnPS1pFIHDk%2F3p8VzVhIMkIQveVvKYu%2BWK0iAwypzPwaeeeZaOLU%2B3ikdbs5gMCL%2BVJn1dP2CySDqXMOrW870GOqUBbZ9SX%2Fqx6LLAsdY2je9tK4HZK1dHNzYwAQdzRA%2BUyCYobcoXqLdRNHPiAsPhFwqV50Mf5O3V%2F%2FmbAc70ZQhT7BMJ6XKbCpAnk40egoa9FCIxjrD45wXXFdv3klfc%2BtUFwvDSHAiTbjLM3H4GfsbH%2FW1wGfgkNa63ATmZnSn8zGg7LlLEe2eJt9NUKKU4rXE6yXCOvXbKnLPO%2FZ4u2IOi8Ip33qZ6&X-Amz-Signature=2e6d89542e06e332c0848f687d32e9e81a92b75823b6c8768ef5270af258cebf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNG6JYU6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuJhCjX5xqL8wDIwpcTQovYTr3i%2BXxLFxSE46qsj5jQAiEA%2FFOeRuE6dVeJAnS2U82aZPCeiXOdBHp60olFlTW0CAgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDL98xsRsHpCkAOS2zircA3j8zBHrSmzH5FRU%2F9SBQR%2F1X%2FbN%2B60BIyQE%2F5RYQCq9Tw%2FqHQlM8T5j7ZIcLkftotPFj7zC7YiFpkmNCzWX8AuLt2%2BP%2FKImqPuqd%2FW8EoJ4QXN2jb68Rt85QOCRJKxDzh%2FkIiB0S2Nng0xiHMv3XhdsxBnkOLswuXk%2FPGlXN2wnAZmmDJymDOi7BR3CYNvIu3msHUdEizLR7zWC63SEwhxpm1vmmpaUCvUMNjVWIcFxVC%2FMUoibiDlaN3SkQlOoiDJQb0awa8i2oMAAhBeoNu5UgI89HDr%2BUCPKdx6oTRSIeUCRHkoX3iX7rwawC8DUyMEC349YJeljzIbyiznfXuUAefzjBmxNVO%2B5qepZOOc2pyX%2B4mdjwh2RNeevewHNI5jnFERPHHJc2xnSeNvMPXaaLxW7Ruj0BoAIHDA5wL2LM%2BVpcHAVjDjhmGbO5U0c%2BThBC0N9bWl5bMY11q73Yv2%2FJzHrfwhUUdaAxfzMgpPKWS%2FfLkrJxZAGK5gvv62B59bcQlBeGta3BRG0cwfzACwFR1N8ELkKWZN7e3ytWx3b78%2FnPS1pFIHDk%2F3p8VzVhIMkIQveVvKYu%2BWK0iAwypzPwaeeeZaOLU%2B3ikdbs5gMCL%2BVJn1dP2CySDqXMOrW870GOqUBbZ9SX%2Fqx6LLAsdY2je9tK4HZK1dHNzYwAQdzRA%2BUyCYobcoXqLdRNHPiAsPhFwqV50Mf5O3V%2F%2FmbAc70ZQhT7BMJ6XKbCpAnk40egoa9FCIxjrD45wXXFdv3klfc%2BtUFwvDSHAiTbjLM3H4GfsbH%2FW1wGfgkNa63ATmZnSn8zGg7LlLEe2eJt9NUKKU4rXE6yXCOvXbKnLPO%2FZ4u2IOi8Ip33qZ6&X-Amz-Signature=d60abef7a64d6fd502755a64559a6b6ab2745d5395011c05ee3166e6275e53c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
