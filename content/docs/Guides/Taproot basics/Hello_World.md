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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAR5TYRR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8vHHvKIe0HVfN8GWEQHwGeWNjMDzdu0LkmiLW%2FrCZ2AIgVZwcRGxVhRT0YMNC%2F7oMzdHP845fjJSH9CjZ9psKBKkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL8KBmZz1OPVh8SnircA8gG3snHg1UUeMXWaLpLiXOX2%2F6E%2BwePdFAIslaclB%2BP07VlrsRk67hyS6FL7Sven2aKhrXV5DCntx1k7QQXPn1se7KcRZQqqaiIbgb6GXCAD%2BaEuGSqAKajwmWrDp%2BGZJVAzbDVWiLgzCdtaqOI49Yynii74yYgxFzqXiF3UPtWYSUh%2Bnu5%2BiaG1dkAc0kIvWHWk0RKrNoBlaG3OK26a68fXz2DTctvQFxHEum2HUbfcaSbi0%2FUHQTwxMss0P75qTDW8b5PacnjkUMAVu8Lvbbx5b0q0v47%2BtgJLxBT16wsqCzZ%2FsOTCEnFPoL66yn0HSLQP1dbLZ6fftd2%2F0K%2FqGci%2BfYhsIRj9rjPxolHEwZ9L4Il4r%2BOGfaATCy6jeUcXwB438eUnmDQ7g8GVsvSMLeo2yKWWC5uGjd0HxX5SdbqULh21XY2K032zZZ6HAOZvQlGLGFyvrZKAS4DbrsLRxlFm6xxyZxLXMPAfC%2FEub0EFiH7QB9WbhCf0Bw5KmfFCtDKZHpEtV6goiBLy%2Bwhn8xum%2Fqmhuf0lJFPXu%2B7jozSf2dbRFBju8OXpB12JEPCyxShu2BLBP3QOoztZjduWhGD%2B8rqJpNHD6y78%2B6AIDjr9fqFuWbQxL7ANhurMNLF7MMGOqUBjcS2efSgTZ6nA9DB9X%2BohCdAw%2FZlFuyUcCgOjmz20UL2Ayz1Bu7XU6cxMNjoHUYhjuCXskWWtVIfAXW4wVIeK6lfBzyPKzq9jurGeEcw249ScW5IC19pAur4U2E9Zcd7T5fCL7gOKGjUh3Mm3KRWh7eBc%2Fo8%2FegvkqB7GqSHmnLZX5EP9GDUyY%2F92Fl9nNaK%2BI4YSgaE8ZvhI7Pk2YkWSKvbgVZ7&X-Amz-Signature=101f69ed466ea6c70487828407c76ef90fd081f78daa866ae86d4cd21912d8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAR5TYRR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8vHHvKIe0HVfN8GWEQHwGeWNjMDzdu0LkmiLW%2FrCZ2AIgVZwcRGxVhRT0YMNC%2F7oMzdHP845fjJSH9CjZ9psKBKkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL8KBmZz1OPVh8SnircA8gG3snHg1UUeMXWaLpLiXOX2%2F6E%2BwePdFAIslaclB%2BP07VlrsRk67hyS6FL7Sven2aKhrXV5DCntx1k7QQXPn1se7KcRZQqqaiIbgb6GXCAD%2BaEuGSqAKajwmWrDp%2BGZJVAzbDVWiLgzCdtaqOI49Yynii74yYgxFzqXiF3UPtWYSUh%2Bnu5%2BiaG1dkAc0kIvWHWk0RKrNoBlaG3OK26a68fXz2DTctvQFxHEum2HUbfcaSbi0%2FUHQTwxMss0P75qTDW8b5PacnjkUMAVu8Lvbbx5b0q0v47%2BtgJLxBT16wsqCzZ%2FsOTCEnFPoL66yn0HSLQP1dbLZ6fftd2%2F0K%2FqGci%2BfYhsIRj9rjPxolHEwZ9L4Il4r%2BOGfaATCy6jeUcXwB438eUnmDQ7g8GVsvSMLeo2yKWWC5uGjd0HxX5SdbqULh21XY2K032zZZ6HAOZvQlGLGFyvrZKAS4DbrsLRxlFm6xxyZxLXMPAfC%2FEub0EFiH7QB9WbhCf0Bw5KmfFCtDKZHpEtV6goiBLy%2Bwhn8xum%2Fqmhuf0lJFPXu%2B7jozSf2dbRFBju8OXpB12JEPCyxShu2BLBP3QOoztZjduWhGD%2B8rqJpNHD6y78%2B6AIDjr9fqFuWbQxL7ANhurMNLF7MMGOqUBjcS2efSgTZ6nA9DB9X%2BohCdAw%2FZlFuyUcCgOjmz20UL2Ayz1Bu7XU6cxMNjoHUYhjuCXskWWtVIfAXW4wVIeK6lfBzyPKzq9jurGeEcw249ScW5IC19pAur4U2E9Zcd7T5fCL7gOKGjUh3Mm3KRWh7eBc%2Fo8%2FegvkqB7GqSHmnLZX5EP9GDUyY%2F92Fl9nNaK%2BI4YSgaE8ZvhI7Pk2YkWSKvbgVZ7&X-Amz-Signature=55ff192ec954c60368031b953c72f0008669363d6bc02c663ea641ca90fd1c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
