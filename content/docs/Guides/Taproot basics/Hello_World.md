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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPTKLMP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDObwcgRP63moYi8Iq8srxUyPx6QzCPfxE4BTI5p9e1ugIgdYX6CVk3lrOihQyA2wYHHQyPV49KZTFjs4%2BU6xpXUoUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhTnFy%2FiIhL2PAsKyrcAy4BgF6IprIrE%2Fb9uBCIv3hFkhji9pcRJ8BYws3PKTTGagqFHyMZ0hjsVpBN2OcdgHxoyXY3O%2FMIxql0gVKprOpR%2FV1gnNfz9FzL6OvbS54llmOEI3pMkRmJdD1%2B3mzY2dRUvGF5YjY9P%2FFh5QnYkdlwQwxFJ1peg1Ro%2FAft%2BKGMGCgJbfdq2ZTgap6CDUxnFc0Z%2BMWBt0mK6%2FjZ8INdQn7YgKXmaeqHPdyExhlctItay%2B%2BomifGWoDf55pmSV79G%2BHrro8x79HA2eMftod8vtKpvo2UDmA8%2F0jYKrbXwdIW5dS%2BpQYm1Ep4dyyLUmuCelzBFqnIwSUeuELPNKbZbR3ArGyOlvzhgZLdpN4MH%2FASbfeIMsupfs9eCvJIkoi8gTWoRShScMQvmfFjRqlSxlV0ZcyI1Zkf%2BmbQLpvqONPavb6cTg4iXPruiKNwC2xhcAAPwLJ4acI%2BT4N8pdfbkYheyXOFXKErkQNKxoRI2C%2F0%2FCSPIV2NhCcrJi24nUNAnlzbXPhnBpAJ9XDNTZXyMmyj1YBC%2FKJjZF9zAdGpN03iJhbmA2bNpv5A0rPI2%2BZUOz1MTFf4aBCvLXG5z8fB%2BJi9gfFB83o5mFnjsMugk4VQsYbpd0tThh2UlRmjMPWdlMAGOqUBqbCkqImJizLq%2F%2Fs9yDXQj9oGNRwIS8kekBunFLK0FB6WLW6FAt1sE50Sfe4gRa7rTJBaPr%2F4TxNVSRdTzlkvSNjwH2x4utqhRKhQJNI%2BymuBNGKiRpRaroEmCa1gNMQ7Gljbv4V1jm4I%2F8eLoxKgMi9y1Lk6wnznCpEUeDrSNw7J8A0AxsRHsQTHswNrRkXns7b0nRqa10V1fwTKL7qss26lPwRT&X-Amz-Signature=7309741e23771ea6555bf1148c77433a86f7bab6d7b96496a8e4e8c358eda97b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPTKLMP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDObwcgRP63moYi8Iq8srxUyPx6QzCPfxE4BTI5p9e1ugIgdYX6CVk3lrOihQyA2wYHHQyPV49KZTFjs4%2BU6xpXUoUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhTnFy%2FiIhL2PAsKyrcAy4BgF6IprIrE%2Fb9uBCIv3hFkhji9pcRJ8BYws3PKTTGagqFHyMZ0hjsVpBN2OcdgHxoyXY3O%2FMIxql0gVKprOpR%2FV1gnNfz9FzL6OvbS54llmOEI3pMkRmJdD1%2B3mzY2dRUvGF5YjY9P%2FFh5QnYkdlwQwxFJ1peg1Ro%2FAft%2BKGMGCgJbfdq2ZTgap6CDUxnFc0Z%2BMWBt0mK6%2FjZ8INdQn7YgKXmaeqHPdyExhlctItay%2B%2BomifGWoDf55pmSV79G%2BHrro8x79HA2eMftod8vtKpvo2UDmA8%2F0jYKrbXwdIW5dS%2BpQYm1Ep4dyyLUmuCelzBFqnIwSUeuELPNKbZbR3ArGyOlvzhgZLdpN4MH%2FASbfeIMsupfs9eCvJIkoi8gTWoRShScMQvmfFjRqlSxlV0ZcyI1Zkf%2BmbQLpvqONPavb6cTg4iXPruiKNwC2xhcAAPwLJ4acI%2BT4N8pdfbkYheyXOFXKErkQNKxoRI2C%2F0%2FCSPIV2NhCcrJi24nUNAnlzbXPhnBpAJ9XDNTZXyMmyj1YBC%2FKJjZF9zAdGpN03iJhbmA2bNpv5A0rPI2%2BZUOz1MTFf4aBCvLXG5z8fB%2BJi9gfFB83o5mFnjsMugk4VQsYbpd0tThh2UlRmjMPWdlMAGOqUBqbCkqImJizLq%2F%2Fs9yDXQj9oGNRwIS8kekBunFLK0FB6WLW6FAt1sE50Sfe4gRa7rTJBaPr%2F4TxNVSRdTzlkvSNjwH2x4utqhRKhQJNI%2BymuBNGKiRpRaroEmCa1gNMQ7Gljbv4V1jm4I%2F8eLoxKgMi9y1Lk6wnznCpEUeDrSNw7J8A0AxsRHsQTHswNrRkXns7b0nRqa10V1fwTKL7qss26lPwRT&X-Amz-Signature=7f8e1fd775993009b9666ac8e71018ab7aa79fdbdbd7979b20b086168074e156&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
